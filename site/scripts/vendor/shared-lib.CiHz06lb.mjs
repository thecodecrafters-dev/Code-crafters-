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
  N as g,
  O as _,
  bt as v,
  k as y,
  o as b,
  ot as x,
  pt as S,
  xt as C,
} from "./framer.Cfrj40WT.mjs";
var w,
  T,
  E,
  ee = e(() => {
    (m(),
      g.loadFonts([
        `FS;Urbanist-medium`,
        `FS;Urbanist-bold`,
        `FS;Urbanist-bold italic`,
        `FS;Urbanist-medium italic`,
      ]),
      (w = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Urbanist`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Urbanist`,
              url: `../../assets/misc/AEP5JZTJJB3JMLBFSBTZLRSVGYD73SDZ.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Urbanist`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Urbanist`,
              url: `../../assets/misc/SS2LIWIFT3QZUKOLJ7TGBEFWHF3TFYQD.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Urbanist`,
              source: `fontshare`,
              style: `italic`,
              uiFamilyName: `Urbanist`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/GDORYCYP3U3MKIKHZNDJGHDYDPVQPHAS/ORR4EYQENJF7RBGXI4RRRWUEDXEIEFZQ/6Y6VR6UQPVF2GIANVIG5ITQRQM2CLQ3A.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Urbanist`,
              source: `fontshare`,
              style: `italic`,
              uiFamilyName: `Urbanist`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/5RE3A3EGPOMCLEAAP2ADSOXLMBA2GVVG/OKIGTRIMSUVQJWYHJN3PFRLK7FB7PF3Y/6SZQDHJFZ2YU5X7TY5T6ZXUSCQAEOIAE.woff2`,
              weight: `500`,
            },
          ],
        },
      ]),
      (T = [
        `.framer-iBHMl .framer-styles-preset-ssp3c:not(.rich-text-wrapper), .framer-iBHMl .framer-styles-preset-ssp3c.rich-text-wrapper p { --framer-font-family: "Urbanist", "Urbanist Placeholder", sans-serif; --framer-font-family-bold: "Urbanist", "Urbanist Placeholder", sans-serif; --framer-font-family-bold-italic: "Urbanist", "Urbanist Placeholder", sans-serif; --framer-font-family-italic: "Urbanist", "Urbanist Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 20px; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-93e42ebb-6259-4c79-b118-4bf15a3e2ddc, #d1d5db); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1399px) and (min-width: 810px) { .framer-iBHMl .framer-styles-preset-ssp3c:not(.rich-text-wrapper), .framer-iBHMl .framer-styles-preset-ssp3c.rich-text-wrapper p { --framer-font-family: "Urbanist", "Urbanist Placeholder", sans-serif; --framer-font-family-bold: "Urbanist", "Urbanist Placeholder", sans-serif; --framer-font-family-bold-italic: "Urbanist", "Urbanist Placeholder", sans-serif; --framer-font-family-italic: "Urbanist", "Urbanist Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 20px; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-93e42ebb-6259-4c79-b118-4bf15a3e2ddc, #d1d5db); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-iBHMl .framer-styles-preset-ssp3c:not(.rich-text-wrapper), .framer-iBHMl .framer-styles-preset-ssp3c.rich-text-wrapper p { --framer-font-family: "Urbanist", "Urbanist Placeholder", sans-serif; --framer-font-family-bold: "Urbanist", "Urbanist Placeholder", sans-serif; --framer-font-family-bold-italic: "Urbanist", "Urbanist Placeholder", sans-serif; --framer-font-family-italic: "Urbanist", "Urbanist Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 20px; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-93e42ebb-6259-4c79-b118-4bf15a3e2ddc, #d1d5db); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (E = `framer-iBHMl`));
  });
function te(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var D,
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  F,
  I,
  L = e(() => {
    (c(),
      m(),
      p(),
      n(),
      (D = [`MnvfFSWcm`, `cChVdFksS`, `DRWFsGgT7`, `iACDkr19o`, `IMtwrJy6n`]),
      (O = `framer-c18DK`),
      (k = {
        cChVdFksS: `framer-v-ohbcxv`,
        DRWFsGgT7: `framer-v-1k8yb1o`,
        iACDkr19o: `framer-v-np9w05`,
        IMtwrJy6n: `framer-v-9vamhp`,
        MnvfFSWcm: `framer-v-1yyan8j`,
      }),
      (A = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (j = ({ value: e, children: n }) => {
        let r = s(d),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(d.Provider, { value: o, children: n });
      }),
      (M = u.create(i)),
      (N = {
        "Dark navy 8px": `IMtwrJy6n`,
        "Dark navy": `MnvfFSWcm`,
        "Gray ": `DRWFsGgT7`,
        "Lime green 12px": `cChVdFksS`,
        "Lime green 8px": `iACDkr19o`,
      }),
      (P = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: N[r.variant] ?? r.variant ?? `MnvfFSWcm`,
      })),
      (F = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (I = C(
        o(function (e, t) {
          let n = r(null),
            i = t ?? n,
            o = l(),
            { activeLocale: s, setLocale: c } = S();
          x();
          let { style: d, className: p, layoutId: m, variant: g, ..._ } = P(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: C,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: E,
              setGestureState: ee,
              setVariant: N,
              variants: I,
            } = v({
              cycleOrder: D,
              defaultVariant: `MnvfFSWcm`,
              ref: i,
              variant: g,
              variantClassNames: k,
            }),
            L = F(e, I),
            R = h(O);
          return a(f, {
            id: m ?? o,
            children: a(M, {
              animate: I,
              initial: !1,
              children: a(j, {
                value: A,
                children: a(u.div, {
                  ..._,
                  ...w,
                  className: h(R, `framer-1yyan8j`, p, b),
                  "data-framer-name": `Dark navy`,
                  layoutDependency: L,
                  layoutId: `MnvfFSWcm`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18))`,
                    ...d,
                  },
                  variants: {
                    cChVdFksS: {
                      backgroundColor: `var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3))`,
                    },
                    DRWFsGgT7: {
                      backgroundColor: `var(--token-93e42ebb-6259-4c79-b118-4bf15a3e2ddc, rgb(209, 213, 219))`,
                    },
                    iACDkr19o: {
                      backgroundColor: `var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3))`,
                    },
                  },
                  ...te(
                    {
                      cChVdFksS: { "data-framer-name": `Lime green 12px` },
                      DRWFsGgT7: { "data-framer-name": `Gray ` },
                      iACDkr19o: { "data-framer-name": `Lime green 8px` },
                      IMtwrJy6n: { "data-framer-name": `Dark navy 8px` },
                    },
                    y,
                    T
                  ),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-c18DK.framer-1053f1a, .framer-c18DK .framer-1053f1a { display: block; }`,
          `.framer-c18DK.framer-1yyan8j { height: 6px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 6px; }`,
          `.framer-c18DK.framer-v-ohbcxv.framer-1yyan8j, .framer-c18DK.framer-v-1k8yb1o.framer-1yyan8j { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 12px); width: 12px; }`,
          `.framer-c18DK.framer-v-np9w05.framer-1yyan8j, .framer-c18DK.framer-v-9vamhp.framer-1yyan8j { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 9px); width: 8px; }`,
        ],
        `framer-c18DK`
      )),
      (I.displayName = `Rectangle`),
      (I.defaultProps = { height: 6, width: 6 }),
      y(I, {
        variant: {
          options: [`MnvfFSWcm`, `cChVdFksS`, `DRWFsGgT7`, `iACDkr19o`, `IMtwrJy6n`],
          optionTitles: [
            `Dark navy`,
            `Lime green 12px`,
            `Gray `,
            `Lime green 8px`,
            `Dark navy 8px`,
          ],
          title: `Variant`,
          type: b.Enum,
        },
      }),
      _(I, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  R,
  z,
  B,
  ne = e(() => {
    (m(),
      g.loadFonts([
        `FS;Urbanist-semibold`,
        `FS;Urbanist-black`,
        `FS;Urbanist-black italic`,
        `FS;Urbanist-semibold italic`,
      ]),
      (R = [
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
            {
              cssFamilyName: `Urbanist`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Urbanist`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/UCII5D3SSDQUKDNFBIKBIAPMR2IJ6L7T/XL3KCUFJ73GTWVQOSF66RCIM4V7NJIVX/44WTW5QSGOU5UEWRO4NHIW5D4FZHB7PL.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Urbanist`,
              source: `fontshare`,
              style: `italic`,
              uiFamilyName: `Urbanist`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/URJEJW6YFG7I3BVQS3KBTQF47HFGENUC/DQNPW7ZXRDGSWN5TI26SKURYG6YRZBKR/PKMLYTWGUJTDR35VNBVHWHHGCCA6CPK4.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Urbanist`,
              source: `fontshare`,
              style: `italic`,
              uiFamilyName: `Urbanist`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/WVMQPRJAMTBZTG3EYEW2BMDRQFQWVIKT/VVJ4EQ6W4ABQOK4JARCSOTWC64FWMKFX/WEZSSPVJ7W5EAH7ZJ47W5KFCVI7UWUIX.woff2`,
              weight: `600`,
            },
          ],
        },
      ]),
      (z = [
        `.framer-2dJrY .framer-styles-preset-1cex6rn:not(.rich-text-wrapper), .framer-2dJrY .framer-styles-preset-1cex6rn.rich-text-wrapper p { --framer-font-family: "Urbanist", "Urbanist Placeholder", sans-serif; --framer-font-family-bold: "Urbanist", sans-serif; --framer-font-family-bold-italic: "Urbanist", sans-serif; --framer-font-family-italic: "Urbanist", "Urbanist Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 600; --framer-letter-spacing: 0px; --framer-line-height: 24px; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, #030712); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1439px) and (min-width: 810px) { .framer-2dJrY .framer-styles-preset-1cex6rn:not(.rich-text-wrapper), .framer-2dJrY .framer-styles-preset-1cex6rn.rich-text-wrapper p { --framer-font-family: "Urbanist", "Urbanist Placeholder", sans-serif; --framer-font-family-bold: "Urbanist", sans-serif; --framer-font-family-bold-italic: "Urbanist", sans-serif; --framer-font-family-italic: "Urbanist", "Urbanist Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 600; --framer-letter-spacing: 0px; --framer-line-height: 24px; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, #030712); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-2dJrY .framer-styles-preset-1cex6rn:not(.rich-text-wrapper), .framer-2dJrY .framer-styles-preset-1cex6rn.rich-text-wrapper p { --framer-font-family: "Urbanist", "Urbanist Placeholder", sans-serif; --framer-font-family-bold: "Urbanist", sans-serif; --framer-font-family-bold-italic: "Urbanist", sans-serif; --framer-font-family-italic: "Urbanist", "Urbanist Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 600; --framer-letter-spacing: 0px; --framer-line-height: 24px; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, #030712); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (B = `framer-2dJrY`));
  });
function re(e, ...t) {
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
  ie = e(() => {
    (c(),
      m(),
      p(),
      n(),
      (V = [`hFLhZnXcH`, `tDRwbo2Hu`, `FfOd6J0WM`]),
      (H = `framer-mJuxO`),
      (U = {
        FfOd6J0WM: `framer-v-1b32h1x`,
        hFLhZnXcH: `framer-v-cue281`,
        tDRwbo2Hu: `framer-v-1j4p11y`,
      }),
      (W = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (G = ({ value: e, children: n }) => {
        let r = s(d),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(d.Provider, { value: o, children: n });
      }),
      (K = u.create(i)),
      (q = { Desktop: `hFLhZnXcH`, Phone: `FfOd6J0WM`, Tablet: `tDRwbo2Hu` }),
      (J = ({ border: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        byu2TjtOU: e ??
          i.byu2TjtOU ?? {
            borderBottomWidth: 1,
            borderColor: `var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1))`,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderStyle: `solid`,
            borderTopWidth: 1,
          },
        variant: q[i.variant] ?? i.variant ?? `hFLhZnXcH`,
      })),
      (Y = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = C(
        o(function (e, t) {
          let n = r(null),
            i = t ?? n,
            o = l(),
            { activeLocale: s, setLocale: c } = S();
          x();
          let { style: d, className: p, layoutId: m, variant: g, byu2TjtOU: _, ...y } = J(e),
            {
              baseVariant: b,
              classNames: C,
              clearLoadingGesture: w,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: ee,
              setGestureState: te,
              setVariant: D,
              variants: O,
            } = v({
              cycleOrder: V,
              defaultVariant: `hFLhZnXcH`,
              ref: i,
              variant: g,
              variantClassNames: U,
            }),
            k = Y(e, O),
            A = h(H);
          return a(f, {
            id: m ?? o,
            children: a(K, {
              animate: O,
              initial: !1,
              children: a(G, {
                value: W,
                children: a(u.div, {
                  ...y,
                  ...T,
                  className: h(A, `framer-cue281`, p, C),
                  "data-border": !0,
                  "data-framer-name": `Desktop`,
                  layoutDependency: k,
                  layoutId: `hFLhZnXcH`,
                  ref: i,
                  style: {
                    "--border-bottom-width": (_.borderBottomWidth ?? _.borderWidth) + `px`,
                    "--border-color": _.borderColor,
                    "--border-left-width": (_.borderLeftWidth ?? _.borderWidth) + `px`,
                    "--border-right-width": (_.borderRightWidth ?? _.borderWidth) + `px`,
                    "--border-style": _.borderStyle,
                    "--border-top-width": (_.borderTopWidth ?? _.borderWidth) + `px`,
                    backgroundColor: `var(--token-0fbfb1aa-14cf-4d4e-9401-7de4a733d912, rgb(243, 244, 246))`,
                    ...d,
                  },
                  ...re(
                    {
                      FfOd6J0WM: { "data-framer-name": `Phone` },
                      tDRwbo2Hu: { "data-framer-name": `Tablet` },
                    },
                    b,
                    E
                  ),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-mJuxO.framer-1xgk669, .framer-mJuxO .framer-1xgk669 { display: block; }`,
          `.framer-mJuxO.framer-cue281 { height: 16px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1440px; }`,
          `.framer-mJuxO.framer-v-1j4p11y.framer-cue281 { height: 14px; width: 810px; }`,
          `.framer-mJuxO.framer-v-1b32h1x.framer-cue281 { height: 12px; width: 390px; }`,
          `.framer-mJuxO[data-border="true"]::after, .framer-mJuxO [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-mJuxO`
      )),
      (X.displayName = `Spacer`),
      (X.defaultProps = { height: 16, width: 1440 }),
      y(X, {
        variant: {
          options: [`hFLhZnXcH`, `tDRwbo2Hu`, `FfOd6J0WM`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: b.Enum,
        },
        byu2TjtOU: {
          defaultValue: {
            borderBottomWidth: 1,
            borderColor: `var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1))`,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderStyle: `solid`,
            borderTopWidth: 1,
          },
          title: `Border`,
          type: b.Border,
        },
      }),
      _(X, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  Z,
  Q,
  ae,
  oe = e(() => {
    (m(),
      g.loadFonts([`FS;Space Grotesk-regular`, `FS;Space Grotesk-bold`]),
      (Z = [
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
              cssFamilyName: `Space Grotesk`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Space Grotesk`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/GFEQC7SZ2XMFHB2INR6RE24JKHO5JNTS/R2HDHPNP7PMXFG5AIIV7PF3KFELSLGKJ/COAKOVM7H37QQIPEFBZNVR5EL4GEPLQU.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (Q = [
        `.framer-GDxBm .framer-styles-preset-13lpt6d:not(.rich-text-wrapper), .framer-GDxBm .framer-styles-preset-13lpt6d.rich-text-wrapper p { --framer-font-family: "Space Grotesk", "Space Grotesk Placeholder", sans-serif; --framer-font-family-bold: "Space Grotesk", "Space Grotesk Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0px; --framer-line-height: 20px; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-777d4a96-6f89-4dc7-ab72-03827dee2e5b, #6b7280); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`,
        `@media (max-width: 1439px) and (min-width: 810px) { .framer-GDxBm .framer-styles-preset-13lpt6d:not(.rich-text-wrapper), .framer-GDxBm .framer-styles-preset-13lpt6d.rich-text-wrapper p { --framer-font-family: "Space Grotesk", "Space Grotesk Placeholder", sans-serif; --framer-font-family-bold: "Space Grotesk", "Space Grotesk Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0px; --framer-line-height: 20px; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-777d4a96-6f89-4dc7-ab72-03827dee2e5b, #6b7280); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-GDxBm .framer-styles-preset-13lpt6d:not(.rich-text-wrapper), .framer-GDxBm .framer-styles-preset-13lpt6d.rich-text-wrapper p { --framer-font-family: "Space Grotesk", "Space Grotesk Placeholder", sans-serif; --framer-font-family-bold: "Space Grotesk", "Space Grotesk Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0px; --framer-line-height: 20px; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-777d4a96-6f89-4dc7-ab72-03827dee2e5b, #6b7280); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`,
      ]),
      (ae = `framer-GDxBm`));
  }),
  se,
  ce,
  $,
  le = e(() => {
    (m(),
      g.loadFonts([
        `FS;Urbanist-medium`,
        `FS;Urbanist-bold`,
        `FS;Urbanist-bold italic`,
        `FS;Urbanist-medium italic`,
      ]),
      (se = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Urbanist`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Urbanist`,
              url: `../../assets/misc/AEP5JZTJJB3JMLBFSBTZLRSVGYD73SDZ.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Urbanist`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Urbanist`,
              url: `../../assets/misc/SS2LIWIFT3QZUKOLJ7TGBEFWHF3TFYQD.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Urbanist`,
              source: `fontshare`,
              style: `italic`,
              uiFamilyName: `Urbanist`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/GDORYCYP3U3MKIKHZNDJGHDYDPVQPHAS/ORR4EYQENJF7RBGXI4RRRWUEDXEIEFZQ/6Y6VR6UQPVF2GIANVIG5ITQRQM2CLQ3A.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Urbanist`,
              source: `fontshare`,
              style: `italic`,
              uiFamilyName: `Urbanist`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/5RE3A3EGPOMCLEAAP2ADSOXLMBA2GVVG/OKIGTRIMSUVQJWYHJN3PFRLK7FB7PF3Y/6SZQDHJFZ2YU5X7TY5T6ZXUSCQAEOIAE.woff2`,
              weight: `500`,
            },
          ],
        },
      ]),
      (ce = [
        `.framer-FCrLB .framer-styles-preset-1jbobve:not(.rich-text-wrapper), .framer-FCrLB .framer-styles-preset-1jbobve.rich-text-wrapper p { --framer-font-family: "Urbanist", "Urbanist Placeholder", sans-serif; --framer-font-family-bold: "Urbanist", "Urbanist Placeholder", sans-serif; --framer-font-family-bold-italic: "Urbanist", "Urbanist Placeholder", sans-serif; --framer-font-family-italic: "Urbanist", "Urbanist Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 24px; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-777d4a96-6f89-4dc7-ab72-03827dee2e5b, #6b7280); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-FCrLB .framer-styles-preset-1jbobve:not(.rich-text-wrapper), .framer-FCrLB .framer-styles-preset-1jbobve.rich-text-wrapper p { --framer-font-family: "Urbanist", "Urbanist Placeholder", sans-serif; --framer-font-family-bold: "Urbanist", "Urbanist Placeholder", sans-serif; --framer-font-family-bold-italic: "Urbanist", "Urbanist Placeholder", sans-serif; --framer-font-family-italic: "Urbanist", "Urbanist Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 24px; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-777d4a96-6f89-4dc7-ab72-03827dee2e5b, #6b7280); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-FCrLB .framer-styles-preset-1jbobve:not(.rich-text-wrapper), .framer-FCrLB .framer-styles-preset-1jbobve.rich-text-wrapper p { --framer-font-family: "Urbanist", "Urbanist Placeholder", sans-serif; --framer-font-family-bold: "Urbanist", "Urbanist Placeholder", sans-serif; --framer-font-family-bold-italic: "Urbanist", "Urbanist Placeholder", sans-serif; --framer-font-family-italic: "Urbanist", "Urbanist Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 24px; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-777d4a96-6f89-4dc7-ab72-03827dee2e5b, #6b7280); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      ($ = `framer-FCrLB`));
  });
function ue(e, t) {
  return {
    description: `A modern Framer template for AI agencies to showcase services, case studies, client results, and expertise with clean design, smooth interactions, and seamless customization.`,
    favicon: `https://framerusercontent.com/assets/1ThVrhMZjTKhHTNQKf2b5lDY.png`,
    robots: `max-image-preview:large`,
    socialImage: `https://framerusercontent.com/assets/Wqo1gDJ2spyalp3OsObh1QBciSw.png`,
    title: `CodeCrafters — You Imagine, We Build`,
  };
}
var de = e(() => {});
export {
  ee as S,
  I as _,
  se as a,
  T as b,
  Q as c,
  X as d,
  ie as f,
  ne as g,
  R as h,
  ce as i,
  Z as l,
  z as m,
  ue as n,
  le as o,
  B as p,
  $ as r,
  ae as s,
  de as t,
  oe as u,
  L as v,
  w as x,
  E as y,
};
//# sourceMappingURL=shared-lib.CiHz06lb.mjs.map
