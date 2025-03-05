import React from "react";
import ReactDOM from "react-dom/client";
import Walpaper, {Title} from "./components/card.js";
import {Button} from './components/button.js'

const domRoot = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(domRoot);

// const Walpaper = ({username})=>{
//     //console.log(abc)
//     //console.log(abc.username)
//     //const {username} = abc
//     //console.log(username)
//     return (
//         <div className="Walpaper">
//             <h3>Hello {username} !</h3>
//             <p>kya haal hai !</p>
//         </div>
//     )
// }

const App = ()=>{
    return (
        <div>
            <Button>Submit</Button>
            <Walpaper username={Title}>  </Walpaper>
            <Walpaper username="Vipul">  </Walpaper>
            <Walpaper username="Vipin">   </Walpaper>
            <Walpaper username="gogu">  </Walpaper>
            {Walpaper({username:'Sashi Bhai'})}
        </div>
        // React.createElement("h1",{},"Hello from App !!")
    )
}
console.log("HEllo")
// reactRoot.render(App())
reactRoot.render(<App/>)