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
  E as g,
  J as _,
  M as v,
  O as y,
  P as b,
  T as x,
  V as S,
  bt as C,
  i as w,
  k as T,
  o as E,
  ot as D,
  pt as O,
  xt as k,
} from "./framer.Cfrj40WT.mjs";
import {
  S as A,
  _ as j,
  b as M,
  c as N,
  l as P,
  s as F,
  u as I,
  v as L,
  x as R,
  y as z,
} from "./shared-lib.CiHz06lb.mjs";
function B(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var V,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  X,
  Z,
  Q,
  $ = e(() => {
    (l(),
      _(),
      m(),
      n(),
      A(),
      I(),
      L(),
      (V = h(j)),
      (H = [
        `HiPT_1Fkc`,
        `X6yPU2SuQ`,
        `IrIAkxoR0`,
        `So8O4xsUm`,
        `AjrubrO8u`,
        `UTclVAVCW`,
        `G2ncJhaBZ`,
      ]),
      (U = `framer-pjACP`),
      (W = {
        AjrubrO8u: `framer-v-ilyj6u`,
        G2ncJhaBZ: `framer-v-i0dxp0`,
        HiPT_1Fkc: `framer-v-1llywha`,
        IrIAkxoR0: `framer-v-bqqn6z`,
        So8O4xsUm: `framer-v-1s8slyv`,
        UTclVAVCW: `framer-v-jswx7p`,
        X6yPU2SuQ: `framer-v-ks503u`,
      }),
      (G = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (K = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (q = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (J = {
        "Dark navy": `IrIAkxoR0`,
        "Light gray": `So8O4xsUm`,
        "Lime green": `AjrubrO8u`,
        "Section tag": `HiPT_1Fkc`,
        "White 20%": `UTclVAVCW`,
        Contact: `G2ncJhaBZ`,
        White: `X6yPU2SuQ`,
      }),
      (Y = d.create(i)),
      (X = ({ height: e, id: t, text: n, width: r, ...i }) => ({
        ...i,
        RRhqTkqTM: n ?? i.RRhqTkqTM ?? `projects`,
        variant: J[i.variant] ?? i.variant ?? `HiPT_1Fkc`,
      })),
      (Z = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Q = k(
        o(function (e, t) {
          let n = r(null),
            o = t ?? n,
            s = u(),
            { activeLocale: l, setLocale: f } = O(),
            m = D(),
            { style: h, className: _, layoutId: y, variant: b, RRhqTkqTM: S, ...T } = X(e),
            {
              baseVariant: E,
              classNames: k,
              clearLoadingGesture: A,
              gestureHandlers: M,
              gestureVariant: N,
              isLoading: P,
              setGestureState: I,
              setVariant: L,
              variants: R,
            } = C({
              cycleOrder: H,
              defaultVariant: `HiPT_1Fkc`,
              ref: o,
              variant: b,
              variantClassNames: W,
            }),
            V = Z(e, R),
            J = v(U, F, z);
          return a(p, {
            id: y ?? s,
            children: a(Y, {
              animate: R,
              initial: !1,
              children: a(q, {
                value: G,
                children: c(d.div, {
                  ...T,
                  ...M,
                  className: v(J, `framer-1llywha`, _, k),
                  "data-framer-name": `Section tag`,
                  layoutDependency: V,
                  layoutId: `HiPT_1Fkc`,
                  ref: o,
                  style: {
                    backgroundColor: `var(--token-0fbfb1aa-14cf-4d4e-9401-7de4a733d912, rgb(243, 244, 246))`,
                    ...h,
                  },
                  variants: {
                    AjrubrO8u: {
                      backgroundColor: `var(--token-e2dc21fe-e834-488a-841f-7ec3be3f65c1, rgba(152, 255, 3, 0.15))`,
                    },
                    G2ncJhaBZ: { backgroundColor: `rgba(243, 244, 246, 0.15)` },
                    IrIAkxoR0: {
                      backgroundColor: `var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18))`,
                    },
                    UTclVAVCW: {
                      backgroundColor: `var(--token-aaee80fe-883f-4573-a607-02bc8757c9ff, rgba(255, 255, 255, 0.2))`,
                    },
                    X6yPU2SuQ: {
                      backgroundColor: `var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255))`,
                    },
                  },
                  ...B(
                    {
                      AjrubrO8u: { "data-framer-name": `Lime green` },
                      G2ncJhaBZ: { "data-framer-name": `Contact` },
                      IrIAkxoR0: { "data-framer-name": `Dark navy` },
                      So8O4xsUm: { "data-framer-name": `Light gray` },
                      UTclVAVCW: { "data-framer-name": `White 20%` },
                      X6yPU2SuQ: { "data-framer-name": `White` },
                    },
                    E,
                    N
                  ),
                  children: [
                    a(w, {
                      height: 6,
                      y: (m?.y || 0) + (0 + ((m?.height || 20) - 0 - 6) / 2),
                      children: a(g, {
                        className: `framer-h6ejg4-container`,
                        "data-framer-name": `Rectangle `,
                        layoutDependency: V,
                        layoutId: `CcX_dgpa7-container`,
                        name: `Rectangle `,
                        nodeId: `CcX_dgpa7`,
                        rendersWithMotion: !0,
                        scopeId: `noBET4yzv`,
                        children: a(j, {
                          height: `100%`,
                          id: `CcX_dgpa7`,
                          layoutId: `CcX_dgpa7`,
                          name: `Rectangle `,
                          variant: K(`cChVdFksS`),
                          width: `100%`,
                          ...B(
                            {
                              AjrubrO8u: { variant: K(`iACDkr19o`) },
                              UTclVAVCW: { variant: K(`iACDkr19o`) },
                            },
                            E,
                            N
                          ),
                        }),
                      }),
                    }),
                    a(x, {
                      __fromCanvasComponent: !0,
                      children: a(i, {
                        children: a(d.p, {
                          className: `framer-styles-preset-13lpt6d`,
                          "data-styles-preset": `RXmiUshAy`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18)))`,
                          },
                          children: `PROJECTS`,
                        }),
                      }),
                      className: `framer-103dorc`,
                      fonts: [`Inter`],
                      layoutDependency: V,
                      layoutId: `V08TBu8NM`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: S,
                      variants: {
                        G2ncJhaBZ: {
                          "--extracted-r6o4lv": `var(--token-6119fd2e-12e6-4584-a904-059d2982e750, rgb(249, 250, 251))`,
                        },
                        IrIAkxoR0: {
                          "--extracted-r6o4lv": `var(--token-6119fd2e-12e6-4584-a904-059d2982e750, rgb(249, 250, 251))`,
                        },
                        UTclVAVCW: {
                          "--extracted-r6o4lv": `var(--token-6119fd2e-12e6-4584-a904-059d2982e750, rgb(249, 250, 251))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...B(
                        {
                          AjrubrO8u: {
                            children: a(i, {
                              children: a(d.p, {
                                className: `framer-styles-preset-ssp3c`,
                                "data-styles-preset": `bFgW78cfL`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18)))`,
                                },
                                children: `projects`,
                              }),
                            }),
                          },
                          G2ncJhaBZ: {
                            children: a(i, {
                              children: a(d.p, {
                                className: `framer-styles-preset-13lpt6d`,
                                "data-styles-preset": `RXmiUshAy`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6119fd2e-12e6-4584-a904-059d2982e750, rgb(249, 250, 251)))`,
                                },
                                children: `projects`,
                              }),
                            }),
                          },
                          IrIAkxoR0: {
                            children: a(i, {
                              children: a(d.p, {
                                className: `framer-styles-preset-13lpt6d`,
                                "data-styles-preset": `RXmiUshAy`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6119fd2e-12e6-4584-a904-059d2982e750, rgb(249, 250, 251)))`,
                                },
                                children: `PROJECTS`,
                              }),
                            }),
                          },
                          So8O4xsUm: {
                            children: a(i, {
                              children: a(d.p, {
                                className: `framer-styles-preset-ssp3c`,
                                "data-styles-preset": `bFgW78cfL`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18)))`,
                                },
                                children: `PROJECTS`,
                              }),
                            }),
                          },
                          UTclVAVCW: {
                            children: a(i, {
                              children: a(d.p, {
                                className: `framer-styles-preset-ssp3c`,
                                "data-styles-preset": `bFgW78cfL`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6119fd2e-12e6-4584-a904-059d2982e750, rgb(249, 250, 251)))`,
                                },
                                children: `projects`,
                              }),
                            }),
                          },
                        },
                        E,
                        N
                      ),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-pjACP.framer-1v9wjq6, .framer-pjACP .framer-1v9wjq6 { display: block; }`,
          `.framer-pjACP.framer-1llywha { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 4px 0px 4px; position: relative; width: min-content; }`,
          `.framer-pjACP .framer-h6ejg4-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-pjACP .framer-103dorc { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...N,
          ...M,
        ],
        `framer-pjACP`
      )),
      (Q.displayName = `Section tag`),
      (Q.defaultProps = { height: 20, width: 96 }),
      T(Q, {
        variant: {
          options: [
            `HiPT_1Fkc`,
            `X6yPU2SuQ`,
            `IrIAkxoR0`,
            `So8O4xsUm`,
            `AjrubrO8u`,
            `UTclVAVCW`,
            `G2ncJhaBZ`,
          ],
          optionTitles: [
            `Section tag`,
            `White`,
            `Dark navy`,
            `Light gray`,
            `Lime green`,
            `White 20%`,
            `Contact`,
          ],
          title: `Variant`,
          type: E.Enum,
        },
        RRhqTkqTM: { defaultValue: `projects`, displayTextArea: !1, title: `Text`, type: E.String },
        onRRhqTkqTMChange: { changes: `RRhqTkqTM`, type: E.ChangeHandler },
      }),
      y(
        Q,
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
          ...V,
          ...S(P),
          ...S(R),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([b(j, {}, t)])) }));
  });
export { $ as n, Q as t };
//# sourceMappingURL=noBET4yzv.DlZcxCxb.mjs.map
