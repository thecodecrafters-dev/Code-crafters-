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
import { C as d, a as f, r as ee, t as p } from "./motion.B8Fudg3-.mjs";
import {
  B as m,
  Ct as te,
  E as h,
  H as g,
  J as _,
  M as v,
  O as y,
  P as b,
  T as x,
  Tt as ne,
  U as S,
  V as C,
  _t as re,
  a as w,
  at as ie,
  bt as ae,
  d as T,
  dt as oe,
  g as E,
  ht as se,
  i as D,
  k as O,
  lt as ce,
  mt as le,
  o as k,
  ot as ue,
  p as A,
  pt as de,
  ut as fe,
  vt as pe,
  w as j,
  wt as M,
  x as N,
  xt as P,
} from "./framer.Cfrj40WT.mjs";
import {
  _ as F,
  a as me,
  c as he,
  d as I,
  f as ge,
  i as _e,
  l as ve,
  o as ye,
  r as be,
  s as xe,
  u as Se,
  v as Ce,
} from "./shared-lib.CiHz06lb.mjs";
import { n as we, t as Te } from "./NBRlP0mJX.DJ1PTSpb.mjs";
import { n as Ee, t as De } from "./A6z6xB8U0.DRUUyGKb.mjs";
import { n as Oe, t as L } from "./noBET4yzv.DlZcxCxb.mjs";
import { a as ke, c as Ae, n as je, o as Me, s as Ne, t as Pe } from "./YHhyJkwMZ.BRrfO3wD.mjs";
import { i as Fe, n as Ie, r as Le, t as Re } from "./pwqJGFtS0.BuHt_ND4.mjs";
import { n as ze, t as R } from "./CsKVMk6kk.LV5yxHWp.mjs";
import { n as Be, t as z } from "./eoI2DeKNZ.5rwiNYGS.mjs";
import { a as Ve, i as He, n as Ue, o as We, r as Ge, t as Ke } from "./YUYmo_AHX.DbAyyhlx.mjs";
import { a as qe, i as Je, n as Ye, o as Xe, r as Ze, t as Qe } from "./CUPxNqAyB.Cf8NGg0i.mjs";
import { a as $e, i as et, n as tt, o as nt, r as rt, t as B } from "./xGXvKVCOU.B5OsGFp4.mjs";
import { i as it, n as at, r as ot, t as st } from "./MeF89MvDJ.Bc71BXyi.mjs";
import { i as ct, n as lt, r as ut, t as dt } from "./OMSsExAYt.DU-cC-8X.mjs";
import ft, { t as pt } from "./ljKLr33p59O323vTAo20rofAAGZJdqoscNNGRWfvRtQ.DrAeJJ0V.mjs";
function mt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  V,
  Et = e(() => {
    (l(),
      _(),
      p(),
      n(),
      Ce(),
      (ht = m(F)),
      (gt = [`XnR9vxFXQ`, `BZc6Qcpdz`, `qwXl4oZ70`]),
      (_t = `framer-MjmCn`),
      (vt = {
        BZc6Qcpdz: `framer-v-dhxtwu`,
        qwXl4oZ70: `framer-v-ywrghk`,
        XnR9vxFXQ: `framer-v-1bo0k6m`,
      }),
      (yt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (bt = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (xt = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (St = d.create(i)),
      (Ct = { Desktop: `XnR9vxFXQ`, Phone: `qwXl4oZ70`, Tablet: `BZc6Qcpdz` }),
      (wt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ct[r.variant] ?? r.variant ?? `XnR9vxFXQ`,
      })),
      (Tt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (V = P(
        o(function (e, t) {
          let n = r(null),
            i = t ?? n,
            o = u(),
            { activeLocale: s, setLocale: l } = de(),
            f = ue(),
            { style: p, className: m, layoutId: te, variant: g, ..._ } = wt(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: ne,
              gestureVariant: S,
              isLoading: C,
              setGestureState: re,
              setVariant: w,
              variants: ie,
            } = ae({
              cycleOrder: gt,
              defaultVariant: `XnR9vxFXQ`,
              ref: i,
              variant: g,
              variantClassNames: vt,
            }),
            T = Tt(e, ie),
            oe = v(_t),
            E = () => y !== `qwXl4oZ70`;
          return a(ee, {
            id: te ?? o,
            children: a(St, {
              animate: ie,
              initial: !1,
              children: a(xt, {
                value: yt,
                children: c(d.div, {
                  ..._,
                  ...ne,
                  className: v(oe, `framer-1bo0k6m`, m, b),
                  "data-border": !0,
                  "data-framer-name": `Desktop`,
                  layoutDependency: T,
                  layoutId: `XnR9vxFXQ`,
                  ref: i,
                  style: {
                    "--border-bottom-width": `0.84px`,
                    "--border-color": `var(--token-2d0bc998-434b-425b-8ec4-03c76c634d2b, rgba(0, 0, 0, 0.25))`,
                    "--border-left-width": `0.84px`,
                    "--border-right-width": `0.84px`,
                    "--border-style": `dashed`,
                    "--border-top-width": `0.84px`,
                    backgroundColor: `var(--token-7023ebcd-2b7a-43f9-895d-721491b0c75c, rgb(209, 213, 219))`,
                    borderBottomLeftRadius: 24,
                    borderBottomRightRadius: 24,
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                    ...p,
                  },
                  ...mt(
                    {
                      BZc6Qcpdz: { "data-framer-name": `Tablet` },
                      qwXl4oZ70: { "data-framer-name": `Phone` },
                    },
                    y,
                    S
                  ),
                  children: [
                    a(d.div, {
                      className: `framer-1q4hk3s`,
                      "data-border": !0,
                      "data-framer-name": `Circle`,
                      layoutDependency: T,
                      layoutId: `QxUtNhMv8`,
                      style: {
                        "--border-bottom-width": `0.84px`,
                        "--border-color": `var(--token-2d0bc998-434b-425b-8ec4-03c76c634d2b, rgba(0, 0, 0, 0.25))`,
                        "--border-left-width": `0.84px`,
                        "--border-right-width": `0.84px`,
                        "--border-style": `dashed`,
                        "--border-top-width": `0.84px`,
                        backgroundColor: `var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255))`,
                        borderBottomLeftRadius: 999,
                        borderBottomRightRadius: 999,
                        borderTopLeftRadius: 999,
                        borderTopRightRadius: 999,
                      },
                      children: c(d.div, {
                        className: `framer-cf20or`,
                        "data-framer-name": `wrapper`,
                        layoutDependency: T,
                        layoutId: `liXFz89FJ`,
                        children: [
                          a(d.div, {
                            className: `framer-1396wkc`,
                            "data-framer-name": `Large`,
                            layoutDependency: T,
                            layoutId: `xrAf18XsX`,
                            style: {
                              background: `linear-gradient(90deg, var(--token-9865ed8d-00ba-4af5-9819-d475df51881b, rgb(85, 89, 92)) 0%, var(--token-339d6679-9119-4830-8fff-e9918e64dbd7, rgb(0, 0, 0)) 100%)`,
                              borderBottomRightRadius: 999,
                              borderTopRightRadius: 999,
                              boxShadow: `0px 2.77px 2.21px 0px var(--token-ab8dd3e6-1175-4b94-a998-2b40fe2f16ff, rgba(0, 0, 0, 0.12)), 0px 6.65px 5.32px 0px var(--token-21df02e0-c7ba-44bf-a3ba-af71c2eb4ced, rgba(0, 0, 0, 0.13)), 4px 12.52px 10.2px 0px var(--token-af299f98-dd0a-48c1-a232-3333d53792e8, rgba(0, 0, 0, 0.14)), 10px 22.34px 17px 0px var(--token-26f70c96-97b4-43a1-a85c-15fa2db248aa, rgba(0, 0, 0, 0.15)), 20px 41px 33px 0px var(--token-26f70c96-97b4-43a1-a85c-15fa2db248aa, rgba(0, 0, 0, 0.15)), 60px 50px 80px 0px var(--token-26f70c96-97b4-43a1-a85c-15fa2db248aa, rgba(0, 0, 0, 0.15)), 0px 3px 3px 0px var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1)), inset 0px -6px 0px 1px var(--token-749bc66f-56ff-4a90-abf3-0d699632a8e1, rgba(255, 255, 255, 0.1)), inset 0px -5px 0px 0px var(--token-54f49a39-1fca-439f-bc5d-f3fc47dd7074, rgb(26, 26, 26)), inset 0px 1px 0px 0px var(--token-46dd9299-bbaf-4442-b126-5314566efc41, rgba(255, 255, 255, 0.6))`,
                            },
                          }),
                          a(d.div, {
                            className: `framer-159noc2`,
                            "data-framer-name": `Large`,
                            layoutDependency: T,
                            layoutId: `rB0GXdpcG`,
                            style: {
                              background: `linear-gradient(90deg, var(--token-9865ed8d-00ba-4af5-9819-d475df51881b, rgb(85, 89, 92)) 0%, var(--token-339d6679-9119-4830-8fff-e9918e64dbd7, rgb(0, 0, 0)) 100%)`,
                              borderBottomRightRadius: 999,
                              borderTopRightRadius: 999,
                              boxShadow: `0px 2.77px 2.21px 0px var(--token-ab8dd3e6-1175-4b94-a998-2b40fe2f16ff, rgba(0, 0, 0, 0.12)), 0px 6.65px 5.32px 0px var(--token-21df02e0-c7ba-44bf-a3ba-af71c2eb4ced, rgba(0, 0, 0, 0.13)), 4px 12.52px 10.2px 0px var(--token-af299f98-dd0a-48c1-a232-3333d53792e8, rgba(0, 0, 0, 0.14)), 10px 22.34px 17px 0px var(--token-26f70c96-97b4-43a1-a85c-15fa2db248aa, rgba(0, 0, 0, 0.15)), 20px 41px 33px 0px var(--token-26f70c96-97b4-43a1-a85c-15fa2db248aa, rgba(0, 0, 0, 0.15)), 60px 50px 80px 0px var(--token-26f70c96-97b4-43a1-a85c-15fa2db248aa, rgba(0, 0, 0, 0.15)), 0px 3px 3px 0px var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1)), inset 0px -6px 0px 1px var(--token-749bc66f-56ff-4a90-abf3-0d699632a8e1, rgba(255, 255, 255, 0.1)), inset 0px -5px 0px 0px var(--token-54f49a39-1fca-439f-bc5d-f3fc47dd7074, rgb(26, 26, 26)), inset 0px 1px 0px 0px var(--token-46dd9299-bbaf-4442-b126-5314566efc41, rgba(255, 255, 255, 0.6))`,
                            },
                          }),
                        ],
                      }),
                    }),
                    E() &&
                      a(d.div, {
                        className: `framer-1wcklwe`,
                        "data-border": !0,
                        "data-framer-name": `Top absolute`,
                        layoutDependency: T,
                        layoutId: `uXqh2zvdJ`,
                        style: {
                          "--border-bottom-width": `0px`,
                          "--border-color": `var(--token-882ca0e8-d580-4f03-9a91-470de2a53ebf, rgba(67, 67, 67, 0.5))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `dashed`,
                          "--border-top-width": `0px`,
                          backgroundColor: `var(--token-0fbfb1aa-14cf-4d4e-9401-7de4a733d912, rgb(243, 244, 246))`,
                        },
                      }),
                    a(D, {
                      height: 6,
                      y: (f?.y || 0) + 48,
                      ...mt({ BZc6Qcpdz: { y: (f?.y || 0) + 75 } }, y, S),
                      children: a(h, {
                        className: `framer-15iuegp-container`,
                        layoutDependency: T,
                        layoutId: `SNo6pvKTn-container`,
                        nodeId: `SNo6pvKTn`,
                        rendersWithMotion: !0,
                        scopeId: `mBK3lfAve`,
                        children: a(F, {
                          height: `100%`,
                          id: `SNo6pvKTn`,
                          layoutId: `SNo6pvKTn`,
                          variant: bt(`IMtwrJy6n`),
                          width: `100%`,
                        }),
                      }),
                    }),
                    a(D, {
                      height: 6,
                      y: (f?.y || 0) + 48,
                      ...mt({ BZc6Qcpdz: { y: (f?.y || 0) + 75 } }, y, S),
                      children: a(h, {
                        className: `framer-1diwos-container`,
                        layoutDependency: T,
                        layoutId: `glCobBR_m-container`,
                        nodeId: `glCobBR_m`,
                        rendersWithMotion: !0,
                        scopeId: `mBK3lfAve`,
                        children: a(F, {
                          height: `100%`,
                          id: `glCobBR_m`,
                          layoutId: `glCobBR_m`,
                          variant: bt(`IMtwrJy6n`),
                          width: `100%`,
                        }),
                      }),
                    }),
                    a(D, {
                      height: 6,
                      y: (f?.y || 0) + (f?.height || 303) - 54,
                      ...mt(
                        {
                          BZc6Qcpdz: { y: (f?.y || 0) + (f?.height || 257) - 81 },
                          qwXl4oZ70: { y: (f?.y || 0) + (f?.height || 256) - 54 },
                        },
                        y,
                        S
                      ),
                      children: a(h, {
                        className: `framer-187unrl-container`,
                        layoutDependency: T,
                        layoutId: `SALGLOo7r-container`,
                        nodeId: `SALGLOo7r`,
                        rendersWithMotion: !0,
                        scopeId: `mBK3lfAve`,
                        children: a(F, {
                          height: `100%`,
                          id: `SALGLOo7r`,
                          layoutId: `SALGLOo7r`,
                          variant: bt(`IMtwrJy6n`),
                          width: `100%`,
                        }),
                      }),
                    }),
                    a(D, {
                      height: 6,
                      y: (f?.y || 0) + (f?.height || 303) - 54,
                      ...mt(
                        {
                          BZc6Qcpdz: { y: (f?.y || 0) + (f?.height || 257) - 81 },
                          qwXl4oZ70: { y: (f?.y || 0) + (f?.height || 256) - 54 },
                        },
                        y,
                        S
                      ),
                      children: a(h, {
                        className: `framer-sb9v97-container`,
                        layoutDependency: T,
                        layoutId: `WR4TBc0Sj-container`,
                        nodeId: `WR4TBc0Sj`,
                        rendersWithMotion: !0,
                        scopeId: `mBK3lfAve`,
                        children: a(F, {
                          height: `100%`,
                          id: `WR4TBc0Sj`,
                          layoutId: `WR4TBc0Sj`,
                          variant: bt(`IMtwrJy6n`),
                          width: `100%`,
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
          `.framer-MjmCn.framer-suc19v, .framer-MjmCn .framer-suc19v { display: block; }`,
          `.framer-MjmCn.framer-1bo0k6m { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 303px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 303px; }`,
          `.framer-MjmCn .framer-1q4hk3s { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 42px 52px 42px 52px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-MjmCn .framer-cf20or { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-MjmCn .framer-1396wkc { aspect-ratio: 0.5796460176991151 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 95px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 55px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-MjmCn .framer-159noc2 { aspect-ratio: 0.5796460176991151 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 173px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-MjmCn .framer-1wcklwe { flex: none; height: 173px; left: calc(49.83498349834986% - 100px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: -173px; width: 100px; z-index: 2; }`,
          `.framer-MjmCn .framer-15iuegp-container { flex: none; height: auto; left: -4px; position: absolute; top: 48px; width: auto; z-index: 3; }`,
          `.framer-MjmCn .framer-1diwos-container { flex: none; height: auto; position: absolute; right: -4px; top: 48px; width: auto; z-index: 3; }`,
          `.framer-MjmCn .framer-187unrl-container { bottom: 48px; flex: none; height: auto; position: absolute; right: -4px; width: auto; z-index: 2; }`,
          `.framer-MjmCn .framer-sb9v97-container { bottom: 48px; flex: none; height: auto; left: -4px; position: absolute; width: auto; z-index: 2; }`,
          `.framer-MjmCn.framer-v-dhxtwu.framer-1bo0k6m { height: 257px; width: 256px; }`,
          `.framer-MjmCn.framer-v-dhxtwu .framer-1396wkc { height: var(--framer-aspect-ratio-supported, 87px); width: 51px; }`,
          `.framer-MjmCn.framer-v-dhxtwu .framer-159noc2 { height: var(--framer-aspect-ratio-supported, 163px); width: 95px; }`,
          `.framer-MjmCn.framer-v-dhxtwu .framer-1wcklwe { height: 181px; top: -180px; }`,
          `.framer-MjmCn.framer-v-dhxtwu .framer-15iuegp-container, .framer-MjmCn.framer-v-dhxtwu .framer-1diwos-container { top: 75px; }`,
          `.framer-MjmCn.framer-v-dhxtwu .framer-187unrl-container, .framer-MjmCn.framer-v-dhxtwu .framer-sb9v97-container { bottom: 75px; }`,
          `.framer-MjmCn.framer-v-ywrghk.framer-1bo0k6m { height: 256px; width: 256px; }`,
          `.framer-MjmCn.framer-v-ywrghk .framer-1396wkc { height: var(--framer-aspect-ratio-supported, 88px); width: 51px; }`,
          `.framer-MjmCn.framer-v-ywrghk .framer-159noc2 { height: var(--framer-aspect-ratio-supported, 164px); width: 95px; }`,
          `.framer-MjmCn[data-border="true"]::after, .framer-MjmCn [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-MjmCn`
      )),
      (V.displayName = `Hero circle`),
      (V.defaultProps = { height: 303, width: 303 }),
      O(V, {
        variant: {
          options: [`XnR9vxFXQ`, `BZc6Qcpdz`, `qwXl4oZ70`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: k.Enum,
        },
      }),
      y(V, [{ explicitInter: !0, fonts: [] }, ...ht], { supportsExplicitInterCodegen: !0 }));
  });
function Dt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ot,
  kt,
  At,
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
  H,
  Vt = e(() => {
    (l(),
      _(),
      p(),
      n(),
      Ae(),
      (Ot = ne(M(d.a))),
      (kt = { D73E094PX: { hover: !0 }, OM_tL0oTn: { hover: !0 } }),
      (At = [`D73E094PX`, `OM_tL0oTn`]),
      (jt = `framer-1KpTj`),
      (Mt = { D73E094PX: `framer-v-p93asr`, OM_tL0oTn: `framer-v-zg8wsq` }),
      (Nt = { damping: 60, delay: 0, mass: 1, stiffness: 320, type: `spring` }),
      (Pt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (Ft = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (It = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (Lt = { "Pricing button": `D73E094PX`, Phone: `OM_tL0oTn` }),
      (Rt = d.create(i)),
      (zt = ({ height: e, id: t, link: n, width: r, ...i }) => ({
        ...i,
        A0NvjO_dU: n ?? i.A0NvjO_dU,
        variant: Lt[i.variant] ?? i.variant ?? `D73E094PX`,
      })),
      (Bt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (H = P(
        o(function (e, t) {
          let n = r(null),
            o = t ?? n,
            s = u(),
            { activeLocale: c, setLocale: l } = de();
          ue();
          let { style: f, className: p, layoutId: m, variant: te, A0NvjO_dU: h, ...g } = zt(e),
            {
              baseVariant: _,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: ne,
              gestureVariant: S,
              isLoading: C,
              setGestureState: re,
              setVariant: w,
              variants: ie,
            } = ae({
              cycleOrder: At,
              defaultVariant: `D73E094PX`,
              enabledGestures: kt,
              ref: o,
              variant: te,
              variantClassNames: Mt,
            }),
            T = Bt(e, ie),
            oe = v(jt, ke);
          return a(ee, {
            id: m ?? s,
            children: a(Rt, {
              animate: ie,
              initial: !1,
              children: a(It, {
                value: Nt,
                children: a(E, {
                  href: h,
                  motionChild: !0,
                  nodeId: `D73E094PX`,
                  openInNewTab: !1,
                  scopeId: `TETzPBodC`,
                  smoothScroll: !0,
                  children: a(Ot, {
                    ...g,
                    ...ne,
                    className: `${v(oe, `framer-p93asr`, p, y)} framer-1wysb33`,
                    "data-framer-appear-id": `p93asr`,
                    "data-framer-name": `Pricing button`,
                    layoutDependency: T,
                    layoutId: `D73E094PX`,
                    ref: o,
                    style: {
                      backgroundColor: `var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, rgb(255, 255, 255))`,
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                      boxShadow: `inset 0px -6px 0px 1px var(--token-096a4c5a-d53e-425c-b64b-dcee2d8009fb, rgba(250, 250, 250, 0.25)), inset 0px -5px 0px 0px var(--token-90fd8f8b-313c-4e9b-a5a9-01c8b26baac0, rgb(228, 228, 228)), inset 0px 1px 0px 0px var(--token-46dd9299-bbaf-4442-b126-5314566efc41, rgba(255, 255, 255, 0.6)), 0px 3px 3px 0px var(--token-cfe0be49-3dba-49a6-9ba2-3d3c4663fe88, rgba(0, 0, 0, 0.04))`,
                      ...f,
                    },
                    variants: {
                      "D73E094PX-hover": {
                        boxShadow: `inset 0px -6px 0px 1px var(--token-096a4c5a-d53e-425c-b64b-dcee2d8009fb, rgba(250, 250, 250, 0.25)), inset 0px -5px 0px 0px var(--token-90fd8f8b-313c-4e9b-a5a9-01c8b26baac0, rgb(228, 228, 228)), inset 0px 1px 0px 0px var(--token-46dd9299-bbaf-4442-b126-5314566efc41, rgba(255, 255, 255, 0.6)), 0px 3px 3px 0px var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1)), 0px 2.77px 2.21px 0px var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1)), 0px 6.65px 5.32px 0px var(--token-26f70c96-97b4-43a1-a85c-15fa2db248aa, rgba(0, 0, 0, 0.15))`,
                      },
                    },
                    ...Dt(
                      {
                        "D73E094PX-hover": {
                          __framer__presenceAnimate: Pt,
                          __framer__presenceInitial: Ft,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          "data-framer-name": void 0,
                          optimized: !0,
                        },
                        "OM_tL0oTn-hover": { "data-framer-name": void 0 },
                        OM_tL0oTn: { "data-framer-name": `Phone` },
                      },
                      _,
                      S
                    ),
                    children: a(x, {
                      __fromCanvasComponent: !0,
                      children: a(i, {
                        children: a(d.p, {
                          className: `framer-styles-preset-1u0avwx`,
                          "data-styles-preset": `llwEzCpG3`,
                          style: { "--framer-text-alignment": `center` },
                          children: `Why CodeCrafters`,
                        }),
                      }),
                      className: `framer-sctd94`,
                      fonts: [`Inter`],
                      layoutDependency: T,
                      layoutId: `GWtUOKDRD`,
                      style: {
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
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
          `.framer-1KpTj.framer-1wysb33, .framer-1KpTj .framer-1wysb33 { display: block; }`,
          `.framer-1KpTj.framer-p93asr { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 24px 24px 30px 24px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-1KpTj .framer-sctd94 { flex: none; height: 13px; position: relative; white-space: pre; width: auto; }`,
          `.framer-1KpTj.framer-v-zg8wsq.framer-p93asr { padding: 20px 20px 26px 20px; }`,
          ...Me,
        ],
        `framer-1KpTj`
      )),
      (H.displayName = `Pricing Button`),
      (H.defaultProps = { height: 67, width: 192.5 }),
      O(H, {
        variant: {
          options: [`D73E094PX`, `OM_tL0oTn`],
          optionTitles: [`Pricing button`, `Phone`],
          title: `Variant`,
          type: k.Enum,
        },
        A0NvjO_dU: { title: `Link`, type: k.Link },
      }),
      y(
        H,
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
          ...C(Ne),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Ht(e, ...t) {
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
  Zt,
  U,
  Qt = e(() => {
    (l(),
      _(),
      p(),
      n(),
      (Ut = [
        `hRt06ppNH`,
        `cPkM25tjY`,
        `Wb6v7HT8v`,
        `LphQKo7oL`,
        `JOZS1A41K`,
        `nbFzNHtkL`,
        `TyLsAti0F`,
        `fWk5EEvmo`,
        `DxTJJSipx`,
        `T4RucWZvL`,
        `seiGswfO1`,
      ]),
      (Wt = `framer-KhwBU`),
      (Gt = {
        cPkM25tjY: `framer-v-1w9i5td`,
        DxTJJSipx: `framer-v-1yifnvk`,
        fWk5EEvmo: `framer-v-w1ga9a`,
        hRt06ppNH: `framer-v-1yu5n3o`,
        JOZS1A41K: `framer-v-s0iqdn`,
        LphQKo7oL: `framer-v-1v4pwo1`,
        nbFzNHtkL: `framer-v-1nmnxr1`,
        seiGswfO1: `framer-v-1lbm3i5`,
        T4RucWZvL: `framer-v-im7thy`,
        TyLsAti0F: `framer-v-16g8o8n`,
        Wb6v7HT8v: `framer-v-s1jqhe`,
      }),
      (Kt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (qt = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (Jt = {
        "Active 2": `nbFzNHtkL`,
        "Active 3": `DxTJJSipx`,
        "Focused 2": `TyLsAti0F`,
        "Focused 3": `T4RucWZvL`,
        "Idle 2": `JOZS1A41K`,
        "Idle 3": `fWk5EEvmo`,
        "Idle 4": `seiGswfO1`,
        "inactive ": `hRt06ppNH`,
        Active: `Wb6v7HT8v`,
        Focused: `LphQKo7oL`,
        Idle: `cPkM25tjY`,
      }),
      (Yt = d.create(i)),
      (Xt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Jt[r.variant] ?? r.variant ?? `hRt06ppNH`,
      })),
      (Zt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (U = P(
        o(function (e, t) {
          let n = r(null),
            i = t ?? n,
            o = u(),
            { activeLocale: s, setLocale: l } = de();
          ue();
          let { style: f, className: p, layoutId: m, variant: te, ...h } = Xt(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: ne,
              setGestureState: S,
              setVariant: C,
              variants: re,
            } = ae({
              cycleOrder: Ut,
              defaultVariant: `hRt06ppNH`,
              ref: i,
              variant: te,
              variantClassNames: Gt,
            }),
            w = Zt(e, re),
            ie = v(Wt);
          return a(ee, {
            id: m ?? o,
            children: a(Yt, {
              animate: re,
              initial: !1,
              children: a(qt, {
                value: Kt,
                children: a(d.div, {
                  ...h,
                  ...b,
                  className: v(ie, `framer-1yu5n3o`, p, _),
                  "data-framer-name": `inactive `,
                  layoutDependency: w,
                  layoutId: `hRt06ppNH`,
                  ref: i,
                  style: { opacity: 0.2, rotate: 180, ...f },
                  variants: {
                    cPkM25tjY: { opacity: 0.5 },
                    DxTJJSipx: { opacity: 0.8 },
                    fWk5EEvmo: { opacity: 0.5 },
                    JOZS1A41K: { opacity: 0.5 },
                    LphQKo7oL: { opacity: 1 },
                    nbFzNHtkL: { opacity: 0.8 },
                    seiGswfO1: { opacity: 0.5 },
                    T4RucWZvL: { opacity: 1 },
                    TyLsAti0F: { opacity: 1 },
                    Wb6v7HT8v: { opacity: 0.8 },
                  },
                  ...Ht(
                    {
                      cPkM25tjY: { "data-framer-name": `Idle` },
                      DxTJJSipx: { "data-framer-name": `Active 3` },
                      fWk5EEvmo: { "data-framer-name": `Idle 3` },
                      JOZS1A41K: { "data-framer-name": `Idle 2` },
                      LphQKo7oL: { "data-framer-name": `Focused` },
                      nbFzNHtkL: { "data-framer-name": `Active 2` },
                      seiGswfO1: { "data-framer-name": `Idle 4` },
                      T4RucWZvL: { "data-framer-name": `Focused 3` },
                      TyLsAti0F: { "data-framer-name": `Focused 2` },
                      Wb6v7HT8v: { "data-framer-name": `Active` },
                    },
                    g,
                    x
                  ),
                  children: c(d.div, {
                    className: `framer-v5um9j`,
                    "data-framer-name": `Wrapper`,
                    layoutDependency: w,
                    layoutId: `hMGN9SJBf`,
                    children: [
                      a(d.div, {
                        className: `framer-q982jh`,
                        "data-framer-name": `Circle`,
                        layoutDependency: w,
                        layoutId: `CEQENLbXv`,
                        style: {
                          backgroundColor: `var(--token-0c8650d7-f245-4dd7-94de-e82d4b829000, rgb(2, 50, 79))`,
                          borderBottomLeftRadius: 999,
                          borderBottomRightRadius: 999,
                          borderTopLeftRadius: 999,
                          borderTopRightRadius: 999,
                        },
                        variants: {
                          LphQKo7oL: {
                            backgroundColor: `var(--token-339d6679-9119-4830-8fff-e9918e64dbd7, rgb(0, 0, 0))`,
                          },
                        },
                      }),
                      c(d.div, {
                        className: `framer-24aqd3`,
                        "data-framer-name": `3 circle wrapper`,
                        layoutDependency: w,
                        layoutId: `f_YeBotRf`,
                        children: [
                          a(d.div, {
                            className: `framer-w09yv9`,
                            "data-framer-name": `Circle`,
                            layoutDependency: w,
                            layoutId: `GhRLvcpmI`,
                            style: {
                              backgroundColor: `var(--token-0c8650d7-f245-4dd7-94de-e82d4b829000, rgb(2, 50, 79))`,
                              borderBottomLeftRadius: 999,
                              borderBottomRightRadius: 999,
                              borderTopLeftRadius: 999,
                              borderTopRightRadius: 999,
                            },
                            variants: {
                              LphQKo7oL: {
                                backgroundColor: `var(--token-339d6679-9119-4830-8fff-e9918e64dbd7, rgb(0, 0, 0))`,
                              },
                            },
                          }),
                          a(d.div, {
                            className: `framer-604frp`,
                            "data-framer-name": `Circle`,
                            layoutDependency: w,
                            layoutId: `wgFn4AbQX`,
                            style: {
                              backgroundColor: `var(--token-0c8650d7-f245-4dd7-94de-e82d4b829000, rgb(2, 50, 79))`,
                              borderBottomLeftRadius: 999,
                              borderBottomRightRadius: 999,
                              borderTopLeftRadius: 999,
                              borderTopRightRadius: 999,
                            },
                            variants: {
                              LphQKo7oL: {
                                backgroundColor: `var(--token-339d6679-9119-4830-8fff-e9918e64dbd7, rgb(0, 0, 0))`,
                              },
                            },
                          }),
                          a(d.div, {
                            className: `framer-1y0au2a`,
                            "data-framer-name": `Circle`,
                            layoutDependency: w,
                            layoutId: `G8nP7XVkr`,
                            style: {
                              backgroundColor: `var(--token-0c8650d7-f245-4dd7-94de-e82d4b829000, rgb(2, 50, 79))`,
                              borderBottomLeftRadius: 999,
                              borderBottomRightRadius: 999,
                              borderTopLeftRadius: 999,
                              borderTopRightRadius: 999,
                            },
                            variants: {
                              LphQKo7oL: {
                                backgroundColor: `var(--token-339d6679-9119-4830-8fff-e9918e64dbd7, rgb(0, 0, 0))`,
                              },
                            },
                          }),
                        ],
                      }),
                      c(d.div, {
                        className: `framer-3hbjt0`,
                        "data-framer-name": `Wrapper`,
                        layoutDependency: w,
                        layoutId: `Q0QTRfpnE`,
                        children: [
                          c(d.div, {
                            className: `framer-1v3gtsp`,
                            "data-framer-name": `Top circle wrapper`,
                            layoutDependency: w,
                            layoutId: `fYQbTEIg_`,
                            children: [
                              a(d.div, {
                                className: `framer-kzub8t`,
                                layoutDependency: w,
                                layoutId: `h1pgfCOAC`,
                                style: {
                                  backgroundColor: `var(--token-0c8650d7-f245-4dd7-94de-e82d4b829000, rgb(2, 50, 79))`,
                                  borderBottomLeftRadius: 999,
                                  borderBottomRightRadius: 999,
                                  borderTopLeftRadius: 999,
                                  borderTopRightRadius: 999,
                                },
                                variants: {
                                  LphQKo7oL: {
                                    backgroundColor: `var(--token-339d6679-9119-4830-8fff-e9918e64dbd7, rgb(0, 0, 0))`,
                                  },
                                },
                              }),
                              a(d.div, {
                                className: `framer-1q9i355`,
                                layoutDependency: w,
                                layoutId: `gP7kHzUYE`,
                                style: {
                                  backgroundColor: `rgb(2, 50, 79)`,
                                  borderBottomLeftRadius: 999,
                                  borderBottomRightRadius: 999,
                                  borderTopLeftRadius: 999,
                                  borderTopRightRadius: 999,
                                },
                              }),
                            ],
                          }),
                          c(d.div, {
                            className: `framer-noqnwi`,
                            "data-framer-name": `Bottom circle wrapper`,
                            layoutDependency: w,
                            layoutId: `mUbnsdC4U`,
                            children: [
                              a(d.div, {
                                className: `framer-1bh90zk`,
                                "data-framer-name": `Circle`,
                                layoutDependency: w,
                                layoutId: `nX7z_VlAy`,
                                style: {
                                  backgroundColor: `var(--token-0c8650d7-f245-4dd7-94de-e82d4b829000, rgb(2, 50, 79))`,
                                  borderBottomLeftRadius: 999,
                                  borderBottomRightRadius: 999,
                                  borderTopLeftRadius: 999,
                                  borderTopRightRadius: 999,
                                },
                                variants: {
                                  LphQKo7oL: {
                                    backgroundColor: `var(--token-339d6679-9119-4830-8fff-e9918e64dbd7, rgb(0, 0, 0))`,
                                  },
                                },
                              }),
                              a(d.div, {
                                className: `framer-13hfv5p`,
                                "data-framer-name": `Circle`,
                                layoutDependency: w,
                                layoutId: `rpsHg2iOx`,
                                style: {
                                  backgroundColor: `var(--token-0c8650d7-f245-4dd7-94de-e82d4b829000, rgb(2, 50, 79))`,
                                  borderBottomLeftRadius: 999,
                                  borderBottomRightRadius: 999,
                                  borderTopLeftRadius: 999,
                                  borderTopRightRadius: 999,
                                },
                                variants: {
                                  LphQKo7oL: {
                                    backgroundColor: `var(--token-339d6679-9119-4830-8fff-e9918e64dbd7, rgb(0, 0, 0))`,
                                  },
                                },
                              }),
                            ],
                          }),
                        ],
                      }),
                      c(d.div, {
                        className: `framer-1gjzq6i`,
                        "data-framer-name": `Circle wrapper`,
                        layoutDependency: w,
                        layoutId: `dMzQBatgh`,
                        children: [
                          a(d.div, {
                            className: `framer-womhne`,
                            "data-framer-name": `Circle`,
                            layoutDependency: w,
                            layoutId: `utbeWFmEk`,
                            style: {
                              backgroundColor: `var(--token-0c8650d7-f245-4dd7-94de-e82d4b829000, rgb(2, 50, 79))`,
                              borderBottomLeftRadius: 999,
                              borderBottomRightRadius: 999,
                              borderTopLeftRadius: 999,
                              borderTopRightRadius: 999,
                            },
                            variants: {
                              LphQKo7oL: {
                                backgroundColor: `var(--token-339d6679-9119-4830-8fff-e9918e64dbd7, rgb(0, 0, 0))`,
                              },
                            },
                          }),
                          a(d.div, {
                            className: `framer-m8j8h7`,
                            "data-framer-name": `Circle`,
                            layoutDependency: w,
                            layoutId: `OrxYOoXx2`,
                            style: {
                              backgroundColor: `var(--token-0c8650d7-f245-4dd7-94de-e82d4b829000, rgb(2, 50, 79))`,
                              borderBottomLeftRadius: 999,
                              borderBottomRightRadius: 999,
                              borderTopLeftRadius: 999,
                              borderTopRightRadius: 999,
                            },
                            variants: {
                              LphQKo7oL: {
                                backgroundColor: `var(--token-339d6679-9119-4830-8fff-e9918e64dbd7, rgb(0, 0, 0))`,
                              },
                            },
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
          `.framer-KhwBU.framer-2t2fgx, .framer-KhwBU .framer-2t2fgx { display: block; }`,
          `.framer-KhwBU.framer-1yu5n3o { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 12px 15px 12px 15px; position: relative; width: min-content; }`,
          `.framer-KhwBU .framer-v5um9j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 1px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-KhwBU .framer-q982jh, .framer-KhwBU .framer-w09yv9, .framer-KhwBU .framer-604frp, .framer-KhwBU .framer-1y0au2a, .framer-KhwBU .framer-kzub8t, .framer-KhwBU .framer-1q9i355, .framer-KhwBU .framer-1bh90zk, .framer-KhwBU .framer-13hfv5p, .framer-KhwBU .framer-womhne, .framer-KhwBU .framer-m8j8h7 { flex: none; height: 2px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 2px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-KhwBU .framer-24aqd3, .framer-KhwBU .framer-1v3gtsp, .framer-KhwBU .framer-noqnwi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 1px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-KhwBU .framer-3hbjt0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-KhwBU .framer-1gjzq6i { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        ],
        `framer-KhwBU`
      )),
      (U.displayName = `Arrow`),
      (U.defaultProps = { height: 38, width: 41 }),
      O(U, {
        variant: {
          options: [
            `hRt06ppNH`,
            `cPkM25tjY`,
            `Wb6v7HT8v`,
            `LphQKo7oL`,
            `JOZS1A41K`,
            `nbFzNHtkL`,
            `TyLsAti0F`,
            `fWk5EEvmo`,
            `DxTJJSipx`,
            `T4RucWZvL`,
            `seiGswfO1`,
          ],
          optionTitles: [
            `inactive `,
            `Idle`,
            `Active`,
            `Focused`,
            `Idle 2`,
            `Active 2`,
            `Focused 2`,
            `Idle 3`,
            `Active 3`,
            `Focused 3`,
            `Idle 4`,
          ],
          title: `Variant`,
          type: k.Enum,
        },
      }),
      y(U, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function $t(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var en,
  W,
  tn,
  nn,
  rn,
  an,
  G,
  on,
  sn,
  cn,
  K,
  ln,
  un,
  q,
  dn = e(() => {
    (l(),
      _(),
      p(),
      n(),
      Qt(),
      (en = m(U)),
      (W = S(U)),
      (tn = [`XKy5RnW61`, `lX7BtD6Qz`, `FI8i0GlD9`]),
      (nn = `framer-2l9mG`),
      (rn = {
        FI8i0GlD9: `framer-v-pmbybr`,
        lX7BtD6Qz: `framer-v-6fcewp`,
        XKy5RnW61: `framer-v-5m9mjw`,
      }),
      (an = { duration: 0, type: `tween` }),
      (G = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (on = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (sn = { Desktop: `XKy5RnW61`, Phone: `FI8i0GlD9`, Tablet: `lX7BtD6Qz` }),
      (cn = d.create(i)),
      (K = {
        "Active 2": `nbFzNHtkL`,
        "Active 3": `DxTJJSipx`,
        "Focused 2": `TyLsAti0F`,
        "Focused 3": `T4RucWZvL`,
        "Idle 2": `JOZS1A41K`,
        "Idle 3": `fWk5EEvmo`,
        "Idle 4": `seiGswfO1`,
        "inactive ": `hRt06ppNH`,
        Active: `Wb6v7HT8v`,
        Focused: `LphQKo7oL`,
        Idle: `cPkM25tjY`,
      }),
      (ln = ({
        active: e,
        active2: t,
        active3: n,
        focused: r,
        focused2: i,
        focused3: a,
        height: o,
        id: s,
        idle: c,
        idle2: l,
        idle3: u,
        idle4: d,
        inactive: f,
        width: ee,
        ...p
      }) => ({
        ...p,
        CLOWWI5kJ: K[f] ?? f ?? p.CLOWWI5kJ ?? `hRt06ppNH`,
        dJBYit2oe: K[u] ?? u ?? p.dJBYit2oe ?? `T4RucWZvL`,
        gaIZWA69e: K[n] ?? n ?? p.gaIZWA69e ?? `seiGswfO1`,
        ilP9D42rk: K[a] ?? a ?? p.ilP9D42rk ?? `T4RucWZvL`,
        mRBSXagRz: K[c] ?? c ?? p.mRBSXagRz ?? `cPkM25tjY`,
        pfpnnIykt: K[r] ?? r ?? p.pfpnnIykt ?? `LphQKo7oL`,
        QGr9WKVF4: K[i] ?? i ?? p.QGr9WKVF4 ?? `TyLsAti0F`,
        sCgOd5EJs: K[e] ?? e ?? p.sCgOd5EJs ?? `Wb6v7HT8v`,
        tgUJA_nr1: K[t] ?? t ?? p.tgUJA_nr1 ?? `nbFzNHtkL`,
        TtxdOOhD7: K[l] ?? l ?? p.TtxdOOhD7 ?? `JOZS1A41K`,
        variant: sn[p.variant] ?? p.variant ?? `XKy5RnW61`,
        VPoG2CvwV: K[d] ?? d ?? p.VPoG2CvwV ?? `seiGswfO1`,
      })),
      (un = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = P(
        o(function (e, t) {
          let n = r(null),
            i = t ?? n,
            o = u(),
            { activeLocale: s, setLocale: l } = de(),
            f = ue(),
            {
              style: p,
              className: m,
              layoutId: te,
              variant: g,
              CLOWWI5kJ: _,
              mRBSXagRz: y,
              sCgOd5EJs: b,
              pfpnnIykt: x,
              TtxdOOhD7: ne,
              tgUJA_nr1: S,
              QGr9WKVF4: C,
              dJBYit2oe: re,
              gaIZWA69e: w,
              ilP9D42rk: ie,
              VPoG2CvwV: T,
              ...oe
            } = ln(e),
            {
              baseVariant: E,
              classNames: se,
              clearLoadingGesture: O,
              gestureHandlers: ce,
              gestureVariant: le,
              isLoading: k,
              setGestureState: A,
              setVariant: fe,
              variants: pe,
            } = ae({
              cycleOrder: tn,
              defaultVariant: `XKy5RnW61`,
              ref: i,
              variant: g,
              variantClassNames: rn,
            }),
            j = un(e, pe),
            M = v(nn),
            N = () => E !== `FI8i0GlD9`,
            P = () => ![`lX7BtD6Qz`, `FI8i0GlD9`].includes(E);
          return a(ee, {
            id: te ?? o,
            children: a(cn, {
              animate: pe,
              initial: !1,
              children: a(on, {
                value: an,
                children: a(d.div, {
                  ...oe,
                  ...ce,
                  className: v(M, `framer-5m9mjw`, m, se),
                  "data-framer-name": `Desktop`,
                  layoutDependency: j,
                  layoutId: `XKy5RnW61`,
                  ref: i,
                  style: { ...p },
                  ...$t(
                    {
                      FI8i0GlD9: { "data-framer-name": `Phone` },
                      lX7BtD6Qz: { "data-framer-name": `Tablet` },
                    },
                    E,
                    le
                  ),
                  children: c(d.div, {
                    className: `framer-dvuz1l`,
                    "data-framer-name": `Responsive`,
                    layoutDependency: j,
                    layoutId: `Nq1ElvOvJ`,
                    children: [
                      a(D, {
                        height: 200,
                        y: (f?.y || 0) + (0 + ((f?.height || 200) - 0 - 200) / 2) + 0,
                        children: a(h, {
                          className: `framer-1q3h9op-container`,
                          "data-framer-name": `Arrow 1`,
                          layoutDependency: j,
                          layoutId: `zewh2n2UP-container`,
                          name: `Arrow 1`,
                          nodeId: `zewh2n2UP`,
                          rendersWithMotion: !0,
                          scopeId: `RGoa8pUQN`,
                          children: a(U, {
                            height: `100%`,
                            id: `zewh2n2UP`,
                            layoutId: `zewh2n2UP`,
                            name: `Arrow 1`,
                            variant: G(_),
                            width: `100%`,
                          }),
                        }),
                      }),
                      a(D, {
                        height: 200,
                        y: (f?.y || 0) + (0 + ((f?.height || 200) - 0 - 200) / 2) + 0,
                        children: a(h, {
                          className: `framer-mqkgjy-container`,
                          "data-framer-name": `Arrow 2`,
                          layoutDependency: j,
                          layoutId: `hzkopl7y1-container`,
                          name: `Arrow 2`,
                          nodeId: `hzkopl7y1`,
                          rendersWithMotion: !0,
                          scopeId: `RGoa8pUQN`,
                          children: a(U, {
                            height: `100%`,
                            id: `hzkopl7y1`,
                            layoutId: `hzkopl7y1`,
                            name: `Arrow 2`,
                            variant: G(y),
                            width: `100%`,
                          }),
                        }),
                      }),
                      a(D, {
                        height: 200,
                        y: (f?.y || 0) + (0 + ((f?.height || 200) - 0 - 200) / 2) + 0,
                        children: a(h, {
                          className: `framer-85kj5h-container`,
                          "data-framer-name": `Arrow 3`,
                          layoutDependency: j,
                          layoutId: `CVAag4FsC-container`,
                          name: `Arrow 3`,
                          nodeId: `CVAag4FsC`,
                          rendersWithMotion: !0,
                          scopeId: `RGoa8pUQN`,
                          children: a(U, {
                            height: `100%`,
                            id: `CVAag4FsC`,
                            layoutId: `CVAag4FsC`,
                            name: `Arrow 3`,
                            variant: G(b),
                            width: `100%`,
                          }),
                        }),
                      }),
                      a(D, {
                        height: 200,
                        y: (f?.y || 0) + (0 + ((f?.height || 200) - 0 - 200) / 2) + 0,
                        children: a(h, {
                          className: `framer-hnckv8-container`,
                          "data-framer-name": `Arrow 4`,
                          layoutDependency: j,
                          layoutId: `VyAf8Sfw6-container`,
                          name: `Arrow 4`,
                          nodeId: `VyAf8Sfw6`,
                          rendersWithMotion: !0,
                          scopeId: `RGoa8pUQN`,
                          children: a(U, {
                            height: `100%`,
                            id: `VyAf8Sfw6`,
                            layoutId: `VyAf8Sfw6`,
                            name: `Arrow 4`,
                            variant: G(x),
                            width: `100%`,
                          }),
                        }),
                      }),
                      N() &&
                        a(D, {
                          height: 200,
                          y: (f?.y || 0) + (0 + ((f?.height || 200) - 0 - 200) / 2) + 0,
                          children: a(h, {
                            className: `framer-1peka7i-container`,
                            "data-framer-name": `Arrow 5`,
                            layoutDependency: j,
                            layoutId: `pYroRztCm-container`,
                            name: `Arrow 5`,
                            nodeId: `pYroRztCm`,
                            rendersWithMotion: !0,
                            scopeId: `RGoa8pUQN`,
                            children: a(U, {
                              height: `100%`,
                              id: `pYroRztCm`,
                              layoutId: `pYroRztCm`,
                              name: `Arrow 5`,
                              variant: G(ne),
                              width: `100%`,
                            }),
                          }),
                        }),
                      N() &&
                        a(D, {
                          height: 200,
                          y: (f?.y || 0) + (0 + ((f?.height || 200) - 0 - 200) / 2) + 0,
                          children: a(h, {
                            className: `framer-1wkd0md-container`,
                            "data-framer-name": `Arrow 6`,
                            layoutDependency: j,
                            layoutId: `I_Y_lOBKh-container`,
                            name: `Arrow 6`,
                            nodeId: `I_Y_lOBKh`,
                            rendersWithMotion: !0,
                            scopeId: `RGoa8pUQN`,
                            children: a(U, {
                              height: `100%`,
                              id: `I_Y_lOBKh`,
                              layoutId: `I_Y_lOBKh`,
                              name: `Arrow 6`,
                              variant: G(S),
                              width: `100%`,
                            }),
                          }),
                        }),
                      P() &&
                        a(D, {
                          height: 200,
                          y: (f?.y || 0) + (0 + ((f?.height || 200) - 0 - 200) / 2) + 0,
                          children: a(h, {
                            className: `framer-rpnbgu-container`,
                            "data-framer-name": `Arrow 7`,
                            layoutDependency: j,
                            layoutId: `Giqd4L1VY-container`,
                            name: `Arrow 7`,
                            nodeId: `Giqd4L1VY`,
                            rendersWithMotion: !0,
                            scopeId: `RGoa8pUQN`,
                            children: a(U, {
                              height: `100%`,
                              id: `Giqd4L1VY`,
                              layoutId: `Giqd4L1VY`,
                              name: `Arrow 7`,
                              variant: G(C),
                              width: `100%`,
                            }),
                          }),
                        }),
                      P() &&
                        a(D, {
                          height: 200,
                          y: (f?.y || 0) + (0 + ((f?.height || 200) - 0 - 200) / 2) + 0,
                          children: a(h, {
                            className: `framer-14oiozc-container`,
                            "data-framer-name": `Arrow 8`,
                            layoutDependency: j,
                            layoutId: `iosa9y2X_-container`,
                            name: `Arrow 8`,
                            nodeId: `iosa9y2X_`,
                            rendersWithMotion: !0,
                            scopeId: `RGoa8pUQN`,
                            children: a(U, {
                              height: `100%`,
                              id: `iosa9y2X_`,
                              layoutId: `iosa9y2X_`,
                              name: `Arrow 8`,
                              variant: G(re),
                              width: `100%`,
                            }),
                          }),
                        }),
                      P() &&
                        a(D, {
                          height: 200,
                          y: (f?.y || 0) + (0 + ((f?.height || 200) - 0 - 200) / 2) + 0,
                          children: a(h, {
                            className: `framer-3r21qr-container`,
                            "data-framer-name": `Arrow 9`,
                            layoutDependency: j,
                            layoutId: `NT8EO4i3O-container`,
                            name: `Arrow 9`,
                            nodeId: `NT8EO4i3O`,
                            rendersWithMotion: !0,
                            scopeId: `RGoa8pUQN`,
                            children: a(U, {
                              height: `100%`,
                              id: `NT8EO4i3O`,
                              layoutId: `NT8EO4i3O`,
                              name: `Arrow 9`,
                              variant: G(w),
                              width: `100%`,
                            }),
                          }),
                        }),
                      P() &&
                        a(D, {
                          height: 200,
                          y: (f?.y || 0) + (0 + ((f?.height || 200) - 0 - 200) / 2) + 0,
                          children: a(h, {
                            className: `framer-6rzons-container`,
                            "data-framer-name": `Arrow 10`,
                            layoutDependency: j,
                            layoutId: `t4OZpQG3j-container`,
                            name: `Arrow 10`,
                            nodeId: `t4OZpQG3j`,
                            rendersWithMotion: !0,
                            scopeId: `RGoa8pUQN`,
                            children: a(U, {
                              height: `100%`,
                              id: `t4OZpQG3j`,
                              layoutId: `t4OZpQG3j`,
                              name: `Arrow 10`,
                              variant: G(ie),
                              width: `100%`,
                            }),
                          }),
                        }),
                      P() &&
                        a(D, {
                          height: 200,
                          y: (f?.y || 0) + (0 + ((f?.height || 200) - 0 - 200) / 2) + 0,
                          children: a(h, {
                            className: `framer-15zjko6-container`,
                            "data-framer-name": `Arrow 11`,
                            layoutDependency: j,
                            layoutId: `PabouaJQQ-container`,
                            name: `Arrow 11`,
                            nodeId: `PabouaJQQ`,
                            rendersWithMotion: !0,
                            scopeId: `RGoa8pUQN`,
                            children: a(U, {
                              height: `100%`,
                              id: `PabouaJQQ`,
                              layoutId: `PabouaJQQ`,
                              name: `Arrow 11`,
                              variant: G(T),
                              width: `100%`,
                            }),
                          }),
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
          `.framer-2l9mG.framer-1j65dsk, .framer-2l9mG .framer-1j65dsk { display: block; }`,
          `.framer-2l9mG.framer-5m9mjw { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 553px; }`,
          `.framer-2l9mG .framer-dvuz1l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 553px; }`,
          `.framer-2l9mG .framer-1q3h9op-container, .framer-2l9mG .framer-mqkgjy-container, .framer-2l9mG .framer-85kj5h-container, .framer-2l9mG .framer-hnckv8-container, .framer-2l9mG .framer-1peka7i-container, .framer-2l9mG .framer-1wkd0md-container, .framer-2l9mG .framer-rpnbgu-container, .framer-2l9mG .framer-14oiozc-container, .framer-2l9mG .framer-3r21qr-container, .framer-2l9mG .framer-6rzons-container, .framer-2l9mG .framer-15zjko6-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-2l9mG.framer-v-6fcewp.framer-5m9mjw { width: 810px; }`,
          `.framer-2l9mG.framer-v-6fcewp .framer-dvuz1l, .framer-2l9mG.framer-v-pmbybr .framer-dvuz1l { flex: 1 0 0px; width: 1px; }`,
          `.framer-2l9mG.framer-v-pmbybr.framer-5m9mjw { width: 390px; }`,
        ],
        `framer-2l9mG`
      )),
      (q.displayName = `arrow responsive`),
      (q.defaultProps = { height: 200, width: 553 }),
      O(q, {
        variant: {
          options: [`XKy5RnW61`, `lX7BtD6Qz`, `FI8i0GlD9`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: k.Enum,
        },
        CLOWWI5kJ: W?.variant && {
          ...W.variant,
          defaultValue: `hRt06ppNH`,
          description: void 0,
          hidden: void 0,
          title: `Inactive`,
        },
        mRBSXagRz: W?.variant && {
          ...W.variant,
          defaultValue: `cPkM25tjY`,
          description: void 0,
          hidden: void 0,
          title: `Idle`,
        },
        sCgOd5EJs: W?.variant && {
          ...W.variant,
          defaultValue: `Wb6v7HT8v`,
          description: void 0,
          hidden: void 0,
          title: `Active`,
        },
        pfpnnIykt: W?.variant && {
          ...W.variant,
          defaultValue: `LphQKo7oL`,
          description: void 0,
          hidden: void 0,
          title: `Focused`,
        },
        TtxdOOhD7: W?.variant && {
          ...W.variant,
          defaultValue: `JOZS1A41K`,
          description: ``,
          hidden: void 0,
          title: `Idle 2`,
        },
        tgUJA_nr1: W?.variant && {
          ...W.variant,
          defaultValue: `nbFzNHtkL`,
          description: void 0,
          hidden: void 0,
          title: `Active 2`,
        },
        QGr9WKVF4: W?.variant && {
          ...W.variant,
          defaultValue: `TyLsAti0F`,
          description: void 0,
          hidden: void 0,
          title: `Focused 2`,
        },
        dJBYit2oe: W?.variant && {
          ...W.variant,
          defaultValue: `T4RucWZvL`,
          description: void 0,
          hidden: void 0,
          title: `Idle 3`,
        },
        gaIZWA69e: W?.variant && {
          ...W.variant,
          defaultValue: `seiGswfO1`,
          description: void 0,
          hidden: void 0,
          title: `Active 3`,
        },
        ilP9D42rk: W?.variant && {
          ...W.variant,
          defaultValue: `T4RucWZvL`,
          description: void 0,
          hidden: void 0,
          title: `Focused 3`,
        },
        VPoG2CvwV: W?.variant && {
          ...W.variant,
          defaultValue: `seiGswfO1`,
          description: void 0,
          hidden: void 0,
          title: `Idle 4`,
        },
      }),
      y(q, [{ explicitInter: !0, fonts: [] }, ...en], { supportsExplicitInterCodegen: !0 }));
  });
function fn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  J,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  Y,
  En = e(() => {
    (l(),
      _(),
      p(),
      n(),
      dn(),
      (pn = m(q)),
      (mn = S(q)),
      (hn = [
        `SSfgPBCHx`,
        `iZVafrkxd`,
        `ZvGLlBgqs`,
        `ZSa6CG5sO`,
        `lA024JJIG`,
        `FEgNKFYey`,
        `KnOI9lqS8`,
        `vzmunPSlY`,
        `oj_P9ia4w`,
        `mLBsetYpn`,
        `bxV_i1DzB`,
        `w2yodNKEq`,
        `fbtw8z6gd`,
        `pMI3ITkVH`,
        `aAKnKyHBr`,
        `YixATpELM`,
        `TQvMVaZe3`,
        `dBW1IxFHX`,
        `yBQdpXESn`,
        `fGMSFbYtZ`,
        `rflUaFHd1`,
      ]),
      (gn = `framer-oW9uQ`),
      (_n = {
        aAKnKyHBr: `framer-v-1goc2v6`,
        bxV_i1DzB: `framer-v-3ww2vo`,
        dBW1IxFHX: `framer-v-nl398h`,
        fbtw8z6gd: `framer-v-6r9i2o`,
        FEgNKFYey: `framer-v-y85huf`,
        fGMSFbYtZ: `framer-v-22vlpy`,
        iZVafrkxd: `framer-v-1jcvw8j`,
        KnOI9lqS8: `framer-v-1tbk5qu`,
        lA024JJIG: `framer-v-j81dqw`,
        mLBsetYpn: `framer-v-13351id`,
        oj_P9ia4w: `framer-v-15i7tn1`,
        pMI3ITkVH: `framer-v-1gkbplk`,
        rflUaFHd1: `framer-v-jhfnl`,
        SSfgPBCHx: `framer-v-zhokfb`,
        TQvMVaZe3: `framer-v-pdeivg`,
        vzmunPSlY: `framer-v-extcar`,
        w2yodNKEq: `framer-v-1cionjm`,
        yBQdpXESn: `framer-v-1e3al7q`,
        YixATpELM: `framer-v-2gzc3u`,
        ZSa6CG5sO: `framer-v-1nmhq8e`,
        ZvGLlBgqs: `framer-v-13lk7bz`,
      }),
      (vn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (yn = { damping: 25, delay: 0, mass: 1, stiffness: 300, type: `spring` }),
      (J = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (bn = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (xn = {
        "Arrow wrapper 1": `SSfgPBCHx`,
        "Arrow wrapper 10": `mLBsetYpn`,
        "Arrow wrapper 11": `bxV_i1DzB`,
        "Arrow wrapper 2": `iZVafrkxd`,
        "Arrow wrapper 3": `ZvGLlBgqs`,
        "Arrow wrapper 4": `ZSa6CG5sO`,
        "Arrow wrapper 5": `lA024JJIG`,
        "Arrow wrapper 6": `FEgNKFYey`,
        "Arrow wrapper 7": `KnOI9lqS8`,
        "Arrow wrapper 8": `vzmunPSlY`,
        "Arrow wrapper 9": `oj_P9ia4w`,
        "Phone Arrow wrapper 1": `dBW1IxFHX`,
        "Phone Arrow wrapper 2": `yBQdpXESn`,
        "Phone Arrow wrapper 3": `fGMSFbYtZ`,
        "Phone Arrow wrapper 4": `rflUaFHd1`,
        "Tablet Arrow wrapper 1": `w2yodNKEq`,
        "Tablet Arrow wrapper 2": `fbtw8z6gd`,
        "Tablet Arrow wrapper 3": `pMI3ITkVH`,
        "Tablet Arrow wrapper 4": `aAKnKyHBr`,
        "Tablet Arrow wrapper 5": `YixATpELM`,
        "Tablet Arrow wrapper 6": `TQvMVaZe3`,
      }),
      (Sn = d.create(i)),
      (Cn = { Desktop: `XKy5RnW61`, Phone: `FI8i0GlD9`, Tablet: `lX7BtD6Qz` }),
      (wn = ({ height: e, id: t, phone: n, width: r, ...i }) => ({
        ...i,
        fJWRCVzBq: Cn[n] ?? n ?? i.fJWRCVzBq ?? `FI8i0GlD9`,
        variant: xn[i.variant] ?? i.variant ?? `SSfgPBCHx`,
      })),
      (Tn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = P(
        o(function (e, t) {
          let n = r(null),
            i = t ?? n,
            o = u(),
            { activeLocale: s, setLocale: c } = de(),
            l = ue(),
            { style: f, className: p, layoutId: m, variant: te, fJWRCVzBq: g, ..._ } = wn(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: ne,
              gestureVariant: S,
              isLoading: C,
              setGestureState: re,
              setVariant: w,
              variants: T,
            } = ae({
              cycleOrder: hn,
              defaultVariant: `SSfgPBCHx`,
              ref: i,
              variant: te,
              variantClassNames: _n,
            }),
            oe = Tn(e, T),
            { activeVariantCallback: E, delay: O } = ie(y),
            ce = E(async (...e) => {
              w(`iZVafrkxd`, !0);
            }),
            le = E(async (...e) => {
              w(`ZvGLlBgqs`, !0);
            }),
            k = E(async (...e) => {
              w(`ZSa6CG5sO`, !0);
            }),
            A = E(async (...e) => {
              w(`lA024JJIG`, !0);
            }),
            fe = E(async (...e) => {
              w(`FEgNKFYey`, !0);
            }),
            pe = E(async (...e) => {
              w(`KnOI9lqS8`, !0);
            }),
            j = E(async (...e) => {
              w(`vzmunPSlY`, !0);
            }),
            M = E(async (...e) => {
              w(`oj_P9ia4w`, !0);
            }),
            N = E(async (...e) => {
              w(`mLBsetYpn`, !0);
            }),
            P = E(async (...e) => {
              w(`bxV_i1DzB`, !0);
            }),
            F = E(async (...e) => {
              w(`SSfgPBCHx`, !0);
            }),
            me = E(async (...e) => {
              await O(() => w(`fbtw8z6gd`, !0), 50);
            }),
            he = E(async (...e) => {
              await O(() => w(`pMI3ITkVH`, !0), 50);
            }),
            I = E(async (...e) => {
              await O(() => w(`aAKnKyHBr`, !0), 50);
            }),
            ge = E(async (...e) => {
              w(`YixATpELM`, !0);
            }),
            _e = E(async (...e) => {
              w(`TQvMVaZe3`, !0);
            }),
            ve = E(async (...e) => {
              w(`w2yodNKEq`, !0);
            }),
            ye = E(async (...e) => {
              w(`yBQdpXESn`, !0);
            }),
            be = E(async (...e) => {
              w(`fGMSFbYtZ`, !0);
            });
          se(y, {
            aAKnKyHBr: ge,
            bxV_i1DzB: F,
            dBW1IxFHX: ye,
            default: ce,
            fbtw8z6gd: he,
            FEgNKFYey: pe,
            fGMSFbYtZ: E(async (...e) => {
              w(`rflUaFHd1`, !0);
            }),
            iZVafrkxd: le,
            KnOI9lqS8: j,
            lA024JJIG: fe,
            mLBsetYpn: P,
            oj_P9ia4w: N,
            pMI3ITkVH: I,
            rflUaFHd1: E(async (...e) => {
              w(`dBW1IxFHX`, !0);
            }),
            TQvMVaZe3: ve,
            vzmunPSlY: M,
            w2yodNKEq: me,
            yBQdpXESn: be,
            YixATpELM: _e,
            ZSa6CG5sO: A,
            ZvGLlBgqs: k,
          });
          let xe = v(gn);
          return a(ee, {
            id: m ?? o,
            children: a(Sn, {
              animate: T,
              initial: !1,
              children: a(bn, {
                value: vn,
                ...fn({ dBW1IxFHX: { value: yn }, w2yodNKEq: { value: yn } }, y, S),
                children: a(d.div, {
                  ..._,
                  ...ne,
                  className: v(xe, `framer-zhokfb`, p, b),
                  "data-framer-name": `Arrow wrapper 1`,
                  "data-highlight": !0,
                  layoutDependency: oe,
                  layoutId: `SSfgPBCHx`,
                  ref: i,
                  style: { ...f },
                  ...fn(
                    {
                      aAKnKyHBr: { "data-framer-name": `Tablet Arrow wrapper 4` },
                      bxV_i1DzB: { "data-framer-name": `Arrow wrapper 11` },
                      dBW1IxFHX: { "data-framer-name": `Phone Arrow wrapper 1` },
                      fbtw8z6gd: { "data-framer-name": `Tablet Arrow wrapper 2` },
                      FEgNKFYey: { "data-framer-name": `Arrow wrapper 6` },
                      fGMSFbYtZ: { "data-framer-name": `Phone Arrow wrapper 3` },
                      iZVafrkxd: { "data-framer-name": `Arrow wrapper 2` },
                      KnOI9lqS8: { "data-framer-name": `Arrow wrapper 7` },
                      lA024JJIG: { "data-framer-name": `Arrow wrapper 5` },
                      mLBsetYpn: { "data-framer-name": `Arrow wrapper 10` },
                      oj_P9ia4w: { "data-framer-name": `Arrow wrapper 9` },
                      pMI3ITkVH: { "data-framer-name": `Tablet Arrow wrapper 3` },
                      rflUaFHd1: { "data-framer-name": `Phone Arrow wrapper 4` },
                      TQvMVaZe3: { "data-framer-name": `Tablet Arrow wrapper 6` },
                      vzmunPSlY: { "data-framer-name": `Arrow wrapper 8` },
                      w2yodNKEq: { "data-framer-name": `Tablet Arrow wrapper 1` },
                      yBQdpXESn: { "data-framer-name": `Phone Arrow wrapper 2` },
                      YixATpELM: { "data-framer-name": `Tablet Arrow wrapper 5` },
                      ZSa6CG5sO: { "data-framer-name": `Arrow wrapper 4` },
                      ZvGLlBgqs: { "data-framer-name": `Arrow wrapper 3` },
                    },
                    y,
                    S
                  ),
                  children: a(D, {
                    height: 200,
                    width: `max(${l?.width || `100vw`}, 1px)`,
                    y: (l?.y || 0) + (0 + ((l?.height || 38) - 0 - 200) / 2),
                    children: a(h, {
                      className: `framer-1lw3b50-container`,
                      "data-framer-name": `Main wrapper`,
                      layoutDependency: oe,
                      layoutId: `Cmn0kzrdQ-container`,
                      name: `Main wrapper`,
                      nodeId: `Cmn0kzrdQ`,
                      rendersWithMotion: !0,
                      scopeId: `TYZWR4hYU`,
                      children: a(q, {
                        CLOWWI5kJ: `hRt06ppNH`,
                        dJBYit2oe: `hRt06ppNH`,
                        gaIZWA69e: `hRt06ppNH`,
                        height: `100%`,
                        id: `Cmn0kzrdQ`,
                        ilP9D42rk: `hRt06ppNH`,
                        layoutId: `Cmn0kzrdQ`,
                        mRBSXagRz: `hRt06ppNH`,
                        name: `Main wrapper`,
                        pfpnnIykt: `hRt06ppNH`,
                        QGr9WKVF4: `hRt06ppNH`,
                        sCgOd5EJs: `hRt06ppNH`,
                        style: { width: `100%` },
                        tgUJA_nr1: `hRt06ppNH`,
                        TtxdOOhD7: `hRt06ppNH`,
                        variant: J(`XKy5RnW61`),
                        VPoG2CvwV: `hRt06ppNH`,
                        width: `100%`,
                        ...fn(
                          {
                            aAKnKyHBr: { pfpnnIykt: `LphQKo7oL`, variant: J(`lX7BtD6Qz`) },
                            bxV_i1DzB: { VPoG2CvwV: `seiGswfO1` },
                            dBW1IxFHX: { CLOWWI5kJ: `cPkM25tjY`, variant: J(`FI8i0GlD9`) },
                            fbtw8z6gd: { mRBSXagRz: `cPkM25tjY`, variant: J(`lX7BtD6Qz`) },
                            FEgNKFYey: { tgUJA_nr1: `nbFzNHtkL` },
                            fGMSFbYtZ: { sCgOd5EJs: `LphQKo7oL`, variant: J(g) },
                            iZVafrkxd: { mRBSXagRz: `cPkM25tjY` },
                            KnOI9lqS8: { QGr9WKVF4: `TyLsAti0F` },
                            lA024JJIG: { TtxdOOhD7: `JOZS1A41K` },
                            mLBsetYpn: { ilP9D42rk: `T4RucWZvL` },
                            oj_P9ia4w: { gaIZWA69e: `DxTJJSipx` },
                            pMI3ITkVH: { sCgOd5EJs: `Wb6v7HT8v`, variant: J(`lX7BtD6Qz`) },
                            rflUaFHd1: { pfpnnIykt: `nbFzNHtkL`, variant: J(g) },
                            TQvMVaZe3: { tgUJA_nr1: `nbFzNHtkL`, variant: J(`lX7BtD6Qz`) },
                            vzmunPSlY: { dJBYit2oe: `fWk5EEvmo` },
                            w2yodNKEq: { variant: J(`lX7BtD6Qz`) },
                            yBQdpXESn: { mRBSXagRz: `Wb6v7HT8v`, variant: J(g) },
                            YixATpELM: { TtxdOOhD7: `JOZS1A41K`, variant: J(`lX7BtD6Qz`) },
                            ZSa6CG5sO: { pfpnnIykt: `LphQKo7oL` },
                            ZvGLlBgqs: { sCgOd5EJs: `Wb6v7HT8v` },
                          },
                          y,
                          S
                        ),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-oW9uQ.framer-182x1om, .framer-oW9uQ .framer-182x1om { display: block; }`,
          `.framer-oW9uQ.framer-zhokfb { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px 0px; height: 38px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 553px; }`,
          `.framer-oW9uQ .framer-1lw3b50-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        ],
        `framer-oW9uQ`
      )),
      (Y.displayName = `Main wrapper`),
      (Y.defaultProps = { height: 38, width: 553 }),
      O(Y, {
        variant: {
          options: [
            `SSfgPBCHx`,
            `iZVafrkxd`,
            `ZvGLlBgqs`,
            `ZSa6CG5sO`,
            `lA024JJIG`,
            `FEgNKFYey`,
            `KnOI9lqS8`,
            `vzmunPSlY`,
            `oj_P9ia4w`,
            `mLBsetYpn`,
            `bxV_i1DzB`,
            `w2yodNKEq`,
            `fbtw8z6gd`,
            `pMI3ITkVH`,
            `aAKnKyHBr`,
            `YixATpELM`,
            `TQvMVaZe3`,
            `dBW1IxFHX`,
            `yBQdpXESn`,
            `fGMSFbYtZ`,
            `rflUaFHd1`,
          ],
          optionTitles: [
            `Arrow wrapper 1`,
            `Arrow wrapper 2`,
            `Arrow wrapper 3`,
            `Arrow wrapper 4`,
            `Arrow wrapper 5`,
            `Arrow wrapper 6`,
            `Arrow wrapper 7`,
            `Arrow wrapper 8`,
            `Arrow wrapper 9`,
            `Arrow wrapper 10`,
            `Arrow wrapper 11`,
            `Tablet Arrow wrapper 1`,
            `Tablet Arrow wrapper 2`,
            `Tablet Arrow wrapper 3`,
            `Tablet Arrow wrapper 4`,
            `Tablet Arrow wrapper 5`,
            `Tablet Arrow wrapper 6`,
            `Phone Arrow wrapper 1`,
            `Phone Arrow wrapper 2`,
            `Phone Arrow wrapper 3`,
            `Phone Arrow wrapper 4`,
          ],
          title: `Variant`,
          type: k.Enum,
        },
        fJWRCVzBq: mn?.variant && {
          ...mn.variant,
          defaultValue: `FI8i0GlD9`,
          description: void 0,
          hidden: void 0,
          optional: void 0,
          title: `Phone`,
        },
        onfJWRCVzBqChange: { changes: `fJWRCVzBq`, type: k.ChangeHandler },
      }),
      y(Y, [{ explicitInter: !0, fonts: [] }, ...pn], { supportsExplicitInterCodegen: !0 }),
      (Y.loader = { load: (e, t) => (t.locale, Promise.allSettled([b(q, {}, t)])) }));
  }),
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  X,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  Z,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  Q,
  fr,
  pr,
  mr,
  hr,
  gr,
  $,
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
  Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr,
  Br,
  Vr,
  Hr,
  Ur,
  Wr,
  Gr,
  Kr,
  qr,
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei,
  ti,
  ni,
  ri,
  ii,
  ai;
e(() => {
  (l(),
    _(),
    p(),
    n(),
    Ee(),
    Fe(),
    ze(),
    Be(),
    We(),
    Xe(),
    nt(),
    Et(),
    we(),
    Oe(),
    He(),
    Ie(),
    ge(),
    Ce(),
    et(),
    Vt(),
    En(),
    tt(),
    je(),
    Ue(),
    Je(),
    ye(),
    it(),
    ct(),
    Se(),
    pt(),
    (Dn = ne(x)),
    (On = m(Y)),
    (kn = m(V)),
    (An = m(H)),
    (jn = m(Le)),
    (Mn = m(I)),
    (Nn = m(Re)),
    (Pn = m(L)),
    (Fn = M(x)),
    (In = m(Ke)),
    (X = M(w)),
    (Ln = M(d.div)),
    (Rn = m(Ve)),
    (zn = M(A)),
    (Bn = m(F)),
    (Vn = m(R)),
    (Hn = m($e)),
    (Un = te(d.div)),
    (Wn = m(B)),
    (Gn = m(rt)),
    (Kn = m(z)),
    (qn = m(Te)),
    (Jn = m(Ge)),
    (Yn = m(Pe)),
    (Xn = m(qe)),
    (Zn = m(De)),
    (Qn = {
      ccwQtvViN: `(min-width: 810px) and (max-width: 1439.98px)`,
      oB94wSIwq: `(min-width: 1440px)`,
      sSgoNdsY3: `(max-width: 809.98px)`,
    }),
    ($n = () => typeof document < `u`),
    (er = []),
    (tr = `framer-Wujyt`),
    (nr = {
      ccwQtvViN: `framer-v-1ci05xl`,
      oB94wSIwq: `framer-v-kocoi9`,
      sSgoNdsY3: `framer-v-2x37tr`,
    }),
    (rr = (e, t, n) => (e && t ? `position` : n)),
    (ir = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0.2, delay: 0, duration: 0.9, type: `spring` },
      x: 0,
      y: 0,
    }),
    (ar = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (Z = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (or = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { damping: 40, delay: 0.4, mass: 1, stiffness: 200, type: `spring` },
      x: 0,
      y: 0,
    }),
    (sr = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 40,
    }),
    (cr = (e, t) => `translateX(-50%) ${t}`),
    (lr = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 30,
    }),
    (ur = { damping: 60, delay: 0.05, mass: 1, stiffness: 500, type: `spring` }),
    (dr = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: ur,
      x: 0,
      y: 30,
    }),
    (Q = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 40,
    }),
    (fr = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: ur,
      x: 0,
      y: 40,
    }),
    (pr = { damping: 60, delay: 0.15, mass: 1, stiffness: 500, type: `spring` }),
    (mr = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: pr,
      x: 0,
      y: 40,
    }),
    (hr = { damping: 60, delay: 0.18, mass: 1, stiffness: 500, type: `spring` }),
    (gr = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: hr,
      x: 0,
      y: 40,
    }),
    ($ = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (_r = { damping: 60, delay: 0.25, mass: 1, stiffness: 500, type: `spring` }),
    (vr = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: _r,
      x: 0,
      y: 40,
    }),
    (yr = { damping: 60, delay: 0.22, mass: 1, stiffness: 500, type: `spring` }),
    (br = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: yr,
      x: 0,
      y: 40,
    }),
    (xr = { damping: 60, delay: 0.35, mass: 1, stiffness: 500, type: `spring` }),
    (Sr = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: xr,
      x: 0,
      y: 40,
    }),
    (Cr = { damping: 58, delay: 0.1, mass: 1, stiffness: 400, type: `spring` }),
    (wr = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 0.85,
      skewX: 0,
      skewY: 0,
      transition: Cr,
      x: 0,
      y: 0,
    }),
    (Tr = { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 20 }),
    (Er = {
      effect: Tr,
      repeat: !1,
      startDelay: 0.1,
      threshold: 0.5,
      tokenization: `word`,
      transition: ur,
      trigger: `onInView`,
      type: `appear`,
    }),
    (Dr = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 20,
      y: 0,
    }),
    (Or = { delay: 0.2, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: `tween` }),
    (kr = { delay: 0.4, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: `tween` }),
    (Ar = { delay: 0.6, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: `tween` }),
    (jr = { delay: 0.8, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: `tween` }),
    (Mr = {
      filter: `blur(10px)`,
      opacity: 0.001,
      rotate: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 10,
    }),
    (Nr = { bounce: 0, delay: 0.05, duration: 0.4, type: `spring` }),
    (Pr = {
      effect: Mr,
      repeat: !1,
      tokenization: `word`,
      transition: Nr,
      trigger: `onInView`,
      type: `appear`,
    }),
    (Fr = {
      effect: Mr,
      repeat: !1,
      startDelay: 0.3,
      tokenization: `word`,
      transition: Nr,
      trigger: `onInView`,
      type: `appear`,
    }),
    (Ir = {
      effect: Mr,
      repeat: !1,
      startDelay: 0.5,
      tokenization: `word`,
      transition: Nr,
      trigger: `onInView`,
      type: `appear`,
    }),
    (Lr = {
      effect: Mr,
      repeat: !1,
      startDelay: 0.6,
      tokenization: `word`,
      transition: Nr,
      trigger: `onInView`,
      type: `appear`,
    }),
    (Rr = { damping: 60, delay: 0.1, mass: 1, stiffness: 500, type: `spring` }),
    (zr = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Rr,
      x: 0,
      y: 30,
    }),
    (Br = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 20,
    }),
    (Vr = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: _r,
      x: 0,
      y: 20,
    }),
    (Hr = { damping: 60, delay: 0.55, mass: 1, stiffness: 500, type: `spring` }),
    (Ur = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Hr,
      x: 0,
      y: 20,
    }),
    (Wr = {
      effect: Tr,
      repeat: !1,
      startDelay: 0.1,
      threshold: 0.5,
      tokenization: `word`,
      transition: Rr,
      trigger: `onInView`,
      type: `appear`,
    }),
    (Gr = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 30,
      y: 50,
    }),
    (Kr = { damping: 60, delay: 0.2, mass: 1, stiffness: 500, type: `spring` }),
    (qr = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Kr,
      x: 30,
      y: 50,
    }),
    (Jr = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 30,
      y: 0,
    }),
    (Yr = { damping: 60, delay: 0.4, mass: 1, stiffness: 500, type: `spring` }),
    (Xr = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Yr,
      x: 30,
      y: 0,
    }),
    (Zr = { damping: 60, delay: 0.3, mass: 1, stiffness: 500, type: `spring` }),
    (Qr = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Zr,
      x: 30,
      y: 0,
    }),
    ($r = { damping: 60, delay: 0.5, mass: 1, stiffness: 500, type: `spring` }),
    (ei = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: $r,
      x: 30,
      y: 0,
    }),
    (ti = { Desktop: `oB94wSIwq`, Phone: `sSgoNdsY3`, Tablet: `ccwQtvViN` }),
    (ni = ({ value: e }) =>
      oe()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (ri = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: ti[r.variant] ?? r.variant ?? `oB94wSIwq`,
    })),
    (ii = P(
      o(function (e, n) {
        let o = r(null),
          l = n ?? o,
          p = u(),
          { activeLocale: m, setLocale: te } = de(),
          h = ue(),
          { style: _, className: y, layoutId: b, variant: ne, ...S } = ri(e);
        le(t(() => ft({}, m), [m]));
        let [C, ie] = fe(ne, Qn, !1),
          ae = v(tr, be, st, xe, dt, Qe),
          oe = s(T)?.isLayoutTemplate,
          se = !!s(f)?.transition?.layout,
          O = rr(oe, se),
          k = re(`Vo8q3wkUB`),
          M = r(null);
        pe();
        let P = re(`z4RSlNN1X`),
          me = r(null),
          he = re(`EY68PYUry`),
          ge = r(null),
          _e = re(`VPRVCzRBm`),
          ve = r(null),
          ye = () => !$n() || C !== `sSgoNdsY3`,
          Se = re(`RYTvATOdp`),
          Ce = r(null);
        return (
          ce({}),
          a(T.Provider, {
            value: {
              activeVariantId: C,
              humanReadableVariantMap: ti,
              primaryVariantId: `oB94wSIwq`,
              variantClassNames: nr,
            },
            children: c(ee, {
              id: b ?? p,
              children: [
                a(ni, {
                  value: `html body { background: var(--token-0fbfb1aa-14cf-4d4e-9401-7de4a733d912, rgb(243, 244, 246)); } html { font-size: 100%; }`,
                }),
                a(d.div, {
                  ...S,
                  className: v(ae, `framer-kocoi9`, y),
                  ref: l,
                  style: { ..._ },
                  children: c(d.div, {
                    className: `framer-67ghue`,
                    "data-framer-name": `Main wrapper`,
                    layout: O,
                    children: [
                      c(`header`, {
                        className: `framer-1xge37j`,
                        "data-border": !0,
                        "data-framer-name": `Hero`,
                        id: k,
                        ref: M,
                        children: [
                          a(`div`, {
                            className: `framer-15qyk8n`,
                            "data-framer-name": `Container`,
                            children: c(`div`, {
                              className: `framer-1egoiys`,
                              "data-framer-name": `Main wrapper`,
                              children: [
                                c(`div`, {
                                  className: `framer-fuwi98`,
                                  "data-framer-name": `wrapper`,
                                  children: [
                                    c(`div`, {
                                      className: `framer-a9kr2m`,
                                      "data-framer-name": `Text wrapper`,
                                      children: [
                                        a(`div`, {
                                          className: `framer-y5swt3`,
                                          "data-border": !0,
                                          "data-framer-name": `Text`,
                                          children: a(N, {
                                            breakpoint: C,
                                            overrides: {
                                              ccwQtvViN: {
                                                children: a(i, {
                                                  children: a(`h1`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1zZW1pYm9sZA==`,
                                                      "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                                      "--framer-font-size": `60px`,
                                                      "--framer-font-weight": `600`,
                                                      "--framer-letter-spacing": `-0.06em`,
                                                      "--framer-line-height": `60px`,
                                                      "--framer-text-alignment": `center`,
                                                      "--framer-text-color": `rgb(3, 7, 18)`,
                                                      "--framer-text-transform": `uppercase`,
                                                    },
                                                    children: a(`mark`, {
                                                      style: {
                                                        "--framer-text-background-padding": `0px`,
                                                      },
                                                      children: a(`span`, {
                                                        "data-text-fill": `true`,
                                                        style: {
                                                          backgroundImage: `linear-gradient(90deg, var(--token-9865ed8d-00ba-4af5-9819-d475df51881b, rgb(85, 89, 92)) 0%, var(--token-2ad3cfbc-8651-4409-8289-2b896ea7a000, rgb(0, 0, 0)) 100%)`,
                                                        },
                                                        children: `YOU Imagine`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                              sSgoNdsY3: {
                                                children: a(i, {
                                                  children: a(`h1`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1zZW1pYm9sZA==`,
                                                      "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                                      "--framer-font-size": `60px`,
                                                      "--framer-font-weight": `600`,
                                                      "--framer-letter-spacing": `-0.06em`,
                                                      "--framer-line-height": `60px`,
                                                      "--framer-text-alignment": `center`,
                                                      "--framer-text-color": `rgb(3, 7, 18)`,
                                                      "--framer-text-transform": `uppercase`,
                                                    },
                                                    children: a(`mark`, {
                                                      style: {
                                                        "--framer-text-background-padding": `0px`,
                                                      },
                                                      children: a(`span`, {
                                                        "data-text-fill": `true`,
                                                        style: {
                                                          backgroundImage: `linear-gradient(90deg, var(--token-9865ed8d-00ba-4af5-9819-d475df51881b, rgb(85, 89, 92)) 0%, var(--token-2ad3cfbc-8651-4409-8289-2b896ea7a000, rgb(0, 0, 0)) 100%)`,
                                                        },
                                                        children: `YOU Imagine`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                            },
                                            children: a(Dn, {
                                              __fromCanvasComponent: !0,
                                              animate: ir,
                                              children: a(i, {
                                                children: a(`h1`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1zZW1pYm9sZA==`,
                                                    "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                                    "--framer-font-size": `90px`,
                                                    "--framer-font-weight": `600`,
                                                    "--framer-letter-spacing": `-0.06em`,
                                                    "--framer-line-height": `120px`,
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `rgb(3, 7, 18)`,
                                                    "--framer-text-transform": `uppercase`,
                                                  },
                                                  children: a(`mark`, {
                                                    style: {
                                                      "--framer-text-background-padding": `0px`,
                                                    },
                                                    children: a(`span`, {
                                                      "data-text-fill": `true`,
                                                      style: {
                                                        backgroundImage: `linear-gradient(90deg, var(--token-9865ed8d-00ba-4af5-9819-d475df51881b, rgb(85, 89, 92)) 0%, var(--token-2ad3cfbc-8651-4409-8289-2b896ea7a000, rgb(0, 0, 0)) 100%)`,
                                                      },
                                                      children: `YOU Imagine`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-qx1f5z`,
                                              "data-framer-appear-id": `qx1f5z`,
                                              fonts: [`FS;Space Grotesk-semibold`],
                                              id: `qx1f5z`,
                                              initial: ar,
                                              optimized: !0,
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        }),
                                        a(N, {
                                          breakpoint: C,
                                          overrides: {
                                            ccwQtvViN: {
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                150 +
                                                0 +
                                                0 +
                                                0 +
                                                80 +
                                                143 -
                                                -1,
                                            },
                                            sSgoNdsY3: {
                                              height: 37,
                                              width: `calc(max(min(${h?.width || `100vw`}, 1440px) - 24px, 1px) - 60px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                214 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                96 -
                                                -1,
                                            },
                                          },
                                          children: a(D, {
                                            height: 38,
                                            y:
                                              (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              173 +
                                              0 +
                                              0 +
                                              0 +
                                              50 +
                                              203 -
                                              -4,
                                            children: a(w, {
                                              className: `framer-1namqgq-container`,
                                              nodeId: `h2GQgVjwn`,
                                              scopeId: `V2Ho_ZYv2`,
                                              children: a(N, {
                                                breakpoint: C,
                                                overrides: {
                                                  ccwQtvViN: { variant: Z(`w2yodNKEq`) },
                                                  sSgoNdsY3: {
                                                    style: { height: `100%`, width: `100%` },
                                                    variant: Z(`dBW1IxFHX`),
                                                  },
                                                },
                                                children: a(Y, {
                                                  fJWRCVzBq: `FI8i0GlD9`,
                                                  height: `100%`,
                                                  id: `h2GQgVjwn`,
                                                  layoutId: `h2GQgVjwn`,
                                                  style: { width: `100%` },
                                                  variant: Z(`SSfgPBCHx`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    a(N, {
                                      breakpoint: C,
                                      overrides: {
                                        ccwQtvViN: {
                                          y: (h?.y || 0) + 0 + 0 + 0 + 0 + 150 + 0 + 0 + 0 + 0,
                                        },
                                        sSgoNdsY3: {
                                          y:
                                            (h?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            214 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            136,
                                        },
                                      },
                                      children: a(D, {
                                        height: 303,
                                        y: (h?.y || 0) + 0 + 0 + 0 + 0 + 173 + 0 + 0 + 0 + 0,
                                        children: a(w, {
                                          className: `framer-t12oru-container`,
                                          nodeId: `Nydjg9LTl`,
                                          scopeId: `V2Ho_ZYv2`,
                                          children: a(N, {
                                            breakpoint: C,
                                            overrides: {
                                              ccwQtvViN: { variant: Z(`BZc6Qcpdz`) },
                                              sSgoNdsY3: { variant: Z(`qwXl4oZ70`) },
                                            },
                                            children: a(V, {
                                              height: `100%`,
                                              id: `Nydjg9LTl`,
                                              layoutId: `Nydjg9LTl`,
                                              variant: Z(`XnR9vxFXQ`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    c(`div`, {
                                      className: `framer-1hwpv3s`,
                                      "data-framer-name": `Text wrapper`,
                                      children: [
                                        a(`div`, {
                                          className: `framer-g1dcmr`,
                                          "data-border": !0,
                                          "data-framer-name": `Text`,
                                          children: a(N, {
                                            breakpoint: C,
                                            overrides: {
                                              ccwQtvViN: {
                                                children: a(i, {
                                                  children: a(`h1`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1zZW1pYm9sZA==`,
                                                      "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                                      "--framer-font-size": `60px`,
                                                      "--framer-font-weight": `600`,
                                                      "--framer-letter-spacing": `-0.06em`,
                                                      "--framer-line-height": `60px`,
                                                      "--framer-text-alignment": `center`,
                                                      "--framer-text-color": `rgb(3, 7, 18)`,
                                                      "--framer-text-transform": `uppercase`,
                                                    },
                                                    children: a(`span`, {
                                                      "data-text-fill": `true`,
                                                      style: {
                                                        backgroundImage: `linear-gradient(90deg, var(--token-9865ed8d-00ba-4af5-9819-d475df51881b, rgb(85, 89, 92)) 0%, var(--token-2ad3cfbc-8651-4409-8289-2b896ea7a000, rgb(0, 0, 0)) 100%)`,
                                                      },
                                                      children: `WE build`,
                                                    }),
                                                  }),
                                                }),
                                              },
                                              sSgoNdsY3: {
                                                children: a(i, {
                                                  children: a(`h1`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1zZW1pYm9sZA==`,
                                                      "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                                      "--framer-font-size": `60px`,
                                                      "--framer-font-weight": `600`,
                                                      "--framer-letter-spacing": `-0.06em`,
                                                      "--framer-line-height": `60px`,
                                                      "--framer-text-alignment": `center`,
                                                      "--framer-text-color": `rgb(3, 7, 18)`,
                                                      "--framer-text-transform": `uppercase`,
                                                    },
                                                    children: a(`span`, {
                                                      "data-text-fill": `true`,
                                                      style: {
                                                        backgroundImage: `linear-gradient(90deg, var(--token-9865ed8d-00ba-4af5-9819-d475df51881b, rgb(85, 89, 92)) 0%, var(--token-2ad3cfbc-8651-4409-8289-2b896ea7a000, rgb(0, 0, 0)) 100%)`,
                                                      },
                                                      children: `WE build`,
                                                    }),
                                                  }),
                                                }),
                                              },
                                            },
                                            children: a(Dn, {
                                              __fromCanvasComponent: !0,
                                              animate: ir,
                                              children: a(i, {
                                                children: a(`h1`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1zZW1pYm9sZA==`,
                                                    "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                                    "--framer-font-size": `90px`,
                                                    "--framer-font-weight": `600`,
                                                    "--framer-letter-spacing": `-0.06em`,
                                                    "--framer-line-height": `120px`,
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `rgb(3, 7, 18)`,
                                                    "--framer-text-transform": `uppercase`,
                                                  },
                                                  children: a(`span`, {
                                                    "data-text-fill": `true`,
                                                    style: {
                                                      backgroundImage: `linear-gradient(90deg, var(--token-9865ed8d-00ba-4af5-9819-d475df51881b, rgb(85, 89, 92)) 0%, var(--token-2ad3cfbc-8651-4409-8289-2b896ea7a000, rgb(0, 0, 0)) 100%)`,
                                                    },
                                                    children: `WE build`,
                                                  }),
                                                }),
                                              }),
                                              className: `framer-1vozo0s`,
                                              "data-framer-appear-id": `1vozo0s`,
                                              fonts: [`FS;Space Grotesk-semibold`],
                                              initial: ar,
                                              optimized: !0,
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        }),
                                        a(N, {
                                          breakpoint: C,
                                          overrides: {
                                            ccwQtvViN: {
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                150 +
                                                0 +
                                                0 +
                                                0 +
                                                80 +
                                                -35,
                                            },
                                            sSgoNdsY3: {
                                              width: `calc(max(min(${h?.width || `100vw`}, 1440px) - 24px, 1px) - 60px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                214 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                479 +
                                                -38,
                                            },
                                          },
                                          children: a(D, {
                                            height: 38,
                                            y:
                                              (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              173 +
                                              0 +
                                              0 +
                                              0 +
                                              50 +
                                              -42,
                                            children: a(w, {
                                              className: `framer-17psvxg-container`,
                                              nodeId: `cSvw4ytr5`,
                                              rendersWithMotion: !0,
                                              scopeId: `V2Ho_ZYv2`,
                                              style: { rotate: 180 },
                                              children: a(N, {
                                                breakpoint: C,
                                                overrides: {
                                                  ccwQtvViN: {
                                                    style: { height: `100%`, width: `100%` },
                                                    variant: Z(`w2yodNKEq`),
                                                  },
                                                  sSgoNdsY3: {
                                                    style: { height: `100%`, width: `100%` },
                                                    variant: Z(`dBW1IxFHX`),
                                                  },
                                                },
                                                children: a(Y, {
                                                  fJWRCVzBq: `FI8i0GlD9`,
                                                  height: `100%`,
                                                  id: `cSvw4ytr5`,
                                                  layoutId: `cSvw4ytr5`,
                                                  style: { width: `100%` },
                                                  variant: Z(`SSfgPBCHx`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                c(`div`, {
                                  className: `framer-1mzama9`,
                                  "data-framer-name": `Botom wrapper`,
                                  children: [
                                    a(Dn, {
                                      __fromCanvasComponent: !0,
                                      animate: or,
                                      children: a(i, {
                                        children: a(`p`, {
                                          className: `framer-styles-preset-1jbobve`,
                                          "data-styles-preset": `Gh1KQz4jn`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18))`,
                                          },
                                          children: `"We build high-performance websites and scalable platforms for ambitious businesses."`,
                                        }),
                                      }),
                                      className: `framer-f1sg5u`,
                                      "data-framer-appear-id": `f1sg5u`,
                                      fonts: [`Inter`],
                                      initial: sr,
                                      optimized: !0,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    c(`div`, {
                                      className: `framer-1jry1td`,
                                      "data-framer-name": `Button wrapper`,
                                      children: [
                                        a(j, {
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
                                            a(N, {
                                              breakpoint: C,
                                              overrides: {
                                                ccwQtvViN: {
                                                  y:
                                                    (h?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    150 +
                                                    0 +
                                                    0 +
                                                    343 +
                                                    0 +
                                                    142 +
                                                    0,
                                                },
                                                sSgoNdsY3: {
                                                  y:
                                                    (h?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    214 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    635 +
                                                    0 +
                                                    152 +
                                                    0 +
                                                    0,
                                                },
                                              },
                                              children: a(D, {
                                                height: 67,
                                                y:
                                                  (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  173 +
                                                  0 +
                                                  0 +
                                                  363 +
                                                  0 +
                                                  152 +
                                                  0,
                                                children: a(w, {
                                                  className: `framer-1dhey80-container`,
                                                  nodeId: `dy5qlA30W`,
                                                  scopeId: `V2Ho_ZYv2`,
                                                  children: a(N, {
                                                    breakpoint: C,
                                                    overrides: {
                                                      ccwQtvViN: { A0NvjO_dU: e[1] },
                                                      sSgoNdsY3: {
                                                        A0NvjO_dU: e[2],
                                                        variant: Z(`OM_tL0oTn`),
                                                      },
                                                    },
                                                    children: a(H, {
                                                      A0NvjO_dU: e[0],
                                                      height: `100%`,
                                                      id: `dy5qlA30W`,
                                                      layoutId: `dy5qlA30W`,
                                                      variant: Z(`D73E094PX`),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                        }),
                                        a(j, {
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
                                            a(N, {
                                              breakpoint: C,
                                              overrides: {
                                                ccwQtvViN: {
                                                  y:
                                                    (h?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    150 +
                                                    0 +
                                                    0 +
                                                    343 +
                                                    0 +
                                                    142 +
                                                    1,
                                                },
                                                sSgoNdsY3: {
                                                  y:
                                                    (h?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    214 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    635 +
                                                    0 +
                                                    152 +
                                                    0 +
                                                    83,
                                                },
                                              },
                                              children: a(D, {
                                                height: 65,
                                                y:
                                                  (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  173 +
                                                  0 +
                                                  0 +
                                                  363 +
                                                  0 +
                                                  152 +
                                                  1,
                                                children: a(w, {
                                                  className: `framer-1nxhe1q-container`,
                                                  nodeId: `WaNPJG5v2`,
                                                  scopeId: `V2Ho_ZYv2`,
                                                  children: a(N, {
                                                    breakpoint: C,
                                                    overrides: {
                                                      ccwQtvViN: { onAebNiVo: e[1] },
                                                      sSgoNdsY3: {
                                                        onAebNiVo: e[2],
                                                        variant: Z(`EfkfLrwUV`),
                                                      },
                                                    },
                                                    children: a(Le, {
                                                      height: `100%`,
                                                      id: `WaNPJG5v2`,
                                                      layoutId: `WaNPJG5v2`,
                                                      onAebNiVo: e[0],
                                                      variant: Z(`lUKNreusf`),
                                                      W2IqI_Cqf: `Explore Services`,
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          a(N, {
                            breakpoint: C,
                            overrides: {
                              ccwQtvViN: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: g((h?.y || 0) + 0 + 0 + 0 + 0 + 0),
                                  pixelHeight: 800,
                                  pixelWidth: 1408,
                                  sizes: `calc(${h?.width || `100vw`} - 32px)`,
                                  src: `../../assets/images/Ppi469pTURUx4z1yTNHxp4w7BHg.png`,
                                  srcSet: `../../assets/images/Ppi469pTURUx4z1yTNHxp4w7BHg.png?scale-down-to=512&width=1408&height=800 512w,../../assets/images/Ppi469pTURUx4z1yTNHxp4w7BHg.png?scale-down-to=1024&width=1408&height=800 1024w,../../assets/images/Ppi469pTURUx4z1yTNHxp4w7BHg.png 1408w`,
                                },
                                fitImageDimension: void 0,
                                transformTemplate: void 0,
                              },
                              sSgoNdsY3: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: g((h?.y || 0) + 0 + 0 + 0 + 0 + 0),
                                  pixelHeight: 800,
                                  pixelWidth: 1408,
                                  sizes: `calc(${h?.width || `100vw`} - 24px)`,
                                  src: `../../assets/images/Ppi469pTURUx4z1yTNHxp4w7BHg.png`,
                                  srcSet: `../../assets/images/Ppi469pTURUx4z1yTNHxp4w7BHg.png?scale-down-to=512&width=1408&height=800 512w,../../assets/images/Ppi469pTURUx4z1yTNHxp4w7BHg.png?scale-down-to=1024&width=1408&height=800 1024w,../../assets/images/Ppi469pTURUx4z1yTNHxp4w7BHg.png 1408w`,
                                },
                                fitImageDimension: void 0,
                                transformTemplate: void 0,
                              },
                            },
                            children: c(A, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: g((h?.y || 0) + 0 + 0 + 0 + 0 + 871 - 800),
                                pixelHeight: 800,
                                pixelWidth: 1408,
                                sizes: `1408px`,
                                src: `../../assets/images/Ppi469pTURUx4z1yTNHxp4w7BHg.png`,
                                srcSet: `../../assets/images/Ppi469pTURUx4z1yTNHxp4w7BHg.png?scale-down-to=512&width=1408&height=800 512w,../../assets/images/Ppi469pTURUx4z1yTNHxp4w7BHg.png?scale-down-to=1024&width=1408&height=800 1024w,../../assets/images/Ppi469pTURUx4z1yTNHxp4w7BHg.png 1408w`,
                              },
                              className: `framer-ohhe63`,
                              "data-border": !0,
                              "data-framer-name": `Abslute image `,
                              fitImageDimension: `height`,
                              transformTemplate: cr,
                              children: [
                                c(`div`, {
                                  className: `framer-exrder`,
                                  "data-framer-name": `Pixels`,
                                  children: [
                                    c(`div`, {
                                      className: `framer-fnjcda`,
                                      "data-framer-name": `Top wrapper`,
                                      children: [
                                        a(`div`, {
                                          className: `framer-17cukax`,
                                          "data-framer-name": `Left side wrapper`,
                                        }),
                                        a(`div`, {
                                          className: `framer-19hk37l`,
                                          "data-framer-name": `Right side wrapper`,
                                        }),
                                      ],
                                    }),
                                    a(`div`, {
                                      className: `framer-15nolkr`,
                                      "data-framer-name": `Center wrapper`,
                                      children: a(`div`, {
                                        className: `framer-3vd6nt`,
                                        "data-framer-name": `Center`,
                                      }),
                                    }),
                                    a(`div`, {
                                      className: `framer-1eufpm9`,
                                      "data-framer-name": `Bottom wrapper`,
                                      children: a(`div`, {
                                        className: `framer-1wtl5bh`,
                                        "data-framer-name": `Bottom`,
                                      }),
                                    }),
                                  ],
                                }),
                                c(`div`, {
                                  className: `framer-197a109`,
                                  "data-framer-name": `Bottom Pixels`,
                                  children: [
                                    a(`div`, {
                                      className: `framer-wkv06c`,
                                      "data-framer-name": `Top wrapper`,
                                      children: a(`div`, {
                                        className: `framer-1olxzl9`,
                                        "data-framer-name": `Right side wrapper`,
                                      }),
                                    }),
                                    a(`div`, {
                                      className: `framer-3frofh`,
                                      "data-framer-name": `Center wrapper`,
                                      children: a(`div`, {
                                        className: `framer-1ta0if4`,
                                        "data-framer-name": `Center`,
                                      }),
                                    }),
                                    c(`div`, {
                                      className: `framer-15oz2gb`,
                                      "data-framer-name": `Top wrapper`,
                                      children: [
                                        a(`div`, {
                                          className: `framer-1fecmay`,
                                          "data-framer-name": `Left side wrapper`,
                                        }),
                                        a(`div`, {
                                          className: `framer-17fkpbs`,
                                          "data-framer-name": `Right side wrapper`,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      a(N, {
                        breakpoint: C,
                        overrides: {
                          ccwQtvViN: { y: (h?.y || 0) + 0 + 0 + 0 + 818 },
                          sSgoNdsY3: { y: (h?.y || 0) + 0 + 0 + 0 + 1399 },
                        },
                        children: a(D, {
                          height: 16,
                          width: h?.width || `100vw`,
                          y: (h?.y || 0) + 0 + 0 + 0 + 871,
                          children: a(w, {
                            className: `framer-pmf1hr-container`,
                            "data-framer-name": `Spacer`,
                            name: `Spacer`,
                            nodeId: `ns8pHqrnR`,
                            scopeId: `V2Ho_ZYv2`,
                            children: a(N, {
                              breakpoint: C,
                              overrides: {
                                ccwQtvViN: { variant: Z(`tDRwbo2Hu`) },
                                sSgoNdsY3: { variant: Z(`FfOd6J0WM`) },
                              },
                              children: a(I, {
                                byu2TjtOU: {
                                  borderBottomWidth: 1,
                                  borderColor: `var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1))`,
                                  borderLeftWidth: 0,
                                  borderRightWidth: 0,
                                  borderStyle: `solid`,
                                  borderTopWidth: 1,
                                },
                                height: `100%`,
                                id: `ns8pHqrnR`,
                                layoutId: `ns8pHqrnR`,
                                name: `Spacer`,
                                style: { width: `100%` },
                                variant: Z(`hFLhZnXcH`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                      a(N, {
                        breakpoint: C,
                        overrides: {
                          ccwQtvViN: { y: (h?.y || 0) + 0 + 0 + 0 + 834 },
                          sSgoNdsY3: { y: (h?.y || 0) + 0 + 0 + 0 + 1415 },
                        },
                        children: a(D, {
                          height: 200,
                          width: `min(${h?.width || `100vw`}, 1440px)`,
                          y: (h?.y || 0) + 0 + 0 + 0 + 887,
                          children: a(w, {
                            className: `framer-2h19ob-container`,
                            nodeId: `p7DbCJaUO`,
                            scopeId: `V2Ho_ZYv2`,
                            children: a(Re, {
                              height: `100%`,
                              id: `p7DbCJaUO`,
                              layoutId: `p7DbCJaUO`,
                              style: { maxWidth: `100%`, width: `100%` },
                              variant: Z(`eLKmGreMt`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                      a(N, {
                        breakpoint: C,
                        overrides: {
                          ccwQtvViN: { y: (h?.y || 0) + 0 + 0 + 0 + 1034 },
                          sSgoNdsY3: { y: (h?.y || 0) + 0 + 0 + 0 + 1615 },
                        },
                        children: a(D, {
                          height: 16,
                          width: h?.width || `100vw`,
                          y: (h?.y || 0) + 0 + 0 + 0 + 1087,
                          children: a(w, {
                            className: `framer-1v8an3t-container`,
                            "data-framer-name": `Spacer`,
                            name: `Spacer`,
                            nodeId: `VNz8Bn7cG`,
                            scopeId: `V2Ho_ZYv2`,
                            children: a(N, {
                              breakpoint: C,
                              overrides: {
                                ccwQtvViN: { variant: Z(`tDRwbo2Hu`) },
                                sSgoNdsY3: { variant: Z(`FfOd6J0WM`) },
                              },
                              children: a(I, {
                                byu2TjtOU: {
                                  borderBottomWidth: 1,
                                  borderColor: `var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1))`,
                                  borderLeftWidth: 0,
                                  borderRightWidth: 0,
                                  borderStyle: `solid`,
                                  borderTopWidth: 1,
                                },
                                height: `100%`,
                                id: `VNz8Bn7cG`,
                                layoutId: `VNz8Bn7cG`,
                                name: `Spacer`,
                                style: { height: `100%`, width: `100%` },
                                variant: Z(`hFLhZnXcH`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                      a(`section`, {
                        className: `framer-msma7a`,
                        "data-border": !0,
                        "data-framer-name": `About us`,
                        id: P,
                        ref: me,
                        children: a(`div`, {
                          className: `framer-uap2iz`,
                          "data-framer-name": `Container`,
                          children: c(`div`, {
                            className: `framer-kvolqb`,
                            "data-framer-name": `Main wrapper`,
                            children: [
                              c(`div`, {
                                className: `framer-1i4c8y9`,
                                "data-framer-name": `Text wrapper`,
                                children: [
                                  a(N, {
                                    breakpoint: C,
                                    overrides: {
                                      ccwQtvViN: {
                                        y: (h?.y || 0) + 0 + 0 + 0 + 1050 + 0 + 0 + 100 + 0 + 0 + 0,
                                      },
                                      sSgoNdsY3: {
                                        y: (h?.y || 0) + 0 + 0 + 0 + 1631 + 0 + 0 + 60 + 0 + 0 + 0,
                                      },
                                    },
                                    children: a(D, {
                                      height: 20,
                                      y: (h?.y || 0) + 0 + 0 + 0 + 1103 + 0 + 0 + 100 + 0 + 0 + 0,
                                      children: a(w, {
                                        className: `framer-tjm6gv-container`,
                                        "data-framer-name": `Section tag`,
                                        name: `Section tag`,
                                        nodeId: `Ztn3OU3h9`,
                                        scopeId: `V2Ho_ZYv2`,
                                        children: a(L, {
                                          height: `100%`,
                                          id: `Ztn3OU3h9`,
                                          layoutId: `Ztn3OU3h9`,
                                          name: `Section tag`,
                                          RRhqTkqTM: `about us`,
                                          variant: Z(`HiPT_1Fkc`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  a(Fn, {
                                    __framer__animate: { transition: ur },
                                    __framer__animateOnce: !0,
                                    __framer__enter: lr,
                                    __framer__exit: dr,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children: a(i, {
                                      children: a(`h2`, {
                                        className: `framer-styles-preset-v5pzc9`,
                                        "data-styles-preset": `MeF89MvDJ`,
                                        dir: `auto`,
                                        children: `We believe exceptional digital products do more than function—they create momentum, earn trust,and drive growth.`,
                                      }),
                                    }),
                                    className: `framer-stv1c3`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              c(`div`, {
                                className: `framer-f8my9p`,
                                "data-framer-name": `Vertical`,
                                children: [
                                  c(`div`, {
                                    className: `framer-avnr9s`,
                                    "data-framer-name": `Horizantal`,
                                    children: [
                                      c(`div`, {
                                        className: `framer-1n9b0nc`,
                                        "data-framer-name": `Left side wrapper`,
                                        children: [
                                          a(N, {
                                            breakpoint: C,
                                            overrides: {
                                              ccwQtvViN: {
                                                y:
                                                  (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1050 +
                                                  0 +
                                                  0 +
                                                  100 +
                                                  168 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                              sSgoNdsY3: {
                                                width: `min(max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 1px), 606px)`,
                                                y:
                                                  (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1631 +
                                                  0 +
                                                  0 +
                                                  60 +
                                                  168 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            children: a(D, {
                                              height: 1,
                                              width: `min(max(max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 1px) / 2, 1px), 606px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                1103 +
                                                0 +
                                                0 +
                                                100 +
                                                189 +
                                                0 +
                                                0 +
                                                -30 +
                                                0 +
                                                0,
                                              children: a(X, {
                                                __framer__animate: { transition: ur },
                                                __framer__animateOnce: !0,
                                                __framer__enter: Q,
                                                __framer__exit: fr,
                                                __framer__styleAppearEffectEnabled: !0,
                                                __framer__threshold: 0.5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: `framer-r09uhk-container`,
                                                "data-framer-name": `Divider`,
                                                name: `Divider`,
                                                nodeId: `a1NwyxcTY`,
                                                rendersWithMotion: !0,
                                                scopeId: `V2Ho_ZYv2`,
                                                children: a(Ke, {
                                                  height: `100%`,
                                                  id: `a1NwyxcTY`,
                                                  layoutId: `a1NwyxcTY`,
                                                  name: `Divider`,
                                                  style: { width: `100%` },
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          a(Ln, {
                                            __framer__animate: { transition: ur },
                                            __framer__animateOnce: !0,
                                            __framer__enter: Q,
                                            __framer__exit: fr,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0.5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-rjyh56`,
                                            "data-framer-name": `Description wrapper`,
                                            children: a(x, {
                                              __fromCanvasComponent: !0,
                                              children: a(i, {
                                                children: c(`p`, {
                                                  className: `framer-styles-preset-13lpt6d`,
                                                  "data-styles-preset": `RXmiUshAy`,
                                                  children: [
                                                    `OUR RESULTS SPEAK FOR THEMSELVES. EACH NUMBER `,
                                                    a(`br`, {}),
                                                    `REPRESENTS THE TRUST WE’VE BUILT.`,
                                                  ],
                                                }),
                                              }),
                                              className: `framer-1j9arbd`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          a(N, {
                                            breakpoint: C,
                                            overrides: {
                                              ccwQtvViN: {
                                                y:
                                                  (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1050 +
                                                  0 +
                                                  0 +
                                                  100 +
                                                  168 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  141,
                                              },
                                              sSgoNdsY3: {
                                                width: `min(max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 1px), 606px)`,
                                                y:
                                                  (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1631 +
                                                  0 +
                                                  0 +
                                                  60 +
                                                  168 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  149,
                                              },
                                            },
                                            children: a(D, {
                                              height: 1,
                                              width: `min(max(max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 1px) / 2, 1px), 606px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                1103 +
                                                0 +
                                                0 +
                                                100 +
                                                189 +
                                                0 +
                                                0 +
                                                -30 +
                                                0 +
                                                157,
                                              children: a(X, {
                                                __framer__animate: { transition: ur },
                                                __framer__animateOnce: !0,
                                                __framer__enter: Q,
                                                __framer__exit: fr,
                                                __framer__styleAppearEffectEnabled: !0,
                                                __framer__threshold: 0.5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: `framer-gxr8qc-container`,
                                                "data-framer-name": `Divider`,
                                                name: `Divider`,
                                                nodeId: `v0RSHXtsi`,
                                                rendersWithMotion: !0,
                                                scopeId: `V2Ho_ZYv2`,
                                                children: a(Ke, {
                                                  height: `100%`,
                                                  id: `v0RSHXtsi`,
                                                  layoutId: `v0RSHXtsi`,
                                                  name: `Divider`,
                                                  style: { width: `100%` },
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          a(N, {
                                            breakpoint: C,
                                            overrides: {
                                              ccwQtvViN: {
                                                y:
                                                  (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1050 +
                                                  0 +
                                                  0 +
                                                  100 +
                                                  168 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  162,
                                              },
                                              sSgoNdsY3: {
                                                width: `min(max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 1px), 606px)`,
                                                y:
                                                  (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1631 +
                                                  0 +
                                                  0 +
                                                  60 +
                                                  168 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  174,
                                              },
                                            },
                                            children: a(D, {
                                              height: 78,
                                              width: `min(max(max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 1px) / 2, 1px), 606px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                1103 +
                                                0 +
                                                0 +
                                                100 +
                                                189 +
                                                0 +
                                                0 +
                                                -30 +
                                                0 +
                                                186,
                                              children: a(X, {
                                                __framer__animate: { transition: pr },
                                                __framer__animateOnce: !0,
                                                __framer__enter: Q,
                                                __framer__exit: mr,
                                                __framer__styleAppearEffectEnabled: !0,
                                                __framer__threshold: 0.5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: `framer-1tqs62g-container`,
                                                "data-framer-name": `About tag`,
                                                name: `About tag`,
                                                nodeId: `c5h8DrI9d`,
                                                rendersWithMotion: !0,
                                                scopeId: `V2Ho_ZYv2`,
                                                children: a(N, {
                                                  breakpoint: C,
                                                  overrides: {
                                                    ccwQtvViN: { variant: Z(`VSkD03X2g`) },
                                                    sSgoNdsY3: { variant: Z(`VSkD03X2g`) },
                                                  },
                                                  children: a(Ve, {
                                                    GDWePtpeZ: `%`,
                                                    height: `100%`,
                                                    hroT5Js0q: 100,
                                                    id: `c5h8DrI9d`,
                                                    ImDkGO_AZ: 1600,
                                                    layoutId: `c5h8DrI9d`,
                                                    name: `About tag`,
                                                    style: { width: `100%` },
                                                    variant: Z(`EHTMj7OAf`),
                                                    width: `100%`,
                                                    wmwTumyep: 0,
                                                    WWSVmG5y3: `Focused on Client Success`,
                                                    xrkrHOsaA: 0,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          a(N, {
                                            breakpoint: C,
                                            overrides: {
                                              ccwQtvViN: {
                                                y:
                                                  (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1050 +
                                                  0 +
                                                  0 +
                                                  100 +
                                                  168 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  260,
                                              },
                                              sSgoNdsY3: {
                                                width: `min(max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 1px), 606px)`,
                                                y:
                                                  (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1631 +
                                                  0 +
                                                  0 +
                                                  60 +
                                                  168 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  276,
                                              },
                                            },
                                            children: a(D, {
                                              height: 1,
                                              width: `min(max(max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 1px) / 2, 1px), 606px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                1103 +
                                                0 +
                                                0 +
                                                100 +
                                                189 +
                                                0 +
                                                0 +
                                                -30 +
                                                0 +
                                                292,
                                              children: a(X, {
                                                __framer__animate: { transition: pr },
                                                __framer__animateOnce: !0,
                                                __framer__enter: Q,
                                                __framer__exit: mr,
                                                __framer__styleAppearEffectEnabled: !0,
                                                __framer__threshold: 0.5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: `framer-1exlrok-container`,
                                                "data-framer-name": `Divider`,
                                                name: `Divider`,
                                                nodeId: `zb_djMhln`,
                                                rendersWithMotion: !0,
                                                scopeId: `V2Ho_ZYv2`,
                                                children: a(Ke, {
                                                  height: `100%`,
                                                  id: `zb_djMhln`,
                                                  layoutId: `zb_djMhln`,
                                                  name: `Divider`,
                                                  style: { width: `100%` },
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          a(N, {
                                            breakpoint: C,
                                            overrides: {
                                              ccwQtvViN: {
                                                y:
                                                  (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1050 +
                                                  0 +
                                                  0 +
                                                  100 +
                                                  168 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  281,
                                              },
                                              sSgoNdsY3: {
                                                width: `min(max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 1px), 606px)`,
                                                y:
                                                  (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1631 +
                                                  0 +
                                                  0 +
                                                  60 +
                                                  168 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  301,
                                              },
                                            },
                                            children: a(D, {
                                              height: 78,
                                              width: `min(max(max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 1px) / 2, 1px), 606px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                1103 +
                                                0 +
                                                0 +
                                                100 +
                                                189 +
                                                0 +
                                                0 +
                                                -30 +
                                                0 +
                                                321,
                                              children: a(X, {
                                                __framer__animate: { transition: hr },
                                                __framer__animateOnce: !0,
                                                __framer__enter: Q,
                                                __framer__exit: gr,
                                                __framer__styleAppearEffectEnabled: !0,
                                                __framer__threshold: 0.5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: `framer-1rp3cqo-container`,
                                                "data-framer-name": `About tag`,
                                                name: `About tag`,
                                                nodeId: `AYJPrKDKH`,
                                                rendersWithMotion: !0,
                                                scopeId: `V2Ho_ZYv2`,
                                                children: a(N, {
                                                  breakpoint: C,
                                                  overrides: {
                                                    ccwQtvViN: { variant: Z(`VSkD03X2g`) },
                                                    sSgoNdsY3: { variant: Z(`VSkD03X2g`) },
                                                  },
                                                  children: a(Ve, {
                                                    GDWePtpeZ: `+`,
                                                    height: `100%`,
                                                    hroT5Js0q: 120,
                                                    id: `AYJPrKDKH`,
                                                    ImDkGO_AZ: 1600,
                                                    kYOCf276h: $(
                                                      {
                                                        pixelHeight: 29,
                                                        pixelWidth: 29,
                                                        src: `../../assets/images/rTc984UnuC2dtG5bcVJh8lyW4ik.png`,
                                                      },
                                                      ``
                                                    ),
                                                    layoutId: `AYJPrKDKH`,
                                                    name: `About tag`,
                                                    style: { width: `100%` },
                                                    variant: Z(`EHTMj7OAf`),
                                                    width: `100%`,
                                                    wmwTumyep: 0,
                                                    WWSVmG5y3: `Projects delivered for global clients`,
                                                    xrkrHOsaA: 0,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          a(N, {
                                            breakpoint: C,
                                            overrides: {
                                              ccwQtvViN: {
                                                y:
                                                  (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1050 +
                                                  0 +
                                                  0 +
                                                  100 +
                                                  168 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  379,
                                              },
                                              sSgoNdsY3: {
                                                width: `min(max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 1px), 606px)`,
                                                y:
                                                  (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1631 +
                                                  0 +
                                                  0 +
                                                  60 +
                                                  168 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  403,
                                              },
                                            },
                                            children: a(D, {
                                              height: 1,
                                              width: `min(max(max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 1px) / 2, 1px), 606px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                1103 +
                                                0 +
                                                0 +
                                                100 +
                                                189 +
                                                0 +
                                                0 +
                                                -30 +
                                                0 +
                                                427,
                                              children: a(X, {
                                                __framer__animate: { transition: _r },
                                                __framer__animateOnce: !0,
                                                __framer__enter: Q,
                                                __framer__exit: vr,
                                                __framer__styleAppearEffectEnabled: !0,
                                                __framer__threshold: 0.5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: `framer-9f4da-container`,
                                                "data-framer-name": `Divider`,
                                                name: `Divider`,
                                                nodeId: `ZdA3yN64r`,
                                                rendersWithMotion: !0,
                                                scopeId: `V2Ho_ZYv2`,
                                                children: a(Ke, {
                                                  height: `100%`,
                                                  id: `ZdA3yN64r`,
                                                  layoutId: `ZdA3yN64r`,
                                                  name: `Divider`,
                                                  style: { width: `100%` },
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          a(N, {
                                            breakpoint: C,
                                            overrides: {
                                              ccwQtvViN: {
                                                y:
                                                  (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1050 +
                                                  0 +
                                                  0 +
                                                  100 +
                                                  168 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  400,
                                              },
                                              sSgoNdsY3: {
                                                width: `min(max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 1px), 606px)`,
                                                y:
                                                  (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1631 +
                                                  0 +
                                                  0 +
                                                  60 +
                                                  168 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  428,
                                              },
                                            },
                                            children: a(D, {
                                              height: 78,
                                              width: `min(max(max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 1px) / 2, 1px), 606px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                1103 +
                                                0 +
                                                0 +
                                                100 +
                                                189 +
                                                0 +
                                                0 +
                                                -30 +
                                                0 +
                                                456,
                                              children: a(X, {
                                                __framer__animate: { transition: yr },
                                                __framer__animateOnce: !0,
                                                __framer__enter: Q,
                                                __framer__exit: br,
                                                __framer__styleAppearEffectEnabled: !0,
                                                __framer__threshold: 0.5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: `framer-1rcjkkd-container`,
                                                "data-framer-name": `About tag`,
                                                name: `About tag`,
                                                nodeId: `NbLpkOfRB`,
                                                rendersWithMotion: !0,
                                                scopeId: `V2Ho_ZYv2`,
                                                children: a(N, {
                                                  breakpoint: C,
                                                  overrides: {
                                                    ccwQtvViN: { variant: Z(`VSkD03X2g`) },
                                                    sSgoNdsY3: { variant: Z(`VSkD03X2g`) },
                                                  },
                                                  children: a(Ve, {
                                                    GDWePtpeZ: `/5`,
                                                    height: `100%`,
                                                    hroT5Js0q: 4,
                                                    id: `NbLpkOfRB`,
                                                    ImDkGO_AZ: 800,
                                                    kYOCf276h: $(
                                                      {
                                                        pixelHeight: 31,
                                                        pixelWidth: 30,
                                                        src: `../../assets/images/moBhFmQTpAWt87qN7TbOj4dCaNg.png`,
                                                      },
                                                      ``
                                                    ),
                                                    layoutId: `NbLpkOfRB`,
                                                    name: `About tag`,
                                                    style: { width: `100%` },
                                                    variant: Z(`EHTMj7OAf`),
                                                    width: `100%`,
                                                    wmwTumyep: 0,
                                                    WWSVmG5y3: `Client rating based on 100+ reviews`,
                                                    xrkrHOsaA: 0,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          a(N, {
                                            breakpoint: C,
                                            overrides: {
                                              ccwQtvViN: {
                                                y:
                                                  (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1050 +
                                                  0 +
                                                  0 +
                                                  100 +
                                                  168 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  498,
                                              },
                                              sSgoNdsY3: {
                                                width: `min(max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 1px), 606px)`,
                                                y:
                                                  (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1631 +
                                                  0 +
                                                  0 +
                                                  60 +
                                                  168 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  530,
                                              },
                                            },
                                            children: a(D, {
                                              height: 1,
                                              width: `min(max(max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 1px) / 2, 1px), 606px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                1103 +
                                                0 +
                                                0 +
                                                100 +
                                                189 +
                                                0 +
                                                0 +
                                                -30 +
                                                0 +
                                                562,
                                              children: a(X, {
                                                __framer__animate: { transition: xr },
                                                __framer__animateOnce: !0,
                                                __framer__enter: Q,
                                                __framer__exit: Sr,
                                                __framer__styleAppearEffectEnabled: !0,
                                                __framer__threshold: 0.5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: `framer-1ipm6ke-container`,
                                                "data-framer-name": `Divider`,
                                                name: `Divider`,
                                                nodeId: `AKSjLltAh`,
                                                rendersWithMotion: !0,
                                                scopeId: `V2Ho_ZYv2`,
                                                children: a(Ke, {
                                                  height: `100%`,
                                                  id: `AKSjLltAh`,
                                                  layoutId: `AKSjLltAh`,
                                                  name: `Divider`,
                                                  style: { width: `100%` },
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      a(E, {
                                        href: `https://unsplash.com/photos/silhouetted-people-looking-out-large-windows-at-city-yIA3KpsJaNs`,
                                        motionChild: !0,
                                        nodeId: `lVlaQN3KE`,
                                        openInNewTab: !0,
                                        scopeId: `V2Ho_ZYv2`,
                                        children: a(N, {
                                          breakpoint: C,
                                          overrides: {
                                            ccwQtvViN: {
                                              background: {
                                                alt: `Silhouettes of people standing and sitting near a large window overlooking a cityscape. The scene is in black and white, with the figures in shadow and the city skyline visible through the glass.`,
                                                fit: `fill`,
                                                intrinsicHeight: 998,
                                                intrinsicWidth: 1604,
                                                loading: g(
                                                  (h?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    1050 +
                                                    0 +
                                                    0 +
                                                    100 +
                                                    168 +
                                                    0 +
                                                    0 +
                                                    0
                                                ),
                                                pixelHeight: 998,
                                                pixelWidth: 1604,
                                                sizes: `max(max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 1px) / 2, 1px)`,
                                                src: `../../assets/images/92Er3JtmOpjtlnUlFL9FKzAg.png?width=1604&height=998`,
                                                srcSet: `../../assets/images/92Er3JtmOpjtlnUlFL9FKzAg.png?scale-down-to=512&width=1604&height=998 512w,../../assets/images/92Er3JtmOpjtlnUlFL9FKzAg.png 1024w,../../assets/images/92Er3JtmOpjtlnUlFL9FKzAg.png?width=1604&height=998 1604w`,
                                              },
                                            },
                                            sSgoNdsY3: {
                                              background: {
                                                alt: `Silhouettes of people standing and sitting near a large window overlooking a cityscape. The scene is in black and white, with the figures in shadow and the city skyline visible through the glass.`,
                                                fit: `fill`,
                                                intrinsicHeight: 998,
                                                intrinsicWidth: 1604,
                                                loading: g(
                                                  (h?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    1631 +
                                                    0 +
                                                    0 +
                                                    60 +
                                                    168 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    531
                                                ),
                                                pixelHeight: 998,
                                                pixelWidth: 1604,
                                                sizes: `max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 1px)`,
                                                src: `../../assets/images/92Er3JtmOpjtlnUlFL9FKzAg.png?width=1604&height=998`,
                                                srcSet: `../../assets/images/92Er3JtmOpjtlnUlFL9FKzAg.png?scale-down-to=512&width=1604&height=998 512w,../../assets/images/92Er3JtmOpjtlnUlFL9FKzAg.png 1024w,../../assets/images/92Er3JtmOpjtlnUlFL9FKzAg.png?width=1604&height=998 1604w`,
                                              },
                                            },
                                          },
                                          children: a(zn, {
                                            __framer__animate: { transition: Cr },
                                            __framer__animateOnce: !0,
                                            __framer__exit: wr,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0.5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            as: `a`,
                                            background: {
                                              alt: `Silhouettes of people standing and sitting near a large window overlooking a cityscape. The scene is in black and white, with the figures in shadow and the city skyline visible through the glass.`,
                                              fit: `fill`,
                                              intrinsicHeight: 998,
                                              intrinsicWidth: 1604,
                                              loading: g(
                                                (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1103 +
                                                  0 +
                                                  0 +
                                                  100 +
                                                  189 +
                                                  0 +
                                                  0 +
                                                  -1
                                              ),
                                              pixelHeight: 998,
                                              pixelWidth: 1604,
                                              sizes: `max(max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 1px) / 2, 1px)`,
                                              src: `../../assets/images/92Er3JtmOpjtlnUlFL9FKzAg.png?width=1604&height=998`,
                                              srcSet: `../../assets/images/92Er3JtmOpjtlnUlFL9FKzAg.png?scale-down-to=512&width=1604&height=998 512w,../../assets/images/92Er3JtmOpjtlnUlFL9FKzAg.png 1024w,../../assets/images/92Er3JtmOpjtlnUlFL9FKzAg.png?width=1604&height=998 1604w`,
                                            },
                                            className: `framer-1ej76rx framer-1m6uors`,
                                            "data-framer-name": `About image `,
                                            children: c(d.div, {
                                              className: `framer-1lh5u1s`,
                                              "data-framer-name": `Pixel`,
                                              style: { rotate: 180 },
                                              children: [
                                                c(`div`, {
                                                  className: `framer-1yvnqa8`,
                                                  "data-framer-name": `Top wrapper`,
                                                  children: [
                                                    a(`div`, {
                                                      className: `framer-5ud1zj`,
                                                      "data-framer-name": `Frame`,
                                                    }),
                                                    a(`div`, { className: `framer-1alww4n` }),
                                                  ],
                                                }),
                                                a(`div`, {
                                                  className: `framer-12aexcx`,
                                                  "data-framer-name": `Center wrapper`,
                                                  children: a(`div`, {
                                                    className: `framer-6p5b8b`,
                                                  }),
                                                }),
                                                a(`div`, {
                                                  className: `framer-1mlc5hz`,
                                                  "data-framer-name": `Bottom wrapper`,
                                                  children: a(`div`, {
                                                    className: `framer-1120dr9`,
                                                  }),
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                      }),
                                      a(N, {
                                        breakpoint: C,
                                        overrides: {
                                          ccwQtvViN: {
                                            y:
                                              (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1050 +
                                              0 +
                                              0 +
                                              100 +
                                              168 +
                                              0 +
                                              0 +
                                              -3,
                                          },
                                          sSgoNdsY3: {
                                            y:
                                              (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1631 +
                                              0 +
                                              0 +
                                              60 +
                                              168 +
                                              0 +
                                              0 +
                                              -3,
                                          },
                                        },
                                        children: a(D, {
                                          height: 6,
                                          width: `6px`,
                                          y:
                                            (h?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            1103 +
                                            0 +
                                            0 +
                                            100 +
                                            189 +
                                            0 +
                                            0 +
                                            -3,
                                          children: a(w, {
                                            className: `framer-1hsrgdh-container`,
                                            nodeId: `r_gnEnMOd`,
                                            scopeId: `V2Ho_ZYv2`,
                                            children: a(F, {
                                              height: `100%`,
                                              id: `r_gnEnMOd`,
                                              layoutId: `r_gnEnMOd`,
                                              style: { height: `100%`, width: `100%` },
                                              variant: Z(`MnvfFSWcm`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      a(N, {
                                        breakpoint: C,
                                        overrides: {
                                          ccwQtvViN: {
                                            y:
                                              (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1050 +
                                              0 +
                                              0 +
                                              100 +
                                              168 +
                                              0 +
                                              0 +
                                              -3,
                                          },
                                          sSgoNdsY3: {
                                            y:
                                              (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1631 +
                                              0 +
                                              0 +
                                              60 +
                                              168 +
                                              0 +
                                              0 +
                                              -3,
                                          },
                                        },
                                        children: a(D, {
                                          height: 6,
                                          width: `6px`,
                                          y:
                                            (h?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            1103 +
                                            0 +
                                            0 +
                                            100 +
                                            189 +
                                            0 +
                                            0 +
                                            -3,
                                          children: a(w, {
                                            className: `framer-1jjw0d7-container`,
                                            nodeId: `rq3vT6yY4`,
                                            scopeId: `V2Ho_ZYv2`,
                                            children: a(F, {
                                              height: `100%`,
                                              id: `rq3vT6yY4`,
                                              layoutId: `rq3vT6yY4`,
                                              style: { height: `100%`, width: `100%` },
                                              variant: Z(`MnvfFSWcm`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  a(N, {
                                    breakpoint: C,
                                    overrides: {
                                      ccwQtvViN: {
                                        y:
                                          (h?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          1050 +
                                          0 +
                                          0 +
                                          100 +
                                          168 +
                                          0 +
                                          499,
                                      },
                                      sSgoNdsY3: {
                                        width: `max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 1px)`,
                                        y:
                                          (h?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          1631 +
                                          0 +
                                          0 +
                                          60 +
                                          168 +
                                          0 +
                                          921,
                                      },
                                    },
                                    children: a(D, {
                                      height: 64,
                                      width: `max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 1px)`,
                                      y:
                                        (h?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        1103 +
                                        0 +
                                        0 +
                                        100 +
                                        189 +
                                        0 +
                                        503,
                                      children: a(w, {
                                        className: `framer-1mtg47z-container`,
                                        nodeId: `eFKm4sUQz`,
                                        scopeId: `V2Ho_ZYv2`,
                                        children: a(N, {
                                          breakpoint: C,
                                          overrides: {
                                            ccwQtvViN: { variant: Z(`GGx7sb23r`) },
                                            sSgoNdsY3: { variant: Z(`GGx7sb23r`) },
                                          },
                                          children: a(R, {
                                            height: `100%`,
                                            id: `eFKm4sUQz`,
                                            layoutId: `eFKm4sUQz`,
                                            style: { width: `100%` },
                                            variant: Z(`iE1Txx1gl`),
                                            width: `100%`,
                                          }),
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
                      a(N, {
                        breakpoint: C,
                        overrides: {
                          ccwQtvViN: { y: (h?.y || 0) + 0 + 0 + 0 + 1881 },
                          sSgoNdsY3: { y: (h?.y || 0) + 0 + 0 + 0 + 2844 },
                        },
                        children: a(D, {
                          height: 16,
                          width: h?.width || `100vw`,
                          y: (h?.y || 0) + 0 + 0 + 0 + 1959,
                          children: a(w, {
                            className: `framer-rsd488-container`,
                            "data-framer-name": `Spacer`,
                            name: `Spacer`,
                            nodeId: `uR4qTrRiV`,
                            scopeId: `V2Ho_ZYv2`,
                            children: a(N, {
                              breakpoint: C,
                              overrides: {
                                ccwQtvViN: { variant: Z(`tDRwbo2Hu`) },
                                sSgoNdsY3: { variant: Z(`FfOd6J0WM`) },
                              },
                              children: a(I, {
                                byu2TjtOU: {
                                  borderBottomWidth: 1,
                                  borderColor: `var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1))`,
                                  borderLeftWidth: 0,
                                  borderRightWidth: 0,
                                  borderStyle: `solid`,
                                  borderTopWidth: 1,
                                },
                                height: `100%`,
                                id: `uR4qTrRiV`,
                                layoutId: `uR4qTrRiV`,
                                name: `Spacer`,
                                style: { height: `100%`, width: `100%` },
                                variant: Z(`hFLhZnXcH`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                      a(`section`, {
                        className: `framer-nh4enu`,
                        "data-framer-name": `Services`,
                        id: he,
                        ref: ge,
                        children: a(`div`, {
                          className: `framer-59acm6`,
                          "data-framer-name": `Container`,
                          children: c(`div`, {
                            className: `framer-12dpkgw`,
                            "data-framer-name": `Main wrapper`,
                            children: [
                              c(`div`, {
                                className: `framer-nlufbp`,
                                "data-framer-name": `Text wrapper`,
                                children: [
                                  a(N, {
                                    breakpoint: C,
                                    overrides: {
                                      ccwQtvViN: {
                                        y:
                                          (h?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          1897 +
                                          0 +
                                          0 +
                                          0 +
                                          100 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      sSgoNdsY3: {
                                        y:
                                          (h?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          2860 +
                                          0 +
                                          0 +
                                          0 +
                                          60 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                    },
                                    children: a(D, {
                                      height: 20,
                                      y:
                                        (h?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        1975 +
                                        0 +
                                        0 +
                                        0 +
                                        100 +
                                        0 +
                                        0 +
                                        0,
                                      children: a(w, {
                                        className: `framer-4flt1i-container`,
                                        "data-framer-name": `Section tag`,
                                        name: `Section tag`,
                                        nodeId: `REuBE4vBi`,
                                        scopeId: `V2Ho_ZYv2`,
                                        children: a(L, {
                                          height: `100%`,
                                          id: `REuBE4vBi`,
                                          layoutId: `REuBE4vBi`,
                                          name: `Section tag`,
                                          RRhqTkqTM: `Services`,
                                          variant: Z(`HiPT_1Fkc`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  a(x, {
                                    __fromCanvasComponent: !0,
                                    children: a(i, {
                                      children: a(`h2`, {
                                        className: `framer-styles-preset-v5pzc9`,
                                        "data-styles-preset": `MeF89MvDJ`,
                                        style: { "--framer-text-alignment": `center` },
                                        children: `“From Landing Pages to SaaS Platforms”`,
                                      }),
                                    }),
                                    className: `framer-4x2c6u`,
                                    effect: Er,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              c(`div`, {
                                className: `framer-hk1cu5`,
                                "data-framer-name": `Wrapper`,
                                children: [
                                  a(N, {
                                    breakpoint: C,
                                    overrides: {
                                      ccwQtvViN: { trackCount: 2 },
                                      sSgoNdsY3: { trackCount: 1 },
                                    },
                                    children: c(Un, {
                                      className: `framer-u7jisj`,
                                      columnMasonryLayoutEnabled: !0,
                                      "data-framer-name": `Grid 4x`,
                                      parentIsDataRepeater: !1,
                                      rowGap: 0,
                                      trackCount: 4,
                                      children: [
                                        a(N, {
                                          breakpoint: C,
                                          overrides: {
                                            ccwQtvViN: {
                                              width: `max((min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px) / 2, 50px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                1897 +
                                                0 +
                                                0 +
                                                0 +
                                                100 +
                                                172 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                            },
                                            sSgoNdsY3: {
                                              width: `max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 50px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                2860 +
                                                0 +
                                                0 +
                                                0 +
                                                60 +
                                                172 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                            },
                                          },
                                          children: a(D, {
                                            height: 680,
                                            width: `max((min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px) / 4, 50px)`,
                                            y:
                                              (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1975 +
                                              0 +
                                              0 +
                                              0 +
                                              100 +
                                              172 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                            children: a(X, {
                                              __framer__animate: { transition: Or },
                                              __framer__animateOnce: !0,
                                              __framer__enter: Dr,
                                              __framer__styleAppearEffectEnabled: !0,
                                              __framer__threshold: 0,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className: `framer-1pa1b7b-container`,
                                              "data-framer-name": `Service card`,
                                              name: `Service card`,
                                              nodeId: `m0gFYYZ5S`,
                                              rendersWithMotion: !0,
                                              scopeId: `V2Ho_ZYv2`,
                                              children: a(N, {
                                                breakpoint: C,
                                                overrides: {
                                                  sSgoNdsY3: { variant: Z(`fEm0cFp_t`) },
                                                },
                                                children: a($e, {
                                                  aGEcKnhFG: `· Business Websites`,
                                                  CzcypRbMo: `· Landing Pages`,
                                                  height: `100%`,
                                                  id: `m0gFYYZ5S`,
                                                  IXrmLZqxg: `High-performing websites designed to build trust, engage visitors, and drive action.`,
                                                  k0xEkzzMd: $(
                                                    {
                                                      pixelHeight: 1360,
                                                      pixelWidth: 704,
                                                      src: `../../assets/images/k0AE5qewDF58J8mMpT2QdOfevk.png?width=704&height=1360`,
                                                      srcSet: `../../assets/images/k0AE5qewDF58J8mMpT2QdOfevk.png 530w,../../assets/images/k0AE5qewDF58J8mMpT2QdOfevk.png?width=704&height=1360 704w`,
                                                    },
                                                    ``
                                                  ),
                                                  ktwsqelTg: `01`,
                                                  layoutId: `m0gFYYZ5S`,
                                                  name: `Service card`,
                                                  style: { width: `100%` },
                                                  UusAUEY_D: `· Content Platforms`,
                                                  variant: Z(`BxHJwPpuB`),
                                                  VcP5EHT8H: `01 — WEBSITES`,
                                                  VjxOfObxW: `· E-commerce Stores`,
                                                  width: `100%`,
                                                  ZHgRaq5yh: `IrIAkxoR0`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        a(N, {
                                          breakpoint: C,
                                          overrides: {
                                            ccwQtvViN: {
                                              width: `max((min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px) / 2, 50px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                1897 +
                                                0 +
                                                0 +
                                                0 +
                                                100 +
                                                172 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                            },
                                            sSgoNdsY3: {
                                              width: `max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 50px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                2860 +
                                                0 +
                                                0 +
                                                0 +
                                                60 +
                                                172 +
                                                0 +
                                                0 +
                                                0 +
                                                680,
                                            },
                                          },
                                          children: a(D, {
                                            height: 680,
                                            width: `max((min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px) / 4, 50px)`,
                                            y:
                                              (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1975 +
                                              0 +
                                              0 +
                                              0 +
                                              100 +
                                              172 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                            children: a(X, {
                                              __framer__animate: { transition: kr },
                                              __framer__animateOnce: !0,
                                              __framer__enter: Dr,
                                              __framer__styleAppearEffectEnabled: !0,
                                              __framer__threshold: 0,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className: `framer-1utnmmy-container`,
                                              "data-framer-name": `Service card`,
                                              name: `Service card`,
                                              nodeId: `w11ynLWIN`,
                                              rendersWithMotion: !0,
                                              scopeId: `V2Ho_ZYv2`,
                                              children: a(N, {
                                                breakpoint: C,
                                                overrides: {
                                                  sSgoNdsY3: { variant: Z(`fEm0cFp_t`) },
                                                },
                                                children: a($e, {
                                                  aGEcKnhFG: `· Booking Platforms`,
                                                  CzcypRbMo: `· Customer Portals`,
                                                  height: `100%`,
                                                  id: `w11ynLWIN`,
                                                  IXrmLZqxg: `Intuitive applications that simplify operations and improve customer experiences.`,
                                                  k0xEkzzMd: $(
                                                    {
                                                      pixelHeight: 1360,
                                                      pixelWidth: 704,
                                                      src: `../../assets/images/XcniSU8z0Uzv0iMOJqwAfQLItpM.png?width=704&height=1360`,
                                                      srcSet: `../../assets/images/XcniSU8z0Uzv0iMOJqwAfQLItpM.png 530w,../../assets/images/XcniSU8z0Uzv0iMOJqwAfQLItpM.png?width=704&height=1360 704w`,
                                                    },
                                                    ``
                                                  ),
                                                  ktwsqelTg: `02`,
                                                  layoutId: `w11ynLWIN`,
                                                  name: `Service card`,
                                                  style: { width: `100%` },
                                                  UusAUEY_D: `· Internal Tools`,
                                                  variant: Z(`BxHJwPpuB`),
                                                  VcP5EHT8H: `02 — WEB APPLICATIONS`,
                                                  VjxOfObxW: `· Custom Dashboards`,
                                                  width: `100%`,
                                                  ZHgRaq5yh: `IrIAkxoR0`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        a(N, {
                                          breakpoint: C,
                                          overrides: {
                                            ccwQtvViN: {
                                              width: `max((min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px) / 2, 50px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                1897 +
                                                0 +
                                                0 +
                                                0 +
                                                100 +
                                                172 +
                                                0 +
                                                0 +
                                                0 +
                                                680,
                                            },
                                            sSgoNdsY3: {
                                              width: `max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 50px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                2860 +
                                                0 +
                                                0 +
                                                0 +
                                                60 +
                                                172 +
                                                0 +
                                                0 +
                                                0 +
                                                1360,
                                            },
                                          },
                                          children: a(D, {
                                            height: 680,
                                            width: `max((min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px) / 4, 50px)`,
                                            y:
                                              (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1975 +
                                              0 +
                                              0 +
                                              0 +
                                              100 +
                                              172 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                            children: a(X, {
                                              __framer__animate: { transition: Ar },
                                              __framer__animateOnce: !0,
                                              __framer__enter: Dr,
                                              __framer__styleAppearEffectEnabled: !0,
                                              __framer__threshold: 0,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className: `framer-1uhymrj-container`,
                                              "data-framer-name": `Service card`,
                                              name: `Service card`,
                                              nodeId: `MMwv8yX5O`,
                                              rendersWithMotion: !0,
                                              scopeId: `V2Ho_ZYv2`,
                                              children: a(N, {
                                                breakpoint: C,
                                                overrides: {
                                                  sSgoNdsY3: { variant: Z(`fEm0cFp_t`) },
                                                },
                                                children: a($e, {
                                                  aGEcKnhFG: `· Subscription Platforms`,
                                                  CzcypRbMo: `· MVP Development`,
                                                  height: `100%`,
                                                  id: `MMwv8yX5O`,
                                                  IXrmLZqxg: `Scalable platforms built to launch smoothly, grow confidently, and perform reliably.`,
                                                  k0xEkzzMd: $(
                                                    {
                                                      pixelHeight: 1360,
                                                      pixelWidth: 704,
                                                      src: `../../assets/images/j6AOtFsBTRbwt8x8QOF6brI.png?width=704&height=1360`,
                                                      srcSet: `../../assets/images/j6AOtFsBTRbwt8x8QOF6brI.png 530w,../../assets/images/j6AOtFsBTRbwt8x8QOF6brI.png?width=704&height=1360 704w`,
                                                    },
                                                    ``
                                                  ),
                                                  ktwsqelTg: `03`,
                                                  layoutId: `MMwv8yX5O`,
                                                  name: `Service card`,
                                                  style: { width: `100%` },
                                                  UusAUEY_D: `· Scalable Products`,
                                                  variant: Z(`BxHJwPpuB`),
                                                  VcP5EHT8H: `03 — SAAS PRODUCTS`,
                                                  VjxOfObxW: `· Marketplaces`,
                                                  width: `100%`,
                                                  ZHgRaq5yh: `IrIAkxoR0`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        a(N, {
                                          breakpoint: C,
                                          overrides: {
                                            ccwQtvViN: {
                                              width: `max((min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px) / 2, 50px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                1897 +
                                                0 +
                                                0 +
                                                0 +
                                                100 +
                                                172 +
                                                0 +
                                                0 +
                                                0 +
                                                680,
                                            },
                                            sSgoNdsY3: {
                                              width: `max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 50px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                2860 +
                                                0 +
                                                0 +
                                                0 +
                                                60 +
                                                172 +
                                                0 +
                                                0 +
                                                0 +
                                                2040,
                                            },
                                          },
                                          children: a(D, {
                                            height: 680,
                                            width: `max((min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px) / 4, 50px)`,
                                            y:
                                              (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1975 +
                                              0 +
                                              0 +
                                              0 +
                                              100 +
                                              172 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                            children: a(X, {
                                              __framer__animate: { transition: jr },
                                              __framer__animateOnce: !0,
                                              __framer__enter: Dr,
                                              __framer__styleAppearEffectEnabled: !0,
                                              __framer__threshold: 0,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className: `framer-jl9ufh-container`,
                                              "data-framer-name": `Service card`,
                                              name: `Service card`,
                                              nodeId: `eqOjIHMLW`,
                                              rendersWithMotion: !0,
                                              scopeId: `V2Ho_ZYv2`,
                                              children: a(N, {
                                                breakpoint: C,
                                                overrides: {
                                                  sSgoNdsY3: { variant: Z(`fEm0cFp_t`) },
                                                },
                                                children: a($e, {
                                                  aGEcKnhFG: `· Workflow Automation`,
                                                  CzcypRbMo: `· AI Assistants`,
                                                  height: `100%`,
                                                  id: `eqOjIHMLW`,
                                                  IXrmLZqxg: `Intelligent systems that reduce repetitive work, save time, and improve efficiency.`,
                                                  k0xEkzzMd: $(
                                                    {
                                                      pixelHeight: 1360,
                                                      pixelWidth: 704,
                                                      src: `../../assets/images/LMgcwooknOrFbtZddlelYRZdAY.png?width=704&height=1360`,
                                                      srcSet: `../../assets/images/LMgcwooknOrFbtZddlelYRZdAY.png 530w,../../assets/images/LMgcwooknOrFbtZddlelYRZdAY.png?width=704&height=1360 704w`,
                                                    },
                                                    ``
                                                  ),
                                                  ktwsqelTg: `04`,
                                                  layoutId: `eqOjIHMLW`,
                                                  name: `Service card`,
                                                  style: { width: `100%` },
                                                  UusAUEY_D: `· Process   Optimization`,
                                                  variant: Z(`BxHJwPpuB`),
                                                  VcP5EHT8H: `AI & AUTOMATION`,
                                                  VjxOfObxW: `· Smart Integrations`,
                                                  width: `100%`,
                                                  ZHgRaq5yh: `IrIAkxoR0`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        a(N, {
                                          breakpoint: C,
                                          overrides: {
                                            ccwQtvViN: {
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                1897 +
                                                0 +
                                                0 +
                                                0 +
                                                100 +
                                                172 +
                                                0 +
                                                0 +
                                                -3,
                                            },
                                            sSgoNdsY3: {
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                2860 +
                                                0 +
                                                0 +
                                                0 +
                                                60 +
                                                172 +
                                                0 +
                                                0 +
                                                -3,
                                            },
                                          },
                                          children: a(D, {
                                            height: 6,
                                            width: `6px`,
                                            y:
                                              (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1975 +
                                              0 +
                                              0 +
                                              0 +
                                              100 +
                                              172 +
                                              0 +
                                              0 +
                                              -3,
                                            children: a(w, {
                                              className: `framer-1j2z14z-container`,
                                              "data-framer-name": `Rectangle`,
                                              name: `Rectangle`,
                                              nodeId: `IbU5z4Gaq`,
                                              scopeId: `V2Ho_ZYv2`,
                                              children: a(F, {
                                                height: `100%`,
                                                id: `IbU5z4Gaq`,
                                                layoutId: `IbU5z4Gaq`,
                                                name: `Rectangle`,
                                                style: { height: `100%`, width: `100%` },
                                                variant: Z(`MnvfFSWcm`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        a(N, {
                                          breakpoint: C,
                                          overrides: {
                                            ccwQtvViN: {
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                1897 +
                                                0 +
                                                0 +
                                                0 +
                                                100 +
                                                172 +
                                                0 +
                                                0 +
                                                -3,
                                            },
                                            sSgoNdsY3: {
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                2860 +
                                                0 +
                                                0 +
                                                0 +
                                                60 +
                                                172 +
                                                0 +
                                                0 +
                                                -3,
                                            },
                                          },
                                          children: a(D, {
                                            height: 6,
                                            width: `6px`,
                                            y:
                                              (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1975 +
                                              0 +
                                              0 +
                                              0 +
                                              100 +
                                              172 +
                                              0 +
                                              0 +
                                              -3,
                                            children: a(w, {
                                              className: `framer-nsbmq3-container`,
                                              "data-framer-name": `Rectangle`,
                                              name: `Rectangle`,
                                              nodeId: `Alla5KT1w`,
                                              scopeId: `V2Ho_ZYv2`,
                                              children: a(F, {
                                                height: `100%`,
                                                id: `Alla5KT1w`,
                                                layoutId: `Alla5KT1w`,
                                                name: `Rectangle`,
                                                style: { height: `100%`, width: `100%` },
                                                variant: Z(`MnvfFSWcm`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  a(N, {
                                    breakpoint: C,
                                    overrides: {
                                      ccwQtvViN: {
                                        y:
                                          (h?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          1897 +
                                          0 +
                                          0 +
                                          0 +
                                          100 +
                                          172 +
                                          0 +
                                          1360,
                                      },
                                      sSgoNdsY3: {
                                        width: `calc(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px)`,
                                        y:
                                          (h?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          2860 +
                                          0 +
                                          0 +
                                          0 +
                                          60 +
                                          172 +
                                          0 +
                                          2720,
                                      },
                                    },
                                    children: a(D, {
                                      height: 64,
                                      width: `calc(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px)`,
                                      y:
                                        (h?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        1975 +
                                        0 +
                                        0 +
                                        0 +
                                        100 +
                                        172 +
                                        0 +
                                        680,
                                      children: a(w, {
                                        className: `framer-1k6bxxt-container`,
                                        "data-framer-name": `Pattern`,
                                        name: `Pattern`,
                                        nodeId: `kuC7Zyo2r`,
                                        scopeId: `V2Ho_ZYv2`,
                                        children: a(N, {
                                          breakpoint: C,
                                          overrides: {
                                            ccwQtvViN: { variant: Z(`GGx7sb23r`) },
                                            sSgoNdsY3: { variant: Z(`GGx7sb23r`) },
                                          },
                                          children: a(R, {
                                            height: `100%`,
                                            id: `kuC7Zyo2r`,
                                            layoutId: `kuC7Zyo2r`,
                                            name: `Pattern`,
                                            style: { width: `100%` },
                                            variant: Z(`iE1Txx1gl`),
                                            width: `100%`,
                                          }),
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
                      a(N, {
                        breakpoint: C,
                        overrides: {
                          ccwQtvViN: { y: (h?.y || 0) + 0 + 0 + 0 + 3593 },
                          sSgoNdsY3: { y: (h?.y || 0) + 0 + 0 + 0 + 5876 },
                        },
                        children: a(D, {
                          height: 16,
                          width: h?.width || `100vw`,
                          y: (h?.y || 0) + 0 + 0 + 0 + 2991,
                          children: a(w, {
                            className: `framer-uwbfro-container`,
                            "data-framer-name": `Spacer`,
                            name: `Spacer`,
                            nodeId: `FLmni_wAc`,
                            scopeId: `V2Ho_ZYv2`,
                            children: a(N, {
                              breakpoint: C,
                              overrides: {
                                ccwQtvViN: { variant: Z(`tDRwbo2Hu`) },
                                sSgoNdsY3: { variant: Z(`FfOd6J0WM`) },
                              },
                              children: a(I, {
                                byu2TjtOU: {
                                  borderBottomWidth: 1,
                                  borderColor: `var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1))`,
                                  borderLeftWidth: 0,
                                  borderRightWidth: 0,
                                  borderStyle: `solid`,
                                  borderTopWidth: 1,
                                },
                                height: `100%`,
                                id: `FLmni_wAc`,
                                layoutId: `FLmni_wAc`,
                                name: `Spacer`,
                                style: { height: `100%`, width: `100%` },
                                variant: Z(`hFLhZnXcH`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                      a(`section`, {
                        className: `framer-krm6f7`,
                        "data-framer-name": `Our vision`,
                        id: _e,
                        ref: ve,
                        children: a(`div`, {
                          className: `framer-1l47mrj`,
                          "data-framer-name": `Container`,
                          children: c(`div`, {
                            className: `framer-1oomz4x`,
                            "data-framer-name": `Main wrapper`,
                            children: [
                              c(`div`, {
                                className: `framer-1j9ldtf`,
                                "data-framer-name": `Text wrapper`,
                                children: [
                                  a(N, {
                                    breakpoint: C,
                                    overrides: {
                                      ccwQtvViN: {
                                        y:
                                          (h?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          3609 +
                                          41 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      sSgoNdsY3: {
                                        y:
                                          (h?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          5892 +
                                          207 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                    },
                                    children: a(D, {
                                      height: 20,
                                      y:
                                        (h?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        3007 +
                                        291 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0,
                                      children: a(w, {
                                        className: `framer-s5o4ro-container`,
                                        "data-framer-name": `Section tag`,
                                        name: `Section tag`,
                                        nodeId: `ZBU1nlLPa`,
                                        scopeId: `V2Ho_ZYv2`,
                                        children: a(L, {
                                          height: `100%`,
                                          id: `ZBU1nlLPa`,
                                          layoutId: `ZBU1nlLPa`,
                                          name: `Section tag`,
                                          RRhqTkqTM: `OUR VISION`,
                                          variant: Z(`X6yPU2SuQ`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  c(`div`, {
                                    className: `framer-1pae7k8`,
                                    "data-framer-name": `Heading wrapper`,
                                    children: [
                                      a(x, {
                                        __fromCanvasComponent: !0,
                                        children: a(i, {
                                          children: a(`h2`, {
                                            className: `framer-styles-preset-v5pzc9`,
                                            "data-styles-preset": `MeF89MvDJ`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `center` },
                                            children: `Every product we build`,
                                          }),
                                        }),
                                        className: `framer-183ahdk`,
                                        effect: Pr,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      c(`div`, {
                                        className: `framer-ica858`,
                                        "data-framer-name": `Image wrapper`,
                                        children: [
                                          a(x, {
                                            __fromCanvasComponent: !0,
                                            children: a(i, {
                                              children: a(`h2`, {
                                                className: `framer-styles-preset-v5pzc9`,
                                                "data-styles-preset": `MeF89MvDJ`,
                                                style: { "--framer-text-alignment": `center` },
                                                children: `Starts`,
                                              }),
                                            }),
                                            className: `framer-1klaz6r`,
                                            effect: Fr,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(`div`, {
                                            className: `framer-s7e2r1`,
                                            "data-framer-name": `Image wrapper`,
                                            children: a(N, {
                                              breakpoint: C,
                                              overrides: {
                                                ccwQtvViN: {
                                                  background: {
                                                    alt: `A close-up view of a bright green smartphone lying flat on a surface between two silver devices. The phone screen displays the text 'NOW OR NEVER' in bold black letters`,
                                                    fit: `fill`,
                                                    intrinsicHeight: 1120,
                                                    intrinsicWidth: 1972,
                                                    loading: g(
                                                      (h?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        3609 +
                                                        41 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        44 +
                                                        0 +
                                                        75 +
                                                        0 +
                                                        64 -
                                                        64
                                                    ),
                                                    pixelHeight: 1120,
                                                    pixelWidth: 1972,
                                                    sizes: `140px`,
                                                    src: `../../assets/images/GuHOBpTxib8XjWZUMpt8kKbVEnk.png?width=1972&height=1120`,
                                                    srcSet: `../../assets/images/GuHOBpTxib8XjWZUMpt8kKbVEnk.png 512w,../../assets/images/GuHOBpTxib8XjWZUMpt8kKbVEnk.png?scale-down-to=1024&width=1972&height=1120 1024w,../../assets/images/GuHOBpTxib8XjWZUMpt8kKbVEnk.png?width=1972&height=1120 1972w`,
                                                  },
                                                },
                                                sSgoNdsY3: {
                                                  background: {
                                                    alt: `A close-up view of a bright green smartphone lying flat on a surface between two silver devices. The phone screen displays the text 'NOW OR NEVER' in bold black letters`,
                                                    fit: `fill`,
                                                    intrinsicHeight: 1120,
                                                    intrinsicWidth: 1972,
                                                    loading: g(
                                                      (h?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        5892 +
                                                        207 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        44 +
                                                        0 +
                                                        64 +
                                                        0 +
                                                        64 -
                                                        64
                                                    ),
                                                    pixelHeight: 1120,
                                                    pixelWidth: 1972,
                                                    sizes: `140px`,
                                                    src: `../../assets/images/GuHOBpTxib8XjWZUMpt8kKbVEnk.png?width=1972&height=1120`,
                                                    srcSet: `../../assets/images/GuHOBpTxib8XjWZUMpt8kKbVEnk.png 512w,../../assets/images/GuHOBpTxib8XjWZUMpt8kKbVEnk.png?scale-down-to=1024&width=1972&height=1120 1024w,../../assets/images/GuHOBpTxib8XjWZUMpt8kKbVEnk.png?width=1972&height=1120 1972w`,
                                                  },
                                                },
                                              },
                                              children: a(A, {
                                                background: {
                                                  alt: `A close-up view of a bright green smartphone lying flat on a surface between two silver devices. The phone screen displays the text 'NOW OR NEVER' in bold black letters`,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1120,
                                                  intrinsicWidth: 1972,
                                                  loading: g(
                                                    (h?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      3007 +
                                                      291 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      44 +
                                                      0 +
                                                      75 +
                                                      0 +
                                                      64 -
                                                      64
                                                  ),
                                                  pixelHeight: 1120,
                                                  pixelWidth: 1972,
                                                  sizes: `140px`,
                                                  src: `../../assets/images/GuHOBpTxib8XjWZUMpt8kKbVEnk.png?width=1972&height=1120`,
                                                  srcSet: `../../assets/images/GuHOBpTxib8XjWZUMpt8kKbVEnk.png 512w,../../assets/images/GuHOBpTxib8XjWZUMpt8kKbVEnk.png?scale-down-to=1024&width=1972&height=1120 1024w,../../assets/images/GuHOBpTxib8XjWZUMpt8kKbVEnk.png?width=1972&height=1120 1972w`,
                                                },
                                                className: `framer-198kf36`,
                                                "data-framer-name": `Work Merger Image`,
                                              }),
                                            }),
                                          }),
                                          a(x, {
                                            __fromCanvasComponent: !0,
                                            children: a(i, {
                                              children: a(`h2`, {
                                                className: `framer-styles-preset-v5pzc9`,
                                                "data-styles-preset": `MeF89MvDJ`,
                                                style: { "--framer-text-alignment": `center` },
                                                children: `with a`,
                                              }),
                                            }),
                                            className: `framer-p14oup`,
                                            effect: Ir,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      a(x, {
                                        __fromCanvasComponent: !0,
                                        children: a(i, {
                                          children: a(`h2`, {
                                            className: `framer-styles-preset-v5pzc9`,
                                            "data-styles-preset": `MeF89MvDJ`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `center` },
                                            children: `clear understanding of your business and users`,
                                          }),
                                        }),
                                        className: `framer-1vbt33u`,
                                        effect: Lr,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              a(x, {
                                __fromCanvasComponent: !0,
                                children: a(i, {
                                  children: a(`p`, {
                                    className: `framer-styles-preset-1jbobve`,
                                    "data-styles-preset": `Gh1KQz4jn`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `center` },
                                    children: `“We combine strategy, design, and engineering to create digital products that solve real problems and deliver lasting value.”`,
                                  }),
                                }),
                                className: `framer-ze3p5a`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        }),
                      }),
                      a(N, {
                        breakpoint: C,
                        overrides: {
                          ccwQtvViN: { y: (h?.y || 0) + 0 + 0 + 0 + 4109 },
                          sSgoNdsY3: { y: (h?.y || 0) + 0 + 0 + 0 + 6692 },
                        },
                        children: a(D, {
                          height: 16,
                          width: h?.width || `100vw`,
                          y: (h?.y || 0) + 0 + 0 + 0 + 4007,
                          children: a(w, {
                            className: `framer-1yzdffz-container`,
                            "data-framer-name": `Spacer`,
                            name: `Spacer`,
                            nodeId: `Zz6QVBQ41`,
                            scopeId: `V2Ho_ZYv2`,
                            children: a(N, {
                              breakpoint: C,
                              overrides: {
                                ccwQtvViN: { variant: Z(`tDRwbo2Hu`) },
                                sSgoNdsY3: { variant: Z(`FfOd6J0WM`) },
                              },
                              children: a(I, {
                                byu2TjtOU: {
                                  borderBottomWidth: 1,
                                  borderColor: `var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1))`,
                                  borderLeftWidth: 0,
                                  borderRightWidth: 0,
                                  borderStyle: `solid`,
                                  borderTopWidth: 1,
                                },
                                height: `100%`,
                                id: `Zz6QVBQ41`,
                                layoutId: `Zz6QVBQ41`,
                                name: `Spacer`,
                                style: { height: `100%`, width: `100%` },
                                variant: Z(`hFLhZnXcH`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                      a(`div`, {
                        className: `framer-idy34x`,
                        "data-border": !0,
                        "data-framer-name": `Process`,
                        children: a(`div`, {
                          className: `framer-1wj5d6w`,
                          "data-framer-name": `Container`,
                          children: c(`div`, {
                            className: `framer-14h8yx0`,
                            "data-framer-name": `Main wrapper`,
                            children: [
                              c(`div`, {
                                className: `framer-1wx75ui`,
                                "data-framer-name": `Wrapper`,
                                children: [
                                  c(`div`, {
                                    className: `framer-7aiy3c`,
                                    "data-framer-name": `Text wrapper`,
                                    children: [
                                      c(`div`, {
                                        className: `framer-qtm9ps`,
                                        "data-framer-name": `Heading wrapper`,
                                        children: [
                                          a(N, {
                                            breakpoint: C,
                                            overrides: {
                                              ccwQtvViN: {
                                                y:
                                                  (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  4125 +
                                                  0 +
                                                  0 +
                                                  100 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                              sSgoNdsY3: {
                                                y:
                                                  (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  6708 +
                                                  0 +
                                                  0 +
                                                  60 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            children: a(D, {
                                              height: 20,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                4023 +
                                                0 +
                                                0 +
                                                100 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                              children: a(w, {
                                                className: `framer-199easw-container`,
                                                "data-framer-name": `Section tag`,
                                                name: `Section tag`,
                                                nodeId: `udHv2UDub`,
                                                scopeId: `V2Ho_ZYv2`,
                                                children: a(L, {
                                                  height: `100%`,
                                                  id: `udHv2UDub`,
                                                  layoutId: `udHv2UDub`,
                                                  name: `Section tag`,
                                                  RRhqTkqTM: `PROCESS`,
                                                  variant: Z(`HiPT_1Fkc`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          a(Fn, {
                                            __framer__animate: { transition: Rr },
                                            __framer__animateOnce: !0,
                                            __framer__enter: lr,
                                            __framer__exit: zr,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0,
                                            __fromCanvasComponent: !0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            children: a(i, {
                                              children: a(`h2`, {
                                                className: `framer-styles-preset-v5pzc9`,
                                                "data-styles-preset": `MeF89MvDJ`,
                                                dir: `auto`,
                                                children: `A Clear Process, From Idea to Launch`,
                                              }),
                                            }),
                                            className: `framer-sz10d6`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      c(`div`, {
                                        className: `framer-p66l87`,
                                        "data-framer-name": `Button wrapper`,
                                        children: [
                                          a(x, {
                                            __fromCanvasComponent: !0,
                                            children: a(i, {
                                              children: a(`p`, {
                                                className: `framer-styles-preset-1jbobve`,
                                                "data-styles-preset": `Gh1KQz4jn`,
                                                dir: `auto`,
                                                children: `“Every step is transparent, collaborative, and focused on delivering the right   outcome.”`,
                                              }),
                                            }),
                                            className: `framer-v1xfly`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(j, {
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
                                            ],
                                            children: (e) =>
                                              a(N, {
                                                breakpoint: C,
                                                overrides: {
                                                  ccwQtvViN: {
                                                    y:
                                                      (h?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      4125 +
                                                      0 +
                                                      0 +
                                                      100 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      292 +
                                                      0 +
                                                      132,
                                                  },
                                                  sSgoNdsY3: {
                                                    y:
                                                      (h?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      6708 +
                                                      0 +
                                                      0 +
                                                      60 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      208 +
                                                      0 +
                                                      144,
                                                  },
                                                },
                                                children: a(D, {
                                                  height: 65,
                                                  y:
                                                    (h?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    4023 +
                                                    0 +
                                                    0 +
                                                    100 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    296 +
                                                    0 +
                                                    144,
                                                  children: a(w, {
                                                    className: `framer-vha39s-container`,
                                                    "data-framer-name": `Button`,
                                                    name: `Button`,
                                                    nodeId: `oyEcIvWsX`,
                                                    scopeId: `V2Ho_ZYv2`,
                                                    children: a(N, {
                                                      breakpoint: C,
                                                      overrides: {
                                                        ccwQtvViN: { onAebNiVo: e[1] },
                                                        sSgoNdsY3: {
                                                          onAebNiVo: e[2],
                                                          variant: Z(`EfkfLrwUV`),
                                                        },
                                                      },
                                                      children: a(Le, {
                                                        height: `100%`,
                                                        id: `oyEcIvWsX`,
                                                        layoutId: `oyEcIvWsX`,
                                                        name: `Button`,
                                                        onAebNiVo: e[0],
                                                        variant: Z(`lUKNreusf`),
                                                        W2IqI_Cqf: `Start a Project`,
                                                        width: `100%`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  c(`div`, {
                                    className: `framer-1akkj6i`,
                                    "data-framer-name": `Right Side wrapper`,
                                    children: [
                                      c(`div`, {
                                        className: `framer-v8rr17`,
                                        "data-framer-name": `Discover card`,
                                        children: [
                                          a(N, {
                                            breakpoint: C,
                                            overrides: { sSgoNdsY3: { "data-border": !0 } },
                                            children: c(`div`, {
                                              className: `framer-1nifr6f`,
                                              "data-framer-name": `Top wrapper`,
                                              children: [
                                                c(`div`, {
                                                  className: `framer-1tgmtrt`,
                                                  "data-framer-name": `White color`,
                                                  children: [
                                                    c(`div`, {
                                                      className: `framer-11hkxwa`,
                                                      "data-framer-name": `Top wrapper`,
                                                      children: [
                                                        a(N, {
                                                          breakpoint: C,
                                                          overrides: {
                                                            ccwQtvViN: {
                                                              y:
                                                                (h?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                4125 +
                                                                0 +
                                                                0 +
                                                                100 +
                                                                0 +
                                                                0 +
                                                                529 +
                                                                0 +
                                                                0 +
                                                                16 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                54 +
                                                                0 +
                                                                0,
                                                            },
                                                            sSgoNdsY3: {
                                                              y:
                                                                (h?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                6708 +
                                                                0 +
                                                                0 +
                                                                60 +
                                                                0 +
                                                                0 +
                                                                517 +
                                                                0 +
                                                                0 +
                                                                16 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                54 +
                                                                0 +
                                                                0,
                                                            },
                                                          },
                                                          children: a(D, {
                                                            height: 59,
                                                            y:
                                                              (h?.y || 0) +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              4023 +
                                                              0 +
                                                              0 +
                                                              100 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              16 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              54 +
                                                              0 +
                                                              0,
                                                            children: a(w, {
                                                              className: `framer-118lpw7-container`,
                                                              "data-framer-name": `Process buton`,
                                                              name: `Process buton`,
                                                              nodeId: `EYjQWGfZK`,
                                                              scopeId: `V2Ho_ZYv2`,
                                                              children: a(N, {
                                                                breakpoint: C,
                                                                overrides: {
                                                                  sSgoNdsY3: {
                                                                    kyUAnXj1U: `17px 48px 17px 48px`,
                                                                  },
                                                                },
                                                                children: a(B, {
                                                                  height: `100%`,
                                                                  id: `EYjQWGfZK`,
                                                                  kyUAnXj1U: `17px 58px 17px 59px`,
                                                                  layoutId: `EYjQWGfZK`,
                                                                  name: `Process buton`,
                                                                  variant: Z(`en_wtLTGh`),
                                                                  width: `100%`,
                                                                  YTeJVCq8y: `Goals`,
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                        ye() &&
                                                          a(N, {
                                                            breakpoint: C,
                                                            overrides: {
                                                              ccwQtvViN: {
                                                                y:
                                                                  (h?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  4125 +
                                                                  0 +
                                                                  0 +
                                                                  100 +
                                                                  0 +
                                                                  0 +
                                                                  529 +
                                                                  0 +
                                                                  0 +
                                                                  16 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  54 +
                                                                  0 +
                                                                  0,
                                                              },
                                                            },
                                                            children: a(D, {
                                                              height: 59,
                                                              y:
                                                                (h?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                4023 +
                                                                0 +
                                                                0 +
                                                                100 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                16 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                54 +
                                                                0 +
                                                                0,
                                                              children: a(w, {
                                                                className: `framer-4v41ov-container hidden-2x37tr`,
                                                                "data-framer-name": `Process buton`,
                                                                name: `Process buton`,
                                                                nodeId: `la1kGR28G`,
                                                                scopeId: `V2Ho_ZYv2`,
                                                                children: a(N, {
                                                                  breakpoint: C,
                                                                  overrides: {
                                                                    ccwQtvViN: {
                                                                      kyUAnXj1U: `8px 12px 8px 12px`,
                                                                    },
                                                                  },
                                                                  children: a(B, {
                                                                    height: `100%`,
                                                                    id: `la1kGR28G`,
                                                                    kyUAnXj1U: `16px 58px 16px 59px`,
                                                                    layoutId: `la1kGR28G`,
                                                                    name: `Process buton`,
                                                                    variant: Z(`EZSOclPaX`),
                                                                    width: `100%`,
                                                                    YTeJVCq8y: `Goals`,
                                                                  }),
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                      ],
                                                    }),
                                                    c(`div`, {
                                                      className: `framer-10y1nss`,
                                                      "data-framer-name": `Center wrapper`,
                                                      children: [
                                                        ye() &&
                                                          a(N, {
                                                            breakpoint: C,
                                                            overrides: {
                                                              ccwQtvViN: {
                                                                y:
                                                                  (h?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  4125 +
                                                                  0 +
                                                                  0 +
                                                                  100 +
                                                                  0 +
                                                                  0 +
                                                                  529 +
                                                                  0 +
                                                                  0 +
                                                                  16 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  54 +
                                                                  69 +
                                                                  0,
                                                              },
                                                            },
                                                            children: a(D, {
                                                              height: 59,
                                                              y:
                                                                (h?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                4023 +
                                                                0 +
                                                                0 +
                                                                100 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                16 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                54 +
                                                                69 +
                                                                0,
                                                              children: a(w, {
                                                                className: `framer-tdw9oj-container hidden-2x37tr`,
                                                                nodeId: `mKCmn7v6p`,
                                                                scopeId: `V2Ho_ZYv2`,
                                                                children: a(N, {
                                                                  breakpoint: C,
                                                                  overrides: {
                                                                    ccwQtvViN: {
                                                                      kyUAnXj1U: `16px 20px 8px 20px`,
                                                                    },
                                                                  },
                                                                  children: a(B, {
                                                                    height: `100%`,
                                                                    id: `mKCmn7v6p`,
                                                                    kyUAnXj1U: `16px 58px 16px 59px`,
                                                                    layoutId: `mKCmn7v6p`,
                                                                    variant: Z(`EZSOclPaX`),
                                                                    width: `100%`,
                                                                    YTeJVCq8y: `Goals`,
                                                                  }),
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                        a(N, {
                                                          breakpoint: C,
                                                          overrides: {
                                                            ccwQtvViN: {
                                                              y:
                                                                (h?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                4125 +
                                                                0 +
                                                                0 +
                                                                100 +
                                                                0 +
                                                                0 +
                                                                529 +
                                                                0 +
                                                                0 +
                                                                16 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                54 +
                                                                69 +
                                                                0,
                                                            },
                                                            sSgoNdsY3: {
                                                              y:
                                                                (h?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                6708 +
                                                                0 +
                                                                0 +
                                                                60 +
                                                                0 +
                                                                0 +
                                                                517 +
                                                                0 +
                                                                0 +
                                                                16 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                54 +
                                                                69 +
                                                                0,
                                                            },
                                                          },
                                                          children: a(D, {
                                                            height: 59,
                                                            y:
                                                              (h?.y || 0) +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              4023 +
                                                              0 +
                                                              0 +
                                                              100 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              16 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              54 +
                                                              69 +
                                                              0,
                                                            children: a(w, {
                                                              className: `framer-18ozkq2-container`,
                                                              nodeId: `YOd7tiC4A`,
                                                              scopeId: `V2Ho_ZYv2`,
                                                              children: a(N, {
                                                                breakpoint: C,
                                                                overrides: {
                                                                  ccwQtvViN: {
                                                                    kyUAnXj1U: `20px 46px 20px 46px`,
                                                                  },
                                                                },
                                                                children: a(B, {
                                                                  height: `100%`,
                                                                  id: `YOd7tiC4A`,
                                                                  kyUAnXj1U: `17px 36px 17px 36px`,
                                                                  layoutId: `YOd7tiC4A`,
                                                                  variant: Z(`dUHCg2RfB`),
                                                                  width: `100%`,
                                                                  YTeJVCq8y: `Challenges`,
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                        ye() &&
                                                          a(N, {
                                                            breakpoint: C,
                                                            overrides: {
                                                              ccwQtvViN: {
                                                                y:
                                                                  (h?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  4125 +
                                                                  0 +
                                                                  0 +
                                                                  100 +
                                                                  0 +
                                                                  0 +
                                                                  529 +
                                                                  0 +
                                                                  0 +
                                                                  16 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  54 +
                                                                  69 +
                                                                  0,
                                                              },
                                                            },
                                                            children: a(D, {
                                                              height: 59,
                                                              y:
                                                                (h?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                4023 +
                                                                0 +
                                                                0 +
                                                                100 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                16 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                54 +
                                                                69 +
                                                                0,
                                                              children: a(w, {
                                                                className: `framer-1yovkyz-container hidden-2x37tr`,
                                                                nodeId: `Zo7_pBPiq`,
                                                                scopeId: `V2Ho_ZYv2`,
                                                                children: a(N, {
                                                                  breakpoint: C,
                                                                  overrides: {
                                                                    ccwQtvViN: {
                                                                      kyUAnXj1U: `8px 20px 8px 20px`,
                                                                    },
                                                                  },
                                                                  children: a(B, {
                                                                    height: `100%`,
                                                                    id: `Zo7_pBPiq`,
                                                                    kyUAnXj1U: `16px 58px 16px 59px`,
                                                                    layoutId: `Zo7_pBPiq`,
                                                                    variant: Z(`EZSOclPaX`),
                                                                    width: `100%`,
                                                                    YTeJVCq8y: `Goals`,
                                                                  }),
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                      ],
                                                    }),
                                                    c(`div`, {
                                                      className: `framer-15wawgb`,
                                                      "data-framer-name": `Bottom wrapper`,
                                                      children: [
                                                        ye() &&
                                                          a(N, {
                                                            breakpoint: C,
                                                            overrides: {
                                                              ccwQtvViN: {
                                                                y:
                                                                  (h?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  4125 +
                                                                  0 +
                                                                  0 +
                                                                  100 +
                                                                  0 +
                                                                  0 +
                                                                  529 +
                                                                  0 +
                                                                  0 +
                                                                  16 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  54 +
                                                                  138 +
                                                                  0,
                                                              },
                                                            },
                                                            children: a(D, {
                                                              height: 59,
                                                              y:
                                                                (h?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                4023 +
                                                                0 +
                                                                0 +
                                                                100 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                16 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                54 +
                                                                138 +
                                                                0,
                                                              children: a(w, {
                                                                className: `framer-b6y0t-container hidden-2x37tr`,
                                                                nodeId: `Fv6MZzqKD`,
                                                                scopeId: `V2Ho_ZYv2`,
                                                                children: a(B, {
                                                                  height: `100%`,
                                                                  id: `Fv6MZzqKD`,
                                                                  kyUAnXj1U: `16px 58px 16px 59px`,
                                                                  layoutId: `Fv6MZzqKD`,
                                                                  variant: Z(`EZSOclPaX`),
                                                                  width: `100%`,
                                                                  YTeJVCq8y: `Goals`,
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                        a(N, {
                                                          breakpoint: C,
                                                          overrides: {
                                                            ccwQtvViN: {
                                                              y:
                                                                (h?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                4125 +
                                                                0 +
                                                                0 +
                                                                100 +
                                                                0 +
                                                                0 +
                                                                529 +
                                                                0 +
                                                                0 +
                                                                16 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                54 +
                                                                138 +
                                                                0,
                                                            },
                                                            sSgoNdsY3: {
                                                              y:
                                                                (h?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                6708 +
                                                                0 +
                                                                0 +
                                                                60 +
                                                                0 +
                                                                0 +
                                                                517 +
                                                                0 +
                                                                0 +
                                                                16 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                54 +
                                                                138 +
                                                                0,
                                                            },
                                                          },
                                                          children: a(D, {
                                                            height: 59,
                                                            y:
                                                              (h?.y || 0) +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              4023 +
                                                              0 +
                                                              0 +
                                                              100 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              16 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              54 +
                                                              138 +
                                                              0,
                                                            children: a(w, {
                                                              className: `framer-cef0yr-container`,
                                                              nodeId: `jem82lN92`,
                                                              scopeId: `V2Ho_ZYv2`,
                                                              children: a(N, {
                                                                breakpoint: C,
                                                                overrides: {
                                                                  ccwQtvViN: {
                                                                    kyUAnXj1U: `20px 58px 20px 58px`,
                                                                  },
                                                                  sSgoNdsY3: {
                                                                    kyUAnXj1U: `16px 38px 16px 38px`,
                                                                  },
                                                                },
                                                                children: a(B, {
                                                                  height: `100%`,
                                                                  id: `jem82lN92`,
                                                                  kyUAnXj1U: `20px 58px 21px 59px`,
                                                                  layoutId: `jem82lN92`,
                                                                  variant: Z(`pWYKd9DWS`),
                                                                  width: `100%`,
                                                                  YTeJVCq8y: `Audiences`,
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                a(N, {
                                                  breakpoint: C,
                                                  overrides: {
                                                    ccwQtvViN: {
                                                      background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        loading: g(
                                                          (h?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            4125 +
                                                            0 +
                                                            0 +
                                                            100 +
                                                            0 +
                                                            0 +
                                                            529 +
                                                            0 +
                                                            0 +
                                                            16 +
                                                            0 +
                                                            314 -
                                                            100
                                                        ),
                                                        pixelHeight: 160,
                                                        pixelWidth: 185,
                                                        sizes: `100px`,
                                                        src: `../../assets/images/51HTSjQnLFaFNz7qQKEKwZvIW2E.png`,
                                                      },
                                                    },
                                                    sSgoNdsY3: {
                                                      background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        loading: g(
                                                          (h?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            6708 +
                                                            0 +
                                                            0 +
                                                            60 +
                                                            0 +
                                                            0 +
                                                            517 +
                                                            0 +
                                                            0 +
                                                            16 +
                                                            0 +
                                                            314 -
                                                            106
                                                        ),
                                                        pixelHeight: 160,
                                                        pixelWidth: 185,
                                                        sizes: `96px`,
                                                        src: `../../assets/images/51HTSjQnLFaFNz7qQKEKwZvIW2E.png`,
                                                      },
                                                    },
                                                  },
                                                  children: a(A, {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      loading: g(
                                                        (h?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          4023 +
                                                          0 +
                                                          0 +
                                                          100 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          16 +
                                                          0 +
                                                          314 -
                                                          144
                                                      ),
                                                      pixelHeight: 160,
                                                      pixelWidth: 185,
                                                      sizes: `149px`,
                                                      src: `../../assets/images/51HTSjQnLFaFNz7qQKEKwZvIW2E.png`,
                                                    },
                                                    className: `framer-a80pro`,
                                                    "data-framer-name": `Image`,
                                                  }),
                                                }),
                                              ],
                                            }),
                                          }),
                                          a(N, {
                                            breakpoint: C,
                                            overrides: {
                                              ccwQtvViN: {
                                                width: `calc(max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 1px) - 124px)`,
                                                y:
                                                  (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  4125 +
                                                  0 +
                                                  0 +
                                                  100 +
                                                  0 +
                                                  0 +
                                                  529 +
                                                  0 +
                                                  0 +
                                                  16 +
                                                  339,
                                              },
                                              sSgoNdsY3: {
                                                width: `calc(min(max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 1px), 636px) - 56px)`,
                                                y:
                                                  (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  6708 +
                                                  0 +
                                                  0 +
                                                  60 +
                                                  0 +
                                                  0 +
                                                  517 +
                                                  0 +
                                                  0 +
                                                  16 +
                                                  330,
                                              },
                                            },
                                            children: a(D, {
                                              height: 90,
                                              width: `calc(min(max((max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 1px) - 236px) / 2, 1px), 636px) - 32px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                4023 +
                                                0 +
                                                0 +
                                                100 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                16 +
                                                339,
                                              children: a(w, {
                                                className: `framer-1cfanz5-container`,
                                                nodeId: `LEo9gMImu`,
                                                scopeId: `V2Ho_ZYv2`,
                                                children: a(rt, {
                                                  height: `100%`,
                                                  id: `LEo9gMImu`,
                                                  layoutId: `LEo9gMImu`,
                                                  mEnN89w5K: `We begin by understanding your workflows, business goals, and operational challenges to identify automation opportunities.`,
                                                  pB11N2TiQ: `//01`,
                                                  qmQbSFRRn: `Analyze & Discover`,
                                                  style: { width: `100%` },
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      c(`div`, {
                                        className: `framer-6vntzn`,
                                        "data-framer-name": `Strategy card`,
                                        children: [
                                          a(`div`, {
                                            className: `framer-fq2g58`,
                                            "data-framer-name": `Top wrapper`,
                                            children: c(`div`, {
                                              className: `framer-awxv4w`,
                                              "data-framer-name": `White color`,
                                              children: [
                                                a(N, {
                                                  breakpoint: C,
                                                  overrides: {
                                                    ccwQtvViN: {
                                                      y:
                                                        (h?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        4125 +
                                                        0 +
                                                        0 +
                                                        100 +
                                                        0 +
                                                        0 +
                                                        529 +
                                                        0 +
                                                        501 +
                                                        16 +
                                                        0 +
                                                        0 +
                                                        130.5,
                                                    },
                                                    sSgoNdsY3: {
                                                      y:
                                                        (h?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        6708 +
                                                        0 +
                                                        0 +
                                                        60 +
                                                        0 +
                                                        0 +
                                                        517 +
                                                        0 +
                                                        492 +
                                                        16 +
                                                        0 +
                                                        0 +
                                                        130.5,
                                                    },
                                                  },
                                                  children: a(D, {
                                                    height: 59,
                                                    y:
                                                      (h?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      4023 +
                                                      0 +
                                                      0 +
                                                      100 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      501 +
                                                      16 +
                                                      0 +
                                                      0 +
                                                      130.5,
                                                    children: a(w, {
                                                      className: `framer-1xa24jq-container`,
                                                      "data-framer-name": `Process button`,
                                                      id: `1xa24jq`,
                                                      name: `Process button`,
                                                      nodeId: `mHfabRG_I`,
                                                      scopeId: `V2Ho_ZYv2`,
                                                      children: a(N, {
                                                        breakpoint: C,
                                                        overrides: {
                                                          ccwQtvViN: {
                                                            kyUAnXj1U: `16px 38px 16px 39px`,
                                                          },
                                                          sSgoNdsY3: {
                                                            kyUAnXj1U: `16px 10px 16px 10px`,
                                                          },
                                                        },
                                                        children: a(B, {
                                                          height: `100%`,
                                                          id: `mHfabRG_I`,
                                                          kyUAnXj1U: `16px 20px 16px 20px`,
                                                          layoutId: `mHfabRG_I`,
                                                          name: `Process button`,
                                                          variant: Z(`yrCT3wx41`),
                                                          width: `100%`,
                                                          YTeJVCq8y: `Onboarding screens`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                                c(`div`, {
                                                  className: `framer-h74gcn`,
                                                  children: [
                                                    a(`div`, {
                                                      className: `framer-vh0kum`,
                                                      "data-framer-name": `Frame`,
                                                    }),
                                                    a(`div`, {
                                                      className: `framer-172jfwm`,
                                                      "data-framer-name": `Frame`,
                                                    }),
                                                  ],
                                                }),
                                                a(`div`, {
                                                  className: `framer-6on96k`,
                                                  children: a(`div`, {
                                                    className: `framer-xcj65j`,
                                                  }),
                                                }),
                                                a(N, {
                                                  breakpoint: C,
                                                  overrides: {
                                                    ccwQtvViN: {
                                                      background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        loading: g(
                                                          (h?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            4125 +
                                                            0 +
                                                            0 +
                                                            100 +
                                                            0 +
                                                            0 +
                                                            529 +
                                                            0 +
                                                            501 +
                                                            16 +
                                                            0 +
                                                            0 +
                                                            155
                                                        ),
                                                        pixelHeight: 87,
                                                        pixelWidth: 56,
                                                        sizes: `50px`,
                                                        src: `../../assets/images/uWI2MWvMjOfRJj5PUrQGUivXQuQ.png`,
                                                      },
                                                    },
                                                    sSgoNdsY3: {
                                                      background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        loading: g(
                                                          (h?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            6708 +
                                                            0 +
                                                            0 +
                                                            60 +
                                                            0 +
                                                            0 +
                                                            517 +
                                                            0 +
                                                            492 +
                                                            16 +
                                                            0 +
                                                            0 +
                                                            160
                                                        ),
                                                        pixelHeight: 87,
                                                        pixelWidth: 56,
                                                        sizes: `20px`,
                                                        src: `../../assets/images/uWI2MWvMjOfRJj5PUrQGUivXQuQ.png`,
                                                      },
                                                    },
                                                  },
                                                  children: a(A, {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      loading: g(
                                                        (h?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          4023 +
                                                          0 +
                                                          0 +
                                                          100 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          501 +
                                                          16 +
                                                          0 +
                                                          0 +
                                                          156
                                                      ),
                                                      pixelHeight: 87,
                                                      pixelWidth: 56,
                                                      sizes: `50px`,
                                                      src: `../../assets/images/uWI2MWvMjOfRJj5PUrQGUivXQuQ.png`,
                                                    },
                                                    className: `framer-h8gwtp`,
                                                  }),
                                                }),
                                                a(N, {
                                                  breakpoint: C,
                                                  overrides: {
                                                    ccwQtvViN: {
                                                      background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        loading: g(
                                                          (h?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            4125 +
                                                            0 +
                                                            0 +
                                                            100 +
                                                            0 +
                                                            0 +
                                                            529 +
                                                            0 +
                                                            501 +
                                                            16 +
                                                            0 +
                                                            0 +
                                                            103.5
                                                        ),
                                                        pixelHeight: 54,
                                                        pixelWidth: 56,
                                                        sizes: `52px`,
                                                        src: `../../assets/images/FnhLLQduX7Hm74jGsx7QrO00tM.png`,
                                                      },
                                                    },
                                                    sSgoNdsY3: {
                                                      background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        loading: g(
                                                          (h?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            6708 +
                                                            0 +
                                                            0 +
                                                            60 +
                                                            0 +
                                                            0 +
                                                            517 +
                                                            0 +
                                                            492 +
                                                            16 +
                                                            0 +
                                                            0 +
                                                            53.5
                                                        ),
                                                        pixelHeight: 54,
                                                        pixelWidth: 56,
                                                        sizes: `52px`,
                                                        src: `../../assets/images/FnhLLQduX7Hm74jGsx7QrO00tM.png`,
                                                      },
                                                    },
                                                  },
                                                  children: a(A, {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      loading: g(
                                                        (h?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          4023 +
                                                          0 +
                                                          0 +
                                                          100 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          501 +
                                                          16 +
                                                          0 +
                                                          0 +
                                                          103.5
                                                      ),
                                                      pixelHeight: 54,
                                                      pixelWidth: 56,
                                                      sizes: `52px`,
                                                      src: `../../assets/images/FnhLLQduX7Hm74jGsx7QrO00tM.png`,
                                                    },
                                                    className: `framer-1grv8cg`,
                                                  }),
                                                }),
                                                a(N, {
                                                  breakpoint: C,
                                                  overrides: {
                                                    ccwQtvViN: {
                                                      background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        loading: g(
                                                          (h?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            4125 +
                                                            0 +
                                                            0 +
                                                            100 +
                                                            0 +
                                                            0 +
                                                            529 +
                                                            0 +
                                                            501 +
                                                            16 +
                                                            0 +
                                                            0 +
                                                            60
                                                        ),
                                                        pixelHeight: 194,
                                                        pixelWidth: 40,
                                                        sizes: `35px`,
                                                        src: `../../assets/images/ArRhr5UCsel5AcnbYxxoRrt7hM8.png`,
                                                      },
                                                    },
                                                    sSgoNdsY3: {
                                                      background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        loading: g(
                                                          (h?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            6708 +
                                                            0 +
                                                            0 +
                                                            60 +
                                                            0 +
                                                            0 +
                                                            517 +
                                                            0 +
                                                            492 +
                                                            16 +
                                                            0 +
                                                            0 +
                                                            86
                                                        ),
                                                        pixelHeight: 194,
                                                        pixelWidth: 40,
                                                        sizes: `15px`,
                                                        src: `../../assets/images/ArRhr5UCsel5AcnbYxxoRrt7hM8.png`,
                                                      },
                                                    },
                                                  },
                                                  children: a(A, {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      loading: g(
                                                        (h?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          4023 +
                                                          0 +
                                                          0 +
                                                          100 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          501 +
                                                          16 +
                                                          0 +
                                                          0 +
                                                          56.5
                                                      ),
                                                      pixelHeight: 194,
                                                      pixelWidth: 40,
                                                      sizes: `35px`,
                                                      src: `../../assets/images/ArRhr5UCsel5AcnbYxxoRrt7hM8.png`,
                                                    },
                                                    className: `framer-9uu10n`,
                                                  }),
                                                }),
                                                ye() &&
                                                  a(N, {
                                                    breakpoint: C,
                                                    overrides: {
                                                      ccwQtvViN: {
                                                        background: {
                                                          alt: ``,
                                                          fit: `fill`,
                                                          loading: g(
                                                            (h?.y || 0) +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              4125 +
                                                              0 +
                                                              0 +
                                                              100 +
                                                              0 +
                                                              0 +
                                                              529 +
                                                              0 +
                                                              501 +
                                                              16 +
                                                              0 +
                                                              0 +
                                                              60
                                                          ),
                                                          pixelHeight: 54,
                                                          pixelWidth: 40,
                                                          sizes: `36px`,
                                                          src: `../../assets/images/1uYEHQc2n3dIuZ15A25S8ryJE.png`,
                                                        },
                                                      },
                                                    },
                                                    children: a(A, {
                                                      background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        loading: g(
                                                          (h?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            4023 +
                                                            0 +
                                                            0 +
                                                            100 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            501 +
                                                            16 +
                                                            0 +
                                                            0 +
                                                            56
                                                        ),
                                                        pixelHeight: 54,
                                                        pixelWidth: 40,
                                                        sizes: `40px`,
                                                        src: `../../assets/images/1uYEHQc2n3dIuZ15A25S8ryJE.png`,
                                                      },
                                                      className: `framer-1lcunl hidden-2x37tr`,
                                                    }),
                                                  }),
                                              ],
                                            }),
                                          }),
                                          a(N, {
                                            breakpoint: C,
                                            overrides: {
                                              ccwQtvViN: {
                                                width: `calc(max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 1px) - 124px)`,
                                                y:
                                                  (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  4125 +
                                                  0 +
                                                  0 +
                                                  100 +
                                                  0 +
                                                  0 +
                                                  529 +
                                                  0 +
                                                  501 +
                                                  16 +
                                                  345,
                                              },
                                              sSgoNdsY3: {
                                                width: `calc(min(max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 1px), 636px) - 56px)`,
                                                y:
                                                  (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  6708 +
                                                  0 +
                                                  0 +
                                                  60 +
                                                  0 +
                                                  0 +
                                                  517 +
                                                  0 +
                                                  492 +
                                                  16 +
                                                  336,
                                              },
                                            },
                                            children: a(D, {
                                              height: 90,
                                              width: `calc(min(max((max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 1px) - 236px) / 2, 1px), 636px) - 32px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                4023 +
                                                0 +
                                                0 +
                                                100 +
                                                0 +
                                                0 +
                                                0 +
                                                501 +
                                                16 +
                                                345,
                                              children: a(w, {
                                                className: `framer-9qlw2g-container`,
                                                nodeId: `IIoyeThsO`,
                                                scopeId: `V2Ho_ZYv2`,
                                                children: a(rt, {
                                                  height: `100%`,
                                                  id: `IIoyeThsO`,
                                                  layoutId: `IIoyeThsO`,
                                                  mEnN89w5K: `We define the right AI solutions, automation systems, and workflows tailored to your business needs.`,
                                                  pB11N2TiQ: `//02`,
                                                  qmQbSFRRn: `Plan & Strategy`,
                                                  style: { width: `100%` },
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      c(`div`, {
                                        className: `framer-62q9s2`,
                                        "data-framer-name": `Develop card`,
                                        children: [
                                          a(`div`, {
                                            className: `framer-ahfemf`,
                                            "data-framer-name": `Top wrapper`,
                                            children: a(`div`, {
                                              className: `framer-18x0v0f`,
                                              "data-framer-name": `White color`,
                                              children: c(`div`, {
                                                className: `framer-hjo7s9`,
                                                "data-framer-name": `wrapper`,
                                                children: [
                                                  a(`div`, {
                                                    className: `framer-1oz5hqu`,
                                                    "data-framer-name": `Left side `,
                                                  }),
                                                  c(`div`, {
                                                    className: `framer-p3glio`,
                                                    "data-framer-name": `Center wrapper`,
                                                    children: [
                                                      c(`div`, {
                                                        className: `framer-746gik`,
                                                        "data-framer-name": `Top wraper`,
                                                        children: [
                                                          c(`div`, {
                                                            className: `framer-1wqagsv`,
                                                            "data-framer-name": `wrapper`,
                                                            children: [
                                                              a(`div`, {
                                                                className: `framer-15v91on`,
                                                                "data-framer-name": `Top line`,
                                                              }),
                                                              a(`div`, {
                                                                className: `framer-d59nsd`,
                                                                "data-framer-name": `Bottom line`,
                                                              }),
                                                            ],
                                                          }),
                                                          a(`div`, {
                                                            className: `framer-12cyx3f`,
                                                            "data-framer-name": `Green`,
                                                          }),
                                                        ],
                                                      }),
                                                      a(`div`, {
                                                        className: `framer-9m7knb`,
                                                        "data-framer-name": `Bottom wrapper`,
                                                      }),
                                                    ],
                                                  }),
                                                  a(`div`, {
                                                    className: `framer-1k7b486`,
                                                    children: a(`div`, {
                                                      className: `framer-zb2a81`,
                                                      "data-framer-name": `Right wrapper`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            }),
                                          }),
                                          a(N, {
                                            breakpoint: C,
                                            overrides: {
                                              ccwQtvViN: {
                                                width: `calc(max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 1px) - 124px)`,
                                                y:
                                                  (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  4125 +
                                                  0 +
                                                  0 +
                                                  100 +
                                                  0 +
                                                  0 +
                                                  529 +
                                                  0 +
                                                  1008 +
                                                  16 +
                                                  298,
                                              },
                                              sSgoNdsY3: {
                                                width: `calc(min(max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 1px), 636px) - 56px)`,
                                                y:
                                                  (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  6708 +
                                                  0 +
                                                  0 +
                                                  60 +
                                                  0 +
                                                  0 +
                                                  517 +
                                                  0 +
                                                  990 +
                                                  16 +
                                                  264,
                                              },
                                            },
                                            children: a(D, {
                                              height: 90,
                                              width: `calc(min(max((max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 1px) - 236px) / 2, 1px), 636px) - 32px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                4023 +
                                                0 +
                                                0 +
                                                100 +
                                                0 +
                                                0 +
                                                0 +
                                                1008 +
                                                16 +
                                                302,
                                              children: a(w, {
                                                className: `framer-1yrxu8s-container`,
                                                nodeId: `M9ci7aj6l`,
                                                scopeId: `V2Ho_ZYv2`,
                                                children: a(rt, {
                                                  height: `100%`,
                                                  id: `M9ci7aj6l`,
                                                  layoutId: `M9ci7aj6l`,
                                                  mEnN89w5K: `We develop AI-powered systems and integrate intelligent workflows designed for scalability and performance.`,
                                                  pB11N2TiQ: `//03`,
                                                  qmQbSFRRn: `Build & Integrate`,
                                                  style: { width: `100%` },
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      c(`div`, {
                                        className: `framer-46y0u6`,
                                        "data-framer-name": `Evolve card`,
                                        children: [
                                          a(`div`, {
                                            className: `framer-g747wz`,
                                            "data-framer-name": `Top wrapper`,
                                            children: a(`div`, {
                                              className: `framer-11wwoei`,
                                              "data-framer-name": `White wrapper`,
                                              children: c(`div`, {
                                                className: `framer-1sjtljx`,
                                                "data-framer-name": `Main wrapper`,
                                                children: [
                                                  a(`div`, {
                                                    className: `framer-11f0009`,
                                                    "data-framer-name": `Wrapper`,
                                                  }),
                                                  a(`div`, {
                                                    className: `framer-9z4lns`,
                                                    "data-framer-name": `Wrapper`,
                                                  }),
                                                  a(`div`, {
                                                    className: `framer-17kgpzw`,
                                                    "data-framer-name": `Center`,
                                                    children: a(`div`, {
                                                      className: `framer-1wiwvmv`,
                                                      "data-framer-name": `Wrapper`,
                                                    }),
                                                  }),
                                                  a(`div`, {
                                                    className: `framer-1odlf1k`,
                                                    "data-framer-name": `Wrapper`,
                                                  }),
                                                  a(`div`, {
                                                    className: `framer-1vp1f38`,
                                                    "data-framer-name": `Wrapper`,
                                                  }),
                                                  a(N, {
                                                    breakpoint: C,
                                                    overrides: {
                                                      ccwQtvViN: {
                                                        background: {
                                                          alt: ``,
                                                          fit: `fill`,
                                                          loading: g(
                                                            (h?.y || 0) +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              4125 +
                                                              0 +
                                                              0 +
                                                              100 +
                                                              0 +
                                                              0 +
                                                              529 +
                                                              0 +
                                                              1468 +
                                                              16 +
                                                              0 +
                                                              0 +
                                                              66 +
                                                              0 +
                                                              -25
                                                          ),
                                                          pixelHeight: 97,
                                                          pixelWidth: 85,
                                                          sizes: `100px`,
                                                          src: `../../assets/images/GM9hGGw7o0aEnyuWeia3SADVo.png`,
                                                        },
                                                      },
                                                      sSgoNdsY3: {
                                                        background: {
                                                          alt: ``,
                                                          fit: `fill`,
                                                          loading: g(
                                                            (h?.y || 0) +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              6708 +
                                                              0 +
                                                              0 +
                                                              60 +
                                                              0 +
                                                              0 +
                                                              517 +
                                                              0 +
                                                              1416 +
                                                              16 +
                                                              0 +
                                                              0 +
                                                              46 +
                                                              0 +
                                                              -24
                                                          ),
                                                          pixelHeight: 97,
                                                          pixelWidth: 85,
                                                          sizes: `100px`,
                                                          src: `../../assets/images/GM9hGGw7o0aEnyuWeia3SADVo.png`,
                                                        },
                                                      },
                                                    },
                                                    children: a(A, {
                                                      background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        loading: g(
                                                          (h?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            4023 +
                                                            0 +
                                                            0 +
                                                            100 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            1472 +
                                                            16 +
                                                            0 +
                                                            0 +
                                                            66 +
                                                            0 +
                                                            -14
                                                        ),
                                                        pixelHeight: 97,
                                                        pixelWidth: 85,
                                                        sizes: `100px`,
                                                        src: `../../assets/images/GM9hGGw7o0aEnyuWeia3SADVo.png`,
                                                      },
                                                      className: `framer-glkqzy`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            }),
                                          }),
                                          a(N, {
                                            breakpoint: C,
                                            overrides: {
                                              ccwQtvViN: {
                                                width: `calc(max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 1px) - 124px)`,
                                                y:
                                                  (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  4125 +
                                                  0 +
                                                  0 +
                                                  100 +
                                                  0 +
                                                  0 +
                                                  529 +
                                                  0 +
                                                  1468 +
                                                  16 +
                                                  405,
                                              },
                                              sSgoNdsY3: {
                                                width: `calc(min(max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 1px), 636px) - 56px)`,
                                                y:
                                                  (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  6708 +
                                                  0 +
                                                  0 +
                                                  60 +
                                                  0 +
                                                  0 +
                                                  517 +
                                                  0 +
                                                  1416 +
                                                  16 +
                                                  336,
                                              },
                                            },
                                            children: a(D, {
                                              height: 90,
                                              width: `calc(min(max((max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 1px) - 236px) / 2, 1px), 636px) - 32px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                4023 +
                                                0 +
                                                0 +
                                                100 +
                                                0 +
                                                0 +
                                                0 +
                                                1472 +
                                                16 +
                                                405,
                                              children: a(w, {
                                                className: `framer-xq4wqf-container`,
                                                nodeId: `VD5L3Ni3D`,
                                                scopeId: `V2Ho_ZYv2`,
                                                children: a(rt, {
                                                  height: `100%`,
                                                  id: `VD5L3Ni3D`,
                                                  layoutId: `VD5L3Ni3D`,
                                                  mEnN89w5K: `We monitor performance, refine automations, and continuously improve AI systems for long-term efficiency.`,
                                                  pB11N2TiQ: `//04`,
                                                  qmQbSFRRn: `Launch & Evolve`,
                                                  style: { width: `100%` },
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              a(N, {
                                breakpoint: C,
                                overrides: {
                                  ccwQtvViN: {
                                    y: (h?.y || 0) + 0 + 0 + 0 + 4125 + 0 + 0 + 100 + 2584,
                                  },
                                  sSgoNdsY3: {
                                    width: `max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 1px)`,
                                    y: (h?.y || 0) + 0 + 0 + 0 + 6708 + 0 + 0 + 60 + 2451,
                                  },
                                },
                                children: a(D, {
                                  height: 64,
                                  width: `max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 1px)`,
                                  y: (h?.y || 0) + 0 + 0 + 0 + 4023 + 0 + 0 + 100 + 2059,
                                  children: a(w, {
                                    className: `framer-9510q8-container`,
                                    nodeId: `gp_xZEUPw`,
                                    scopeId: `V2Ho_ZYv2`,
                                    children: a(N, {
                                      breakpoint: C,
                                      overrides: {
                                        ccwQtvViN: { variant: Z(`GGx7sb23r`) },
                                        sSgoNdsY3: { variant: Z(`GGx7sb23r`) },
                                      },
                                      children: a(R, {
                                        height: `100%`,
                                        id: `gp_xZEUPw`,
                                        layoutId: `gp_xZEUPw`,
                                        style: { width: `100%` },
                                        variant: Z(`iE1Txx1gl`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                      a(N, {
                        breakpoint: C,
                        overrides: {
                          ccwQtvViN: { y: (h?.y || 0) + 0 + 0 + 0 + 6873 },
                          sSgoNdsY3: { y: (h?.y || 0) + 0 + 0 + 0 + 9283 },
                        },
                        children: a(D, {
                          height: 16,
                          width: h?.width || `100vw`,
                          y: (h?.y || 0) + 0 + 0 + 0 + 6246,
                          children: a(w, {
                            className: `framer-1we930r-container`,
                            "data-framer-name": `Spacer`,
                            name: `Spacer`,
                            nodeId: `aH5bHcA2s`,
                            scopeId: `V2Ho_ZYv2`,
                            children: a(N, {
                              breakpoint: C,
                              overrides: {
                                ccwQtvViN: { variant: Z(`tDRwbo2Hu`) },
                                sSgoNdsY3: { variant: Z(`FfOd6J0WM`) },
                              },
                              children: a(I, {
                                byu2TjtOU: {
                                  borderBottomWidth: 1,
                                  borderColor: `var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1))`,
                                  borderLeftWidth: 0,
                                  borderRightWidth: 0,
                                  borderStyle: `solid`,
                                  borderTopWidth: 1,
                                },
                                height: `100%`,
                                id: `aH5bHcA2s`,
                                layoutId: `aH5bHcA2s`,
                                name: `Spacer`,
                                style: { height: `100%`, width: `100%` },
                                variant: Z(`hFLhZnXcH`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                      a(`section`, {
                        className: `framer-gpxzaw`,
                        "data-border": !0,
                        "data-framer-name": `Slider`,
                        children: a(`div`, {
                          className: `framer-l0jpv3`,
                          "data-framer-name": `Container`,
                          children: c(`div`, {
                            className: `framer-swp5im`,
                            "data-border": !0,
                            "data-framer-name": `Main wrapper`,
                            children: [
                              c(Ln, {
                                __framer__spring: {
                                  bounce: 0.2,
                                  damping: 140,
                                  delay: 0,
                                  duration: 0.3,
                                  durationBasedSpring: !1,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 1,
                                  stagger: 0,
                                  stiffness: 500,
                                  type: `spring`,
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: -1600,
                                      y: 0,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 1600,
                                      y: 0,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: `onScroll`,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-1ct9wz3`,
                                "data-border": !0,
                                "data-framer-name": `Top wrapper`,
                                style: { transformPerspective: 1200 },
                                children: [
                                  a(x, {
                                    __fromCanvasComponent: !0,
                                    children: a(i, {
                                      children: a(`h1`, {
                                        className: `framer-styles-preset-1qozeca`,
                                        "data-styles-preset": `OMSsExAYt`,
                                        children: `Innovative`,
                                      }),
                                    }),
                                    className: `framer-1djckd9`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(N, {
                                    breakpoint: C,
                                    overrides: {
                                      ccwQtvViN: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 48,
                                          intrinsicWidth: 38,
                                          loading: g(
                                            (h?.y || 0) + 0 + 0 + 0 + 6889 + 0 + 0 + 0 + 0 + 58
                                          ),
                                          pixelHeight: 48,
                                          pixelWidth: 38,
                                          sizes: `38px`,
                                          src: `../../assets/images/HVJjQOEOpwoCoAMa3aEKwZniX2o.svg`,
                                        },
                                      },
                                      sSgoNdsY3: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 48,
                                          intrinsicWidth: 38,
                                          loading: g(
                                            (h?.y || 0) + 0 + 0 + 0 + 9299 + 0 + 0 + 0 + 0 + 48
                                          ),
                                          pixelHeight: 48,
                                          pixelWidth: 38,
                                          sizes: `38px`,
                                          src: `../../assets/images/HVJjQOEOpwoCoAMa3aEKwZniX2o.svg`,
                                        },
                                      },
                                    },
                                    children: a(A, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 48,
                                        intrinsicWidth: 38,
                                        loading: g(
                                          (h?.y || 0) + 0 + 0 + 0 + 6262 + 0 + 0 + 0 + 0 + 68
                                        ),
                                        pixelHeight: 48,
                                        pixelWidth: 38,
                                        sizes: `38px`,
                                        src: `../../assets/images/HVJjQOEOpwoCoAMa3aEKwZniX2o.svg`,
                                      },
                                      className: `framer-iqp0b6`,
                                      "data-framer-name": `image`,
                                    }),
                                  }),
                                  a(x, {
                                    __fromCanvasComponent: !0,
                                    children: a(i, {
                                      children: a(`h1`, {
                                        className: `framer-styles-preset-1qozeca`,
                                        "data-styles-preset": `OMSsExAYt`,
                                        children: `Innovative`,
                                      }),
                                    }),
                                    className: `framer-1xozvv3`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(N, {
                                    breakpoint: C,
                                    overrides: {
                                      ccwQtvViN: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 48,
                                          intrinsicWidth: 38,
                                          loading: g(
                                            (h?.y || 0) + 0 + 0 + 0 + 6889 + 0 + 0 + 0 + 0 + 58
                                          ),
                                          pixelHeight: 48,
                                          pixelWidth: 38,
                                          sizes: `38px`,
                                          src: `../../assets/images/HVJjQOEOpwoCoAMa3aEKwZniX2o.svg`,
                                        },
                                      },
                                      sSgoNdsY3: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 48,
                                          intrinsicWidth: 38,
                                          loading: g(
                                            (h?.y || 0) + 0 + 0 + 0 + 9299 + 0 + 0 + 0 + 0 + 48
                                          ),
                                          pixelHeight: 48,
                                          pixelWidth: 38,
                                          sizes: `38px`,
                                          src: `../../assets/images/HVJjQOEOpwoCoAMa3aEKwZniX2o.svg`,
                                        },
                                      },
                                    },
                                    children: a(A, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 48,
                                        intrinsicWidth: 38,
                                        loading: g(
                                          (h?.y || 0) + 0 + 0 + 0 + 6262 + 0 + 0 + 0 + 0 + 68
                                        ),
                                        pixelHeight: 48,
                                        pixelWidth: 38,
                                        sizes: `38px`,
                                        src: `../../assets/images/HVJjQOEOpwoCoAMa3aEKwZniX2o.svg`,
                                      },
                                      className: `framer-1cq72sl`,
                                      "data-framer-name": `image`,
                                    }),
                                  }),
                                  a(x, {
                                    __fromCanvasComponent: !0,
                                    children: a(i, {
                                      children: a(`h1`, {
                                        className: `framer-styles-preset-1qozeca`,
                                        "data-styles-preset": `OMSsExAYt`,
                                        children: `Innovative`,
                                      }),
                                    }),
                                    className: `framer-dlvo13`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              c(Ln, {
                                __framer__spring: {
                                  bounce: 0.2,
                                  damping: 140,
                                  delay: 0,
                                  duration: 0.3,
                                  durationBasedSpring: !1,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 1,
                                  stagger: 0,
                                  stiffness: 500,
                                  type: `spring`,
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 1400,
                                      y: 0,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: -1400,
                                      y: 0,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: `onScroll`,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-1l3edb8`,
                                "data-framer-name": `Bottom wrapper`,
                                style: { transformPerspective: 1200 },
                                children: [
                                  a(x, {
                                    __fromCanvasComponent: !0,
                                    children: a(i, {
                                      children: a(`h1`, {
                                        className: `framer-styles-preset-1qozeca`,
                                        "data-styles-preset": `OMSsExAYt`,
                                        children: `Visionary`,
                                      }),
                                    }),
                                    className: `framer-t7933y`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(N, {
                                    breakpoint: C,
                                    overrides: {
                                      ccwQtvViN: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 48,
                                          intrinsicWidth: 38,
                                          loading: g(
                                            (h?.y || 0) + 0 + 0 + 0 + 6889 + 0 + 0 + 0 + 164 + 58
                                          ),
                                          pixelHeight: 48,
                                          pixelWidth: 38,
                                          sizes: `38px`,
                                          src: `../../assets/images/HL5xQhbEapByYuUMGrT5twZL0M.svg`,
                                        },
                                      },
                                      sSgoNdsY3: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 48,
                                          intrinsicWidth: 38,
                                          loading: g(
                                            (h?.y || 0) + 0 + 0 + 0 + 9299 + 0 + 0 + 0 + 144 + 48
                                          ),
                                          pixelHeight: 48,
                                          pixelWidth: 38,
                                          sizes: `38px`,
                                          src: `../../assets/images/HL5xQhbEapByYuUMGrT5twZL0M.svg`,
                                        },
                                      },
                                    },
                                    children: a(A, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 48,
                                        intrinsicWidth: 38,
                                        loading: g(
                                          (h?.y || 0) + 0 + 0 + 0 + 6262 + 0 + 0 + 0 + 184 + 68
                                        ),
                                        pixelHeight: 48,
                                        pixelWidth: 38,
                                        sizes: `38px`,
                                        src: `../../assets/images/HL5xQhbEapByYuUMGrT5twZL0M.svg`,
                                      },
                                      className: `framer-do9ih`,
                                      "data-framer-name": `image`,
                                      style: { rotate: 180 },
                                    }),
                                  }),
                                  a(x, {
                                    __fromCanvasComponent: !0,
                                    children: a(i, {
                                      children: a(`h1`, {
                                        className: `framer-styles-preset-1qozeca`,
                                        "data-styles-preset": `OMSsExAYt`,
                                        children: `Visionary`,
                                      }),
                                    }),
                                    className: `framer-2l481i`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(N, {
                                    breakpoint: C,
                                    overrides: {
                                      ccwQtvViN: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 48,
                                          intrinsicWidth: 38,
                                          loading: g(
                                            (h?.y || 0) + 0 + 0 + 0 + 6889 + 0 + 0 + 0 + 164 + 58
                                          ),
                                          pixelHeight: 48,
                                          pixelWidth: 38,
                                          sizes: `38px`,
                                          src: `../../assets/images/HL5xQhbEapByYuUMGrT5twZL0M.svg`,
                                        },
                                      },
                                      sSgoNdsY3: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 48,
                                          intrinsicWidth: 38,
                                          loading: g(
                                            (h?.y || 0) + 0 + 0 + 0 + 9299 + 0 + 0 + 0 + 144 + 48
                                          ),
                                          pixelHeight: 48,
                                          pixelWidth: 38,
                                          sizes: `38px`,
                                          src: `../../assets/images/HL5xQhbEapByYuUMGrT5twZL0M.svg`,
                                        },
                                      },
                                    },
                                    children: a(A, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 48,
                                        intrinsicWidth: 38,
                                        loading: g(
                                          (h?.y || 0) + 0 + 0 + 0 + 6262 + 0 + 0 + 0 + 184 + 68
                                        ),
                                        pixelHeight: 48,
                                        pixelWidth: 38,
                                        sizes: `38px`,
                                        src: `../../assets/images/HL5xQhbEapByYuUMGrT5twZL0M.svg`,
                                      },
                                      className: `framer-kx923a`,
                                      "data-framer-name": `image`,
                                      style: { rotate: 180 },
                                    }),
                                  }),
                                  a(x, {
                                    __fromCanvasComponent: !0,
                                    children: a(i, {
                                      children: a(`h1`, {
                                        className: `framer-styles-preset-1qozeca`,
                                        "data-styles-preset": `OMSsExAYt`,
                                        children: `Visionary`,
                                      }),
                                    }),
                                    className: `framer-j2lx6n`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                      a(N, {
                        breakpoint: C,
                        overrides: {
                          ccwQtvViN: { y: (h?.y || 0) + 0 + 0 + 0 + 7217 },
                          sSgoNdsY3: { y: (h?.y || 0) + 0 + 0 + 0 + 9587 },
                        },
                        children: a(D, {
                          height: 16,
                          width: h?.width || `100vw`,
                          y: (h?.y || 0) + 0 + 0 + 0 + 6630,
                          children: a(w, {
                            className: `framer-17zk2wz-container`,
                            "data-framer-name": `Spacer`,
                            name: `Spacer`,
                            nodeId: `uSJ6hd_w0`,
                            scopeId: `V2Ho_ZYv2`,
                            children: a(N, {
                              breakpoint: C,
                              overrides: {
                                ccwQtvViN: { variant: Z(`tDRwbo2Hu`) },
                                sSgoNdsY3: { variant: Z(`FfOd6J0WM`) },
                              },
                              children: a(I, {
                                byu2TjtOU: {
                                  borderBottomWidth: 1,
                                  borderColor: `var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1))`,
                                  borderLeftWidth: 0,
                                  borderRightWidth: 0,
                                  borderStyle: `solid`,
                                  borderTopWidth: 1,
                                },
                                height: `100%`,
                                id: `uSJ6hd_w0`,
                                layoutId: `uSJ6hd_w0`,
                                name: `Spacer`,
                                style: { height: `100%`, width: `100%` },
                                variant: Z(`hFLhZnXcH`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                      a(`section`, {
                        className: `framer-11pqjvl`,
                        "data-border": !0,
                        "data-framer-name": `The Diiference`,
                        children: a(`div`, {
                          className: `framer-mypktv`,
                          "data-framer-name": `Container`,
                          children: c(`div`, {
                            className: `framer-1bnc5t4`,
                            "data-border": !0,
                            "data-framer-name": `Main wrapper`,
                            children: [
                              a(N, {
                                breakpoint: C,
                                overrides: {
                                  ccwQtvViN: {
                                    y: (h?.y || 0) + 0 + 0 + 0 + 7233 + 0 + 0 + 0 + 0 + 0,
                                  },
                                  sSgoNdsY3: {
                                    width: `calc(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px)`,
                                    y: (h?.y || 0) + 0 + 0 + 0 + 9603 + 0 + 0 + 0 + 0 + 0,
                                  },
                                },
                                children: a(D, {
                                  height: 64,
                                  width: `calc(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px)`,
                                  y: (h?.y || 0) + 0 + 0 + 0 + 6646 + 0 + 0 + 0 + 0 + 0,
                                  children: a(w, {
                                    className: `framer-92rlfg-container`,
                                    "data-framer-name": `Pattern`,
                                    name: `Pattern`,
                                    nodeId: `syoASgj_x`,
                                    scopeId: `V2Ho_ZYv2`,
                                    children: a(N, {
                                      breakpoint: C,
                                      overrides: {
                                        ccwQtvViN: { variant: Z(`GGx7sb23r`) },
                                        sSgoNdsY3: { variant: Z(`GGx7sb23r`) },
                                      },
                                      children: a(R, {
                                        height: `100%`,
                                        id: `syoASgj_x`,
                                        layoutId: `syoASgj_x`,
                                        name: `Pattern`,
                                        style: { width: `100%` },
                                        variant: Z(`iE1Txx1gl`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              c(`div`, {
                                className: `framer-17ufz1q`,
                                "data-framer-name": `Content wrapper`,
                                children: [
                                  c(`div`, {
                                    className: `framer-izjmoy`,
                                    "data-framer-name": `Heading wrapper`,
                                    children: [
                                      a(N, {
                                        breakpoint: C,
                                        overrides: {
                                          ccwQtvViN: {
                                            y:
                                              (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              7233 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              64 +
                                              100 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          sSgoNdsY3: {
                                            y:
                                              (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              9603 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              64 +
                                              100 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: a(D, {
                                          height: 20,
                                          y:
                                            (h?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            6646 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            64 +
                                            100 +
                                            0 +
                                            0 +
                                            0,
                                          children: a(w, {
                                            className: `framer-cxbyel-container`,
                                            "data-framer-name": `Section tag`,
                                            name: `Section tag`,
                                            nodeId: `Ve2qQkcCk`,
                                            scopeId: `V2Ho_ZYv2`,
                                            children: a(L, {
                                              height: `100%`,
                                              id: `Ve2qQkcCk`,
                                              layoutId: `Ve2qQkcCk`,
                                              name: `Section tag`,
                                              RRhqTkqTM: `THE DIFFERENCE`,
                                              variant: Z(`HiPT_1Fkc`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      a(N, {
                                        breakpoint: C,
                                        overrides: {
                                          sSgoNdsY3: {
                                            children: a(i, {
                                              children: c(`h2`, {
                                                className: `framer-styles-preset-v5pzc9`,
                                                "data-styles-preset": `MeF89MvDJ`,
                                                dir: `auto`,
                                                style: { "--framer-text-alignment": `center` },
                                                children: [
                                                  `Why Should You `,
                                                  a(`br`, {}),
                                                  `Choose Us`,
                                                ],
                                              }),
                                            }),
                                          },
                                        },
                                        children: a(x, {
                                          __fromCanvasComponent: !0,
                                          children: a(i, {
                                            children: a(`h2`, {
                                              className: `framer-styles-preset-v5pzc9`,
                                              "data-styles-preset": `MeF89MvDJ`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `center` },
                                              children: `Why Should You Choose Us`,
                                            }),
                                          }),
                                          className: `framer-121akh2`,
                                          effect: Er,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  a(N, {
                                    breakpoint: C,
                                    overrides: {
                                      ccwQtvViN: { rowGap: 16 },
                                      sSgoNdsY3: { trackCount: 1 },
                                    },
                                    children: c(Un, {
                                      className: `framer-rdo69p`,
                                      columnMasonryLayoutEnabled: !0,
                                      "data-framer-name": `Card wrapper`,
                                      parentIsDataRepeater: !1,
                                      rowGap: 27,
                                      trackCount: 2,
                                      children: [
                                        c(Ln, {
                                          __framer__animate: { transition: _r },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Br,
                                          __framer__exit: Vr,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-12mceac`,
                                          "data-framer-name": `Difference card`,
                                          children: [
                                            a(N, {
                                              breakpoint: C,
                                              overrides: {
                                                ccwQtvViN: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    loading: g(
                                                      (h?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        7233 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        64 +
                                                        100 +
                                                        172 +
                                                        0 +
                                                        0 +
                                                        16 +
                                                        0
                                                    ),
                                                    pixelHeight: 120,
                                                    pixelWidth: 400,
                                                    sizes: `calc(max((min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 860px) - 68px) / 2, 50px) - 32px)`,
                                                    src: `../../assets/images/BPUvNimzJijfF6YkcG8819tAsyY.jpg`,
                                                  },
                                                },
                                                sSgoNdsY3: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    loading: g(
                                                      (h?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        9603 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        64 +
                                                        100 +
                                                        172 +
                                                        0 +
                                                        0 +
                                                        16 +
                                                        0
                                                    ),
                                                    pixelHeight: 120,
                                                    pixelWidth: 400,
                                                    sizes: `calc(max(min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 860px) - 24px, 50px) - 32px)`,
                                                    src: `../../assets/images/BPUvNimzJijfF6YkcG8819tAsyY.jpg`,
                                                  },
                                                },
                                              },
                                              children: a(A, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  loading: g(
                                                    (h?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      6646 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      64 +
                                                      100 +
                                                      172 +
                                                      0 +
                                                      0 +
                                                      16 +
                                                      0
                                                  ),
                                                  pixelHeight: 120,
                                                  pixelWidth: 400,
                                                  sizes: `calc(max((min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 860px) - 27px) / 2, 50px) - 32px)`,
                                                  src: `../../assets/images/BPUvNimzJijfF6YkcG8819tAsyY.jpg`,
                                                },
                                                className: `framer-1cdohu`,
                                                "data-framer-name": `Top wrapper`,
                                                children: a(x, {
                                                  __fromCanvasComponent: !0,
                                                  children: a(i, {
                                                    children: a(`h5`, {
                                                      className: `framer-styles-preset-1noi8vp`,
                                                      "data-styles-preset": `CUPxNqAyB`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18))`,
                                                      },
                                                      children: `Other Agencies`,
                                                    }),
                                                  }),
                                                  className: `framer-12d1si2`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            }),
                                            a(`div`, {
                                              className: `framer-1ulwqj8`,
                                              "data-framer-name": `Points wrapper`,
                                              children: c(`div`, {
                                                className: `framer-j9kav`,
                                                "data-framer-name": `Wrapper`,
                                                children: [
                                                  a(N, {
                                                    breakpoint: C,
                                                    overrides: {
                                                      ccwQtvViN: {
                                                        width: `calc(max((min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 860px) - 68px) / 2, 50px) - 44px)`,
                                                        y:
                                                          (h?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          7233 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          64 +
                                                          100 +
                                                          172 +
                                                          0 +
                                                          0 +
                                                          16 +
                                                          144 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0,
                                                      },
                                                      sSgoNdsY3: {
                                                        width: `calc(max(min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 860px) - 24px, 50px) - 32px)`,
                                                        y:
                                                          (h?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          9603 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          64 +
                                                          100 +
                                                          172 +
                                                          0 +
                                                          0 +
                                                          16 +
                                                          144 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0,
                                                      },
                                                    },
                                                    children: a(D, {
                                                      height: 24,
                                                      width: `calc(max((min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 860px) - 27px) / 2, 50px) - 56px)`,
                                                      y:
                                                        (h?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        6646 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        64 +
                                                        100 +
                                                        172 +
                                                        0 +
                                                        0 +
                                                        16 +
                                                        144 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0,
                                                      children: a(w, {
                                                        className: `framer-grxgj7-container`,
                                                        "data-framer-name": `Point 1`,
                                                        name: `Point 1`,
                                                        nodeId: `TukAjJf9r`,
                                                        scopeId: `V2Ho_ZYv2`,
                                                        children: a(z, {
                                                          height: `100%`,
                                                          id: `TukAjJf9r`,
                                                          layoutId: `TukAjJf9r`,
                                                          name: `Point 1`,
                                                          style: { width: `100%` },
                                                          uRRrPnIeh: `Uses generic automation tools`,
                                                          variant: Z(`ge2zZPUQA`),
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                  a(N, {
                                                    breakpoint: C,
                                                    overrides: {
                                                      ccwQtvViN: {
                                                        width: `calc(max((min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 860px) - 68px) / 2, 50px) - 44px)`,
                                                        y:
                                                          (h?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          7233 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          64 +
                                                          100 +
                                                          172 +
                                                          0 +
                                                          0 +
                                                          16 +
                                                          144 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          38,
                                                      },
                                                      sSgoNdsY3: {
                                                        width: `calc(max(min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 860px) - 24px, 50px) - 32px)`,
                                                        y:
                                                          (h?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          9603 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          64 +
                                                          100 +
                                                          172 +
                                                          0 +
                                                          0 +
                                                          16 +
                                                          144 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          38,
                                                      },
                                                    },
                                                    children: a(D, {
                                                      height: 24,
                                                      width: `calc(max((min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 860px) - 27px) / 2, 50px) - 56px)`,
                                                      y:
                                                        (h?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        6646 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        64 +
                                                        100 +
                                                        172 +
                                                        0 +
                                                        0 +
                                                        16 +
                                                        144 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        38,
                                                      children: a(w, {
                                                        className: `framer-f9kwa3-container`,
                                                        "data-framer-name": `Point 2`,
                                                        name: `Point 2`,
                                                        nodeId: `gCj0y2Eds`,
                                                        scopeId: `V2Ho_ZYv2`,
                                                        children: a(z, {
                                                          height: `100%`,
                                                          id: `gCj0y2Eds`,
                                                          layoutId: `gCj0y2Eds`,
                                                          name: `Point 2`,
                                                          style: { width: `100%` },
                                                          uRRrPnIeh: `Focuses only on basic AI setup`,
                                                          variant: Z(`ge2zZPUQA`),
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                  a(N, {
                                                    breakpoint: C,
                                                    overrides: {
                                                      ccwQtvViN: {
                                                        width: `calc(max((min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 860px) - 68px) / 2, 50px) - 44px)`,
                                                        y:
                                                          (h?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          7233 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          64 +
                                                          100 +
                                                          172 +
                                                          0 +
                                                          0 +
                                                          16 +
                                                          144 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          76,
                                                      },
                                                      sSgoNdsY3: {
                                                        width: `calc(max(min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 860px) - 24px, 50px) - 32px)`,
                                                        y:
                                                          (h?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          9603 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          64 +
                                                          100 +
                                                          172 +
                                                          0 +
                                                          0 +
                                                          16 +
                                                          144 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          76,
                                                      },
                                                    },
                                                    children: a(D, {
                                                      height: 24,
                                                      width: `calc(max((min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 860px) - 27px) / 2, 50px) - 56px)`,
                                                      y:
                                                        (h?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        6646 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        64 +
                                                        100 +
                                                        172 +
                                                        0 +
                                                        0 +
                                                        16 +
                                                        144 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        76,
                                                      children: a(w, {
                                                        className: `framer-1djqu8g-container`,
                                                        "data-framer-name": `Point 3`,
                                                        name: `Point 3`,
                                                        nodeId: `kE5lIOgqi`,
                                                        scopeId: `V2Ho_ZYv2`,
                                                        children: a(z, {
                                                          height: `100%`,
                                                          id: `kE5lIOgqi`,
                                                          layoutId: `kE5lIOgqi`,
                                                          name: `Point 3`,
                                                          style: { width: `100%` },
                                                          uRRrPnIeh: `Limited workflow customization`,
                                                          variant: Z(`ge2zZPUQA`),
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                  a(N, {
                                                    breakpoint: C,
                                                    overrides: {
                                                      ccwQtvViN: {
                                                        width: `calc(max((min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 860px) - 68px) / 2, 50px) - 44px)`,
                                                        y:
                                                          (h?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          7233 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          64 +
                                                          100 +
                                                          172 +
                                                          0 +
                                                          0 +
                                                          16 +
                                                          144 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          114,
                                                      },
                                                      sSgoNdsY3: {
                                                        width: `calc(max(min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 860px) - 24px, 50px) - 32px)`,
                                                        y:
                                                          (h?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          9603 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          64 +
                                                          100 +
                                                          172 +
                                                          0 +
                                                          0 +
                                                          16 +
                                                          144 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          114,
                                                      },
                                                    },
                                                    children: a(D, {
                                                      height: 24,
                                                      width: `calc(max((min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 860px) - 27px) / 2, 50px) - 56px)`,
                                                      y:
                                                        (h?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        6646 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        64 +
                                                        100 +
                                                        172 +
                                                        0 +
                                                        0 +
                                                        16 +
                                                        144 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        114,
                                                      children: a(w, {
                                                        className: `framer-1295stf-container`,
                                                        "data-framer-name": `Point 4`,
                                                        name: `Point 4`,
                                                        nodeId: `FkA4kVBNj`,
                                                        scopeId: `V2Ho_ZYv2`,
                                                        children: a(z, {
                                                          height: `100%`,
                                                          id: `FkA4kVBNj`,
                                                          layoutId: `FkA4kVBNj`,
                                                          name: `Point 4`,
                                                          style: { width: `100%` },
                                                          uRRrPnIeh: `Lack of long-term optimization`,
                                                          variant: Z(`ge2zZPUQA`),
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                  a(N, {
                                                    breakpoint: C,
                                                    overrides: {
                                                      ccwQtvViN: {
                                                        width: `calc(max((min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 860px) - 68px) / 2, 50px) - 44px)`,
                                                        y:
                                                          (h?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          7233 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          64 +
                                                          100 +
                                                          172 +
                                                          0 +
                                                          0 +
                                                          16 +
                                                          144 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          152,
                                                      },
                                                      sSgoNdsY3: {
                                                        width: `calc(max(min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 860px) - 24px, 50px) - 32px)`,
                                                        y:
                                                          (h?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          9603 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          64 +
                                                          100 +
                                                          172 +
                                                          0 +
                                                          0 +
                                                          16 +
                                                          144 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          152,
                                                      },
                                                    },
                                                    children: a(D, {
                                                      height: 24,
                                                      width: `calc(max((min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 860px) - 27px) / 2, 50px) - 56px)`,
                                                      y:
                                                        (h?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        6646 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        64 +
                                                        100 +
                                                        172 +
                                                        0 +
                                                        0 +
                                                        16 +
                                                        144 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        152,
                                                      children: a(w, {
                                                        className: `framer-1n87r9m-container`,
                                                        "data-framer-name": `Point 5`,
                                                        name: `Point 5`,
                                                        nodeId: `xgioSKX1r`,
                                                        scopeId: `V2Ho_ZYv2`,
                                                        children: a(z, {
                                                          height: `100%`,
                                                          id: `xgioSKX1r`,
                                                          layoutId: `xgioSKX1r`,
                                                          name: `Point 5`,
                                                          style: { width: `100%` },
                                                          uRRrPnIeh: `Delivers disconnected systems`,
                                                          variant: Z(`ge2zZPUQA`),
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                  a(N, {
                                                    breakpoint: C,
                                                    overrides: {
                                                      ccwQtvViN: {
                                                        width: `calc(max((min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 860px) - 68px) / 2, 50px) - 44px)`,
                                                        y:
                                                          (h?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          7233 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          64 +
                                                          100 +
                                                          172 +
                                                          0 +
                                                          0 +
                                                          16 +
                                                          144 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          190,
                                                      },
                                                      sSgoNdsY3: {
                                                        width: `calc(max(min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 860px) - 24px, 50px) - 32px)`,
                                                        y:
                                                          (h?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          9603 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          64 +
                                                          100 +
                                                          172 +
                                                          0 +
                                                          0 +
                                                          16 +
                                                          144 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          190,
                                                      },
                                                    },
                                                    children: a(D, {
                                                      height: 24,
                                                      width: `calc(max((min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 860px) - 27px) / 2, 50px) - 56px)`,
                                                      y:
                                                        (h?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        6646 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        64 +
                                                        100 +
                                                        172 +
                                                        0 +
                                                        0 +
                                                        16 +
                                                        144 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        190,
                                                      children: a(w, {
                                                        className: `framer-1ox02fp-container`,
                                                        "data-framer-name": `Point 6`,
                                                        name: `Point 6`,
                                                        nodeId: `F090fOItm`,
                                                        scopeId: `V2Ho_ZYv2`,
                                                        children: a(z, {
                                                          height: `100%`,
                                                          id: `F090fOItm`,
                                                          layoutId: `F090fOItm`,
                                                          name: `Point 6`,
                                                          style: { width: `100%` },
                                                          uRRrPnIeh: `Focuses on short-term solutions`,
                                                          variant: Z(`ge2zZPUQA`),
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                        c(Ln, {
                                          __framer__animate: { transition: Hr },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Br,
                                          __framer__exit: Ur,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-86yd4l`,
                                          "data-framer-name": `Difference card`,
                                          children: [
                                            a(N, {
                                              breakpoint: C,
                                              overrides: {
                                                ccwQtvViN: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    loading: g(
                                                      (h?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        7233 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        64 +
                                                        100 +
                                                        172 +
                                                        0 +
                                                        0 +
                                                        16 +
                                                        0
                                                    ),
                                                    pixelHeight: 120,
                                                    pixelWidth: 400,
                                                    sizes: `calc(max((min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 860px) - 68px) / 2, 50px) - 32px)`,
                                                    src: `../../assets/images/BPUvNimzJijfF6YkcG8819tAsyY.jpg`,
                                                  },
                                                },
                                                sSgoNdsY3: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    loading: g(
                                                      (h?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        9603 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        64 +
                                                        100 +
                                                        172 +
                                                        0 +
                                                        441 +
                                                        16 +
                                                        0
                                                    ),
                                                    pixelHeight: 120,
                                                    pixelWidth: 400,
                                                    sizes: `calc(max(min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 860px) - 24px, 50px) - 32px)`,
                                                    src: `../../assets/images/BPUvNimzJijfF6YkcG8819tAsyY.jpg`,
                                                  },
                                                },
                                              },
                                              children: a(A, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  loading: g(
                                                    (h?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      6646 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      64 +
                                                      100 +
                                                      172 +
                                                      0 +
                                                      0 +
                                                      16 +
                                                      0
                                                  ),
                                                  pixelHeight: 120,
                                                  pixelWidth: 400,
                                                  sizes: `calc(max((min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 860px) - 27px) / 2, 50px) - 32px)`,
                                                  src: `../../assets/images/BPUvNimzJijfF6YkcG8819tAsyY.jpg`,
                                                },
                                                className: `framer-5jhdyl`,
                                                "data-framer-name": `Top wrapper`,
                                                children: c(`div`, {
                                                  className: `framer-7l6mx`,
                                                  "data-framer-name": `Logo wrapper`,
                                                  children: [
                                                    c(`div`, {
                                                      className: `framer-atw1do`,
                                                      "data-framer-name": `wrapper`,
                                                      children: [
                                                        a(`div`, {
                                                          className: `framer-1bbplwq`,
                                                          "data-framer-name": `Small `,
                                                        }),
                                                        a(`div`, {
                                                          className: `framer-6n8eca`,
                                                          "data-framer-name": `Large`,
                                                        }),
                                                      ],
                                                    }),
                                                    c(`div`, {
                                                      className: `framer-ddsk7l`,
                                                      "data-framer-name": `Logo`,
                                                      children: [
                                                        a(`div`, {
                                                          className: `framer-54mbqq`,
                                                          children: a(x, {
                                                            __fromCanvasComponent: !0,
                                                            children: a(i, {
                                                              children: a(`h5`, {
                                                                className: `framer-styles-preset-1noi8vp`,
                                                                "data-styles-preset": `CUPxNqAyB`,
                                                                dir: `auto`,
                                                                style: {
                                                                  "--framer-text-color": `var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18))`,
                                                                },
                                                                children: `CodeCrafters`,
                                                              }),
                                                            }),
                                                            className: `framer-xcrdth`,
                                                            fonts: [`Inter`],
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        }),
                                                        a(x, {
                                                          __fromCanvasComponent: !0,
                                                          children: a(i, {
                                                            children: a(`p`, {
                                                              className: `framer-styles-preset-1jbobve`,
                                                              "data-styles-preset": `Gh1KQz4jn`,
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, rgb(3, 7, 18))`,
                                                              },
                                                              children: `TM`,
                                                            }),
                                                          }),
                                                          className: `framer-1y0wh7q`,
                                                          fonts: [`Inter`],
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                            a(`div`, {
                                              className: `framer-5s451n`,
                                              "data-framer-name": `Ponits wrapper`,
                                              children: c(`div`, {
                                                className: `framer-miqz92`,
                                                "data-framer-name": `Wrapper`,
                                                children: [
                                                  a(N, {
                                                    breakpoint: C,
                                                    overrides: {
                                                      ccwQtvViN: {
                                                        width: `calc(max((min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 860px) - 68px) / 2, 50px) - 44px)`,
                                                        y:
                                                          (h?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          7233 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          64 +
                                                          100 +
                                                          172 +
                                                          0 +
                                                          0 +
                                                          16 +
                                                          144 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0,
                                                      },
                                                      sSgoNdsY3: {
                                                        width: `calc(max(min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 860px) - 24px, 50px) - 32px)`,
                                                        y:
                                                          (h?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          9603 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          64 +
                                                          100 +
                                                          172 +
                                                          0 +
                                                          441 +
                                                          16 +
                                                          144 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0,
                                                      },
                                                    },
                                                    children: a(D, {
                                                      height: 24,
                                                      width: `calc(max((min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 860px) - 27px) / 2, 50px) - 56px)`,
                                                      y:
                                                        (h?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        6646 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        64 +
                                                        100 +
                                                        172 +
                                                        0 +
                                                        0 +
                                                        16 +
                                                        144 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0,
                                                      children: a(w, {
                                                        className: `framer-1p2zjcl-container`,
                                                        "data-framer-name": `Point 1`,
                                                        name: `Point 1`,
                                                        nodeId: `enOghYWGT`,
                                                        scopeId: `V2Ho_ZYv2`,
                                                        children: a(z, {
                                                          height: `100%`,
                                                          id: `enOghYWGT`,
                                                          layoutId: `enOghYWGT`,
                                                          name: `Point 1`,
                                                          style: { width: `100%` },
                                                          uRRrPnIeh: `Built around your business goals`,
                                                          variant: Z(`GgzVsDmqK`),
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                  a(N, {
                                                    breakpoint: C,
                                                    overrides: {
                                                      ccwQtvViN: {
                                                        width: `calc(max((min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 860px) - 68px) / 2, 50px) - 44px)`,
                                                        y:
                                                          (h?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          7233 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          64 +
                                                          100 +
                                                          172 +
                                                          0 +
                                                          0 +
                                                          16 +
                                                          144 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          38,
                                                      },
                                                      sSgoNdsY3: {
                                                        width: `calc(max(min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 860px) - 24px, 50px) - 32px)`,
                                                        y:
                                                          (h?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          9603 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          64 +
                                                          100 +
                                                          172 +
                                                          0 +
                                                          441 +
                                                          16 +
                                                          144 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          38,
                                                      },
                                                    },
                                                    children: a(D, {
                                                      height: 24,
                                                      width: `calc(max((min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 860px) - 27px) / 2, 50px) - 56px)`,
                                                      y:
                                                        (h?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        6646 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        64 +
                                                        100 +
                                                        172 +
                                                        0 +
                                                        0 +
                                                        16 +
                                                        144 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        38,
                                                      children: a(w, {
                                                        className: `framer-1jon0b1-container`,
                                                        "data-framer-name": `Point 2`,
                                                        name: `Point 2`,
                                                        nodeId: `Zr5BsajHY`,
                                                        scopeId: `V2Ho_ZYv2`,
                                                        children: a(z, {
                                                          height: `100%`,
                                                          id: `Zr5BsajHY`,
                                                          layoutId: `Zr5BsajHY`,
                                                          name: `Point 2`,
                                                          style: { width: `100%` },
                                                          uRRrPnIeh: `Strategy, design, and development together`,
                                                          variant: Z(`GgzVsDmqK`),
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                  a(N, {
                                                    breakpoint: C,
                                                    overrides: {
                                                      ccwQtvViN: {
                                                        width: `calc(max((min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 860px) - 68px) / 2, 50px) - 44px)`,
                                                        y:
                                                          (h?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          7233 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          64 +
                                                          100 +
                                                          172 +
                                                          0 +
                                                          0 +
                                                          16 +
                                                          144 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          76,
                                                      },
                                                      sSgoNdsY3: {
                                                        width: `calc(max(min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 860px) - 24px, 50px) - 32px)`,
                                                        y:
                                                          (h?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          9603 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          64 +
                                                          100 +
                                                          172 +
                                                          0 +
                                                          441 +
                                                          16 +
                                                          144 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          76,
                                                      },
                                                    },
                                                    children: a(D, {
                                                      height: 24,
                                                      width: `calc(max((min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 860px) - 27px) / 2, 50px) - 56px)`,
                                                      y:
                                                        (h?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        6646 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        64 +
                                                        100 +
                                                        172 +
                                                        0 +
                                                        0 +
                                                        16 +
                                                        144 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        76,
                                                      children: a(w, {
                                                        className: `framer-vacvk3-container`,
                                                        "data-framer-name": `Point 3`,
                                                        name: `Point 3`,
                                                        nodeId: `PmG7SFBHd`,
                                                        scopeId: `V2Ho_ZYv2`,
                                                        children: a(z, {
                                                          height: `100%`,
                                                          id: `PmG7SFBHd`,
                                                          layoutId: `PmG7SFBHd`,
                                                          name: `Point 3`,
                                                          style: { width: `100%` },
                                                          uRRrPnIeh: `Transparent, collaborative workflow`,
                                                          variant: Z(`GgzVsDmqK`),
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                  a(N, {
                                                    breakpoint: C,
                                                    overrides: {
                                                      ccwQtvViN: {
                                                        width: `calc(max((min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 860px) - 68px) / 2, 50px) - 44px)`,
                                                        y:
                                                          (h?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          7233 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          64 +
                                                          100 +
                                                          172 +
                                                          0 +
                                                          0 +
                                                          16 +
                                                          144 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          114,
                                                      },
                                                      sSgoNdsY3: {
                                                        width: `calc(max(min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 860px) - 24px, 50px) - 32px)`,
                                                        y:
                                                          (h?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          9603 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          64 +
                                                          100 +
                                                          172 +
                                                          0 +
                                                          441 +
                                                          16 +
                                                          144 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          114,
                                                      },
                                                    },
                                                    children: a(D, {
                                                      height: 24,
                                                      width: `calc(max((min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 860px) - 27px) / 2, 50px) - 56px)`,
                                                      y:
                                                        (h?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        6646 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        64 +
                                                        100 +
                                                        172 +
                                                        0 +
                                                        0 +
                                                        16 +
                                                        144 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        114,
                                                      children: a(w, {
                                                        className: `framer-ybao6z-container`,
                                                        "data-framer-name": `Point 4`,
                                                        name: `Point 4`,
                                                        nodeId: `z7APlAeCa`,
                                                        scopeId: `V2Ho_ZYv2`,
                                                        children: a(z, {
                                                          height: `100%`,
                                                          id: `z7APlAeCa`,
                                                          layoutId: `z7APlAeCa`,
                                                          name: `Point 4`,
                                                          style: { width: `100%` },
                                                          uRRrPnIeh: `Support beyond launch`,
                                                          variant: Z(`GgzVsDmqK`),
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                  a(N, {
                                                    breakpoint: C,
                                                    overrides: {
                                                      ccwQtvViN: {
                                                        width: `calc(max((min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 860px) - 68px) / 2, 50px) - 44px)`,
                                                        y:
                                                          (h?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          7233 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          64 +
                                                          100 +
                                                          172 +
                                                          0 +
                                                          0 +
                                                          16 +
                                                          144 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          152,
                                                      },
                                                      sSgoNdsY3: {
                                                        width: `calc(max(min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 860px) - 24px, 50px) - 32px)`,
                                                        y:
                                                          (h?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          9603 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          64 +
                                                          100 +
                                                          172 +
                                                          0 +
                                                          441 +
                                                          16 +
                                                          144 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          152,
                                                      },
                                                    },
                                                    children: a(D, {
                                                      height: 24,
                                                      width: `calc(max((min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 860px) - 27px) / 2, 50px) - 56px)`,
                                                      y:
                                                        (h?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        6646 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        64 +
                                                        100 +
                                                        172 +
                                                        0 +
                                                        0 +
                                                        16 +
                                                        144 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        152,
                                                      children: a(w, {
                                                        className: `framer-1c1zy2l-container`,
                                                        "data-framer-name": `Point 5`,
                                                        name: `Point 5`,
                                                        nodeId: `wFrXUuL1p`,
                                                        scopeId: `V2Ho_ZYv2`,
                                                        children: a(z, {
                                                          height: `100%`,
                                                          id: `wFrXUuL1p`,
                                                          layoutId: `wFrXUuL1p`,
                                                          name: `Point 5`,
                                                          style: { width: `100%` },
                                                          uRRrPnIeh: `Creates scalable AI workflows`,
                                                          variant: Z(`GgzVsDmqK`),
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                  a(N, {
                                                    breakpoint: C,
                                                    overrides: {
                                                      ccwQtvViN: {
                                                        width: `calc(max((min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 860px) - 68px) / 2, 50px) - 44px)`,
                                                        y:
                                                          (h?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          7233 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          64 +
                                                          100 +
                                                          172 +
                                                          0 +
                                                          0 +
                                                          16 +
                                                          144 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          190,
                                                      },
                                                      sSgoNdsY3: {
                                                        width: `calc(max(min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 860px) - 24px, 50px) - 32px)`,
                                                        y:
                                                          (h?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          9603 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          64 +
                                                          100 +
                                                          172 +
                                                          0 +
                                                          441 +
                                                          16 +
                                                          144 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          190,
                                                      },
                                                    },
                                                    children: a(D, {
                                                      height: 24,
                                                      width: `calc(max((min(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px, 860px) - 27px) / 2, 50px) - 56px)`,
                                                      y:
                                                        (h?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        6646 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        64 +
                                                        100 +
                                                        172 +
                                                        0 +
                                                        0 +
                                                        16 +
                                                        144 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        190,
                                                      children: a(w, {
                                                        className: `framer-9grxql-container`,
                                                        "data-framer-name": `Point 6`,
                                                        name: `Point 6`,
                                                        nodeId: `D7BzmoOxz`,
                                                        scopeId: `V2Ho_ZYv2`,
                                                        children: a(z, {
                                                          height: `100%`,
                                                          id: `D7BzmoOxz`,
                                                          layoutId: `D7BzmoOxz`,
                                                          name: `Point 6`,
                                                          style: { width: `100%` },
                                                          uRRrPnIeh: `Complete ownership and smooth handover`,
                                                          variant: Z(`GgzVsDmqK`),
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  a(j, {
                                    links: [
                                      {
                                        href: { hash: `:RYTvATOdp`, webPageId: `V2Ho_ZYv2` },
                                        implicitPathVariables: void 0,
                                      },
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
                                      a(N, {
                                        breakpoint: C,
                                        overrides: {
                                          ccwQtvViN: {
                                            y:
                                              (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              7233 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              64 +
                                              100 +
                                              650,
                                          },
                                          sSgoNdsY3: {
                                            y:
                                              (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              9603 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              64 +
                                              100 +
                                              1091,
                                          },
                                        },
                                        children: a(D, {
                                          height: 52,
                                          y:
                                            (h?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            6646 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            64 +
                                            100 +
                                            650,
                                          children: a(w, {
                                            className: `framer-1pxvdwz-container`,
                                            "data-framer-name": `Button`,
                                            name: `Button`,
                                            nodeId: `l7Luzeekb`,
                                            scopeId: `V2Ho_ZYv2`,
                                            children: a(N, {
                                              breakpoint: C,
                                              overrides: {
                                                ccwQtvViN: { pYpS56G6v: e[1] },
                                                sSgoNdsY3: { pYpS56G6v: e[2] },
                                              },
                                              children: a(Te, {
                                                C9TRGMpi1: `Get started`,
                                                height: `100%`,
                                                id: `l7Luzeekb`,
                                                kadcqQxoL: `20.5px 83.5px 20.5px 83.5px`,
                                                layoutId: `l7Luzeekb`,
                                                name: `Button`,
                                                pYpS56G6v: e[0],
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                              a(N, {
                                breakpoint: C,
                                overrides: {
                                  ccwQtvViN: {
                                    y: (h?.y || 0) + 0 + 0 + 0 + 7233 + 0 + 0 + 0 + 0 + 966,
                                  },
                                  sSgoNdsY3: {
                                    width: `calc(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px)`,
                                    y: (h?.y || 0) + 0 + 0 + 0 + 9603 + 0 + 0 + 0 + 0 + 1407,
                                  },
                                },
                                children: a(D, {
                                  height: 64,
                                  width: `calc(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px)`,
                                  y: (h?.y || 0) + 0 + 0 + 0 + 6646 + 0 + 0 + 0 + 0 + 966,
                                  children: a(w, {
                                    className: `framer-gv28zg-container`,
                                    "data-framer-name": `Pattern`,
                                    name: `Pattern`,
                                    nodeId: `YUFdpgYh4`,
                                    scopeId: `V2Ho_ZYv2`,
                                    children: a(N, {
                                      breakpoint: C,
                                      overrides: {
                                        ccwQtvViN: { variant: Z(`GGx7sb23r`) },
                                        sSgoNdsY3: { variant: Z(`GGx7sb23r`) },
                                      },
                                      children: a(R, {
                                        height: `100%`,
                                        id: `YUFdpgYh4`,
                                        layoutId: `YUFdpgYh4`,
                                        name: `Pattern`,
                                        style: { width: `100%` },
                                        variant: Z(`iE1Txx1gl`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                      a(N, {
                        breakpoint: C,
                        overrides: {
                          ccwQtvViN: { y: (h?.y || 0) + 0 + 0 + 0 + 8263 },
                          sSgoNdsY3: { y: (h?.y || 0) + 0 + 0 + 0 + 11074 },
                        },
                        children: a(D, {
                          height: 16,
                          width: h?.width || `100vw`,
                          y: (h?.y || 0) + 0 + 0 + 0 + 7676,
                          children: a(w, {
                            className: `framer-j0pa92-container`,
                            "data-framer-name": `Spacer`,
                            name: `Spacer`,
                            nodeId: `ixG7S7UyP`,
                            scopeId: `V2Ho_ZYv2`,
                            children: a(N, {
                              breakpoint: C,
                              overrides: {
                                ccwQtvViN: { variant: Z(`tDRwbo2Hu`) },
                                sSgoNdsY3: { variant: Z(`FfOd6J0WM`) },
                              },
                              children: a(I, {
                                byu2TjtOU: {
                                  borderBottomWidth: 1,
                                  borderColor: `var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1))`,
                                  borderLeftWidth: 0,
                                  borderRightWidth: 0,
                                  borderStyle: `solid`,
                                  borderTopWidth: 1,
                                },
                                height: `100%`,
                                id: `ixG7S7UyP`,
                                layoutId: `ixG7S7UyP`,
                                name: `Spacer`,
                                style: { height: `100%`, width: `100%` },
                                variant: Z(`hFLhZnXcH`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                      c(`section`, {
                        className: `framer-x8tbhu`,
                        "data-border": !0,
                        "data-framer-name": `Why choose us`,
                        children: [
                          a(`div`, {
                            className: `framer-2ro053`,
                            "data-framer-name": `Container`,
                            children: c(`div`, {
                              className: `framer-ld2cvg`,
                              "data-border": !0,
                              "data-framer-name": `Main wrapper`,
                              children: [
                                a(`div`, {
                                  className: `framer-8blhdc`,
                                  "data-framer-name": `Text wrapper`,
                                  children: c(`div`, {
                                    className: `framer-12e0uo6`,
                                    "data-framer-name": `Heading wrapper`,
                                    children: [
                                      a(N, {
                                        breakpoint: C,
                                        overrides: {
                                          ccwQtvViN: {
                                            y:
                                              (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              8279 +
                                              0 +
                                              0 +
                                              0 +
                                              100 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          sSgoNdsY3: {
                                            y:
                                              (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              11090 +
                                              0 +
                                              0 +
                                              0 +
                                              100 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: a(D, {
                                          height: 20,
                                          y:
                                            (h?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            7692 +
                                            0 +
                                            0 +
                                            0 +
                                            100 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                          children: a(w, {
                                            className: `framer-jn977s-container`,
                                            "data-framer-name": `Section tag`,
                                            name: `Section tag`,
                                            nodeId: `m7gfCLuTS`,
                                            scopeId: `V2Ho_ZYv2`,
                                            children: a(L, {
                                              height: `100%`,
                                              id: `m7gfCLuTS`,
                                              layoutId: `m7gfCLuTS`,
                                              name: `Section tag`,
                                              RRhqTkqTM: `WHY CHOOSE US`,
                                              variant: Z(`X6yPU2SuQ`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      a(x, {
                                        __fromCanvasComponent: !0,
                                        children: a(i, {
                                          children: a(`h2`, {
                                            className: `framer-styles-preset-v5pzc9`,
                                            "data-styles-preset": `MeF89MvDJ`,
                                            dir: `auto`,
                                            children: `Built to Move Your Business Forward`,
                                          }),
                                        }),
                                        className: `framer-r2ujoj`,
                                        effect: Wr,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                }),
                                c(`div`, {
                                  className: `framer-1qx5qzm`,
                                  "data-framer-name": `Wrapper`,
                                  children: [
                                    c(`div`, {
                                      className: `framer-19g9ged`,
                                      "data-framer-name": `Grid 4x`,
                                      children: [
                                        a(N, {
                                          breakpoint: C,
                                          overrides: {
                                            ccwQtvViN: {
                                              width: `max((min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px) / 2, 50px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                8279 +
                                                0 +
                                                0 +
                                                0 +
                                                100 +
                                                308 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                            },
                                            sSgoNdsY3: {
                                              width: `max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 50px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                11090 +
                                                0 +
                                                0 +
                                                0 +
                                                100 +
                                                168 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                            },
                                          },
                                          children: a(D, {
                                            height: 337,
                                            width: `max((min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px) / 4, 50px)`,
                                            y:
                                              (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              7692 +
                                              0 +
                                              0 +
                                              0 +
                                              100 +
                                              308 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                            children: a(X, {
                                              __framer__animate: { transition: Kr },
                                              __framer__animateOnce: !0,
                                              __framer__enter: Gr,
                                              __framer__exit: qr,
                                              __framer__styleAppearEffectEnabled: !0,
                                              __framer__threshold: 0.5,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className: `framer-1r73rzo-container`,
                                              "data-framer-name": `Why choose us card`,
                                              name: `Why choose us card`,
                                              nodeId: `io8cefUAU`,
                                              rendersWithMotion: !0,
                                              scopeId: `V2Ho_ZYv2`,
                                              children: a(N, {
                                                breakpoint: C,
                                                overrides: {
                                                  sSgoNdsY3: { variant: Z(`EZyfgMpPc`) },
                                                },
                                                children: a(Ge, {
                                                  height: `100%`,
                                                  id: `io8cefUAU`,
                                                  layoutId: `io8cefUAU`,
                                                  name: `Why choose us card`,
                                                  qFlpib6ZK: `— Every project begins with your goals, audience, and a clear plan for success.`,
                                                  RQH8nGlxC: `56px`,
                                                  style: { width: `100%` },
                                                  U0fFT4g9u: $(
                                                    {
                                                      pixelHeight: 32,
                                                      pixelWidth: 32,
                                                      src: `../../assets/images/iCV4LZficAE9Kt5IO1oMGK6TJWU.svg`,
                                                    },
                                                    ``
                                                  ),
                                                  variant: Z(`tNV5vtQHe`),
                                                  width: `100%`,
                                                  Zq6uEg2GQ: `Strategy Driven`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        a(N, {
                                          breakpoint: C,
                                          overrides: {
                                            ccwQtvViN: {
                                              width: `max((min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px) / 2, 50px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                8279 +
                                                0 +
                                                0 +
                                                0 +
                                                100 +
                                                308 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                            },
                                            sSgoNdsY3: {
                                              width: `max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 50px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                11090 +
                                                0 +
                                                0 +
                                                0 +
                                                100 +
                                                168 +
                                                0 +
                                                0 +
                                                0 +
                                                337,
                                            },
                                          },
                                          children: a(D, {
                                            height: 337,
                                            width: `max((min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px) / 4, 50px)`,
                                            y:
                                              (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              7692 +
                                              0 +
                                              0 +
                                              0 +
                                              100 +
                                              308 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                            children: a(X, {
                                              __framer__animate: { transition: Yr },
                                              __framer__animateOnce: !0,
                                              __framer__enter: Jr,
                                              __framer__exit: Xr,
                                              __framer__styleAppearEffectEnabled: !0,
                                              __framer__threshold: 0.5,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className: `framer-tjxwa9-container`,
                                              "data-framer-name": `Why choose us card`,
                                              name: `Why choose us card`,
                                              nodeId: `ZRVygXZGO`,
                                              rendersWithMotion: !0,
                                              scopeId: `V2Ho_ZYv2`,
                                              children: a(N, {
                                                breakpoint: C,
                                                overrides: {
                                                  sSgoNdsY3: { variant: Z(`EZyfgMpPc`) },
                                                },
                                                children: a(Ge, {
                                                  height: `100%`,
                                                  id: `ZRVygXZGO`,
                                                  layoutId: `ZRVygXZGO`,
                                                  name: `Why choose us card`,
                                                  qFlpib6ZK: `— We create reliable digital products designed to perform and grow with your business.`,
                                                  RQH8nGlxC: `56px`,
                                                  style: { height: `100%`, width: `100%` },
                                                  U0fFT4g9u: $(
                                                    {
                                                      pixelHeight: 32,
                                                      pixelWidth: 32,
                                                      src: `../../assets/images/1vC4YgVCbo9msa3sHtB1BsTeu0.svg`,
                                                    },
                                                    ``
                                                  ),
                                                  variant: Z(`tNV5vtQHe`),
                                                  width: `100%`,
                                                  Zq6uEg2GQ: `Built for Results`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        a(N, {
                                          breakpoint: C,
                                          overrides: {
                                            ccwQtvViN: {
                                              width: `max((min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px) / 2, 50px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                8279 +
                                                0 +
                                                0 +
                                                0 +
                                                100 +
                                                308 +
                                                0 +
                                                0 +
                                                0 +
                                                337,
                                            },
                                            sSgoNdsY3: {
                                              width: `max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 50px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                11090 +
                                                0 +
                                                0 +
                                                0 +
                                                100 +
                                                168 +
                                                0 +
                                                0 +
                                                0 +
                                                674,
                                            },
                                          },
                                          children: a(D, {
                                            height: 337,
                                            width: `max((min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px) / 4, 50px)`,
                                            y:
                                              (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              7692 +
                                              0 +
                                              0 +
                                              0 +
                                              100 +
                                              308 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                            children: a(X, {
                                              __framer__animate: { transition: Zr },
                                              __framer__animateOnce: !0,
                                              __framer__enter: Jr,
                                              __framer__exit: Qr,
                                              __framer__styleAppearEffectEnabled: !0,
                                              __framer__threshold: 0.5,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className: `framer-juhwh-container`,
                                              "data-framer-name": `Why choose us card`,
                                              name: `Why choose us card`,
                                              nodeId: `dfXx50RfN`,
                                              rendersWithMotion: !0,
                                              scopeId: `V2Ho_ZYv2`,
                                              children: a(N, {
                                                breakpoint: C,
                                                overrides: {
                                                  sSgoNdsY3: { variant: Z(`EZyfgMpPc`) },
                                                },
                                                children: a(Ge, {
                                                  height: `100%`,
                                                  id: `dfXx50RfN`,
                                                  layoutId: `dfXx50RfN`,
                                                  name: `Why choose us card`,
                                                  qFlpib6ZK: `— You stay involved through open communication, regular updates, and shared decisions.`,
                                                  RQH8nGlxC: `56px`,
                                                  style: { height: `100%`, width: `100%` },
                                                  U0fFT4g9u: $(
                                                    {
                                                      pixelHeight: 32,
                                                      pixelWidth: 32,
                                                      src: `../../assets/images/JH3WmneZqvZUEw98Qm7rXVFxEJQ.svg`,
                                                    },
                                                    ``
                                                  ),
                                                  variant: Z(`tNV5vtQHe`),
                                                  width: `100%`,
                                                  Zq6uEg2GQ: `Collaborative Process`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        a(N, {
                                          breakpoint: C,
                                          overrides: {
                                            ccwQtvViN: {
                                              width: `max((min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px) / 2, 50px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                8279 +
                                                0 +
                                                0 +
                                                0 +
                                                100 +
                                                308 +
                                                0 +
                                                0 +
                                                0 +
                                                337,
                                            },
                                            sSgoNdsY3: {
                                              width: `max(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px, 50px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                11090 +
                                                0 +
                                                0 +
                                                0 +
                                                100 +
                                                168 +
                                                0 +
                                                0 +
                                                0 +
                                                1011,
                                            },
                                          },
                                          children: a(D, {
                                            height: 337,
                                            width: `max((min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px) / 4, 50px)`,
                                            y:
                                              (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              7692 +
                                              0 +
                                              0 +
                                              0 +
                                              100 +
                                              308 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                            children: a(X, {
                                              __framer__animate: { transition: $r },
                                              __framer__animateOnce: !0,
                                              __framer__enter: Jr,
                                              __framer__exit: ei,
                                              __framer__styleAppearEffectEnabled: !0,
                                              __framer__threshold: 0.5,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className: `framer-1nq7us5-container`,
                                              "data-framer-name": `Why choose us card`,
                                              name: `Why choose us card`,
                                              nodeId: `zRSrIeegN`,
                                              rendersWithMotion: !0,
                                              scopeId: `V2Ho_ZYv2`,
                                              children: a(N, {
                                                breakpoint: C,
                                                overrides: {
                                                  sSgoNdsY3: { variant: Z(`EZyfgMpPc`) },
                                                },
                                                children: a(Ge, {
                                                  height: `100%`,
                                                  id: `zRSrIeegN`,
                                                  layoutId: `zRSrIeegN`,
                                                  name: `Why choose us card`,
                                                  qFlpib6ZK: `— We maintain high standards from strategy and design through launch and support.`,
                                                  RQH8nGlxC: `56px`,
                                                  style: { height: `100%`, width: `100%` },
                                                  U0fFT4g9u: $(
                                                    {
                                                      pixelHeight: 32,
                                                      pixelWidth: 32,
                                                      src: `../../assets/images/23S4GQlMnQBCADv4dVCvE6RtY6s.svg`,
                                                    },
                                                    ``
                                                  ),
                                                  variant: Z(`tNV5vtQHe`),
                                                  width: `100%`,
                                                  Zq6uEg2GQ: `Consistent Excellence`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    a(N, {
                                      breakpoint: C,
                                      overrides: {
                                        ccwQtvViN: {
                                          y:
                                            (h?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            8279 +
                                            0 +
                                            0 +
                                            0 +
                                            100 +
                                            308 +
                                            0 +
                                            674,
                                        },
                                        sSgoNdsY3: {
                                          width: `calc(min(max(${h?.width || `100vw`}, 1px), 1440px) - 24px)`,
                                          y:
                                            (h?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            11090 +
                                            0 +
                                            0 +
                                            0 +
                                            100 +
                                            168 +
                                            0 +
                                            1348,
                                        },
                                      },
                                      children: a(D, {
                                        height: 64,
                                        width: `calc(min(max(${h?.width || `100vw`}, 1px), 1440px) - 32px)`,
                                        y:
                                          (h?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          7692 +
                                          0 +
                                          0 +
                                          0 +
                                          100 +
                                          308 +
                                          0 +
                                          337,
                                        children: a(w, {
                                          className: `framer-ryq9lp-container`,
                                          "data-framer-name": `Pattern`,
                                          name: `Pattern`,
                                          nodeId: `rX7yiNpZr`,
                                          scopeId: `V2Ho_ZYv2`,
                                          children: a(N, {
                                            breakpoint: C,
                                            overrides: {
                                              ccwQtvViN: { variant: Z(`GGx7sb23r`) },
                                              sSgoNdsY3: { variant: Z(`GGx7sb23r`) },
                                            },
                                            children: a(R, {
                                              height: `100%`,
                                              id: `rX7yiNpZr`,
                                              layoutId: `rX7yiNpZr`,
                                              name: `Pattern`,
                                              style: { width: `100%` },
                                              variant: Z(`iE1Txx1gl`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          c(`div`, {
                            className: `framer-12tcwks`,
                            "data-framer-name": `Top right`,
                            children: [
                              c(`div`, {
                                className: `framer-26mwpz`,
                                "data-framer-name": `Top wrapper`,
                                children: [
                                  a(`div`, {
                                    className: `framer-1yw7n8a`,
                                    "data-framer-name": `wrapper`,
                                  }),
                                  a(`div`, {
                                    className: `framer-1o7e5vf`,
                                    "data-framer-name": `wrapper`,
                                  }),
                                ],
                              }),
                              a(`div`, {
                                className: `framer-1cy7c2t`,
                                "data-framer-name": `Center wrapper`,
                                children: a(`div`, {
                                  className: `framer-1kf3987`,
                                  "data-framer-name": `Center`,
                                }),
                              }),
                              a(`div`, {
                                className: `framer-rcgzyd`,
                                "data-framer-name": `Bottom wrapper`,
                                children: a(`div`, {
                                  className: `framer-1xws0px`,
                                  "data-framer-name": `wrapper`,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      a(N, {
                        breakpoint: C,
                        overrides: {
                          ccwQtvViN: { y: (h?.y || 0) + 0 + 0 + 0 + 9425 },
                          sSgoNdsY3: { y: (h?.y || 0) + 0 + 0 + 0 + 12770 },
                        },
                        children: a(D, {
                          height: 16,
                          width: h?.width || `100vw`,
                          y: (h?.y || 0) + 0 + 0 + 0 + 8501,
                          children: a(w, {
                            className: `framer-4r216-container`,
                            "data-framer-name": `Spacer`,
                            name: `Spacer`,
                            nodeId: `GTIgwNJSt`,
                            scopeId: `V2Ho_ZYv2`,
                            children: a(N, {
                              breakpoint: C,
                              overrides: {
                                ccwQtvViN: { variant: Z(`tDRwbo2Hu`) },
                                sSgoNdsY3: { variant: Z(`FfOd6J0WM`) },
                              },
                              children: a(I, {
                                byu2TjtOU: {
                                  borderBottomWidth: 1,
                                  borderColor: `var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1))`,
                                  borderLeftWidth: 0,
                                  borderRightWidth: 0,
                                  borderStyle: `solid`,
                                  borderTopWidth: 1,
                                },
                                height: `100%`,
                                id: `GTIgwNJSt`,
                                layoutId: `GTIgwNJSt`,
                                name: `Spacer`,
                                style: { height: `100%`, width: `100%` },
                                variant: Z(`hFLhZnXcH`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                      a(N, {
                        breakpoint: C,
                        overrides: {
                          ccwQtvViN: { y: (h?.y || 0) + 0 + 0 + 0 + 9441 },
                          sSgoNdsY3: { y: (h?.y || 0) + 0 + 0 + 0 + 12786 },
                        },
                        children: a(D, {
                          height: 900,
                          width: h?.width || `100vw`,
                          y: (h?.y || 0) + 0 + 0 + 0 + 8517,
                          children: a(w, {
                            className: `framer-1kahsne-container`,
                            "data-framer-name": `Faqs`,
                            name: `Faqs`,
                            nodeId: `BATFtw9wA`,
                            scopeId: `V2Ho_ZYv2`,
                            children: a(N, {
                              breakpoint: C,
                              overrides: {
                                ccwQtvViN: { variant: Z(`zKeMQgcGv`) },
                                sSgoNdsY3: { variant: Z(`SuSurHfS1`) },
                              },
                              children: a(Pe, {
                                height: `100%`,
                                id: `BATFtw9wA`,
                                layoutId: `BATFtw9wA`,
                                name: `Faqs`,
                                style: { width: `100%` },
                                variant: Z(`cDA4Klwc5`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                      a(N, {
                        breakpoint: C,
                        overrides: {
                          ccwQtvViN: { y: (h?.y || 0) + 0 + 0 + 0 + 10341 },
                          sSgoNdsY3: { y: (h?.y || 0) + 0 + 0 + 0 + 13686 },
                        },
                        children: a(D, {
                          height: 16,
                          width: h?.width || `100vw`,
                          y: (h?.y || 0) + 0 + 0 + 0 + 9417,
                          children: a(w, {
                            className: `framer-k83iix-container`,
                            "data-framer-name": `Spacer`,
                            name: `Spacer`,
                            nodeId: `izshoVE4u`,
                            scopeId: `V2Ho_ZYv2`,
                            children: a(N, {
                              breakpoint: C,
                              overrides: {
                                ccwQtvViN: { variant: Z(`tDRwbo2Hu`) },
                                sSgoNdsY3: { variant: Z(`FfOd6J0WM`) },
                              },
                              children: a(I, {
                                byu2TjtOU: {
                                  borderBottomWidth: 1,
                                  borderColor: `var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1))`,
                                  borderLeftWidth: 0,
                                  borderRightWidth: 0,
                                  borderStyle: `solid`,
                                  borderTopWidth: 1,
                                },
                                height: `100%`,
                                id: `izshoVE4u`,
                                layoutId: `izshoVE4u`,
                                name: `Spacer`,
                                style: { height: `100%`, width: `100%` },
                                variant: Z(`hFLhZnXcH`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                      a(N, {
                        breakpoint: C,
                        overrides: {
                          ccwQtvViN: { y: (h?.y || 0) + 0 + 0 + 0 + 10357 },
                          sSgoNdsY3: { y: (h?.y || 0) + 0 + 0 + 0 + 13702 },
                        },
                        children: a(D, {
                          height: 616,
                          width: h?.width || `100vw`,
                          y: (h?.y || 0) + 0 + 0 + 0 + 9433,
                          children: a(w, {
                            className: `framer-1h96nor-container`,
                            "data-framer-name": `CTA`,
                            name: `CTA`,
                            nodeId: `JFZ4520pv`,
                            scopeId: `V2Ho_ZYv2`,
                            children: a(N, {
                              breakpoint: C,
                              overrides: {
                                ccwQtvViN: { variant: Z(`YXwu_KVCp`) },
                                sSgoNdsY3: { variant: Z(`qo1urAWXs`) },
                              },
                              children: a(qe, {
                                height: `100%`,
                                id: `JFZ4520pv`,
                                layoutId: `JFZ4520pv`,
                                name: `CTA`,
                                style: { width: `100%` },
                                variant: Z(`nzcjbCj05`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                      a(N, {
                        breakpoint: C,
                        overrides: {
                          ccwQtvViN: { y: (h?.y || 0) + 0 + 0 + 0 + 10973 },
                          sSgoNdsY3: { y: (h?.y || 0) + 0 + 0 + 0 + 14318 },
                        },
                        children: a(D, {
                          height: 574,
                          width: h?.width || `100vw`,
                          y: (h?.y || 0) + 0 + 0 + 0 + 10049,
                          children: a(w, {
                            className: `framer-15nxlwf-container`,
                            "data-framer-name": `Contact`,
                            id: Se,
                            name: `Contact`,
                            nodeId: `RYTvATOdp`,
                            ref: Ce,
                            scopeId: `V2Ho_ZYv2`,
                            children: a(N, {
                              breakpoint: C,
                              overrides: {
                                ccwQtvViN: { variant: Z(`oep8lpRGR`) },
                                sSgoNdsY3: { variant: Z(`ckT5bXPC2`) },
                              },
                              children: a(De, {
                                height: `100%`,
                                id: `RYTvATOdp`,
                                layoutId: `RYTvATOdp`,
                                name: `Contact`,
                                style: { width: `100%` },
                                variant: Z(`PfoLjns4X`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                      a(N, {
                        breakpoint: C,
                        overrides: {
                          ccwQtvViN: { y: (h?.y || 0) + 0 + 0 + 0 + 11547 },
                          sSgoNdsY3: { y: (h?.y || 0) + 0 + 0 + 0 + 14892 },
                        },
                        children: a(D, {
                          height: 16,
                          width: h?.width || `100vw`,
                          y: (h?.y || 0) + 0 + 0 + 0 + 10623,
                          children: a(w, {
                            className: `framer-1kk2bwq-container`,
                            "data-framer-name": `Spacer`,
                            name: `Spacer`,
                            nodeId: `nCjzDDGlW`,
                            scopeId: `V2Ho_ZYv2`,
                            children: a(N, {
                              breakpoint: C,
                              overrides: {
                                ccwQtvViN: { variant: Z(`tDRwbo2Hu`) },
                                sSgoNdsY3: { variant: Z(`FfOd6J0WM`) },
                              },
                              children: a(I, {
                                byu2TjtOU: {
                                  borderBottomWidth: 1,
                                  borderColor: `var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1))`,
                                  borderLeftWidth: 0,
                                  borderRightWidth: 0,
                                  borderStyle: `solid`,
                                  borderTopWidth: 1,
                                },
                                height: `100%`,
                                id: `nCjzDDGlW`,
                                layoutId: `nCjzDDGlW`,
                                name: `Spacer`,
                                style: { height: `100%`, width: `100%` },
                                variant: Z(`hFLhZnXcH`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                a(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-Wujyt.framer-1m6uors, .framer-Wujyt .framer-1m6uors { display: block; }`,
        `.framer-Wujyt.framer-kocoi9 { align-content: center; align-items: center; background-color: var(--token-0fbfb1aa-14cf-4d4e-9401-7de4a733d912, #f3f4f6); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1440px; }`,
        `.framer-Wujyt .framer-67ghue { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-1xge37j { --border-bottom-width: 1px; --border-color: var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 173px 0px 116px 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-Wujyt .framer-15qyk8n { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px 16px 0px 16px; position: relative; width: 1px; z-index: 3; }`,
        `.framer-Wujyt .framer-1egoiys { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 4; }`,
        `.framer-Wujyt .framer-fuwi98 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-a9kr2m { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 44px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 1px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-Wujyt .framer-y5swt3, .framer-Wujyt .framer-g1dcmr { --border-bottom-width: 1px; --border-color: var(--token-882ca0e8-d580-4f03-9a91-470de2a53ebf, rgba(67, 67, 67, 0.5)); --border-left-width: 0px; --border-right-width: 0px; --border-style: dashed; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-0fbfb1aa-14cf-4d4e-9401-7de4a733d912, #f3f4f6); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 42px 82px 41px 83px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-qx1f5z { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap: balance; flex: none; height: auto; position: relative; white-space: pre; width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 7; }`,
        `.framer-Wujyt .framer-1namqgq-container { bottom: -42px; flex: none; height: auto; left: 0px; position: absolute; right: 0px; z-index: 4; }`,
        `.framer-Wujyt .framer-t12oru-container { flex: none; height: auto; position: relative; width: auto; z-index: 5; }`,
        `.framer-Wujyt .framer-1hwpv3s { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 44px; height: min-content; justify-content: center; overflow: visible; padding: 0px 1px 0px 0px; position: relative; width: 1px; }`,
        `.framer-Wujyt .framer-1vozo0s { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-Wujyt .framer-17psvxg-container { flex: none; height: auto; left: 0px; position: absolute; right: 0px; top: -42px; z-index: 4; }`,
        `.framer-Wujyt .framer-1mzama9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 444px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-f1sg5u { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 380px; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-Wujyt .framer-1jry1td { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-Wujyt .framer-1dhey80-container, .framer-Wujyt .framer-1nxhe1q-container, .framer-Wujyt .framer-tjm6gv-container, .framer-Wujyt .framer-4flt1i-container, .framer-Wujyt .framer-s5o4ro-container, .framer-Wujyt .framer-199easw-container, .framer-Wujyt .framer-vha39s-container, .framer-Wujyt .framer-118lpw7-container, .framer-Wujyt .framer-4v41ov-container, .framer-Wujyt .framer-tdw9oj-container, .framer-Wujyt .framer-18ozkq2-container, .framer-Wujyt .framer-1yovkyz-container, .framer-Wujyt .framer-b6y0t-container, .framer-Wujyt .framer-cef0yr-container, .framer-Wujyt .framer-cxbyel-container, .framer-Wujyt .framer-1pxvdwz-container, .framer-Wujyt .framer-jn977s-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-Wujyt .framer-ohhe63 { --border-bottom-width: 0px; --border-color: var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; left: 50%; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; transform: translateX(-50%); width: 1408px; will-change: var(--framer-will-change-filter-override, filter); z-index: 2; }`,
        `.framer-Wujyt .framer-exrder { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 223px; justify-content: flex-start; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; top: 1px; width: 260px; z-index: 1; }`,
        `.framer-Wujyt .framer-fnjcda, .framer-Wujyt .framer-15oz2gb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-17cukax, .framer-Wujyt .framer-1wtl5bh { aspect-ratio: 1 / 1; background-color: var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, #98ff03); flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 74px; }`,
        `.framer-Wujyt .framer-19hk37l { background-color: var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, #98ff03); flex: none; height: 74px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 148px; }`,
        `.framer-Wujyt .framer-15nolkr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 40px 0px 0px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-3vd6nt { aspect-ratio: 1.0136986301369864 / 1; background-color: var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, #98ff03); flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 74px; }`,
        `.framer-Wujyt .framer-1eufpm9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-Wujyt .framer-197a109 { align-content: flex-start; align-items: flex-start; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 321px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; right: 0px; width: 377px; z-index: 1; }`,
        `.framer-Wujyt .framer-wkv06c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-1olxzl9, .framer-Wujyt .framer-1ta0if4, .framer-Wujyt .framer-17fkpbs { aspect-ratio: 1 / 1; background-color: var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, #98ff03); flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 107px; }`,
        `.framer-Wujyt .framer-3frofh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 0px 56px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-1fecmay { background-color: var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, #98ff03); flex: none; height: 107px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 215px; }`,
        `.framer-Wujyt .framer-pmf1hr-container { flex: none; height: auto; position: relative; width: 100%; z-index: 0; }`,
        `.framer-Wujyt .framer-2h19ob-container { flex: none; height: auto; max-width: 1440px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Wujyt .framer-1v8an3t-container, .framer-Wujyt .framer-1yzdffz-container { flex: none; height: 16px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Wujyt .framer-msma7a, .framer-Wujyt .framer-x8tbhu { --border-bottom-width: 1px; --border-color: var(--token-697a1175-e86a-44f8-8b7f-9f4d44f05ad4, rgba(3, 7, 18, 0.1)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-0fbfb1aa-14cf-4d4e-9401-7de4a733d912, #f3f4f6); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Wujyt .framer-uap2iz, .framer-Wujyt .framer-1wj5d6w { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px 16px 0px 16px; position: relative; width: 1px; }`,
        `.framer-Wujyt .framer-kvolqb { align-content: flex-start; align-items: flex-start; background-color: var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, #ffffff); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 81px; height: min-content; justify-content: flex-start; overflow: visible; padding: 100px 0px 0px 0px; position: relative; width: 1px; }`,
        `.framer-Wujyt .framer-1i4c8y9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; max-width: 797px; overflow: visible; padding: 0px 0px 0px 56px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-stv1c3, .framer-Wujyt .framer-4x2c6u, .framer-Wujyt .framer-183ahdk, .framer-Wujyt .framer-1vbt33u, .framer-Wujyt .framer-sz10d6, .framer-Wujyt .framer-v1xfly, .framer-Wujyt .framer-121akh2, .framer-Wujyt .framer-r2ujoj { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Wujyt .framer-f8my9p, .framer-Wujyt .framer-hk1cu5, .framer-Wujyt .framer-1qx5qzm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-avnr9s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 503px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-1n9b0nc { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; max-width: 606px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Wujyt .framer-r09uhk-container, .framer-Wujyt .framer-gxr8qc-container, .framer-Wujyt .framer-1tqs62g-container, .framer-Wujyt .framer-1exlrok-container, .framer-Wujyt .framer-1rp3cqo-container, .framer-Wujyt .framer-9f4da-container, .framer-Wujyt .framer-1rcjkkd-container, .framer-Wujyt .framer-1ipm6ke-container, .framer-Wujyt .framer-1mtg47z-container, .framer-Wujyt .framer-1k6bxxt-container, .framer-Wujyt .framer-1cfanz5-container, .framer-Wujyt .framer-9qlw2g-container, .framer-Wujyt .framer-1yrxu8s-container, .framer-Wujyt .framer-xq4wqf-container, .framer-Wujyt .framer-9510q8-container, .framer-Wujyt .framer-grxgj7-container, .framer-Wujyt .framer-f9kwa3-container, .framer-Wujyt .framer-1djqu8g-container, .framer-Wujyt .framer-1295stf-container, .framer-Wujyt .framer-1n87r9m-container, .framer-Wujyt .framer-1ox02fp-container, .framer-Wujyt .framer-1p2zjcl-container, .framer-Wujyt .framer-1jon0b1-container, .framer-Wujyt .framer-vacvk3-container, .framer-Wujyt .framer-ybao6z-container, .framer-Wujyt .framer-1c1zy2l-container, .framer-Wujyt .framer-9grxql-container, .framer-Wujyt .framer-1kahsne-container, .framer-Wujyt .framer-1h96nor-container, .framer-Wujyt .framer-15nxlwf-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-rjyh56 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 0px 56px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-1j9arbd { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Wujyt .framer-1ej76rx { flex: 1 0 0px; height: 505px; overflow: var(--overflow-clip-fallback, clip); position: relative; text-decoration: none; width: 1px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-Wujyt .framer-1lh5u1s { align-content: center; align-items: center; bottom: -1px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 615px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; width: min-content; z-index: 0; }`,
        `.framer-Wujyt .framer-1yvnqa8, .framer-Wujyt .framer-1mlc5hz, .framer-Wujyt .framer-rcgzyd { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 37px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: auto; }`,
        `.framer-Wujyt .framer-5ud1zj { aspect-ratio: 1 / 1; background-color: var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, #ffffff); flex: none; gap: 10px; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 50px; }`,
        `.framer-Wujyt .framer-1alww4n { aspect-ratio: 2 / 1; background-color: var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, #ffffff); flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100px; }`,
        `.framer-Wujyt .framer-12aexcx, .framer-Wujyt .framer-1cy7c2t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 40px 0px 0px; position: relative; width: min-content; }`,
        `.framer-Wujyt .framer-6p5b8b, .framer-Wujyt .framer-1120dr9 { aspect-ratio: 1 / 1; background-color: var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, #ffffff); flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 50px; }`,
        `.framer-Wujyt .framer-1hsrgdh-container { aspect-ratio: 1 / 1; flex: none; height: auto; left: -2px; position: absolute; top: -3px; width: 6px; z-index: 1; }`,
        `.framer-Wujyt .framer-1jjw0d7-container { aspect-ratio: 1 / 1; flex: none; height: auto; position: absolute; right: -2px; top: -3px; width: 6px; z-index: 1; }`,
        `.framer-Wujyt .framer-rsd488-container, .framer-Wujyt .framer-uwbfro-container, .framer-Wujyt .framer-1we930r-container, .framer-Wujyt .framer-17zk2wz-container, .framer-Wujyt .framer-j0pa92-container, .framer-Wujyt .framer-4r216-container, .framer-Wujyt .framer-k83iix-container, .framer-Wujyt .framer-1kk2bwq-container { flex: none; height: 16px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-Wujyt .framer-nh4enu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Wujyt .framer-59acm6, .framer-Wujyt .framer-1l47mrj { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px 16px 0px 16px; position: relative; width: 1px; }`,
        `.framer-Wujyt .framer-12dpkgw { align-content: center; align-items: center; background-color: var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, #ffffff); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; overflow: visible; padding: 100px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-nlufbp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; max-width: 855px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-u7jisj { display: grid; flex: none; gap: 0px; height: min-content; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-1pa1b7b-container, .framer-Wujyt .framer-1utnmmy-container, .framer-Wujyt .framer-1uhymrj-container, .framer-Wujyt .framer-jl9ufh-container, .framer-Wujyt .framer-1r73rzo-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-1j2z14z-container { aspect-ratio: 1 / 1; flex: none; height: auto; position: absolute; right: -2px; top: -3px; width: 6px; z-index: 2; }`,
        `.framer-Wujyt .framer-nsbmq3-container { aspect-ratio: 1 / 1; flex: none; height: auto; left: -2px; position: absolute; top: 0%; transform: translateY(-50%); width: 6px; z-index: 1; }`,
        `.framer-Wujyt .framer-krm6f7 { align-content: center; align-items: center; background-color: var(--token-0fbfb1aa-14cf-4d4e-9401-7de4a733d912, #f3f4f6); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: hidden; padding: 207px 0px 207px 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Wujyt .framer-1oomz4x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 855px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-1j9ldtf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-1pae7k8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: wrap; gap: 11px 11px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-ica858 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-Wujyt .framer-1klaz6r, .framer-Wujyt .framer-p14oup, .framer-Wujyt .framer-1djckd9, .framer-Wujyt .framer-1xozvv3, .framer-Wujyt .framer-dlvo13, .framer-Wujyt .framer-t7933y, .framer-Wujyt .framer-2l481i, .framer-Wujyt .framer-j2lx6n, .framer-Wujyt .framer-xcrdth, .framer-Wujyt .framer-1y0wh7q { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Wujyt .framer-s7e2r1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 64px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 140px; z-index: 1; }`,
        `.framer-Wujyt .framer-198kf36 { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 64px; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: 0px; width: 140px; z-index: 2; }`,
        `.framer-Wujyt .framer-ze3p5a { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 460px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Wujyt .framer-idy34x { --border-bottom-width: 1px; --border-color: var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-0fbfb1aa-14cf-4d4e-9401-7de4a733d912, #f3f4f6); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Wujyt .framer-14h8yx0 { align-content: center; align-items: center; background-color: var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, #ffffff); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 44px; height: min-content; justify-content: center; overflow: visible; padding: 100px 0px 0px 0px; position: relative; width: 1px; }`,
        `.framer-Wujyt .framer-1wx75ui { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 124px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 56px 0px 56px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-7aiy3c { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 188px; height: min-content; justify-content: center; max-width: 536px; overflow: visible; padding: 0px; position: sticky; top: 120px; width: 1px; z-index: 1; }`,
        `.framer-Wujyt .framer-qtm9ps, .framer-Wujyt .framer-p66l87 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-1akkj6i { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; max-width: 636px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-Wujyt .framer-v8rr17 { align-content: center; align-items: center; background: linear-gradient(180deg, #f5f5f5 0%, rgb(242, 242, 242) 100%); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; box-shadow: inset 0px -6px 0px 1px rgba(250, 250, 250, 0.25), inset 0px -5px 0px 0px rgba(0, 0, 0, 0.25), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.6); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 16px 16px 32px 16px; position: sticky; top: 120px; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-Wujyt .framer-1nifr6f { align-content: center; align-items: center; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Wujyt .framer-1tgmtrt { align-content: center; align-items: center; background-color: var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, #ffffff); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 54px 49px 63px 49px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Wujyt .framer-11hkxwa { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-10y1nss { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-15wawgb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px 30px 0px 0px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-a80pro { aspect-ratio: 1 / 1; bottom: 0px; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; width: 149px; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
        `.framer-Wujyt .framer-6vntzn { align-content: center; align-items: center; background: linear-gradient(180deg, #f5f5f5 0%, rgb(242, 242, 242) 100%); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; box-shadow: inset 0px -6px 0px 1px rgba(250, 250, 250, 0.25), inset 0px -5px 0px 0px rgba(0, 0, 0, 0.25), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.6); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 16px 16px 32px 16px; position: sticky; top: 140px; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-Wujyt .framer-fq2g58 { align-content: center; align-items: center; background-color: var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, #ffffff); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Wujyt .framer-awxv4w { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: 320px; justify-content: center; overflow: hidden; padding: 38px 33px 38px 33px; position: relative; width: 1px; }`,
        `.framer-Wujyt .framer-1xa24jq-container { flex: none; height: auto; position: relative; width: auto; z-index: 2; }`,
        `.framer-Wujyt .framer-h74gcn { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: 100%; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; z-index: 2; }`,
        `.framer-Wujyt .framer-vh0kum, .framer-Wujyt .framer-172jfwm, .framer-Wujyt .framer-xcj65j { align-content: center; align-items: center; background-color: var(--token-6a136aea-db2c-4f64-b96e-534e0d7e9163, #f3f4f6); border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 44px; height: 52px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 16px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Wujyt .framer-6on96k { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-Wujyt .framer-h8gwtp { flex: none; height: 80px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 333px; top: 156px; width: 50px; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
        `.framer-Wujyt .framer-1grv8cg { flex: none; height: 53px; left: 220px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(40.62500000000002% - 53px / 2); width: 52px; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
        `.framer-Wujyt .framer-9uu10n { flex: none; height: 171px; left: 403px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(44.37500000000002% - 171px / 2); width: 35px; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
        `.framer-Wujyt .framer-1lcunl { flex: none; height: 53px; left: 401px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 56px; width: 40px; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
        `.framer-Wujyt .framer-62q9s2 { align-content: center; align-items: center; background: linear-gradient(180deg, #f5f5f5 0%, rgb(242, 242, 242) 100%); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; box-shadow: inset 0px -6px 0px 1px rgba(250, 250, 250, 0.25), inset 0px -5px 0px 0px rgba(0, 0, 0, 0.25), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.6); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 16px 16px 32px 16px; position: sticky; top: 160px; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-Wujyt .framer-ahfemf, .framer-Wujyt .framer-g747wz { align-content: center; align-items: center; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Wujyt .framer-18x0v0f { align-content: center; align-items: center; background-color: var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, #ffffff); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 46px 36px 46px 36px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Wujyt .framer-hjo7s9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-1oz5hqu, .framer-Wujyt .framer-zb2a81 { align-content: center; align-items: center; background-color: var(--token-0fbfb1aa-14cf-4d4e-9401-7de4a733d912, #f3f4f6); border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 44px; height: 91px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 104px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Wujyt .framer-p3glio { align-content: center; align-items: center; background-color: var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, #030712); border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 27px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 24px 24px 0px 24px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Wujyt .framer-746gik { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 120px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-1wqagsv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-15v91on { background-color: var(--token-749bc66f-56ff-4a90-abf3-0d699632a8e1, rgba(255, 255, 255, 0.1)); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 8px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 92px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Wujyt .framer-d59nsd { background-color: var(--token-749bc66f-56ff-4a90-abf3-0d699632a8e1, rgba(255, 255, 255, 0.1)); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 8px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Wujyt .framer-12cyx3f { background-color: var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, #98ff03); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 8px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 26px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Wujyt .framer-9m7knb { background-color: var(--token-749bc66f-56ff-4a90-abf3-0d699632a8e1, rgba(255, 255, 255, 0.1)); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 96px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Wujyt .framer-1k7b486 { align-content: flex-end; align-items: flex-end; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-Wujyt .framer-46y0u6 { align-content: center; align-items: center; background: linear-gradient(180deg, #f5f5f5 0%, rgb(242, 242, 242) 100%); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; box-shadow: inset 0px -6px 0px 1px rgba(250, 250, 250, 0.25), inset 0px -5px 0px 0px rgba(0, 0, 0, 0.25), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.6); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 16px 16px 32px 16px; position: sticky; top: 180px; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-Wujyt .framer-11wwoei { align-content: center; align-items: center; background-color: var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, #ffffff); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 66px 36px 66px 36px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Wujyt .framer-1sjtljx { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 380px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-11f0009 { align-content: center; align-items: center; background-color: var(--token-0fbfb1aa-14cf-4d4e-9401-7de4a733d912, #f3f4f6); border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 44px; height: 75px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Wujyt .framer-9z4lns { align-content: center; align-items: center; background-color: var(--token-0fbfb1aa-14cf-4d4e-9401-7de4a733d912, #f3f4f6); border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 44px; height: 146px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Wujyt .framer-17kgpzw { align-content: center; align-items: center; background-color: var(--token-9d9c85d4-e7c7-4cc3-9233-877e7ac4f0f8, #030712); border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 44px; height: 190px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 10px 14px 0px 14px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-Wujyt .framer-1wiwvmv { background-color: var(--token-cdf57ad2-0db2-4f34-b0ff-ddac49be8ec4, #98ff03); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 8px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Wujyt .framer-1odlf1k { align-content: center; align-items: center; background-color: var(--token-0fbfb1aa-14cf-4d4e-9401-7de4a733d912, #f3f4f6); border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 44px; height: 217px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Wujyt .framer-1vp1f38 { align-content: center; align-items: center; background-color: var(--token-0fbfb1aa-14cf-4d4e-9401-7de4a733d912, #f3f4f6); border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 44px; height: 248px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Wujyt .framer-glkqzy { flex: none; height: 114px; left: 106px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: -14px; width: 100px; will-change: var(--framer-will-change-filter-override, filter); z-index: 0; }`,
        `.framer-Wujyt .framer-gpxzaw { --border-bottom-width: 1px; --border-color: var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-6a136aea-db2c-4f64-b96e-534e0d7e9163, #f3f4f6); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Wujyt .framer-l0jpv3 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1440px; overflow: hidden; padding: 0px 16px 0px 16px; position: relative; width: 1px; }`,
        `.framer-Wujyt .framer-swp5im { --border-bottom-width: 0px; --border-color: var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Wujyt .framer-1ct9wz3 { --border-bottom-width: 1px; --border-color: var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 32px 0px 32px 0px; position: relative; width: 2090px; }`,
        `.framer-Wujyt .framer-iqp0b6, .framer-Wujyt .framer-1cq72sl, .framer-Wujyt .framer-do9ih, .framer-Wujyt .framer-kx923a { flex: none; height: 48px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 38px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-Wujyt .framer-1l3edb8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: hidden; padding: 32px 0px 32px 0px; position: relative; width: 1940px; }`,
        `.framer-Wujyt .framer-11pqjvl { --border-bottom-width: 1px; --border-color: var(--token-697a1175-e86a-44f8-8b7f-9f4d44f05ad4, rgba(3, 7, 18, 0.1)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Wujyt .framer-mypktv, .framer-Wujyt .framer-2ro053 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px 16px 0px 16px; position: relative; width: 1px; }`,
        `.framer-Wujyt .framer-1bnc5t4 { --border-bottom-width: 1px; --border-color: var(--token-697a1175-e86a-44f8-8b7f-9f4d44f05ad4, rgba(3, 7, 18, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, #ffffff); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-92rlfg-container, .framer-Wujyt .framer-gv28zg-container, .framer-Wujyt .framer-ryq9lp-container { flex: none; height: auto; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Wujyt .framer-17ufz1q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px 0px 100px 0px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-izjmoy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 855px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-rdo69p { display: grid; flex: none; gap: 27px 27px; height: min-content; max-width: 860px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-12mceac { align-content: center; align-items: center; align-self: start; background: linear-gradient(180deg, var(--token-8c9216c0-9823-4ba0-aa78-66710d3ff946, #f5f5f5) 0%, rgb(242, 242, 242) 100%); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.6), inset 0px -5px 0px 0px rgb(228, 228, 228), inset 0px -6px 0px 1px rgb(250, 250, 250); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 16px 16px 40px 16px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Wujyt .framer-1cdohu, .framer-Wujyt .framer-5jhdyl { align-content: center; align-items: center; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 32px 0px 32px 24px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Wujyt .framer-12d1si2 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 2; }`,
        `.framer-Wujyt .framer-1ulwqj8, .framer-Wujyt .framer-5s451n { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 0px 24px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-j9kav, .framer-Wujyt .framer-miqz92 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-86yd4l { align-content: flex-start; align-items: flex-start; align-self: start; background: linear-gradient(180deg, var(--token-8c9216c0-9823-4ba0-aa78-66710d3ff946, #f5f5f5) 0%, rgb(242, 242, 242) 100%); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.6), inset 0px -5px 0px 0px rgb(228, 228, 228), inset 0px -6px 0px 1px rgb(250, 250, 250); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 16px 16px 40px 16px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Wujyt .framer-7l6mx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 2; }`,
        `.framer-Wujyt .framer-atw1do { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-Wujyt .framer-1bbplwq { aspect-ratio: 0.5714285714285714 / 1; background: linear-gradient(90deg, var(--token-9865ed8d-00ba-4af5-9819-d475df51881b, #55595c) 0%, var(--token-339d6679-9119-4830-8fff-e9918e64dbd7, rgb(0, 0, 0)) 100%); border-bottom-right-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 2.77px 2.21px 0px var(--token-ab8dd3e6-1175-4b94-a998-2b40fe2f16ff, rgba(0, 0, 0, 0.12)), 0px 6.65px 5.32px 0px var(--token-21df02e0-c7ba-44bf-a3ba-af71c2eb4ced, rgba(0, 0, 0, 0.13)), 4px 12.52px 10.2px 0px var(--token-af299f98-dd0a-48c1-a232-3333d53792e8, rgba(0, 0, 0, 0.14)), 10px 22.34px 17px 0px var(--token-26f70c96-97b4-43a1-a85c-15fa2db248aa, rgba(0, 0, 0, 0.15)), 20px 41px 33px 0px var(--token-26f70c96-97b4-43a1-a85c-15fa2db248aa, rgba(0, 0, 0, 0.15)), 60px 50px 80px 0px var(--token-26f70c96-97b4-43a1-a85c-15fa2db248aa, rgba(0, 0, 0, 0.15)), 0px 3px 3px 0px var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1)), inset 0px -6px 0px 1px var(--token-749bc66f-56ff-4a90-abf3-0d699632a8e1, rgba(255, 255, 255, 0.1)), inset 0px -5px 0px 0px var(--token-54f49a39-1fca-439f-bc5d-f3fc47dd7074, rgb(26, 26, 26)), inset 0px 1px 0px 0px var(--token-46dd9299-bbaf-4442-b126-5314566efc41, rgba(255, 255, 255, 0.6)); flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 11px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Wujyt .framer-6n8eca { aspect-ratio: 0.5789473684210527 / 1; background: linear-gradient(90deg, var(--token-9865ed8d-00ba-4af5-9819-d475df51881b, #55595c) 0%, var(--token-339d6679-9119-4830-8fff-e9918e64dbd7, rgb(0, 0, 0)) 100%); border-bottom-right-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 2.77px 2.21px 0px var(--token-ab8dd3e6-1175-4b94-a998-2b40fe2f16ff, rgba(0, 0, 0, 0.12)), 0px 6.65px 5.32px 0px var(--token-21df02e0-c7ba-44bf-a3ba-af71c2eb4ced, rgba(0, 0, 0, 0.13)), 4px 12.52px 10.2px 0px var(--token-af299f98-dd0a-48c1-a232-3333d53792e8, rgba(0, 0, 0, 0.14)), 10px 22.34px 17px 0px var(--token-26f70c96-97b4-43a1-a85c-15fa2db248aa, rgba(0, 0, 0, 0.15)), 20px 41px 33px 0px var(--token-26f70c96-97b4-43a1-a85c-15fa2db248aa, rgba(0, 0, 0, 0.15)), 60px 50px 80px 0px var(--token-26f70c96-97b4-43a1-a85c-15fa2db248aa, rgba(0, 0, 0, 0.15)), 0px 3px 3px 0px var(--token-3c54b3ef-e4bd-40f8-a28b-783a0661d960, rgba(3, 7, 18, 0.1)), inset 0px -6px 0px 1px var(--token-749bc66f-56ff-4a90-abf3-0d699632a8e1, rgba(255, 255, 255, 0.1)), inset 0px -5px 0px 0px var(--token-54f49a39-1fca-439f-bc5d-f3fc47dd7074, rgb(26, 26, 26)), inset 0px 1px 0px 0px var(--token-46dd9299-bbaf-4442-b126-5314566efc41, rgba(255, 255, 255, 0.6)); flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 18px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Wujyt .framer-ddsk7l { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-Wujyt .framer-54mbqq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 44px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-Wujyt .framer-ld2cvg { --border-bottom-width: 1px; --border-color: var(--token-697a1175-e86a-44f8-8b7f-9f4d44f05ad4, rgba(3, 7, 18, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 200px; height: min-content; justify-content: flex-start; overflow: visible; padding: 100px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-8blhdc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 56px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-12e0uo6 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 480px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Wujyt .framer-19g9ged { display: grid; flex: none; gap: 44px 0px; grid-auto-rows: min-content; grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-tjxwa9-container, .framer-Wujyt .framer-juhwh-container, .framer-Wujyt .framer-1nq7us5-container { align-self: start; flex: none; height: 100%; justify-self: start; position: relative; width: 100%; }`,
        `.framer-Wujyt .framer-12tcwks { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; right: 16px; top: 0px; width: min-content; z-index: 1; }`,
        `.framer-Wujyt .framer-26mwpz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 37px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-Wujyt .framer-1yw7n8a, .framer-Wujyt .framer-1kf3987, .framer-Wujyt .framer-1xws0px { background-color: var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, #ffffff); flex: none; height: 103px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 103px; }`,
        `.framer-Wujyt .framer-1o7e5vf { background-color: var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, #ffffff); flex: none; height: 103px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 206px; }`,
        ..._e,
        ...at,
        ...he,
        ...lt,
        ...Ye,
        `.framer-Wujyt[data-border="true"]::after, .framer-Wujyt [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1439.98px) { .framer-Wujyt.framer-kocoi9 { width: 810px; } .framer-Wujyt .framer-67ghue, .framer-Wujyt .framer-1o7e5vf { order: 0; } .framer-Wujyt .framer-1xge37j { padding: 150px 0px 116px 0px; } .framer-Wujyt .framer-1egoiys { gap: 40px; } .framer-Wujyt .framer-1namqgq-container { bottom: -39px; } .framer-Wujyt .framer-t12oru-container { z-index: 2; } .framer-Wujyt .framer-17psvxg-container { height: 38px; top: -35px; } .framer-Wujyt .framer-1mzama9 { gap: 22px; } .framer-Wujyt .framer-ohhe63 { height: unset; left: 16px; right: 16px; top: 0px; transform: unset; width: unset; } .framer-Wujyt .framer-exrder { top: 0px; } .framer-Wujyt .framer-197a109 { bottom: -2px; height: 225px; width: 278px; } .framer-Wujyt .framer-1olxzl9, .framer-Wujyt .framer-1ta0if4, .framer-Wujyt .framer-17fkpbs { width: 74px; } .framer-Wujyt .framer-3frofh { padding: 0px 0px 0px 55px; } .framer-Wujyt .framer-1fecmay { height: 74px; width: 180px; } .framer-Wujyt .framer-kvolqb { gap: 60px; } .framer-Wujyt .framer-1i4c8y9 { max-width: 700px; padding: 0px 0px 0px 11px; } .framer-Wujyt .framer-avnr9s { height: min-content; } .framer-Wujyt .framer-1n9b0nc, .framer-Wujyt .framer-qtm9ps { gap: 20px; } .framer-Wujyt .framer-rjyh56 { padding: 0px 0px 0px 11px; } .framer-Wujyt .framer-1ej76rx { align-self: stretch; height: auto; } .framer-Wujyt .framer-krm6f7 { height: 50vh; } .framer-Wujyt .framer-1wx75ui { flex-direction: column; gap: 40px; padding: 0px 46px 0px 46px; } .framer-Wujyt .framer-7aiy3c { flex: none; max-width: unset; position: relative; top: unset; width: 100%; } .framer-Wujyt .framer-p66l87 { gap: 12px; } .framer-Wujyt .framer-1akkj6i { flex: none; max-width: unset; overflow: visible; width: 100%; } .framer-Wujyt .framer-v8rr17, .framer-Wujyt .framer-6vntzn, .framer-Wujyt .framer-62q9s2, .framer-Wujyt .framer-46y0u6 { position: relative; top: unset; } .framer-Wujyt .framer-a80pro { width: 100px; } .framer-Wujyt .framer-awxv4w { gap: 23px; padding: 44px 29px 44px 29px; } .framer-Wujyt .framer-h8gwtp { right: 344px; top: 155px; } .framer-Wujyt .framer-9uu10n { left: unset; right: 180px; top: 60px; } .framer-Wujyt .framer-1lcunl { height: 56px; left: 389px; top: 60px; width: 36px; } .framer-Wujyt .framer-18x0v0f { padding: 44px 29px 44px 29px; } .framer-Wujyt .framer-1oz5hqu, .framer-Wujyt .framer-zb2a81 { flex: 1 0 0px; height: 80px; width: 1px; } .framer-Wujyt .framer-p3glio { padding: 24px 12px 0px 12px; } .framer-Wujyt .framer-1k7b486 { flex: 1 0 0px; width: 1px; } .framer-Wujyt .framer-1sjtljx { max-width: unset; } .framer-Wujyt .framer-glkqzy { left: 266px; top: -25px; } .framer-Wujyt .framer-l0jpv3 { flex: none; width: 810px; } .framer-Wujyt .framer-1ct9wz3, .framer-Wujyt .framer-1l3edb8 { padding: 22px 0px 22px 0px; } .framer-Wujyt .framer-rdo69p { gap: 16px 16px; padding: 0px 26px 0px 26px; } .framer-Wujyt .framer-1ulwqj8, .framer-Wujyt .framer-5s451n { padding: 0px 6px 0px 6px; } .framer-Wujyt .framer-19g9ged { gap: 0px 0px; grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-Wujyt .framer-1yw7n8a { order: 1; } .framer-Wujyt .framer-1cy7c2t { justify-content: flex-start; padding: 0px 0px 0px 36px; } .framer-Wujyt .framer-rcgzyd { justify-content: flex-end; }}`,
        `@media (max-width: 809.98px) { .framer-Wujyt.framer-kocoi9 { width: 390px; } .framer-Wujyt .framer-1xge37j { flex-direction: column; padding: 214px 0px 250px 0px; } .framer-Wujyt .framer-15qyk8n, .framer-Wujyt .framer-1akkj6i { flex: none; padding: 0px 12px 0px 12px; width: 100%; } .framer-Wujyt .framer-fuwi98 { flex-direction: column; gap: 40px; } .framer-Wujyt .framer-a9kr2m { flex: none; padding: 0px 2px 0px 1px; width: 100%; } .framer-Wujyt .framer-y5swt3, .framer-Wujyt .framer-g1dcmr { padding: 18px 26px 18px 26px; } .framer-Wujyt .framer-qx1f5z { z-index: unset; } .framer-Wujyt .framer-1namqgq-container { bottom: -38px; height: 37px; left: 30px; right: 30px; } .framer-Wujyt .framer-1hwpv3s { flex: none; padding: 0px 1px 0px 2px; width: 100%; } .framer-Wujyt .framer-17psvxg-container { height: 38px; left: 30px; right: 30px; top: -38px; } .framer-Wujyt .framer-1jry1td { flex-direction: column; } .framer-Wujyt .framer-ohhe63 { height: unset; left: 12px; right: 12px; top: 0px; transform: unset; width: unset; } .framer-Wujyt .framer-197a109 { bottom: -2px; height: 225px; width: 328px; } .framer-Wujyt .framer-1olxzl9, .framer-Wujyt .framer-1ta0if4, .framer-Wujyt .framer-17fkpbs { width: 74px; } .framer-Wujyt .framer-3frofh { padding: 0px 0px 0px 107px; } .framer-Wujyt .framer-1fecmay { height: 74px; } .framer-Wujyt .framer-uap2iz, .framer-Wujyt .framer-1i4c8y9, .framer-Wujyt .framer-59acm6, .framer-Wujyt .framer-1l47mrj, .framer-Wujyt .framer-1wj5d6w, .framer-Wujyt .framer-mypktv, .framer-Wujyt .framer-rdo69p, .framer-Wujyt .framer-2ro053 { padding: 0px 12px 0px 12px; } .framer-Wujyt .framer-kvolqb { gap: 60px; padding: 60px 0px 0px 0px; } .framer-Wujyt .framer-avnr9s { flex-direction: column; height: min-content; } .framer-Wujyt .framer-1n9b0nc { flex: none; gap: 24px; width: 100%; } .framer-Wujyt .framer-rjyh56 { padding: 0px 0px 0px 12px; } .framer-Wujyt .framer-1ej76rx { flex: none; height: 390px; width: 100%; } .framer-Wujyt .framer-12dpkgw, .framer-Wujyt .framer-14h8yx0 { padding: 60px 0px 0px 0px; } .framer-Wujyt .framer-krm6f7 { height: 80vh; padding: 80px 0px 80px 0px; } .framer-Wujyt .framer-1oomz4x { gap: 30px; max-width: 635px; } .framer-Wujyt .framer-1pae7k8 { gap: 0px 5px; } .framer-Wujyt .framer-ica858 { gap: 18px; } .framer-Wujyt .framer-1wx75ui { flex-direction: column; gap: 100px; padding: 0px; } .framer-Wujyt .framer-7aiy3c { flex: none; gap: 100px; padding: 0px 12px 0px 12px; position: relative; top: unset; width: 100%; } .framer-Wujyt .framer-v8rr17, .framer-Wujyt .framer-6vntzn, .framer-Wujyt .framer-62q9s2, .framer-Wujyt .framer-46y0u6 { gap: 16px; position: relative; top: unset; } .framer-Wujyt .framer-1nifr6f { --border-bottom-width: 1px; --border-color: var(--token-2bc0f755-ae64-4f52-813b-e449de1e88b3, #ffffff); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; } .framer-Wujyt .framer-11hkxwa { overflow: visible; } .framer-Wujyt .framer-15wawgb { justify-content: center; padding: 0px; } .framer-Wujyt .framer-a80pro { width: 96px; } .framer-Wujyt .framer-awxv4w { gap: 12px; padding: 38px 12px 38px 12px; } .framer-Wujyt .framer-6on96k { z-index: 2; } .framer-Wujyt .framer-h8gwtp { height: 50px; right: 130px; top: 160px; width: 20px; } .framer-Wujyt .framer-1grv8cg { left: 226px; top: calc(25.00000000000002% - 53px / 2); } .framer-Wujyt .framer-9uu10n { height: 75px; left: 179px; top: 86px; width: 15px; } .framer-Wujyt .framer-18x0v0f, .framer-Wujyt .framer-11wwoei { padding: 46px 12px 46px 12px; } .framer-Wujyt .framer-p3glio { padding: 24px 12px 0px 12px; } .framer-Wujyt .framer-9m7knb { height: 67px; } .framer-Wujyt .framer-1k7b486 { flex: 1 0 0px; width: 1px; } .framer-Wujyt .framer-11f0009 { height: 55px; } .framer-Wujyt .framer-9z4lns { height: 126px; } .framer-Wujyt .framer-17kgpzw { height: 170px; } .framer-Wujyt .framer-1odlf1k { height: 197px; } .framer-Wujyt .framer-1vp1f38 { height: 228px; } .framer-Wujyt .framer-glkqzy { left: 83px; top: -24px; } .framer-Wujyt .framer-l0jpv3 { flex: none; padding: 0px 12px 0px 12px; width: 390px; } .framer-Wujyt .framer-1ct9wz3 { padding: 12px 0px 12px 0px; width: 1000px; } .framer-Wujyt .framer-1l3edb8 { padding: 12px 0px 12px 0px; width: 800px; } .framer-Wujyt .framer-izjmoy { max-width: 350px; } .framer-Wujyt .framer-121akh2 { white-space: pre; width: auto; } .framer-Wujyt .framer-1ulwqj8, .framer-Wujyt .framer-5s451n, .framer-Wujyt .framer-8blhdc { padding: 0px; } .framer-Wujyt .framer-ld2cvg { gap: 60px; } .framer-Wujyt .framer-12e0uo6 { max-width: 300px; } .framer-Wujyt .framer-19g9ged { gap: 0px 0px; grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-Wujyt .framer-12tcwks { right: 12px; } .framer-Wujyt .framer-1yw7n8a { aspect-ratio: 1 / 1; height: auto; order: 1; width: 60px; } .framer-Wujyt .framer-1o7e5vf { height: 60px; order: 0; width: 120px; } .framer-Wujyt .framer-1cy7c2t { padding: 0px 0px 0px 37px; } .framer-Wujyt .framer-1kf3987, .framer-Wujyt .framer-1xws0px { aspect-ratio: 1 / 1; height: auto; width: 60px; } .framer-Wujyt .framer-rcgzyd { justify-content: flex-end; }}`,
      ],
      `framer-Wujyt`
    )),
    (ii.displayName = `Home`),
    (ii.defaultProps = { height: 11574, width: 1440 }),
    y(
      ii,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Space Grotesk`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Space Grotesk`,
              url: `../../assets/misc/OB3CIWMGQGGYEGXRXPOVBXWAH4INE6T4.woff2`,
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
        ...On,
        ...kn,
        ...An,
        ...jn,
        ...Mn,
        ...Nn,
        ...Pn,
        ...In,
        ...Rn,
        ...Bn,
        ...Vn,
        ...Hn,
        ...Wn,
        ...Gn,
        ...Kn,
        ...qn,
        ...Jn,
        ...Yn,
        ...Xn,
        ...Zn,
        ...C(me),
        ...C(ot),
        ...C(ve),
        ...C(ut),
        ...C(Ze),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (ii.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([
          b(Y, {}, t),
          b(V, {}, t),
          b(H, {}, t),
          b(Le, {}, t),
          b(I, {}, t),
          b(Re, {}, t),
          b(L, {}, t),
          b(Ke, {}, t),
          b(Ve, {}, t),
          b(F, {}, t),
          b(R, {}, t),
          b($e, {}, t),
          b(B, {}, t),
          b(rt, {}, t),
          b(z, {}, t),
          b(Te, {}, t),
          b(Ge, {}, t),
          b(Pe, {}, t),
          b(qe, {}, t),
          b(De, {}, t),
        ])
      ),
    }),
    (ai = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerV2Ho_ZYv2`,
          slots: [],
          annotations: {
            framerLayoutTemplateFlowEffect: `true`,
            framerComponentViewportWidth: `true`,
            framerScrollSections: `{"Vo8q3wkUB":{"pattern":":Vo8q3wkUB","name":"hero"},"z4RSlNN1X":{"pattern":":z4RSlNN1X","name":"about-us"},"EY68PYUry":{"pattern":":EY68PYUry","name":"services"},"VPRVCzRBm":{"pattern":":VPRVCzRBm","name":"our-vision"},"RYTvATOdp":{"pattern":":RYTvATOdp","name":"contact"}}`,
            framerRootFontSize: `16`,
            framerImmutableVariables: `true`,
            framerResponsiveScreen: `true`,
            framerIntrinsicHeight: `11574`,
            framerContractVersion: `1`,
            framerDisplayContentsDiv: `false`,
            framerAcceptsLayoutTemplate: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"ccwQtvViN":{"layout":["fixed","auto"]},"sSgoNdsY3":{"layout":["fixed","auto"]}}}`,
            framerAutoSizeImages: `true`,
            framerIntrinsicWidth: `1440`,
            framerColorSyntax: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { ai as __FramerMetadata__, ii as default, er as queryParamNames };
//# sourceMappingURL=TK2fCDiEmKPoxJDHDsu4ups4tjWZA5y3lMby0wCb8r4.BphgDeji.mjs.map
