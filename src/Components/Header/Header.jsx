import React, { useState } from "react";
import burgerMenu from "../../assets/icon-menu.svg";
import logo from "../../assets/logo.svg";
import cart from "../../assets/icon-cart.svg";
import avatarImg from "../../assets/image-avatar.png";
import picture from "../../assets/image-product-1.jpg";
import deleteIcon from "../../assets/icon-delete.svg";

function Header({ addToCart, setAddToCart, setMobileMenu, setQuantity }) {
  const [cartMenu, setCartMenu] = useState(false);
  const [category, setCategory] = useState("");
  return (
    <>
      <div>
        <div className="flex items-center justify-between pt-[20px] px-[24px] pb-[28px] lg:px-[165px] lg:pt-[28px]">
          <div className="flex items-center gap-[16px]">
            <img
              src={burgerMenu}
              alt="Menu"
              onClick={() => setMobileMenu(true)}
              className="lg:hidden "
            />
            <img
              src={logo}
              alt="Sneakers"
              className="lg:mr-[57px] lg:hover:cursor-pointer"
              onClick={() => {
                setCartMenu(false);
                setQuantity(0);
              }}
            />
            <div className="hidden lg:flex lg:gap-[32px] lg:text-[#69707D]">
              <div className="relative flex flex-col items-center">
                <span
                  className="lg:hover:cursor-pointer"
                  onClick={() => setCategory("collections")}
                >
                  Collections
                </span>
                <div
                  className="lg:w-[58px] lg:h-[4px] lg:bg-[#FF7E1B] absolute top-[61px]"
                  style={{
                    display: category == "collections" ? "block" : "none",
                  }}
                ></div>
              </div>
              <div className="relative flex flex-col items-center">
                <span
                  className="lg:hover:cursor-pointer"
                  onClick={() => setCategory("men")}
                >
                  Men
                </span>
                <div
                  className="lg:w-[58px] lg:h-[4px] lg:bg-[#FF7E1B] absolute top-[61px]"
                  style={{
                    display: category == "men" ? "block" : "none",
                  }}
                ></div>
              </div>
              <div className="relative flex flex-col items-center">
                <span
                  className="lg:hover:cursor-pointer"
                  onClick={() => setCategory("women")}
                >
                  Women
                </span>
                <div
                  className="lg:w-[58px] lg:h-[4px] lg:bg-[#FF7E1B] absolute top-[61px]"
                  style={{
                    display: category == "women" ? "block" : "none",
                  }}
                ></div>
              </div>
              <div className="relative flex flex-col items-center">
                <span
                  className="lg:hover:cursor-pointer"
                  onClick={() => setCategory("contact")}
                >
                  Contact
                </span>
                <div
                  className="lg:w-[58px] lg:h-[4px] lg:bg-[#FF7E1B] absolute top-[61px]"
                  style={{
                    display: category == "contact" ? "block" : "none",
                  }}
                ></div>
              </div>
              <div className="relative flex flex-col items-center">
                <span
                  className="lg:hover:cursor-pointer"
                  onClick={() => setCategory("about")}
                >
                  About
                </span>
                <div
                  className="lg:w-[58px] lg:h-[4px] lg:bg-[#FF7E1B] absolute top-[61px]"
                  style={{
                    display: category == "about" ? "block" : "none",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[16px] lg:gap-[46px]">
            <div className="relative">
              <img
                src={cart}
                alt="Cart"
                onClick={() => setCartMenu(!cartMenu)}
                className="lg:hover:cursor-pointer"
              />
              {addToCart ? (
                <div className="bg-[#FF7E1B] text-[#FFF] text-[12px] rounded-[7px] font-bold w-[19px] flex justify-center items-center absolute top-[-10px] right-[-7px]">
                  {addToCart}
                </div>
              ) : null}
            </div>
            <img
              src={avatarImg}
              alt="Avatar"
              className="w-[24px] h-[24px] lg:w-[50px] lg:h-[50px] lg:hover:cursor-pointer"
            />
          </div>
        </div>
        <div>
          <hr className="lg:mx-[165px] lg:mb-[90px]" />
        </div>
      </div>

      {cartMenu && (
        <div className="w-[360px] h-[256px] bg-[#FFF] rounded-[10px] absolute top-[77px] lg:top-[94px] right-[8px] lg:right-[89px] flex flex-col shadow-lg">
          <span className="text-[#1D2026] font-bold pt-[24px] px-[24px] pb-[27px]">
            Cart
          </span>
          <hr />
          {addToCart ? (
            <div className="flex flex-col gap-[24px] px-[24px]">
              <div className="flex items-center justify-around mt-[24px]">
                <img
                  src={picture}
                  alt="sneakers"
                  className="w-[50px] h-[50px] rounded-[4px] "
                />

                <div className="flex flex-col">
                  <span className="text-base text-[#69707D]">
                    Fall Limited Sneakers
                  </span>

                  <div className="flex gap-[10px]">
                    <span>$125.00 x {addToCart}</span>
                    <span className="text-[#1D2026] font-bold">
                      ${125 * addToCart}.00
                    </span>
                  </div>
                </div>
                <img
                  src={deleteIcon}
                  alt="delete"
                  className="lg:cursor-pointer"
                  onClick={() => setAddToCart(0)}
                />
              </div>
              <div>
                <button className="bg-[#FF7E1B] text-[#FFF] font-bold rounded-[10px]  w-[312px] pt-[22px] pb-[18px]">
                  Checkout
                </button>
              </div>
            </div>
          ) : (
            <span className="text-base font-bold text-[#69707D] mt-[77px] self-center">
              Your cart is empty.
            </span>
          )}
        </div>
      )}
    </>
  );
}

export default Header;
