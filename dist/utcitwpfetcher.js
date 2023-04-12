function T() {
}
function G(t) {
  return t();
}
function P() {
  return /* @__PURE__ */ Object.create(null);
}
function j(t) {
  t.forEach(G);
}
function J(t) {
  return typeof t == "function";
}
function W(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let N;
function M(t, e) {
  return N || (N = document.createElement("a")), N.href = e, t === N.href;
}
function X(t) {
  return Object.keys(t).length === 0;
}
function m(t, e) {
  t.appendChild(e);
}
function g(t, e, l) {
  t.insertBefore(e, l || null);
}
function p(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function K(t, e) {
  for (let l = 0; l < t.length; l += 1)
    t[l] && t[l].d(e);
}
function h(t) {
  return document.createElement(t);
}
function Y(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function Q(t) {
  return document.createTextNode(t);
}
function y() {
  return Q(" ");
}
function R() {
  return Q("");
}
function u(t, e, l) {
  l == null ? t.removeAttribute(e) : t.getAttribute(e) !== l && t.setAttribute(e, l);
}
function Z(t) {
  return Array.from(t.childNodes);
}
class ee {
  constructor(e = !1) {
    this.is_svg = !1, this.is_svg = e, this.e = this.n = null;
  }
  c(e) {
    this.h(e);
  }
  m(e, l, n = null) {
    this.e || (this.is_svg ? this.e = Y(l.nodeName) : this.e = h(l.nodeType === 11 ? "TEMPLATE" : l.nodeName), this.t = l.tagName !== "TEMPLATE" ? l : l.content, this.c(e)), this.i(n);
  }
  h(e) {
    this.e.innerHTML = e, this.n = Array.from(this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes);
  }
  i(e) {
    for (let l = 0; l < this.n.length; l += 1)
      g(this.t, this.n[l], e);
  }
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  d() {
    this.n.forEach(p);
  }
}
let H;
function E(t) {
  H = t;
}
const k = [], z = [];
let $ = [];
const C = [], te = /* @__PURE__ */ Promise.resolve();
let L = !1;
function ne() {
  L || (L = !0, te.then(V));
}
function x(t) {
  $.push(t);
}
const A = /* @__PURE__ */ new Set();
let w = 0;
function V() {
  if (w !== 0)
    return;
  const t = H;
  do {
    try {
      for (; w < k.length; ) {
        const e = k[w];
        w++, E(e), le(e.$$);
      }
    } catch (e) {
      throw k.length = 0, w = 0, e;
    }
    for (E(null), k.length = 0, w = 0; z.length; )
      z.pop()();
    for (let e = 0; e < $.length; e += 1) {
      const l = $[e];
      A.has(l) || (A.add(l), l());
    }
    $.length = 0;
  } while (k.length);
  for (; C.length; )
    C.pop()();
  L = !1, A.clear(), E(t);
}
function le(t) {
  if (t.fragment !== null) {
    t.update(), j(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(x);
  }
}
function ie(t) {
  const e = [], l = [];
  $.forEach((n) => t.indexOf(n) === -1 ? e.push(n) : l.push(n)), l.forEach((n) => n()), $ = e;
}
const re = /* @__PURE__ */ new Set();
function se(t, e) {
  t && t.i && (re.delete(t), t.i(e));
}
function oe(t, e, l, n) {
  const { fragment: i, after_update: s } = t.$$;
  i && i.m(e, l), n || x(() => {
    const r = t.$$.on_mount.map(G).filter(J);
    t.$$.on_destroy ? t.$$.on_destroy.push(...r) : j(r), t.$$.on_mount = [];
  }), s.forEach(x);
}
function ce(t, e) {
  const l = t.$$;
  l.fragment !== null && (ie(l.after_update), j(l.on_destroy), l.fragment && l.fragment.d(e), l.on_destroy = l.fragment = null, l.ctx = []);
}
function fe(t, e) {
  t.$$.dirty[0] === -1 && (k.push(t), ne(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function de(t, e, l, n, i, s, r, c = [-1]) {
  const a = H;
  E(t);
  const d = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: T,
    not_equal: i,
    bound: P(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: P(),
    dirty: c,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  r && r(d.root);
  let v = !1;
  if (d.ctx = l ? l(t, e.props || {}, (o, f, ..._) => {
    const b = _.length ? _[0] : f;
    return d.ctx && i(d.ctx[o], d.ctx[o] = b) && (!d.skip_bound && d.bound[o] && d.bound[o](b), v && fe(t, o)), f;
  }) : [], d.update(), v = !0, j(d.before_update), d.fragment = n ? n(d.ctx) : !1, e.target) {
    if (e.hydrate) {
      const o = Z(e.target);
      d.fragment && d.fragment.l(o), o.forEach(p);
    } else
      d.fragment && d.fragment.c();
    e.intro && se(t.$$.fragment), oe(t, e.target, e.anchor, e.customElement), V();
  }
  E(a);
}
class ue {
  $destroy() {
    ce(this, 1), this.$destroy = T;
  }
  $on(e, l) {
    if (!J(l))
      return T;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(l), () => {
      const i = n.indexOf(l);
      i !== -1 && n.splice(i, 1);
    };
  }
  $set(e) {
    this.$$set && !X(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function O(t, e, l) {
  const n = t.slice();
  return n[1] = e[l], n;
}
function S(t, e, l) {
  const n = t.slice();
  return n[1] = e[l], n;
}
function q(t) {
  let e;
  return {
    c() {
      e = h("div"), e.innerHTML = '<div id="utcwpsloading" class="svelte-1o166la"></div>', u(e, "class", "utcwpsloadingcontainer svelte-1o166la");
    },
    m(l, n) {
      g(l, e, n);
    },
    d(l) {
      l && p(e);
    }
  };
}
function ae(t) {
  let e, l = (
    /*arrayofarticles*/
    t[0]
  ), n = [];
  for (let i = 0; i < l.length; i += 1)
    n[i] = F(O(t, l, i));
  return {
    c() {
      e = h("div");
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      u(e, "class", "md:grid md:grid-cols-3 md:grid-rows-3 md:gap-2 ml-2");
    },
    m(i, s) {
      g(i, e, s);
      for (let r = 0; r < n.length; r += 1)
        n[r] && n[r].m(e, null);
    },
    p(i, s) {
      if (s & /*arrayofarticles*/
      1) {
        l = /*arrayofarticles*/
        i[0];
        let r;
        for (r = 0; r < l.length; r += 1) {
          const c = O(i, l, r);
          n[r] ? n[r].p(c, s) : (n[r] = F(c), n[r].c(), n[r].m(e, null));
        }
        for (; r < n.length; r += 1)
          n[r].d(1);
        n.length = l.length;
      }
    },
    d(i) {
      i && p(e), K(n, i);
    }
  };
}
function _e(t) {
  let e, l = (
    /*arrayofarticles*/
    t[0]
  ), n = [];
  for (let i = 0; i < l.length; i += 1)
    n[i] = D(S(t, l, i));
  return {
    c() {
      e = h("div");
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      u(e, "class", "grid md:grid-cols-2 lg:grid-cols-4 gap-8");
    },
    m(i, s) {
      g(i, e, s);
      for (let r = 0; r < n.length; r += 1)
        n[r] && n[r].m(e, null);
    },
    p(i, s) {
      if (s & /*arrayofarticles, undefined*/
      1) {
        l = /*arrayofarticles*/
        i[0];
        let r;
        for (r = 0; r < l.length; r += 1) {
          const c = S(i, l, r);
          n[r] ? n[r].p(c, s) : (n[r] = D(c), n[r].c(), n[r].m(e, null));
        }
        for (; r < n.length; r += 1)
          n[r].d(1);
        n.length = l.length;
      }
    },
    d(i) {
      i && p(e), K(n, i);
    }
  };
}
function B(t) {
  let e, l = (
    /*index*/
    t[1]._embedded["wp:term"][0][0].name + ""
  ), n;
  return {
    c() {
      e = new ee(!1), n = R(), e.a = n;
    },
    m(i, s) {
      e.m(l, i, s), g(i, n, s);
    },
    p(i, s) {
      s & /*arrayofarticles*/
      1 && l !== (l = /*index*/
      i[1]._embedded["wp:term"][0][0].name + "") && e.p(l);
    },
    d(i) {
      i && p(n), i && e.d();
    }
  };
}
function F(t) {
  let e, l, n, i, s, r, c, a = (
    /*index*/
    t[1].title.rendered + ""
  ), d, v, o = (
    /*index*/
    t[1]._embedded["wp:term"][0][0].id === /*index*/
    t[1].categories[0] && B(t)
  );
  return {
    c() {
      e = h("div"), l = h("a"), n = h("div"), i = h("div"), s = h("div"), o && o.c(), r = y(), c = h("div"), v = y(), u(s, "class", "text-base my-1 uppercase font-bold tracking-wide pl-3"), u(c, "class", "text-lg mb-1 pl-3 font-normal"), u(i, "class", "border-l-4 border-utc-new-gold-500 py-1"), u(n, "class", "pr-4 my-4 hover:bg-utc-new-blue-100"), u(l, "href", d = /*index*/
      t[1].link), u(l, "class", "text-utc-new-blue-500");
    },
    m(f, _) {
      g(f, e, _), m(e, l), m(l, n), m(n, i), m(i, s), o && o.m(s, null), m(i, r), m(i, c), c.innerHTML = a, m(e, v);
    },
    p(f, _) {
      /*index*/
      f[1]._embedded["wp:term"][0][0].id === /*index*/
      f[1].categories[0] ? o ? o.p(f, _) : (o = B(f), o.c(), o.m(s, null)) : o && (o.d(1), o = null), _ & /*arrayofarticles*/
      1 && a !== (a = /*index*/
      f[1].title.rendered + "") && (c.innerHTML = a), _ & /*arrayofarticles*/
      1 && d !== (d = /*index*/
      f[1].link) && u(l, "href", d);
    },
    d(f) {
      f && p(e), o && o.d();
    }
  };
}
function I(t) {
  let e, l, n;
  return {
    c() {
      e = h("img"), u(e, "class", "w-full"), M(e.src, l = " " + /*index*/
      t[1]._embedded["wp:featuredmedia"][0].media_details.sizes["featured-blog"].source_url) || u(e, "src", l), u(e, "alt", n = /*index*/
      t[1].yoast_head_json.og_title);
    },
    m(i, s) {
      g(i, e, s);
    },
    p(i, s) {
      s & /*arrayofarticles*/
      1 && !M(e.src, l = " " + /*index*/
      i[1]._embedded["wp:featuredmedia"][0].media_details.sizes["featured-blog"].source_url) && u(e, "src", l), s & /*arrayofarticles*/
      1 && n !== (n = /*index*/
      i[1].yoast_head_json.og_title) && u(e, "alt", n);
    },
    d(i) {
      i && p(e);
    }
  };
}
function U(t) {
  let e, l, n;
  return {
    c() {
      e = h("img"), u(e, "class", "w-full"), M(e.src, l = "https://i0.wp.com/blog.utc.edu/news/files/2022/08/Founders-21-1736.jpg?zoom=2&resize=475%2C400&ssl=1") || u(e, "src", l), u(e, "alt", n = /*index*/
      t[1].yoast_head_json.og_title);
    },
    m(i, s) {
      g(i, e, s);
    },
    p(i, s) {
      s & /*arrayofarticles*/
      1 && n !== (n = /*index*/
      i[1].yoast_head_json.og_title) && u(e, "alt", n);
    },
    d(i) {
      i && p(e);
    }
  };
}
function D(t) {
  let e, l, n, i, s, r, c, a = (
    /*index*/
    t[1].title.rendered + ""
  ), d, v, o = (
    /*index*/
    t[1]._embedded["wp:featuredmedia"] !== void 0 && I(t)
  ), f = (
    /*index*/
    t[1]._embedded["wp:featuredmedia"] === void 0 && U(t)
  );
  return {
    c() {
      e = h("div"), l = h("a"), n = h("div"), o && o.c(), i = y(), f && f.c(), s = y(), r = h("div"), c = h("div"), v = y(), u(c, "class", "font-semibold text-xl text-center mb-2"), u(r, "class", "px-6 py-4"), u(n, "class", "text-center overflow-hidden"), u(l, "href", d = /*index*/
      t[1].link), u(l, "class", "hover:bg-transparent text-utc-new-blue-500"), u(e, "class", "bg-white shadow hover:bg-utc-new-blue-100 border-b-4 border-utc-new-gold-500");
    },
    m(_, b) {
      g(_, e, b), m(e, l), m(l, n), o && o.m(n, null), m(n, i), f && f.m(n, null), m(n, s), m(n, r), m(r, c), c.innerHTML = a, m(e, v);
    },
    p(_, b) {
      /*index*/
      _[1]._embedded["wp:featuredmedia"] !== void 0 ? o ? o.p(_, b) : (o = I(_), o.c(), o.m(n, i)) : o && (o.d(1), o = null), /*index*/
      _[1]._embedded["wp:featuredmedia"] === void 0 ? f ? f.p(_, b) : (f = U(_), f.c(), f.m(n, s)) : f && (f.d(1), f = null), b & /*arrayofarticles*/
      1 && a !== (a = /*index*/
      _[1].title.rendered + "") && (c.innerHTML = a), b & /*arrayofarticles*/
      1 && d !== (d = /*index*/
      _[1].link) && u(l, "href", d);
    },
    d(_) {
      _ && p(e), o && o.d(), f && f.d();
    }
  };
}
function he(t) {
  let e, l, n = (
    /*arrayofarticles*/
    t[0].length === 0 && q()
  );
  function i(c, a) {
    return window.utcitsveltewordpress.image ? _e : ae;
  }
  let r = i()(t);
  return {
    c() {
      n && n.c(), e = y(), r.c(), l = R();
    },
    m(c, a) {
      n && n.m(c, a), g(c, e, a), r.m(c, a), g(c, l, a);
    },
    p(c, [a]) {
      /*arrayofarticles*/
      c[0].length === 0 ? n || (n = q(), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null), r.p(c, a);
    },
    i: T,
    o: T,
    d(c) {
      n && n.d(c), c && p(e), r.d(c), c && p(l);
    }
  };
}
function me(t, e, l) {
  let n = [];
  return fetch(window.utcitsveltewordpress.url, { method: "PUT" }).then((i) => i.json()).then((i) => l(0, n = i)), [n];
}
class pe extends ue {
  constructor(e) {
    super(), de(this, e, me, he, W, {});
  }
}
const ge = new pe({
  target: document.getElementById("utcitsveltewordpressnewsapp")
});
export {
  ge as default
};
