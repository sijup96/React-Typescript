import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Counter from "./components/Counter"
import Header from "./components/Header"


function App() {

  return (
<div>
  <Header/>
<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/counter" element={<Counter/>}/>
  </Routes>  
</div>
  )
}

export default App
