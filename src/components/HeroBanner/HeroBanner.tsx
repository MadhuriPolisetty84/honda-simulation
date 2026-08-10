const HeroBanner = () => {
  return (
    <div className="w-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://edge.sitecorecloud.io/hondamotorc2d92_daworldf764-prod3600-398c/media/V2-Images/2FBanner-Videos/bannervideo_lowres.mp4"
      />
    </div>
  );
};

export default HeroBanner;
