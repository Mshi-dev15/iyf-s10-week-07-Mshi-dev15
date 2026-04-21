import { renderProducts, renderCart } from './ui.js';
import { addToCart, updateQuantity, removeFromCart, clearCart } from './actions.js';
import { store } from './state.js';

// Expose actions to global scope for inline onclick handlers
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderCart();

    document.getElementById('clear-cart').addEventListener('click', () => {
        if (confirm('Clear your entire cart?')) clearCart();
    });

    // Auto-update UI when state changes
    store.subscribe(renderCart);
});