import React from "react";
import x from "../../assets/icon-close.svg";

function MobileMenu({ setMobileMenu }) {
  return (
    <div className="w-3/5 bg-[#FFF] absolute top-0 p-[25px] flex flex-col items-baseline gap-[50px] h-full ">
      <img src={x} alt="x" onClick={() => setMobileMenu(false)} />
      <div className="text-[#1D2026] font-bold text-base flex flex-col gap-[20px]">
        <span>Collections</span>
        <span>Men</span>
        <span>Women</span>
        <span>About</span>
        <span>Contact</span>
      </div>
    </div>
  );
}

export default MobileMenu;
