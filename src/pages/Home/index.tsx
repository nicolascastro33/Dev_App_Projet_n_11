import { useEffect } from "react"

function Home() {

  useEffect(() =>{
    document.title = 'Kasa - Bienvenue!'
})

  return (
    <>
      <div>
       <h1>Hello World</h1>
      </div>
    </>
  )
}

export default Home
