import { component$ } from "@builder.io/qwik";

export const Contact = component$(() => {
  return (
  <section id="contact" class="bg-vibranio-blue text-white py-20">
    <div class="container">
        <div class="sm:w-3/4 lg:w-2/4 mx-auto">
            <p class="font-light uppercase text-center mb-8">mejora tu presencia en línea</p>
            <h1 class="text-3xl text-center">Contáctanos</h1>
            <div class="flex flex-col sm:flex-row gap-6 mt-8">
                <input type="text" placeholder="Correo Electrónico" class="focus:outline-none flex-1 px-2 py-3 rounded-md hover:text-vibranio-blue"/>
                <button class="btn btn-white">Suscribirme</button>
            </div>
        </div>
    </div>
  </section>
  );
});