import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  I as i,
  L as a,
  M as ee,
  N as o,
  P as s,
  R as c,
  _ as l,
  a as u,
  c as d,
  g as f,
  h as p,
  i as m,
  j as h,
  k as g,
  l as _,
  m as v,
  n as y,
  o as b,
  p as x,
  r as te,
  t as ne,
  u as S,
  v as C,
  x as w,
} from "./react.D20wc1Tc.mjs";
import { C as T, R as E, a as D, r as O, t as k } from "./motion.B8Fudg3-.mjs";
import {
  $ as re,
  B as A,
  C as ie,
  E as j,
  Et as ae,
  J as M,
  K as oe,
  M as N,
  N as se,
  O as P,
  Ot as ce,
  P as F,
  T as I,
  Tt as le,
  V as ue,
  Y as L,
  Z as de,
  a as fe,
  at as pe,
  bt as me,
  c as he,
  ct as ge,
  d as _e,
  dt as ve,
  f as ye,
  ft as be,
  g as xe,
  h as Se,
  i as R,
  it as Ce,
  k as z,
  lt as we,
  nt as Te,
  o as B,
  ot as Ee,
  pt as V,
  q as De,
  tt as Oe,
  ut as ke,
  v as Ae,
  vt as je,
  w as H,
  wt as Me,
  x as Ne,
  xt as U,
  y as Pe,
} from "./framer.Cfrj40WT.mjs";
import {
  S as Fe,
  _ as W,
  b as Ie,
  c as Le,
  d as Re,
  f as ze,
  l as Be,
  s as Ve,
  u as He,
  v as Ue,
  x as We,
  y as Ge,
} from "./shared-lib.CiHz06lb.mjs";
import { i as Ke, n as qe, r as Je, t as Ye } from "./mxragOn3s.Ca8tjX5B.mjs";
import { i as Xe, n as Ze, r as Qe, t as $e } from "./xBXqXcRep.D5Qau6Dv.mjs";
import { n as et, t as tt } from "./NBRlP0mJX.DJ1PTSpb.mjs";
function nt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  G,
  dt = e(() => {
    (b(),
      M(),
      k(),
      n(),
      Ke(),
      (rt = { X4UvvEKtt: { hover: !0 } }),
      (it = `framer-DGkiE`),
      (at = { X4UvvEKtt: `framer-v-11x8ky6` }),
      (ot = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (st = ({ value: e, children: n }) => {
        let r = g(D),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(D.Provider, { value: a, children: n });
      }),
      (ct = T.create(o)),
      (lt = ({ height: e, id: t, link: n, title: r, width: i, ...a }) => ({
        ...a,
        RHbIzuPrs: r ?? a.RHbIzuPrs ?? `About us`,
        y2ltfNPLF: n ?? a.y2ltfNPLF,
      })),
      (ut = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = U(
        f(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = C(),
            { activeLocale: ee, setLocale: s } = V();
          Ee();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: f,
              RHbIzuPrs: p,
              y2ltfNPLF: m,
              ...h
            } = lt(e),
            {
              baseVariant: g,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: te,
              setGestureState: ne,
              setVariant: S,
              variants: w,
            } = me({
              defaultVariant: `X4UvvEKtt`,
              enabledGestures: rt,
              ref: i,
              variant: f,
              variantClassNames: at,
            }),
            E = ut(e, w),
            D = N(it, Ye);
          return d(O, {
            id: u ?? a,
            children: d(ct, {
              animate: w,
              initial: !1,
              children: d(st, {
                value: ot,
                children: d(xe, {
                  href: m,
                  motionChild: !0,
                  nodeId: `X4UvvEKtt`,
                  openInNewTab: !1,
                  scopeId: `A4Kbs8qT8`,
                  smoothScroll: !0,
                  children: _(T.a, {
                    ...h,
                    ...b,
                    className: `${N(D, `framer-11x8ky6`, l, v)} framer-19azfc6`,
                    "data-framer-name": `Footer link`,
                    layoutDependency: E,
                    layoutId: `X4UvvEKtt`,
                    ref: i,
                    style: { ...c },
                    ...nt({ "X4UvvEKtt-hover": { "data-framer-name": void 0 } }, g, x),
                    children: [
                      d(I, {
                        __fromCanvasComponent: !0,
                        children: d(o, {
                          children: d(T.h6, {
                            className: `framer-styles-preset-b6eh5x`,
                            "data-styles-preset": `mxragOn3s`,
                            children: `About us`,
                          }),
                        }),
                        className: `framer-b0oigz`,
                        fonts: [`Inter`],
                        layoutDependency: E,
                        layoutId: `SnMIGVyZb`,
                        style: {
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: p,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                      d(T.div, {
                        className: `framer-uod53f`,
                        "data-framer-name": `Underline`,
                        layoutDependency: E,
                        layoutId: `WREAiqi_1`,
                        style: {
                          backgroundColor: `var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18))`,
                        },
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
          `.framer-DGkiE.framer-19azfc6, .framer-DGkiE .framer-19azfc6 { display: block; }`,
          `.framer-DGkiE.framer-11x8ky6 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-DGkiE .framer-b0oigz { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-DGkiE .framer-uod53f { bottom: 2px; flex: none; height: 1px; left: -2px; overflow: hidden; position: absolute; width: 1%; z-index: 1; }`,
          `.framer-DGkiE.framer-v-11x8ky6.hover .framer-uod53f { width: 100%; }`,
          ...qe,
        ],
        `framer-DGkiE`
      )),
      (G.displayName = `Footer link`),
      (G.defaultProps = { height: 32, width: 94.5 }),
      z(G, {
        RHbIzuPrs: {
          defaultValue: `About us`,
          displayTextArea: !1,
          title: `Title`,
          type: B.String,
        },
        onRHbIzuPrsChange: { changes: `RHbIzuPrs`, type: B.ChangeHandler },
        y2ltfNPLF: { title: `Link`, type: B.Link },
      }),
      P(
        G,
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
          ...ue(Je),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function ft(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct = e(() => {
    (b(),
      M(),
      k(),
      n(),
      (pt = [`llUoHD0fo`, `cRJ9VTUgM`, `X9J1kHUA0`]),
      (mt = `framer-Z6VuR`),
      (ht = {
        cRJ9VTUgM: `framer-v-1smfc2z`,
        llUoHD0fo: `framer-v-fioe8l`,
        X9J1kHUA0: `framer-v-1fd67nh`,
      }),
      (gt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (_t = ({ value: e, children: n }) => {
        let r = g(D),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(D.Provider, { value: a, children: n });
      }),
      (vt = { Desktop: `llUoHD0fo`, Phone: `X9J1kHUA0`, Tablet: `cRJ9VTUgM` }),
      (yt = T.create(o)),
      (bt = ({ height: e, id: t, link: n, width: r, ...i }) => ({
        ...i,
        iElh0bR0M: n ?? i.iElh0bR0M,
        variant: vt[i.variant] ?? i.variant ?? `llUoHD0fo`,
      })),
      (xt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (St = U(
        f(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = C(),
            { activeLocale: ee, setLocale: s } = V();
          Ee();
          let { style: c, className: l, layoutId: u, variant: f, iElh0bR0M: p, ...m } = bt(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: v,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: x,
              setGestureState: te,
              setVariant: ne,
              variants: S,
            } = me({
              cycleOrder: pt,
              defaultVariant: `llUoHD0fo`,
              ref: i,
              variant: f,
              variantClassNames: ht,
            }),
            w = xt(e, S),
            E = N(mt);
          return d(O, {
            id: u ?? a,
            children: d(yt, {
              animate: S,
              initial: !1,
              children: d(_t, {
                value: gt,
                children: d(xe, {
                  href: p,
                  motionChild: !0,
                  nodeId: `llUoHD0fo`,
                  openInNewTab: !1,
                  scopeId: `ATYC60UQh`,
                  children: _(T.a, {
                    ...m,
                    ...y,
                    className: `${N(E, `framer-fioe8l`, l, g)} framer-1t7087f`,
                    "data-framer-name": `Desktop`,
                    layoutDependency: w,
                    layoutId: `llUoHD0fo`,
                    ref: i,
                    style: { ...c },
                    ...ft(
                      {
                        cRJ9VTUgM: { "data-framer-name": `Tablet` },
                        X9J1kHUA0: { "data-framer-name": `Phone` },
                      },
                      h,
                      b
                    ),
                    children: [
                      _(T.div, {
                        className: `framer-1y73ipe`,
                        "data-framer-name": `wrapper`,
                        layoutDependency: w,
                        layoutId: `il9BESzto`,
                        children: [
                          d(T.div, {
                            className: `framer-h031j7`,
                            "data-framer-name": `Large`,
                            layoutDependency: w,
                            layoutId: `dOhCoEas2`,
                            style: {
                              background: `linear-gradient(90deg, var(--token-9865ed8d-00ba-4af5-9819-d475df51881b, rgb(85, 89, 92)) 0%, var(--token-339d6679-9119-4830-8fff-e9918e64dbd7, rgb(0, 0, 0)) 100%)`,
                              borderBottomRightRadius: 999,
                              borderTopRightRadius: 999,
                              boxShadow: `0px 2.77px 2.21px 0px var(--token-ab8dd3e6-1175-4b94-a998-2b40fe2f16ff, rgba(0, 0, 0, 0.12)), 0px 6.65px 5.32px 0px var(--token-21df02e0-c7ba-44bf-a3ba-af71c2eb4ced, rgba(0, 0, 0, 0.13)), 4px 12.52px 10.2px 0px var(--token-af299f98-dd0a-48c1-a232-3333d53792e8, rgba(0, 0, 0, 0.14)), 10px 22.34px 17px 0px var(--token-26f70c96-97b4-43a1-a85c-15fa2db248aa, rgba(0, 0, 0, 0.15)), 20px 41px 33px 0px var(--token-26f70c96-97b4-43a1-a85c-15fa2db248aa, rgba(0, 0, 0, 0.15)), 60px 50px 80px 0px var(--token-26f70c96-97b4-43a1-a85c-15fa2db248aa, rgba(0, 0, 0, 0.15)), 0px 3px 3px 0px var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1)), inset 0px -6px 0px 1px var(--token-749bc66f-56ff-4a90-abf3-0d699632a8e1, rgba(255, 255, 255, 0.1)), inset 0px -5px 0px 0px var(--token-54f49a39-1fca-439f-bc5d-f3fc47dd7074, rgb(26, 26, 26)), inset 0px 1px 0px 0px var(--token-46dd9299-bbaf-4442-b126-5314566efc41, rgba(255, 255, 255, 0.6))`,
                            },
                          }),
                          d(T.div, {
                            className: `framer-10xio0n`,
                            "data-framer-name": `Large`,
                            layoutDependency: w,
                            layoutId: `HFQLcKiwD`,
                            style: {
                              background: `linear-gradient(90deg, var(--token-9865ed8d-00ba-4af5-9819-d475df51881b, rgb(85, 89, 92)) 0%, var(--token-339d6679-9119-4830-8fff-e9918e64dbd7, rgb(0, 0, 0)) 100%)`,
                              borderBottomRightRadius: 999,
                              borderTopRightRadius: 999,
                              boxShadow: `0px 2.77px 2.21px 0px var(--token-ab8dd3e6-1175-4b94-a998-2b40fe2f16ff, rgba(0, 0, 0, 0.12)), 0px 6.65px 5.32px 0px var(--token-21df02e0-c7ba-44bf-a3ba-af71c2eb4ced, rgba(0, 0, 0, 0.13)), 4px 12.52px 10.2px 0px var(--token-af299f98-dd0a-48c1-a232-3333d53792e8, rgba(0, 0, 0, 0.14)), 10px 22.34px 17px 0px var(--token-26f70c96-97b4-43a1-a85c-15fa2db248aa, rgba(0, 0, 0, 0.15)), 20px 41px 33px 0px var(--token-26f70c96-97b4-43a1-a85c-15fa2db248aa, rgba(0, 0, 0, 0.15)), 60px 50px 80px 0px var(--token-26f70c96-97b4-43a1-a85c-15fa2db248aa, rgba(0, 0, 0, 0.15)), 0px 3px 3px 0px var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1)), inset 0px -6px 0px 1px var(--token-749bc66f-56ff-4a90-abf3-0d699632a8e1, rgba(255, 255, 255, 0.1)), inset 0px -5px 0px 0px var(--token-54f49a39-1fca-439f-bc5d-f3fc47dd7074, rgb(26, 26, 26)), inset 0px 1px 0px 0px var(--token-46dd9299-bbaf-4442-b126-5314566efc41, rgba(255, 255, 255, 0.6))`,
                            },
                          }),
                        ],
                      }),
                      _(T.div, {
                        className: `framer-1c4ffsh`,
                        "data-framer-name": `Nav logo`,
                        layoutDependency: w,
                        layoutId: `HSJ18NFwn`,
                        children: [
                          d(I, {
                            __fromCanvasComponent: !0,
                            children: d(o, {
                              children: d(T.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7VXJiYW5pc3Qtc2VtaWJvbGQ=`,
                                  "--framer-font-family": `"Urbanist", "Urbanist Placeholder", sans-serif`,
                                  "--framer-font-size": `169px`,
                                  "--framer-font-weight": `600`,
                                  "--framer-line-height": `160px`,
                                },
                                children: d(T.span, {
                                  "data-text-fill": `true`,
                                  style: {
                                    backgroundImage: `linear-gradient(90deg, var(--token-9865ed8d-00ba-4af5-9819-d475df51881b, rgb(85, 89, 92)) 0%, var(--token-339d6679-9119-4830-8fff-e9918e64dbd7, rgb(0, 0, 0)) 100%)`,
                                  },
                                  children: `CodeCrafters`,
                                }),
                              }),
                            }),
                            className: `framer-10upp7k`,
                            fonts: [`FS;Urbanist-semibold`],
                            layoutDependency: w,
                            layoutId: `T0rb_2wsz`,
                            style: {
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...ft(
                              {
                                cRJ9VTUgM: {
                                  children: d(o, {
                                    children: d(T.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7VXJiYW5pc3Qtc2VtaWJvbGQ=`,
                                        "--framer-font-family": `"Urbanist", "Urbanist Placeholder", sans-serif`,
                                        "--framer-font-size": `100px`,
                                        "--framer-font-weight": `600`,
                                        "--framer-line-height": `100px`,
                                      },
                                      children: d(T.span, {
                                        "data-text-fill": `true`,
                                        style: {
                                          backgroundImage: `linear-gradient(90deg, var(--token-9865ed8d-00ba-4af5-9819-d475df51881b, rgb(85, 89, 92)) 0%, var(--token-339d6679-9119-4830-8fff-e9918e64dbd7, rgb(0, 0, 0)) 100%)`,
                                        },
                                        children: `CodeCrafters`,
                                      }),
                                    }),
                                  }),
                                },
                                X9J1kHUA0: {
                                  children: d(o, {
                                    children: d(T.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7VXJiYW5pc3Qtc2VtaWJvbGQ=`,
                                        "--framer-font-family": `"Urbanist", "Urbanist Placeholder", sans-serif`,
                                        "--framer-font-size": `40px`,
                                        "--framer-font-weight": `600`,
                                        "--framer-line-height": `40px`,
                                      },
                                      children: d(T.span, {
                                        "data-text-fill": `true`,
                                        style: {
                                          backgroundImage: `linear-gradient(90deg, var(--token-9865ed8d-00ba-4af5-9819-d475df51881b, rgb(85, 89, 92)) 0%, var(--token-339d6679-9119-4830-8fff-e9918e64dbd7, rgb(0, 0, 0)) 100%)`,
                                        },
                                        children: `CodeCrafters`,
                                      }),
                                    }),
                                  }),
                                },
                              },
                              h,
                              b
                            ),
                          }),
                          d(I, {
                            __fromCanvasComponent: !0,
                            children: d(o, {
                              children: d(T.p, {
                                style: {
                                  "--font-selector": `RlM7VXJiYW5pc3Qtc2VtaWJvbGQ=`,
                                  "--framer-font-family": `"Urbanist", "Urbanist Placeholder", sans-serif`,
                                  "--framer-font-size": `48px`,
                                  "--framer-font-weight": `600`,
                                  "--framer-line-height": `0.8em`,
                                },
                                children: d(T.span, {
                                  "data-text-fill": `true`,
                                  style: {
                                    backgroundImage: `linear-gradient(90deg, rgb(85, 89, 92) 0%, rgb(0, 0, 0) 100%)`,
                                  },
                                  children: `TM`,
                                }),
                              }),
                            }),
                            className: `framer-182t6t8`,
                            fonts: [`FS;Urbanist-semibold`],
                            layoutDependency: w,
                            layoutId: `ICRuMuR2Q`,
                            style: {
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...ft(
                              {
                                cRJ9VTUgM: {
                                  children: d(o, {
                                    children: d(T.p, {
                                      style: {
                                        "--font-selector": `RlM7VXJiYW5pc3Qtc2VtaWJvbGQ=`,
                                        "--framer-font-family": `"Urbanist", "Urbanist Placeholder", sans-serif`,
                                        "--framer-font-size": `38px`,
                                        "--framer-font-weight": `600`,
                                        "--framer-line-height": `0.8em`,
                                      },
                                      children: d(T.span, {
                                        "data-text-fill": `true`,
                                        style: {
                                          backgroundImage: `linear-gradient(90deg, rgb(85, 89, 92) 0%, rgb(0, 0, 0) 100%)`,
                                        },
                                        children: `TM`,
                                      }),
                                    }),
                                  }),
                                },
                                X9J1kHUA0: {
                                  children: d(o, {
                                    children: d(T.p, {
                                      style: {
                                        "--font-selector": `RlM7VXJiYW5pc3Qtc2VtaWJvbGQ=`,
                                        "--framer-font-family": `"Urbanist", "Urbanist Placeholder", sans-serif`,
                                        "--framer-font-size": `18px`,
                                        "--framer-font-weight": `600`,
                                        "--framer-line-height": `18px`,
                                      },
                                      children: d(T.span, {
                                        "data-text-fill": `true`,
                                        style: {
                                          backgroundImage: `linear-gradient(90deg, rgb(85, 89, 92) 0%, rgb(0, 0, 0) 100%)`,
                                        },
                                        children: `TM`,
                                      }),
                                    }),
                                  }),
                                },
                              },
                              h,
                              b
                            ),
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
          `.framer-Z6VuR.framer-1t7087f, .framer-Z6VuR .framer-1t7087f { display: block; }`,
          `.framer-Z6VuR.framer-fioe8l { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 62px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-Z6VuR .framer-1y73ipe { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-Z6VuR .framer-h031j7 { aspect-ratio: 0.5714285714285714 / 1; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 54px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Z6VuR .framer-10xio0n { flex: none; height: 156px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 80px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Z6VuR .framer-1c4ffsh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-Z6VuR .framer-10upp7k, .framer-Z6VuR .framer-182t6t8 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-Z6VuR.framer-v-1smfc2z.framer-fioe8l { gap: 50px; }`,
          `.framer-Z6VuR.framer-v-1smfc2z .framer-h031j7 { width: 50px; }`,
          `.framer-Z6VuR.framer-v-1smfc2z .framer-10xio0n { height: 135px; width: 74px; }`,
          `.framer-Z6VuR.framer-v-1fd67nh.framer-fioe8l { gap: 12px; }`,
          `.framer-Z6VuR.framer-v-1fd67nh .framer-h031j7 { width: 27px; }`,
          `.framer-Z6VuR.framer-v-1fd67nh .framer-10xio0n { height: 67px; width: 39px; }`,
        ],
        `framer-Z6VuR`
      )),
      (St.displayName = `Footer logo`),
      (St.defaultProps = { height: 160, width: 1296.83 }),
      z(St, {
        variant: {
          options: [`llUoHD0fo`, `cRJ9VTUgM`, `X9J1kHUA0`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: B.Enum,
        },
        iElh0bR0M: { title: `Link`, type: B.Link },
      }),
      P(
        St,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Urbanist`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Urbanist`,
                url: `../../assets/misc/QAJFELFQRETRXRXDQOALZZUXNPM2U5VX.woff2`,
                weight: `600`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  wt,
  Tt,
  Et,
  Dt,
  Ot = e(() => {
    (b(),
      M(),
      n(),
      (wt = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 6 L 6 0 L 12 6" fill="transparent" height="6px" id="aFNPzjOvY" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--1df8v9o, rgb(0,0,0))" transform="translate(6 9)" width="12px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Tt = f((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? d(T.div, { ...a, layoutId: r, ref: t }) : d(`div`, { ...a, ref: t });
      })),
      (Et = ({ height: e, id: t, stroke: n, width: r, ...i }) => ({
        ...i,
        n2nHSaXfp: n ?? i.n2nHSaXfp ?? `rgb(0, 0, 0)`,
      })),
      (Dt = U(
        f(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, n2nHSaXfp: ee, ...o } = Et(e);
          return d(Tt, {
            ...o,
            className: N(`framer-658ZH`, r),
            layoutId: i,
            ref: t,
            style: { "--1df8v9o": ee, ...n },
          });
        }),
        [
          `.framer-658ZH { -webkit-mask: ${wt}; aspect-ratio: 1; background-color: var(--1df8v9o); mask: ${wt}; width: 24px; }`,
        ],
        `framer-658ZH`
      )),
      (Dt.displayName = `Angle Up`),
      z(Dt, {
        n2nHSaXfp: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: B.Color },
      }));
  });
function kt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  K,
  Ht = e(() => {
    (b(),
      M(),
      k(),
      n(),
      Ot(),
      Fe(),
      (At = A(Dt)),
      (jt = { KLq0RDRZD: { hover: !0 }, W9hyaSQRI: { hover: !0 } }),
      (Mt = [`KLq0RDRZD`, `W9hyaSQRI`]),
      (Nt = `framer-PbxYr`),
      (Pt = { KLq0RDRZD: `framer-v-1hi3sqx`, W9hyaSQRI: `framer-v-1wvzahs` }),
      (Ft = { damping: 40, delay: 0, mass: 1, stiffness: 300, type: `spring` }),
      (It = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Lt = ({ value: e, children: n }) => {
        let r = g(D),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(D.Provider, { value: a, children: n });
      }),
      (Rt = { "Footer social link": `W9hyaSQRI` }),
      (zt = T.create(o)),
      (Bt = ({ height: e, id: t, link: n, text: r, width: i, ...a }) => ({
        ...a,
        lDr0OUXDR: r ?? a.lDr0OUXDR ?? `Back to Top`,
        variant: Rt[a.variant] ?? a.variant ?? `KLq0RDRZD`,
        ZJtrqHG60: n ?? a.ZJtrqHG60,
      })),
      (Vt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = U(
        f(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = C(),
            { activeLocale: ee, setLocale: s } = V();
          Ee();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: f,
              ZJtrqHG60: p,
              lDr0OUXDR: m,
              ...h
            } = Bt(e),
            {
              baseVariant: g,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: te,
              setGestureState: ne,
              setVariant: S,
              variants: w,
            } = me({
              cycleOrder: Mt,
              defaultVariant: `KLq0RDRZD`,
              enabledGestures: jt,
              ref: i,
              variant: f,
              variantClassNames: Pt,
            }),
            E = Vt(e, w),
            D = N(Nt, Ge),
            k = () => !(x === `W9hyaSQRI-hover` || g === `W9hyaSQRI`),
            re = () => x === `W9hyaSQRI-hover` || g === `W9hyaSQRI`;
          return d(O, {
            id: u ?? a,
            children: d(zt, {
              animate: w,
              initial: !1,
              children: d(Lt, {
                value: Ft,
                ...kt({ W9hyaSQRI: { value: It } }, g, x),
                children: d(xe, {
                  href: p,
                  motionChild: !0,
                  nodeId: `KLq0RDRZD`,
                  openInNewTab: !1,
                  scopeId: `orVtDAlxH`,
                  smoothScroll: !0,
                  children: _(T.a, {
                    ...h,
                    ...b,
                    className: `${N(D, `framer-1hi3sqx`, l, v)} framer-1p0118n`,
                    "data-framer-name": `Footer social link`,
                    layoutDependency: E,
                    layoutId: `KLq0RDRZD`,
                    ref: i,
                    style: { opacity: 1, ...c },
                    variants: {
                      "KLq0RDRZD-hover": { opacity: 0.85 },
                      "W9hyaSQRI-hover": { opacity: 1 },
                    },
                    ...kt(
                      {
                        "KLq0RDRZD-hover": { "data-framer-name": void 0 },
                        "W9hyaSQRI-hover": { "data-framer-name": void 0 },
                      },
                      g,
                      x
                    ),
                    children: [
                      d(I, {
                        __fromCanvasComponent: !0,
                        children: d(o, {
                          children: d(T.p, {
                            className: `framer-styles-preset-ssp3c`,
                            "data-styles-preset": `bFgW78cfL`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18)))`,
                            },
                            children: `Back to Top`,
                          }),
                        }),
                        className: `framer-1empho4`,
                        fonts: [`Inter`],
                        layoutDependency: E,
                        layoutId: `WBx8CiTGA`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: m,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                      k() &&
                        d(Dt, {
                          animated: !0,
                          className: `framer-649oam`,
                          "data-framer-name": `Icon`,
                          layoutDependency: E,
                          layoutId: `cq5eWces4`,
                          style: {
                            "--1df8v9o": `var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18))`,
                            rotate: 0,
                          },
                          variants: { "KLq0RDRZD-hover": { rotate: 180 } },
                        }),
                      re() &&
                        d(T.div, {
                          className: `framer-139900o`,
                          "data-framer-name": `Underline`,
                          layoutDependency: E,
                          layoutId: `d1hfjZQph`,
                          style: {
                            backgroundColor: `var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18))`,
                          },
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
          `.framer-PbxYr.framer-1p0118n, .framer-PbxYr .framer-1p0118n { display: block; }`,
          `.framer-PbxYr.framer-1hi3sqx { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-PbxYr .framer-1empho4 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-PbxYr .framer-649oam { flex: none; height: var(--framer-aspect-ratio-supported, 16px); position: relative; width: 16px; }`,
          `.framer-PbxYr .framer-139900o { bottom: 2px; flex: none; height: 1px; left: -2px; overflow: hidden; position: absolute; width: 1%; z-index: 1; }`,
          `.framer-PbxYr.framer-v-1wvzahs.framer-1hi3sqx { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 0px; justify-content: flex-start; }`,
          `.framer-PbxYr.framer-v-1wvzahs.hover .framer-139900o { width: 100%; }`,
          ...Ie,
        ],
        `framer-PbxYr`
      )),
      (K.displayName = `Footer social link`),
      (K.defaultProps = { height: 20, width: 97 }),
      z(K, {
        variant: {
          options: [`KLq0RDRZD`, `W9hyaSQRI`],
          optionTitles: [`Footer social link`, `Footer social link`],
          title: `Variant`,
          type: B.Enum,
        },
        ZJtrqHG60: { title: `Link`, type: B.Link },
        lDr0OUXDR: {
          defaultValue: `Back to Top`,
          displayTextArea: !1,
          title: `Text`,
          type: B.String,
        },
        onlDr0OUXDRChange: { changes: `lDr0OUXDR`, type: B.ChangeHandler },
      }),
      P(
        K,
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
          ...At,
          ...ue(We),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  J,
  Zt,
  Qt,
  $t,
  en,
  tn,
  Y,
  nn = e(() => {
    (b(),
      M(),
      k(),
      n(),
      Fe(),
      dt(),
      Ct(),
      Ht(),
      Ue(),
      (Ut = A(G)),
      (Wt = A(St)),
      (Gt = A(W)),
      (Kt = A(K)),
      (qt = [`JBRN9m83B`, `zjkYPb75y`, `oVjD_NiJa`]),
      (Jt = `framer-0xORW`),
      (Yt = {
        JBRN9m83B: `framer-v-13arl5r`,
        oVjD_NiJa: `framer-v-1f0n9i1`,
        zjkYPb75y: `framer-v-mg0z1e`,
      }),
      (Xt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (J = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Zt = ({ value: e, children: n }) => {
        let r = g(D),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(D.Provider, { value: a, children: n });
      }),
      (Qt = { Desktop: `JBRN9m83B`, Phone: `oVjD_NiJa`, Tablet: `zjkYPb75y` }),
      ($t = T.create(o)),
      (en = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Qt[r.variant] ?? r.variant ?? `JBRN9m83B`,
      })),
      (tn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = U(
        f(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = C(),
            { activeLocale: ee, setLocale: s } = V(),
            c = Ee(),
            { style: l, className: u, layoutId: f, variant: p, ...m } = en(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: v,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: x,
              setGestureState: te,
              setVariant: ne,
              variants: S,
            } = me({
              cycleOrder: qt,
              defaultVariant: `JBRN9m83B`,
              ref: i,
              variant: p,
              variantClassNames: Yt,
            }),
            w = tn(e, S),
            E = N(Jt, Ge);
          je();
          let D = () => h !== `oVjD_NiJa`;
          return d(O, {
            id: f ?? a,
            children: d($t, {
              animate: S,
              initial: !1,
              children: d(Zt, {
                value: Xt,
                children: d(T.footer, {
                  ...m,
                  ...y,
                  className: N(E, `framer-13arl5r`, u, g),
                  "data-framer-name": `Desktop`,
                  layoutDependency: w,
                  layoutId: `JBRN9m83B`,
                  ref: i,
                  style: { ...l },
                  ...q(
                    {
                      oVjD_NiJa: { "data-framer-name": `Phone` },
                      zjkYPb75y: { "data-framer-name": `Tablet` },
                    },
                    h,
                    b
                  ),
                  children: d(T.div, {
                    className: `framer-3jo4pd`,
                    "data-framer-name": `Container`,
                    layoutDependency: w,
                    layoutId: `m9hNfH0EF`,
                    style: {
                      backgroundColor: `var(--token-6a136aea-db2c-4f64-b96e-534e0d7e9163, rgb(243, 244, 246))`,
                    },
                    children: _(T.div, {
                      className: `framer-kcfb3w`,
                      "data-border": !0,
                      "data-framer-name": `Main wrapper`,
                      layoutDependency: w,
                      layoutId: `jQkZih1da`,
                      style: {
                        "--border-bottom-width": `0px`,
                        "--border-color": `var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `0px`,
                      },
                      children: [
                        _(T.div, {
                          className: `framer-xfuntv`,
                          "data-border": !0,
                          "data-framer-name": `Link wrapper`,
                          layoutDependency: w,
                          layoutId: `GcdymGuNJ`,
                          style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1))`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0px`,
                          },
                          children: [
                            d(H, {
                              links: [
                                {
                                  href: { hash: `about-us`, webPageId: `V2Ho_ZYv2` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { hash: `about-us`, webPageId: `V2Ho_ZYv2` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { hash: `about-us`, webPageId: `V2Ho_ZYv2` },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                d(R, {
                                  height: 32,
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 668) - 0 - 788) / 2 + 0 + 0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    64,
                                  ...q(
                                    {
                                      oVjD_NiJa: {
                                        y:
                                          (c?.y || 0) +
                                          0 +
                                          (((c?.height || 200) - 0 - 846) / 2 + 0 + 0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          44 +
                                          0,
                                      },
                                      zjkYPb75y: {
                                        y:
                                          (c?.y || 0) +
                                          0 +
                                          (((c?.height || 623) - 0 - 768) / 2 + 0 + 0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          54,
                                      },
                                    },
                                    h,
                                    b
                                  ),
                                  children: d(j, {
                                    className: `framer-skbyfs-container`,
                                    "data-framer-name": `Footer link`,
                                    layoutDependency: w,
                                    layoutId: `uTzBGKkBY-container`,
                                    name: `Footer link`,
                                    nodeId: `uTzBGKkBY`,
                                    rendersWithMotion: !0,
                                    scopeId: `eRPCYJKKQ`,
                                    children: d(G, {
                                      height: `100%`,
                                      id: `uTzBGKkBY`,
                                      layoutId: `uTzBGKkBY`,
                                      name: `Footer link`,
                                      RHbIzuPrs: `About us`,
                                      width: `100%`,
                                      y2ltfNPLF: e[0],
                                      ...q(
                                        {
                                          oVjD_NiJa: { y2ltfNPLF: e[2] },
                                          zjkYPb75y: { y2ltfNPLF: e[1] },
                                        },
                                        h,
                                        b
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            D() &&
                              d(T.div, {
                                className: `framer-1fml0fu`,
                                "data-framer-name": `Square`,
                                layoutDependency: w,
                                layoutId: `XBUP063o7`,
                                style: {
                                  backgroundColor: `var(--token-697a1175-e86a-44f8-8b7f-9f4d44f05ad4, rgba(3, 7, 18, 0.1))`,
                                },
                              }),
                            d(H, {
                              links: [
                                {
                                  href: { hash: `services`, webPageId: `V2Ho_ZYv2` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { hash: `services`, webPageId: `V2Ho_ZYv2` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { hash: `services`, webPageId: `V2Ho_ZYv2` },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                d(R, {
                                  height: 32,
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 668) - 0 - 788) / 2 + 0 + 0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    64,
                                  ...q(
                                    {
                                      oVjD_NiJa: {
                                        y:
                                          (c?.y || 0) +
                                          0 +
                                          (((c?.height || 200) - 0 - 846) / 2 + 0 + 0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          44 +
                                          50,
                                      },
                                      zjkYPb75y: {
                                        y:
                                          (c?.y || 0) +
                                          0 +
                                          (((c?.height || 623) - 0 - 768) / 2 + 0 + 0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          54,
                                      },
                                    },
                                    h,
                                    b
                                  ),
                                  children: d(j, {
                                    className: `framer-19vyi1c-container`,
                                    "data-framer-name": `Footer link`,
                                    layoutDependency: w,
                                    layoutId: `ALOaWtKGv-container`,
                                    name: `Footer link`,
                                    nodeId: `ALOaWtKGv`,
                                    rendersWithMotion: !0,
                                    scopeId: `eRPCYJKKQ`,
                                    children: d(G, {
                                      height: `100%`,
                                      id: `ALOaWtKGv`,
                                      layoutId: `ALOaWtKGv`,
                                      name: `Footer link`,
                                      RHbIzuPrs: `Services`,
                                      width: `100%`,
                                      y2ltfNPLF: e[0],
                                      ...q(
                                        {
                                          oVjD_NiJa: { y2ltfNPLF: e[2] },
                                          zjkYPb75y: { y2ltfNPLF: e[1] },
                                        },
                                        h,
                                        b
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            D() &&
                              d(T.div, {
                                className: `framer-14zpnmb`,
                                "data-framer-name": `Square`,
                                layoutDependency: w,
                                layoutId: `hBnx6_bxv`,
                                style: {
                                  backgroundColor: `var(--token-697a1175-e86a-44f8-8b7f-9f4d44f05ad4, rgba(3, 7, 18, 0.1))`,
                                },
                              }),
                            d(H, {
                              links: [
                                {
                                  href: { hash: `our-vision`, webPageId: `V2Ho_ZYv2` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { hash: `our-vision`, webPageId: `V2Ho_ZYv2` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { hash: `our-vision`, webPageId: `V2Ho_ZYv2` },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                d(R, {
                                  height: 32,
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 668) - 0 - 788) / 2 + 0 + 0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    64,
                                  ...q(
                                    {
                                      oVjD_NiJa: {
                                        y:
                                          (c?.y || 0) +
                                          0 +
                                          (((c?.height || 200) - 0 - 846) / 2 + 0 + 0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          44 +
                                          100,
                                      },
                                      zjkYPb75y: {
                                        y:
                                          (c?.y || 0) +
                                          0 +
                                          (((c?.height || 623) - 0 - 768) / 2 + 0 + 0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          54,
                                      },
                                    },
                                    h,
                                    b
                                  ),
                                  children: d(j, {
                                    className: `framer-6sbh0e-container`,
                                    "data-framer-name": `Footer link`,
                                    layoutDependency: w,
                                    layoutId: `KMH09p_2y-container`,
                                    name: `Footer link`,
                                    nodeId: `KMH09p_2y`,
                                    rendersWithMotion: !0,
                                    scopeId: `eRPCYJKKQ`,
                                    children: d(G, {
                                      height: `100%`,
                                      id: `KMH09p_2y`,
                                      layoutId: `KMH09p_2y`,
                                      name: `Footer link`,
                                      RHbIzuPrs: `Our Vision`,
                                      width: `100%`,
                                      y2ltfNPLF: e[0],
                                      ...q(
                                        {
                                          oVjD_NiJa: { y2ltfNPLF: e[2] },
                                          zjkYPb75y: { y2ltfNPLF: e[1] },
                                        },
                                        h,
                                        b
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            D() &&
                              d(T.div, {
                                className: `framer-nj4aqx`,
                                "data-framer-name": `Square`,
                                layoutDependency: w,
                                layoutId: `W2GjJlDIN`,
                                style: {
                                  backgroundColor: `var(--token-697a1175-e86a-44f8-8b7f-9f4d44f05ad4, rgba(3, 7, 18, 0.1))`,
                                },
                              }),
                            d(H, {
                              links: [
                                {
                                  href: { hash: `contact`, webPageId: `V2Ho_ZYv2` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { hash: `contact`, webPageId: `V2Ho_ZYv2` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { hash: `contact`, webPageId: `V2Ho_ZYv2` },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                d(R, {
                                  height: 32,
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 668) - 0 - 788) / 2 + 0 + 0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    64,
                                  ...q(
                                    {
                                      oVjD_NiJa: {
                                        y:
                                          (c?.y || 0) +
                                          0 +
                                          (((c?.height || 200) - 0 - 846) / 2 + 0 + 0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          44 +
                                          150,
                                      },
                                      zjkYPb75y: {
                                        y:
                                          (c?.y || 0) +
                                          0 +
                                          (((c?.height || 623) - 0 - 768) / 2 + 0 + 0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          54,
                                      },
                                    },
                                    h,
                                    b
                                  ),
                                  children: d(j, {
                                    className: `framer-1awxub5-container`,
                                    "data-framer-name": `Footer link`,
                                    layoutDependency: w,
                                    layoutId: `t0OIawiEY-container`,
                                    name: `Footer link`,
                                    nodeId: `t0OIawiEY`,
                                    rendersWithMotion: !0,
                                    scopeId: `eRPCYJKKQ`,
                                    children: d(G, {
                                      height: `100%`,
                                      id: `t0OIawiEY`,
                                      layoutId: `t0OIawiEY`,
                                      name: `Footer link`,
                                      RHbIzuPrs: `Contact`,
                                      width: `100%`,
                                      y2ltfNPLF: e[0],
                                      ...q(
                                        {
                                          oVjD_NiJa: { y2ltfNPLF: e[2] },
                                          zjkYPb75y: { y2ltfNPLF: e[1] },
                                        },
                                        h,
                                        b
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                          ],
                        }),
                        _(T.div, {
                          className: `framer-7calqc`,
                          "data-border": !0,
                          "data-framer-name": `Brand wrapper`,
                          layoutDependency: w,
                          layoutId: `vcdxQLrbQ`,
                          style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1))`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0px`,
                          },
                          children: [
                            d(H, {
                              links: [
                                { href: { webPageId: `V2Ho_ZYv2` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `V2Ho_ZYv2` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `V2Ho_ZYv2` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                d(R, {
                                  height: 200,
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 668) - 0 - 788) / 2 + 0 + 0) +
                                    0 +
                                    0 +
                                    0 +
                                    160 +
                                    140,
                                  ...q(
                                    {
                                      oVjD_NiJa: {
                                        y:
                                          (c?.y || 0) +
                                          0 +
                                          (((c?.height || 200) - 0 - 846) / 2 + 0 + 0) +
                                          0 +
                                          0 +
                                          0 +
                                          270 +
                                          80,
                                      },
                                      zjkYPb75y: {
                                        y:
                                          (c?.y || 0) +
                                          0 +
                                          (((c?.height || 623) - 0 - 768) / 2 + 0 + 0) +
                                          0 +
                                          0 +
                                          0 +
                                          140 +
                                          140,
                                      },
                                    },
                                    h,
                                    b
                                  ),
                                  children: d(j, {
                                    className: `framer-iozanv-container`,
                                    layoutDependency: w,
                                    layoutId: `tKIBUrehM-container`,
                                    nodeId: `tKIBUrehM`,
                                    rendersWithMotion: !0,
                                    scopeId: `eRPCYJKKQ`,
                                    children: d(St, {
                                      height: `100%`,
                                      id: `tKIBUrehM`,
                                      iElh0bR0M: e[0],
                                      layoutId: `tKIBUrehM`,
                                      variant: J(`llUoHD0fo`),
                                      width: `100%`,
                                      ...q(
                                        {
                                          oVjD_NiJa: { iElh0bR0M: e[2], variant: J(`X9J1kHUA0`) },
                                          zjkYPb75y: { iElh0bR0M: e[1], variant: J(`cRJ9VTUgM`) },
                                        },
                                        h,
                                        b
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            _(T.div, {
                              className: `framer-zzz99h`,
                              "data-framer-name": `Pixel`,
                              layoutDependency: w,
                              layoutId: `tkQYwffC4`,
                              children: [
                                _(T.div, {
                                  className: `framer-ezkd9p`,
                                  "data-framer-name": `Top wrapper`,
                                  layoutDependency: w,
                                  layoutId: `p2Kw2elJZ`,
                                  children: [
                                    d(T.div, {
                                      className: `framer-6n5i5j`,
                                      "data-framer-name": `Pixel`,
                                      layoutDependency: w,
                                      layoutId: `FJ4Z3PbfP`,
                                      style: {
                                        backgroundColor: `var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255))`,
                                      },
                                    }),
                                    d(T.div, {
                                      className: `framer-1ecllhr`,
                                      "data-framer-name": `Pixel`,
                                      layoutDependency: w,
                                      layoutId: `imv3ui1vo`,
                                      style: {
                                        backgroundColor: `var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255))`,
                                      },
                                    }),
                                  ],
                                }),
                                d(T.div, {
                                  className: `framer-vm9boo`,
                                  "data-framer-name": `Center wrapper`,
                                  layoutDependency: w,
                                  layoutId: `TTbEMUAh3`,
                                  children: d(T.div, {
                                    className: `framer-log99t`,
                                    "data-framer-name": `Pixel`,
                                    layoutDependency: w,
                                    layoutId: `lSIJbMU12`,
                                    style: {
                                      backgroundColor: `var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255))`,
                                    },
                                  }),
                                }),
                                d(T.div, {
                                  className: `framer-15l9k3b`,
                                  "data-framer-name": `Bottom wrapper`,
                                  layoutDependency: w,
                                  layoutId: `g3Sl3wdmd`,
                                  children: d(T.div, {
                                    className: `framer-lnjuup`,
                                    "data-framer-name": `Pixel`,
                                    layoutDependency: w,
                                    layoutId: `o2uWB8wp_`,
                                    style: {
                                      backgroundColor: `var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255))`,
                                    },
                                  }),
                                }),
                              ],
                            }),
                            _(T.div, {
                              className: `framer-gudvna`,
                              "data-framer-name": `Pixel`,
                              layoutDependency: w,
                              layoutId: `G7d91O5p0`,
                              style: { rotate: -180 },
                              children: [
                                _(T.div, {
                                  className: `framer-1x5jrwl`,
                                  "data-framer-name": `Top wrapper`,
                                  layoutDependency: w,
                                  layoutId: `whTBZUYXG`,
                                  children: [
                                    d(T.div, {
                                      className: `framer-1g5u6ar`,
                                      "data-framer-name": `Pixel`,
                                      layoutDependency: w,
                                      layoutId: `axk07FZgM`,
                                      style: {
                                        backgroundColor: `var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255))`,
                                      },
                                    }),
                                    d(T.div, {
                                      className: `framer-3p8nre`,
                                      "data-framer-name": `Pixel`,
                                      layoutDependency: w,
                                      layoutId: `V4S4q2fQK`,
                                      style: {
                                        backgroundColor: `var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255))`,
                                      },
                                    }),
                                  ],
                                }),
                                d(T.div, {
                                  className: `framer-cstcjk`,
                                  "data-framer-name": `Center wrapper`,
                                  layoutDependency: w,
                                  layoutId: `LQfOYCQll`,
                                  children: d(T.div, {
                                    className: `framer-a5jt16`,
                                    "data-framer-name": `Pixel`,
                                    layoutDependency: w,
                                    layoutId: `MDdsuZqwD`,
                                    style: {
                                      backgroundColor: `var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255))`,
                                    },
                                  }),
                                }),
                                d(T.div, {
                                  className: `framer-1dgpqn5`,
                                  "data-framer-name": `Bottom wrapper`,
                                  layoutDependency: w,
                                  layoutId: `NnkPZbZp6`,
                                  children: d(T.div, {
                                    className: `framer-uka6qp`,
                                    "data-framer-name": `Pixel`,
                                    layoutDependency: w,
                                    layoutId: `TsFIkYHVw`,
                                    style: {
                                      backgroundColor: `var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255))`,
                                    },
                                  }),
                                }),
                              ],
                            }),
                            d(R, {
                              height: 6,
                              width: `6px`,
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 668) - 0 - 788) / 2 + 0 + 0) +
                                0 +
                                0 +
                                0 +
                                160 +
                                -3,
                              ...q(
                                {
                                  oVjD_NiJa: {
                                    y:
                                      (c?.y || 0) +
                                      0 +
                                      (((c?.height || 200) - 0 - 846) / 2 + 0 + 0) +
                                      0 +
                                      0 +
                                      0 +
                                      270 +
                                      -3,
                                  },
                                  zjkYPb75y: {
                                    y:
                                      (c?.y || 0) +
                                      0 +
                                      (((c?.height || 623) - 0 - 768) / 2 + 0 + 0) +
                                      0 +
                                      0 +
                                      0 +
                                      140 +
                                      -3,
                                  },
                                },
                                h,
                                b
                              ),
                              children: d(j, {
                                className: `framer-19fljgm-container`,
                                layoutDependency: w,
                                layoutId: `Nm5qlaaS7-container`,
                                nodeId: `Nm5qlaaS7`,
                                rendersWithMotion: !0,
                                scopeId: `eRPCYJKKQ`,
                                children: d(W, {
                                  height: `100%`,
                                  id: `Nm5qlaaS7`,
                                  layoutId: `Nm5qlaaS7`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: J(`MnvfFSWcm`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                            d(R, {
                              height: 6,
                              width: `6px`,
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 668) - 0 - 788) / 2 + 0 + 0) +
                                0 +
                                0 +
                                0 +
                                160 +
                                480 -
                                3,
                              ...q(
                                {
                                  oVjD_NiJa: {
                                    y:
                                      (c?.y || 0) +
                                      0 +
                                      (((c?.height || 200) - 0 - 846) / 2 + 0 + 0) +
                                      0 +
                                      0 +
                                      0 +
                                      270 +
                                      360 -
                                      3,
                                  },
                                  zjkYPb75y: {
                                    y:
                                      (c?.y || 0) +
                                      0 +
                                      (((c?.height || 623) - 0 - 768) / 2 + 0 + 0) +
                                      0 +
                                      0 +
                                      0 +
                                      140 +
                                      480 -
                                      3,
                                  },
                                },
                                h,
                                b
                              ),
                              children: d(j, {
                                className: `framer-1t3ek2q-container`,
                                layoutDependency: w,
                                layoutId: `W62tOlgv3-container`,
                                nodeId: `W62tOlgv3`,
                                rendersWithMotion: !0,
                                scopeId: `eRPCYJKKQ`,
                                children: d(W, {
                                  height: `100%`,
                                  id: `W62tOlgv3`,
                                  layoutId: `W62tOlgv3`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: J(`MnvfFSWcm`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                            d(R, {
                              height: 6,
                              width: `6px`,
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 668) - 0 - 788) / 2 + 0 + 0) +
                                0 +
                                0 +
                                0 +
                                160 +
                                -3,
                              ...q(
                                {
                                  oVjD_NiJa: {
                                    y:
                                      (c?.y || 0) +
                                      0 +
                                      (((c?.height || 200) - 0 - 846) / 2 + 0 + 0) +
                                      0 +
                                      0 +
                                      0 +
                                      270 +
                                      -3,
                                  },
                                  zjkYPb75y: {
                                    y:
                                      (c?.y || 0) +
                                      0 +
                                      (((c?.height || 623) - 0 - 768) / 2 + 0 + 0) +
                                      0 +
                                      0 +
                                      0 +
                                      140 +
                                      -3,
                                  },
                                },
                                h,
                                b
                              ),
                              children: d(j, {
                                className: `framer-1jtp22h-container`,
                                layoutDependency: w,
                                layoutId: `Jqwnhuj6Y-container`,
                                nodeId: `Jqwnhuj6Y`,
                                rendersWithMotion: !0,
                                scopeId: `eRPCYJKKQ`,
                                children: d(W, {
                                  height: `100%`,
                                  id: `Jqwnhuj6Y`,
                                  layoutId: `Jqwnhuj6Y`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: J(`MnvfFSWcm`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                            d(R, {
                              height: 6,
                              width: `6px`,
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 668) - 0 - 788) / 2 + 0 + 0) +
                                0 +
                                0 +
                                0 +
                                160 +
                                480 -
                                3,
                              ...q(
                                {
                                  oVjD_NiJa: {
                                    y:
                                      (c?.y || 0) +
                                      0 +
                                      (((c?.height || 200) - 0 - 846) / 2 + 0 + 0) +
                                      0 +
                                      0 +
                                      0 +
                                      270 +
                                      360 -
                                      3,
                                  },
                                  zjkYPb75y: {
                                    y:
                                      (c?.y || 0) +
                                      0 +
                                      (((c?.height || 623) - 0 - 768) / 2 + 0 + 0) +
                                      0 +
                                      0 +
                                      0 +
                                      140 +
                                      480 -
                                      3,
                                  },
                                },
                                h,
                                b
                              ),
                              children: d(j, {
                                className: `framer-1f2ejmc-container`,
                                layoutDependency: w,
                                layoutId: `oxJkld4ER-container`,
                                nodeId: `oxJkld4ER`,
                                rendersWithMotion: !0,
                                scopeId: `eRPCYJKKQ`,
                                children: d(W, {
                                  height: `100%`,
                                  id: `oxJkld4ER`,
                                  layoutId: `oxJkld4ER`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: J(`MnvfFSWcm`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          ],
                        }),
                        _(T.div, {
                          className: `framer-19in64d`,
                          "data-border": !0,
                          "data-framer-name": `Bottom wrapper`,
                          layoutDependency: w,
                          layoutId: `V0fZKu5Lq`,
                          style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `var(--token-e2dc21fe-e834-488a-841f-7ec3be3f65c1, rgba(152, 255, 3, 0.15))`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0px`,
                          },
                          children: [
                            _(T.div, {
                              className: `framer-ma0wgx`,
                              "data-framer-name": `Social wrapper`,
                              layoutDependency: w,
                              layoutId: `PUzmbZV_5`,
                              children: [
                                d(R, {
                                  height: 20,
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 668) - 0 - 788) / 2 + 0 + 0) +
                                    0 +
                                    0 +
                                    0 +
                                    640 +
                                    64 +
                                    0,
                                  ...q(
                                    {
                                      oVjD_NiJa: {
                                        y:
                                          (c?.y || 0) +
                                          0 +
                                          (((c?.height || 200) - 0 - 846) / 2 + 0 + 0) +
                                          0 +
                                          0 +
                                          0 +
                                          630 +
                                          24 +
                                          0 +
                                          0,
                                      },
                                      zjkYPb75y: {
                                        y:
                                          (c?.y || 0) +
                                          0 +
                                          (((c?.height || 623) - 0 - 768) / 2 + 0 + 0) +
                                          0 +
                                          0 +
                                          0 +
                                          620 +
                                          64 +
                                          0,
                                      },
                                    },
                                    h,
                                    b
                                  ),
                                  children: d(j, {
                                    className: `framer-wghi3z-container`,
                                    "data-framer-name": `Footer link`,
                                    layoutDependency: w,
                                    layoutId: `fM7WgpGXy-container`,
                                    name: `Footer link`,
                                    nodeId: `fM7WgpGXy`,
                                    rendersWithMotion: !0,
                                    scopeId: `eRPCYJKKQ`,
                                    children: d(K, {
                                      height: `100%`,
                                      id: `fM7WgpGXy`,
                                      layoutId: `fM7WgpGXy`,
                                      lDr0OUXDR: `Instagram`,
                                      name: `Footer link`,
                                      variant: J(`W9hyaSQRI`),
                                      width: `100%`,
                                      ZJtrqHG60: `https://www.instagram.com/accounts/login/?hl=en`,
                                    }),
                                  }),
                                }),
                                d(R, {
                                  height: 20,
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 668) - 0 - 788) / 2 + 0 + 0) +
                                    0 +
                                    0 +
                                    0 +
                                    640 +
                                    64 +
                                    0,
                                  ...q(
                                    {
                                      oVjD_NiJa: {
                                        y:
                                          (c?.y || 0) +
                                          0 +
                                          (((c?.height || 200) - 0 - 846) / 2 + 0 + 0) +
                                          0 +
                                          0 +
                                          0 +
                                          630 +
                                          24 +
                                          0 +
                                          0,
                                      },
                                      zjkYPb75y: {
                                        y:
                                          (c?.y || 0) +
                                          0 +
                                          (((c?.height || 623) - 0 - 768) / 2 + 0 + 0) +
                                          0 +
                                          0 +
                                          0 +
                                          620 +
                                          64 +
                                          0,
                                      },
                                    },
                                    h,
                                    b
                                  ),
                                  children: d(j, {
                                    className: `framer-1d8j1h7-container`,
                                    "data-framer-name": `Footer link`,
                                    layoutDependency: w,
                                    layoutId: `zXxcuSz67-container`,
                                    name: `Footer link`,
                                    nodeId: `zXxcuSz67`,
                                    rendersWithMotion: !0,
                                    scopeId: `eRPCYJKKQ`,
                                    children: d(K, {
                                      height: `100%`,
                                      id: `zXxcuSz67`,
                                      layoutId: `zXxcuSz67`,
                                      lDr0OUXDR: `Linkedin`,
                                      name: `Footer link`,
                                      variant: J(`W9hyaSQRI`),
                                      width: `100%`,
                                      ZJtrqHG60: `https://www.linkedin.com/login`,
                                    }),
                                  }),
                                }),
                                d(R, {
                                  height: 20,
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 668) - 0 - 788) / 2 + 0 + 0) +
                                    0 +
                                    0 +
                                    0 +
                                    640 +
                                    64 +
                                    0,
                                  ...q(
                                    {
                                      oVjD_NiJa: {
                                        y:
                                          (c?.y || 0) +
                                          0 +
                                          (((c?.height || 200) - 0 - 846) / 2 + 0 + 0) +
                                          0 +
                                          0 +
                                          0 +
                                          630 +
                                          24 +
                                          0 +
                                          0,
                                      },
                                      zjkYPb75y: {
                                        y:
                                          (c?.y || 0) +
                                          0 +
                                          (((c?.height || 623) - 0 - 768) / 2 + 0 + 0) +
                                          0 +
                                          0 +
                                          0 +
                                          620 +
                                          64 +
                                          0,
                                      },
                                    },
                                    h,
                                    b
                                  ),
                                  children: d(j, {
                                    className: `framer-lg11bf-container`,
                                    "data-framer-name": `Footer link`,
                                    layoutDependency: w,
                                    layoutId: `N8nEfaVGg-container`,
                                    name: `Footer link`,
                                    nodeId: `N8nEfaVGg`,
                                    rendersWithMotion: !0,
                                    scopeId: `eRPCYJKKQ`,
                                    children: d(K, {
                                      height: `100%`,
                                      id: `N8nEfaVGg`,
                                      layoutId: `N8nEfaVGg`,
                                      lDr0OUXDR: `Dribble`,
                                      name: `Footer link`,
                                      variant: J(`W9hyaSQRI`),
                                      width: `100%`,
                                      ZJtrqHG60: `https://dribbble.com/`,
                                    }),
                                  }),
                                }),
                                d(R, {
                                  height: 20,
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 668) - 0 - 788) / 2 + 0 + 0) +
                                    0 +
                                    0 +
                                    0 +
                                    640 +
                                    64 +
                                    0,
                                  ...q(
                                    {
                                      oVjD_NiJa: {
                                        y:
                                          (c?.y || 0) +
                                          0 +
                                          (((c?.height || 200) - 0 - 846) / 2 + 0 + 0) +
                                          0 +
                                          0 +
                                          0 +
                                          630 +
                                          24 +
                                          0 +
                                          0,
                                      },
                                      zjkYPb75y: {
                                        y:
                                          (c?.y || 0) +
                                          0 +
                                          (((c?.height || 623) - 0 - 768) / 2 + 0 + 0) +
                                          0 +
                                          0 +
                                          0 +
                                          620 +
                                          64 +
                                          0,
                                      },
                                    },
                                    h,
                                    b
                                  ),
                                  children: d(j, {
                                    className: `framer-fpfmqw-container`,
                                    layoutDependency: w,
                                    layoutId: `P21uldRfQ-container`,
                                    nodeId: `P21uldRfQ`,
                                    rendersWithMotion: !0,
                                    scopeId: `eRPCYJKKQ`,
                                    children: d(K, {
                                      height: `100%`,
                                      id: `P21uldRfQ`,
                                      layoutId: `P21uldRfQ`,
                                      lDr0OUXDR: `Behance`,
                                      variant: J(`W9hyaSQRI`),
                                      width: `100%`,
                                      ZJtrqHG60: `https://www.behance.net/`,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            d(I, {
                              __fromCanvasComponent: !0,
                              children: d(o, {
                                children: d(T.p, {
                                  className: `framer-styles-preset-ssp3c`,
                                  "data-styles-preset": `bFgW78cfL`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-777d4a96-6f89-4dc7-ab72-03827dee2e5b, rgb(107, 114, 128)))`,
                                  },
                                  children: `© 2026 CodeCrafters. All Rights Reserved`,
                                }),
                              }),
                              className: `framer-9qddox`,
                              fonts: [`Inter`],
                              layoutDependency: w,
                              layoutId: `WKA2rcBaB`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-777d4a96-6f89-4dc7-ab72-03827dee2e5b, rgb(107, 114, 128))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            d(H, {
                              links: [
                                {
                                  href: { hash: `:Vo8q3wkUB`, webPageId: `V2Ho_ZYv2` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { hash: `:Vo8q3wkUB`, webPageId: `V2Ho_ZYv2` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { hash: `:Vo8q3wkUB`, webPageId: `V2Ho_ZYv2` },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                d(R, {
                                  height: 20,
                                  width: `max((min(${c?.width || `100vw`}, 1440px) - 144px) / 3, 1px)`,
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 668) - 0 - 788) / 2 + 0 + 0) +
                                    0 +
                                    0 +
                                    0 +
                                    640 +
                                    64,
                                  ...q(
                                    {
                                      oVjD_NiJa: {
                                        width: void 0,
                                        y:
                                          (c?.y || 0) +
                                          0 +
                                          (((c?.height || 200) - 0 - 846) / 2 + 0 + 0) +
                                          0 +
                                          0 +
                                          0 +
                                          630 +
                                          24 +
                                          148,
                                      },
                                      zjkYPb75y: {
                                        width: `max((min(${c?.width || `100vw`}, 1440px) - 84px) / 3, 1px)`,
                                        y:
                                          (c?.y || 0) +
                                          0 +
                                          (((c?.height || 623) - 0 - 768) / 2 + 0 + 0) +
                                          0 +
                                          0 +
                                          0 +
                                          620 +
                                          64,
                                      },
                                    },
                                    h,
                                    b
                                  ),
                                  children: d(j, {
                                    className: `framer-1vbifw-container`,
                                    "data-framer-name": `Footer link`,
                                    layoutDependency: w,
                                    layoutId: `HEi3Qpt1H-container`,
                                    name: `Footer link`,
                                    nodeId: `HEi3Qpt1H`,
                                    rendersWithMotion: !0,
                                    scopeId: `eRPCYJKKQ`,
                                    children: d(K, {
                                      height: `100%`,
                                      id: `HEi3Qpt1H`,
                                      layoutId: `HEi3Qpt1H`,
                                      lDr0OUXDR: `Back to Home`,
                                      name: `Footer link`,
                                      style: { width: `100%` },
                                      variant: J(`KLq0RDRZD`),
                                      width: `100%`,
                                      ZJtrqHG60: e[0],
                                      ...q(
                                        {
                                          oVjD_NiJa: { ZJtrqHG60: e[2] },
                                          zjkYPb75y: { ZJtrqHG60: e[1] },
                                        },
                                        h,
                                        b
                                      ),
                                    }),
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
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-0xORW.framer-hlp0rm, .framer-0xORW .framer-hlp0rm { display: block; }`,
          `.framer-0xORW.framer-13arl5r { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1440px; }`,
          `.framer-0xORW .framer-3jo4pd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px 16px 0px 16px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-0xORW .framer-kcfb3w { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-0xORW .framer-xfuntv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 64px 56px 64px 56px; position: relative; width: 100%; }`,
          `.framer-0xORW .framer-skbyfs-container, .framer-0xORW .framer-19vyi1c-container, .framer-0xORW .framer-6sbh0e-container, .framer-0xORW .framer-1awxub5-container, .framer-0xORW .framer-iozanv-container, .framer-0xORW .framer-wghi3z-container, .framer-0xORW .framer-1d8j1h7-container, .framer-0xORW .framer-lg11bf-container, .framer-0xORW .framer-fpfmqw-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-0xORW .framer-1fml0fu, .framer-0xORW .framer-14zpnmb, .framer-0xORW .framer-nj4aqx { flex: none; height: 12px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 12px; }`,
          `.framer-0xORW .framer-7calqc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 140px 56px 140px 56px; position: relative; width: 100%; }`,
          `.framer-0xORW .framer-zzz99h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; top: 0px; width: min-content; z-index: -1; }`,
          `.framer-0xORW .framer-ezkd9p, .framer-0xORW .framer-15l9k3b, .framer-0xORW .framer-1x5jrwl, .framer-0xORW .framer-1dgpqn5 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 37px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: auto; }`,
          `.framer-0xORW .framer-6n5i5j, .framer-0xORW .framer-log99t, .framer-0xORW .framer-lnjuup, .framer-0xORW .framer-1g5u6ar, .framer-0xORW .framer-a5jt16, .framer-0xORW .framer-uka6qp { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 80px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 80px; }`,
          `.framer-0xORW .framer-1ecllhr, .framer-0xORW .framer-3p8nre { flex: none; height: 80px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 160px; }`,
          `.framer-0xORW .framer-vm9boo, .framer-0xORW .framer-cstcjk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 40px 0px 0px; position: relative; width: min-content; }`,
          `.framer-0xORW .framer-gudvna { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; right: 0px; width: min-content; z-index: -1; }`,
          `.framer-0xORW .framer-19fljgm-container { flex: none; height: 6px; left: -2px; position: absolute; top: -3px; width: 6px; z-index: 0; }`,
          `.framer-0xORW .framer-1t3ek2q-container { bottom: -3px; flex: none; height: 6px; left: -2px; position: absolute; width: 6px; z-index: 0; }`,
          `.framer-0xORW .framer-1jtp22h-container { flex: none; height: 6px; position: absolute; right: -2px; top: -3px; width: 6px; z-index: 0; }`,
          `.framer-0xORW .framer-1f2ejmc-container { bottom: -3px; flex: none; height: 6px; position: absolute; right: -2px; width: 6px; z-index: 0; }`,
          `.framer-0xORW .framer-19in64d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px 56px 24px 56px; position: relative; width: 100%; }`,
          `.framer-0xORW .framer-ma0wgx { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-0xORW .framer-9qddox { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-0xORW .framer-1vbifw-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
          `.framer-0xORW.framer-v-mg0z1e.framer-13arl5r { width: 810px; }`,
          `.framer-0xORW.framer-v-mg0z1e .framer-xfuntv { padding: 54px 56px 54px 56px; }`,
          `.framer-0xORW.framer-v-mg0z1e .framer-19in64d { padding: 24px 26px 24px 26px; }`,
          `.framer-0xORW.framer-v-1f0n9i1.framer-13arl5r { width: 390px; }`,
          `.framer-0xORW.framer-v-1f0n9i1 .framer-3jo4pd { padding: 0px 12px 0px 12px; }`,
          `.framer-0xORW.framer-v-1f0n9i1 .framer-xfuntv { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 18px; justify-content: flex-start; padding: 44px 26px 44px 26px; }`,
          `.framer-0xORW.framer-v-1f0n9i1 .framer-7calqc { padding: 80px 56px 80px 56px; }`,
          `.framer-0xORW.framer-v-1f0n9i1 .framer-6n5i5j, .framer-0xORW.framer-v-1f0n9i1 .framer-lnjuup, .framer-0xORW.framer-v-1f0n9i1 .framer-1g5u6ar, .framer-0xORW.framer-v-1f0n9i1 .framer-a5jt16, .framer-0xORW.framer-v-1f0n9i1 .framer-uka6qp { width: 40px; }`,
          `.framer-0xORW.framer-v-1f0n9i1 .framer-1ecllhr, .framer-0xORW.framer-v-1f0n9i1 .framer-3p8nre { height: 40px; width: 100px; }`,
          `.framer-0xORW.framer-v-1f0n9i1 .framer-vm9boo { padding: 0px 56px 0px 0px; }`,
          `.framer-0xORW.framer-v-1f0n9i1 .framer-log99t { height: var(--framer-aspect-ratio-supported, 4px); width: 40px; }`,
          `.framer-0xORW.framer-v-1f0n9i1 .framer-19in64d { flex-direction: column; gap: 14px; padding: 24px 26px 24px 26px; }`,
          `.framer-0xORW.framer-v-1f0n9i1 .framer-ma0wgx, .framer-0xORW.framer-v-1f0n9i1 .framer-9qddox { flex: none; width: 100%; }`,
          `.framer-0xORW.framer-v-1f0n9i1 .framer-1vbifw-container { flex: none; width: auto; }`,
          ...Ie,
          `.framer-0xORW[data-border="true"]::after, .framer-0xORW [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-0xORW`
      )),
      (Y.displayName = `Footer`),
      (Y.defaultProps = { height: 668, width: 1440 }),
      z(Y, {
        variant: {
          options: [`JBRN9m83B`, `zjkYPb75y`, `oVjD_NiJa`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: B.Enum,
        },
      }),
      P(
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
          ...Ut,
          ...Wt,
          ...Gt,
          ...Kt,
          ...ue(We),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Y.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([F(G, {}, t), F(St, {}, t), F(W, {}, t), F(K, {}, t)])
        ),
      }));
  });
function rn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn = e(() => {
    (b(),
      M(),
      k(),
      n(),
      (an = { ptabhmQYC: { hover: !0 } }),
      (on = `framer-HZPAf`),
      (sn = { ptabhmQYC: `framer-v-zyd1w0` }),
      (cn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ln = ({ value: e, children: n }) => {
        let r = g(D),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(D.Provider, { value: a, children: n });
      }),
      (un = T.create(o)),
      (dn = ({ height: e, id: t, link: n, width: r, ...i }) => ({
        ...i,
        Gv2ed6Tr1: n ?? i.Gv2ed6Tr1,
      })),
      (fn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (pn = U(
        f(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = C(),
            { activeLocale: ee, setLocale: s } = V();
          Ee();
          let { style: c, className: l, layoutId: u, variant: f, Gv2ed6Tr1: p, ...m } = dn(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: v,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: x,
              setGestureState: te,
              setVariant: ne,
              variants: S,
            } = me({
              defaultVariant: `ptabhmQYC`,
              enabledGestures: an,
              ref: i,
              variant: f,
              variantClassNames: sn,
            }),
            w = fn(e, S),
            E = N(on);
          return d(O, {
            id: u ?? a,
            children: d(un, {
              animate: S,
              initial: !1,
              children: d(ln, {
                value: cn,
                children: d(xe, {
                  href: p,
                  motionChild: !0,
                  nodeId: `ptabhmQYC`,
                  openInNewTab: !1,
                  scopeId: `pEUOsC5XG`,
                  smoothScroll: !0,
                  children: _(T.a, {
                    ...m,
                    ...y,
                    className: `${N(E, `framer-zyd1w0`, l, g)} framer-68mqe6`,
                    "data-framer-name": `Nav logo`,
                    layoutDependency: w,
                    layoutId: `ptabhmQYC`,
                    ref: i,
                    style: { opacity: 1, ...c },
                    variants: { "ptabhmQYC-hover": { opacity: 0.85 } },
                    ...rn({ "ptabhmQYC-hover": { "data-framer-name": void 0 } }, h, b),
                    children: [
                      d(I, {
                        __fromCanvasComponent: !0,
                        children: d(o, {
                          children: d(T.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `RlM7VXJiYW5pc3Qtc2VtaWJvbGQ=`,
                              "--framer-font-family": `"Urbanist", "Urbanist Placeholder", sans-serif`,
                              "--framer-font-size": `32px`,
                              "--framer-font-weight": `600`,
                              "--framer-line-height": `0.96em`,
                            },
                            children: d(T.span, {
                              "data-text-fill": `true`,
                              style: {
                                backgroundImage: `linear-gradient(90deg, var(--token-9865ed8d-00ba-4af5-9819-d475df51881b, rgb(85, 89, 92)) 0%, var(--token-339d6679-9119-4830-8fff-e9918e64dbd7, rgb(0, 0, 0)) 100%)`,
                              },
                              children: `codecrafters`,
                            }),
                          }),
                        }),
                        className: `framer-13yb521`,
                        fonts: [`FS;Urbanist-semibold`],
                        layoutDependency: w,
                        layoutId: `KZ5MADPD7`,
                        style: {
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                      d(I, {
                        __fromCanvasComponent: !0,
                        children: d(o, {
                          children: d(T.p, {
                            style: {
                              "--font-selector": `RlM7VXJiYW5pc3Qtc2VtaWJvbGQ=`,
                              "--framer-font-family": `"Urbanist", "Urbanist Placeholder", sans-serif`,
                              "--framer-font-size": `9px`,
                              "--framer-font-weight": `600`,
                              "--framer-line-height": `0.8em`,
                            },
                            children: d(T.span, {
                              "data-text-fill": `true`,
                              style: {
                                backgroundImage: `linear-gradient(90deg, rgb(85, 89, 92) 0%, rgb(0, 0, 0) 100%)`,
                              },
                              children: `TM`,
                            }),
                          }),
                        }),
                        className: `framer-nnq9r5`,
                        fonts: [`FS;Urbanist-semibold`],
                        layoutDependency: w,
                        layoutId: `aI3Q2JUVS`,
                        style: {
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
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
          `.framer-HZPAf.framer-68mqe6, .framer-HZPAf .framer-68mqe6 { display: block; }`,
          `.framer-HZPAf.framer-zyd1w0 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-HZPAf .framer-13yb521, .framer-HZPAf .framer-nnq9r5 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        ],
        `framer-HZPAf`
      )),
      (pn.displayName = `Nav logo`),
      (pn.defaultProps = { height: 30.7167, width: 199.833 }),
      z(pn, { Gv2ed6Tr1: { title: `Link`, type: B.Link } }),
      P(
        pn,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Urbanist`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Urbanist`,
                url: `../../assets/misc/QAJFELFQRETRXRXDQOALZZUXNPM2U5VX.woff2`,
                weight: `600`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function hn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En = e(() => {
    (b(),
      M(),
      k(),
      n(),
      (gn = [`ie8Jf_LhK`, `fSFDjTKA0`]),
      (_n = `framer-Vx0NV`),
      (vn = { fSFDjTKA0: `framer-v-2l682w`, ie8Jf_LhK: `framer-v-1r96cuu` }),
      (yn = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (bn = ({ value: e, children: n }) => {
        let r = g(D),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(D.Provider, { value: a, children: n });
      }),
      (xn = T.create(o)),
      (Sn = { Close: `fSFDjTKA0`, Open: `ie8Jf_LhK` }),
      (Cn = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        MynsI2LAo: e ?? i.MynsI2LAo,
        variant: Sn[i.variant] ?? i.variant ?? `ie8Jf_LhK`,
      })),
      (wn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Tn = U(
        f(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = C(),
            { activeLocale: ee, setLocale: o } = V();
          Ee();
          let { style: s, className: c, layoutId: l, variant: u, MynsI2LAo: f, ...p } = Cn(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: g,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: b,
              setGestureState: x,
              setVariant: te,
              variants: ne,
            } = me({
              cycleOrder: gn,
              defaultVariant: `ie8Jf_LhK`,
              ref: i,
              variant: u,
              variantClassNames: vn,
            }),
            S = wn(e, ne),
            { activeVariantCallback: w, delay: E } = pe(m),
            D = w(async (...e) => {
              if ((x({ isPressed: !1 }), f && (await f(...e)) === !1)) return !1;
              te(`fSFDjTKA0`);
            }),
            k = w(async (...e) => {
              if ((x({ isPressed: !1 }), f && (await f(...e)) === !1)) return !1;
              te(`ie8Jf_LhK`);
            }),
            re = N(_n);
          return d(O, {
            id: l ?? a,
            children: d(xn, {
              animate: ne,
              initial: !1,
              children: d(bn, {
                value: yn,
                children: _(T.div, {
                  ...p,
                  ...v,
                  className: N(re, `framer-1r96cuu`, c, h),
                  "data-framer-name": `Open`,
                  "data-highlight": !0,
                  layoutDependency: S,
                  layoutId: `ie8Jf_LhK`,
                  onTap: D,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18))`,
                    borderBottomLeftRadius: 2,
                    borderBottomRightRadius: 2,
                    borderTopLeftRadius: 2,
                    borderTopRightRadius: 2,
                    ...s,
                  },
                  ...hn({ fSFDjTKA0: { "data-framer-name": `Close`, onTap: k } }, m, y),
                  children: [
                    d(T.div, {
                      className: `framer-1e0lmrl`,
                      "data-framer-name": `Top`,
                      layoutDependency: S,
                      layoutId: `hlLfzXoKC`,
                      style: {
                        backgroundColor: `var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255))`,
                        borderBottomLeftRadius: 999,
                        borderBottomRightRadius: 999,
                        borderTopLeftRadius: 999,
                        borderTopRightRadius: 999,
                        rotate: 0,
                      },
                      variants: { fSFDjTKA0: { rotate: 45 } },
                    }),
                    d(T.div, {
                      className: `framer-rgwox5`,
                      "data-framer-name": `Center`,
                      layoutDependency: S,
                      layoutId: `IZyNt7x0U`,
                      style: {
                        backgroundColor: `var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255))`,
                        borderBottomLeftRadius: 999,
                        borderBottomRightRadius: 999,
                        borderTopLeftRadius: 999,
                        borderTopRightRadius: 999,
                        opacity: 1,
                      },
                      variants: { fSFDjTKA0: { opacity: 0 } },
                    }),
                    d(T.div, {
                      className: `framer-6tkz3d`,
                      "data-framer-name": `Bottom`,
                      layoutDependency: S,
                      layoutId: `ltGWc84Rx`,
                      style: {
                        backgroundColor: `var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255))`,
                        borderBottomLeftRadius: 999,
                        borderBottomRightRadius: 999,
                        borderTopLeftRadius: 999,
                        borderTopRightRadius: 999,
                        rotate: 0,
                      },
                      variants: { fSFDjTKA0: { rotate: -45 } },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Vx0NV.framer-7wag6h, .framer-Vx0NV .framer-7wag6h { display: block; }`,
          `.framer-Vx0NV.framer-1r96cuu { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: 30px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 30px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Vx0NV .framer-1e0lmrl, .framer-Vx0NV .framer-rgwox5, .framer-Vx0NV .framer-6tkz3d { flex: none; height: 1px; overflow: visible; position: relative; width: 16px; z-index: 1; }`,
          `.framer-Vx0NV.framer-v-2l682w .framer-1e0lmrl { left: calc(50.00000000000002% - 16px / 2); position: absolute; top: 15px; }`,
          `.framer-Vx0NV.framer-v-2l682w .framer-6tkz3d { bottom: 14px; left: calc(50.00000000000002% - 16px / 2); position: absolute; }`,
        ],
        `framer-Vx0NV`
      )),
      (Tn.displayName = `Menu button`),
      (Tn.defaultProps = { height: 30, width: 30 }),
      z(Tn, {
        variant: {
          options: [`ie8Jf_LhK`, `fSFDjTKA0`],
          optionTitles: [`Open`, `Close`],
          title: `Variant`,
          type: B.Enum,
        },
        MynsI2LAo: { title: `Click`, type: B.EventHandler },
      }),
      P(Tn, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  Dn,
  On,
  kn,
  An = e(() => {
    (M(),
      se.loadFonts([`FS;Space Grotesk-regular`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-Italic`]),
      (Dn = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Space Grotesk`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Space Grotesk`,
              url: `../../assets/misc/2MGP255ZY2RSFHKW6LNN6W6BWQGC2LUO.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (On = [
        `.framer-wezdX .framer-styles-preset-4pwmu9:not(.rich-text-wrapper), .framer-wezdX .framer-styles-preset-4pwmu9.rich-text-wrapper p { --framer-font-family: "Space Grotesk", "Space Grotesk Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0px; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-777d4a96-6f89-4dc7-ab72-03827dee2e5b, #6b7280); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`,
        `@media (max-width: 1439px) and (min-width: 810px) { .framer-wezdX .framer-styles-preset-4pwmu9:not(.rich-text-wrapper), .framer-wezdX .framer-styles-preset-4pwmu9.rich-text-wrapper p { --framer-font-family: "Space Grotesk", "Space Grotesk Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0px; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-777d4a96-6f89-4dc7-ab72-03827dee2e5b, #6b7280); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-wezdX .framer-styles-preset-4pwmu9:not(.rich-text-wrapper), .framer-wezdX .framer-styles-preset-4pwmu9.rich-text-wrapper p { --framer-font-family: "Space Grotesk", "Space Grotesk Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0px; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-777d4a96-6f89-4dc7-ab72-03827dee2e5b, #6b7280); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`,
      ]),
      (kn = `framer-wezdX`));
  });
function jn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  X,
  Gn = e(() => {
    (b(),
      M(),
      k(),
      n(),
      An(),
      He(),
      (Mn = le(Me(T.a))),
      (Nn = { Xox_evFrx: { hover: !0 } }),
      (Pn = [`Xox_evFrx`, `JJYnCbKg_`]),
      (Fn = `framer-Xk1rR`),
      (In = { JJYnCbKg_: `framer-v-hh8syt`, Xox_evFrx: `framer-v-o6b2xk` }),
      (Ln = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Rn = {
        opacity: 0.85,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` },
        x: 0,
        y: 0,
      }),
      (zn = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 150,
        y: 0,
      }),
      (Bn = ({ value: e, children: n }) => {
        let r = g(D),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(D.Provider, { value: a, children: n });
      }),
      (Vn = { "Nav Link Mobile": `JJYnCbKg_`, "Nav link": `Xox_evFrx` }),
      (Hn = T.create(o)),
      (Un = ({
        click: e,
        height: t,
        id: n,
        link: r,
        newTab: i,
        smoothScroll: a,
        text: ee,
        width: o,
        ...s
      }) => ({
        ...s,
        AnLRKNZ8C: ee ?? s.AnLRKNZ8C ?? `About us`,
        hly7ePiLR: a ?? s.hly7ePiLR ?? !0,
        LnNAkBU9Q: e ?? s.LnNAkBU9Q,
        nbyWJIuw6: i ?? s.nbyWJIuw6,
        oAgKjILQn: r ?? s.oAgKjILQn,
        variant: Vn[s.variant] ?? s.variant ?? `Xox_evFrx`,
      })),
      (Wn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = U(
        f(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = C(),
            { activeLocale: ee, setLocale: s } = V();
          Ee();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: f,
              AnLRKNZ8C: p,
              oAgKjILQn: m,
              nbyWJIuw6: h,
              hly7ePiLR: g,
              LnNAkBU9Q: v,
              ...y
            } = Un(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: te,
              gestureHandlers: ne,
              gestureVariant: S,
              isLoading: w,
              setGestureState: E,
              setVariant: D,
              variants: k,
            } = me({
              cycleOrder: Pn,
              defaultVariant: `Xox_evFrx`,
              enabledGestures: Nn,
              ref: i,
              variant: f,
              variantClassNames: In,
            }),
            re = Wn(e, k),
            { activeVariantCallback: A, delay: ie } = pe(b),
            j = A(async (...e) => {
              if ((E({ isPressed: !1 }), v && (await v(...e)) === !1)) return !1;
            }),
            ae = N(Fn, Ve, kn);
          return d(O, {
            id: u ?? a,
            children: d(Hn, {
              animate: k,
              initial: !1,
              children: d(Bn, {
                value: Ln,
                children: d(xe, {
                  href: m,
                  motionChild: !0,
                  nodeId: `Xox_evFrx`,
                  openInNewTab: h,
                  scopeId: `UXlUvULCz`,
                  smoothScroll: g,
                  children: _(Mn, {
                    ...y,
                    ...ne,
                    className: `${N(ae, `framer-o6b2xk`, l, x)} framer-1vtge89`,
                    "data-framer-appear-id": `o6b2xk`,
                    "data-framer-name": `Nav link`,
                    "data-highlight": !0,
                    layoutDependency: re,
                    layoutId: `Xox_evFrx`,
                    onTap: j,
                    ref: i,
                    style: { opacity: 1, ...c },
                    variants: { "Xox_evFrx-hover": { opacity: 0.85 } },
                    ...jn(
                      {
                        "Xox_evFrx-hover": {
                          __framer__presenceAnimate: Rn,
                          __framer__presenceInitial: zn,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 0.85,
                          "data-framer-name": void 0,
                          optimized: !0,
                        },
                        JJYnCbKg_: { "data-framer-name": `Nav Link Mobile` },
                      },
                      b,
                      S
                    ),
                    children: [
                      d(I, {
                        __fromCanvasComponent: !0,
                        children: d(o, {
                          children: d(T.p, {
                            className: `framer-styles-preset-13lpt6d`,
                            "data-styles-preset": `RXmiUshAy`,
                            dir: `auto`,
                            style: {
                              "--framer-text-alignment": `start`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18)))`,
                            },
                            children: `About us`,
                          }),
                        }),
                        className: `framer-m91a7n`,
                        fonts: [`Inter`],
                        layoutDependency: re,
                        layoutId: `n57bhfQhh`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: p,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...jn(
                          {
                            JJYnCbKg_: {
                              children: d(o, {
                                children: d(T.p, {
                                  className: `framer-styles-preset-4pwmu9`,
                                  "data-styles-preset": `AdNtdEHSs`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `start`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18)))`,
                                  },
                                  children: `About us`,
                                }),
                              }),
                            },
                          },
                          b,
                          S
                        ),
                      }),
                      d(T.div, {
                        className: `framer-1qg4z8s`,
                        layoutDependency: re,
                        layoutId: `AUcw0t_iL`,
                        style: {
                          backgroundColor: `var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18))`,
                        },
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
          `.framer-Xk1rR.framer-1vtge89, .framer-Xk1rR .framer-1vtge89 { display: block; }`,
          `.framer-Xk1rR.framer-o6b2xk { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-Xk1rR .framer-m91a7n { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-Xk1rR .framer-1qg4z8s { bottom: 2px; flex: none; height: 1px; left: -2px; overflow: hidden; position: absolute; width: 2%; z-index: 1; }`,
          `.framer-Xk1rR.framer-v-o6b2xk.hover .framer-1qg4z8s { width: 100%; }`,
          ...Le,
          ...On,
        ],
        `framer-Xk1rR`
      )),
      (X.displayName = `Nav link`),
      (X.defaultProps = { height: 20, width: 66 }),
      z(X, {
        variant: {
          options: [`Xox_evFrx`, `JJYnCbKg_`],
          optionTitles: [`Nav link`, `Nav Link Mobile`],
          title: `Variant`,
          type: B.Enum,
        },
        AnLRKNZ8C: { defaultValue: `About us`, displayTextArea: !1, title: `Text`, type: B.String },
        onAnLRKNZ8CChange: { changes: `AnLRKNZ8C`, type: B.ChangeHandler },
        oAgKjILQn: { title: `Link`, type: B.Link },
        nbyWJIuw6: { defaultValue: !1, title: `New Tab`, type: B.Boolean },
        onnbyWJIuw6Change: { changes: `nbyWJIuw6`, type: B.ChangeHandler },
        hly7ePiLR: { defaultValue: !0, title: `Smooth Scroll`, type: B.Boolean },
        onhly7ePiLRChange: { changes: `hly7ePiLR`, type: B.ChangeHandler },
        LnNAkBU9Q: { title: `Click`, type: B.EventHandler },
      }),
      P(
        X,
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
          ...ue(Be),
          ...ue(Dn),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Z(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  Q,
  nr,
  rr,
  ir,
  ar,
  or,
  $,
  sr = e(() => {
    (b(),
      M(),
      k(),
      n(),
      Xe(),
      et(),
      mn(),
      En(),
      ze(),
      Ue(),
      Gn(),
      (Kn = A(Re)),
      (qn = A(pn)),
      (Jn = A(W)),
      (Yn = A(Tn)),
      (Xn = A(X)),
      (Zn = A(tt)),
      (Qn = [`vJRG0LbZu`, `IVDR7HZTK`, `q1IWzhR4i`, `QrrhCdIQ0`, `RE7kXnRTn`]),
      ($n = `framer-HC69E`),
      (er = {
        IVDR7HZTK: `framer-v-ijv500`,
        q1IWzhR4i: `framer-v-1ejbnoo`,
        QrrhCdIQ0: `framer-v-mxb7po`,
        RE7kXnRTn: `framer-v-1ckiklk`,
        vJRG0LbZu: `framer-v-15riqx3`,
      }),
      (tr = { bounce: 0.2, delay: 0, duration: 0.5, type: `spring` }),
      (Q = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (nr = ({ value: e, children: n }) => {
        let r = g(D),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(D.Provider, { value: a, children: n });
      }),
      (rr = {
        "Phone close": `QrrhCdIQ0`,
        "Phone open": `q1IWzhR4i`,
        "Phone/close/scroll": `RE7kXnRTn`,
        Desktop: `vJRG0LbZu`,
        Tablet: `IVDR7HZTK`,
      }),
      (ir = T.create(o)),
      (ar = ({ height: e, id: t, visible: n, width: r, ...i }) => ({
        ...i,
        lDec893YU: n ?? i.lDec893YU ?? !0,
        variant: rr[i.variant] ?? i.variant ?? `vJRG0LbZu`,
      })),
      (or = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = U(
        f(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = C(),
            { activeLocale: ee, setLocale: s } = V(),
            c = Ee(),
            { style: l, className: u, layoutId: f, variant: p, lDec893YU: m, ...h } = ar(e),
            {
              baseVariant: g,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: te,
              setGestureState: ne,
              setVariant: S,
              variants: w,
            } = me({
              cycleOrder: Qn,
              defaultVariant: `vJRG0LbZu`,
              ref: i,
              variant: p,
              variantClassNames: er,
            }),
            E = or(e, w),
            { activeVariantCallback: D, delay: k } = pe(g),
            re = D(async (...e) => {
              S(`QrrhCdIQ0`);
            }),
            A = D(async (...e) => {
              S(`q1IWzhR4i`);
            }),
            ie = D(async (...e) => {
              S(`q1IWzhR4i`);
            }),
            ae = [$e],
            M = () => g !== `RE7kXnRTn`,
            oe = N($n, ...ae);
          je();
          let se = () => !![`q1IWzhR4i`, `QrrhCdIQ0`].includes(g),
            P = () => ![`q1IWzhR4i`, `QrrhCdIQ0`].includes(g);
          return d(O, {
            id: f ?? a,
            children: d(ir, {
              animate: w,
              initial: !1,
              children:
                M() &&
                d(nr, {
                  value: tr,
                  children: _(T.div, {
                    ...h,
                    ...b,
                    className: N(oe, `framer-15riqx3`, u, v),
                    "data-framer-name": `Desktop`,
                    layoutDependency: E,
                    layoutId: `vJRG0LbZu`,
                    ref: i,
                    style: { ...l },
                    ...Z(
                      {
                        IVDR7HZTK: { "data-framer-name": `Tablet` },
                        q1IWzhR4i: { "data-framer-name": `Phone open` },
                        QrrhCdIQ0: { "data-framer-name": `Phone close` },
                      },
                      g,
                      x
                    ),
                    children: [
                      m !== !1 &&
                        d(T.div, {
                          className: `framer-s11thx`,
                          "data-framer-name": `Top`,
                          layoutDependency: E,
                          layoutId: `P9IhTZtmY`,
                          style: {
                            backgroundColor: `var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18))`,
                          },
                          children: d(T.div, {
                            className: `framer-1cxko8r`,
                            "data-framer-name": `Container`,
                            layoutDependency: E,
                            layoutId: `ZBWIKLAlW`,
                            children: _(T.div, {
                              className: `framer-1s1slr4`,
                              "data-framer-name": `Text wrapper`,
                              layoutDependency: E,
                              layoutId: `KIjcpgqbD`,
                              children: [
                                _(T.div, {
                                  className: `framer-1ox3slk`,
                                  "data-framer-name": `Arrow`,
                                  layoutDependency: E,
                                  layoutId: `Id9CjDk5y`,
                                  style: {
                                    mask: `linear-gradient(269deg, rgba(0,0,0,0) -18%, rgb(0, 0, 0) 100%) add`,
                                    WebkitMask: `linear-gradient(269deg, rgba(0,0,0,0) -18%, rgb(0, 0, 0) 100%) add`,
                                  },
                                  children: [
                                    _(T.div, {
                                      className: `framer-1l3fz02`,
                                      "data-framer-name": `Wrapper 1`,
                                      layoutDependency: E,
                                      layoutId: `WJz1d_ztG`,
                                      children: [
                                        d(T.div, {
                                          className: `framer-1oj11s2`,
                                          "data-framer-name": `Dot`,
                                          layoutDependency: E,
                                          layoutId: `dNaNFA8L4`,
                                          style: {
                                            backgroundColor: `var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3))`,
                                            borderBottomLeftRadius: 999,
                                            borderBottomRightRadius: 999,
                                            borderTopLeftRadius: 999,
                                            borderTopRightRadius: 999,
                                          },
                                        }),
                                        d(T.div, {
                                          className: `framer-7df6jp`,
                                          "data-framer-name": `Dot`,
                                          layoutDependency: E,
                                          layoutId: `m34RQZ4qC`,
                                          style: {
                                            backgroundColor: `var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3))`,
                                            borderBottomLeftRadius: 999,
                                            borderBottomRightRadius: 999,
                                            borderTopLeftRadius: 999,
                                            borderTopRightRadius: 999,
                                          },
                                        }),
                                      ],
                                    }),
                                    _(T.div, {
                                      className: `framer-19if3fv`,
                                      "data-framer-name": `Wrapper 2`,
                                      layoutDependency: E,
                                      layoutId: `lcYUUyIKv`,
                                      children: [
                                        _(T.div, {
                                          className: `framer-1bd7grz`,
                                          "data-framer-name": `Top`,
                                          layoutDependency: E,
                                          layoutId: `j1iVWWTlV`,
                                          children: [
                                            d(T.div, {
                                              className: `framer-1ndfhy3`,
                                              "data-framer-name": `Dot`,
                                              layoutDependency: E,
                                              layoutId: `GW6RNUrRe`,
                                              style: {
                                                backgroundColor: `var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3))`,
                                                borderBottomLeftRadius: 999,
                                                borderBottomRightRadius: 999,
                                                borderTopLeftRadius: 999,
                                                borderTopRightRadius: 999,
                                              },
                                            }),
                                            d(T.div, {
                                              className: `framer-182cuze`,
                                              "data-framer-name": `Dot`,
                                              layoutDependency: E,
                                              layoutId: `n0Pep8sQG`,
                                              style: {
                                                backgroundColor: `var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3))`,
                                                borderBottomLeftRadius: 999,
                                                borderBottomRightRadius: 999,
                                                borderTopLeftRadius: 999,
                                                borderTopRightRadius: 999,
                                              },
                                            }),
                                          ],
                                        }),
                                        _(T.div, {
                                          className: `framer-z5eavg`,
                                          "data-framer-name": `Bottom`,
                                          layoutDependency: E,
                                          layoutId: `EQMP0jMBj`,
                                          children: [
                                            d(T.div, {
                                              className: `framer-5ynbbd`,
                                              "data-framer-name": `Dot`,
                                              layoutDependency: E,
                                              layoutId: `MZwvPosWW`,
                                              style: {
                                                backgroundColor: `var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3))`,
                                                borderBottomLeftRadius: 999,
                                                borderBottomRightRadius: 999,
                                                borderTopLeftRadius: 999,
                                                borderTopRightRadius: 999,
                                              },
                                            }),
                                            d(T.div, {
                                              className: `framer-s04ys0`,
                                              "data-framer-name": `Dot`,
                                              layoutDependency: E,
                                              layoutId: `Lz4mQAHto`,
                                              style: {
                                                backgroundColor: `var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3))`,
                                                borderBottomLeftRadius: 999,
                                                borderBottomRightRadius: 999,
                                                borderTopLeftRadius: 999,
                                                borderTopRightRadius: 999,
                                              },
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    _(T.div, {
                                      className: `framer-htaunk`,
                                      "data-framer-name": `Wrapper`,
                                      layoutDependency: E,
                                      layoutId: `Z5oBcwrTu`,
                                      children: [
                                        d(T.div, {
                                          className: `framer-1fb7xs5`,
                                          "data-framer-name": `Dot`,
                                          layoutDependency: E,
                                          layoutId: `nJtvfX80L`,
                                          style: {
                                            backgroundColor: `var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3))`,
                                            borderBottomLeftRadius: 999,
                                            borderBottomRightRadius: 999,
                                            borderTopLeftRadius: 999,
                                            borderTopRightRadius: 999,
                                          },
                                        }),
                                        d(T.div, {
                                          className: `framer-1xg5a97`,
                                          "data-framer-name": `Dot`,
                                          layoutDependency: E,
                                          layoutId: `fybyf5bUF`,
                                          style: {
                                            backgroundColor: `var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3))`,
                                            borderBottomLeftRadius: 999,
                                            borderBottomRightRadius: 999,
                                            borderTopLeftRadius: 999,
                                            borderTopRightRadius: 999,
                                          },
                                        }),
                                        d(T.div, {
                                          className: `framer-1t70x1y`,
                                          "data-framer-name": `Dot`,
                                          layoutDependency: E,
                                          layoutId: `Rc9aRef1g`,
                                          style: {
                                            backgroundColor: `var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3))`,
                                            borderBottomLeftRadius: 999,
                                            borderBottomRightRadius: 999,
                                            borderTopLeftRadius: 999,
                                            borderTopRightRadius: 999,
                                          },
                                        }),
                                      ],
                                    }),
                                    d(T.div, {
                                      className: `framer-1wteabn`,
                                      "data-framer-name": `Dot`,
                                      layoutDependency: E,
                                      layoutId: `A0nBbxgOq`,
                                      style: {
                                        backgroundColor: `var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3))`,
                                        borderBottomLeftRadius: 999,
                                        borderBottomRightRadius: 999,
                                        borderTopLeftRadius: 999,
                                        borderTopRightRadius: 999,
                                      },
                                    }),
                                  ],
                                }),
                                _(T.div, {
                                  className: `framer-1b1684b`,
                                  "data-framer-name": `Text`,
                                  layoutDependency: E,
                                  layoutId: `qay3abWLW`,
                                  children: [
                                    d(I, {
                                      __fromCanvasComponent: !0,
                                      children: d(o, {
                                        children: d(T.p, {
                                          className: `framer-styles-preset-1xolxu9`,
                                          "data-styles-preset": `xBXqXcRep`,
                                          children: `WE ARE AVAILABLE FOR`,
                                        }),
                                      }),
                                      className: `framer-11oriq8`,
                                      fonts: [`Inter`],
                                      layoutDependency: E,
                                      layoutId: `bPJVtsyKy`,
                                      style: {
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    d(I, {
                                      __fromCanvasComponent: !0,
                                      children: d(o, {
                                        children: d(T.p, {
                                          className: `framer-styles-preset-1xolxu9`,
                                          "data-styles-preset": `xBXqXcRep`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3)))`,
                                          },
                                          children: `DECEMBER PROJECTS`,
                                        }),
                                      }),
                                      className: `framer-ryqqrl`,
                                      fonts: [`Inter`],
                                      layoutDependency: E,
                                      layoutId: `GVN7GgXXr`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                _(T.div, {
                                  className: `framer-4bbsf7`,
                                  "data-framer-name": `Arrow`,
                                  layoutDependency: E,
                                  layoutId: `btfFyzpr8`,
                                  style: {
                                    mask: `linear-gradient(269deg, rgba(0,0,0,0) -18%, rgb(0, 0, 0) 100%) add`,
                                    rotate: 180,
                                    WebkitMask: `linear-gradient(269deg, rgba(0,0,0,0) -18%, rgb(0, 0, 0) 100%) add`,
                                  },
                                  children: [
                                    _(T.div, {
                                      className: `framer-1cxrm0q`,
                                      "data-framer-name": `Wrapper 1`,
                                      layoutDependency: E,
                                      layoutId: `vUfoDQaZq`,
                                      children: [
                                        d(T.div, {
                                          className: `framer-171dj02`,
                                          "data-framer-name": `Dot`,
                                          layoutDependency: E,
                                          layoutId: `CAqSf_JNK`,
                                          style: {
                                            backgroundColor: `var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3))`,
                                            borderBottomLeftRadius: 999,
                                            borderBottomRightRadius: 999,
                                            borderTopLeftRadius: 999,
                                            borderTopRightRadius: 999,
                                          },
                                        }),
                                        d(T.div, {
                                          className: `framer-1a06u1z`,
                                          "data-framer-name": `Dot`,
                                          layoutDependency: E,
                                          layoutId: `P3Tflwz6d`,
                                          style: {
                                            backgroundColor: `var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3))`,
                                            borderBottomLeftRadius: 999,
                                            borderBottomRightRadius: 999,
                                            borderTopLeftRadius: 999,
                                            borderTopRightRadius: 999,
                                          },
                                        }),
                                      ],
                                    }),
                                    _(T.div, {
                                      className: `framer-yc019j`,
                                      "data-framer-name": `Wrapper 2`,
                                      layoutDependency: E,
                                      layoutId: `cqcM1FbJt`,
                                      children: [
                                        _(T.div, {
                                          className: `framer-19wotd1`,
                                          "data-framer-name": `Top`,
                                          layoutDependency: E,
                                          layoutId: `C6mFUSZbv`,
                                          children: [
                                            d(T.div, {
                                              className: `framer-1b69h5u`,
                                              "data-framer-name": `Dot`,
                                              layoutDependency: E,
                                              layoutId: `tJ2Zkvxxa`,
                                              style: {
                                                backgroundColor: `var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3))`,
                                                borderBottomLeftRadius: 999,
                                                borderBottomRightRadius: 999,
                                                borderTopLeftRadius: 999,
                                                borderTopRightRadius: 999,
                                              },
                                            }),
                                            d(T.div, {
                                              className: `framer-nbsu26`,
                                              "data-framer-name": `Dot`,
                                              layoutDependency: E,
                                              layoutId: `cUhoOSeHX`,
                                              style: {
                                                backgroundColor: `var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3))`,
                                                borderBottomLeftRadius: 999,
                                                borderBottomRightRadius: 999,
                                                borderTopLeftRadius: 999,
                                                borderTopRightRadius: 999,
                                              },
                                            }),
                                          ],
                                        }),
                                        _(T.div, {
                                          className: `framer-7f4x32`,
                                          "data-framer-name": `Bottom`,
                                          layoutDependency: E,
                                          layoutId: `cURycurCJ`,
                                          children: [
                                            d(T.div, {
                                              className: `framer-1iuq802`,
                                              "data-framer-name": `Dot`,
                                              layoutDependency: E,
                                              layoutId: `eMniTxW3_`,
                                              style: {
                                                backgroundColor: `var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3))`,
                                                borderBottomLeftRadius: 999,
                                                borderBottomRightRadius: 999,
                                                borderTopLeftRadius: 999,
                                                borderTopRightRadius: 999,
                                              },
                                            }),
                                            d(T.div, {
                                              className: `framer-nrvzof`,
                                              "data-framer-name": `Dot`,
                                              layoutDependency: E,
                                              layoutId: `eCfXqIMAZ`,
                                              style: {
                                                backgroundColor: `var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3))`,
                                                borderBottomLeftRadius: 999,
                                                borderBottomRightRadius: 999,
                                                borderTopLeftRadius: 999,
                                                borderTopRightRadius: 999,
                                              },
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    _(T.div, {
                                      className: `framer-dnv8oi`,
                                      "data-framer-name": `Wrapper`,
                                      layoutDependency: E,
                                      layoutId: `uY8xSpPxf`,
                                      children: [
                                        d(T.div, {
                                          className: `framer-1uwtq54`,
                                          "data-framer-name": `Dot`,
                                          layoutDependency: E,
                                          layoutId: `j6ttmN7Ha`,
                                          style: {
                                            backgroundColor: `var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3))`,
                                            borderBottomLeftRadius: 999,
                                            borderBottomRightRadius: 999,
                                            borderTopLeftRadius: 999,
                                            borderTopRightRadius: 999,
                                          },
                                        }),
                                        d(T.div, {
                                          className: `framer-wnvu23`,
                                          "data-framer-name": `Dot`,
                                          layoutDependency: E,
                                          layoutId: `fUDOk6LAS`,
                                          style: {
                                            backgroundColor: `var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3))`,
                                            borderBottomLeftRadius: 999,
                                            borderBottomRightRadius: 999,
                                            borderTopLeftRadius: 999,
                                            borderTopRightRadius: 999,
                                          },
                                        }),
                                        d(T.div, {
                                          className: `framer-1fpdf5w`,
                                          "data-framer-name": `Dot`,
                                          layoutDependency: E,
                                          layoutId: `OwOimp24s`,
                                          style: {
                                            backgroundColor: `var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3))`,
                                            borderBottomLeftRadius: 999,
                                            borderBottomRightRadius: 999,
                                            borderTopLeftRadius: 999,
                                            borderTopRightRadius: 999,
                                          },
                                        }),
                                      ],
                                    }),
                                    d(T.div, {
                                      className: `framer-1ucd40z`,
                                      "data-framer-name": `Dot`,
                                      layoutDependency: E,
                                      layoutId: `g3oRmI3Eq`,
                                      style: {
                                        backgroundColor: `var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3))`,
                                        borderBottomLeftRadius: 999,
                                        borderBottomRightRadius: 999,
                                        borderTopLeftRadius: 999,
                                        borderTopRightRadius: 999,
                                      },
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                      d(R, {
                        height: 16,
                        width: c?.width || `100vw`,
                        y: (c?.y || 0) + 0 + (((c?.height || 128) - 0 - 257) / 2 + 0 + 0),
                        ...Z(
                          {
                            IVDR7HZTK: {
                              y: (c?.y || 0) + 0 + (((c?.height || 122) - 0 - 253) / 2 + 0 + 0),
                            },
                            q1IWzhR4i: {
                              y: (c?.y || 0) + 0 + (((c?.height || 112) - 0 - 76) / 2 + 0 + 0),
                            },
                            QrrhCdIQ0: {
                              y: (c?.y || 0) + 0 + (((c?.height || 436) - 0 - 376) / 2 + 0 + 0),
                            },
                          },
                          g,
                          x
                        ),
                        children: d(j, {
                          className: `framer-lyit2o-container`,
                          layoutDependency: E,
                          layoutId: `x45izPfDK-container`,
                          nodeId: `x45izPfDK`,
                          rendersWithMotion: !0,
                          scopeId: `VChi4Fc93`,
                          children: d(Re, {
                            byu2TjtOU: {
                              borderBottomWidth: 1,
                              borderColor: `var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1))`,
                              borderLeftWidth: 0,
                              borderRightWidth: 0,
                              borderStyle: `solid`,
                              borderTopWidth: 0,
                            },
                            height: `100%`,
                            id: `x45izPfDK`,
                            layoutId: `x45izPfDK`,
                            style: { width: `100%` },
                            variant: Q(`hFLhZnXcH`),
                            width: `100%`,
                            ...Z(
                              {
                                IVDR7HZTK: { variant: Q(`tDRwbo2Hu`) },
                                q1IWzhR4i: { variant: Q(`FfOd6J0WM`) },
                                QrrhCdIQ0: { variant: Q(`FfOd6J0WM`) },
                              },
                              g,
                              x
                            ),
                          }),
                        }),
                      }),
                      d(T.div, {
                        className: `framer-w8spa`,
                        "data-framer-name": `White`,
                        layoutDependency: E,
                        layoutId: `YhIfWhw0P`,
                        children: d(T.div, {
                          className: `framer-1ns4ris`,
                          "data-framer-name": `Container`,
                          layoutDependency: E,
                          layoutId: `U9r5wu5dK`,
                          children: _(T.div, {
                            className: `framer-52j6z2`,
                            "data-border": !0,
                            "data-framer-name": `Content wrapper`,
                            layoutDependency: E,
                            layoutId: `xHhlF9tOt`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `0px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                              backgroundColor: `var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255))`,
                            },
                            children: [
                              _(T.div, {
                                className: `framer-4z04a7`,
                                "data-border": !0,
                                "data-framer-name": `Nav Logo`,
                                layoutDependency: E,
                                layoutId: `tsem1HwRi`,
                                style: {
                                  "--border-bottom-width": `0px`,
                                  "--border-color": `var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1))`,
                                  "--border-left-width": `1px`,
                                  "--border-right-width": `1px`,
                                  "--border-style": `solid`,
                                  "--border-top-width": `0px`,
                                },
                                children: [
                                  d(H, {
                                    links: [
                                      {
                                        href: { webPageId: `V2Ho_ZYv2` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `V2Ho_ZYv2` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `V2Ho_ZYv2` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `V2Ho_ZYv2` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      d(R, {
                                        height: 200,
                                        y:
                                          (c?.y || 0) +
                                          0 +
                                          (((c?.height || 128) - 0 - 257) / 2 + 16 + 0) +
                                          0 +
                                          0 +
                                          0 +
                                          21,
                                        ...Z(
                                          {
                                            IVDR7HZTK: {
                                              y:
                                                (c?.y || 0) +
                                                0 +
                                                (((c?.height || 122) - 0 - 253) / 2 + 16 + 0) +
                                                0 +
                                                0 +
                                                0 +
                                                19,
                                            },
                                            q1IWzhR4i: {
                                              y:
                                                (c?.y || 0) +
                                                0 +
                                                (((c?.height || 112) - 0 - 76) / 2 + 16 + 0) +
                                                0 +
                                                0 +
                                                0 +
                                                -70,
                                            },
                                            QrrhCdIQ0: {
                                              y:
                                                (c?.y || 0) +
                                                0 +
                                                (((c?.height || 436) - 0 - 376) / 2 + 16 + 0) +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                -70,
                                            },
                                          },
                                          g,
                                          x
                                        ),
                                        children: d(j, {
                                          className: `framer-18odjh8-container`,
                                          layoutDependency: E,
                                          layoutId: `mHCDxSQZw-container`,
                                          nodeId: `mHCDxSQZw`,
                                          rendersWithMotion: !0,
                                          scopeId: `VChi4Fc93`,
                                          children: d(pn, {
                                            Gv2ed6Tr1: e[0],
                                            height: `100%`,
                                            id: `mHCDxSQZw`,
                                            layoutId: `mHCDxSQZw`,
                                            width: `100%`,
                                            ...Z(
                                              {
                                                IVDR7HZTK: { Gv2ed6Tr1: e[1] },
                                                q1IWzhR4i: { Gv2ed6Tr1: e[2] },
                                                QrrhCdIQ0: { Gv2ed6Tr1: e[3] },
                                              },
                                              g,
                                              x
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                  d(R, {
                                    height: 6,
                                    width: `6px`,
                                    y:
                                      (c?.y || 0) +
                                      0 +
                                      (((c?.height || 128) - 0 - 257) / 2 + 16 + 0) +
                                      0 +
                                      0 +
                                      0 +
                                      -3,
                                    ...Z(
                                      {
                                        IVDR7HZTK: {
                                          y:
                                            (c?.y || 0) +
                                            0 +
                                            (((c?.height || 122) - 0 - 253) / 2 + 16 + 0) +
                                            0 +
                                            0 +
                                            0 +
                                            -3,
                                        },
                                        q1IWzhR4i: {
                                          y:
                                            (c?.y || 0) +
                                            0 +
                                            (((c?.height || 112) - 0 - 76) / 2 + 16 + 0) +
                                            0 +
                                            0 +
                                            0 +
                                            -3,
                                        },
                                        QrrhCdIQ0: {
                                          y:
                                            (c?.y || 0) +
                                            0 +
                                            (((c?.height || 436) - 0 - 376) / 2 + 16 + 0) +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            -3,
                                        },
                                      },
                                      g,
                                      x
                                    ),
                                    children: d(j, {
                                      className: `framer-1t7u710-container`,
                                      layoutDependency: E,
                                      layoutId: `IDnb83EtO-container`,
                                      nodeId: `IDnb83EtO`,
                                      rendersWithMotion: !0,
                                      scopeId: `VChi4Fc93`,
                                      children: d(W, {
                                        height: `100%`,
                                        id: `IDnb83EtO`,
                                        layoutId: `IDnb83EtO`,
                                        style: { height: `100%`, width: `100%` },
                                        variant: Q(`MnvfFSWcm`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  d(R, {
                                    height: 6,
                                    width: `6px`,
                                    y:
                                      (c?.y || 0) +
                                      0 +
                                      (((c?.height || 128) - 0 - 257) / 2 + 16 + 0) +
                                      0 +
                                      0 +
                                      0 +
                                      -3,
                                    ...Z(
                                      {
                                        IVDR7HZTK: {
                                          y:
                                            (c?.y || 0) +
                                            0 +
                                            (((c?.height || 122) - 0 - 253) / 2 + 16 + 0) +
                                            0 +
                                            0 +
                                            0 +
                                            -3,
                                        },
                                        q1IWzhR4i: {
                                          y:
                                            (c?.y || 0) +
                                            0 +
                                            (((c?.height || 112) - 0 - 76) / 2 + 16 + 0) +
                                            0 +
                                            0 +
                                            0 +
                                            -3,
                                        },
                                        QrrhCdIQ0: {
                                          y:
                                            (c?.y || 0) +
                                            0 +
                                            (((c?.height || 436) - 0 - 376) / 2 + 16 + 0) +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            -3,
                                        },
                                      },
                                      g,
                                      x
                                    ),
                                    children: d(j, {
                                      className: `framer-p68xho-container`,
                                      layoutDependency: E,
                                      layoutId: `ici1lN4V7-container`,
                                      nodeId: `ici1lN4V7`,
                                      rendersWithMotion: !0,
                                      scopeId: `VChi4Fc93`,
                                      children: d(W, {
                                        height: `100%`,
                                        id: `ici1lN4V7`,
                                        layoutId: `ici1lN4V7`,
                                        style: { height: `100%`, width: `100%` },
                                        variant: Q(`MnvfFSWcm`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  d(R, {
                                    height: 6,
                                    width: `6px`,
                                    y:
                                      (c?.y || 0) +
                                      0 +
                                      (((c?.height || 128) - 0 - 257) / 2 + 16 + 0) +
                                      0 +
                                      0 +
                                      0 +
                                      241 -
                                      3,
                                    ...Z(
                                      {
                                        IVDR7HZTK: {
                                          y:
                                            (c?.y || 0) +
                                            0 +
                                            (((c?.height || 122) - 0 - 253) / 2 + 16 + 0) +
                                            0 +
                                            0 +
                                            0 +
                                            237 -
                                            3,
                                        },
                                        q1IWzhR4i: {
                                          y:
                                            (c?.y || 0) +
                                            0 +
                                            (((c?.height || 112) - 0 - 76) / 2 + 16 + 0) +
                                            0 +
                                            0 +
                                            0 +
                                            60 -
                                            3,
                                        },
                                        QrrhCdIQ0: {
                                          y:
                                            (c?.y || 0) +
                                            0 +
                                            (((c?.height || 436) - 0 - 376) / 2 + 16 + 0) +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            60 -
                                            3,
                                        },
                                      },
                                      g,
                                      x
                                    ),
                                    children: d(j, {
                                      className: `framer-17k871q-container`,
                                      layoutDependency: E,
                                      layoutId: `X_1XKfLDr-container`,
                                      nodeId: `X_1XKfLDr`,
                                      rendersWithMotion: !0,
                                      scopeId: `VChi4Fc93`,
                                      children: d(W, {
                                        height: `100%`,
                                        id: `X_1XKfLDr`,
                                        layoutId: `X_1XKfLDr`,
                                        style: { height: `100%`, width: `100%` },
                                        variant: Q(`MnvfFSWcm`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  d(R, {
                                    height: 6,
                                    width: `6px`,
                                    y:
                                      (c?.y || 0) +
                                      0 +
                                      (((c?.height || 128) - 0 - 257) / 2 + 16 + 0) +
                                      0 +
                                      0 +
                                      0 +
                                      241 -
                                      3,
                                    ...Z(
                                      {
                                        IVDR7HZTK: {
                                          y:
                                            (c?.y || 0) +
                                            0 +
                                            (((c?.height || 122) - 0 - 253) / 2 + 16 + 0) +
                                            0 +
                                            0 +
                                            0 +
                                            237 -
                                            3,
                                        },
                                        q1IWzhR4i: {
                                          y:
                                            (c?.y || 0) +
                                            0 +
                                            (((c?.height || 112) - 0 - 76) / 2 + 16 + 0) +
                                            0 +
                                            0 +
                                            0 +
                                            60 -
                                            3,
                                        },
                                        QrrhCdIQ0: {
                                          y:
                                            (c?.y || 0) +
                                            0 +
                                            (((c?.height || 436) - 0 - 376) / 2 + 16 + 0) +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            60 -
                                            3,
                                        },
                                      },
                                      g,
                                      x
                                    ),
                                    children: d(j, {
                                      className: `framer-jfptg5-container`,
                                      layoutDependency: E,
                                      layoutId: `fkWPoYkLd-container`,
                                      nodeId: `fkWPoYkLd`,
                                      rendersWithMotion: !0,
                                      scopeId: `VChi4Fc93`,
                                      children: d(W, {
                                        height: `100%`,
                                        id: `fkWPoYkLd`,
                                        layoutId: `fkWPoYkLd`,
                                        style: { height: `100%`, width: `100%` },
                                        variant: Q(`MnvfFSWcm`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  se() &&
                                    d(R, {
                                      ...Z(
                                        {
                                          q1IWzhR4i: {
                                            height: 30,
                                            width: `30px`,
                                            y:
                                              (c?.y || 0) +
                                              0 +
                                              (((c?.height || 112) - 0 - 76) / 2 + 16 + 0) +
                                              0 +
                                              0 +
                                              0 +
                                              15,
                                          },
                                          QrrhCdIQ0: {
                                            height: 30,
                                            width: `30px`,
                                            y:
                                              (c?.y || 0) +
                                              0 +
                                              (((c?.height || 436) - 0 - 376) / 2 + 16 + 0) +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              15,
                                          },
                                        },
                                        g,
                                        x
                                      ),
                                      children: d(j, {
                                        className: `framer-mnirvn-container`,
                                        layoutDependency: E,
                                        layoutId: `BHn4hDDco-container`,
                                        nodeId: `BHn4hDDco`,
                                        rendersWithMotion: !0,
                                        scopeId: `VChi4Fc93`,
                                        children: d(Tn, {
                                          height: `100%`,
                                          id: `BHn4hDDco`,
                                          layoutId: `BHn4hDDco`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: Q(`ie8Jf_LhK`),
                                          width: `100%`,
                                          ...Z(
                                            {
                                              q1IWzhR4i: { MynsI2LAo: re },
                                              QrrhCdIQ0: { MynsI2LAo: A, variant: Q(`fSFDjTKA0`) },
                                            },
                                            g,
                                            x
                                          ),
                                        }),
                                      }),
                                    }),
                                ],
                              }),
                              d(T.div, {
                                className: `framer-1lapihd`,
                                "data-framer-name": `Nav Menu wrapper`,
                                layoutDependency: E,
                                layoutId: `K9_ne0Zje`,
                                children: _(T.div, {
                                  className: `framer-cgvoew`,
                                  "data-framer-name": `Nav menu`,
                                  layoutDependency: E,
                                  layoutId: `qm5UDyXnS`,
                                  style: { backgroundColor: `rgba(0, 0, 0, 0)`, opacity: 1 },
                                  variants: {
                                    q1IWzhR4i: {
                                      backgroundColor: `var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255))`,
                                      opacity: 0,
                                    },
                                    QrrhCdIQ0: {
                                      backgroundColor: `var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255))`,
                                      opacity: 1,
                                    },
                                  },
                                  children: [
                                    d(H, {
                                      links: [
                                        {
                                          href: { webPageId: `V2Ho_ZYv2` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `V2Ho_ZYv2` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `V2Ho_ZYv2` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `V2Ho_ZYv2` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        d(R, {
                                          height: 20,
                                          y:
                                            (c?.y || 0) +
                                            0 +
                                            (((c?.height || 128) - 0 - 257) / 2 + 16 + 0) +
                                            0 +
                                            0 +
                                            110.5 +
                                            0 +
                                            0,
                                          ...Z(
                                            {
                                              IVDR7HZTK: {
                                                y:
                                                  (c?.y || 0) +
                                                  0 +
                                                  (((c?.height || 122) - 0 - 253) / 2 + 16 + 0) +
                                                  0 +
                                                  0 +
                                                  108.5 +
                                                  0 +
                                                  0,
                                              },
                                              q1IWzhR4i: {
                                                y:
                                                  (c?.y || 0) +
                                                  0 +
                                                  (((c?.height || 112) - 0 - 76) / 2 + 16 + 0) +
                                                  0 +
                                                  0 +
                                                  60 +
                                                  0 +
                                                  36 +
                                                  0,
                                              },
                                              QrrhCdIQ0: {
                                                y:
                                                  (c?.y || 0) +
                                                  0 +
                                                  (((c?.height || 436) - 0 - 376) / 2 + 16 + 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  60 +
                                                  0 +
                                                  40 +
                                                  0,
                                              },
                                            },
                                            g,
                                            x
                                          ),
                                          children: d(j, {
                                            className: `framer-e51o6s-container`,
                                            layoutDependency: E,
                                            layoutId: `IhOJRRJe7-container`,
                                            nodeId: `IhOJRRJe7`,
                                            rendersWithMotion: !0,
                                            scopeId: `VChi4Fc93`,
                                            children: d(X, {
                                              AnLRKNZ8C: `Home`,
                                              height: `100%`,
                                              hly7ePiLR: !0,
                                              id: `IhOJRRJe7`,
                                              layoutId: `IhOJRRJe7`,
                                              nbyWJIuw6: !1,
                                              oAgKjILQn: e[0],
                                              variant: Q(`Xox_evFrx`),
                                              width: `100%`,
                                              ...Z(
                                                {
                                                  IVDR7HZTK: { oAgKjILQn: e[1] },
                                                  q1IWzhR4i: { oAgKjILQn: e[2] },
                                                  QrrhCdIQ0: {
                                                    oAgKjILQn: e[3],
                                                    variant: Q(`JJYnCbKg_`),
                                                  },
                                                },
                                                g,
                                                x
                                              ),
                                            }),
                                          }),
                                        }),
                                    }),
                                    d(H, {
                                      links: [
                                        {
                                          href: { webPageId: `OuAbnO_az` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `OuAbnO_az` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `OuAbnO_az` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `OuAbnO_az` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        d(R, {
                                          height: 20,
                                          y:
                                            (c?.y || 0) +
                                            0 +
                                            (((c?.height || 128) - 0 - 257) / 2 + 16 + 0) +
                                            0 +
                                            0 +
                                            110.5 +
                                            0 +
                                            0,
                                          ...Z(
                                            {
                                              IVDR7HZTK: {
                                                y:
                                                  (c?.y || 0) +
                                                  0 +
                                                  (((c?.height || 122) - 0 - 253) / 2 + 16 + 0) +
                                                  0 +
                                                  0 +
                                                  108.5 +
                                                  0 +
                                                  0,
                                              },
                                              q1IWzhR4i: {
                                                y:
                                                  (c?.y || 0) +
                                                  0 +
                                                  (((c?.height || 112) - 0 - 76) / 2 + 16 + 0) +
                                                  0 +
                                                  0 +
                                                  60 +
                                                  0 +
                                                  36 +
                                                  60,
                                              },
                                              QrrhCdIQ0: {
                                                y:
                                                  (c?.y || 0) +
                                                  0 +
                                                  (((c?.height || 436) - 0 - 376) / 2 + 16 + 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  60 +
                                                  0 +
                                                  40 +
                                                  40,
                                              },
                                            },
                                            g,
                                            x
                                          ),
                                          children: d(j, {
                                            className: `framer-z6oydk-container`,
                                            layoutDependency: E,
                                            layoutId: `bvbaswdbG-container`,
                                            nodeId: `bvbaswdbG`,
                                            rendersWithMotion: !0,
                                            scopeId: `VChi4Fc93`,
                                            children: d(X, {
                                              AnLRKNZ8C: `About us`,
                                              height: `100%`,
                                              hly7ePiLR: !0,
                                              id: `bvbaswdbG`,
                                              layoutId: `bvbaswdbG`,
                                              nbyWJIuw6: !1,
                                              oAgKjILQn: e[0],
                                              variant: Q(`Xox_evFrx`),
                                              width: `100%`,
                                              ...Z(
                                                {
                                                  IVDR7HZTK: { oAgKjILQn: e[1] },
                                                  q1IWzhR4i: { oAgKjILQn: e[2] },
                                                  QrrhCdIQ0: {
                                                    LnNAkBU9Q: ie,
                                                    oAgKjILQn: e[3],
                                                    variant: Q(`JJYnCbKg_`),
                                                  },
                                                },
                                                g,
                                                x
                                              ),
                                            }),
                                          }),
                                        }),
                                    }),
                                    d(H, {
                                      links: [
                                        {
                                          href: { webPageId: `tOFmQXseb` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `tOFmQXseb` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `tOFmQXseb` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `tOFmQXseb` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        d(R, {
                                          height: 20,
                                          y:
                                            (c?.y || 0) +
                                            0 +
                                            (((c?.height || 128) - 0 - 257) / 2 + 16 + 0) +
                                            0 +
                                            0 +
                                            110.5 +
                                            0 +
                                            0,
                                          ...Z(
                                            {
                                              IVDR7HZTK: {
                                                y:
                                                  (c?.y || 0) +
                                                  0 +
                                                  (((c?.height || 122) - 0 - 253) / 2 + 16 + 0) +
                                                  0 +
                                                  0 +
                                                  108.5 +
                                                  0 +
                                                  0,
                                              },
                                              q1IWzhR4i: {
                                                y:
                                                  (c?.y || 0) +
                                                  0 +
                                                  (((c?.height || 112) - 0 - 76) / 2 + 16 + 0) +
                                                  0 +
                                                  0 +
                                                  60 +
                                                  0 +
                                                  36 +
                                                  120,
                                              },
                                              QrrhCdIQ0: {
                                                y:
                                                  (c?.y || 0) +
                                                  0 +
                                                  (((c?.height || 436) - 0 - 376) / 2 + 16 + 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  60 +
                                                  0 +
                                                  40 +
                                                  80,
                                              },
                                            },
                                            g,
                                            x
                                          ),
                                          children: d(j, {
                                            className: `framer-bvzl1b-container`,
                                            layoutDependency: E,
                                            layoutId: `axiJHv0P3-container`,
                                            nodeId: `axiJHv0P3`,
                                            rendersWithMotion: !0,
                                            scopeId: `VChi4Fc93`,
                                            children: d(X, {
                                              AnLRKNZ8C: `SERVICES`,
                                              height: `100%`,
                                              hly7ePiLR: !0,
                                              id: `axiJHv0P3`,
                                              layoutId: `axiJHv0P3`,
                                              nbyWJIuw6: !1,
                                              oAgKjILQn: e[0],
                                              variant: Q(`Xox_evFrx`),
                                              width: `100%`,
                                              ...Z(
                                                {
                                                  IVDR7HZTK: { oAgKjILQn: e[1] },
                                                  q1IWzhR4i: { oAgKjILQn: e[2] },
                                                  QrrhCdIQ0: {
                                                    LnNAkBU9Q: ie,
                                                    oAgKjILQn: e[3],
                                                    variant: Q(`JJYnCbKg_`),
                                                  },
                                                },
                                                g,
                                                x
                                              ),
                                            }),
                                          }),
                                        }),
                                    }),
                                    d(H, {
                                      links: [
                                        {
                                          href: { webPageId: `Dlfx5P74i` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `Dlfx5P74i` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `Dlfx5P74i` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `Dlfx5P74i` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        d(R, {
                                          height: 20,
                                          y:
                                            (c?.y || 0) +
                                            0 +
                                            (((c?.height || 128) - 0 - 257) / 2 + 16 + 0) +
                                            0 +
                                            0 +
                                            110.5 +
                                            0 +
                                            0,
                                          ...Z(
                                            {
                                              IVDR7HZTK: {
                                                y:
                                                  (c?.y || 0) +
                                                  0 +
                                                  (((c?.height || 122) - 0 - 253) / 2 + 16 + 0) +
                                                  0 +
                                                  0 +
                                                  108.5 +
                                                  0 +
                                                  0,
                                              },
                                              q1IWzhR4i: {
                                                y:
                                                  (c?.y || 0) +
                                                  0 +
                                                  (((c?.height || 112) - 0 - 76) / 2 + 16 + 0) +
                                                  0 +
                                                  0 +
                                                  60 +
                                                  0 +
                                                  36 +
                                                  180,
                                              },
                                              QrrhCdIQ0: {
                                                y:
                                                  (c?.y || 0) +
                                                  0 +
                                                  (((c?.height || 436) - 0 - 376) / 2 + 16 + 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  60 +
                                                  0 +
                                                  40 +
                                                  120,
                                              },
                                            },
                                            g,
                                            x
                                          ),
                                          children: d(j, {
                                            className: `framer-4kvcx1-container`,
                                            layoutDependency: E,
                                            layoutId: `x5NxcI7kt-container`,
                                            nodeId: `x5NxcI7kt`,
                                            rendersWithMotion: !0,
                                            scopeId: `VChi4Fc93`,
                                            children: d(X, {
                                              AnLRKNZ8C: `PROJECTS`,
                                              height: `100%`,
                                              hly7ePiLR: !0,
                                              id: `x5NxcI7kt`,
                                              layoutId: `x5NxcI7kt`,
                                              nbyWJIuw6: !1,
                                              oAgKjILQn: e[0],
                                              variant: Q(`Xox_evFrx`),
                                              width: `100%`,
                                              ...Z(
                                                {
                                                  IVDR7HZTK: { oAgKjILQn: e[1] },
                                                  q1IWzhR4i: { oAgKjILQn: e[2] },
                                                  QrrhCdIQ0: {
                                                    LnNAkBU9Q: ie,
                                                    oAgKjILQn: e[3],
                                                    variant: Q(`JJYnCbKg_`),
                                                  },
                                                },
                                                g,
                                                x
                                              ),
                                            }),
                                          }),
                                        }),
                                    }),
                                    d(H, {
                                      links: [
                                        {
                                          href: { hash: `:vPXJMDuCq`, webPageId: `V2Ho_ZYv2` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { hash: `:vPXJMDuCq`, webPageId: `V2Ho_ZYv2` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { hash: `:vPXJMDuCq`, webPageId: `V2Ho_ZYv2` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { hash: `:vPXJMDuCq`, webPageId: `V2Ho_ZYv2` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        d(R, {
                                          height: 20,
                                          y:
                                            (c?.y || 0) +
                                            0 +
                                            (((c?.height || 128) - 0 - 257) / 2 + 16 + 0) +
                                            0 +
                                            0 +
                                            110.5 +
                                            0 +
                                            0,
                                          ...Z(
                                            {
                                              IVDR7HZTK: {
                                                y:
                                                  (c?.y || 0) +
                                                  0 +
                                                  (((c?.height || 122) - 0 - 253) / 2 + 16 + 0) +
                                                  0 +
                                                  0 +
                                                  108.5 +
                                                  0 +
                                                  0,
                                              },
                                              q1IWzhR4i: {
                                                y:
                                                  (c?.y || 0) +
                                                  0 +
                                                  (((c?.height || 112) - 0 - 76) / 2 + 16 + 0) +
                                                  0 +
                                                  0 +
                                                  60 +
                                                  0 +
                                                  36 +
                                                  240,
                                              },
                                              QrrhCdIQ0: {
                                                y:
                                                  (c?.y || 0) +
                                                  0 +
                                                  (((c?.height || 436) - 0 - 376) / 2 + 16 + 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  60 +
                                                  0 +
                                                  40 +
                                                  160,
                                              },
                                            },
                                            g,
                                            x
                                          ),
                                          children: d(j, {
                                            className: `framer-2qx7iz-container`,
                                            layoutDependency: E,
                                            layoutId: `L4QcLp6Cd-container`,
                                            nodeId: `L4QcLp6Cd`,
                                            rendersWithMotion: !0,
                                            scopeId: `VChi4Fc93`,
                                            children: d(X, {
                                              AnLRKNZ8C: `PRICING`,
                                              height: `100%`,
                                              hly7ePiLR: !0,
                                              id: `L4QcLp6Cd`,
                                              layoutId: `L4QcLp6Cd`,
                                              nbyWJIuw6: !1,
                                              oAgKjILQn: e[0],
                                              variant: Q(`Xox_evFrx`),
                                              width: `100%`,
                                              ...Z(
                                                {
                                                  IVDR7HZTK: { oAgKjILQn: e[1] },
                                                  q1IWzhR4i: { oAgKjILQn: e[2] },
                                                  QrrhCdIQ0: {
                                                    LnNAkBU9Q: ie,
                                                    oAgKjILQn: e[3],
                                                    variant: Q(`JJYnCbKg_`),
                                                  },
                                                },
                                                g,
                                                x
                                              ),
                                            }),
                                          }),
                                        }),
                                    }),
                                    d(H, {
                                      links: [
                                        {
                                          href: { webPageId: `zLyHPFRpZ` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `zLyHPFRpZ` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `zLyHPFRpZ` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `zLyHPFRpZ` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        d(R, {
                                          height: 20,
                                          y:
                                            (c?.y || 0) +
                                            0 +
                                            (((c?.height || 128) - 0 - 257) / 2 + 16 + 0) +
                                            0 +
                                            0 +
                                            110.5 +
                                            0 +
                                            0,
                                          ...Z(
                                            {
                                              IVDR7HZTK: {
                                                y:
                                                  (c?.y || 0) +
                                                  0 +
                                                  (((c?.height || 122) - 0 - 253) / 2 + 16 + 0) +
                                                  0 +
                                                  0 +
                                                  108.5 +
                                                  0 +
                                                  0,
                                              },
                                              q1IWzhR4i: {
                                                y:
                                                  (c?.y || 0) +
                                                  0 +
                                                  (((c?.height || 112) - 0 - 76) / 2 + 16 + 0) +
                                                  0 +
                                                  0 +
                                                  60 +
                                                  0 +
                                                  36 +
                                                  300,
                                              },
                                              QrrhCdIQ0: {
                                                y:
                                                  (c?.y || 0) +
                                                  0 +
                                                  (((c?.height || 436) - 0 - 376) / 2 + 16 + 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  60 +
                                                  0 +
                                                  40 +
                                                  200,
                                              },
                                            },
                                            g,
                                            x
                                          ),
                                          children: d(j, {
                                            className: `framer-lfs56n-container`,
                                            layoutDependency: E,
                                            layoutId: `gJAdn26l5-container`,
                                            nodeId: `gJAdn26l5`,
                                            rendersWithMotion: !0,
                                            scopeId: `VChi4Fc93`,
                                            children: d(X, {
                                              AnLRKNZ8C: `CONTACT`,
                                              height: `100%`,
                                              hly7ePiLR: !0,
                                              id: `gJAdn26l5`,
                                              layoutId: `gJAdn26l5`,
                                              nbyWJIuw6: !1,
                                              oAgKjILQn: e[0],
                                              variant: Q(`Xox_evFrx`),
                                              width: `100%`,
                                              ...Z(
                                                {
                                                  IVDR7HZTK: { oAgKjILQn: e[1] },
                                                  q1IWzhR4i: { oAgKjILQn: e[2] },
                                                  QrrhCdIQ0: {
                                                    oAgKjILQn: e[3],
                                                    variant: Q(`JJYnCbKg_`),
                                                  },
                                                },
                                                g,
                                                x
                                              ),
                                            }),
                                          }),
                                        }),
                                    }),
                                  ],
                                }),
                              }),
                              P() &&
                                _(T.div, {
                                  className: `framer-6amac9`,
                                  "data-border": !0,
                                  "data-framer-name": `Nav button`,
                                  layoutDependency: E,
                                  layoutId: `hqj17mKz8`,
                                  style: {
                                    "--border-bottom-width": `0px`,
                                    "--border-color": `var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1))`,
                                    "--border-left-width": `1px`,
                                    "--border-right-width": `1px`,
                                    "--border-style": `solid`,
                                    "--border-top-width": `0px`,
                                  },
                                  children: [
                                    d(R, {
                                      height: 6,
                                      width: `6px`,
                                      y:
                                        (c?.y || 0) +
                                        0 +
                                        (((c?.height || 128) - 0 - 257) / 2 + 16 + 0) +
                                        0 +
                                        0 +
                                        82.5 +
                                        -3,
                                      ...Z(
                                        {
                                          IVDR7HZTK: {
                                            y:
                                              (c?.y || 0) +
                                              0 +
                                              (((c?.height || 122) - 0 - 253) / 2 + 16 + 0) +
                                              0 +
                                              0 +
                                              82.5 +
                                              -3,
                                          },
                                        },
                                        g,
                                        x
                                      ),
                                      children: d(j, {
                                        className: `framer-19s5bri-container`,
                                        layoutDependency: E,
                                        layoutId: `SgeeICiR5-container`,
                                        nodeId: `SgeeICiR5`,
                                        rendersWithMotion: !0,
                                        scopeId: `VChi4Fc93`,
                                        children: d(W, {
                                          height: `100%`,
                                          id: `SgeeICiR5`,
                                          layoutId: `SgeeICiR5`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: Q(`MnvfFSWcm`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    d(H, {
                                      links: [
                                        {
                                          href: { hash: `:RYTvATOdp`, webPageId: `V2Ho_ZYv2` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { hash: `:RYTvATOdp`, webPageId: `V2Ho_ZYv2` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        d(R, {
                                          height: 52,
                                          y:
                                            (c?.y || 0) +
                                            0 +
                                            (((c?.height || 128) - 0 - 257) / 2 + 16 + 0) +
                                            0 +
                                            0 +
                                            82.5 +
                                            12,
                                          ...Z(
                                            {
                                              IVDR7HZTK: {
                                                y:
                                                  (c?.y || 0) +
                                                  0 +
                                                  (((c?.height || 122) - 0 - 253) / 2 + 16 + 0) +
                                                  0 +
                                                  0 +
                                                  82.5 +
                                                  10,
                                              },
                                            },
                                            g,
                                            x
                                          ),
                                          children: d(j, {
                                            className: `framer-18kxa8m-container`,
                                            layoutDependency: E,
                                            layoutId: `XT7CvrmC9-container`,
                                            nodeId: `XT7CvrmC9`,
                                            rendersWithMotion: !0,
                                            scopeId: `VChi4Fc93`,
                                            children: d(tt, {
                                              C9TRGMpi1: `Start a Project`,
                                              height: `100%`,
                                              id: `XT7CvrmC9`,
                                              kadcqQxoL: `18.5px 24px 18.5px 24px`,
                                              layoutId: `XT7CvrmC9`,
                                              pYpS56G6v: e[0],
                                              width: `100%`,
                                              ...Z(
                                                {
                                                  IVDR7HZTK: {
                                                    C9TRGMpi1: `Request`,
                                                    pYpS56G6v: e[1],
                                                  },
                                                },
                                                g,
                                                x
                                              ),
                                            }),
                                          }),
                                        }),
                                    }),
                                    d(R, {
                                      height: 6,
                                      width: `6px`,
                                      y:
                                        (c?.y || 0) +
                                        0 +
                                        (((c?.height || 128) - 0 - 257) / 2 + 16 + 0) +
                                        0 +
                                        0 +
                                        82.5 +
                                        -3,
                                      ...Z(
                                        {
                                          IVDR7HZTK: {
                                            y:
                                              (c?.y || 0) +
                                              0 +
                                              (((c?.height || 122) - 0 - 253) / 2 + 16 + 0) +
                                              0 +
                                              0 +
                                              82.5 +
                                              -3,
                                          },
                                        },
                                        g,
                                        x
                                      ),
                                      children: d(j, {
                                        className: `framer-tulmax-container`,
                                        layoutDependency: E,
                                        layoutId: `TAjicq1vP-container`,
                                        nodeId: `TAjicq1vP`,
                                        rendersWithMotion: !0,
                                        scopeId: `VChi4Fc93`,
                                        children: d(W, {
                                          height: `100%`,
                                          id: `TAjicq1vP`,
                                          layoutId: `TAjicq1vP`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: Q(`MnvfFSWcm`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    d(R, {
                                      height: 6,
                                      width: `6px`,
                                      y:
                                        (c?.y || 0) +
                                        0 +
                                        (((c?.height || 128) - 0 - 257) / 2 + 16 + 0) +
                                        0 +
                                        0 +
                                        82.5 +
                                        76 -
                                        3,
                                      ...Z(
                                        {
                                          IVDR7HZTK: {
                                            y:
                                              (c?.y || 0) +
                                              0 +
                                              (((c?.height || 122) - 0 - 253) / 2 + 16 + 0) +
                                              0 +
                                              0 +
                                              82.5 +
                                              72 -
                                              3,
                                          },
                                        },
                                        g,
                                        x
                                      ),
                                      children: d(j, {
                                        className: `framer-1hdf2nv-container`,
                                        layoutDependency: E,
                                        layoutId: `PVJG8N9A3-container`,
                                        nodeId: `PVJG8N9A3`,
                                        rendersWithMotion: !0,
                                        scopeId: `VChi4Fc93`,
                                        children: d(W, {
                                          height: `100%`,
                                          id: `PVJG8N9A3`,
                                          layoutId: `PVJG8N9A3`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: Q(`MnvfFSWcm`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    d(R, {
                                      height: 6,
                                      width: `6px`,
                                      y:
                                        (c?.y || 0) +
                                        0 +
                                        (((c?.height || 128) - 0 - 257) / 2 + 16 + 0) +
                                        0 +
                                        0 +
                                        82.5 +
                                        76 -
                                        3,
                                      ...Z(
                                        {
                                          IVDR7HZTK: {
                                            y:
                                              (c?.y || 0) +
                                              0 +
                                              (((c?.height || 122) - 0 - 253) / 2 + 16 + 0) +
                                              0 +
                                              0 +
                                              82.5 +
                                              72 -
                                              3,
                                          },
                                        },
                                        g,
                                        x
                                      ),
                                      children: d(j, {
                                        className: `framer-1754y0t-container`,
                                        layoutDependency: E,
                                        layoutId: `muN3kDes7-container`,
                                        nodeId: `muN3kDes7`,
                                        rendersWithMotion: !0,
                                        scopeId: `VChi4Fc93`,
                                        children: d(W, {
                                          height: `100%`,
                                          id: `muN3kDes7`,
                                          layoutId: `muN3kDes7`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: Q(`MnvfFSWcm`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-HC69E.framer-1oatoeq, .framer-HC69E .framer-1oatoeq { display: block; }`,
          `.framer-HC69E.framer-15riqx3 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1440px; }`,
          `.framer-HC69E .framer-s11thx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 10; }`,
          `.framer-HC69E .framer-1cxko8r { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1440px; overflow: visible; padding: 0px 16px 0px 16px; position: relative; width: 1px; }`,
          `.framer-HC69E .framer-1s1slr4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; max-width: 457.33px; overflow: visible; padding: 10px 0px 10px 0px; position: relative; width: 100%; }`,
          `.framer-HC69E .framer-1ox3slk, .framer-HC69E .framer-4bbsf7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 1px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-HC69E .framer-1l3fz02, .framer-HC69E .framer-19if3fv, .framer-HC69E .framer-1cxrm0q, .framer-HC69E .framer-yc019j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 16px; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-HC69E .framer-1oj11s2, .framer-HC69E .framer-7df6jp, .framer-HC69E .framer-1ndfhy3, .framer-HC69E .framer-182cuze, .framer-HC69E .framer-5ynbbd, .framer-HC69E .framer-s04ys0, .framer-HC69E .framer-1fb7xs5, .framer-HC69E .framer-1xg5a97, .framer-HC69E .framer-1t70x1y, .framer-HC69E .framer-1wteabn, .framer-HC69E .framer-171dj02, .framer-HC69E .framer-1a06u1z, .framer-HC69E .framer-1b69h5u, .framer-HC69E .framer-nbsu26, .framer-HC69E .framer-1iuq802, .framer-HC69E .framer-nrvzof, .framer-HC69E .framer-1uwtq54, .framer-HC69E .framer-wnvu23, .framer-HC69E .framer-1fpdf5w, .framer-HC69E .framer-1ucd40z { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 2px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-HC69E .framer-1bd7grz, .framer-HC69E .framer-19wotd1 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 1px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: auto; }`,
          `.framer-HC69E .framer-z5eavg, .framer-HC69E .framer-7f4x32 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 1px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: auto; }`,
          `.framer-HC69E .framer-htaunk, .framer-HC69E .framer-dnv8oi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 1px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-HC69E .framer-1b1684b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-HC69E .framer-11oriq8, .framer-HC69E .framer-ryqqrl { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-HC69E .framer-lyit2o-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-HC69E .framer-w8spa { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 10; }`,
          `.framer-HC69E .framer-1ns4ris { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px 16px 0px 16px; position: relative; width: 1px; }`,
          `.framer-HC69E .framer-52j6z2 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-HC69E .framer-4z04a7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 21px 67px 20px 67px; position: relative; width: min-content; z-index: 0; }`,
          `.framer-HC69E .framer-18odjh8-container, .framer-HC69E .framer-e51o6s-container, .framer-HC69E .framer-z6oydk-container, .framer-HC69E .framer-bvzl1b-container, .framer-HC69E .framer-4kvcx1-container, .framer-HC69E .framer-2qx7iz-container, .framer-HC69E .framer-lfs56n-container, .framer-HC69E .framer-18kxa8m-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-HC69E .framer-1t7u710-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 6px); left: -2px; position: absolute; top: -3px; width: 6px; z-index: 2; }`,
          `.framer-HC69E .framer-p68xho-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 6px); position: absolute; right: -2px; top: -3px; width: 6px; z-index: 2; }`,
          `.framer-HC69E .framer-17k871q-container { aspect-ratio: 1 / 1; bottom: -3px; flex: none; height: var(--framer-aspect-ratio-supported, 6px); position: absolute; right: -2px; width: 6px; z-index: 2; }`,
          `.framer-HC69E .framer-jfptg5-container { aspect-ratio: 1 / 1; bottom: -3px; flex: none; height: var(--framer-aspect-ratio-supported, 6px); left: -2px; position: absolute; width: 6px; z-index: 2; }`,
          `.framer-HC69E .framer-mnirvn-container { flex: none; height: 30px; position: relative; width: 30px; }`,
          `.framer-HC69E .framer-1lapihd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-HC69E .framer-cgvoew { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-HC69E .framer-6amac9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 12px 50.5px 12px 50.5px; position: relative; width: min-content; }`,
          `.framer-HC69E .framer-19s5bri-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 6px); left: -2px; position: absolute; top: -3px; width: 6px; z-index: 1; }`,
          `.framer-HC69E .framer-tulmax-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 6px); position: absolute; right: -2px; top: -3px; width: 6px; z-index: 1; }`,
          `.framer-HC69E .framer-1hdf2nv-container { aspect-ratio: 1 / 1; bottom: -3px; flex: none; height: var(--framer-aspect-ratio-supported, 6px); position: absolute; right: -2px; width: 6px; z-index: 1; }`,
          `.framer-HC69E .framer-1754y0t-container { aspect-ratio: 1 / 1; bottom: -3px; flex: none; height: var(--framer-aspect-ratio-supported, 6px); left: -2px; position: absolute; width: 6px; z-index: 1; }`,
          `.framer-HC69E.framer-v-ijv500.framer-15riqx3 { width: 810px; }`,
          `.framer-HC69E.framer-v-ijv500 .framer-4z04a7 { padding: 19px 20px 18px 20px; }`,
          `.framer-HC69E.framer-v-ijv500 .framer-cgvoew { gap: 24px; }`,
          `.framer-HC69E.framer-v-ijv500 .framer-6amac9 { padding: 10px 20px 10px 20px; }`,
          `.framer-HC69E.framer-v-1ejbnoo.framer-15riqx3, .framer-HC69E.framer-v-mxb7po.framer-15riqx3 { width: 390px; }`,
          `.framer-HC69E.framer-v-1ejbnoo .framer-1cxko8r, .framer-HC69E.framer-v-1ejbnoo .framer-1ns4ris, .framer-HC69E.framer-v-mxb7po .framer-1cxko8r, .framer-HC69E.framer-v-mxb7po .framer-1ns4ris { padding: 0px 12px 0px 12px; }`,
          `.framer-HC69E.framer-v-1ejbnoo .framer-1s1slr4, .framer-HC69E.framer-v-mxb7po .framer-1s1slr4 { gap: 12px; }`,
          `.framer-HC69E.framer-v-1ejbnoo .framer-4z04a7 { flex: 1 0 0px; gap: unset; height: 60px; justify-content: space-between; padding: 5px 12px 5px 12px; width: 1px; z-index: 2; }`,
          `.framer-HC69E.framer-v-1ejbnoo .framer-1lapihd { align-content: flex-start; align-items: flex-start; height: 1px; left: -12px; position: absolute; right: -12px; top: 60px; width: unset; z-index: 1; }`,
          `.framer-HC69E.framer-v-1ejbnoo .framer-cgvoew { flex-direction: column; max-width: 366px; overflow: hidden; padding: 36px; width: 100%; z-index: 1; }`,
          `.framer-HC69E.framer-v-mxb7po .framer-52j6z2 { flex-direction: column; }`,
          `.framer-HC69E.framer-v-mxb7po .framer-4z04a7 { gap: unset; height: 60px; justify-content: space-between; padding: 5px 12px 5px 12px; width: 100%; z-index: 2; }`,
          `.framer-HC69E.framer-v-mxb7po .framer-1lapihd { width: 100%; z-index: 1; }`,
          `.framer-HC69E.framer-v-mxb7po .framer-cgvoew { align-content: flex-start; align-items: flex-start; flex: 1 0 0px; flex-direction: column; gap: 20px; padding: 40px 20px 40px 20px; width: 1px; z-index: 1; }`,
          ...Ze,
          `.framer-HC69E[data-border="true"]::after, .framer-HC69E [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-HC69E`
      )),
      ($.displayName = `Navbar`),
      ($.defaultProps = { height: 128, width: 1440 }),
      z($, {
        variant: {
          options: [`vJRG0LbZu`, `IVDR7HZTK`, `q1IWzhR4i`, `QrrhCdIQ0`, `RE7kXnRTn`],
          optionTitles: [`Desktop`, `Tablet`, `Phone open`, `Phone close`, `Phone/close/scroll`],
          title: `Variant`,
          type: B.Enum,
        },
        lDec893YU: { defaultValue: !0, title: `Visible`, type: B.Boolean },
        onlDec893YUChange: { changes: `lDec893YU`, type: B.ChangeHandler },
      }),
      P(
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
          ...Kn,
          ...qn,
          ...Jn,
          ...Yn,
          ...Xn,
          ...Zn,
          ...ue(Qe),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([
            F(Re, {}, t),
            F(pn, {}, t),
            F(W, {}, t),
            F(Tn, {}, t),
            F(X, {}, t),
            F(tt, {}, t),
          ])
        ),
      }));
  });
function cr(e) {
  let {
      backgroundColor: n = `#000000`,
      iconColor: i = `#FFFFFF`,
      progressColor: a = `#C6F24E`,
      size: o = 38,
      offsetBottom: u = 40,
      offsetRight: f = 20,
      showThreshold: p = 300,
    } = e,
    m = be(),
    g = r(null),
    v = r(null),
    [y, b] = s(!1),
    [x, te] = s(0),
    [ne, S] = s(!1),
    C = E(v),
    w = h(() => {
      if (c === void 0 || typeof document > `u`) return;
      let e = c.scrollY || c.pageYOffset || 0,
        t = document.documentElement,
        n = Math.max(t.scrollHeight - c.innerHeight, 0),
        r = (n > 0 ? Math.min(Math.max(e / n, 0), 1) : 0) * 360,
        i = e > p;
      l(() => {
        (te(r), b(i));
      });
    }, [p]);
  ee(() => {
    if (m || c === void 0) return;
    let e = () => {
      g.current === null &&
        (g.current = c.requestAnimationFrame(() => {
          ((g.current = null), w());
        }));
    };
    return (
      w(),
      c.addEventListener(`scroll`, e, { passive: !0 }),
      () => {
        (c.removeEventListener(`scroll`, e),
          g.current !== null && (c.cancelAnimationFrame(g.current), (g.current = null)));
      }
    );
  }, [m, w]);
  let T = h(() => {
      c !== void 0 && c.scrollTo({ top: 0, behavior: `smooth` });
    }, []),
    D = t(
      () => ({
        position: `absolute`,
        width: `calc(100% + 2px)`,
        height: `calc(100% + 2px)`,
        top: -1,
        left: -1,
        border: `2px solid ${a}`,
        borderRadius: `50%`,
        pointerEvents: `none`,
        WebkitMaskImage: `conic-gradient(${a} var(--progress-angle), transparent 0)`,
        maskImage: `conic-gradient(${a} var(--progress-angle), transparent 0)`,
        transition: `mask-image 0.15s linear, -webkit-mask-image 0.15s linear`,
        "--progress-angle": `${x}deg`,
      }),
      [x, a]
    ),
    O = ne ? `0px 6px 24px 0px rgba(255,255,255,0.18)` : `0px 4px 20px 0px rgba(255,255,255,0.1)`;
  return _(`div`, {
    style: { position: `relative`, width: `max-content`, height: `max-content` },
    children: [
      _(`button`, {
        ref: v,
        type: `button`,
        "aria-label": `Back to top`,
        onClick: T,
        onMouseEnter: () => l(() => S(!0)),
        onMouseLeave: () => l(() => S(!1)),
        style: {
          position: `fixed`,
          right: `${f}px`,
          bottom: `${u}px`,
          width: `${o}px`,
          height: `${o}px`,
          borderRadius: `99px`,
          border: `none`,
          background: n,
          color: i,
          cursor: `pointer`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          opacity: +!!y,
          visibility: y ? `visible` : `hidden`,
          pointerEvents: y ? `auto` : `none`,
          transition: `opacity 0.3s ease, visibility 0.3s ease, box-shadow 0.3s ease`,
          boxShadow: O,
          padding: 0,
          zIndex: 9999,
        },
        children: [
          d(`span`, { style: D }),
          d(`svg`, {
            width: Math.max(14, Math.round(o * 0.4)),
            height: Math.max(18, Math.round(o * 0.5)),
            viewBox: `0 0 24 24`,
            fill: `none`,
            xmlns: `http://www.w3.org/2000/svg`,
            "aria-hidden": `true`,
            style: {
              display: `block`,
              animation: m || !y || !C ? `none` : `backToTopIconBounce 2s ease-in-out infinite`,
              willChange: `transform`,
            },
            children: d(`path`, {
              d: `M12 20V5M12 5L6.5 10.5M12 5L17.5 10.5`,
              stroke: i,
              strokeWidth: `2`,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
            }),
          }),
        ],
      }),
      d(`style`, {
        children: `
                @keyframes backToTopIconBounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-3px); }
                }
            `,
      }),
    ],
  });
}
var lr = e(() => {
    (i(),
      b(),
      n(),
      M(),
      k(),
      z(cr, {
        backgroundColor: { type: B.Color, title: `Background`, defaultValue: `#000000` },
        iconColor: { type: B.Color, title: `Icon`, defaultValue: `#FFFFFF` },
        progressColor: { type: B.Color, title: `Progress`, defaultValue: `#C6F24E` },
        size: {
          type: B.Number,
          title: `Size`,
          defaultValue: 38,
          min: 24,
          max: 120,
          unit: `px`,
          step: 1,
        },
        offsetBottom: {
          type: B.Number,
          title: `Bottom`,
          defaultValue: 40,
          min: 0,
          max: 300,
          unit: `px`,
          step: 1,
        },
        offsetRight: {
          type: B.Number,
          title: `Right`,
          defaultValue: 20,
          min: 0,
          max: 300,
          unit: `px`,
          step: 1,
        },
        showThreshold: {
          type: B.Number,
          title: `Threshold`,
          defaultValue: 300,
          min: 0,
          max: 2e3,
          unit: `px`,
          step: 10,
        },
      }));
  }),
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr = e(() => {
    (b(),
      M(),
      k(),
      n(),
      nn(),
      sr(),
      lr(),
      (ur = A($)),
      (dr = A(Y)),
      (fr = A(cr)),
      (pr = {
        gwQ3RQDYe: `(max-width: 809.98px)`,
        WmFrwyjsZ: `(min-width: 810px) and (max-width: 1439.98px)`,
        y2IHHaWz_: `(min-width: 1440px)`,
      }),
      (mr = `framer-jUhF3`),
      (hr = {
        gwQ3RQDYe: `framer-v-5554vo`,
        WmFrwyjsZ: `framer-v-1270z19`,
        y2IHHaWz_: `framer-v-1coc4ul`,
      }),
      (gr = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (_r = {}),
      (vr = Object.keys(_r)),
      (yr = [
        `.framer-jUhF3.framer-2ol1hi, .framer-jUhF3 .framer-2ol1hi { display: block; }`,
        `.framer-jUhF3.framer-1coc4ul { align-content: center; align-items: center; background-color: var(--token-43400ed2-3e46-4780-82d7-996f7a17bf5a, #f3f4f6); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-jUhF3 .framer-m3lmtl-container { flex: none; height: auto; order: -1000; position: relative; width: 100%; z-index: 10; }`,
        `.framer-jUhF3 .framer-18ox0y1 { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-jUhF3 .framer-14f1usc-container { flex: none; height: auto; order: 1002; position: relative; width: 100%; }`,
        `.framer-jUhF3 .framer-1gg0zmp-container { flex: none; height: auto; order: 1003; position: relative; width: auto; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
      ]),
      (br = {
        gwQ3RQDYe: `(max-width: 809.98px)`,
        WmFrwyjsZ: `(min-width: 810px) and (max-width: 1439.98px)`,
        y2IHHaWz_: `(min-width: 1440px)`,
      }),
      (xr = { Desktop: `y2IHHaWz_`, Phone: `gwQ3RQDYe`, Tablet: `WmFrwyjsZ` }),
      (Sr = ({ value: e }) =>
        ve()
          ? null
          : d(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (Cr = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: xr[r.variant] ?? r.variant ?? `y2IHHaWz_`,
      })),
      (wr = f(function (e, t) {
        let n = r(null),
          i = t ?? n,
          a = C(),
          { activeLocale: ee, setLocale: o } = V(),
          { style: s, className: c, layoutId: l, variant: u, children: f, ...p } = Cr(e),
          [m, h] = ke(u, pr, !1),
          g = N(mr);
        return (
          we({}),
          d(_e.Provider, {
            value: {
              activeVariantId: m,
              humanReadableVariantMap: xr,
              isLayoutTemplate: !0,
              primaryVariantId: `y2IHHaWz_`,
              variantClassNames: hr,
            },
            children: _(O, {
              id: l ?? a,
              children: [
                d(Sr, {
                  value: `:root body { background: var(--token-43400ed2-3e46-4780-82d7-996f7a17bf5a, rgb(243, 244, 246)); }`,
                }),
                _(T.div, {
                  ...p,
                  className: N(g, `framer-1coc4ul`, c),
                  "data-layout-template": !0,
                  ref: i,
                  style: { ...s },
                  children: [
                    d(R, {
                      height: 128,
                      width: `100vw`,
                      y: 0,
                      children: d(fe, {
                        className: `framer-m3lmtl-container`,
                        nodeId: `VppoJ5kFe`,
                        scopeId: `ubaQ9vMK_`,
                        children: d(Ne, {
                          breakpoint: m,
                          overrides: {
                            gwQ3RQDYe: { variant: gr(`q1IWzhR4i`) },
                            WmFrwyjsZ: { variant: gr(`IVDR7HZTK`) },
                          },
                          children: d($, {
                            height: `100%`,
                            id: `VppoJ5kFe`,
                            layoutId: `VppoJ5kFe`,
                            lDec893YU: !0,
                            style: { width: `100%` },
                            variant: gr(`vJRG0LbZu`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    f,
                    d(`div`, { className: `framer-18ox0y1` }),
                    d(R, {
                      height: 668,
                      width: `100vw`,
                      y: 1128,
                      children: d(fe, {
                        className: `framer-14f1usc-container`,
                        nodeId: `H5DXMNgf8`,
                        scopeId: `ubaQ9vMK_`,
                        children: d(Ne, {
                          breakpoint: m,
                          overrides: {
                            gwQ3RQDYe: { variant: gr(`oVjD_NiJa`) },
                            WmFrwyjsZ: { variant: gr(`zjkYPb75y`) },
                          },
                          children: d(Y, {
                            height: `100%`,
                            id: `H5DXMNgf8`,
                            layoutId: `H5DXMNgf8`,
                            style: { width: `100%` },
                            variant: gr(`JBRN9m83B`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    d(R, {
                      children: d(fe, {
                        className: `framer-1gg0zmp-container`,
                        "data-framer-name": `Back to top`,
                        isAuthoredByUser: !0,
                        name: `Back to top`,
                        nodeId: `PYUAHSwcC`,
                        scopeId: `ubaQ9vMK_`,
                        children: d(cr, {
                          backgroundColor: `rgb(0, 0, 0)`,
                          height: `100%`,
                          iconColor: `rgb(255, 255, 255)`,
                          id: `PYUAHSwcC`,
                          layoutId: `PYUAHSwcC`,
                          name: `Back to top`,
                          offsetBottom: 80,
                          offsetRight: 20,
                          progressColor: `rgb(198, 242, 78)`,
                          showThreshold: 300,
                          size: 38,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                d(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (Tr = (e) =>
        e === ie.canvas || e === ie.export
          ? [
              ...yr,
              ...vr.flatMap((e) => {
                let t = _r[e];
                return _r[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...yr, ...vr.map((e) => `@media ${br[e]} { ${_r[e].join(` `)} }`)]),
      (Er = U(wr, Tr, `framer-jUhF3`)),
      (Er.displayName = `Template`),
      (Er.defaultProps = { height: 4177, width: 1440 }),
      P(Er, [{ explicitInter: !0, fonts: [] }, ...ur, ...dr, ...fr], {
        supportsExplicitInterCodegen: !0,
      }),
      (Er.loader = { load: (e, t) => (t.locale, Promise.allSettled([F($, {}, t), F(Y, {}, t)])) }));
  });
function Or({ webPageId: e, children: t, style: n, ...r }) {
  let i = {}[e] ?? {};
  switch (e) {
    case `V2Ho_ZYv2`:
    case `QxBxVdiX9`:
    case `OuAbnO_az`:
    case `zLyHPFRpZ`:
    case `Dlfx5P74i`:
    case `tOFmQXseb`:
    case `wp5_9QJGE`:
    case `wW3AyXqhI`:
    case `UcbL5LHId`:
      return S(Er, { ...i, key: `Template1`, style: n }, t(!0));
    default:
      return t(!1);
  }
}
function kr(e) {
  switch (e) {
    case `V2Ho_ZYv2`:
    case `QxBxVdiX9`:
    case `OuAbnO_az`:
    case `zLyHPFRpZ`:
    case `Dlfx5P74i`:
    case `tOFmQXseb`:
    case `wp5_9QJGE`:
    case `wW3AyXqhI`:
    case `UcbL5LHId`:
      return [
        { hash: `1coc4ul`, mediaQuery: `(min-width: 1440px)` },
        { hash: `1270z19`, mediaQuery: `(min-width: 810px) and (max-width: 1439.98px)` },
        { hash: `5554vo`, mediaQuery: `(max-width: 809.98px)` },
      ];
    default:
      return;
  }
}
async function Ar({ routeId: e, pathVariables: t, localeId: n, collectionItemId: i }) {
  let a = Nr[e].page.preload();
  Te({
    disableCustomCode: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageLocalizationSupport: !0,
    onPageMoveTool: !0,
    onPageRichTextBlockSelection: !1,
    privateRouterReplaceState: !1,
    scrollRestoration: !1,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  });
  let l = S(Ae, {
    children: S(ye, {
      children: S(Pe, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: t,
        routes: Nr,
        collectionUtils: Fr,
        framerSiteId: Ir,
        notFoundPage: L(() => import(`./LS-XDizAEnRGVFE67ItNEK0qfn94nlhJon-5znuIwxw.C8nrmtLk.mjs`)),
        isReducedMotion: void 0,
        localeId: n,
        locales: Pr,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://encouraging-interface-928870.framer.app`,
        EditorBar:
          c === void 0
            ? void 0
            : (() => {
                if (Rr) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return L(async () => {
                  c.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: ge, useLocaleInfo: V, useRouter: je },
                    react: {
                      createElement: S,
                      Fragment: o,
                      memo: p,
                      useCallback: h,
                      useEffect: ee,
                      useRef: r,
                      useState: s,
                      useLayoutEffect: w,
                    },
                    "react-dom": { createPortal: m },
                  };
                  let { createEditorBar: e } = await import(`init.mjs`);
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !0,
        LayoutTemplate: Or,
        loadSnippetsModule: new Se(
          () => import(`./aSpBIXnS5IhGEDdkwl_tb-F-vbbroN1ohifwgsE_SGg.wFUEeHC7.mjs`)
        ),
        initialCollectionItemId: i,
      }),
    }),
    value: {
      global: {
        enter: {
          mask: { angle: 270, type: `wipe`, width: `0%` },
          opacity: 0,
          rotate: 0,
          rotate3d: !1,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          transition: {
            damping: 30,
            delay: 0.5,
            duration: 0.6,
            ease: [0.44, 0, 0.56, 1],
            mass: 1,
            stiffness: 400,
            type: `tween`,
          },
          x: `0px`,
          y: `30%`,
        },
        exit: {
          mask: { angle: 270, type: `wipe`, width: `0%` },
          opacity: 0,
          rotate: 0,
          rotate3d: !1,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          transition: {
            damping: 30,
            delay: 0,
            duration: 0.6,
            ease: [0.44, 0, 0.56, 1],
            mass: 1,
            stiffness: 400,
            type: `tween`,
          },
          x: `0px`,
          y: `-30%`,
        },
      },
      routes: {},
    },
  });
  return (await a, l);
}
function jr() {
  Lr && c.__framer_events.push(arguments);
}
async function Mr(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || c.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    jr(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, i, a, ee, o;
    if (e)
      ((o = JSON.parse(t.dataset.framerHydrateV2)),
        (r = o.routeId),
        (i = o.localeId),
        (a = o.pathVariables),
        (ee = o.breakpoints),
        (r = re(Nr, r)));
    else {
      re(Nr, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((a ??= {}), (a[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = oe(Nr, decodeURIComponent(location.pathname), !0, Pr);
        ((r = e.routeId), (i = e.localeId), (a = e.pathVariables));
      }
    }
    let s = Ar({
      routeId: r,
      localeId: i,
      pathVariables: a,
      collectionItemId: o?.collectionItemId,
    });
    c !== void 0 &&
      (async () => {
        let e = Nr[r],
          t = Pr.find(({ id: e }) => (i ? e === i : e === "default")).code,
          n = o?.collectionItemId ?? null;
        if (n === null && e?.collectionId && Fr) {
          let r = await Fr[e.collectionId]?.(),
            [i] = Object.values(a);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let ee = Intl.DateTimeFormat().resolvedOptions(),
          s = ee.timeZone,
          l = ee.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          c.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: Ir,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: c.location.href,
              hostname: c.location.hostname || null,
              pathname: c.location.pathname || null,
              hash: c.location.hash || null,
              search: c.location.search || null,
              timezone: s,
              locale: l,
            },
            `eager`,
          ]),
          await ce({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let u = await s;
    e
      ? (ae(`framer-rewrite-breakpoints`, () => {
          (Oe(ee), c.__framer_onRewriteBreakpoints?.(ee));
        }),
        (Rr ? (e) => e() : l)(() => {
          (de(), Ce(), ne(t, u, { onRecoverableError: n }));
        }))
      : te(t, { onRecoverableError: n }).render(u);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var Nr, Pr, Fr, Ir, Lr, Rr;
e(() => {
  if (
    (i(),
    M(),
    n(),
    u(),
    y(),
    Dr(),
    (Nr = {
      V2Ho_ZYv2: {
        elements: {
          EY68PYUry: `services`,
          RYTvATOdp: `contact`,
          Vo8q3wkUB: `hero`,
          VPRVCzRBm: `our-vision`,
          z4RSlNN1X: `about-us`,
        },
        page: L(() => import(`./TK2fCDiEmKPoxJDHDsu4ups4tjWZA5y3lMby0wCb8r4.BphgDeji.mjs`)),
        path: `/`,
      },
      QxBxVdiX9: {
        elements: {},
        page: L(() => import(`./LS-XDizAEnRGVFE67ItNEK0qfn94nlhJon-5znuIwxw.C8nrmtLk.mjs`)),
        path: `/404`,
      },
      OuAbnO_az: {
        elements: { Dp7y52G6Q: `team`, Nnjt39pGM: `contact`, oealvkeVV: `about-us` },
        page: L(() => import(`./oEXMP7lVlYQ_PWcN1RErx60W5LEWLQHd-6gQ4KALLVI.GsXk8b12.mjs`)),
        path: `/about-us`,
      },
      zLyHPFRpZ: {
        elements: { hcrH3w39W: `contact` },
        page: L(() => import(`./ZGU_9twb3CX4qgAaQi6DmAsM507MnMx-Oja6orkuGiU.DfRtgHOq.mjs`)),
        path: `/contact`,
      },
      Dlfx5P74i: {
        elements: { Oenfz_TBZ: `contact`, QAQEcLEDh: `pricing-plan` },
        page: L(() => import(`./nDEU6zNBj3vqulr7AATKGcBXl3vxK9AKs3jw8D7jY4E.Bj5fgZZ8.mjs`)),
        path: `/projects`,
      },
      tOFmQXseb: {
        elements: { AdqC10ehE: `pricing-plan`, PZPHMK0t6: `services`, T_R6_PfA5: `contact` },
        page: L(() => import(`./6ZSkV8Re4xlWlYCSqIpEHC398KwmCwJtKuF2gAJtrwo.C1VSiEji.mjs`)),
        path: `/services`,
      },
      wW3AyXqhI: {
        elements: {},
        page: L(() => import(`./osuHxB2RRetkoRmh30BbSalPDIF0HiOSYlcHw_Y9gpE.XiNn3hS1.mjs`)),
        path: `/blog`,
      },
      UcbL5LHId: {
        collectionId: `GFtmFIqfa`,
        elements: { n_3d0Jdrd: `contact` },
        page: L(() => import(`./ZqahlRn4LIArzDi66ul-hvsZcDZ9r_DiBnfJVCeRqto.BtxUU-_O.mjs`)),
        path: `/projects/:cUFrhZwSx`,
      },
    }),
    (Pr = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (Fr = {
      GFtmFIqfa: async () =>
        (await import(`./Z23XreJRPmL1nWeaL0_7PIB0xES7ehbflxF45DsCG_o.ZtijW_4-.mjs`))?.utils,
    }),
    (Ir = `5dc1a80c86183a9d2870a520cbef46a62067f0c52fe64a9330f8e9ea1f629d7f`),
    (Lr = typeof document < `u`),
    (Rr = Lr && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(a.userAgent)),
    Lr)
  ) {
    ((c.__framer_importFromPackage = (e, t) => () =>
      S(he, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (c.__framer_events = c.__framer_events || []),
      De());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? Mr(!0, e) : Mr(!1, e);
  }
  (function () {
    Lr &&
      l(() => {
        ne(
          document.getElementById(`__framer-badge-container`),
          S(v, {}, S(x(() => import(`./PX9hIOIVM.BEG7tAFE.mjs`))))
        );
      });
  })();
})();
export { kr as getLayoutTemplateBreakpoints, Ar as getPageRoot };
//# sourceMappingURL=script_main.CBlBp76s.mjs.map
