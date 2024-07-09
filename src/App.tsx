import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Counter from "./components/Counter"
import Header from "./components/Header"
import UseMemo from "./components/UseMemo"
import ParentComponent from "./components/ParentComponent"


function App() {

  return (
<div>
  <Header/>
<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/counter" element={<Counter/>}/>
  <Route path="/usememo" element={<UseMemo/>}/>
  <Route path="/forwardRef" element={<ParentComponent/>}/>
  </Routes>  
</div>
  )
}

export default App
