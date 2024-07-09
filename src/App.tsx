import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Counter from "./components/Counter"
import Header from "./components/Header"
import UseMemo from "./components/UseMemo"


function App() {

  return (
<div>
  <Header/>
<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/counter" element={<Counter/>}/>
  <Route path="/usememo" element={<UseMemo/>}/>
  </Routes>  
</div>
  )
}

export default App
