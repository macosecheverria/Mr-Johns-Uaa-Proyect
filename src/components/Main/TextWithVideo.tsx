export const TextWithVideo = () => {
  return (
      <div className="h-96 w-full relative">
        <img src="/images/fondo/wallpaper-pizza.jpg" alt="Pizza" className="w-full h-full object-cover absolute mix-blend-overlay" />

        <div className="p-24">
          <h1 className="mb-5 text-4xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight ">
            Mr Johns
          </h1>
          <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
            Speedy Pizza and Chicken
          </p>
        </div>
      </div>
  );
};
