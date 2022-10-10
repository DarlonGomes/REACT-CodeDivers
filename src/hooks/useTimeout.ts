/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useRef } from "react";

export default function useTimeout(
  callback: () => void,
  delay: number | undefined
) {
  const callbackRef = useRef(callback);
  let id: any;
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set: () => void = useCallback(() => {
    id = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear: () => void = useCallback(() => {
    if (id) {
      clearTimeout(id);
    }
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset: () => void = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
}
