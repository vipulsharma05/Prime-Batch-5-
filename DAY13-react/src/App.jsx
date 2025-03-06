import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import { Link } from "react-router";

const App = () => {
  const { location } = window;
  const { pathname } = location;
  if (pathname === "/") {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
   else if (pathname === "/search") {
    return <SearchPage />;
  } 
  else {
    return (
      <div>
        <h1>Oops ... page not found</h1>
        <a href="/">Home Anchor</a>
        
      </div>
    );
  }
};
export default App;
