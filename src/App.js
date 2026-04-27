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

  function addToCartWithKeyboard(event, name, price) {
    if (event.key === "Enter" || event.key === " ") {
      addToCart(name, price);
    }
  }

  function formatPrice(price) {
    if (typeof price === "number") {
      return "$" + price;
    }

    return price;
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
        message += "- " + cart[i].name + " (" + formatPrice(cart[i].price) + ")\n";
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
        <h1>Kobe shoes Store Ecommerce
        </h1>
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
        <div
          className="grid-item"
          role="button"
          tabIndex="0"
          onClick={() => addToCart("Nike Kobe 3 Protro 'Christmas'", "₱11,495")}
          onKeyDown={(event) =>
            addToCartWithKeyboard(event, "Nike Kobe 3 Protro 'Christmas'", "₱11,495")
          }
        >
          <img
            src="https://thedropdate.com/_next/image?url=https%3A%2F%2Fstatic.sneakerjagers.com%2Fp%2Fb7Of7NhpFfuSUnZU9t4tfm0MNifEerPXZcdfBWfU.png&w=3840&q=100"
            alt="Nike Kobe 3 Protro 'Christmas'"
          />
          <div className="item-cat">
            <div>
              <h2>Nike Kobe 3 Protro 'Christmas'</h2>
              <p className="item-price">₱11,495</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() => addToCart("Nike Kobe 3 Protro 'Christmas'", "₱11,495")}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div
          className="grid-item"
          role="button"
          tabIndex="0"
          onClick={() => addToCart("Nike Kobe 4 Protro", "₱11,495")}
          onKeyDown={(event) =>
            addToCartWithKeyboard(event, "Nike Kobe 4 Protro", "₱11,495")
          }
        >
          <img
            src="https://thedropdate.com/_next/image?url=https%3A%2F%2Fstatic.sneakerjagers.com%2Fproducts%2F660x660%2F122691.jpg&w=3840&q=100"
            alt="shoe"
          />
          <div className="item-cat">
            <div>
              <h2>Nike Kobe 4 Protro</h2>
              <p className="item-price">₱11,495</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() => addToCart("Nike Kobe 4 Protro", "₱11,495")}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div
          className="grid-item"
          role="button"
          tabIndex="0"
          onClick={() => addToCart("Nike Kobe 4 Protro 'Black Mamba'", "₱11,495")}
          onKeyDown={(event) =>
            addToCartWithKeyboard(event, "Nike Kobe 4 Protro 'Black Mamba'", "₱11,495")
          }
        >
          <img
            src="https://static.sneakerjagers.com/p/tprI4OtlC7zA4cVLMgGqpsSt1B90mxtiOggQGXWy.png"
            alt="shoe"
          />
          <div className="item-cat">
            <div>
              <h2>Nike Kobe 4 Protro 'Black Mamba'</h2>
              <p className="item-price">₱11,495</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() => addToCart("Nike Kobe 4 Protro 'Black Mamba'", "₱11,495")}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div
          className="grid-item"
          role="button"
          tabIndex="0"
          onClick={() =>
            addToCart("Nike Kobe 5 Protro Bruce Lee 'Black & Yellow'", "₱11,495")
          }
          onKeyDown={(event) =>
            addToCartWithKeyboard(
              event,
              "Nike Kobe 5 Protro Bruce Lee 'Black & Yellow'",
              "₱11,495",
            )
          }
        >
          <img
            src="https://thedropdate.com/_next/image?url=https%3A%2F%2Fstatic.sneakerjagers.com%2Fproducts%2F660x660%2F175931.jpg&w=3840&q=100"
            alt="shoe"
          />
          <div className="item-cat">
            <div>
              <h2>Nike Kobe 5 Protro Bruce Lee 'Black & Yellow'</h2>
              <p className="item-price">₱11,495</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() =>
                addToCart("Nike Kobe 5 Protro Bruce Lee 'Black & Yellow'", "₱11,495")
              }
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div
          className="grid-item"
          role="button"
          tabIndex="0"
          onClick={() => addToCart('Nike Kobe 6 Protro "AllStar"', "₱11,495")}
          onKeyDown={(event) =>
            addToCartWithKeyboard(event, 'Nike Kobe 6 Protro "AllStar"', "₱11,495")
          }
        >
          <img
            src="https://thedropdate.com/_next/image?url=https%3A%2F%2Fstatic.sneakerjagers.com%2Fp%2F7FuqUM5iGHzqxp23geKO0F8zS2UmdVcBpGWCyySL.png&w=3840&q=100"
            alt="shoe"
          />
          <div className="item-cat">
            <div>
              <h2>Nike Kobe 6 Protro "AllStar"</h2>
              <p className="item-price">₱11,495</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() => addToCart('Nike Kobe 6 Protro "AllStar"', "₱11,495")}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div
          className="grid-item"
          role="button"
          tabIndex="0"
          onClick={() => addToCart("Nike Kobe 8 Protro 'What The Kobe'", "₱11,495")}
          onKeyDown={(event) =>
            addToCartWithKeyboard(event, "Nike Kobe 8 Protro 'What The Kobe'", "₱11,495")
          }
        >
          <img
            src="https://thedropdate.com/_next/image?url=https%3A%2F%2Fstatic.sneakerjagers.com%2Fp%2Fd6wOqHUnsW18hjbRc1JGWpFYg8ysunqsE8oAekT4.png&w=3840&q=100"
            alt="shoe"
          />
          <div className="item-cat">
            <div>
              <h2>Nike Kobe 8 Protro 'What The Kobe'</h2>
              <p className="item-price">₱11,495</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() => addToCart("Nike Kobe 8 Protro 'What The Kobe'", "₱11,495")}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div
          className="grid-item"
          role="button"
          tabIndex="0"
          onClick={() => addToCart("Nike Kobe 9 EM Low Protro 'Mambacita'", "₱11,495")}
          onKeyDown={(event) =>
            addToCartWithKeyboard(event, "Nike Kobe 9 EM Low Protro 'Mambacita'", "₱11,495")
          }
        >
          <img
            src="https://thedropdate.com/_next/image?url=https%3A%2F%2Fstatic.sneakerjagers.com%2Fp%2FBIrruJLwRJZ07lWg1gGXKWgUNeev4rkbRNLmQmNc.png&w=3840&q=100"
            alt="shoe"
          />
          <div className="item-cat">
            <div>
              <h2>Nike Kobe 9 EM Low Protro 'Mambacita'</h2>
              <p className="item-price">₱11,495</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() => addToCart("Nike Kobe 9 EM Low Protro 'Mambacita'", "₱11,495")}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div
          className="grid-item"
          role="button"
          tabIndex="0"
          onClick={() => addToCart("Nike Kobe 11 Protro 'Mamba Day'", "₱11,495")}
          onKeyDown={(event) =>
            addToCartWithKeyboard(event, "Nike Kobe 11 Protro 'Mamba Day'", "₱11,495")
          }
        >
          <img
            src="https://thedropdate.com/_next/image?url=https%3A%2F%2Fstatic.sneakerjagers.com%2Fp%2FYq4YxXirwN87FOOl3lepfuAixYC3DyAPtprAnc5P.png&w=3840&q=75"
            alt="shoe"
          />
          <div className="item-cat">
            <div>
              <h2>Nike Kobe 11 Protro 'Mamba Day'</h2>
              <p className="item-price">₱11,495</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() => addToCart("Nike Kobe 11 Protro 'Mamba Day'", "₱11,495")}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div
          className="grid-item"
          role="button"
          tabIndex="0"
          onClick={() =>
            addToCart("Kobe Bryant x Nike Air Force 1 Low 'Court Purple'", "₱8,495")
          }
          onKeyDown={(event) =>
            addToCartWithKeyboard(
              event,
              "Kobe Bryant x Nike Air Force 1 Low 'Court Purple'",
              "₱8,495",
            )
          }
        >
          <img
            src="https://thedropdate.com/_next/image?url=https%3A%2F%2Fstatic.sneakerjagers.com%2Fp%2FRipi7WWKZ5gE6zC5OAmsz8FkbvqGKfiKJdtwOqyq.png&w=3840&q=100"
            alt="Kobe Bryant x Nike Air Force 1 Low 'Court Purple'"
          />
          <div className="item-cat">
            <div>
              <h2>Kobe Bryant x Nike Air Force 1 Low 'Court Purple'</h2>
              <p className="item-price">₱8,495</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() =>
                addToCart("Kobe Bryant x Nike Air Force 1 Low 'Court Purple'", "₱8,495")
              }
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
