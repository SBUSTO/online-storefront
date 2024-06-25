document.addEventListener('DOMContentLoaded'), () => {
    const apiUrl = 'https://fakestoreapi.com/products';
    const productsListings = document.getElementById('products-listings');




fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');

                productDiv.innerHTML = `
                <img src="${product.image}" alt="$product.title}">
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <p>$${product.price}</p>
                <button>Add to Cart</button>
                `;

                productListings.appendChild(productDiv);
            });

        }
