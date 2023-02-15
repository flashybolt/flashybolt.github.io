import { A } from "solid-start";
import { createSignal } from "solid-js";

const [darkmode, setDarkmode] = createSignal('dark');
export const toggle = () => {
  if (darkmode() === "dark") {
    setDarkmode('')
    document.querySelector('html')!.classList.remove('dark')
    document.querySelector('.fa-sun')!.classList.add('fa-moon')
    document.querySelector('.fa-sun')!.classList.remove('fa-sun')
  } else {
    setDarkmode('dark')
    document.querySelector('html')!.classList.add('dark')
    document.querySelector('.fa-moon')!.classList.add('fa-sun')
    document.querySelector('.fa-moon')!.classList.remove('fa-moon')
  }
};
export default function Navbar() {
  return (
    <nav class="w-full mx-auto my-20 max-w-4xl px-8 flex justify-start items-center">
      <A href="/" class="outline-none mr-10 transition duration-300 ease-in-out dark:hover:text-teal-200 hover:text-teal-800">
        <i class="fa-solid fa-house w-4 h-4"></i>
      </A>
      <A href="/projects" class="outline-none mr-10 transition duration-300 ease-in-out dark:hover:text-teal-200 hover:text-teal-800">
        projects
      </A>
      <A href="/stack" class="outline-none mr-10 transition duration-300 ease-in-out dark:hover:text-teal-200 hover:text-teal-800">
        stack
      </A>
      <button onClick={() => toggle()} class="transition duration-300 ease-in-out ml-auto w-10 h-10 rounded-lg dark:bg-slate-800 dark:hover:bg-slate-700 bg-slate-200 hover:bg-slate-300">
        <i class="fa-solid fa-sun w-4 h-4 dark:text-slate-400 p-3 dark:hover:text-slate-200 text-slate-600 hover:text-slate-800 rounded-lg"></i>
      </button>
    </nav>
  );
}
