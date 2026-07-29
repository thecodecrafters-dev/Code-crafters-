import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  N as i,
  P as a,
  c as o,
  g as s,
  k as c,
  l,
  o as u,
  v as d,
} from "./react.D20wc1Tc.mjs";
import { C as f, a as p, r as m, t as h } from "./motion.B8Fudg3-.mjs";
import {
  B as g,
  E as _,
  H as v,
  J as y,
  M as b,
  O as x,
  P as S,
  T as C,
  U as ee,
  V as w,
  bt as T,
  g as E,
  i as te,
  k as D,
  o as O,
  ot as k,
  p as A,
  pt as j,
  xt as M,
} from "./framer.Cfrj40WT.mjs";
import {
  S as N,
  a as P,
  b as F,
  c as ne,
  g as I,
  h as L,
  i as R,
  l as re,
  m as ie,
  o as ae,
  p as oe,
  r as z,
  s as se,
  u as ce,
  x as le,
  y as ue,
} from "./shared-lib.CiHz06lb.mjs";
import { i as B, n as V, r as H, t as de } from "./mxragOn3s.Ca8tjX5B.mjs";
import { n as fe, t as U } from "./noBET4yzv.DlZcxCxb.mjs";
import { a as pe, c as me, o as he, s as ge } from "./YHhyJkwMZ.BRrfO3wD.mjs";
import { i as _e, n as ve, r as ye, t as be } from "./nipijYWNB.C25dL3kT.mjs";
var W,
  xe,
  Se,
  G,
  Ce = e(() => {
    (u(),
      y(),
      n(),
      (W = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 18.23 L 1.77 20 L 11.77 10 L 1.77 0 L 0 1.77 L 8.23 10 Z" fill="var(--esondr, rgb(0,0,0))" height="20px" id="LvMvVfLN8" transform="translate(6.115 2)" width="11.770010000000003px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (xe = s((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? o(f.div, { ...a, layoutId: r, ref: t }) : o(`div`, { ...a, ref: t });
      })),
      (Se = ({ fill: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        K5AAorpEW: e ?? i.K5AAorpEW ?? `rgb(0, 0, 0)`,
      })),
      (G = M(
        s(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, K5AAorpEW: s, ...c } = Se(e);
          return o(xe, {
            ...c,
            className: b(`framer-2DgJp`, r),
            layoutId: i,
            ref: t,
            style: { "--esondr": s, ...n },
          });
        }),
        [
          `.framer-2DgJp { -webkit-mask: ${W}; aspect-ratio: 1; background-color: var(--esondr); mask: ${W}; width: 24px; }`,
        ],
        `framer-2DgJp`
      )),
      (G.displayName = `Arrow Forward Ios`),
      D(G, {
        K5AAorpEW: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Fill`, type: O.Color },
      }));
  });
function we(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Te,
  Ee,
  De,
  Oe,
  ke,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  K,
  Ie = e(() => {
    (u(),
      y(),
      h(),
      n(),
      Ce(),
      (Te = g(G)),
      (Ee = { UpCAk5S4z: { hover: !0 }, WEu0FSZ5f: { hover: !0 } }),
      (De = [`UpCAk5S4z`, `WEu0FSZ5f`]),
      (Oe = `framer-hqOgj`),
      (ke = { UpCAk5S4z: `framer-v-kxjoy1`, WEu0FSZ5f: `framer-v-bjq0yv` }),
      (Ae = { damping: 44, delay: 0, mass: 1, stiffness: 400, type: `spring` }),
      (je = ({ value: e, children: n }) => {
        let r = c(p),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(p.Provider, { value: a, children: n });
      }),
      (Me = { "Icon wrapper": `UpCAk5S4z`, Phone: `WEu0FSZ5f` }),
      (Ne = f.create(i)),
      (Pe = ({ height: e, id: t, link: n, width: r, ...i }) => ({
        ...i,
        variant: Me[i.variant] ?? i.variant ?? `UpCAk5S4z`,
        vggmJZ7iM: n ?? i.vggmJZ7iM,
      })),
      (Fe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = M(
        s(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = d(),
            { activeLocale: s, setLocale: c } = j();
          k();
          let { style: l, className: u, layoutId: p, variant: h, vggmJZ7iM: g, ..._ } = Pe(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: ee,
              setGestureState: w,
              setVariant: te,
              variants: D,
            } = T({
              cycleOrder: De,
              defaultVariant: `UpCAk5S4z`,
              enabledGestures: Ee,
              ref: i,
              variant: h,
              variantClassNames: ke,
            }),
            O = Fe(e, D),
            A = b(Oe);
          return o(m, {
            id: p ?? a,
            children: o(Ne, {
              animate: D,
              initial: !1,
              children: o(je, {
                value: Ae,
                children: o(E, {
                  href: g,
                  motionChild: !0,
                  nodeId: `UpCAk5S4z`,
                  openInNewTab: !1,
                  scopeId: `UmhN7x9Lo`,
                  smoothScroll: !0,
                  children: o(f.a, {
                    ..._,
                    ...S,
                    className: `${b(A, `framer-kxjoy1`, u, y)} framer-lkpg3b`,
                    "data-framer-name": `Icon wrapper`,
                    layoutDependency: O,
                    layoutId: `UpCAk5S4z`,
                    ref: i,
                    style: {
                      backgroundColor: `var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255))`,
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                      boxShadow: `0px 3px 3px 0px rgba(0, 0, 0, 0.04), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.6), inset 0px -5px 0px 0px rgb(228, 228, 228), inset 0px -6px 0px 1px rgb(250, 250, 250)`,
                      ...l,
                    },
                    variants: {
                      "UpCAk5S4z-hover": {
                        backgroundColor: `var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3))`,
                        boxShadow: `none`,
                      },
                      "WEu0FSZ5f-hover": {
                        backgroundColor: `var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3))`,
                        boxShadow: `none`,
                      },
                    },
                    ...we(
                      {
                        "UpCAk5S4z-hover": { "data-framer-name": void 0 },
                        "WEu0FSZ5f-hover": { "data-framer-name": void 0 },
                        WEu0FSZ5f: { "data-framer-name": `Phone` },
                      },
                      v,
                      C
                    ),
                    children: o(G, {
                      animated: !0,
                      className: `framer-anvo1r`,
                      "data-framer-name": `Icon`,
                      layoutDependency: O,
                      layoutId: `P_PK2Bx_U`,
                      style: {
                        "--esondr": `var(--token-339d6679-9119-4830-8fff-e9918e64dbd7, rgb(0, 0, 0))`,
                      },
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-hqOgj.framer-lkpg3b, .framer-hqOgj .framer-lkpg3b { display: block; }`,
          `.framer-hqOgj.framer-kxjoy1 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 44px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 16px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-hqOgj .framer-anvo1r { flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
          `.framer-hqOgj.framer-v-bjq0yv.framer-kxjoy1 { padding: 12px; }`,
          `.framer-hqOgj.framer-v-bjq0yv .framer-anvo1r { height: var(--framer-aspect-ratio-supported, 22px); width: 22px; }`,
        ],
        `framer-hqOgj`
      )),
      (K.displayName = `Icon wrapper`),
      (K.defaultProps = { height: 56, width: 56 }),
      D(K, {
        variant: {
          options: [`UpCAk5S4z`, `WEu0FSZ5f`],
          optionTitles: [`Icon wrapper`, `Phone`],
          title: `Variant`,
          type: O.Enum,
        },
        vggmJZ7iM: { title: `Link`, type: O.Link },
      }),
      x(K, [{ explicitInter: !0, fonts: [] }, ...Te], { supportsExplicitInterCodegen: !0 }));
  });
function q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Le,
  J,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  Y,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  X,
  Ze = e(() => {
    (u(),
      y(),
      h(),
      n(),
      N(),
      I(),
      fe(),
      Ie(),
      (Le = g(U)),
      (J = ee(U)),
      (Re = { BxHJwPpuB: { hover: !0 }, fEm0cFp_t: { hover: !0 } }),
      (ze = [`BxHJwPpuB`, `fEm0cFp_t`]),
      (Be = `framer-wq6Ta`),
      (Ve = { BxHJwPpuB: `framer-v-bd9ytp`, fEm0cFp_t: `framer-v-1htiiu3` }),
      (He = { delay: 0, duration: 1.1, ease: [0.22, 1, 0.36, 1], type: `tween` }),
      (Ue = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Y = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (We = ({ value: e, children: n }) => {
        let r = c(p),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(p.Provider, { value: a, children: n });
      }),
      (Ge = { "Service card": `BxHJwPpuB`, Phone: `fEm0cFp_t` }),
      (Ke = f.create(i)),
      (qe = {
        "Dark navy": `IrIAkxoR0`,
        "Light gray": `So8O4xsUm`,
        "Lime green": `AjrubrO8u`,
        "Section tag": `HiPT_1Fkc`,
        "White 20%": `UTclVAVCW`,
        Contact: `G2ncJhaBZ`,
        White: `X6yPU2SuQ`,
      }),
      (Je = (e, t) => {
        let [n, r] = a(e),
          [i, o] = a(e);
        return t ? [e, t] : (e !== i && (r(e), o(e)), [n, r]);
      }),
      (Ye = ({
        height: e,
        id: t,
        image: n,
        serialNo1: r,
        service1: i,
        service2: a,
        service3: o,
        service4: s,
        serviceText: c,
        serviceTitle: l,
        shortDescription: u,
        width: d,
        ...f
      }) => ({
        ...f,
        aGEcKnhFG: a ?? f.aGEcKnhFG ?? `Web Animation`,
        CzcypRbMo: i ?? f.CzcypRbMo ?? `Website Concept`,
        IXrmLZqxg:
          u ??
          f.IXrmLZqxg ??
          `We create digital experiences that are visually striking, intuitive, and conversion-focused.`,
        k0xEkzzMd: n ??
          f.k0xEkzzMd ?? {
            alt: ``,
            pixelHeight: 680,
            pixelWidth: 352,
            src: `https://framerusercontent.com/images/WVgJbNT81uRWu08yXNlPC2oTFnQ.png?width=352&height=680`,
            srcSet: `https://framerusercontent.com/images/WVgJbNT81uRWu08yXNlPC2oTFnQ.png?width=352&height=680 352w`,
          },
        ktwsqelTg: r ?? f.ktwsqelTg ?? `01`,
        UusAUEY_D: s ?? f.UusAUEY_D ?? `SEO-Friendly Design`,
        variant: Ge[f.variant] ?? f.variant ?? `BxHJwPpuB`,
        VcP5EHT8H: c ?? f.VcP5EHT8H ?? `WEBSITE DEVELOPMENT`,
        VjxOfObxW: o ?? f.VjxOfObxW ?? `CMS Integration`,
        ZHgRaq5yh: qe[l] ?? l ?? f.ZHgRaq5yh ?? `IrIAkxoR0`,
      })),
      (Xe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = M(
        s(function (e, t) {
          let n = r(null),
            a = t ?? n,
            s = d(),
            { activeLocale: c, setLocale: u } = j(),
            p = k(),
            {
              style: h,
              className: g,
              layoutId: y,
              variant: x,
              IXrmLZqxg: S,
              ktwsqelTg: ee,
              CzcypRbMo: w,
              aGEcKnhFG: E,
              VjxOfObxW: D,
              UusAUEY_D: O,
              ZHgRaq5yh: M,
              VcP5EHT8H: N,
              onVcP5EHT8HChange: P,
              k0xEkzzMd: F,
              ...ne
            } = Ye(e),
            [I, L] = Je(N, P),
            {
              baseVariant: R,
              classNames: re,
              clearLoadingGesture: ie,
              gestureHandlers: ae,
              gestureVariant: z,
              isLoading: se,
              setGestureState: ce,
              setVariant: le,
              variants: B,
            } = T({
              cycleOrder: ze,
              defaultVariant: `BxHJwPpuB`,
              enabledGestures: Re,
              ref: a,
              variant: x,
              variantClassNames: Ve,
            }),
            V = Xe(e, B),
            H = b(Be, ue, oe);
          return o(m, {
            id: y ?? s,
            children: o(Ke, {
              animate: B,
              initial: !1,
              children: o(We, {
                value: He,
                children: l(f.div, {
                  ...ne,
                  ...ae,
                  className: b(H, `framer-bd9ytp`, g, re),
                  "data-border": !0,
                  "data-framer-name": `Service card`,
                  layoutDependency: V,
                  layoutId: `BxHJwPpuB`,
                  ref: a,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    ...h,
                  },
                  ...q(
                    {
                      "BxHJwPpuB-hover": { "data-framer-name": void 0 },
                      "fEm0cFp_t-hover": { "data-framer-name": void 0 },
                      fEm0cFp_t: { "data-framer-name": `Phone` },
                    },
                    R,
                    z
                  ),
                  children: [
                    l(f.div, {
                      className: `framer-8v801`,
                      "data-framer-name": `Top wrapper`,
                      layoutDependency: V,
                      layoutId: `V7NWftwm4`,
                      children: [
                        o(te, {
                          height: 20,
                          y: (p?.y || 0) + 32 + 0 + 0 + 0,
                          children: o(_, {
                            className: `framer-e6sn8y-container`,
                            "data-framer-name": `Section tag`,
                            layoutDependency: V,
                            layoutId: `YXAiiEX3C-container`,
                            name: `Section tag`,
                            nodeId: `YXAiiEX3C`,
                            rendersWithMotion: !0,
                            scopeId: `KaKL4jW3b`,
                            children: o(U, {
                              height: `100%`,
                              id: `YXAiiEX3C`,
                              layoutId: `YXAiiEX3C`,
                              name: `Section tag`,
                              onRRhqTkqTMChange: L,
                              RRhqTkqTM: I,
                              variant: Ue(M),
                              width: `100%`,
                            }),
                          }),
                        }),
                        o(C, {
                          __fromCanvasComponent: !0,
                          children: o(i, {
                            children: o(f.p, {
                              className: `framer-styles-preset-ssp3c`,
                              "data-styles-preset": `bFgW78cfL`,
                              dir: `auto`,
                              style: { "--framer-text-alignment": `start` },
                              children: `We create digital experiences that are visually striking, intuitive, and conversion-focused.`,
                            }),
                          }),
                          className: `framer-1059q8f`,
                          fonts: [`Inter`],
                          layoutDependency: V,
                          layoutId: `RImt2UGeg`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                            opacity: 0,
                          },
                          text: S,
                          variants: {
                            "BxHJwPpuB-hover": { opacity: 1 },
                            "fEm0cFp_t-hover": { opacity: 1 },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    l(f.div, {
                      className: `framer-1nufe6g`,
                      "data-framer-name": `Bottom wrapper`,
                      layoutDependency: V,
                      layoutId: `JOvAEQ8YP`,
                      children: [
                        o(C, {
                          __fromCanvasComponent: !0,
                          children: o(i, {
                            children: o(f.p, {
                              style: {
                                "--font-selector": `SW50ZXItTWVkaXVt`,
                                "--framer-font-size": `200px`,
                                "--framer-font-weight": `500`,
                                "--framer-letter-spacing": `-0.06em`,
                                "--framer-line-height": `160px`,
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235)))`,
                              },
                              children: `01`,
                            }),
                          }),
                          className: `framer-r8grb3`,
                          fonts: [`Inter-Medium`],
                          layoutDependency: V,
                          layoutId: `pewMSXlgr`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: ee,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...q(
                            {
                              fEm0cFp_t: {
                                children: o(i, {
                                  children: o(f.p, {
                                    style: {
                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                      "--framer-font-size": `180px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `-0.06em`,
                                      "--framer-line-height": `160px`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235)))`,
                                    },
                                    children: `01`,
                                  }),
                                }),
                              },
                            },
                            R,
                            z
                          ),
                        }),
                        o(f.div, {
                          className: `framer-e9p2mb`,
                          "data-framer-name": `Wrapper`,
                          layoutDependency: V,
                          layoutId: `kldvqvQGi`,
                          children: l(f.div, {
                            className: `framer-1gic66p`,
                            "data-framer-name": `Text`,
                            layoutDependency: V,
                            layoutId: `MpipTh0Sq`,
                            children: [
                              o(f.div, {
                                className: `framer-1qi1fuh`,
                                "data-framer-name": `Underline`,
                                layoutDependency: V,
                                layoutId: `iwb_D6rCB`,
                                style: {
                                  backgroundColor: `var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3))`,
                                },
                              }),
                              l(f.div, {
                                className: `framer-xrie5k`,
                                "data-framer-name": `Text wrapper`,
                                layoutDependency: V,
                                layoutId: `NBsKpaS0i`,
                                children: [
                                  o(C, {
                                    __fromCanvasComponent: !0,
                                    children: o(i, {
                                      children: o(f.p, {
                                        className: `framer-styles-preset-1cex6rn`,
                                        "data-styles-preset": `neF3AZ0oh`,
                                        children: `Website Concept`,
                                      }),
                                    }),
                                    className: `framer-b34pe9`,
                                    fonts: [`Inter`],
                                    layoutDependency: V,
                                    layoutId: `YVXfn6KAM`,
                                    style: {
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    text: w,
                                    variants: {
                                      "BxHJwPpuB-hover": { "--extracted-r6o4lv": `#FFFFFF` },
                                      "fEm0cFp_t-hover": { "--extracted-r6o4lv": `#FFFFFF` },
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                    ...q(
                                      {
                                        "BxHJwPpuB-hover": {
                                          children: o(i, {
                                            children: o(f.p, {
                                              className: `framer-styles-preset-1cex6rn`,
                                              "data-styles-preset": `neF3AZ0oh`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `start`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, #FFFFFF)`,
                                              },
                                              children: `Website Concept`,
                                            }),
                                          }),
                                        },
                                        "fEm0cFp_t-hover": {
                                          children: o(i, {
                                            children: o(f.p, {
                                              className: `framer-styles-preset-1cex6rn`,
                                              "data-styles-preset": `neF3AZ0oh`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `start`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, #FFFFFF)`,
                                              },
                                              children: `Website Concept`,
                                            }),
                                          }),
                                        },
                                      },
                                      R,
                                      z
                                    ),
                                  }),
                                  o(C, {
                                    __fromCanvasComponent: !0,
                                    children: o(i, {
                                      children: o(f.p, {
                                        className: `framer-styles-preset-1cex6rn`,
                                        "data-styles-preset": `neF3AZ0oh`,
                                        children: `Web Animation`,
                                      }),
                                    }),
                                    className: `framer-1b6zv1`,
                                    fonts: [`Inter`],
                                    layoutDependency: V,
                                    layoutId: `Rb25ctkG_`,
                                    style: {
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    text: E,
                                    variants: {
                                      "BxHJwPpuB-hover": { "--extracted-r6o4lv": `#FFFFFF` },
                                      "fEm0cFp_t-hover": { "--extracted-r6o4lv": `#FFFFFF` },
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                    ...q(
                                      {
                                        "BxHJwPpuB-hover": {
                                          children: o(i, {
                                            children: o(f.p, {
                                              className: `framer-styles-preset-1cex6rn`,
                                              "data-styles-preset": `neF3AZ0oh`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `start`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, #FFFFFF)`,
                                              },
                                              children: `Web Animation`,
                                            }),
                                          }),
                                        },
                                        "fEm0cFp_t-hover": {
                                          children: o(i, {
                                            children: o(f.p, {
                                              className: `framer-styles-preset-1cex6rn`,
                                              "data-styles-preset": `neF3AZ0oh`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `start`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, #FFFFFF)`,
                                              },
                                              children: `Web Animation`,
                                            }),
                                          }),
                                        },
                                      },
                                      R,
                                      z
                                    ),
                                  }),
                                  o(C, {
                                    __fromCanvasComponent: !0,
                                    children: o(i, {
                                      children: o(f.p, {
                                        className: `framer-styles-preset-1cex6rn`,
                                        "data-styles-preset": `neF3AZ0oh`,
                                        children: `CMS Integration`,
                                      }),
                                    }),
                                    className: `framer-1ku7obr`,
                                    fonts: [`Inter`],
                                    layoutDependency: V,
                                    layoutId: `baCDQexPp`,
                                    style: {
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    text: D,
                                    variants: {
                                      "BxHJwPpuB-hover": { "--extracted-r6o4lv": `#FFFFFF` },
                                      "fEm0cFp_t-hover": { "--extracted-r6o4lv": `#FFFFFF` },
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                    ...q(
                                      {
                                        "BxHJwPpuB-hover": {
                                          children: o(i, {
                                            children: o(f.p, {
                                              className: `framer-styles-preset-1cex6rn`,
                                              "data-styles-preset": `neF3AZ0oh`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `start`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, #FFFFFF)`,
                                              },
                                              children: `CMS Integration`,
                                            }),
                                          }),
                                        },
                                        "fEm0cFp_t-hover": {
                                          children: o(i, {
                                            children: o(f.p, {
                                              className: `framer-styles-preset-1cex6rn`,
                                              "data-styles-preset": `neF3AZ0oh`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `start`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, #FFFFFF)`,
                                              },
                                              children: `CMS Integration`,
                                            }),
                                          }),
                                        },
                                      },
                                      R,
                                      z
                                    ),
                                  }),
                                  o(C, {
                                    __fromCanvasComponent: !0,
                                    children: o(i, {
                                      children: o(f.p, {
                                        className: `framer-styles-preset-1cex6rn`,
                                        "data-styles-preset": `neF3AZ0oh`,
                                        children: `SEO-Friendly Design`,
                                      }),
                                    }),
                                    className: `framer-y7xo9h`,
                                    fonts: [`Inter`],
                                    layoutDependency: V,
                                    layoutId: `VmzgOtS11`,
                                    style: {
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    text: O,
                                    variants: {
                                      "BxHJwPpuB-hover": { "--extracted-r6o4lv": `#FFFFFF` },
                                      "fEm0cFp_t-hover": { "--extracted-r6o4lv": `#FFFFFF` },
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                    ...q(
                                      {
                                        "BxHJwPpuB-hover": {
                                          children: o(i, {
                                            children: o(f.p, {
                                              className: `framer-styles-preset-1cex6rn`,
                                              "data-styles-preset": `neF3AZ0oh`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `start`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, #FFFFFF)`,
                                              },
                                              children: `SEO-Friendly Design`,
                                            }),
                                          }),
                                        },
                                        "fEm0cFp_t-hover": {
                                          children: o(i, {
                                            children: o(f.p, {
                                              className: `framer-styles-preset-1cex6rn`,
                                              "data-styles-preset": `neF3AZ0oh`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `start`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, #FFFFFF)`,
                                              },
                                              children: `SEO-Friendly Design`,
                                            }),
                                          }),
                                        },
                                      },
                                      R,
                                      z
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    o(A, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: v((p?.y || 0) + -10),
                        pixelHeight: 680,
                        pixelWidth: 352,
                        sizes: `calc(${p?.width || `100vw`} + 20px)`,
                        ...Y(F),
                      },
                      className: `framer-13914nx`,
                      "data-framer-name": `Image`,
                      layoutDependency: V,
                      layoutId: `Q2wOOI3ia`,
                      style: { opacity: 0, scale: 1.1 },
                      variants: {
                        "BxHJwPpuB-hover": { opacity: 1 },
                        "fEm0cFp_t-hover": { opacity: 1 },
                      },
                      ...q(
                        {
                          "BxHJwPpuB-hover": {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: v((p?.y || 0) + 0),
                              pixelHeight: 680,
                              pixelWidth: 352,
                              sizes: p?.width || `100vw`,
                              ...Y(F),
                            },
                          },
                        },
                        R,
                        z
                      ),
                    }),
                    o(f.div, {
                      className: `framer-12hqbq1`,
                      "data-framer-name": `White color`,
                      layoutDependency: V,
                      layoutId: `UIQRPwG8G`,
                      style: {
                        backgroundColor: `var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255))`,
                        opacity: 1,
                      },
                      variants: {
                        "BxHJwPpuB-hover": { opacity: 0 },
                        "fEm0cFp_t-hover": { opacity: 0 },
                      },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-wq6Ta.framer-jxhgjh, .framer-wq6Ta .framer-jxhgjh { display: block; }`,
          `.framer-wq6Ta.framer-bd9ytp { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 144px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 32px 32px 40px 32px; position: relative; width: 352px; }`,
          `.framer-wq6Ta .framer-8v801 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-wq6Ta .framer-e6sn8y-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-wq6Ta .framer-1059q8f, .framer-wq6Ta .framer-r8grb3, .framer-wq6Ta .framer-1b6zv1, .framer-wq6Ta .framer-1ku7obr, .framer-wq6Ta .framer-y7xo9h { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-wq6Ta .framer-1nufe6g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 118px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-wq6Ta .framer-e9p2mb { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-wq6Ta .framer-1gic66p { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-wq6Ta .framer-1qi1fuh { align-self: stretch; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 2px; }`,
          `.framer-wq6Ta .framer-xrie5k { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-wq6Ta .framer-b34pe9 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-wq6Ta .framer-13914nx { bottom: -10px; flex: none; left: -10px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -10px; top: -10px; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
          `.framer-wq6Ta .framer-12hqbq1 { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-wq6Ta.framer-v-1htiiu3 .framer-1nufe6g { gap: 100px; }`,
          `.framer-wq6Ta.framer-v-bd9ytp.hover .framer-13914nx { bottom: 0px; left: 0px; right: 0px; top: 0px; }`,
          ...F,
          ...ie,
          `.framer-wq6Ta[data-border="true"]::after, .framer-wq6Ta [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-wq6Ta`
      )),
      (X.displayName = `Service card`),
      (X.defaultProps = { height: 680, width: 352 }),
      D(X, {
        variant: {
          options: [`BxHJwPpuB`, `fEm0cFp_t`],
          optionTitles: [`Service card`, `Phone`],
          title: `Variant`,
          type: O.Enum,
        },
        IXrmLZqxg: {
          defaultValue: `We create digital experiences that are visually striking, intuitive, and conversion-focused.`,
          displayTextArea: !1,
          title: `Short Description`,
          type: O.String,
        },
        onIXrmLZqxgChange: { changes: `IXrmLZqxg`, type: O.ChangeHandler },
        ktwsqelTg: {
          defaultValue: `01`,
          displayTextArea: !1,
          title: `Serial No 1`,
          type: O.String,
        },
        onktwsqelTgChange: { changes: `ktwsqelTg`, type: O.ChangeHandler },
        CzcypRbMo: {
          defaultValue: `Website Concept`,
          displayTextArea: !1,
          title: `Service 1`,
          type: O.String,
        },
        onCzcypRbMoChange: { changes: `CzcypRbMo`, type: O.ChangeHandler },
        aGEcKnhFG: {
          defaultValue: `Web Animation`,
          displayTextArea: !1,
          title: `Service 2`,
          type: O.String,
        },
        onaGEcKnhFGChange: { changes: `aGEcKnhFG`, type: O.ChangeHandler },
        VjxOfObxW: {
          defaultValue: `CMS Integration`,
          displayTextArea: !1,
          title: `Service 3`,
          type: O.String,
        },
        onVjxOfObxWChange: { changes: `VjxOfObxW`, type: O.ChangeHandler },
        UusAUEY_D: {
          defaultValue: `SEO-Friendly Design`,
          displayTextArea: !1,
          title: `Service 4`,
          type: O.String,
        },
        onUusAUEY_DChange: { changes: `UusAUEY_D`, type: O.ChangeHandler },
        ZHgRaq5yh: J?.variant && {
          ...J.variant,
          defaultValue: `IrIAkxoR0`,
          description: void 0,
          hidden: void 0,
          optional: void 0,
          title: `Service title`,
        },
        onZHgRaq5yhChange: { changes: `ZHgRaq5yh`, type: O.ChangeHandler },
        VcP5EHT8H: {
          defaultValue: `WEBSITE DEVELOPMENT`,
          displayTextArea: !1,
          title: `Service text`,
          type: O.String,
        },
        onVcP5EHT8HChange: { changes: `VcP5EHT8H`, type: O.ChangeHandler },
        k0xEkzzMd: {
          __defaultAssetReference: `data:framer/asset-reference,WVgJbNT81uRWu08yXNlPC2oTFnQ.png?originalFilename=image+19013.png&width=352&height=680`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,WVgJbNT81uRWu08yXNlPC2oTFnQ.png?originalFilename=image+19013.png&width=352&height=680`,
          },
          title: `Image`,
          type: O.ResponsiveImage,
        },
      }),
      x(
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
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2`,
                weight: `500`,
              },
            ],
          },
          ...Le,
          ...w(le),
          ...w(L),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (X.loader = { load: (e, t) => (t.locale, Promise.allSettled([S(U, {}, t), S(K, {}, t)])) }));
  }),
  Qe,
  $e,
  Z,
  et,
  tt,
  nt,
  rt,
  Q,
  it = e(() => {
    (u(),
      y(),
      h(),
      n(),
      ae(),
      B(),
      _e(),
      (Qe = `framer-mh2wf`),
      ($e = { D35yu1kUc: `framer-v-iuu5t3` }),
      (Z = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (et = ({ value: e, children: n }) => {
        let r = c(p),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(p.Provider, { value: a, children: n });
      }),
      (tt = f.create(i)),
      (nt = ({ description: e, height: t, id: n, number: r, title: i, width: a, ...o }) => ({
        ...o,
        mEnN89w5K:
          e ??
          o.mEnN89w5K ??
          `We start by understanding your goals, audience, and challenges. Through research and workshops, we uncover insights of the project.`,
        pB11N2TiQ: r ?? o.pB11N2TiQ ?? `//01`,
        qmQbSFRRn: i ?? o.qmQbSFRRn ?? `Discover & Define`,
      })),
      (rt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Q = M(
        s(function (e, t) {
          let n = r(null),
            a = t ?? n,
            s = d(),
            { activeLocale: c, setLocale: u } = j();
          k();
          let {
              style: p,
              className: h,
              layoutId: g,
              variant: _,
              pB11N2TiQ: v,
              qmQbSFRRn: y,
              mEnN89w5K: x,
              ...S
            } = nt(e),
            {
              baseVariant: ee,
              classNames: w,
              clearLoadingGesture: E,
              gestureHandlers: te,
              gestureVariant: D,
              isLoading: O,
              setGestureState: A,
              setVariant: M,
              variants: N,
            } = T({ defaultVariant: `D35yu1kUc`, ref: a, variant: _, variantClassNames: $e }),
            P = rt(e, N),
            F = b(Qe, be, de, z);
          return o(m, {
            id: g ?? s,
            children: o(tt, {
              animate: N,
              initial: !1,
              children: o(et, {
                value: Z,
                children: l(f.div, {
                  ...S,
                  ...te,
                  className: b(F, `framer-iuu5t3`, h, w),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: P,
                  layoutId: `D35yu1kUc`,
                  ref: a,
                  style: { ...p },
                  children: [
                    o(C, {
                      __fromCanvasComponent: !0,
                      children: o(i, {
                        children: o(f.p, {
                          className: `framer-styles-preset-gih9ie`,
                          "data-styles-preset": `nipijYWNB`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-777d4a96-6f89-4dc7-ab72-03827dee2e5b, rgb(107, 114, 128)))`,
                          },
                          children: `//01`,
                        }),
                      }),
                      className: `framer-ujv9p3`,
                      fonts: [`Inter`],
                      layoutDependency: P,
                      layoutId: `n78ZODcJT`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-777d4a96-6f89-4dc7-ab72-03827dee2e5b, rgb(107, 114, 128))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: v,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    l(f.div, {
                      className: `framer-q82mg2`,
                      "data-framer-name": `Text `,
                      layoutDependency: P,
                      layoutId: `xR7pTaTQx`,
                      children: [
                        o(C, {
                          __fromCanvasComponent: !0,
                          children: o(i, {
                            children: o(f.h6, {
                              className: `framer-styles-preset-b6eh5x`,
                              "data-styles-preset": `mxragOn3s`,
                              style: { "--framer-text-alignment": `left` },
                              children: `Discover & Define`,
                            }),
                          }),
                          className: `framer-qlfy85`,
                          fonts: [`Inter`],
                          layoutDependency: P,
                          layoutId: `VURORUXO_`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: y,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        o(C, {
                          __fromCanvasComponent: !0,
                          children: o(i, {
                            children: o(f.p, {
                              className: `framer-styles-preset-1jbobve`,
                              "data-styles-preset": `Gh1KQz4jn`,
                              children: `We start by understanding your goals, audience, and challenges. Through research and workshops, we uncover insights of the project.`,
                            }),
                          }),
                          className: `framer-1e0ise3`,
                          fonts: [`Inter`],
                          layoutDependency: P,
                          layoutId: `XtXDgNzQQ`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: x,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-mh2wf.framer-1qu87dx, .framer-mh2wf .framer-1qu87dx { display: block; }`,
          `.framer-mh2wf.framer-iuu5t3 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 604px; }`,
          `.framer-mh2wf .framer-ujv9p3 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-mh2wf .framer-q82mg2 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-mh2wf .framer-qlfy85, .framer-mh2wf .framer-1e0ise3 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          ...ve,
          ...V,
          ...R,
        ],
        `framer-mh2wf`
      )),
      (Q.displayName = `Process Section Text Wrapper`),
      (Q.defaultProps = { height: 90, width: 604 }),
      D(Q, {
        pB11N2TiQ: { defaultValue: `//01`, displayTextArea: !1, title: `Number`, type: O.String },
        onpB11N2TiQChange: { changes: `pB11N2TiQ`, type: O.ChangeHandler },
        qmQbSFRRn: {
          defaultValue: `Discover & Define`,
          displayTextArea: !1,
          title: `Title`,
          type: O.String,
        },
        onqmQbSFRRnChange: { changes: `qmQbSFRRn`, type: O.ChangeHandler },
        mEnN89w5K: {
          defaultValue: `We start by understanding your goals, audience, and challenges. Through research and workshops, we uncover insights of the project.`,
          displayTextArea: !1,
          title: `Description`,
          type: O.String,
        },
        onmEnN89w5KChange: { changes: `mEnN89w5K`, type: O.ChangeHandler },
      }),
      x(
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
          ...w(ye),
          ...w(H),
          ...w(P),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function at(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  $,
  gt = e(() => {
    (u(),
      y(),
      h(),
      n(),
      me(),
      ce(),
      (ot = [`en_wtLTGh`, `EZSOclPaX`, `dUHCg2RfB`, `pWYKd9DWS`, `yrCT3wx41`]),
      (st = `framer-eWauO`),
      (ct = {
        dUHCg2RfB: `framer-v-1avwvks`,
        en_wtLTGh: `framer-v-15qx33t`,
        EZSOclPaX: `framer-v-1dvvqot`,
        pWYKd9DWS: `framer-v-1r3vx5i`,
        yrCT3wx41: `framer-v-1i2j23p`,
      }),
      (lt = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (ut = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (dt = ({ value: e, children: n }) => {
        let r = c(p),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(p.Provider, { value: a, children: n });
      }),
      (ft = f.create(i)),
      (pt = { "Temp button": `yrCT3wx41` }),
      (mt = ({ height: e, id: t, padding: n, text: r, width: i, ...a }) => ({
        ...a,
        kyUAnXj1U: n ?? a.kyUAnXj1U ?? `16px 58px 16px 59px`,
        variant: pt[a.variant] ?? a.variant ?? `en_wtLTGh`,
        YTeJVCq8y: r ?? a.YTeJVCq8y ?? `Goals`,
      })),
      (ht = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = M(
        s(function (e, t) {
          let n = r(null),
            a = t ?? n,
            s = d(),
            { activeLocale: c, setLocale: l } = j();
          k();
          let {
              style: u,
              className: p,
              layoutId: h,
              variant: g,
              YTeJVCq8y: _,
              kyUAnXj1U: v,
              ...y
            } = mt(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: ee,
              gestureHandlers: w,
              gestureVariant: E,
              isLoading: te,
              setGestureState: D,
              setVariant: O,
              variants: A,
            } = T({
              cycleOrder: ot,
              defaultVariant: `en_wtLTGh`,
              ref: a,
              variant: g,
              variantClassNames: ct,
            }),
            M = ht(e, A),
            N = b(st, pe, se),
            P = () => x !== `EZSOclPaX`;
          return o(m, {
            id: h ?? s,
            children: o(ft, {
              animate: A,
              initial: !1,
              children: o(dt, {
                value: ut,
                children: o(f.div, {
                  ...y,
                  ...w,
                  className: b(N, `framer-15qx33t`, p, S),
                  "data-framer-name": `Temp button`,
                  layoutDependency: M,
                  layoutId: `en_wtLTGh`,
                  ref: a,
                  style: {
                    "--ts8z5n": lt(v),
                    backgroundColor: `var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18))`,
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                    ...u,
                  },
                  variants: {
                    EZSOclPaX: {
                      backgroundColor: `var(--token-6a136aea-db2c-4f64-b96e-534e0d7e9163, rgb(243, 244, 246))`,
                    },
                    pWYKd9DWS: {
                      backgroundColor: `var(--token-93e42ebb-6259-4c79-b118-4bf15a3e2ddc, rgb(209, 213, 219))`,
                    },
                  },
                  children:
                    P() &&
                    o(C, {
                      __fromCanvasComponent: !0,
                      children: o(i, {
                        children: o(f.p, {
                          className: `framer-styles-preset-1u0avwx`,
                          "data-styles-preset": `llwEzCpG3`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6119fd2e-12e6-4584-a904-059d2982e750, rgb(249, 250, 251)))`,
                          },
                          children: `Goals`,
                        }),
                      }),
                      className: `framer-t49w0c`,
                      fonts: [`Inter`],
                      layoutDependency: M,
                      layoutId: `knLWqVRGt`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-6119fd2e-12e6-4584-a904-059d2982e750, rgb(249, 250, 251))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: _,
                      variants: {
                        dUHCg2RfB: {
                          "--extracted-r6o4lv": `var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3))`,
                        },
                        pWYKd9DWS: {
                          "--extracted-r6o4lv": `var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18))`,
                        },
                        yrCT3wx41: {
                          "--extracted-r6o4lv": `var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...at(
                        {
                          dUHCg2RfB: {
                            children: o(i, {
                              children: o(f.p, {
                                className: `framer-styles-preset-1u0avwx`,
                                "data-styles-preset": `llwEzCpG3`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3)))`,
                                },
                                children: `Goals`,
                              }),
                            }),
                          },
                          pWYKd9DWS: {
                            children: o(i, {
                              children: o(f.p, {
                                className: `framer-styles-preset-13lpt6d`,
                                "data-styles-preset": `RXmiUshAy`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18)))`,
                                },
                                children: `Goals`,
                              }),
                            }),
                          },
                          yrCT3wx41: {
                            children: o(i, {
                              children: o(f.p, {
                                className: `framer-styles-preset-13lpt6d`,
                                "data-styles-preset": `RXmiUshAy`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, rgb(152, 255, 3)))`,
                                },
                                children: `Goals`,
                              }),
                            }),
                          },
                        },
                        x,
                        E
                      ),
                    }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-eWauO.framer-1m5y0m4, .framer-eWauO .framer-1m5y0m4 { display: block; }`,
          `.framer-eWauO.framer-15qx33t { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 44px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: var(--ts8z5n); position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-eWauO .framer-t49w0c { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-eWauO.framer-v-1dvvqot.framer-15qx33t { min-height: 61px; min-width: 158px; }`,
          ...he,
          ...ne,
        ],
        `framer-eWauO`
      )),
      ($.displayName = `Temp button`),
      ($.defaultProps = { height: 59, width: 163 }),
      D($, {
        variant: {
          options: [`en_wtLTGh`, `EZSOclPaX`, `dUHCg2RfB`, `pWYKd9DWS`, `yrCT3wx41`],
          optionTitles: [`Temp button`, `Temp button`, `Temp button`, `Temp button`, `Temp button`],
          title: `Variant`,
          type: O.Enum,
        },
        YTeJVCq8y: { defaultValue: `Goals`, displayTextArea: !1, title: `Text`, type: O.String },
        kyUAnXj1U: { defaultValue: `16px 58px 16px 59px`, title: `Padding`, type: O.Padding },
      }),
      x(
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
          ...w(ge),
          ...w(re),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { X as a, it as i, gt as n, Ze as o, Q as r, $ as t };
//# sourceMappingURL=xGXvKVCOU.B5OsGFp4.mjs.map
