"use client";

import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  from?: number;
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
};

const AnimatedCounter = ({
  from = 0,
  to,
  duration = 1.6,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}: Props) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const value = useMotionValue(from);
  const rounded = useTransform(value, (v) => v.toFixed(decimals));
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (prefersReduced) {
      value.set(to);
      return;
    }
    const controls = animate(value, to, { duration, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [inView, to, duration, value, prefersReduced]);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${prefix}${v}${suffix}`;
    });
    return () => unsub();
  }, [rounded, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {`${prefix}${from.toFixed(decimals)}${suffix}`}
    </span>
  );
};

export default AnimatedCounter;
