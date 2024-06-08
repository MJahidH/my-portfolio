const ImageCarousel = ({setCarouselOpen,carouselOpen}) => {



  const handleCarouselClick = () => {
    setCarouselOpen(!carouselOpen)    
      }

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

        border-4
        border-yellow-500
        bg-black"
    >
      <button className="bg-red-500 absolute top-0 left-0" 
      onClick={()=>{handleCarouselClick()}}>closse window </button>
      <h1>this is the image carousel</h1>
    </div>
  );
};

export default ImageCarousel;
