const checkWindow = typeof window !== "undefined";

export const setStorage = (key, value) => {
  if (checkWindow) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getStorage = (key) => {
  let storage;
  if (checkWindow) {
    storage = JSON.parse(localStorage.getItem(key));
  }
  return storage;
};