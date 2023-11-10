import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Information from "./Components/Information/Information";
import MobileMenu from "./Components/MobileMenu/MobileMenu";
import Slider from "./Components/Slider/Slider";

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [addToCart, setAddToCart] = useState(0);
  return (
    <>
      <div className={mobileMenu ? "opacity-75" : null}>
        <Header
          setMobileMenu={setMobileMenu}
          addToCart={addToCart}
          setAddToCart={setAddToCart}
          setQuantity={setQuantity}
        />
        <div className="lg:flex lg:justify-center lg:gap-[125px] ">
          <section className="z-10">
            <Slider />
          </section>

          <section className="lg:w-[445px]">
            <Information
              quantity={quantity}
              setQuantity={setQuantity}
              addToCart={addToCart}
              setAddToCart={setAddToCart}
            />
          </section>
        </div>
      </div>
      {mobileMenu && <MobileMenu setMobileMenu={setMobileMenu} />}
    </>
  );
}

export default App;
