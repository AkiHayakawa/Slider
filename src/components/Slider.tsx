import React, { useEffect, useState } from "react";
const Slider = () => {
  const [numSlide, setSlide] = useState(0);
  const database = [
    {
      src: "/static/media/0.a7d5e35ef0e27d2a72fb.mp4",
      description: "Cappucino Coffee",
    },
    {
      src: "/static/media/1.f2a6a9ecc040e5cd9f73.mp4",
      description: "шоколадные кексы",
    },
    {
      src: "/static/media/2.97939608f6c8af85c3d1.mp4",
      description: "Как приготовить горячий шоколад Орео",
    },
    {
      src: "/static/media/3.8ed3a352a8d73e3bd989.mp4",
      description: "Mocha Nice cream (Coffee + Cocoa Powder + Banana Ice Cream",
    },
    {
      src: "/static/media/4.19cf2ce9a51b0057c77d.mp4",
      description: "мокко,белый шоколад",
    },
    {
      src: "/static/media/5.6722ecc3eb04e175e16b.mp4",
      description: "СУПЕР ПРОСТЫЕ РЕЦЕПТЫ ИЗ 3 ИНГРЕДИЕНТОВ",
    },
    {
      src: "/static/media/6.9862f1556eee3fbbbdd5.mp4",
      description: "Шоколадный пирог с заварным кремом без выпечки",
    },
  ];
  console.log(require("../video/0.mp4"));
  async function change(num: number) {
    let videoElement: any = document.getElementById("video");
    videoElement.src = database[num].src;
    videoElement.addEventListener("ended", myHandler, false);
    function myHandler() {
      change(num + 1);
      setSlide(num + 1);
    }
  }

  useEffect(() => {
    change(numSlide);
  }, []);
  return (
    <div className="SliderPage">
      <div className="SliderContainer">
        {numSlide > 0 ? (
          <div
            className="arrow-left-2"
            onClick={() => {
              setSlide(numSlide - 1);
              change(numSlide - 1);
            }}
          >
            <div className="arrow-left-2-top "></div>
            <div className="arrow-left-2-bottom"></div>
          </div>
        ) : (
          <div className="arrow-left-2 disabledbutton">
            <div className="arrow-left-2-top"></div>
            <div className="arrow-left-2-bottom"></div>
          </div>
        )}

        <div>
          {" "}
          <div className="SliderArrayBlock">
            <video
              // width={800}
              height="90%"
              controls
              autoPlay
              id="video"
              className="SliderArrayBlockVideo"
            >
              <source key={numSlide} src="" type="video/mp4" height="100%" />
            </video>
            <h2>{database[numSlide].description}</h2>
          </div>
          <div className="PaginationBlock">
            {database.map((item, index) => (
              <div
                onClick={() => {
                  setSlide(index);
                  change(index);
                }}
              >
                {index == numSlide ? (
                  <p className="PaginationNumberSelected">{index + 1}</p>
                ) : index + 1 < numSlide && index !== 0 ? (
                  <p className="PaginationNumber">.</p>
                ) : index - 1 > numSlide ? (
                  index + 1 == database.length ? (
                    <p className="PaginationNumber">{database.length}</p>
                  ) : (
                    <p className="PaginationNumber">.</p>
                  )
                ) : (
                  <p className="PaginationNumber">{index + 1}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {numSlide == database.length - 1 ? (
          <div className="arrow-2 disabledbutton">
            <div className="arrow-2-top "></div>
            <div className="arrow-2-bottom"></div>
          </div>
        ) : (
          <div
            className="arrow-2"
            onClick={() => {
              setSlide(numSlide + 1);
              change(numSlide + 1);
            }}
          >
            <div className="arrow-2-top"></div>
            <div className="arrow-2-bottom"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;
