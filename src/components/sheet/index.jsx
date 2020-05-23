// Documentation for original menu drawer
// https://codesandbox.io/s/react-use-gesture-sheet-fg3w0

import React, { useCallback, useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import { useDrag, useScroll } from "react-use-gesture";
import styles from "./styles.module.scss";
import clamp from "lodash/clamp";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import { useHeight } from "./useHeight";
import { useOutsideEvent } from "./useOutsideEvent";
import { useBodyScrollLock } from "./useBodyScrollLock";
import { useScrollTracker } from "./useScrollTracker";

const MenuDrawer = ({ children }) => {
  const draggingRef = useRef(true);
  const scrollingRef = useRef(false);
  const menuRef = useRef();
  const scrollRef = useRef();

  // heights
  const h = useHeight(menuRef)// total height of the sheet (child + pull + reserve)
  const s = window.innerHeight // Screen height
  const p = 2.2 * 16 // 2.2rem * 16px/rem 35.2px. Pull element
  const r = 6 * 16;// 6rem * 16px/rem 96px. Reserve
  const c = h - r - p; // Child height
  const o = 500; // px custom max Open height
  const top = p // small margin at Top when opened;
  const ceil = Math.min(s - top, o + p, c + p); // 
  const dtt = s - ceil // distance till top

  console.log('Sheet', h)

  useBodyScrollLock(menuRef)
  useOutsideEvent(menuRef, () => close()); // check if it works
  useScrollTracker(scrollRef, scrollingRef)

  // Spring
  const [{ y }, set] = useSpring(() => ({
    config: { ...config.stiff, duration: 100 },
    to: { y: h - p }
  }), [h]);


  const open = useCallback(() => {
    // console.log('open')
    draggingRef.current = false;
    set({ y: h - ceil - p, config: config.wobbly });
    // set({ y: (h - p - m), config: config.wobbly });
    disableBodyScroll(menuRef.current, { reserveScrollBarGap: true });
  }, [set, h, ceil]);


  const close = useCallback((velocity = 0) => {
    // console.log('close')
    draggingRef.current = true;
    set({ y: (h - p), config: { ...config.stiff, velocity } });
    clearAllBodyScrollLocks();
  }, [set, h, p]);

  // Open / close menu
  const toggleMenu = useCallback(() => {
    // console.log('toggle')
    if (draggingRef.current) {
      open();
    } else {
      close();
    }
  }, [open, close]);

  // Drag settings
  const drag = useDrag(
    ({
      event,
      memo = y.get(),
      first,
      cancel,
      canceled,
      vxvy: [, vy],
      last,
      movement: [, my],
      scrolling
    }) => {
      let newY = memo + my;

      // console.log('1dr', draggingRef.current)
      if (first) {
        draggingRef.current = true;
        disableBodyScroll(menuRef.current);
      } else if (last) draggingRef.current = false;

      if (newY < -r) {
        // console.log('case 1')
        cancel();
      }
      if (newY < 0) {
        // console.log('case 2')
        newY = newY / (1 - newY * 0.5);
      }
      if (last) {
        // console.log("case 3")
        const scrollable = event.target.closest("#scrollable")
        if (scrollable) {
          ((newY > h * 0.85 || vy > 0.2) && scrollable.scrollTop < 5)  ? close(vy) : open();
        } else {
          (newY > h * 0.85 || vy > 0.2) ? close(vy) : open();
        }
      } else {
        // console.log('case 4')
        let high = h - p
        let low = 0
        if (h > s) {
          let movement = Math.min(dtt, r)
          low = h - ceil - movement
        } else {
          let movement = Math.min(dtt, r)
          low = h - ceil - movement
        }

        const scrollable = event.target.closest("#scrollable")
        if (scrollable) {
          const atTop = scrollable.scrollTop < 5
          const atBottom = (scrollable.clientHeight + scrollable.scrollTop) === scrollable.scrollHeight
          if (atTop && my > 0) {
            set({
              y: clamp(newY, low, high),
              immediate: true,
            });
          }
          if (atBottom && my < 0)
            set({
              y: clamp(newY, low, high),
              immediate: true,
            });

        } else {
          set({
            y: clamp(newY, low, high),
            immediate: true,
          });
        }

      }
      // console.log("2dr", draggingRef.current)

      return memo;
    }
  );

  const style = { height: `${ceil}px`, overflow: "scroll" }
  const spring = { y }

  return (
    <animated.div
      ref={menuRef}
      className={styles.container}
      {...drag()}
      style={spring}
      onClick={toggleMenu}
    >
      {console.log("render")}
      <div className={styles.pull}>
        <div className={styles['pull-line']} />
      </div>
      <div>
        <div
          ref={scrollRef}
          id={"scrollable"}
          style={style}
        >
          {children}
        </div>
        <div className={styles.reserve} />
      </div>
    </animated.div>
  );
};

export default MenuDrawer;
