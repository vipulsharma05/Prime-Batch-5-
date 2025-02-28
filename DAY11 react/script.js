// const parent = document.getElementById("parent")

// const ul = document.createElement('ul')

// const li1 = document.createElement('li')
// li1.innerText  = 'item 1'
// const li2 = document.createElement('li')
// li2.innerText  = 'item 2'
// const li3 = document.createElement('li')
// li3.innerText  = 'item 3'
// const li4 = document.createElement('li')
// li4.innerText  = 'item 4'

// ul.appendChild(li1)
// ul.appendChild(li2)
// ul.appendChild(li3)
// ul.appendChild(li4)
// parent.appendChild(ul)

// -----------------------------------------------------------------------------------------------

// console.log(React)
// console.log(ReactDOM)

// const domRoot = document.getElementById("parent") ----  element form javascriptdom
// const reactRoot = ReactDOM.createRoot(domRoot) ----  element of reactdom  connect to javascript dom

// const li1 = React.createElement(
//     "li",
//     {
//         style:{
//             color:"blue"
//         }
//     },"Item 1")     // --> type , options, children
    
    
//     const li2 = React.createElement("li",{},"Item 1")     // --> type , options, children
//     const li3 = React.createElement("li",{},"Item 1")     // --> type , options, children
    
//     const ul = React.createElement("ul",{},[li1,li2,li3])
//     reactRoot.render(ul)
    
    
    // const domRoot = document.getElementById("parent")
    // const reactRoot = ReactDOM.createRoot(domRoot)
    // const title = React.createElement("h1",{},"Hello my name is Vipul")     // --> type , options, children
    // // reactRoot.render(title)
    // console.log("title : ",title)
    // console.log("type of title : ",typeof title)
    
    
    // const title2 = {
        //     $$typeof: Symbol.for("react.element"),
        //     "type": "h1",
        //     "key": null,
        //     "ref": null,
        //     "props": {
            
    //         // style
    //         style: {color:'brown'},
    //         "children": "Hello my name is Vipul!!"
    //     },
    //     "_owner": null,
    //     "_store": {}
    // }
    // reactRoot.render(title2)
    
    
    
    // -------------------------------------------------------------
    
    const domRoot = document.getElementById("parent")
    const reactRoot = ReactDOM.createRoot(domRoot)
    // const title2 = <h1>hello</h1>         // react element
    // transfile or compliler --- babel
    //  go for babel cdn on browser

    const Title3 = ()=>{
        return <h1>HEllo ky haal h</h1>
    } // react component


    // reactRoot.render(title2)
    // reactRoot.render(title3())
    reactRoot.render(<Title3 />)