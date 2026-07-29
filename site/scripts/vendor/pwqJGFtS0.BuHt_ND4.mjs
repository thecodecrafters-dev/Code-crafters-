import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  N as i,
  c as a,
  g as o,
  k as s,
  l as c,
  o as l,
  v as u,
} from "./react.D20wc1Tc.mjs";
import { C as d, a as f, r as p, t as m } from "./motion.B8Fudg3-.mjs";
import {
  B as h,
  D as g,
  Dt as _,
  E as v,
  H as y,
  J as b,
  M as x,
  O as S,
  P as C,
  T as w,
  V as T,
  at as E,
  bt as D,
  g as ee,
  ht as O,
  i as te,
  k,
  o as A,
  ot as j,
  p as M,
  pt as N,
  s as P,
  xt as F,
} from "./framer.Cfrj40WT.mjs";
import { c as I, l as ne, s as L, u as R } from "./shared-lib.CiHz06lb.mjs";
import { a as re, c as ie, o as ae, s as oe } from "./YHhyJkwMZ.BRrfO3wD.mjs";
function se(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  ce,
  q,
  le = e(() => {
    (l(),
      b(),
      m(),
      n(),
      (z = [
        `XLEvh4h3q`,
        `FBPGGydgg`,
        `dI2lPUJzB`,
        `cng1NMG2O`,
        `NJ6RWzcL4`,
        `qFdtGmnMR`,
        `rIUlolgBo`,
      ]),
      (B = `framer-sS5BL`),
      (V = {
        cng1NMG2O: `framer-v-1nh1bvz`,
        dI2lPUJzB: `framer-v-1mote70`,
        FBPGGydgg: `framer-v-tbozfr`,
        NJ6RWzcL4: `framer-v-1p9ugoy`,
        qFdtGmnMR: `framer-v-1f96nzq`,
        rIUlolgBo: `framer-v-10744ul`,
        XLEvh4h3q: `framer-v-5d9kd5`,
      }),
      (H = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (U = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (W = d.create(i)),
      (G = {
        1: `FBPGGydgg`,
        2: `dI2lPUJzB`,
        3: `cng1NMG2O`,
        4: `NJ6RWzcL4`,
        5: `qFdtGmnMR`,
        6: `rIUlolgBo`,
        All: `XLEvh4h3q`,
      }),
      (K = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: G[r.variant] ?? r.variant ?? `XLEvh4h3q`,
      })),
      (ce = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = F(
        o(function (e, t) {
          let n = r(null),
            i = t ?? n,
            o = u(),
            { activeLocale: s, setLocale: l } = N(),
            f = j(),
            { style: m, className: h, layoutId: g, variant: _, ...v } = K(e),
            {
              baseVariant: b,
              classNames: S,
              clearLoadingGesture: C,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: ee,
              setGestureState: te,
              setVariant: k,
              variants: A,
            } = D({
              cycleOrder: z,
              defaultVariant: `XLEvh4h3q`,
              ref: i,
              variant: _,
              variantClassNames: V,
            }),
            F = ce(e, A),
            { activeVariantCallback: I, delay: ne } = E(b);
          O(b, {
            default: I(async (...e) => {
              k(P, !0);
            }),
          });
          let L = x(B);
          return a(p, {
            id: g ?? o,
            children: a(W, {
              animate: A,
              initial: !1,
              children: a(U, {
                value: H,
                children: c(d.div, {
                  ...v,
                  ...w,
                  className: x(L, `framer-5d9kd5`, h, S),
                  "data-framer-name": `All`,
                  "data-highlight": !0,
                  layoutDependency: F,
                  layoutId: `XLEvh4h3q`,
                  ref: i,
                  style: { ...m },
                  ...se(
                    {
                      cng1NMG2O: { "data-framer-name": `3` },
                      dI2lPUJzB: { "data-framer-name": `2` },
                      FBPGGydgg: { "data-framer-name": `1` },
                      NJ6RWzcL4: { "data-framer-name": `4` },
                      qFdtGmnMR: { "data-framer-name": `5` },
                      rIUlolgBo: { "data-framer-name": `6` },
                    },
                    b,
                    T
                  ),
                  children: [
                    a(M, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: y((f?.y || 0) + (0 + ((f?.height || 200) - 0 - 24) / 2)),
                        pixelHeight: 48,
                        pixelWidth: 38,
                        sizes: `19px`,
                        src: `../../assets/images/Aba5SV85FsLHxglCe72iqTTJo.png`,
                      },
                      className: `framer-awwusy`,
                      "data-framer-name": `1`,
                      layoutDependency: F,
                      layoutId: `RqxhybBBo`,
                      style: {
                        mask: `linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add`,
                        opacity: 0.3,
                        WebkitMask: `linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add`,
                      },
                      variants: {
                        cng1NMG2O: { opacity: 0.5 },
                        dI2lPUJzB: { opacity: 0.5 },
                        NJ6RWzcL4: { opacity: 0.5 },
                        qFdtGmnMR: { opacity: 0.5 },
                        rIUlolgBo: { opacity: 0.5 },
                      },
                    }),
                    a(M, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: y((f?.y || 0) + (0 + ((f?.height || 200) - 0 - 24) / 2)),
                        pixelHeight: 48,
                        pixelWidth: 38,
                        sizes: `18px`,
                        src: `../../assets/images/Aba5SV85FsLHxglCe72iqTTJo.png`,
                      },
                      className: `framer-xcz7fz`,
                      "data-framer-name": `2`,
                      layoutDependency: F,
                      layoutId: `FZIfOPe7r`,
                      style: {
                        mask: `linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add`,
                        opacity: 0.2,
                        WebkitMask: `linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add`,
                      },
                      variants: { dI2lPUJzB: { opacity: 1 } },
                    }),
                    a(M, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: y((f?.y || 0) + (0 + ((f?.height || 200) - 0 - 24) / 2)),
                        pixelHeight: 48,
                        pixelWidth: 38,
                        sizes: `18px`,
                        src: `../../assets/images/Aba5SV85FsLHxglCe72iqTTJo.png`,
                      },
                      className: `framer-jhe8o0`,
                      "data-framer-name": `3`,
                      layoutDependency: F,
                      layoutId: `leTlNF350`,
                      style: {
                        mask: `linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add`,
                        opacity: 0.5,
                        WebkitMask: `linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add`,
                      },
                      variants: { cng1NMG2O: { opacity: 1 } },
                    }),
                    a(M, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: y((f?.y || 0) + (0 + ((f?.height || 200) - 0 - 24) / 2)),
                        pixelHeight: 48,
                        pixelWidth: 38,
                        sizes: `18px`,
                        src: `../../assets/images/Aba5SV85FsLHxglCe72iqTTJo.png`,
                      },
                      className: `framer-omohho`,
                      "data-framer-name": `4`,
                      layoutDependency: F,
                      layoutId: `U0RQOwJrU`,
                      style: {
                        mask: `linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add`,
                        opacity: 0.5,
                        WebkitMask: `linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add`,
                      },
                      variants: { NJ6RWzcL4: { opacity: 1 } },
                    }),
                    a(M, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: y((f?.y || 0) + (0 + ((f?.height || 200) - 0 - 24) / 2)),
                        pixelHeight: 48,
                        pixelWidth: 38,
                        sizes: `18px`,
                        src: `../../assets/images/Aba5SV85FsLHxglCe72iqTTJo.png`,
                      },
                      className: `framer-1m6yp0p`,
                      "data-framer-name": `5`,
                      layoutDependency: F,
                      layoutId: `izE73CKgp`,
                      style: {
                        mask: `linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add`,
                        opacity: 0.5,
                        WebkitMask: `linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add`,
                      },
                      variants: { qFdtGmnMR: { opacity: 1 } },
                    }),
                    a(M, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: y((f?.y || 0) + (0 + ((f?.height || 200) - 0 - 24) / 2)),
                        pixelHeight: 48,
                        pixelWidth: 38,
                        sizes: `18px`,
                        src: `../../assets/images/Aba5SV85FsLHxglCe72iqTTJo.png`,
                      },
                      className: `framer-oadjc`,
                      "data-framer-name": `6`,
                      layoutDependency: F,
                      layoutId: `jjrAJnOcB`,
                      style: {
                        mask: `linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add`,
                        opacity: 0.5,
                        WebkitMask: `linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add`,
                      },
                      variants: { rIUlolgBo: { opacity: 1 } },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-sS5BL.framer-4s21zg, .framer-sS5BL .framer-4s21zg { display: block; }`,
          `.framer-sS5BL.framer-5d9kd5 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 18px; }`,
          `.framer-sS5BL .framer-awwusy { flex: none; height: 24px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 19px; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-sS5BL .framer-xcz7fz, .framer-sS5BL .framer-jhe8o0, .framer-sS5BL .framer-omohho, .framer-sS5BL .framer-1m6yp0p, .framer-sS5BL .framer-oadjc { flex: none; height: 24px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 18px; will-change: var(--framer-will-change-filter-override, filter); }`,
        ],
        `framer-sS5BL`
      )),
      (q.displayName = `Animate`),
      (q.defaultProps = { height: 200, width: 18 }),
      k(q, {
        variant: {
          options: [
            `XLEvh4h3q`,
            `FBPGGydgg`,
            `dI2lPUJzB`,
            `cng1NMG2O`,
            `NJ6RWzcL4`,
            `qFdtGmnMR`,
            `rIUlolgBo`,
          ],
          optionTitles: [`All`, `1`, `2`, `3`, `4`, `5`, `6`],
          title: `Variant`,
          type: A.Enum,
        },
      }),
      S(q, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function J(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ue,
  de,
  fe,
  pe,
  me,
  he,
  ge,
  _e,
  ve,
  ye,
  be,
  xe,
  Y,
  Se = e(() => {
    (l(),
      b(),
      m(),
      n(),
      ie(),
      le(),
      (ue = h(q)),
      (de = { EfkfLrwUV: { hover: !0 }, lUKNreusf: { hover: !0 } }),
      (fe = [`lUKNreusf`, `EfkfLrwUV`]),
      (pe = `framer-M1sgu`),
      (me = { EfkfLrwUV: `framer-v-kh40pf`, lUKNreusf: `framer-v-iv6uq9` }),
      (he = { bounce: 0.2, delay: 0, duration: 0.5, type: `spring` }),
      (ge = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (_e = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (ve = { Button: `lUKNreusf`, Phone: `EfkfLrwUV` }),
      (ye = d.create(i)),
      (be = ({ height: e, id: t, link: n, title: r, width: i, ...a }) => ({
        ...a,
        onAebNiVo: n ?? a.onAebNiVo,
        variant: ve[a.variant] ?? a.variant ?? `lUKNreusf`,
        W2IqI_Cqf: r ?? a.W2IqI_Cqf ?? `Explore Services`,
      })),
      (xe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = F(
        o(function (e, t) {
          let n = r(null),
            o = t ?? n,
            s = u(),
            { activeLocale: l, setLocale: f } = N(),
            m = j(),
            {
              style: h,
              className: g,
              layoutId: _,
              variant: b,
              W2IqI_Cqf: S,
              onAebNiVo: C,
              ...T
            } = be(e),
            {
              baseVariant: E,
              classNames: O,
              clearLoadingGesture: k,
              gestureHandlers: A,
              gestureVariant: P,
              isLoading: F,
              setGestureState: I,
              setVariant: ne,
              variants: L,
            } = D({
              cycleOrder: fe,
              defaultVariant: `lUKNreusf`,
              enabledGestures: de,
              ref: o,
              variant: b,
              variantClassNames: me,
            }),
            R = xe(e, L),
            ie = x(pe, re);
          return a(p, {
            id: _ ?? s,
            children: a(ye, {
              animate: L,
              initial: !1,
              children: a(_e, {
                value: he,
                children: a(ee, {
                  href: C,
                  motionChild: !0,
                  nodeId: `lUKNreusf`,
                  openInNewTab: !1,
                  scopeId: `bYZHj8Da3`,
                  smoothScroll: !0,
                  children: c(d.a, {
                    ...T,
                    ...A,
                    className: `${x(ie, `framer-iv6uq9`, g, O)} framer-dhoxpe`,
                    "data-framer-name": `Button`,
                    layoutDependency: R,
                    layoutId: `lUKNreusf`,
                    ref: o,
                    style: {
                      background: `linear-gradient(180deg, var(--token-c04ffb3d-e37f-466f-a631-87bee8b6b1a4, rgb(64, 69, 74)) 0%, var(--token-c5f56cef-355c-4a80-b6b8-f948c774f0f2, rgb(41, 44, 46)) 100%)`,
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                      boxShadow: `inset 0px -4px 0px 1px var(--token-749bc66f-56ff-4a90-abf3-0d699632a8e1, rgba(255, 255, 255, 0.1)), inset 0px -3px 0px 0px var(--token-339d6679-9119-4830-8fff-e9918e64dbd7, rgb(0, 0, 0)), inset 0px 1px 0px 0px var(--token-46dd9299-bbaf-4442-b126-5314566efc41, rgba(255, 255, 255, 0.6)), 0px 2.77px 2.21px 0px var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1)), 0px 6.65px 5.32px 0px var(--token-26f70c96-97b4-43a1-a85c-15fa2db248aa, rgba(0, 0, 0, 0.15)), 0px 12.52px 10.02px 0px var(--token-26f70c96-97b4-43a1-a85c-15fa2db248aa, rgba(0, 0, 0, 0.15)), inset 0px -5px 0px 0px rgb(26, 26, 26), inset 0px 1px 0px 0px rgba(245, 245, 245, 0.6), 0px 2px 2.21px 0px rgba(0, 0, 0, 0.61), 0px 6px 5.32px 0px rgba(0, 0, 0, 0.12)`,
                      ...h,
                    },
                    ...J(
                      {
                        "EfkfLrwUV-hover": { "data-framer-name": void 0 },
                        "lUKNreusf-hover": { "data-framer-name": void 0 },
                        EfkfLrwUV: { "data-framer-name": `Phone` },
                      },
                      E,
                      P
                    ),
                    children: [
                      a(d.div, {
                        className: `framer-7wencc`,
                        "data-framer-name": `Icon wrapper`,
                        layoutDependency: R,
                        layoutId: `Hq6qVI8js`,
                        style: {
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        },
                        children: a(M, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: y((m?.y || 0) + (5 + ((m?.height || 65) - 13 - 52) / 2) + 14),
                            pixelHeight: 48,
                            pixelWidth: 38,
                            sizes: `19px`,
                            src: `../../assets/images/Aba5SV85FsLHxglCe72iqTTJo.png`,
                          },
                          className: `framer-13dlslv`,
                          "data-framer-name": `1`,
                          layoutDependency: R,
                          layoutId: `Yr9nBv4VU`,
                          style: { opacity: 0.3 },
                          ...J(
                            {
                              EfkfLrwUV: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: y(
                                    (m?.y || 0) + (3 + ((m?.height || 59) - 11 - 48) / 2) + 14
                                  ),
                                  pixelHeight: 48,
                                  pixelWidth: 38,
                                  sizes: `19px`,
                                  src: `../../assets/images/Aba5SV85FsLHxglCe72iqTTJo.png`,
                                },
                              },
                            },
                            E,
                            P
                          ),
                        }),
                      }),
                      a(d.div, {
                        className: `framer-i8idkc`,
                        "data-framer-name": `Animate`,
                        layoutDependency: R,
                        layoutId: `a2LXUjoYv`,
                        style: {
                          background: `linear-gradient(180deg, var(--token-7293b408-bbd8-427d-aed2-b9ecea911aae, rgb(178, 255, 67)) 0%, var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3)) 100%)`,
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                          boxShadow: `inset 0px 1px 0px 0px var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255)), 4px 8px 2px 0px var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1)), inset 0px -2px 0.5px 0px var(--token-7d21e073-7231-4382-873b-d2baa963be77, rgba(117, 197, 0, 0.25))`,
                        },
                        children: a(te, {
                          height: 200,
                          width: `15px`,
                          y: (m?.y || 0) + 5 + 14,
                          ...J(
                            {
                              "EfkfLrwUV-hover": {
                                width: `max(${m?.width || `100vw`} - 43px, 1px)`,
                              },
                              "lUKNreusf-hover": {
                                width: `max(${m?.width || `100vw`} - 43px, 1px)`,
                              },
                              EfkfLrwUV: { height: 20, y: (m?.y || 0) + 3 + 14 },
                            },
                            E,
                            P
                          ),
                          children: a(v, {
                            className: `framer-109rbmt-container`,
                            layoutDependency: R,
                            layoutId: `T7_ktmNhc-container`,
                            nodeId: `T7_ktmNhc`,
                            rendersWithMotion: !0,
                            scopeId: `bYZHj8Da3`,
                            children: a(q, {
                              height: `100%`,
                              id: `T7_ktmNhc`,
                              layoutId: `T7_ktmNhc`,
                              style: { width: `100%` },
                              variant: ge(`FBPGGydgg`),
                              width: `100%`,
                              ...J(
                                { EfkfLrwUV: { style: { height: `100%`, width: `100%` } } },
                                E,
                                P
                              ),
                            }),
                          }),
                        }),
                      }),
                      a(w, {
                        __fromCanvasComponent: !0,
                        children: a(i, {
                          children: a(d.p, {
                            className: `framer-styles-preset-1u0avwx`,
                            "data-styles-preset": `llwEzCpG3`,
                            style: {
                              "--framer-text-alignment": `center`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255)))`,
                            },
                            children: `Explore Services`,
                          }),
                        }),
                        className: `framer-4plgqe`,
                        fonts: [`Inter`],
                        layoutDependency: R,
                        layoutId: `gvWATcKcy`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: S,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-M1sgu.framer-dhoxpe, .framer-M1sgu .framer-dhoxpe { display: block; }`,
          `.framer-M1sgu.framer-iv6uq9 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 5px 24px 8px 6px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-M1sgu .framer-7wencc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 14px 16px 14px 16px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 3; }`,
          `.framer-M1sgu .framer-13dlslv { flex: none; height: 24px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 19px; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-M1sgu .framer-i8idkc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; left: 7px; overflow: var(--overflow-clip-fallback, clip); padding: 14px 15px 14px 15px; position: absolute; top: 5px; width: 45px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-M1sgu .framer-109rbmt-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
          `.framer-M1sgu .framer-4plgqe { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-M1sgu.framer-v-kh40pf.framer-iv6uq9 { padding: 3px 24px 8px 6px; }`,
          `.framer-M1sgu.framer-v-kh40pf .framer-13dlslv, .framer-M1sgu.framer-v-kh40pf .framer-109rbmt-container { height: 20px; }`,
          `.framer-M1sgu.framer-v-kh40pf .framer-i8idkc { top: 3px; }`,
          `.framer-M1sgu.framer-v-iv6uq9.hover .framer-i8idkc, .framer-M1sgu.framer-v-kh40pf.hover .framer-i8idkc { right: 6px; width: unset; }`,
          ...ae,
        ],
        `framer-M1sgu`
      )),
      (Y.displayName = `Service button`),
      (Y.defaultProps = { height: 65, width: 237.5 }),
      k(Y, {
        variant: {
          options: [`lUKNreusf`, `EfkfLrwUV`],
          optionTitles: [`Button`, `Phone`],
          title: `Variant`,
          type: A.Enum,
        },
        W2IqI_Cqf: {
          defaultValue: `Explore Services`,
          displayTextArea: !1,
          title: `Title`,
          type: A.String,
        },
        onW2IqI_CqfChange: { changes: `W2IqI_Cqf`, type: A.ChangeHandler },
        onAebNiVo: { title: `Link`, type: A.Link },
      }),
      S(
        Y,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...ue,
          ...T(oe),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Y.loader = { load: (e, t) => (t.locale, Promise.allSettled([C(q, {}, t)])) }));
  });
