// components/LiveBackground.tsx
export default function LiveBackground() {
  return (
    <div className="absolute inset-0 z-10">
      <img
        src="/live-background.gif"
        className="h-full w-full object-cover"
        alt="Live background"
      />
    </div>
  );
}
