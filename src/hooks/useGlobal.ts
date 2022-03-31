/* eslint-disable no-unused-vars */
import { useState } from 'react';

export const useGlobal = (key: string) : [unknown, (variable: unknown) => void] => {
  const previouslySaved = JSON.parse(localStorage.getItem(key) as string);
  const [valueState, setValue] = useState<string | null>(previouslySaved);
  const setValueInLS = (valueToSave: unknown) => {
    localStorage.setItem(key, JSON.stringify(valueToSave));
    const valueSaved = JSON.parse(localStorage.getItem(key) as string);
    setValue(valueSaved);
  };
  return [valueState, setValueInLS];
};

export const useGetGlobalVar = (key: string) => (
  JSON.parse(localStorage.getItem(key) as string)
);

export const useSetGlobalVar = (key: string) => {
  const setValueInLS = (valueToSave: unknown) => {
    localStorage.setItem(key, JSON.stringify(valueToSave));
  };
  return setValueInLS;
};
