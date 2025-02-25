// ---------------- Syncronous Example

// console.log("start");

// const handleInnerCall = ()=>{
//     console.log("step Y")
// }
// const handleCall = ()=>{
//     console.log("step M")
//     handleInnerCall()
//     console.log("step N");
// }
// // handleCall();

// document.querySelector('body').addEventListener('click',handleCall);
// console.log("end")


// ----------------Asyncronous call back 
// Event loop ---focuses on two things
//           1. is something pending
//           2.  is call back empty


//  Settimeout
// console.log("start");

// const handleInnerCall = ()=>{
//     console.log("step Y")
// }
// const handleCall = ()=>{
//     console.log("step M")
//     handleInnerCall()
//     console.log("step N");
// }
// handleCall();

// setTimeout(handleCall,0); // time in millisecond
// setTimeout(handleCall,10000); // time in millisecond
// console.log("end")



// imp example
// console.log("A")
// const handleCall =()=>{
//     console.log("H")
// }
// setTimeout(()=>{
//     console.log("N")
//     setTimeout(()=>{
//         console.log('P')
//     },0)
//     handleCall();
//     console.log("B")
// },5000);
// console.log("C")

// ---------------------------------------------------------------------------------------------------------------------------------
/* 

Hyderabad : Take user credentials and do the payment via wallet
--> handleUser()


Noida : make the payment from the wallet by doing required checks
--> handlePayment(id)


banglore : to handle these two teams and implement wallet functionaltiy

--- CASE 1 -----> Requirement
--> const userId = handleUser()
--> if(userId){
    --> const resp = handlePayment(UserID)
    -->console.log(resp);
    }
    else{
        console.log("invalid detials")
}


--- CASE 2 -----> CallbAck
--> const resp = handleUser(handlePayment)
    what if the team calls handlePayment 2 times?
    or even with the wrong credentials ?
    or never calls it ?
    console.log("Resp")
    
    
-------- Case 3 Using prmoises
  ---> const resp = handleUser()  -> return a promise
  ---> THEN{
             const resp = handlePayment()
             }

        CATCH{
               console.log(''invalid detials)
               }



*/
 

// ------------------------------------------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>
/*Promises : fetch()


*/
const getData = (e)=>{
    const profile =e.target.value;
    const pr = fetch(`https://api.github.com/users/${profile}`)
    console.log(pr)
    pr.then((a)=>{
        console.log("a",a)
        const pr2 = a.json();
        pr2.then((data)=>{
            // console.log("data",data)
            
            showUI(data)
        })
    }).catch((b)=>{
        console.log("b",b)
    })
    
}
// getData();
    function showUI(data){
        // responsible for creating 
        console.log("data: ",data)
    const {avatar_url,login,html_url} = data;
    const root = document.getElementById('cards');
    const newCard = document.createElement("div")
    newCard.id = 'card'
    newCard.innerHTML = `
    <h4>${login.toUpperCase()}</h4>
    <image src='${avatar_url}' alt ='avatar'>
    <a href = ${html_url}>View profile</a>    
    `
    root.appendChild(newCard)
    storeData(data)
}
function storeData(data){
    const oldData = localStorage.getItem("searches")
    const arr = JSON.parse(oldData || "[]")
    arr.push(data)
    localStorage.setItem("searches",JSON.stringify(arr))
}
function ShowHistory(){
    const oldData = localStorage.getItem("searches")
    const arr = JSON.parse(oldData || "[]")
    arr.forEach(data => {
        showUI(data);
    });
    
}
ShowHistory();