function X(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Z,
  Ce,
  we,
  Te,
  Ee,
  De,
  Oe,
  ke,
  Ae,
  Q,
  $,
  je = e(() => {
    (l(),
      b(),
      m(),
      n(),
      R(),
      (Z = _(d.div)),
      (Ce = [`eLKmGreMt`, `gop9cqeKC`, `hZUYkoDes`]),
      (we = `framer-2beQr`),
      (Te = {
        eLKmGreMt: `framer-v-172sjxa`,
        gop9cqeKC: `framer-v-gn5ml6`,
        hZUYkoDes: `framer-v-168gems`,
      }),
      (Ee = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (De = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (Oe = { Desktop: `eLKmGreMt`, Phone: `hZUYkoDes`, Tablet: `gop9cqeKC` }),
      (ke = d.create(i)),
      (Ae = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Oe[r.variant] ?? r.variant ?? `eLKmGreMt`,
      })),
      (Q = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = F(
        o(function (e, t) {
          let n = r(null),
            o = t ?? n,
            s = u(),
            { activeLocale: l, setLocale: f } = N(),
            m = j(),
            { style: h, className: _, layoutId: v, variant: b, ...S } = Ae(e),
            {
              baseVariant: C,
              classNames: T,
              clearLoadingGesture: E,
              gestureHandlers: ee,
              gestureVariant: O,
              isLoading: te,
              setGestureState: k,
              setVariant: A,
              variants: P,
            } = D({
              cycleOrder: Ce,
              defaultVariant: `eLKmGreMt`,
              ref: o,
              variant: b,
              variantClassNames: Te,
            }),
            F = Q(e, P),
            I = x(we, L);
          return a(p, {
            id: v ?? s,
            children: a(ke, {
              animate: P,
              initial: !1,
              children: a(De, {
                value: Ee,
                children: a(d.section, {
                  ...S,
                  ...ee,
                  className: x(I, `framer-172sjxa`, _, T),
                  "data-border": !0,
                  "data-framer-name": `Desktop`,
                  layoutDependency: F,
                  layoutId: `eLKmGreMt`,
                  ref: o,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1))`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-6a136aea-db2c-4f64-b96e-534e0d7e9163, rgb(243, 244, 246))`,
                    ...h,
                  },
                  ...X(
                    {
                      gop9cqeKC: { "data-framer-name": `Tablet` },
                      hZUYkoDes: { "data-framer-name": `Phone` },
                    },
                    C,
                    O
                  ),
                  children: c(d.div, {
                    className: `framer-1brgiej`,
                    "data-framer-name": `Container`,
                    layoutDependency: F,
                    layoutId: `uVry4K1BQ`,
                    style: {
                      backgroundColor: `var(--token-43400ed2-3e46-4780-82d7-996f7a17bf5a, rgb(243, 244, 246))`,
                    },
                    children: [
                      a(d.div, {
                        className: `framer-19s34ct`,
                        "data-border": !0,
                        "data-framer-name": `Text `,
                        layoutDependency: F,
                        layoutId: `Ptjcdvg6e`,
                        style: {
                          "--border-bottom-width": `0px`,
                          "--border-color": `var(--token-697a1175-e86a-44f8-8b7f-9f4d44f05ad4, rgba(3, 7, 18, 0.1))`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          backgroundColor: `var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255))`,
                        },
                        children: a(w, {
                          __fromCanvasComponent: !0,
                          children: a(i, {
                            children: a(d.p, {
                              className: `framer-styles-preset-13lpt6d`,
                              "data-styles-preset": `RXmiUshAy`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18)))`,
                              },
                              children: `//WE’VE TRUSTED BY`,
                            }),
                          }),
                          className: `framer-ey9iup`,
                          fonts: [`Inter`],
                          layoutDependency: F,
                          layoutId: `Q9KfNUwXR`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      }),
                      c(Z, {
                        className: `framer-j6r9lx`,
                        layoutDependency: F,
                        layoutId: `QBjkoUKOH`,
                        tickerEffectAlign: `center`,
                        tickerEffectDirectionModifier: `default`,
                        tickerEffectDraggable: !1,
                        tickerEffectEnabled: !0,
                        tickerEffectGap: `0px`,
                        tickerEffectHoverModifier: 80,
                        tickerEffectOverflow: `hidden`,
                        tickerEffectPosition: `relative`,
                        tickerEffectStackDirection: `row`,
                        tickerEffectVelocity: 80,
                        children: [
                          a(g, {
                            children: a(d.div, {
                              className: `framer-1sswmp`,
                              "data-border": !0,
                              "data-framer-name": `logo wrapper`,
                              layoutDependency: F,
                              layoutId: `vBvjyImjK`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-697a1175-e86a-44f8-8b7f-9f4d44f05ad4, rgba(3, 7, 18, 0.1))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                                backgroundColor: `var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255))`,
                              },
                              children: a(M, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 64,
                                  intrinsicWidth: 79,
                                  loading: y(
                                    (m?.y || 0) +
                                      (0 + ((m?.height || 200) - 0 - 260) / 2) +
                                      29.5 +
                                      0.5 +
                                      68 +
                                      0
                                  ),
                                  pixelHeight: 64,
                                  pixelWidth: 79,
                                  sizes: `79px`,
                                  src: `../../assets/images/syDJXcszgUd7ftsKZYq0l8eYn4.svg`,
                                },
                                className: `framer-1qlb1r8`,
                                "data-framer-name": `Logo`,
                                layoutDependency: F,
                                layoutId: `D6qo3QPcU`,
                                ...X(
                                  {
                                    gop9cqeKC: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 64,
                                        intrinsicWidth: 79,
                                        loading: y(
                                          (m?.y || 0) +
                                            (0 + ((m?.height || 140) - 0 - 200) / 2) +
                                            29.5 +
                                            0.5 +
                                            38 +
                                            0
                                        ),
                                        pixelHeight: 64,
                                        pixelWidth: 79,
                                        sizes: `79px`,
                                        src: `../../assets/images/syDJXcszgUd7ftsKZYq0l8eYn4.svg`,
                                      },
                                    },
                                    hZUYkoDes: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 64,
                                        intrinsicWidth: 79,
                                        loading: y(
                                          (m?.y || 0) +
                                            (0 + ((m?.height || 200) - 0 - 200) / 2) +
                                            29.5 +
                                            0.5 +
                                            38 +
                                            0
                                        ),
                                        pixelHeight: 64,
                                        pixelWidth: 79,
                                        sizes: `79px`,
                                        src: `../../assets/images/syDJXcszgUd7ftsKZYq0l8eYn4.svg`,
                                      },
                                    },
                                  },
                                  C,
                                  O
                                ),
                              }),
                            }),
                          }),
                          a(g, {
                            children: a(d.div, {
                              className: `framer-iohuc8`,
                              "data-border": !0,
                              "data-framer-name": `logo wrapper`,
                              layoutDependency: F,
                              layoutId: `Ka55gdfVK`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-697a1175-e86a-44f8-8b7f-9f4d44f05ad4, rgba(3, 7, 18, 0.1))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                                backgroundColor: `var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255))`,
                              },
                              children: a(M, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 30,
                                  intrinsicWidth: 164,
                                  loading: y(
                                    (m?.y || 0) +
                                      (0 + ((m?.height || 200) - 0 - 260) / 2) +
                                      29.5 +
                                      0 +
                                      90 +
                                      0
                                  ),
                                  pixelHeight: 30,
                                  pixelWidth: 164,
                                  sizes: `120px`,
                                  src: `../../assets/images/ibtxfUolyD3lAhUJYRYi86nnw.svg`,
                                },
                                className: `framer-62nk9g`,
                                "data-framer-name": `Logo`,
                                layoutDependency: F,
                                layoutId: `kSwpkEeaj`,
                                ...X(
                                  {
                                    gop9cqeKC: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 30,
                                        intrinsicWidth: 164,
                                        loading: y(
                                          (m?.y || 0) +
                                            (0 + ((m?.height || 140) - 0 - 200) / 2) +
                                            29.5 +
                                            0 +
                                            59 +
                                            0
                                        ),
                                        pixelHeight: 30,
                                        pixelWidth: 164,
                                        sizes: `120px`,
                                        src: `../../assets/images/ibtxfUolyD3lAhUJYRYi86nnw.svg`,
                                      },
                                    },
                                    hZUYkoDes: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 30,
                                        intrinsicWidth: 164,
                                        loading: y(
                                          (m?.y || 0) +
                                            (0 + ((m?.height || 200) - 0 - 200) / 2) +
                                            29.5 +
                                            0 +
                                            59 +
                                            0
                                        ),
                                        pixelHeight: 30,
                                        pixelWidth: 164,
                                        sizes: `120px`,
                                        src: `../../assets/images/ibtxfUolyD3lAhUJYRYi86nnw.svg`,
                                      },
                                    },
                                  },
                                  C,
                                  O
                                ),
                              }),
                            }),
                          }),
                          a(g, {
                            children: a(d.div, {
                              className: `framer-bd2dg2`,
                              "data-border": !0,
                              "data-framer-name": `logo wrapper`,
                              layoutDependency: F,
                              layoutId: `NklauSXc_`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-697a1175-e86a-44f8-8b7f-9f4d44f05ad4, rgba(3, 7, 18, 0.1))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                                backgroundColor: `var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255))`,
                              },
                              children: a(M, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 64,
                                  intrinsicWidth: 64,
                                  loading: y(
                                    (m?.y || 0) +
                                      (0 + ((m?.height || 200) - 0 - 260) / 2) +
                                      29.5 +
                                      0.5 +
                                      68 +
                                      0
                                  ),
                                  pixelHeight: 64,
                                  pixelWidth: 64,
                                  sizes: `64px`,
                                  src: `../../assets/images/hz1jv7HDFdRTRAsZjsIQiaNlXA.svg`,
                                },
                                className: `framer-16f4qdj`,
                                "data-framer-name": `Logo`,
                                layoutDependency: F,
                                layoutId: `CXHxxPKuk`,
                                ...X(
                                  {
                                    gop9cqeKC: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 64,
                                        intrinsicWidth: 64,
                                        loading: y(
                                          (m?.y || 0) +
                                            (0 + ((m?.height || 140) - 0 - 200) / 2) +
                                            29.5 +
                                            0.5 +
                                            38 +
                                            0
                                        ),
                                        pixelHeight: 64,
                                        pixelWidth: 64,
                                        sizes: `64px`,
                                        src: `../../assets/images/hz1jv7HDFdRTRAsZjsIQiaNlXA.svg`,
                                      },
                                    },
                                    hZUYkoDes: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 64,
                                        intrinsicWidth: 64,
                                        loading: y(
                                          (m?.y || 0) +
                                            (0 + ((m?.height || 200) - 0 - 200) / 2) +
                                            29.5 +
                                            0.5 +
                                            38 +
                                            0
                                        ),
                                        pixelHeight: 64,
                                        pixelWidth: 64,
                                        sizes: `64px`,
                                        src: `../../assets/images/hz1jv7HDFdRTRAsZjsIQiaNlXA.svg`,
                                      },
                                    },
                                  },
                                  C,
                                  O
                                ),
                              }),
                            }),
                          }),
                          a(g, {
                            children: a(d.div, {
                              className: `framer-13xzr5k`,
                              "data-border": !0,
                              "data-framer-name": `logo wrapper`,
                              layoutDependency: F,
                              layoutId: `v0_yvphgI`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-697a1175-e86a-44f8-8b7f-9f4d44f05ad4, rgba(3, 7, 18, 0.1))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                                backgroundColor: `var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255))`,
                              },
                              children: a(M, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 62,
                                  intrinsicWidth: 139,
                                  loading: y(
                                    (m?.y || 0) +
                                      (0 + ((m?.height || 200) - 0 - 260) / 2) +
                                      29.5 +
                                      0.52 +
                                      69.56 +
                                      0
                                  ),
                                  pixelHeight: 62,
                                  pixelWidth: 139,
                                  sizes: `131px`,
                                  src: `../../assets/images/qNJrMsZ0zbJbsD1FFyqiUi7B3qU.svg`,
                                },
                                className: `framer-1vyak9l`,
                                "data-framer-name": `Logo`,
                                layoutDependency: F,
                                layoutId: `m82W07F6q`,
                                ...X(
                                  {
                                    gop9cqeKC: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 62,
                                        intrinsicWidth: 139,
                                        loading: y(
                                          (m?.y || 0) +
                                            (0 + ((m?.height || 140) - 0 - 200) / 2) +
                                            29.5 +
                                            0.5 +
                                            40 +
                                            0
                                        ),
                                        pixelHeight: 62,
                                        pixelWidth: 139,
                                        sizes: `131px`,
                                        src: `../../assets/images/qNJrMsZ0zbJbsD1FFyqiUi7B3qU.svg`,
                                      },
                                    },
                                    hZUYkoDes: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 62,
                                        intrinsicWidth: 139,
                                        loading: y(
                                          (m?.y || 0) +
                                            (0 + ((m?.height || 200) - 0 - 200) / 2) +
                                            29.5 +
                                            0.5 +
                                            40 +
                                            0
                                        ),
                                        pixelHeight: 62,
                                        pixelWidth: 139,
                                        sizes: `131px`,
                                        src: `../../assets/images/qNJrMsZ0zbJbsD1FFyqiUi7B3qU.svg`,
                                      },
                                    },
                                  },
                                  C,
                                  O
                                ),
                              }),
                            }),
                          }),
                          a(g, {
                            children: a(d.div, {
                              className: `framer-1l89uft`,
                              "data-border": !0,
                              "data-framer-name": `logo wrapper`,
                              layoutDependency: F,
                              layoutId: `CAAYRePya`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-697a1175-e86a-44f8-8b7f-9f4d44f05ad4, rgba(3, 7, 18, 0.1))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                                backgroundColor: `var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255))`,
                              },
                              children: a(M, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 64,
                                  intrinsicWidth: 80,
                                  loading: y(
                                    (m?.y || 0) +
                                      (0 + ((m?.height || 200) - 0 - 260) / 2) +
                                      29.5 +
                                      0.5 +
                                      68 +
                                      0
                                  ),
                                  pixelHeight: 64,
                                  pixelWidth: 80,
                                  sizes: `80px`,
                                  src: `../../assets/images/i9I07fRakYr0TujkULzwgIkhwN4.svg`,
                                },
                                className: `framer-rwxkfk`,
                                "data-framer-name": `Logo`,
                                layoutDependency: F,
                                layoutId: `u69R0kDtd`,
                                ...X(
                                  {
                                    gop9cqeKC: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 64,
                                        intrinsicWidth: 80,
                                        loading: y(
                                          (m?.y || 0) +
                                            (0 + ((m?.height || 140) - 0 - 200) / 2) +
                                            29.5 +
                                            0.5 +
                                            38 +
                                            0
                                        ),
                                        pixelHeight: 64,
                                        pixelWidth: 80,
                                        sizes: `80px`,
                                        src: `../../assets/images/i9I07fRakYr0TujkULzwgIkhwN4.svg`,
                                      },
                                    },
                                    hZUYkoDes: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 64,
                                        intrinsicWidth: 80,
                                        loading: y(
                                          (m?.y || 0) +
                                            (0 + ((m?.height || 200) - 0 - 200) / 2) +
                                            29.5 +
                                            0.5 +
                                            38 +
                                            0
                                        ),
                                        pixelHeight: 64,
                                        pixelWidth: 80,
                                        sizes: `80px`,
                                        src: `../../assets/images/i9I07fRakYr0TujkULzwgIkhwN4.svg`,
                                      },
                                    },
                                  },
                                  C,
                                  O
                                ),
                              }),
                            }),
                          }),
                          a(g, {
                            children: a(d.div, {
                              className: `framer-1o4mhog`,
                              "data-border": !0,
                              "data-framer-name": `logo wrapper`,
                              layoutDependency: F,
                              layoutId: `FuyraXnwq`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-697a1175-e86a-44f8-8b7f-9f4d44f05ad4, rgba(3, 7, 18, 0.1))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                                backgroundColor: `var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255))`,
                              },
                              children: a(M, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 30,
                                  intrinsicWidth: 153,
                                  loading: y(
                                    (m?.y || 0) +
                                      (0 + ((m?.height || 200) - 0 - 260) / 2) +
                                      29.5 +
                                      0.295 +
                                      92.41 +
                                      0
                                  ),
                                  pixelHeight: 30,
                                  pixelWidth: 153,
                                  sizes: `120px`,
                                  src: `../../assets/images/O6GpwplQdkbCGVgOfGVqHEgo.svg`,
                                },
                                className: `framer-ib3yb7`,
                                "data-framer-name": `Logo`,
                                layoutDependency: F,
                                layoutId: `bozJvPNVl`,
                                ...X(
                                  {
                                    gop9cqeKC: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 30,
                                        intrinsicWidth: 153,
                                        loading: y(
                                          (m?.y || 0) +
                                            (0 + ((m?.height || 140) - 0 - 200) / 2) +
                                            29.5 +
                                            0 +
                                            59 +
                                            0
                                        ),
                                        pixelHeight: 30,
                                        pixelWidth: 153,
                                        sizes: `120px`,
                                        src: `../../assets/images/O6GpwplQdkbCGVgOfGVqHEgo.svg`,
                                      },
                                    },
                                    hZUYkoDes: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 30,
                                        intrinsicWidth: 153,
                                        loading: y(
                                          (m?.y || 0) +
                                            (0 + ((m?.height || 200) - 0 - 200) / 2) +
                                            29.5 +
                                            0 +
                                            59 +
                                            0
                                        ),
                                        pixelHeight: 30,
                                        pixelWidth: 153,
                                        sizes: `120px`,
                                        src: `../../assets/images/O6GpwplQdkbCGVgOfGVqHEgo.svg`,
                                      },
                                    },
                                  },
                                  C,
                                  O
                                ),
                              }),
                            }),
                          }),
                          a(g, {
                            children: a(d.div, {
                              className: `framer-1gnu5ij`,
                              "data-border": !0,
                              "data-framer-name": `logo wrapper`,
                              layoutDependency: F,
                              layoutId: `x4dKgYQkL`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-697a1175-e86a-44f8-8b7f-9f4d44f05ad4, rgba(3, 7, 18, 0.1))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                                backgroundColor: `var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255))`,
                              },
                              children: a(M, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 64,
                                  intrinsicWidth: 67,
                                  loading: y(
                                    (m?.y || 0) +
                                      (0 + ((m?.height || 200) - 0 - 260) / 2) +
                                      29.5 +
                                      0.5 +
                                      68 +
                                      0
                                  ),
                                  pixelHeight: 64,
                                  pixelWidth: 67,
                                  sizes: `64px`,
                                  src: `../../assets/images/9trjrHwn6zkz3NMyb9aJJ3RXw.svg`,
                                },
                                className: `framer-436jth`,
                                "data-framer-name": `Logo`,
                                layoutDependency: F,
                                layoutId: `CUzECQBMd`,
                                ...X(
                                  {
                                    gop9cqeKC: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 64,
                                        intrinsicWidth: 67,
                                        loading: y(
                                          (m?.y || 0) +
                                            (0 + ((m?.height || 140) - 0 - 200) / 2) +
                                            29.5 +
                                            0.5 +
                                            38 +
                                            0
                                        ),
                                        pixelHeight: 64,
                                        pixelWidth: 67,
                                        sizes: `64px`,
                                        src: `../../assets/images/9trjrHwn6zkz3NMyb9aJJ3RXw.svg`,
                                      },
                                    },
                                    hZUYkoDes: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 64,
                                        intrinsicWidth: 67,
                                        loading: y(
                                          (m?.y || 0) +
                                            (0 + ((m?.height || 200) - 0 - 200) / 2) +
                                            29.5 +
                                            0.5 +
                                            38 +
                                            0
                                        ),
                                        pixelHeight: 64,
                                        pixelWidth: 67,
                                        sizes: `64px`,
                                        src: `../../assets/images/9trjrHwn6zkz3NMyb9aJJ3RXw.svg`,
                                      },
                                    },
                                  },
                                  C,
                                  O
                                ),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-2beQr.framer-1y7p7jx, .framer-2beQr .framer-1y7p7jx { display: block; }`,
          `.framer-2beQr.framer-172sjxa { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1440px; }`,
          `.framer-2beQr .framer-1brgiej { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 16px 0px 16px; position: relative; width: 1px; }`,
          `.framer-2beQr .framer-19s34ct { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 200px; overflow: hidden; padding: 80px 52px 80px 52px; position: relative; width: 1px; z-index: 1; }`,
          `.framer-2beQr .framer-ey9iup { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-2beQr .framer-j6r9lx { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-2beQr .framer-1sswmp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 68px 61px 68px 60px; position: relative; width: min-content; }`,
          `.framer-2beQr .framer-1qlb1r8 { aspect-ratio: 1.234375 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 64px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 79px; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-2beQr .framer-iohuc8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 90px 40px 88px 40px; position: relative; width: min-content; }`,
          `.framer-2beQr .framer-62nk9g, .framer-2beQr .framer-ib3yb7 { aspect-ratio: 5.454545454545454 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 22px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 120px; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-2beQr .framer-bd2dg2, .framer-2beQr .framer-1gnu5ij { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 68px; position: relative; width: min-content; }`,
          `.framer-2beQr .framer-16f4qdj, .framer-2beQr .framer-436jth { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 64px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 64px; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-2beQr .framer-13xzr5k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 69.56px 38.28px 69.4px 30.27px; position: relative; width: min-content; }`,
          `.framer-2beQr .framer-1vyak9l { aspect-ratio: 2.1475409836065573 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 61px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 131px; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-2beQr .framer-1l89uft { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 68px 60px 68px 60px; position: relative; width: min-content; }`,
          `.framer-2beQr .framer-rwxkfk { aspect-ratio: 1.25 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 64px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 80px; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-2beQr .framer-1o4mhog { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 92.41px 40px 85px 40px; position: relative; width: min-content; }`,
          `.framer-2beQr.framer-v-gn5ml6.framer-172sjxa { width: 810px; }`,
          `.framer-2beQr.framer-v-gn5ml6 .framer-19s34ct, .framer-2beQr.framer-v-168gems .framer-19s34ct { padding: 50px 52px 50px 52px; }`,
          `.framer-2beQr.framer-v-gn5ml6 .framer-1sswmp { padding: 38px 61px 38px 60px; }`,
          `.framer-2beQr.framer-v-gn5ml6 .framer-iohuc8, .framer-2beQr.framer-v-gn5ml6 .framer-1o4mhog, .framer-2beQr.framer-v-168gems .framer-1o4mhog { padding: 59px 40px 59px 40px; }`,
          `.framer-2beQr.framer-v-gn5ml6 .framer-bd2dg2, .framer-2beQr.framer-v-gn5ml6 .framer-1gnu5ij, .framer-2beQr.framer-v-168gems .framer-bd2dg2, .framer-2beQr.framer-v-168gems .framer-1gnu5ij { padding: 38px 68px 38px 68px; }`,
          `.framer-2beQr.framer-v-gn5ml6 .framer-13xzr5k, .framer-2beQr.framer-v-168gems .framer-13xzr5k { padding: 40px 38.28px 39px 30.27px; }`,
          `.framer-2beQr.framer-v-gn5ml6 .framer-1l89uft, .framer-2beQr.framer-v-168gems .framer-1l89uft { padding: 38px 60px 38px 60px; }`,
          `.framer-2beQr.framer-v-168gems.framer-172sjxa { overflow: hidden; width: 390px; }`,
          `.framer-2beQr.framer-v-168gems .framer-1sswmp { padding: 38px 60px 38px 61px; }`,
          `.framer-2beQr.framer-v-168gems .framer-iohuc8 { padding: 59px 39px 59px 41px; }`,
          `.framer-2beQr.framer-v-168gems .framer-62nk9g, .framer-2beQr.framer-v-168gems .framer-ib3yb7 { height: var(--framer-aspect-ratio-supported, 23px); }`,
          ...I,
          `.framer-2beQr[data-border="true"]::after, .framer-2beQr [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-2beQr`
      )),
      ($.displayName = `Client logo`),
      ($.defaultProps = { height: 200, width: 1440 }),
      k($, {
        variant: {
          options: [`eLKmGreMt`, `gop9cqeKC`, `hZUYkoDes`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: A.Enum,
        },
      }),
      S(
        $,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...T(ne),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { Se as i, je as n, Y as r, $ as t };
//# sourceMappingURL=pwqJGFtS0.BuHt_ND4.mjs.map
