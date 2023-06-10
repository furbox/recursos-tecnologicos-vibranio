import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Navbar } from "~/components/shared/navbar/navbar";
import { Hero } from "~/components/shared/hero/hero";
import { Features } from "~/components/shared/features/features";
import { Footer } from "~/components/shared/footer/footer";
import { Ws } from "~/components/shared/floatbutton/whatsapp";
import { Slider } from "~/components/shared/slider/slider";

export default component$(() => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Slider />
      <Footer />
      <Ws />
    </>
  );
});

export const head: DocumentHead = {
  title: "Bienvenido a Recursos Tecnologicos en Vibranio.com.mx",
  meta: [
    {
      name: "description",
      content:
        "Asistiendo a tus requerimientos",
    },
  ],
};
