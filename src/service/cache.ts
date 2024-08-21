export const LOCALSTORAGE = 'localStorage';
export const SESSIONSTORAGE = 'sessionStorage';

class LocalCache {
  setCache(key: string, value: any, storage = LOCALSTORAGE) {
    window[storage].setItem(key, JSON.stringify(value));
  }

  getCache(key: string, storage = LOCALSTORAGE) {
    const value = window[storage].getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  }

  deleteCache(key: string, storage = LOCALSTORAGE) {
    window[storage].removeItem(key);
  }

  clearCache(storage = LOCALSTORAGE) {
    window[storage].clear();
  }
}

export default new LocalCache();
