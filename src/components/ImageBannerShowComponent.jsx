function ImageBannerComponent({ bannerImages, currentIndex }) {

  return (
    <div className="relative overflow-hidden">
      {bannerImages?.map((image, index) => {
        return (
          <BannerImage
            key={image.title}
            image={image.url}
            currentIndex={currentIndex}
            index={index}
          />
        );
      })}
    </div>
  );
}

function BannerImage({ image, currentIndex, index }) {
  return (
    <div
      className={
        currentIndex === index ? `imagesetting showup` : `imagesetting showdown`
      }
    >
      <img
        className="w-full h-full object-cover"
        src={image}
        alt={image.title}
      />
    </div>
  );
}

export default ImageBannerComponent;
