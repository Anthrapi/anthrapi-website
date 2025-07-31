// components/VideoBackground.tsx
const VideoBackground = () => (
  <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
    <video
      className="h-full w-full object-cover opacity-40"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    >
      <source src="/background-video.webm" type="video/webm" />
      <source src="/background-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* <div className="absolute inset-0 h-full w-full overflow-hidden bg-black/10 backdrop-blur-xl" /> */}

    {/* Premium texture image overlay */}
    <div
      className="pointer-events-none absolute inset-0 z-100 h-full w-full opacity-100 mix-blend-luminosity"
      style={{
        backgroundImage: "url('/texture.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
      }}
      aria-hidden="true"
    />
  </div>
);

export default VideoBackground;
