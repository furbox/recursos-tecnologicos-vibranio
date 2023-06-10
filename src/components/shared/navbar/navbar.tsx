import { component$ } from "@builder.io/qwik";

export const Navbar = component$(() => {
  return (
    <header>
      <nav class="container flex items-start py-4 mt-4 sm:mt-12">
        <div class="py-1">
          <img height={250} width={250} src="logo.jpg" alt="logo" />
        </div>
        <ul class="hidden sm:flex flex-1 justify-end items-center gap-12 text-vibranio-white uppercase text-xs">
          <a target="_blank"
            href="https://wa.me/529381241834/"
            class="bg-vibranio-purple text-white rounded-md px-7 py-3"
          >
            Whatsapp
          </a>
        </ul>
        <div class="flex sm:hidden flex-1 justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000000"
              d="M3 8h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Zm18 8H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm0-5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z"
            ></path>
          </svg>
        </div>
      </nav>
    </header>
  );
});
