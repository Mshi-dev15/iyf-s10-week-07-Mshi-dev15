export const STORAGE_KEY = "shopping_cart_state";

export function saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (e) { console.error("💾 Save failed:", e); }
}

export function loadFromStorage(key, defaultValue = null) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    } catch (e) { console.error("📥 Load failed:", e); return defaultValue; }
}