import React, { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [productToBuy, setProductToBuy] = useState(null);
  const [addedProduct, setAddedProduct] = useState(null);

  const kobe3Image =
    "https://thedropdate.com/_next/image?url=https%3A%2F%2Fstatic.sneakerjagers.com%2Fp%2Fb7Of7NhpFfuSUnZU9t4tfm0MNifEerPXZcdfBWfU.png&w=3840&q=100";
  const kobe4Image =
    "https://thedropdate.com/_next/image?url=https%3A%2F%2Fstatic.sneakerjagers.com%2Fproducts%2F660x660%2F122691.jpg&w=3840&q=100";
  const blackMambaImage =
    "https://static.sneakerjagers.com/p/tprI4OtlC7zA4cVLMgGqpsSt1B90mxtiOggQGXWy.png";
  const kobe5Image =
    "https://thedropdate.com/_next/image?url=https%3A%2F%2Fstatic.sneakerjagers.com%2Fproducts%2F660x660%2F175931.jpg&w=3840&q=100";
  const kobe6Image =
    "https://thedropdate.com/_next/image?url=https%3A%2F%2Fstatic.sneakerjagers.com%2Fp%2F7FuqUM5iGHzqxp23geKO0F8zS2UmdVcBpGWCyySL.png&w=3840&q=100";
  const kobe8Image =
    "https://thedropdate.com/_next/image?url=https%3A%2F%2Fstatic.sneakerjagers.com%2Fp%2Fd6wOqHUnsW18hjbRc1JGWpFYg8ysunqsE8oAekT4.png&w=3840&q=100";
  const kobe9Image =
    "https://thedropdate.com/_next/image?url=https%3A%2F%2Fstatic.sneakerjagers.com%2Fp%2FBIrruJLwRJZ07lWg1gGXKWgUNeev4rkbRNLmQmNc.png&w=3840&q=100";
  const kobe11Image =
    "https://thedropdate.com/_next/image?url=https%3A%2F%2Fstatic.sneakerjagers.com%2Fp%2FYq4YxXirwN87FOOl3lepfuAixYC3DyAPtprAnc5P.png&w=3840&q=75";
  const airForceImage =
    "https://thedropdate.com/_next/image?url=https%3A%2F%2Fstatic.sneakerjagers.com%2Fp%2FRipi7WWKZ5gE6zC5OAmsz8FkbvqGKfiKJdtwOqyq.png&w=3840&q=100";

  function addToCart(name, price, size, image) {
    const tempArray = [];
    const newItemId = Date.now() + Math.random();
    for (let i = 0; i < cart.length; i++) {
      tempArray.push(cart[i]);
    }
    tempArray.push({
      name: name,
      price: price,
      size: size,
      image: image,
      id: newItemId,
    });
    setCart(tempArray);
    return newItemId;
  }

  function chooseProduct(name, price, image) {
    setProductToBuy({
      name: name,
      price: price,
      image: image,
    });
  }

  function chooseSize(size) {
    if (productToBuy !== null) {
      const newItemId = addToCart(
        productToBuy.name,
        productToBuy.price,
        size,
        productToBuy.image,
      );
      setAddedProduct({
        name: productToBuy.name,
        price: productToBuy.price,
        size: size,
        image: productToBuy.image,
        id: newItemId,
      });
      setProductToBuy(null);
    }
  }

  function cancelSize() {
    setProductToBuy(null);
  }

  function closeAddedPopup() {
    setAddedProduct(null);
  }

  function cancelOrder() {
    if (addedProduct !== null) {
      const tempArray = [];
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id !== addedProduct.id) {
          tempArray.push(cart[i]);
        }
      }

      setCart(tempArray);
      setAddedProduct(null);
    }
  }

  function formatPrice(price) {
    if (typeof price === "number") {
      return "$" + price;
    }

    return price;
  }

  function getPriceNumber(price) {
    if (typeof price === "number") {
      return price;
    }

    return Number(price.replace("₱", "").replace(",", ""));
  }

  function formatPesoTotal(total) {
    return "₱" + total.toLocaleString();
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
        message +=
          "- " +
          cart[i].name +
          " - Size " +
          cart[i].size +
          " (" +
          formatPrice(cart[i].price) +
          ")\n";
      }
      message += "\nTotal Bill: " + formatPesoTotal(totalBill);
      alert(message);
      setCart([]);
      setAddedProduct(null);
    }
  }

  const cartItemsUI = [];
  let totalBill = 0;
  for (let i = 0; i < cart.length; i++) {
    totalBill += getPriceNumber(cart[i].price);
    cartItemsUI.push(
      <div key={cart[i].id} className="cart-dropdown-item">
        <div className="cart-item-info">
          <img src={cart[i].image} alt={cart[i].name} />
          <span>
            {cart[i].name} - Size {cart[i].size}
            <strong>{formatPrice(cart[i].price)}</strong>
          </span>
        </div>
        <button onClick={() => deleteItem(i)}>Delete</button>
      </div>,
    );
  }

  const sizeOptions = ["8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5"];
  const sizeButtonsUI = [];
  for (let i = 0; i < sizeOptions.length; i++) {
    sizeButtonsUI.push(
      <button key={sizeOptions[i]} onClick={() => chooseSize(sizeOptions[i])}>
        {sizeOptions[i]}
      </button>,
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
              <div>
                <div className="cart-total">
                  <span>Total Bill</span>
                  <strong>{formatPesoTotal(totalBill)}</strong>
                </div>
                <button id="checkout-btn" onClick={checkout}>
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {productToBuy !== null && (
        <div className="size-popup-bg">
          <div className="size-popup">
            <h2>Choose your size</h2>
            <p>{productToBuy.name}</p>
            <div className="size-buttons">{sizeButtonsUI}</div>
            <button className="cancel-size" onClick={cancelSize}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {addedProduct !== null && (
        <div className="bag-popup-bg">
          <div className="bag-popup">
            <div className="bag-title-row">
              <div className="bag-title-left">
                <span className="bag-check">✓</span>
                <h2>Its in the bag</h2>
              </div>
              <button className="close-bag" onClick={closeAddedPopup}>
                ×
              </button>
            </div>

            <div className="bag-product">
              <img src={addedProduct.image} alt={addedProduct.name} />
              <div>
                <h3>{addedProduct.name}</h3>
                <p>Shoes</p>
                <p>Size US M {addedProduct.size}</p>
                <strong>{formatPrice(addedProduct.price)}</strong>
              </div>
            </div>

            <button className="cancel-order-button" onClick={cancelOrder}>
              Cancel Order
            </button>
            <button className="bag-checkout-button" onClick={closeAddedPopup}>
              Confirm
            </button>
          </div>
        </div>
      )}

      <div className="main-listing">
        <div
          className="grid-item"
          onClick={() => chooseProduct("Nike Kobe 3 Protro 'Christmas'", "₱11,495", kobe3Image)}
        >
          <img
            src={kobe3Image}
            alt="Nike Kobe 3 Protro 'Christmas'"
          />
          <div className="item-cat">
            <div>
              <h2>Nike Kobe 3 Protro 'Christmas'</h2>
              <p className="item-price">₱11,495</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() => chooseProduct("Nike Kobe 3 Protro 'Christmas'", "₱11,495", kobe3Image)}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div
          className="grid-item"
          onClick={() => chooseProduct("Nike Kobe 4 Protro", "₱11,495", kobe4Image)}
        >
          <img
            src={kobe4Image}
            alt="shoe"
          />
          <div className="item-cat">
            <div>
              <h2>Nike Kobe 4 Protro</h2>
              <p className="item-price">₱11,495</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() => chooseProduct("Nike Kobe 4 Protro", "₱11,495", kobe4Image)}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div
          className="grid-item"
          onClick={() => chooseProduct("Nike Kobe 4 Protro 'Black Mamba'", "₱11,495", blackMambaImage)}
        >
          <img
            src={blackMambaImage}
            alt="shoe"
          />
          <div className="item-cat">
            <div>
              <h2>Nike Kobe 4 Protro 'Black Mamba'</h2>
              <p className="item-price">₱11,495</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() => chooseProduct("Nike Kobe 4 Protro 'Black Mamba'", "₱11,495", blackMambaImage)}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div
          className="grid-item"
          onClick={() =>
            chooseProduct("Nike Kobe 5 Protro Bruce Lee 'Black & Yellow'", "₱10,495", kobe5Image)
          }
        >
          <img
            src={kobe5Image}
            alt="shoe"
          />
          <div className="item-cat">
            <div>
              <h2>Nike Kobe 5 Protro Bruce Lee 'Black & Yellow'</h2>
              <p className="item-price">₱10,495</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() =>
                chooseProduct("Nike Kobe 5 Protro Bruce Lee 'Black & Yellow'", "₱10,495", kobe5Image)
              }
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div
          className="grid-item"
          onClick={() => chooseProduct('Nike Kobe 6 Protro "AllStar"', "₱10,495", kobe6Image)}
        >
          <img
            src={kobe6Image}
            alt="shoe"
          />
          <div className="item-cat">
            <div>
              <h2>Nike Kobe 6 Protro "AllStar"</h2>
              <p className="item-price">₱10,495</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() => chooseProduct('Nike Kobe 6 Protro "AllStar"', "₱10,495", kobe6Image)}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div
          className="grid-item"
          onClick={() => chooseProduct("Nike Kobe 8 Protro 'What The Kobe'", "₱10,495", kobe8Image)}
        >
          <img
            src={kobe8Image}
            alt="shoe"
          />
          <div className="item-cat">
            <div>
              <h2>Nike Kobe 8 Protro 'What The Kobe'</h2>
              <p className="item-price">₱10,495</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() => chooseProduct("Nike Kobe 8 Protro 'What The Kobe'", "₱10,495", kobe8Image)}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div
          className="grid-item"
          onClick={() => chooseProduct("Nike Kobe 9 EM Low Protro 'Mambacita'", "₱9,495", kobe9Image)}
        >
          <img
            src={kobe9Image}
            alt="shoe"
          />
          <div className="item-cat">
            <div>
              <h2>Nike Kobe 9 EM Low Protro 'Mambacita'</h2>
              <p className="item-price">₱9,495</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() => chooseProduct("Nike Kobe 9 EM Low Protro 'Mambacita'", "₱9,495", kobe9Image)}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div
          className="grid-item"
          onClick={() => chooseProduct("Nike Kobe 11 Protro 'Mamba Day'", "₱9,495", kobe11Image)}
        >
          <img
            src={kobe11Image}
            alt="shoe"
          />
          <div className="item-cat">
            <div>
              <h2>Nike Kobe 11 Protro 'Mamba Day'</h2>
              <p className="item-price">₱9,495</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() => chooseProduct("Nike Kobe 11 Protro 'Mamba Day'", "₱9,495", kobe11Image)}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div
          className="grid-item"
          onClick={() =>
            chooseProduct("Kobe Bryant x Nike Air Force 1 Low 'Court Purple'", "₱9,495", airForceImage)
          }
        >
          <img
            src={airForceImage}
            alt="Kobe Bryant x Nike Air Force 1 Low 'Court Purple'"
          />
          <div className="item-cat">
            <div>
              <h2>Kobe Bryant x Nike Air Force 1 Low 'Court Purple'</h2>
              <p className="item-price">₱9,495</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() =>
                chooseProduct("Kobe Bryant x Nike Air Force 1 Low 'Court Purple'", "₱9,495", airForceImage)
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
