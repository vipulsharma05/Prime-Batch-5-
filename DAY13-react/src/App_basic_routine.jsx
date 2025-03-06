import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import NotFound from "./pages/NotFound";
import {BrowserRouter,Routes,Route} from "react-router"

const App = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/search" element={<SearchPage />} />
    <Route path="*" element={<NotFound/>} />  

  
  </Routes>
</BrowserRouter>
  )
}
export default App;
