import React, { useState } from "react";
import firstPicture from "../../assets/image-product-1.jpg";
import secondPicture from "../../assets/image-product-2.jpg";
import thirdPicture from "../../assets/image-product-3.jpg";
import fourthPicture from "../../assets/image-product-4.jpg";
import previousIcon from "../../assets/previousIcon.svg";
import nextIcon from "../../assets/nextIcon.svg";
import DesktopSlider from "../DesktopSlider/DesktopSlider";

function Slider() {
  const arrayofSneakers = [
    firstPicture,
    secondPicture,
    thirdPicture,
    fourthPicture,
  ];
  const [picture, setPicture] = useState(0);
  const [desktopSlider, setDesktopSlider] = useState(false);
  return (
    <>
      <div
        className="h-[300px] lg:w-[445px] lg:h-[445px] lg:rounded-[15px] lg:mb-[32px]  bg-cover flex justify-between px-[16px] lg:hover:cursor-pointer"
        style={{ backgroundImage: `url(${arrayofSneakers[picture]})` }}
        onClick={() => {
          setDesktopSlider(true);
        }}
      >
        <img
          src={previousIcon}
          alt="prevoius"
          className="w-[40px] lg:hidden"
          onClick={() => {
            setPicture(picture - 1);
            if (picture == 0) {
              setPicture(3);
            }
          }}
        />
        <img
          src={nextIcon}
          alt="next"
          className="w-[40px] lg:hidden"
          onClick={() => {
            setPicture(picture + 1);
            if (picture == 3) {
              setPicture(0);
            }
          }}
        />
      </div>
      <div className="hidden lg:flex lg:gap-[31px]">
        {arrayofSneakers.map((item) => {
          return (
            <img
              key={arrayofSneakers.indexOf(item)}
              src={item}
              alt="sneaker"
              className="lg:w-[88px] lg:rounded-[10px] lg:cursor-pointer lg:hover:opacity-50"
              onClick={() => setPicture(arrayofSneakers.indexOf(item))}
              style={{
                border:
                  picture === arrayofSneakers.indexOf(item)
                    ? "2px solid #FF7E1B"
                    : null,
              }}
            />
          );
        })}
      </div>
      {desktopSlider ? (
        <DesktopSlider setDesktopSlider={setDesktopSlider} />
      ) : null}
    </>
  );
}

export default Slider;
