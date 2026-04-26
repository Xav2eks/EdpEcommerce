import React, { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(name, price) {
    const tempArray = [];
    for (let i = 0; i < cart.length; i++) {
      tempArray.push(cart[i]);
    }
    tempArray.push({
      name: name,
      price: price,
      id: Date.now() + Math.random(),
    });
    setCart(tempArray);
  }

  function deleteItem(indexToDelete) {
    const tempArray = [];
    for (let i = 0; i < cart.length; i++) {
      if (i !== indexToDelete) {
        tempArray.push(cart[i]);
      }
    }
    setCart(tempArray);
  }

  function checkout() {
    if (cart.length === 0) {
      alert("Your cart is empty!");
    } else {
      let message = "Items in your cart:\n";
      for (let i = 0; i < cart.length; i++) {
        message += "- " + cart[i].name + " ($" + cart[i].price + ")\n";
      }
      alert(message);
      setCart([]);
    }
  }

  const cartItemsUI = [];
  for (let i = 0; i < cart.length; i++) {
    cartItemsUI.push(
      <div key={cart[i].id} className="cart-dropdown-item">
        <span>{cart[i].name}</span>
        <button onClick={() => deleteItem(i)}>Delete</button>
      </div>,
    );
  }

  return (
    <div className="App">
      <header>
        <h1>Ecommerce Shopay</h1>
        <div className="view-cart">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
            id="cart-img"
            alt="cart"
          />
          <p>View Cart ({cart.length})</p>

          <div className="cart-dropdown">
            {/* Render the UI we built with the for loop */}
            {cartItemsUI}

            {cart.length > 0 && (
              <button id="checkout-btn" onClick={checkout}>
                Checkout
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="main-listing">
        <div className="grid-item">
          <img
            src="https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/58d1baa8-21db-4f8a-8ceb-dd7cba685e78/AIR+ZOOM+G.T.+CUT+ACADEMY+2+EP.png"
            alt="shoe"
          />
          <div className="item-cat">
            <div>
              <h2>Nike G.T Cut Academy 2 EP</h2>
              <p className="item-price">$99.99</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() => addToCart("Nike G.T Cut Academy 2 EP", 99.99)}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div className="grid-item">
          <img
            src="https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6ba74c93-d113-4c15-a043-6371207725f9/KOBE+IX+ELITE+LOW+EM+PROTRO.png"
            alt="shoe"
          />
          <div className="item-cat">
            <div>
              <h2>Kobe IX Elite Low EM Protro</h2>
              <p className="item-price">$129.99</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() => addToCart("Kobe IX Elite Low EM Protro", 129.99)}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div className="grid-item">
          <img
            src="https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/58d1baa8-21db-4f8a-8ceb-dd7cba685e78/AIR+ZOOM+G.T.+CUT+ACADEMY+2+EP.png"
            alt="shoe"
          />
          <div className="item-cat">
            <div>
              <h2>Product 3</h2>
              <p className="item-price">$149.99</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() => addToCart("Product 3", 149.99)}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div className="grid-item">
          <img
            src="https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/58d1baa8-21db-4f8a-8ceb-dd7cba685e78/AIR+ZOOM+G.T.+CUT+ACADEMY+2+EP.png"
            alt="shoe"
          />
          <div className="item-cat">
            <div>
              <h2>Product 4</h2>
              <p className="item-price">$149.99</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() => addToCart("Product 4", 149.99)}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div className="grid-item">
          <img
            src="https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/58d1baa8-21db-4f8a-8ceb-dd7cba685e78/AIR+ZOOM+G.T.+CUT+ACADEMY+2+EP.png"
            alt="shoe"
          />
          <div className="item-cat">
            <div>
              <h2>Product 5</h2>
              <p className="item-price">$149.99</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() => addToCart("Product 5", 149.99)}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div className="grid-item">
          <img
            src="https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/58d1baa8-21db-4f8a-8ceb-dd7cba685e78/AIR+ZOOM+G.T.+CUT+ACADEMY+2+EP.png"
            alt="shoe"
          />
          <div className="item-cat">
            <div>
              <h2>Product 6</h2>
              <p className="item-price">$149.99</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() => addToCart("Product 6", 149.99)}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div className="grid-item">
          <img
            src="https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/58d1baa8-21db-4f8a-8ceb-dd7cba685e78/AIR+ZOOM+G.T.+CUT+ACADEMY+2+EP.png"
            alt="shoe"
          />
          <div className="item-cat">
            <div>
              <h2>Product 7</h2>
              <p className="item-price">$149.99</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() => addToCart("Product 7", 149.99)}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div className="grid-item">
          <img
            src="https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/58d1baa8-21db-4f8a-8ceb-dd7cba685e78/AIR+ZOOM+G.T.+CUT+ACADEMY+2+EP.png"
            alt="shoe"
          />
          <div className="item-cat">
            <div>
              <h2>Product 8</h2>
              <p className="item-price">$149.99</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() => addToCart("Product 8", 149.99)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
