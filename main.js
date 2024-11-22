const products = [
    {
        id: 1,
        name: "Vela rústica preta",
        price: 2.49,
        image: "images/velaRusticaPreta.jpg",
        specifications: {
            tipo: "Vela Rústica",
            cor: "Preto",
            dimensão: "6,7x7cm",
            Tempo: "25 horas",
            material: "Parafina"
        }
    },
    {
        id: 2,
        name: "Vela perfumada",
        price: 5.99,
        image: "images/velaPerfumadaPilar.jpg",
        specifications: {
            tipo: "Vela Perfumada",
            Fragrância: "Frutos Vermelhos",
            cor: "Vermelho",
            dimensão: "14x6,9x6,9cm",
            material: "Cera"
        }
    },
    {
        id: 3,
        name: "Vela olia azul",
        price: 3.99,
        image: "images/velaPilarAzul.jpg",
        specifications: {
            tipo: "Vela Pilar Olia",
            cor: "Azul Orage",
            dimensão: "14x6,8cm",
            Tempo: "50 horas",
            material: "Cera"
        }
    },
    {
        id: 4,
        name: "Vela bola rústica",
        price: 3.99,
        image: "images/velaBola.jpg",
        specifications: {
            tipo: "Vela Bola Rústica",
            cor: "Vermelho",
            dimensão: "10cm",
            Tempo: "45 horas",
            material: "Cera"
        }
    },
    {
        id: 5,
        name: "Vela branca",
        price: 3.49,
        image: "images/velaBranca.webp",
        specifications: {
            tipo: "Vela Pilar Many Branca",
            cor: "Branco",
            dimensão: "18x6,8cm",
            Tempo: "60 horas",
            material: "Cera"
        }
    }
];

// Carrinho de compras
let cart = [];

// Função para atualizar o contador do carrinho
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cart.length;
}

// Função para adicionar produto ao carrinho
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
        alert(`${product.name} adicionado ao carrinho!`);
    }
}

// Função para formatar as especificações do produto
function formatSpecifications(specs) {
    return Object.entries(specs)
        .map(([key, value]) => {
            // Capitaliza a primeira letra da chave
            const formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
            return `<span class="spec-item"><strong>${formattedKey}:</strong> ${value}</span>`;
        })
        .join('<br>');
}

// Função para renderizar os produtos
function renderProducts() {
    const productsContainer = document.querySelector('.products');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">${product.price.toFixed(2)} €</p>
            <div class="product-specifications">
                ${formatSpecifications(product.specifications)}
            </div>
            <button class="btn" onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        `;
        
        productsContainer.appendChild(productCard);
    });
}

// Inicializar a página
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});