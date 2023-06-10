import { component$ } from "@builder.io/qwik";

export const Hero = component$(() => {
  return (
    <section class="relative">
      <div class="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        <div class="flex flex-1 flex-col items-center lg:items-start">
          <h2 class="text-vibranio-white text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
            Recursos <br />
            <span class="font-bold">Tecnológicos</span>
          </h2>
          <p class="text-vibranio-gray text-lg text-center lg:text-left mb-6">
            En Recursos Tecnológicos, ofrecemos una amplia gama de productos
            tecnológicos de primera y segunda mano
          </p>
        </div>
        <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <img
            class="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full"
            src="alex-knight-2EJCSULRwC8-unsplash.jpg"
            alt="Recursos Tecnológicos"
          />
        </div>
      </div>
    </section>
  );
});
