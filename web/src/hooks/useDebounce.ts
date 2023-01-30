import { useEffect, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

export function useDebounce<T>(
  defValue: T,
  delay = 300
): [debouncedValue: T, setDebouncedValue: Dispatch<SetStateAction<T>>, debouncedValue: T] {
  const [value, setValue] = useState<T>(defValue);
  const [debouncedValue, setDebouncedValue] = useState<T>(defValue);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return [value, setValue, debouncedValue];
}
