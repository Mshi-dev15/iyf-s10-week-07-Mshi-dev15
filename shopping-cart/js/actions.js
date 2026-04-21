import { store, getCartItem } from './state.js';

export function addToCart(productId) {
    const state = store.getState();
    const existing = getCartItem(productId);

    if (existing) {
        store.setState({
            cart: state.cart.map(item =>
                item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        });
    } else {
        store.setState({
            cart: [...state.cart, { productId, quantity: 1 }]
        });
    }
}

export function updateQuantity(productId, newQty) {
    if (newQty <= 0) {
        removeFromCart(productId);
        return;
    }
    const state = store.getState();
    store.setState({
        cart: state.cart.map(item =>
            item.productId === productId ? { ...item, quantity: newQty } : item
        )
    });
}

export function removeFromCart(productId) {
    const state = store.getState();
    store.setState({
        cart: state.cart.filter(item => item.productId !== productId)
    });
}

export function clearCart() {
    store.setState({ cart: [] });
}

export function getCartTotal() {
    const { products, cart } = store.getState();
    return cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.productId);
        return sum + (product.price * item.quantity);
    }, 0).toFixed(2);
}

export function getCartCount() {
    return store.getState().cart.reduce((sum, item) => sum + item.quantity, 0);
}