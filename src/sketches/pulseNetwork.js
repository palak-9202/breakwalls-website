// p5.js instance-mode sketch — drop into any React component via:
//   const sketch = new p5(pulseSketch, mountElement)
//   return () => sketch.remove()   // cleanup

export default function pulseSketch(p) {

  // ── Config (same values as pulse_network.html) ────────────────────────────
  const CFG = {
    nodeCount:      30,
    minNodeDist:    72,
    maxEdgeDist:    500,
    maxConnections: 5,

    pulseSpeed:     0.040,
    pulseSpeedVar:  0.010,
    spreadFraction: 0.30,
    nodeCooldownMs: 1600,

    curvature:      0.4,

    trailFade:  20,
    edgeAlpha:  10,

    trailLen:   1,
    trailSteps: 5,

    pulseGlow: [
      { r: 20, a:  5 },
      { r: 8, a: 8 },
      { r: 5, a: 13 },
      { r:  2, a: 21 },
    ],
    pulseR: 150, pulseG: 150, pulseB: 200,

    nodeGlow: [
      { r: 14, a:  4 },
      { r: 5, a: 11 },
      { r:  2, a: 30 },
    ],
    nodeIdleR: 20,  nodeIdleG: 150,  nodeIdleB: 105,
    nodeFireR: 105, nodeFireG: 250, nodeFireB: 200,

    seedCount:      1,
    minAlivePulses: 1,
    reseedInterval: 90,

    // Zoom in so placement boundaries are off-screen (1.0 = no zoom)
    zoom: 1.3,
  };

  // ── Node ──────────────────────────────────────────────────────────────────
  class Node {
    constructor(id, x, y) {
      this.id   = id;
      this.x    = x;
      this.y    = y;
      this.conn = [];            // [{ neighbor, edge, forward }]
      this.lastFired = -Infinity;
      this.glow = 0;
    }

    fire(now) {
      if (now - this.lastFired < CFG.nodeCooldownMs) return [];
      this.lastFired = now;
      this.glow = 1.0;
      let count  = Math.max(1, Math.round(this.conn.length * CFG.spreadFraction));
      let chosen = fyShuffle([...this.conn]).slice(0, count);
      return chosen.map(c => new Pulse(c.edge, c.forward));
    }
  }

  // ── Edge ──────────────────────────────────────────────────────────────────
  class Edge {
    constructor(a, b) {
      this.a = a;
      this.b = b;
      let dx = b.x - a.x, dy = b.y - a.y;
      let len = Math.hypot(dx, dy);
      let px = -dy / len, py = dx / len;
      let sc = CFG.curvature * len;
      let o1 = (Math.random() * 2 - 1) * sc;
      let o2 = (Math.random() * 2 - 1) * sc;
      this.cp1 = { x: a.x + dx * 0.33 + px * o1, y: a.y + dy * 0.33 + py * o1 };
      this.cp2 = { x: a.x + dx * 0.67 + px * o2, y: a.y + dy * 0.67 + py * o2 };
    }

    pointAt(t, forward) {
      let [P0, P1, P2, P3] = forward
        ? [this.a, this.cp1, this.cp2, this.b]
        : [this.b, this.cp2, this.cp1, this.a];
      let mt = 1 - t;
      return {
        x: mt*mt*mt*P0.x + 3*mt*mt*t*P1.x + 3*mt*t*t*P2.x + t*t*t*P3.x,
        y: mt*mt*mt*P0.y + 3*mt*mt*t*P1.y + 3*mt*t*t*P2.y + t*t*t*P3.y,
      };
    }

    draw() {
      p.stroke(CFG.nodeIdleR, CFG.nodeIdleG, CFG.nodeIdleB, CFG.edgeAlpha);
      p.strokeWeight(0.7);
      p.noFill();
      p.bezier(
        this.a.x, this.a.y,
        this.cp1.x, this.cp1.y,
        this.cp2.x, this.cp2.y,
        this.b.x, this.b.y
      );
    }
  }

  // ── Pulse ─────────────────────────────────────────────────────────────────
  class Pulse {
    constructor(edge, forward) {
      this.edge    = edge;
      this.forward = forward;
      this.t       = 0;
      this.done    = false;
      this.speed   = CFG.pulseSpeed + (Math.random() * 2 - 1) * CFG.pulseSpeedVar;
    }

    target() { return this.forward ? this.edge.b : this.edge.a; }

    update() {
      this.t = Math.min(1, this.t + this.speed);
      if (this.t >= 1) this.done = true;
    }

    draw() {
      p.noStroke();
      for (let i = 0; i <= CFG.trailSteps; i++) {
        let frac = i / CFG.trailSteps;
        let tt   = Math.max(0, this.t - CFG.trailLen * (1 - frac));
        let pos  = this.edge.pointAt(tt, this.forward);
        for (let g of CFG.pulseGlow) {
          p.fill(CFG.pulseR, CFG.pulseG, CFG.pulseB, g.a * frac);
          p.ellipse(pos.x, pos.y, g.r * (0.15 + frac * 0.85));
        }
      }
      let head = this.edge.pointAt(this.t, this.forward);
      p.fill(240, 250, 255, 235);
      p.ellipse(head.x, head.y, 3.5);
    }
  }

  // ── Helpers ───────────────────────────────────────────────────────────────
  function fyShuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // ── State ─────────────────────────────────────────────────────────────────
  let nodes  = [];
  let edges  = [];
  let pulses = [];

  function buildGraph() {
    nodes  = [];
    edges  = [];
    pulses = [];
    let id = 0, attempts = 0;
    while (nodes.length < CFG.nodeCount && attempts < CFG.nodeCount * 20) {
      attempts++;
      let x  = p.random(60, p.width  - 60);
      let y  = p.random(60, p.height - 60);
      let ok = nodes.every(n => Math.hypot(x - n.x, y - n.y) >= CFG.minNodeDist);
      if (ok) nodes.push(new Node(id++, x, y));
    }
    for (let i = 0; i < nodes.length; i++) {
      let ni = nodes[i];
      let candidates = nodes
        .map((n, j) => ({ n, j, d: Math.hypot(ni.x - n.x, ni.y - n.y) }))
        .filter(({ j, d }) => j !== i && d <= CFG.maxEdgeDist)
        .sort((a, b) => a.d - b.d);
      for (let { n: nj } of candidates) {
        if (ni.conn.length >= CFG.maxConnections) break;
        if (nj.conn.length >= CFG.maxConnections) continue;
        if (ni.conn.some(c => c.neighbor === nj))  continue;
        let e = new Edge(ni, nj);
        edges.push(e);
        ni.conn.push({ neighbor: nj, edge: e, forward: true  });
        nj.conn.push({ neighbor: ni, edge: e, forward: false });
      }
    }
  }

  function seedPulses() {
    let now  = performance.now();
    let pool = nodes.filter(n => n.conn.length > 0);
    if (!pool.length) return;
    fyShuffle(pool).slice(0, CFG.seedCount).forEach(n => {
      pulses.push(...n.fire(now));
    });
  }

  // ── p5 lifecycle ──────────────────────────────────────────────────────────
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.RGB, 255, 255, 255, 255);
    buildGraph();
    seedPulses();
  };

  p.draw = function () {
    p.blendMode(p.BLEND);
    p.noStroke();
    p.fill(0, 0, 0, CFG.trailFade);
    p.rect(0, 0, p.width, p.height);

    p.blendMode(p.ADD);

    // Zoom in from the centre so placement boundaries are cropped off-screen
    p.push();
    p.translate(p.width / 2, p.height / 2);
    p.scale(CFG.zoom);
    p.translate(-p.width / 2, -p.height / 2);

    for (let e of edges) e.draw();

    for (let n of nodes) {
      let t = n.glow;
      let R = CFG.nodeIdleR + (CFG.nodeFireR - CFG.nodeIdleR) * t;
      let G = CFG.nodeIdleG + (CFG.nodeFireG - CFG.nodeIdleG) * t;
      let B = CFG.nodeIdleB + (CFG.nodeFireB - CFG.nodeIdleB) * t;

      p.noStroke();
      for (let layer of CFG.nodeGlow) {
        p.fill(R, G, B, layer.a * (0.25 + t * 0.75));
        p.ellipse(n.x, n.y, layer.r);
      }

      if (t > 0.55) {
        let ring = (1 - t) / 0.45;
        p.noFill();
        p.stroke(R, G, B, (1 - ring) * 65);
        p.strokeWeight(0.9);
        p.ellipse(n.x, n.y, 5 + ring * 32);
        p.noStroke();
      }

      n.glow = Math.max(0, n.glow - 0.016);
    }

    let now     = performance.now();
    let spawned = [];
    pulses = pulses.filter(pulse => {
      pulse.update();
      if (pulse.done) {
        spawned.push(...pulse.target().fire(now));
        return false;
      }
      return true;
    });
    pulses = pulses.concat(spawned);

    for (let pulse of pulses) pulse.draw();

    p.pop();

    if (p.frameCount % CFG.reseedInterval === 0 && pulses.length < CFG.minAlivePulses) {
      seedPulses();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    buildGraph();
    seedPulses();
  };
}
