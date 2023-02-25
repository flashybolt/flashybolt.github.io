use yew::{function_component, html, Html};

#[function_component]
pub fn Navbar() -> Html {
    html! {
        <nav class="w-full mx-auto my-20 max-w-4xl px-8 flex justify-start items-center">
            <a href="/" class="outline-none mr-10 transition duration-300 ease-in-out dark:hover:text-teal-200 hover:text-teal-800">
                <i class="fa-solid fa-house w-4 h-4"></i>
            </a>
            <a href="/projects" class="outline-none mr-10 transition duration-300 ease-in-out dark:hover:text-teal-200 hover:text-teal-800">{"projects"}</a>
            <a href="/stack" class="outline-none mr-10 transition duration-300 ease-in-out dark:hover:text-teal-200 hover:text-teal-800">{"stack"}</a>
            <button class="transition duration-300 ease-in-out ml-auto w-10 h-10 rounded-lg dark:bg-slate-800 dark:hover:bg-slate-700 bg-slate-200 hover:bg-slate-300 flex items-center justify-center">
                <i class="fa-solid fa-sun w-4 h-4 dark:text-slate-400 p-3 dark:hover:text-slate-200 text-slate-600 hover:text-slate-800 rounded-lg flex items-center justify-center"></i>
            </button>
        </nav>
    }
}