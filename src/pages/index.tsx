import * as React from "react"
import Header from "../components/header"
import flashybolt from "../images/flashybolt.ico"

const IndexPage = () => {
  return (
    <main className="bg-black h-screen flex justify-center">
      <div className="md:w-[1000px] h-full w-screen">
       <Header/>
       <div className="px-10 sm:px-16 mt-8 sm:mt-12 mx-8">
         <h1 className="text-white text-3xl sm:text-5xl font-semibold mb-6">Hey👋I'm Flashybolt</h1>
         <div className="text-white">
          <p className="text-base sm:text-lg mb-4 w-full sm:w-4/5">I'm a 12 year old middle schooler who codes. I've experimented with lots of programming languages and technologies but I mainly write full-stack web applications.</p>
          <p className="text-base sm:text-lg mb-4 w-full sm:w-4/5">These days, I mainly write web apps using Gatsby.js and Tailwindcss, just like this one. However, I also having experience writing websites using Flask.</p>
          <p className="text-base sm:text-lg mb-4 w-full sm:w-4/5">I also make discord bots, as well as quality of life developer scripts, all using python.</p>
        </div>
       </div>
      </div>
    </main>
    
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>flashybolt</title>
    <link rel="icon" type="image/x-icon" href={flashybolt} />  </>
)
