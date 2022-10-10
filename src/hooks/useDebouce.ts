/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

import { useTimeout } from ".";

export default function useDebounce(
  callback: () => void,
  delay: number | undefined,
  dependencies: any
) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
}
