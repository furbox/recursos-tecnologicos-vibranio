import { component$ } from "@builder.io/qwik";

export const Slider = component$(() => {
  return (
    <section>
      <h1 class="text-center text-6xl mt-10 mb-10 text-vibranio-white">Productos</h1>
      <div class="flex">
        <div class="w-full" id="slider-container">
          <ul id="slider" class="flex flex-col sm:flex-row w-full">
            <li class="p-5">
              <div class="border bg-vibranio-white rounded-lg p-5 h-full">
                <img
                  class="h-50 w-full object-cover rounded-md"
                  src="imac-001.jpg"
                  alt="imac-001 venta"
                />
                <h2 class="mt-2 text-2xl font-bold text-vibranio-blue">
                  Venta Imac 2010
                </h2>
                <p class="mt-2 mb-4 text-vibranio-gray">
                Apple iMac 21" 2010 MC509LL/A 4GB Core i3 3.2GHz 1TB HDD
                </p>
                <a
                  target="_blank"
                  href="https://wa.me/529381241834/"
                  class=" pt-20 btn btn-purple"
                >
                  Whatsapp
                </a>
              </div>
            </li>
            <li class="p-5">
              <div class="border bg-vibranio-white rounded-lg p-5 h-full">
                <img
                  class="h-50 w-full object-cover rounded-md"
                  src="imac-002.jpg"
                  alt="imac-002 venta"
                />
                <h2 class="mt-2 text-2xl font-bold text-vibranio-blue">
                  Venta Imac 2010
                </h2>
                <p class="mt-2 mb-4 text-vibranio-gray">
                Apple iMac 21" 2010 MC509LL/A 4GB Core i3 3.2GHz 1TB HDD
                </p>
                <a
                  target="_blank"
                  href="https://wa.me/529381241834/"
                  class=" pt-20 btn btn-purple"
                >
                  Whatsapp
                </a>
              </div>
            </li>
            <li class="p-5">
              <div class="border bg-vibranio-white rounded-lg p-5 h-full">
                <img
                  class="h-50 w-full object-cover rounded-md"
                  src="imac-003.jpg"
                  alt="imac-003 venta"
                />
                <h2 class="mt-2 text-2xl font-bold text-vibranio-blue">
                  Venta Imac 2010
                </h2>
                <p class="mt-2 mb-4 text-vibranio-gray">
                Apple iMac 21" 2010 MC509LL/A 4GB Core i3 3.2GHz 1TB HDD
                </p>
                <a
                  target="_blank"
                  href="https://wa.me/529381241834/"
                  class=" pt-20 btn btn-purple"
                >
                  Whatsapp
                </a>
              </div>
            </li>
            <li class="p-5">
              <div class="border bg-vibranio-white rounded-lg p-5 h-full">
                <img
                  class="h-50 w-full object-cover rounded-md"
                  src="imac-004.jpg"
                  alt="imac-004 venta"
                />
                <h2 class="mt-2 text-2xl font-bold text-vibranio-blue">
                  Venta Imac 2010
                </h2>
                <p class="mt-2 mb-4 text-vibranio-gray">
                Apple iMac 21" 2010 MC509LL/A 4GB Core i3 3.2GHz 1TB HDD
                </p>
                <a
                  target="_blank"
                  href="https://wa.me/529381241834/"
                  class=" pt-20 btn btn-purple"
                >
                  Whatsapp
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
});
