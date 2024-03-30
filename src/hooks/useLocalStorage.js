import { useState } from 'react';

const useLocalStorage = (key, initValue) => {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initValue)
  );

  const setValue = (value) => {
    // Check if fx
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value;
    // Set to state
    setLocalStorageValue(value);
    // Set to local storage
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };
  return [localStorageValue, setValue];
};

function getLocalStorageValue(key, initValue) {
  const itemFromStorage = localStorage.getItem(key);
  return itemFromStorage ? JSON.parse(itemFromStorage) : initValue;
}

export default useLocalStorage;
