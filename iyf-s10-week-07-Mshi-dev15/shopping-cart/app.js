// ==========================================
// 🛒 Shopping Cart - Single File Version
// ==========================================

// --- 1. CONFIGURATION & DEFAULT STATE ---
const STORAGE_KEY = "shopping_cart_state";

const defaultState = {
    products: [
        { id: 1, name: "Laptop", price: 999.99, image: "💻" },
        { id: 2, name: "Phone", price: 699.99, image: "📱" },
        { id: 3, name: "Headphones", price: 199.99, image: "🎧" },
        { id: 4, name: "Keyboard", price: 89.99, image: "⌨️" },
        { id: 5, name: "Mouse", price: 29.99, image: "🖱️" }
    ],
    cart: [] // { productId, quantity }
};

// --- 2. STORAGE HELPERS ---
function saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        console.log("💾 Saved to storage:", key);
    } catch (e) { console.error("❌ Save failed:", e); }
}

function loadFromStorage(key, defaultValue = null) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    } catch (e) { console.error("❌ Load failed:", e); return defaultValue; }
}

// --- 3. STATE STORE (Observer Pattern) ---
const createStore = (initialState) => {
    let state = initialState;
    const listeners = [];

    return {
        getState: () => ({ ...state }), // Return copy to prevent direct mutation

        setState: (updates) => {
            state = { ...state, ...updates }; // Immutable update
            listeners.forEach(fn => fn(state)); // Notify subscribers
            saveToStorage(STORAGE_KEY, state); // Auto-persist
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

// Initialize store with saved data or defaults
const store = createStore(loadFromStorage(STORAGE_KEY, defaultState));

// Helper lookups
function getProductById(id) {
    return store.getState().products.find(p => p.id === id);
}
function getCartItem(productId) {
    return store.getState().cart.find(item => item.productId === productId);
}

// --- 4. CART ACTIONS ---
function addToCart(productId) {
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

function updateQuantity(productId, newQty) {
    if (newQty <= 0) { removeFromCart(productId); return; }
    
    const state = store.getState();
    store.setState({
        cart: state.cart.map(item =>
            item.productId === productId ? { ...item, quantity: newQty } : item
        )
    });
}

function removeFromCart(productId) {
    const state = store.getState();
    store.setState({
        cart: state.cart.filter(item => item.productId !== productId)
    });
}

function clearCart() {
    store.setState({ cart: [] });
}

// --- 5. CALCULATIONS ---
function getCartTotal() {
    const { products, cart } = store.getState();
    return cart.reduce((sum, item) => {
        const product = getProductById(item.productId);
        return sum + (product.price * item.quantity);
    }, 0).toFixed(2);
}

function getCartCount() {
    return store.getState().cart.reduce((sum, item) => sum + item.quantity, 0);
}

// --- 6. UI RENDERING ---
const elements = {
    products: document.getElementById('products'),
    cart: document.getElementById('cart'),
    cartCount: document.getElementById('cart-count'),
    cartTotal: document.getElementById('cart-total'),
    emptyMsg: document.getElementById('empty-cart-msg'),
    clearBtn: document.getElementById('clear-cart')
};

function renderProducts() {
    const { products } = store.getState();
    elements.products.innerHTML = products.map(p => `
        <div class="product" data-id="${p.id}">
            <div style="font-size: 2.5em;">${p.image}</div>
            <div style="flex: 1;">
                <h3 style="margin: 0 0 5px;">${p.name}</h3>
                <p style="margin: 0; color: #28a745; font-weight: bold;">$${p.price.toFixed(2)}</p>
            </div>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
    `).join('');
}

function renderCart() {
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
                        <button onclick="updateQuantity(${item.productId}, ${item.quantity - 1})">−</button>
                        <span style="font-weight: bold; min-width: 20px; text-align: center;">${item.quantity}</span>
                        <button onclick="updateQuantity(${item.productId}, ${item.quantity + 1})">+</button>
                        <button class="danger" onclick="removeFromCart(${item.productId})">Remove</button>
                    </div>
                </div>
            `;
        }).join('');
    }

    elements.cartCount.textContent = getCartCount();
    elements.cartTotal.textContent = getCartTotal();
}

// --- 7. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("🛒 App Starting...");
    
    // Initial render
    renderProducts();
    renderCart();
    
    // Event listeners
    elements.clearBtn.addEventListener('click', () => {
        if (confirm('Clear your entire cart?')) clearCart();
    });
    
    // Auto-update UI on state changes
    store.subscribe(() => renderCart());
    
    console.log("✅ App ready!");
});