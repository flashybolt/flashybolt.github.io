use yew::prelude::*;
use yew_router::prelude::*;

mod pages;
use pages::home::Home;
use pages::page_not_found::PageNotFound;
use pages::projects::Projects;
use pages::stack::Stack;
use yew::html::Scope;

#[derive(Routable, PartialEq, Eq, Clone, Debug)]
pub enum Route {
    #[at("/")]
    Home,
    #[at("/projects")]
    Projects,
    #[at("/stack")]
    Stack,
    #[not_found]
    #[at("/404")]
    NotFound,
}

pub enum Msg {
    ToggleNavbar,
}

pub struct App {
    navbar_active: bool,
}
impl Component for App {
    type Message = Msg;
    type Properties = ();

    fn create(_ctx: &Context<Self>) -> Self {
        Self {
            navbar_active: false,
        }
    }

    fn update(&mut self, _ctx: &Context<Self>, msg: Self::Message) -> bool {
        match msg {
            Msg::ToggleNavbar => {
                self.navbar_active = !self.navbar_active;
                true
            }
        }
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        html! {
            <BrowserRouter>
                { self.view_nav(ctx.link()) }

                <main>
                    <Switch<Route> render={switch} />
                </main>
            </BrowserRouter>
        }
    }
}
impl App {
    fn view_nav(&self, _link: &Scope<Self>) -> Html {

        html! {
            <nav class="w-full mx-auto my-20 max-w-4xl px-8 flex justify-start items-center">
            <a href="/" class="outline-none mr-10 transition duration-300 ease-in-out dark:hover:text-teal-200 hover:text-teal-800">
              <i class="fa-solid fa-house w-4 h-4"></i>
            </a>
            <a href="/projects" class="outline-none mr-10 transition duration-300 ease-in-out dark:hover:text-teal-200 hover:text-teal-800">
             {" projects"}
            </a>
            <a href="/stack" class="outline-none mr-10 transition duration-300 ease-in-out dark:hover:text-teal-200 hover:text-teal-800">
             { "stack" }
            </a>
            <button class="transition duration-300 ease-in-out ml-auto w-10 h-10 rounded-lg dark:bg-slate-800 dark:hover:bg-slate-700 bg-slate-200 hover:bg-slate-300">
              <i class="fa-solid fa-sun w-4 h-4 dark:text-slate-400 p-3 dark:hover:text-slate-200 text-slate-600 hover:text-slate-800 rounded-lg"></i>
            </button>
          </nav>
        }
    }
}

fn switch(routes: Route) -> Html {
    match routes {
        Route::Home => {
            html! { <Home /> }
        },
        Route::NotFound => {
            html! { <PageNotFound /> }
        },
        Route::Stack => {
            html! { <Stack /> }
        },
        Route::Projects => {
            html! { <Projects /> }
        }
    }
}

fn main() {
    yew::Renderer::<App>::new().render();
}
