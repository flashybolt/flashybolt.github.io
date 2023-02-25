use yew::prelude::*;

pub struct PageNotFound;

impl Component for PageNotFound {
    type Message = ();
    type Properties = ();

    fn create(_ctx: &Context<Self>) -> Self {
        Self
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        html! {
            <main class="mx-auto text-center">
                {"404 Not Found"}
            </main>
        }
    }
}