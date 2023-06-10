import { component$ } from "@builder.io/qwik";

export const Features = component$(() => {
  return (
    <section id="features" class="bg-vibranio-white py-20 mt-20 lg:mt-60">
      <div id="heading" class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 class="text-3xl text-center text-vibranio-blue">Ventajas</h1>
        <p class="text-center text-vibranio-gray mt-4">
          Al comprar en Recursos Tecnológicos, los clientes pueden disfrutar de
          varias ventajas y beneficios. Aquí tienes algunas de las ventajas de
          comprar en nuestra empresa:
        </p>
      </div>
      <div id="feature1" class="relative mt-20 lg:mt-24">
        <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full"
              src="kenny-eliason-hF-Vaf9P1vs-unsplash.jpg"
              alt="Calidad en Recursos Tecnologicos"
            />
          </div>
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h1 class="text-3xl text-vibranio-blue">Productos de calidad</h1>
            <p class="text-vibranio-gray my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Nos aseguramos de ofrecer productos tecnológicos de primera y
              segunda mano de alta calidad. Nuestro equipo técnico realiza
              pruebas exhaustivas en todos los dispositivos antes de ponerlos a
              la venta, lo que garantiza que los productos cumplan con los
              estándares de calidad y funcionen de manera óptima.
            </p>
          </div>
        </div>
      </div>
      <div id="feature2" class="relative mt-20 lg:mt-24">
        <div class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
          <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full"
              src="revendo-ZRkl491pWYo-unsplash.jpg"
              alt="Opciones de compra en Recursos Tecnologicos"
            />
          </div>
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h1 class="text-3xl text-vibranio-blue">Opciones de compra</h1>
            <p class="text-vibranio-gray my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Brindamos a nuestros clientes opciones de compra flexibles. Además
              de productos de primera mano, ofrecemos dispositivos
              reacondicionados que brindan una opción más económica para
              aquellos con un presupuesto limitado.
            </p>
          </div>
        </div>
      </div>
      <div id="feature3" class="relative mt-20 lg:mt-24">
        <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full"
              src="austin-distel-21GWwco-JBQ-unsplash.jpg"
              alt="Garantia y servicio al cliente en Recursos Tecnologicos"
            />
          </div>
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h1 class="text-3xl text-vibranio-blue">
              Garantía y servicio al cliente
            </h1>
            <p class="text-vibranio-gray my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Respaldamos nuestros productos con garantías adecuadas para cubrir
              cualquier posible problema técnico. Además, nuestro equipo de
              servicio al cliente capacitado y amable está disponible para
              responder consultas, brindar asesoramiento técnico y brindar
              soporte postventa, asegurando una experiencia de compra
              satisfactoria.
            </p>
          </div>
        </div>
      </div>
      <div id="feature4" class="relative mt-20 lg:mt-24">
        <div class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
          <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full"
              src="sebastian-herrmann-NbtIDoFKGO8-unsplash.jpg"
              alt="Satisfacción del cliente en Recursos Tecnologicos"
            />
          </div>
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h1 class="text-3xl text-vibranio-blue">
              Satisfacción del cliente
            </h1>
            <p class="text-vibranio-gray my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Nos esforzamos por lograr la satisfacción del cliente en cada
              interacción. Buscamos superar las expectativas de nuestros
              clientes al brindarles productos de calidad, precios competitivos
              y un servicio al cliente excepcional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});
