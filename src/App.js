import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './nav';
import Rout from './rout';
import Footer from './footer';
import Productdetail from './productdetail';
import Preloader from './Preloader';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  const [product, setProduct] = useState(Productdetail);

  useEffect(() => {
    // Simulate a delay to showcase the preloader
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const searchbtn = (product) => {
    const change = Productdetail.filter((x) => {
      return x.Cat === product;
    });
    setProduct(change);
  };

  const view = (product) => {
    setDetail([{ ...product }]);
    setClose(true);
  };

  const addtocart = (product) => {
    const exsit = cart.find((x) => {
      return x.id === product.id;
    });
    if (exsit) {
      alert('This Product is already added to cart');
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert('Product is added to cart');
    }
  };

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <Nav searchbtn={searchbtn} />
          <Rout
            product={product}
            setProduct={setProduct}
            detail={detail}
            view={view}
            close={close}
            setClose={setClose}
            cart={cart}
            setCart={setCart}
            addtocart={addtocart}
          />
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
