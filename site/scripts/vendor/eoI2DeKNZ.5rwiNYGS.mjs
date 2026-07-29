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
  J as g,
  M as _,
  O as v,
  T as y,
  V as b,
  bt as x,
  k as S,
  o as C,
  ot as w,
  pt as T,
  xt as E,
} from "./framer.Cfrj40WT.mjs";
import { a as D, i as O, o as k, r as A } from "./shared-lib.CiHz06lb.mjs";
var j,
  M,
  N,
  P,
  F = e(() => {
    (l(),
      g(),
      n(),
      (j = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 5.6 10.6 L 1.4 6.4 L 0 7.8 L 5.6 13.4 L 17.6 1.4 L 16.2 0 Z" fill="var(--esondr, rgb(0,0,0))" height="13.399999999999999px" id="JlCjy43Wm" transform="translate(3.2 5.3)" width="17.599990000000002px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (M = o((e, t) => {
        let { animated: n, layoutId: r, children: i, ...o } = e;
        return n ? a(d.div, { ...o, layoutId: r, ref: t }) : a(`div`, { ...o, ref: t });
      })),
      (N = ({ fill: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        K5AAorpEW: e ?? i.K5AAorpEW ?? `rgb(0, 0, 0)`,
      })),
      (P = E(
        o(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: o, K5AAorpEW: s, ...c } = N(e);
          return a(M, {
            ...c,
            className: _(`framer-nvxFD`, r),
            layoutId: i,
            ref: t,
            style: { "--esondr": s, ...n },
          });
        }),
        [
          `.framer-nvxFD { -webkit-mask: ${j}; aspect-ratio: 1; background-color: var(--esondr); mask: ${j}; width: 24px; }`,
        ],
        `framer-nvxFD`
      )),
      (P.displayName = `Done`),
      S(P, {
        K5AAorpEW: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Fill`, type: C.Color },
      }));
  });
function I(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  J = e(() => {
    (l(),
      g(),
      m(),
      n(),
      F(),
      k(),
      (L = h(P)),
      (R = [`kGdw38Iax`, `ge2zZPUQA`, `GgzVsDmqK`, `MIJKZm6mU`]),
      (z = `framer-1wZXi`),
      (B = {
        ge2zZPUQA: `framer-v-1gninoe`,
        GgzVsDmqK: `framer-v-1cbwjdd`,
        kGdw38Iax: `framer-v-sewv2a`,
        MIJKZm6mU: `framer-v-b5c4a9`,
      }),
      (V = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (H = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (U = {
        "Dark navy": `GgzVsDmqK`,
        "Medium gray": `ge2zZPUQA`,
        "Pricing point": `kGdw38Iax`,
        White: `MIJKZm6mU`,
      }),
      (W = d.create(i)),
      (G = ({ height: e, id: t, text: n, width: r, ...i }) => ({
        ...i,
        uRRrPnIeh: n ?? i.uRRrPnIeh ?? `Full service creative`,
        variant: U[i.variant] ?? i.variant ?? `kGdw38Iax`,
      })),
      (K = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = E(
        o(function (e, t) {
          let n = r(null),
            o = t ?? n,
            s = u(),
            { activeLocale: l, setLocale: f } = T();
          w();
          let { style: m, className: h, layoutId: g, variant: v, uRRrPnIeh: b, ...S } = G(e),
            {
              baseVariant: C,
              classNames: E,
              clearLoadingGesture: D,
              gestureHandlers: O,
              gestureVariant: k,
              isLoading: j,
              setGestureState: M,
              setVariant: N,
              variants: F,
            } = x({
              cycleOrder: R,
              defaultVariant: `kGdw38Iax`,
              ref: o,
              variant: v,
              variantClassNames: B,
            }),
            L = K(e, F),
            U = _(z, A);
          return a(p, {
            id: g ?? s,
            children: a(W, {
              animate: F,
              initial: !1,
              children: a(H, {
                value: V,
                children: c(d.div, {
                  ...S,
                  ...O,
                  className: _(U, `framer-sewv2a`, h, E),
                  "data-framer-name": `Pricing point`,
                  layoutDependency: L,
                  layoutId: `kGdw38Iax`,
                  ref: o,
                  style: { ...m },
                  ...I(
                    {
                      ge2zZPUQA: { "data-framer-name": `Medium gray` },
                      GgzVsDmqK: { "data-framer-name": `Dark navy` },
                      MIJKZm6mU: { "data-framer-name": `White` },
                    },
                    C,
                    k
                  ),
                  children: [
                    a(d.div, {
                      className: `framer-ffvjmb`,
                      "data-framer-name": `Icon circle`,
                      layoutDependency: L,
                      layoutId: `L0s1WFhf6`,
                      style: {
                        backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                        borderBottomLeftRadius: 100,
                        borderBottomRightRadius: 100,
                        borderTopLeftRadius: 100,
                        borderTopRightRadius: 100,
                      },
                      variants: {
                        GgzVsDmqK: {
                          backgroundColor: `var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18))`,
                        },
                        MIJKZm6mU: {
                          backgroundColor: `var(--token-749bc66f-56ff-4a90-abf3-0d699632a8e1, rgba(255, 255, 255, 0.1))`,
                        },
                      },
                      children: a(P, {
                        animated: !0,
                        className: `framer-1h40ydk`,
                        "data-framer-name": `icon`,
                        layoutDependency: L,
                        layoutId: `W_oO8UEGT`,
                        style: {
                          "--esondr": `var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18))`,
                        },
                        variants: {
                          GgzVsDmqK: {
                            "--esondr": `var(--token-6119fd2e-12e6-4584-a904-059d2982e750, rgb(249, 250, 251))`,
                          },
                          MIJKZm6mU: {
                            "--esondr": `var(--token-6119fd2e-12e6-4584-a904-059d2982e750, rgb(249, 250, 251))`,
                          },
                        },
                      }),
                    }),
                    a(y, {
                      __fromCanvasComponent: !0,
                      children: a(i, {
                        children: a(d.p, {
                          className: `framer-styles-preset-1jbobve`,
                          "data-styles-preset": `Gh1KQz4jn`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18)))`,
                          },
                          children: `Full service creative`,
                        }),
                      }),
                      className: `framer-vf2f41`,
                      fonts: [`Inter`],
                      layoutDependency: L,
                      layoutId: `PfDzYLFq7`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: b,
                      variants: {
                        ge2zZPUQA: {
                          "--extracted-r6o4lv": `var(--token-777d4a96-6f89-4dc7-ab72-03827dee2e5b, rgb(107, 114, 128))`,
                        },
                        MIJKZm6mU: {
                          "--extracted-r6o4lv": `var(--token-6119fd2e-12e6-4584-a904-059d2982e750, rgb(249, 250, 251))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...I(
                        {
                          ge2zZPUQA: {
                            children: a(i, {
                              children: a(d.p, {
                                className: `framer-styles-preset-1jbobve`,
                                "data-styles-preset": `Gh1KQz4jn`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-777d4a96-6f89-4dc7-ab72-03827dee2e5b, rgb(107, 114, 128)))`,
                                },
                                children: `Full service creative`,
                              }),
                            }),
                          },
                          MIJKZm6mU: {
                            children: a(i, {
                              children: a(d.p, {
                                className: `framer-styles-preset-1jbobve`,
                                "data-styles-preset": `Gh1KQz4jn`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6119fd2e-12e6-4584-a904-059d2982e750, rgb(249, 250, 251)))`,
                                },
                                children: `Full service creative`,
                              }),
                            }),
                          },
                        },
                        C,
                        k
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
          `.framer-1wZXi.framer-pefdec, .framer-1wZXi .framer-pefdec { display: block; }`,
          `.framer-1wZXi.framer-sewv2a { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 224px; }`,
          `.framer-1wZXi .framer-ffvjmb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 20px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 20px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-1wZXi .framer-1h40ydk { flex: none; height: var(--framer-aspect-ratio-supported, 10px); position: relative; width: 10px; }`,
          `.framer-1wZXi .framer-vf2f41 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          ...O,
        ],
        `framer-1wZXi`
      )),
      (q.displayName = `Pricing Points`),
      (q.defaultProps = { height: 24, width: 224 }),
      S(q, {
        variant: {
          options: [`kGdw38Iax`, `ge2zZPUQA`, `GgzVsDmqK`, `MIJKZm6mU`],
          optionTitles: [`Pricing point`, `Medium gray`, `Dark navy`, `White`],
          title: `Variant`,
          type: C.Enum,
        },
        uRRrPnIeh: {
          defaultValue: `Full service creative`,
          displayTextArea: !1,
          title: `Text`,
          type: C.String,
        },
        onuRRrPnIehChange: { changes: `uRRrPnIeh`, type: C.ChangeHandler },
      }),
      v(
        q,
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
          ...L,
          ...b(D),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { J as n, q as t };
//# sourceMappingURL=eoI2DeKNZ.5rwiNYGS.mjs.map
