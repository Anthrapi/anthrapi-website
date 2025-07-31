export default function TrustedBy() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-4 sm:py-8">
      {/* Trusted By Text */}
      <p className="text-sm font-medium sm:text-lg">Trusted By</p>

      {/* Logo Placeholders */}
      <div className="flex flex-wrap items-center justify-center space-x-4 sm:space-x-6 lg:space-x-8">
        {[1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className="mb-4 flex h-16 w-16 items-center justify-center rounded border border-white bg-black sm:mb-0 sm:h-20 sm:w-20 md:h-24 md:w-24"
          >
            <span className="text-sm font-medium text-white sm:text-base">
              Logo
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
