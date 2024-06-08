import { useState } from "react";

const ImageCarousel = ({ setCarouselOpen, carouselOpen, images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleCarouselClick = () => {
    setCarouselOpen(!carouselOpen);
  };

  const goToNextImage = () => {
    let  newValue = 0;
    console.log(images.length -1)
    if (currentImage < images.length - 1) {
      newValue++;
    }

    setCurrentImage(newValue);
  };

  const goToPreviousImage = () => {
    let  newValue = 0;
    console.log(images.length -1)
    if (currentImage > images.length - 1) {
      newValue--;
    }

    setCurrentImage(newValue);
  };

  return (
    <div
      className="
        absolute
        mx-60
        z-100
        w-3/4
        h-4/5
        my-40
        mt-60
        bg-black"
    >
      <button
        className="text-5xl text-white bg-red-500 w-16 absolute top-0 left-0"
        onClick={() => {
          handleCarouselClick();
        }}
      >
        X{" "}
      </button>
      <button 
      onClick={() => {goToPreviousImage()}}
      className="text-5xl text-white bg-blue-300 h-24 w-24 absolute top-1/2 left-10 rounded-full ">
        {" "}
        &larr;{" "}
      </button>
      <img src={`/assets/${images[currentImage]}`} alt="Test Screenshot" />
      <button
        className="text-5xl text-white  bg-blue-300 h-24 w-24 absolute top-1/2 right-10 rounded-full " onClick={() => {
          goToNextImage();
        }}
      >
        &rarr;{" "}
      </button>
    </div>
  );
};

export default ImageCarousel;
