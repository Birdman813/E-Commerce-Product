import React, { useState } from "react";
import minusIcon from "../../assets/icon-minus.svg";
import plusIcon from "../../assets/icon-plus.svg";
import cartIcon from "../../assets/icon-cart.svg";

function Information({ quantity, setQuantity, addToCart, setAddToCart }) {
  return (
    <div className="mt-[24px] px-[24px] pb-[88px]">
      <p className="text-[#FF7E1B] uppercase text-sm font-bold tracking-[1.84px] mb-[19px] lg:mb-[27px] ">
        Sneaker Company
      </p>
      <h1 className="text-3xl text-[#1D2026] font-bold leading-[32px] mb-[15px] lg:mb-[32px]">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-[#69707D] text-base leading-[25px] mb-[28px]">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex justify-between items-center mb-[26px]">
        <div className="flex items-center gap-[16px]">
          <span className="text-3xl text-[#1D2026] font-bold">$125.00</span>
          <span className="text-base text-[#FF7E1B] font-bold bg-[#FFEEE2] w-[51px] flex justify-center rounded-[6px] ">
            50%
          </span>
        </div>
        <span className="text-base text-[#B6BCC8] font-bold line-through">
          $250.00
        </span>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-[16px]">
        <div className="flex justify-between items-center bg-[#F6F8FD] px-[24px] py-[22px] rounded-[10px] w-full lg:w-1/2">
          <img
            src={minusIcon}
            alt="minus"
            className="lg:cursor-pointer"
            onClick={() => {
              setQuantity(quantity - 1);
              if (quantity < 1) {
                setQuantity(0);
              }
            }}
          />
          <span className="text-base text-[#1D2026] font-bold">{quantity}</span>
          <img
            src={plusIcon}
            alt="plus"
            className="lg:cursor-pointer"
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          />
        </div>
        <div className="w-full">
          <button
            className="bg-[#FF7E1B] text-[#FFF] font-bold w-full pt-[22px] pb-[18px] rounded-[10px] shadow-2xl flex items-center justify-center gap-[15px] lg:hover:bg-[#FFAB6A]"
            onClick={() => setAddToCart(addToCart + quantity)}
          >
            <img
              src={cartIcon}
              alt="cart"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Information;
