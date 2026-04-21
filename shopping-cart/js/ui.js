import { store, getProductById } from './state.js';
import { getCartTotal, getCartCount } from './actions.js';

const elements = {
    products: document.getElementById('products'),
    cart: document.getElementById('cart'),
    cartCount: document.getElementById('cart-count'),
    cartTotal: document.getElementById('cart-total'),
    emptyMsg: document.getElementById('empty-cart-msg')
};

export function renderProducts() {
    const { products } = store.getState();
    elements.products.innerHTML = products.map(p => `
        <div class="product" data-id="${p.id}">
            <div style="font-size: 2.5em;">${p.image}</div>
            <div style="flex: 1;">
                <h3 style="margin: 0 0 5px;">${p.name}</h3>
                <p style="margin: 0; color: #28a745; font-weight: bold;">$${p.price.toFixed(2)}</p>
            </div>
            <button onclick="window.addToCart(${p.id})">Add to Cart</button>
        </div>
    `).join('');
}

export function renderCart() {
    const { cart } = store.getState();

    if (cart.length === 0) {
        elements.emptyMsg.classList.remove('hidden');
        elements.cart.innerHTML = '';
        elements.cart.appendChild(elements.emptyMsg);
    } else {
        elements.emptyMsg.classList.add('hidden');
        elements.cart.innerHTML = cart.map(item => {
            const p = getProductById(item.productId);
            return `
                <div class="cart-item">
                    <div>
                        <strong>${p.image} ${p.name}</strong>
                        <div style="color: #666;">$${p.price.toFixed(2)} × ${item.quantity}</div>
                    </div>
                    <div class="controls">
                        <button onclick="window.updateQuantity(${item.productId}, ${item.quantity - 1})">−</button>
                        <span style="font-weight: bold; min-width: 20px; text-align: center;">${item.quantity}</span>
                        <button onclick="window.updateQuantity(${item.productId}, ${item.quantity + 1})">+</button>
                        <button class="danger" onclick="window.removeFromCart(${item.productId})">Remove</button>
                    </div>
                </div>
            `;
        }).join('');
    }

    elements.cartCount.textContent = getCartCount();
    elements.cartTotal.textContent = getCartTotal();
}