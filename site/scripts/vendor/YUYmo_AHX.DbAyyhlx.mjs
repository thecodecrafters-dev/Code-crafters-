import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  I as i,
  M as a,
  N as o,
  P as s,
  R as c,
  _ as l,
  c as u,
  g as d,
  k as f,
  l as p,
  o as m,
  v as h,
} from "./react.D20wc1Tc.mjs";
import { C as g, a as _, r as v, t as y } from "./motion.B8Fudg3-.mjs";
import {
  B as b,
  E as x,
  J as S,
  M as C,
  O as w,
  P as T,
  T as E,
  V as D,
  bt as O,
  ft as k,
  i as A,
  k as j,
  o as M,
  ot as N,
  pt as P,
  xt as F,
} from "./framer.Cfrj40WT.mjs";
import { _ as I, a as L, i as R, o as ee, r as te, v as z } from "./shared-lib.CiHz06lb.mjs";
import { i as B, n as V, r as H, t as U } from "./mxragOn3s.Ca8tjX5B.mjs";
import { i as ne, r as W } from "./YHhyJkwMZ.BRrfO3wD.mjs";
function G(e) {
  let {
      start: t,
      end: n,
      duration: i,
      decimals: o,
      suffix: u,
      color: d,
      font: f,
      replay: m,
      style: h,
    } = e,
    [g, _] = s(t.toFixed(o)),
    v = r(!1),
    y = r(),
    b = k(),
    [x, S] = s(!1),
    C = r(null);
  (a(() => {
    if (c === void 0 || !C.current) return;
    if (b) {
      S(!0);
      return;
    }
    let e = !1,
      t = new c.IntersectionObserver(
        (t) => {
          t[0].isIntersecting && !e && l(() => S(!0));
        },
        { threshold: 0.3 }
      );
    return (
      t.observe(C.current),
      () => {
        ((e = !0), t.disconnect());
      }
    );
  }, [b]),
    a(() => {
      if (!x) return;
      v.current = !0;
      let e = null;
      function r(a) {
        e ??= a;
        let s = Math.min((a - e) / i, 1),
          c = t + (n - t) * s;
        (l(() => _(c.toFixed(o))),
          s < 1
            ? (y.current = requestAnimationFrame(r))
            : m && v.current && ((e = null), (y.current = requestAnimationFrame(r))));
      }
      return (
        (y.current = requestAnimationFrame(r)),
        () => {
          ((v.current = !1), y.current && cancelAnimationFrame(y.current));
        }
      );
    }, [t, n, i, o, m, x]));
  let w = {
    ...(f || {}),
    fontFamily: f?.fontFamily || `Arial, sans-serif`,
    fontSize: f?.fontSize || 64,
    fontWeight: f?.variant === `Bold` ? 700 : f?.variant === `Semibold` ? 600 : 700,
    lineHeight: f?.lineHeight || `1em`,
    letterSpacing: f?.letterSpacing || `-0.01em`,
    textAlign: f?.textAlign || `left`,
  };
  return p(`div`, {
    ref: C,
    style: {
      ...h,
      ...w,
      color: d,
      display: `inline-block`,
      minWidth: `max-content`,
      position: `relative`,
      opacity: +!!x,
      transform: x ? `none` : `translateY(30px)`,
      transition: `opacity 0.7s cubic-bezier(.55,.13,.38,1.12), transform 0.7s cubic-bezier(.55,.13,.38,1.12)`,
    },
    children: [g, u],
  });
}
var re = e(() => {
  (i(),
    m(),
    n(),
    S(),
    j(G, {
      start: { type: M.Number, title: `Start`, defaultValue: 0 },
      end: { type: M.Number, title: `End`, defaultValue: 300 },
      duration: {
        type: M.Number,
        title: `Duration`,
        defaultValue: 2e3,
        min: 100,
        max: 1e4,
        unit: `ms`,
        step: 50,
      },
      decimals: {
        type: M.Number,
        title: `Decimals`,
        defaultValue: 0,
        min: 0,
        max: 4,
        step: 1,
        displayStepper: !0,
      },
      suffix: { type: M.String, title: `Suffix`, defaultValue: ``, placeholder: `%` },
      color: { type: M.Color, title: `Color`, defaultValue: `#000` },
      font: {
        type: M.Font,
        title: `Font`,
        controls: `extended`,
        defaultFontType: `sans-serif`,
        defaultValue: {
          variant: `Bold`,
          fontSize: 64,
          letterSpacing: `-0.01em`,
          lineHeight: `1em`,
          textAlign: `left`,
        },
      },
      replay: {
        type: M.Boolean,
        title: `Replay`,
        defaultValue: !1,
        enabledTitle: `Loop`,
        disabledTitle: `Once`,
      },
    }));
});
function K(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ie,
  q,
  J,
  Y,
  ae,
  oe,
  se,
  ce,
  le,
  ue,
  de,
  fe,
  pe,
  X,
  me = e(() => {
    (m(),
      S(),
      y(),
      n(),
      re(),
      ee(),
      ne(),
      (ie = b(W)),
      (q = b(G)),
      (J = [`EHTMj7OAf`, `VSkD03X2g`]),
      (Y = `framer-9fN4u`),
      (ae = { EHTMj7OAf: `framer-v-1h2119z`, VSkD03X2g: `framer-v-1v62wyr` }),
      (oe = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (se = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (ce = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (le = ({ value: e, children: n }) => {
        let r = f(_),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return u(_.Provider, { value: a, children: n });
      }),
      (ue = { "About Tag": `EHTMj7OAf`, Phone: `VSkD03X2g` }),
      (de = g.create(o)),
      (fe = ({
        decimals: e,
        duration: t,
        end: n,
        height: r,
        id: i,
        image: a,
        shortDescription: o,
        start: s,
        suffix: c,
        width: l,
        ...u
      }) => ({
        ...u,
        GDWePtpeZ: c ?? u.GDWePtpeZ,
        hroT5Js0q: n ?? u.hroT5Js0q ?? 100,
        ImDkGO_AZ: t ?? u.ImDkGO_AZ ?? 3e3,
        kYOCf276h: a ??
          u.kYOCf276h ?? {
            alt: ``,
            pixelHeight: 28,
            pixelWidth: 38,
            src: `../../assets/images/uXmE9865lH20bxuRc50FSoAE.png`,
          },
        variant: ue[u.variant] ?? u.variant ?? `EHTMj7OAf`,
        wmwTumyep: s ?? u.wmwTumyep,
        WWSVmG5y3: o ?? u.WWSVmG5y3 ?? `Focused on Client Success`,
        xrkrHOsaA: e ?? u.xrkrHOsaA,
      })),
      (pe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = F(
        d(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = h(),
            { activeLocale: s, setLocale: c } = P(),
            l = N(),
            {
              style: d,
              className: f,
              layoutId: m,
              variant: _,
              kYOCf276h: y,
              WWSVmG5y3: b,
              wmwTumyep: S,
              hroT5Js0q: w,
              xrkrHOsaA: T,
              GDWePtpeZ: D,
              ImDkGO_AZ: k,
              ...j
            } = fe(e),
            {
              baseVariant: M,
              classNames: F,
              clearLoadingGesture: I,
              gestureHandlers: L,
              gestureVariant: R,
              isLoading: ee,
              setGestureState: z,
              setVariant: B,
              variants: V,
            } = O({
              cycleOrder: J,
              defaultVariant: `EHTMj7OAf`,
              ref: i,
              variant: _,
              variantClassNames: ae,
            }),
            H = pe(e, V),
            U = C(Y, te);
          return u(v, {
            id: m ?? a,
            children: u(de, {
              animate: V,
              initial: !1,
              children: u(le, {
                value: oe,
                children: p(g.div, {
                  ...j,
                  ...L,
                  className: C(U, `framer-1h2119z`, f, F),
                  "data-framer-name": `About Tag`,
                  layoutDependency: H,
                  layoutId: `EHTMj7OAf`,
                  ref: i,
                  style: { ...d },
                  ...K({ VSkD03X2g: { "data-framer-name": `Phone` } }, M, R),
                  children: [
                    u(A, {
                      height: 72,
                      y: (l?.y || 0) + (0 + ((l?.height || 78) - 0 - 72) / 2),
                      ...K(
                        { VSkD03X2g: { y: (l?.y || 0) + (0 + ((l?.height || 58) - 0 - 72) / 2) } },
                        M,
                        R
                      ),
                      children: u(x, {
                        className: `framer-14g4jao-container`,
                        layoutDependency: H,
                        layoutId: `leMoLKiAa-container`,
                        nodeId: `leMoLKiAa`,
                        rendersWithMotion: !0,
                        scopeId: `ErXnoeJUO`,
                        children: u(W, {
                          height: `100%`,
                          id: `leMoLKiAa`,
                          layoutId: `leMoLKiAa`,
                          sg0hGvzIl: se(y),
                          tsXymKpnQ: `22px`,
                          variant: ce(`RtXqbWz_T`),
                          width: `100%`,
                          ...K({ VSkD03X2g: { tsXymKpnQ: `12px` } }, M, R),
                        }),
                      }),
                    }),
                    p(g.div, {
                      className: `framer-2clwxm`,
                      "data-framer-name": `Text`,
                      layoutDependency: H,
                      layoutId: `AEDsKB6ux`,
                      children: [
                        u(A, {
                          children: u(x, {
                            className: `framer-fd4936-container`,
                            "data-code-component-plugin-id": `84d4c1`,
                            isAuthoredByUser: !0,
                            layoutDependency: H,
                            layoutId: `bPhC4kOfo-container`,
                            nodeId: `bPhC4kOfo`,
                            rendersWithMotion: !0,
                            scopeId: `ErXnoeJUO`,
                            children: u(G, {
                              color: `var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18))`,
                              decimals: T,
                              duration: k,
                              end: w,
                              font: {
                                fontFamily: `"Urbanist", "Urbanist Placeholder", sans-serif`,
                                fontSize: `40px`,
                                fontStyle: `normal`,
                                fontWeight: 600,
                                letterSpacing: `-0.02em`,
                                lineHeight: `52px`,
                                textAlign: `left`,
                              },
                              height: `100%`,
                              id: `bPhC4kOfo`,
                              layoutId: `bPhC4kOfo`,
                              replay: !1,
                              start: S,
                              suffix: D,
                              width: `100%`,
                              ...K(
                                {
                                  VSkD03X2g: {
                                    font: {
                                      fontFamily: `"Urbanist", "Urbanist Placeholder", sans-serif`,
                                      fontSize: `34px`,
                                      fontStyle: `normal`,
                                      fontWeight: 600,
                                      letterSpacing: `-0.02em`,
                                      lineHeight: `34px`,
                                      textAlign: `left`,
                                    },
                                  },
                                },
                                M,
                                R
                              ),
                            }),
                          }),
                        }),
                        u(E, {
                          __fromCanvasComponent: !0,
                          children: u(o, {
                            children: u(g.p, {
                              className: `framer-styles-preset-1jbobve`,
                              "data-styles-preset": `Gh1KQz4jn`,
                              children: `Average ROI from design improvements`,
                            }),
                          }),
                          className: `framer-11jnpsl`,
                          fonts: [`Inter`],
                          layoutDependency: H,
                          layoutId: `Av3GOZreC`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: b,
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
          `.framer-9fN4u.framer-171cbun, .framer-9fN4u .framer-171cbun { display: block; }`,
          `.framer-9fN4u.framer-1h2119z { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 0px 56px; position: relative; width: 575px; }`,
          `.framer-9fN4u .framer-14g4jao-container, .framer-9fN4u .framer-fd4936-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-9fN4u .framer-2clwxm { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-9fN4u .framer-11jnpsl { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-9fN4u.framer-v-1v62wyr.framer-1h2119z { padding: 0px 12px 0px 12px; }`,
          `.framer-9fN4u.framer-v-1v62wyr .framer-2clwxm { gap: 0px; }`,
          ...R,
        ],
        `framer-9fN4u`
      )),
      (X.displayName = `About tag`),
      (X.defaultProps = { height: 78, width: 575 }),
      j(X, {
        variant: {
          options: [`EHTMj7OAf`, `VSkD03X2g`],
          optionTitles: [`About Tag`, `Phone`],
          title: `Variant`,
          type: M.Enum,
        },
        kYOCf276h: {
          __defaultAssetReference: `data:framer/asset-reference,uXmE9865lH20bxuRc50FSoAE.png?originalFilename=Icon.png&width=38&height=28`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,uXmE9865lH20bxuRc50FSoAE.png?originalFilename=Icon.png&width=38&height=28`,
          },
          title: `Image`,
          type: M.ResponsiveImage,
        },
        WWSVmG5y3: {
          defaultValue: `Focused on Client Success`,
          displayTextArea: !1,
          title: `Short Description`,
          type: M.String,
        },
        onWWSVmG5y3Change: { changes: `WWSVmG5y3`, type: M.ChangeHandler },
        wmwTumyep: { defaultValue: 0, title: `Start`, type: M.Number },
        onwmwTumyepChange: { changes: `wmwTumyep`, type: M.ChangeHandler },
        hroT5Js0q: { defaultValue: 100, title: `End`, type: M.Number },
        onhroT5Js0qChange: { changes: `hroT5Js0q`, type: M.ChangeHandler },
        xrkrHOsaA: {
          defaultValue: 0,
          displayStepper: !0,
          max: 4,
          min: 0,
          step: 1,
          title: `Decimals`,
          type: M.Number,
        },
        onxrkrHOsaAChange: { changes: `xrkrHOsaA`, type: M.ChangeHandler },
        GDWePtpeZ: { defaultValue: ``, placeholder: `%`, title: `Suffix`, type: M.String },
        onGDWePtpeZChange: { changes: `GDWePtpeZ`, type: M.ChangeHandler },
        ImDkGO_AZ: {
          defaultValue: 3e3,
          max: 1e4,
          min: 100,
          step: 50,
          title: `Duration`,
          type: M.Number,
        },
        onImDkGO_AZChange: { changes: `ImDkGO_AZ`, type: M.ChangeHandler },
      }),
      w(
        X,
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
          ...ie,
          ...q,
          ...D(L),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (X.loader = { load: (e, t) => (t.locale, Promise.allSettled([T(W, {}, t)])) }));
  });
function he(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ge,
  _e,
  ve,
  ye,
  be,
  xe,
  Z,
  Se,
  Ce,
  we,
  Te,
  Ee,
  De,
  Oe,
  Q,
  ke = e(() => {
    (m(),
      S(),
      y(),
      n(),
      ee(),
      B(),
      z(),
      ne(),
      (ge = b(I)),
      (_e = b(W)),
      (ve = [`tNV5vtQHe`, `EZyfgMpPc`]),
      (ye = `framer-91mux`),
      (be = { EZyfgMpPc: `framer-v-bxwary`, tNV5vtQHe: `framer-v-1m7hrwh` }),
      (xe = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Z = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Se = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Ce = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (we = ({ value: e, children: n }) => {
        let r = f(_),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return u(_.Provider, { value: a, children: n });
      }),
      (Te = { "Why choose us card": `tNV5vtQHe`, Phone: `EZyfgMpPc` }),
      (Ee = g.create(o)),
      (De = ({
        description: e,
        height: t,
        id: n,
        image: r,
        padding: i,
        title: a,
        width: o,
        ...s
      }) => ({
        ...s,
        qFlpib6ZK:
          e ??
          s.qFlpib6ZK ??
          `Every project begins with your goals, audience, and a clear plan for success.`,
        RQH8nGlxC: i ?? s.RQH8nGlxC ?? `22px`,
        U0fFT4g9u: r ??
          s.U0fFT4g9u ?? {
            pixelHeight: 28,
            pixelWidth: 38,
            src: `../../assets/images/uXmE9865lH20bxuRc50FSoAE.png`,
          },
        variant: Te[s.variant] ?? s.variant ?? `tNV5vtQHe`,
        Zq6uEg2GQ: a ?? s.Zq6uEg2GQ ?? `Strategy-Driven`,
      })),
      (Oe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Q = F(
        d(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = h(),
            { activeLocale: s, setLocale: c } = P(),
            l = N(),
            {
              style: d,
              className: f,
              layoutId: m,
              variant: _,
              U0fFT4g9u: y,
              Zq6uEg2GQ: b,
              qFlpib6ZK: S,
              RQH8nGlxC: w,
              ...T
            } = De(e),
            {
              baseVariant: D,
              classNames: k,
              clearLoadingGesture: j,
              gestureHandlers: M,
              gestureVariant: F,
              isLoading: L,
              setGestureState: R,
              setVariant: ee,
              variants: z,
            } = O({
              cycleOrder: ve,
              defaultVariant: `tNV5vtQHe`,
              ref: i,
              variant: _,
              variantClassNames: be,
            }),
            B = Oe(e, z),
            V = C(ye, U, te);
          return u(v, {
            id: m ?? a,
            children: u(Ee, {
              animate: z,
              initial: !1,
              children: u(we, {
                value: xe,
                children: p(g.div, {
                  ...T,
                  ...M,
                  className: C(V, `framer-1m7hrwh`, f, k),
                  "data-border": !0,
                  "data-framer-name": `Why choose us card`,
                  layoutDependency: B,
                  layoutId: `tNV5vtQHe`,
                  ref: i,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    ...d,
                  },
                  ...he({ EZyfgMpPc: { "data-framer-name": `Phone` } }, D, F),
                  children: [
                    u(A, {
                      height: 6,
                      width: `6px`,
                      y: (l?.y || 0) + -3,
                      children: u(x, {
                        className: `framer-ly2kld-container`,
                        layoutDependency: B,
                        layoutId: `UgMw3O5p5-container`,
                        nodeId: `UgMw3O5p5`,
                        rendersWithMotion: !0,
                        scopeId: `PdiKnbgdu`,
                        children: u(I, {
                          height: `100%`,
                          id: `UgMw3O5p5`,
                          layoutId: `UgMw3O5p5`,
                          style: { height: `100%`, width: `100%` },
                          variant: Z(`MnvfFSWcm`),
                          width: `100%`,
                        }),
                      }),
                    }),
                    u(A, {
                      height: 6,
                      width: `6px`,
                      y: (l?.y || 0) + -3,
                      children: u(x, {
                        className: `framer-jkh1jt-container`,
                        layoutDependency: B,
                        layoutId: `kKvVKL5RC-container`,
                        nodeId: `kKvVKL5RC`,
                        rendersWithMotion: !0,
                        scopeId: `PdiKnbgdu`,
                        children: u(I, {
                          height: `100%`,
                          id: `kKvVKL5RC`,
                          layoutId: `kKvVKL5RC`,
                          style: { height: `100%`, width: `100%` },
                          variant: Z(`MnvfFSWcm`),
                          width: `100%`,
                        }),
                      }),
                    }),
                    p(g.div, {
                      className: `framer-x26927`,
                      "data-framer-name": `Content wrapper`,
                      layoutDependency: B,
                      layoutId: `nzCCdQV3R`,
                      children: [
                        u(A, {
                          height: 72,
                          y: (l?.y || 0) + 56 + 0 + 0 + 0,
                          ...he({ EZyfgMpPc: { y: (l?.y || 0) + 26 + 0 + 0 + 0 } }, D, F),
                          children: u(x, {
                            className: `framer-frrfxr-container`,
                            layoutDependency: B,
                            layoutId: `BGPeT_fr4-container`,
                            nodeId: `BGPeT_fr4`,
                            rendersWithMotion: !0,
                            scopeId: `PdiKnbgdu`,
                            children: u(W, {
                              height: `100%`,
                              id: `BGPeT_fr4`,
                              layoutId: `BGPeT_fr4`,
                              sg0hGvzIl: Se(y),
                              tsXymKpnQ: Ce(w),
                              variant: Z(`PC9ft8T7Y`),
                              width: `100%`,
                            }),
                          }),
                        }),
                        p(g.div, {
                          className: `framer-ezx0vc`,
                          "data-framer-name": `Text`,
                          layoutDependency: B,
                          layoutId: `kmS2WTY7t`,
                          children: [
                            u(E, {
                              __fromCanvasComponent: !0,
                              children: u(o, {
                                children: u(g.h6, {
                                  className: `framer-styles-preset-b6eh5x`,
                                  "data-styles-preset": `mxragOn3s`,
                                  style: { "--framer-text-alignment": `left` },
                                  children: `Strategy-Driven Design`,
                                }),
                              }),
                              className: `framer-13x4xd6`,
                              fonts: [`Inter`],
                              layoutDependency: B,
                              layoutId: `rbdNcf4ey`,
                              style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: b,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            u(E, {
                              __fromCanvasComponent: !0,
                              children: u(o, {
                                children: u(g.p, {
                                  className: `framer-styles-preset-1jbobve`,
                                  "data-styles-preset": `Gh1KQz4jn`,
                                  children: `We combine research, storytelling, and design thinking to build solutions that align with your goals — not just trends.`,
                                }),
                              }),
                              className: `framer-q8qu5y`,
                              fonts: [`Inter`],
                              layoutDependency: B,
                              layoutId: `qMUQpvM4p`,
                              style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: S,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
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
          `.framer-91mux.framer-1ebzfl6, .framer-91mux .framer-1ebzfl6 { display: block; }`,
          `.framer-91mux.framer-1m7hrwh { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 56px; position: relative; width: 352px; }`,
          `.framer-91mux .framer-ly2kld-container { flex: none; height: 6px; left: -2px; position: absolute; top: -3px; width: 6px; z-index: 1; }`,
          `.framer-91mux .framer-jkh1jt-container { flex: none; height: 6px; position: absolute; right: -2px; top: -3px; width: 6px; z-index: 1; }`,
          `.framer-91mux .framer-x26927 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 45px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-91mux .framer-frrfxr-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-91mux .framer-ezx0vc { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-91mux .framer-13x4xd6 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-91mux .framer-q8qu5y { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-91mux.framer-v-bxwary.framer-1m7hrwh { padding: 26px; }`,
          ...V,
          ...R,
          `.framer-91mux[data-border="true"]::after, .framer-91mux [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-91mux`
      )),
      (Q.displayName = `Why choose us card`),
      (Q.defaultProps = { height: 337, width: 352 }),
      j(Q, {
        variant: {
          options: [`tNV5vtQHe`, `EZyfgMpPc`],
          optionTitles: [`Why choose us card`, `Phone`],
          title: `Variant`,
          type: M.Enum,
        },
        U0fFT4g9u: {
          __defaultAssetReference: `data:framer/asset-reference,uXmE9865lH20bxuRc50FSoAE.png?originalFilename=Icon.png&width=38&height=28`,
          title: `Image`,
          type: M.ResponsiveImage,
        },
        Zq6uEg2GQ: {
          defaultValue: `Strategy-Driven`,
          displayTextArea: !1,
          title: `Title`,
          type: M.String,
        },
        onZq6uEg2GQChange: { changes: `Zq6uEg2GQ`, type: M.ChangeHandler },
        qFlpib6ZK: {
          defaultValue: `Every project begins with your goals, audience, and a clear plan for success.`,
          displayTextArea: !1,
          title: `Description`,
          type: M.String,
        },
        onqFlpib6ZKChange: { changes: `qFlpib6ZK`, type: M.ChangeHandler },
        RQH8nGlxC: { defaultValue: `22px`, title: `Padding`, type: M.Padding },
      }),
      w(
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
          ...ge,
          ..._e,
          ...D(H),
          ...D(L),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([T(I, {}, t), T(W, {}, t)])) }));
  }),
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  $,
  Le = e(() => {
    (m(),
      S(),
      y(),
      n(),
      (Ae = `framer-Q8QYc`),
      (je = { selkpG9qX: `framer-v-1g1qmyu` }),
      (Me = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ne = ({ value: e, children: n }) => {
        let r = f(_),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return u(_.Provider, { value: a, children: n });
      }),
      (Pe = g.create(o)),
      (Fe = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Ie = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = F(
        d(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = h(),
            { activeLocale: o, setLocale: s } = P();
          N();
          let { style: c, className: l, layoutId: d, variant: f, ...p } = Fe(e),
            {
              baseVariant: m,
              classNames: _,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: S,
              setGestureState: w,
              setVariant: T,
              variants: E,
            } = O({ defaultVariant: `selkpG9qX`, ref: i, variant: f, variantClassNames: je }),
            D = Ie(e, E),
            k = C(Ae);
          return u(v, {
            id: d ?? a,
            children: u(Pe, {
              animate: E,
              initial: !1,
              children: u(Ne, {
                value: Me,
                children: u(g.div, {
                  ...p,
                  ...b,
                  className: C(k, `framer-1g1qmyu`, l, _),
                  "data-border": !0,
                  "data-framer-name": `Divider`,
                  layoutDependency: D,
                  layoutId: `selkpG9qX`,
                  ref: i,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    ...c,
                  },
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Q8QYc.framer-1hr06y2, .framer-Q8QYc .framer-1hr06y2 { display: block; }`,
          `.framer-Q8QYc.framer-1g1qmyu { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 44px; height: 1px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 575px; }`,
          `.framer-Q8QYc[data-border="true"]::after, .framer-Q8QYc [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-Q8QYc`
      )),
      ($.displayName = `Divider`),
      ($.defaultProps = { height: 1, width: 575 }),
      w($, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
export { X as a, ke as i, Le as n, me as o, Q as r, $ as t };
//# sourceMappingURL=YUYmo_AHX.DbAyyhlx.mjs.map
