import React, { useState } from "react";
import firstPicture from "../../assets/image-product-1.jpg";
import secondPicture from "../../assets/image-product-2.jpg";
import thirdPicture from "../../assets/image-product-3.jpg";
import fourthPicture from "../../assets/image-product-4.jpg";
import previousIcon from "../../assets/previousIcon.svg";
import nextIcon from "../../assets/nextIcon.svg";
import closeIcon from "../../assets/icon-close.svg";

function DesktopSlider({ desktopSlider, setDesktopSlider }) {
  const sneakers = [firstPicture, secondPicture, thirdPicture, fourthPicture];
  const [desktopPicture, setDesktopPicture] = useState(0);

  return (
    <div
      id="desktopSlider"
      className="hidden lg:block lg:fixed lg:left-0 lg:top-0 lg:w-full lg:h-full lg:bg-[#000000c7]"
    >
      <div className="flex flex-col items-center relative mt-[89px] ">
        <div
          style={{ backgroundImage: `url(${sneakers[desktopPicture]})` }}
          className="w-[550px] h-[550px] rounded-[15px] bg-cover flex justify-between mb-[40px] relative hover:cursor-pointer"
        >
          <img
            src={previousIcon}
            alt="prevoius"
            className="w-[56px] "
            onClick={() => {
              setDesktopPicture(desktopPicture - 1);
              if (desktopPicture == 0) {
                setDesktopPicture(3);
              }
            }}
          />
          <img
            src={nextIcon}
            alt="next"
            className="w-[56px] "
            onClick={() => {
              setDesktopPicture(desktopPicture + 1);
              if (desktopPicture == 3) {
                setDesktopPicture(0);
              }
            }}
          />
          <img
            src={closeIcon}
            alt="close"
            className="w-[20px] mb-[24px] hover:cursor-pointer absolute right-0 top-[-30px]"
            onClick={() => setDesktopSlider(false)}
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
        <div className="flex gap-[31px]">
          {sneakers.map((item) => {
            return (
              <img
                key={sneakers.indexOf(item)}
                src={item}
                alt="sneaker"
                className="lg:w-[88px] lg:rounded-[10px] lg:cursor-pointer lg:hover:opacity-50"
                onClick={() => setDesktopPicture(sneakers.indexOf(item))}
                style={{
                  border:
                    desktopPicture === sneakers.indexOf(item)
                      ? "2px solid #FF7E1B"
                      : null,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DesktopSlider;
