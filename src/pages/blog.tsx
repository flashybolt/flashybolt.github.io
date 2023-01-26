import * as React from "react"
import Header from "../components/header"
import flashybolt from "../images/flashybolt.ico"

const BlogPage = () => {
  return (
    <main className="bg-black h-screen flex justify-center">
      <div className="md:w-[1000px] h-full w-screen">
       <Header/>
       <div className="px-10 sm:px-16 mt-8 sm:mt-12 mx-8">
         <p className="text-white">blog page</p>
       </div>
      </div>
    </main>
    
  )
}

export default BlogPage

export const Head = () => (
  <>
    <title>Flashybolt | Projects</title>
    <link rel="icon" type="image/x-icon" href={flashybolt} />
  </>
)
