export function setStorageItem(key, value) {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    catch(e) {
        console.error(e);
    }
}

export function getStorageItem(key, initValue) {
    try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initValue;
    }
    catch(e) {
        console.error(e);
        return initValue;
    }
}