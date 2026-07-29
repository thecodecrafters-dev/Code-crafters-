import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  N as i,
  c as a,
  g as o,
  k as s,
  o as c,
  v as l,
} from "./react.D20wc1Tc.mjs";
import { C as u, a as d, r as f, t as p } from "./motion.B8Fudg3-.mjs";
import {
  J as m,
  M as h,
  O as g,
  T as _,
  V as v,
  bt as y,
  g as b,
  k as x,
  o as S,
  ot as C,
  pt as w,
  xt as T,
} from "./framer.Cfrj40WT.mjs";
import { g as E, h as D, m as O, p as k } from "./shared-lib.CiHz06lb.mjs";
function A(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V = e(() => {
    (c(),
      m(),
      p(),
      n(),
      E(),
      (j = { ShKUIb2Qf: { hover: !0 } }),
      (M = `framer-1pSEY`),
      (N = { ShKUIb2Qf: `framer-v-1efwv9o` }),
      (P = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (F = { damping: 60, delay: 0, mass: 1, stiffness: 300, type: `spring` }),
      (I = ({ value: e, children: n }) => {
        let r = s(d),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(d.Provider, { value: o, children: n });
      }),
      (L = u.create(i)),
      (R = ({ height: e, id: t, link: n, padding: r, text: i, width: a, ...o }) => ({
        ...o,
        C9TRGMpi1: i ?? o.C9TRGMpi1 ?? `Get started`,
        kadcqQxoL: r ?? o.kadcqQxoL ?? `20.5px 83.5px 20.5px 83.5px`,
        pYpS56G6v: n ?? o.pYpS56G6v,
      })),
      (z = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (B = T(
        o(function (e, t) {
          let n = r(null),
            o = t ?? n,
            s = l(),
            { activeLocale: c, setLocale: d } = w();
          C();
          let {
              style: p,
              className: m,
              layoutId: g,
              variant: v,
              C9TRGMpi1: x,
              pYpS56G6v: S,
              kadcqQxoL: T,
              ...E
            } = R(e),
            {
              baseVariant: D,
              classNames: O,
              clearLoadingGesture: B,
              gestureHandlers: V,
              gestureVariant: H,
              isLoading: U,
              setGestureState: W,
              setVariant: G,
              variants: K,
            } = y({
              defaultVariant: `ShKUIb2Qf`,
              enabledGestures: j,
              ref: o,
              variant: v,
              variantClassNames: N,
            }),
            q = z(e, K),
            J = h(M, k);
          return a(f, {
            id: g ?? s,
            children: a(L, {
              animate: K,
              initial: !1,
              children: a(I, {
                value: F,
                children: a(b, {
                  href: S,
                  motionChild: !0,
                  nodeId: `ShKUIb2Qf`,
                  openInNewTab: !1,
                  scopeId: `NBRlP0mJX`,
                  smoothScroll: !0,
                  children: a(u.a, {
                    ...E,
                    ...V,
                    className: `${h(J, `framer-1efwv9o`, m, O)} framer-gvo3e4`,
                    "data-framer-name": `Black button`,
                    layoutDependency: q,
                    layoutId: `ShKUIb2Qf`,
                    ref: o,
                    style: {
                      "--97po5m": P(T),
                      background: `linear-gradient(180deg, rgba(64, 69, 74, 0.8) 0%, rgb(38, 39, 41) 100%)`,
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                      boxShadow: `0px 2.77px 2.21px 0px var(--token-ab8dd3e6-1175-4b94-a998-2b40fe2f16ff, rgba(0, 0, 0, 0.12)), 0px 5.65px 5.32px 0px var(--token-21df02e0-c7ba-44bf-a3ba-af71c2eb4ced, rgba(0, 0, 0, 0.13)), 4px 12.52px 10.02px 0px var(--token-21df02e0-c7ba-44bf-a3ba-af71c2eb4ced, rgba(0, 0, 0, 0.13)), 10px 22.34px 17.87px 0px var(--token-af299f98-dd0a-48c1-a232-3333d53792e8, rgba(0, 0, 0, 0.14)), 20px 41.78px 33.42px 0px var(--token-26f70c96-97b4-43a1-a85c-15fa2db248aa, rgba(0, 0, 0, 0.15)), 60px 50px 80px 0px var(--token-26f70c96-97b4-43a1-a85c-15fa2db248aa, rgba(0, 0, 0, 0.15)), 3px 3px 10px 0px var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1)), inset 0px -4px 0px 1px var(--token-749bc66f-56ff-4a90-abf3-0d699632a8e1, rgba(255, 255, 255, 0.1)), inset 0px -3px 0px 0px var(--token-54f49a39-1fca-439f-bc5d-f3fc47dd7074, rgb(26, 26, 26)), inset 0px 1px 0px 0px var(--token-46dd9299-bbaf-4442-b126-5314566efc41, rgba(255, 255, 255, 0.6))`,
                      ...p,
                    },
                    variants: { "ShKUIb2Qf-hover": { boxShadow: `none` } },
                    ...A({ "ShKUIb2Qf-hover": { "data-framer-name": void 0 } }, D, H),
                    children: a(_, {
                      __fromCanvasComponent: !0,
                      children: a(i, {
                        children: a(u.p, {
                          className: `framer-styles-preset-1cex6rn`,
                          "data-styles-preset": `neF3AZ0oh`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255)))`,
                          },
                          children: `Get started`,
                        }),
                      }),
                      className: `framer-1kqyewy`,
                      fonts: [`Inter`],
                      layoutDependency: q,
                      layoutId: `otjFVXbMk`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: x,
                      verticalAlignment: `center`,
                      withExternalLayout: !0,
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-1pSEY.framer-gvo3e4, .framer-1pSEY .framer-gvo3e4 { display: block; }`,
          `.framer-1pSEY.framer-1efwv9o { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: var(--97po5m); position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-1pSEY .framer-1kqyewy { flex: none; height: 11px; position: relative; white-space: pre; width: auto; }`,
          ...O,
        ],
        `framer-1pSEY`
      )),
      (B.displayName = `Black button`),
      (B.defaultProps = { height: 52, width: 249.5 }),
      x(B, {
        C9TRGMpi1: {
          defaultValue: `Get started`,
          displayTextArea: !1,
          title: `Text`,
          type: S.String,
        },
        onC9TRGMpi1Change: { changes: `C9TRGMpi1`, type: S.ChangeHandler },
        pYpS56G6v: { title: `Link`, type: S.Link },
        kadcqQxoL: {
          defaultValue: `20.5px 83.5px 20.5px 83.5px`,
          title: `Padding`,
          type: S.Padding,
        },
      }),
      g(
        B,
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
          ...v(D),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { V as n, B as t };
//# sourceMappingURL=NBRlP0mJX.DJ1PTSpb.mjs.map
