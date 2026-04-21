import { saveToStorage, loadFromStorage, STORAGE_KEY } from './storage.js';

const defaultState = {
    products: [
        { id: 1, name: "Laptop", price: 999.99, image: "💻" },
        { id: 2, name: "Phone", price: 699.99, image: "📱" },
        { id: 3, name: "Headphones", price: 199.99, image: "🎧" },
        { id: 4, name: "Keyboard", price: 89.99, image: "⌨️" },
        { id: 5, name: "Mouse", price: 29.99, image: "🖱️" }
    ],
    cart: []
};

const createStore = (initialState) => {
    let state = initialState;
    const listeners = [];

    return {
        getState: () => ({ ...state }),
        setState: (updates) => {
            state = { ...state, ...updates };
            listeners.forEach(fn => fn(state));
            saveToStorage(STORAGE_KEY, state);
        },
        subscribe: (listener) => {
            listeners.push(listener);
            return () => {
                const i = listeners.indexOf(listener);
                if (i > -1) listeners.splice(i, 1);
            };
        }
    };
};

export const store = createStore(loadFromStorage(STORAGE_KEY, defaultState));

export function getProductById(id) {
    return store.getState().products.find(p => p.id === id);
}

export function getCartItem(productId) {
    return store.getState().cart.find(item => item.productId === productId);
}
