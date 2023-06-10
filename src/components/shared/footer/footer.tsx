import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer id="footer" class="bg-slate-800 text-white py-8">
      <div class="container flex flex-col md:flex-row items-center">
        <div class="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
          <img
            width={250}
            height={250}
            src="logo.jpg"
            alt="logo Recursos Tecnologicos"
          />
          <ul class="flex flex-wrap text-white uppercase gap-12 text-xs">
            <a
              target="_blank"
              href="https://wa.me/529381241834/"
              class="bg-vibranio-purple text-white rounded-md px-7 py-3"
            >
              Whatsapp
            </a>
          </ul>
        </div>
        <div class="flex flex-wrap gap-10 mt-12 md:mt-0">
          <li class="list-none text-white text-2xl">
            <a class="cursor-pointer" target="_blank" href="https://www.facebook.com/RecursosTecno">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fcfcfc"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                ></path>
              </svg>
            </a>
          </li>
        </div>
      </div>
    </footer>
  );
});
