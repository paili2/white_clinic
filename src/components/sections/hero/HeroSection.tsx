const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="absolute top-[80px] inset-0 w-full h-full object-cover z-0"
        style={{ filter: "brightness(0.8)" }}
      >
        <source src="/videos/sampleVideo.mp4" type="video/mp4" />
        <source src="/videos/sampleVideo.mp4" type="video/webm" />
      </video>
    </div>
  );
};

export default HeroSection;
