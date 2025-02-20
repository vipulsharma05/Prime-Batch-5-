console.log(document);
console.dir(document);  // document object represent : document object model(dOM)
console.log(window);   // window object represent : Browser object model(BOM)

//  document is given by window.so, window --> document...


//  write generic text in html
document.write('Hello')    // write content in html body

// finding / searching the element..

// 1. document.getElementById('id_name') -->  return null/element
// 2. document.getElementsByClassName()  -->  iterable [] / [elements]
// 3. document.getElementsByTagName()  -->    iterable [] / [element,element,....]
// 4. document.querySelector()  -->
// 5. document.querySelectorAll() -->

const ele = document.getElementById("text-1");
const ela = document.getElementById('text-1');
console.log(ele)
console.log(ela)
console.dir(ela)

ele.style.color='blue';

const ele_c = document.getElementsByClassName("vipin")
console.log(ele_c)

// ele_c.style.color='hotpink';

const ele_t = document.getElementsByTagName("p")
console.log(ele_t)