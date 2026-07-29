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
  bt as b,
  i as x,
  k as S,
  o as C,
  ot as w,
  pt as T,
  xt as E,
} from "./framer.Cfrj40WT.mjs";
import { _ as D, v as O } from "./shared-lib.CiHz06lb.mjs";
function k(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var A,
  j,
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
    (l(),
      _(),
      m(),
      n(),
      O(),
      (A = h(D)),
      (j = [`iE1Txx1gl`, `GGx7sb23r`]),
      (M = `framer-zVH5R`),
      (N = { GGx7sb23r: `framer-v-2c3acb`, iE1Txx1gl: `framer-v-rnhaev` }),
      (P = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (F = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (I = d.create(i)),
      (L = { "Tablet/Phone": `GGx7sb23r`, Pattern: `iE1Txx1gl` }),
      (R = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: L[r.variant] ?? r.variant ?? `iE1Txx1gl`,
      })),
      (z = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (B = E(
        o(function (e, t) {
          let n = r(null),
            i = t ?? n,
            o = u(),
            { activeLocale: s, setLocale: l } = T(),
            f = w(),
            { style: m, className: h, layoutId: _, variant: y, ...S } = R(e),
            {
              baseVariant: C,
              classNames: E,
              clearLoadingGesture: O,
              gestureHandlers: A,
              gestureVariant: L,
              isLoading: B,
              setGestureState: V,
              setVariant: H,
              variants: U,
            } = b({
              cycleOrder: j,
              defaultVariant: `iE1Txx1gl`,
              ref: i,
              variant: y,
              variantClassNames: N,
            }),
            W = z(e, U),
            G = v(M);
          return a(p, {
            id: _ ?? o,
            children: a(I, {
              animate: U,
              initial: !1,
              children: a(F, {
                value: P,
                children: c(d.div, {
                  ...S,
                  ...A,
                  className: v(G, `framer-rnhaev`, h, E),
                  "data-framer-name": `Pattern`,
                  layoutDependency: W,
                  layoutId: `iE1Txx1gl`,
                  ref: i,
                  style: { ...m },
                  ...k({ GGx7sb23r: { "data-framer-name": `Tablet/Phone` } }, C, L),
                  children: [
                    c(d.div, {
                      className: `framer-1ps25g`,
                      "data-border": !0,
                      "data-framer-name": `wrapper`,
                      layoutDependency: W,
                      layoutId: `H6Z0gL7Qn`,
                      style: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `rgb(229, 231, 235)`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                      },
                      children: [
                        a(d.div, {
                          className: `framer-txg38a`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `xwQdJjBFL`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-f2a6ja`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `xbdUjmPz1`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-lkztvk`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `GRqlZtWSU`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1ldubzi`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `igG6IBTe2`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1qw789b`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `WyGPANXD8`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-17itayf`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `vAkFfNfFe`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-5eys6q`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `A9CjLe1mH`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-amfcys`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `jdovdOp0Z`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1vzxu9g`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `bYWO179OE`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-mqirz2`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `a8E0K0WGu`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-gs544g`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `KyhS12rpz`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1ya9rnv`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `j3w0SY5Hc`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-16kxsfd`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `cLdpEimZT`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1c3lz81`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `sfOrCX3t_`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-18sc58m`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `sfZRyAVHJ`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-naxszn`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `fHssuoBni`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1r1cq12`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `ISffRz8HC`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-tu9r95`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `Xmzgg6sgr`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-imjedm`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `KIF8Dr4EB`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-10rax47`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `NoJMBPBho`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-hz5fmc`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `iOq8ejBXc`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1gnxurf`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `U28iAHXn1`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-ky1q85`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `RWS5tkDfl`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1oc5fi8`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `x3X2t4Wip`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-jdb4x4`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `cln2V1am_`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-s64gn9`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `A1GObQ5oJ`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-dzco2d`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `R2MUr01og`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-14qtrzs`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `k5n33MTog`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-k2cbu8`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `RXowI9aA4`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1ocv3lr`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `GlXt9eAEW`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-l0qh2e`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `NBwN9W6hP`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-rpwj87`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `am_wzbFvD`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-16ea5ar`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `KWLBhevfJ`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-bi20h`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `tLP9yh75w`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-g1qlr0`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `vBExjkRjZ`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1kc5o6h`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `M0kemy13Z`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-88lnnq`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `UXmqFEzgj`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-15xxhej`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `vMVQsL_yb`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-qby0ew`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `FRN5WbvpV`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-ptw1cm`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `XH_c5Lgg4`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-ima8fe`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `YtNynyzWU`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1i6pku4`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `E7u9R6SBR`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1qoylop`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `dilUcp_cg`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-szdxk7`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `FC4u9LvIP`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1mwhw4y`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `mVKUdKelr`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-umusa7`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `vXJjwdWO4`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1f2rfdb`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `Acpa7Q8_8`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-3mdwfq`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `OfBu1ZqeR`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-rqqbi4`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `UYxQ4mpbP`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-b42x8g`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `qcvIHwtSg`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1yiy3pq`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `glTg856JV`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-jliyxx`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `gjI5fUe_0`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-6ozs6h`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `Lk8Cvh1XP`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1rmutf1`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `RsK8DsZHV`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1gwmmhl`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `Vg5xihwue`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-mja740`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `Cc6Lnw96d`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-29eu02`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `KeFqHW1Gn`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1mbgt4d`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `D0s9xdOW9`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1vzue5g`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `JhKqshHBj`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1g8ilqv`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `A4zeHeiKv`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-5x7i1x`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `qZtfxfhFj`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-9jqcxi`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `ff7C9Qqxi`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-47310b`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `Rta17jI4t`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-19yuhl6`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `BDQo4bRJ2`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-wo2lij`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `poBcYNzIU`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-aq3l9o`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `FMOBHjVpD`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1gr2lbn`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `c7M1ld18o`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1bdmn1o`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `k1T18xi5g`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1qa3dz9`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `Q9VRmGkmO`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-m9m5iq`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `KLRE3tNFu`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-12fq2xi`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `BRXFwvDxW`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-8zfnch`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `ffI_bMhWA`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1ndw4u8`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `IeyuqF_Zy`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-fjw5em`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `l9jOD53cL`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-6vm2ll`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `ZOpiFXdpg`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1et5zhv`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `CcVogY2Km`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-7rg2kr`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `m4S6ry8sH`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-4tshed`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `OiHOxyyl4`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1eb09q5`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `Djh0AmniL`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1hp8hji`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `WddQMhMjL`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-f9g3na`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `VcR5ho_P4`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-10ufgwc`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `CEHd0Eehx`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-17xyljr`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `EoFJUG003`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-b8k7hy`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `f_h9nnlR3`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1lj9hyc`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `hzKOWm5tA`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-uizf7o`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `OH6bqbdMZ`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1fzzlma`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `a07rfx9yV`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-32r3uy`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `WA8m5Egfy`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-5fnwp5`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `MHcrPWPAj`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-rfo3ys`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `J9ehLQ4w9`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-12asi7t`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `TLXrptWXj`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1bk1k8b`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `l9JuvSphb`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1e9aj1m`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `YP02CCPzl`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-sntdlf`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `p4OxtKsyC`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-4gtil7`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `QTUDvzGlx`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-smgu1g`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `A7O7VzDFY`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1pmet8i`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `dIDhX7put`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1sa71oa`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `HQV9iv5J1`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-or4nvv`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `DFeDiqzz_`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-h5yshk`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `lRRKgc2t7`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1fj09s6`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `qZklURiAj`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1ijqiep`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `khjrPXWGb`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-q3uqoq`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `Bob6BNGab`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1qej9x1`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `EbQlvaNLy`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-15cx8hj`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `S2QiYS70U`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1nt5ljm`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `hfbxz3Mgo`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1hni8mo`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `gflA4AThR`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-15uxgdq`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `KhnVtEk7m`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1yuirj`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `cQzGPdxC0`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-78fs3m`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `fRx3p18yI`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-cotz32`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `O3rUjfzRt`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-ydn89r`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `r9KvVS7XP`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-zd6yx6`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `W_r55V1bG`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-y9009j`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `dFLYJDMo_`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1y7v6bx`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `pIZ2AhYB5`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-7lv83j`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `V9RCJRcCN`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-au8ba`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `RmBVE8_fj`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-knyjtq`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `nbxJKo3dO`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-sm51jb`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `CzWvDOvxN`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1xk2vyg`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `mgeBrzV1h`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-asxjnl`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `OLTSWbJQY`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1b97qre`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `QhR5XedqQ`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-tise9b`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `EtXN2SfoN`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-14qtpvv`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `HxGn25Jdr`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-wxq0p8`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `YHk3V0gIp`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1igea1d`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `X3e7_j03c`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-p50v3x`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `rA3DQZ9_Y`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1s9nyqr`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `R4XP0cmim`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-4itgp`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `D3BWXXNBz`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-jxslw5`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `vBiYfimee`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1bu1aam`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `pf0NLQusj`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-6z0m8f`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `ITjr7qdml`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-eyqkj2`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `XfPS1KJai`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-vlha9t`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `X2BQPSUzI`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1tf04ci`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `NDWo7sHCx`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-njehmr`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `qgRJrZ0OI`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-byvjdl`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `cmdFkOu0a`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1ja7nfn`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `jVkt3R5ch`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1mpxrk3`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `Ugn7YXX3W`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-t5ehlg`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `ukPvHOiYz`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1rtotm3`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `QUim91rb1`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-qibrjt`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `Z4lFaDgAQ`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1ieyy3z`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `y7QyeQKHU`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1sgzf8z`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `wF8yoj17t`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-gs4g4q`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `j_SpCpDee`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-6wfrt9`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `v28p89Rx5`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-5it6v3`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `LEYw1nXHU`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-wdr353`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `o7b_cBsPj`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-qnznul`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `Ro6G2N4Pd`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-19jk5z5`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `LL_xXm_X2`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-zj0m35`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `qAMFqAUxQ`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-jct3o6`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `R3rZM2i9q`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-zw33d6`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `LdEtcy2II`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-6o2bqb`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `UmWw2G1Rb`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1h9pvqw`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `aUPUKlHEx`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-7nfyz5`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `RgZvvCbHO`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-hjdit`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `VlIGp_mM1`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-jlwzhz`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `kkQj_t_Ez`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-p4ieet`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `Z5TLxmyKo`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1e24epq`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `n2rKObLYR`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-yrylg2`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `ixPbyR9R8`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-wyyxjt`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `wxumU9K55`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                        a(d.div, {
                          className: `framer-1huhczx`,
                          "data-framer-name": `Line`,
                          layoutDependency: W,
                          layoutId: `dfwRcscXG`,
                          style: {
                            backgroundColor: `var(--token-ceccc34d-151d-4799-861c-06adf27002c7, rgb(229, 231, 235))`,
                            rotate: -45,
                          },
                        }),
                      ],
                    }),
                    a(x, {
                      height: 6,
                      width: `6px`,
                      y: (f?.y || 0) + -3,
                      children: a(g, {
                        className: `framer-158zef0-container`,
                        layoutDependency: W,
                        layoutId: `j1Ixpduat-container`,
                        nodeId: `j1Ixpduat`,
                        rendersWithMotion: !0,
                        scopeId: `CsKVMk6kk`,
                        children: a(D, {
                          height: `100%`,
                          id: `j1Ixpduat`,
                          layoutId: `j1Ixpduat`,
                          style: { height: `100%`, width: `100%` },
                          variant: `MnvfFSWcm`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    a(x, {
                      height: 6,
                      width: `6px`,
                      y: (f?.y || 0) + -3,
                      children: a(g, {
                        className: `framer-1vfprm3-container`,
                        layoutDependency: W,
                        layoutId: `fuQddbO7n-container`,
                        nodeId: `fuQddbO7n`,
                        rendersWithMotion: !0,
                        scopeId: `CsKVMk6kk`,
                        children: a(D, {
                          height: `100%`,
                          id: `fuQddbO7n`,
                          layoutId: `fuQddbO7n`,
                          style: { height: `100%`, width: `100%` },
                          variant: `MnvfFSWcm`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    a(x, {
                      height: 6,
                      width: `6px`,
                      y: (f?.y || 0) + (f?.height || 64) - 3,
                      ...k({ GGx7sb23r: { y: (f?.y || 0) + (f?.height || 40) - 3 } }, C, L),
                      children: a(g, {
                        className: `framer-jcrrla-container`,
                        layoutDependency: W,
                        layoutId: `IkZIgeLpI-container`,
                        nodeId: `IkZIgeLpI`,
                        rendersWithMotion: !0,
                        scopeId: `CsKVMk6kk`,
                        children: a(D, {
                          height: `100%`,
                          id: `IkZIgeLpI`,
                          layoutId: `IkZIgeLpI`,
                          style: { height: `100%`, width: `100%` },
                          variant: `MnvfFSWcm`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    a(x, {
                      height: 6,
                      width: `6px`,
                      y: (f?.y || 0) + (f?.height || 64) - 3,
                      ...k({ GGx7sb23r: { y: (f?.y || 0) + (f?.height || 40) - 3 } }, C, L),
                      children: a(g, {
                        className: `framer-lrp162-container`,
                        layoutDependency: W,
                        layoutId: `n1XeRLPPd-container`,
                        nodeId: `n1XeRLPPd`,
                        rendersWithMotion: !0,
                        scopeId: `CsKVMk6kk`,
                        children: a(D, {
                          height: `100%`,
                          id: `n1XeRLPPd`,
                          layoutId: `n1XeRLPPd`,
                          style: { height: `100%`, width: `100%` },
                          variant: `MnvfFSWcm`,
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
          `.framer-zVH5R.framer-1d6qbm3, .framer-zVH5R .framer-1d6qbm3 { display: block; }`,
          `.framer-zVH5R.framer-rnhaev { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 44px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1408px; }`,
          `.framer-zVH5R .framer-1ps25g { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 64px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-zVH5R .framer-txg38a, .framer-zVH5R .framer-f2a6ja, .framer-zVH5R .framer-lkztvk, .framer-zVH5R .framer-1ldubzi, .framer-zVH5R .framer-1qw789b, .framer-zVH5R .framer-17itayf, .framer-zVH5R .framer-5eys6q, .framer-zVH5R .framer-amfcys, .framer-zVH5R .framer-1vzxu9g, .framer-zVH5R .framer-mqirz2, .framer-zVH5R .framer-gs544g, .framer-zVH5R .framer-1ya9rnv, .framer-zVH5R .framer-16kxsfd, .framer-zVH5R .framer-1c3lz81, .framer-zVH5R .framer-18sc58m, .framer-zVH5R .framer-naxszn, .framer-zVH5R .framer-1r1cq12, .framer-zVH5R .framer-tu9r95, .framer-zVH5R .framer-imjedm, .framer-zVH5R .framer-10rax47, .framer-zVH5R .framer-hz5fmc, .framer-zVH5R .framer-1gnxurf, .framer-zVH5R .framer-ky1q85, .framer-zVH5R .framer-1oc5fi8, .framer-zVH5R .framer-jdb4x4, .framer-zVH5R .framer-s64gn9, .framer-zVH5R .framer-dzco2d, .framer-zVH5R .framer-14qtrzs, .framer-zVH5R .framer-k2cbu8, .framer-zVH5R .framer-1ocv3lr, .framer-zVH5R .framer-l0qh2e, .framer-zVH5R .framer-rpwj87, .framer-zVH5R .framer-16ea5ar, .framer-zVH5R .framer-bi20h, .framer-zVH5R .framer-g1qlr0, .framer-zVH5R .framer-1kc5o6h, .framer-zVH5R .framer-88lnnq, .framer-zVH5R .framer-15xxhej, .framer-zVH5R .framer-qby0ew, .framer-zVH5R .framer-ptw1cm, .framer-zVH5R .framer-ima8fe, .framer-zVH5R .framer-1i6pku4, .framer-zVH5R .framer-1qoylop, .framer-zVH5R .framer-szdxk7, .framer-zVH5R .framer-1mwhw4y, .framer-zVH5R .framer-umusa7, .framer-zVH5R .framer-1f2rfdb, .framer-zVH5R .framer-3mdwfq, .framer-zVH5R .framer-rqqbi4, .framer-zVH5R .framer-b42x8g, .framer-zVH5R .framer-1yiy3pq, .framer-zVH5R .framer-jliyxx, .framer-zVH5R .framer-6ozs6h, .framer-zVH5R .framer-1rmutf1, .framer-zVH5R .framer-1gwmmhl, .framer-zVH5R .framer-mja740, .framer-zVH5R .framer-29eu02, .framer-zVH5R .framer-1mbgt4d, .framer-zVH5R .framer-1vzue5g, .framer-zVH5R .framer-1g8ilqv, .framer-zVH5R .framer-5x7i1x, .framer-zVH5R .framer-9jqcxi, .framer-zVH5R .framer-47310b, .framer-zVH5R .framer-19yuhl6, .framer-zVH5R .framer-wo2lij, .framer-zVH5R .framer-aq3l9o, .framer-zVH5R .framer-1gr2lbn, .framer-zVH5R .framer-1bdmn1o, .framer-zVH5R .framer-1qa3dz9, .framer-zVH5R .framer-m9m5iq, .framer-zVH5R .framer-12fq2xi, .framer-zVH5R .framer-8zfnch, .framer-zVH5R .framer-1ndw4u8, .framer-zVH5R .framer-fjw5em, .framer-zVH5R .framer-6vm2ll, .framer-zVH5R .framer-1et5zhv, .framer-zVH5R .framer-7rg2kr, .framer-zVH5R .framer-4tshed, .framer-zVH5R .framer-1eb09q5, .framer-zVH5R .framer-1hp8hji, .framer-zVH5R .framer-f9g3na, .framer-zVH5R .framer-10ufgwc, .framer-zVH5R .framer-17xyljr, .framer-zVH5R .framer-b8k7hy, .framer-zVH5R .framer-1lj9hyc, .framer-zVH5R .framer-uizf7o, .framer-zVH5R .framer-1fzzlma, .framer-zVH5R .framer-32r3uy, .framer-zVH5R .framer-5fnwp5, .framer-zVH5R .framer-rfo3ys, .framer-zVH5R .framer-12asi7t, .framer-zVH5R .framer-1bk1k8b, .framer-zVH5R .framer-1e9aj1m, .framer-zVH5R .framer-sntdlf, .framer-zVH5R .framer-4gtil7, .framer-zVH5R .framer-smgu1g, .framer-zVH5R .framer-1pmet8i, .framer-zVH5R .framer-1sa71oa, .framer-zVH5R .framer-or4nvv, .framer-zVH5R .framer-h5yshk, .framer-zVH5R .framer-1fj09s6, .framer-zVH5R .framer-1ijqiep, .framer-zVH5R .framer-q3uqoq, .framer-zVH5R .framer-1qej9x1, .framer-zVH5R .framer-15cx8hj, .framer-zVH5R .framer-1nt5ljm, .framer-zVH5R .framer-1hni8mo, .framer-zVH5R .framer-15uxgdq, .framer-zVH5R .framer-1yuirj, .framer-zVH5R .framer-78fs3m, .framer-zVH5R .framer-cotz32, .framer-zVH5R .framer-ydn89r, .framer-zVH5R .framer-zd6yx6, .framer-zVH5R .framer-y9009j, .framer-zVH5R .framer-1y7v6bx, .framer-zVH5R .framer-7lv83j, .framer-zVH5R .framer-au8ba, .framer-zVH5R .framer-knyjtq, .framer-zVH5R .framer-sm51jb, .framer-zVH5R .framer-1xk2vyg, .framer-zVH5R .framer-asxjnl, .framer-zVH5R .framer-1b97qre, .framer-zVH5R .framer-tise9b, .framer-zVH5R .framer-14qtpvv, .framer-zVH5R .framer-wxq0p8, .framer-zVH5R .framer-1igea1d, .framer-zVH5R .framer-p50v3x, .framer-zVH5R .framer-1s9nyqr, .framer-zVH5R .framer-4itgp, .framer-zVH5R .framer-jxslw5, .framer-zVH5R .framer-1bu1aam, .framer-zVH5R .framer-6z0m8f, .framer-zVH5R .framer-eyqkj2, .framer-zVH5R .framer-vlha9t, .framer-zVH5R .framer-1tf04ci, .framer-zVH5R .framer-njehmr, .framer-zVH5R .framer-byvjdl, .framer-zVH5R .framer-1ja7nfn, .framer-zVH5R .framer-1mpxrk3, .framer-zVH5R .framer-t5ehlg, .framer-zVH5R .framer-1rtotm3, .framer-zVH5R .framer-qibrjt, .framer-zVH5R .framer-1ieyy3z, .framer-zVH5R .framer-1sgzf8z, .framer-zVH5R .framer-gs4g4q, .framer-zVH5R .framer-6wfrt9, .framer-zVH5R .framer-5it6v3, .framer-zVH5R .framer-wdr353, .framer-zVH5R .framer-qnznul, .framer-zVH5R .framer-19jk5z5, .framer-zVH5R .framer-zj0m35, .framer-zVH5R .framer-jct3o6, .framer-zVH5R .framer-zw33d6, .framer-zVH5R .framer-6o2bqb, .framer-zVH5R .framer-1h9pvqw, .framer-zVH5R .framer-7nfyz5, .framer-zVH5R .framer-hjdit, .framer-zVH5R .framer-jlwzhz, .framer-zVH5R .framer-p4ieet, .framer-zVH5R .framer-1e24epq, .framer-zVH5R .framer-yrylg2, .framer-zVH5R .framer-wyyxjt, .framer-zVH5R .framer-1huhczx { aspect-ratio: 0.011111111111111112 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 90px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; }`,
          `.framer-zVH5R .framer-158zef0-container { flex: none; height: 6px; left: -2px; position: absolute; top: -3px; width: 6px; z-index: 1; }`,
          `.framer-zVH5R .framer-1vfprm3-container { flex: none; height: 6px; position: absolute; right: -2px; top: -3px; width: 6px; z-index: 1; }`,
          `.framer-zVH5R .framer-jcrrla-container { bottom: -3px; flex: none; height: 6px; position: absolute; right: -2px; width: 6px; z-index: 1; }`,
          `.framer-zVH5R .framer-lrp162-container { bottom: -3px; flex: none; height: 6px; left: -2px; position: absolute; width: 6px; z-index: 1; }`,
          `.framer-zVH5R.framer-v-2c3acb .framer-1ps25g { height: 40px; }`,
          `.framer-zVH5R[data-border="true"]::after, .framer-zVH5R [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-zVH5R`
      )),
      (B.displayName = `Pattern`),
      (B.defaultProps = { height: 64, width: 1408 }),
      S(B, {
        variant: {
          options: [`iE1Txx1gl`, `GGx7sb23r`],
          optionTitles: [`Pattern`, `Tablet/Phone`],
          title: `Variant`,
          type: C.Enum,
        },
      }),
      y(B, [{ explicitInter: !0, fonts: [] }, ...A], { supportsExplicitInterCodegen: !0 }));
  });
export { V as n, B as t };
//# sourceMappingURL=CsKVMk6kk.LV5yxHWp.mjs.map
