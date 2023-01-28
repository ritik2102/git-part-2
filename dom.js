console.dir(document);
// Will give everything present in the document object(even the HTML tags present)

// domain will give our local host
console.log(document.domain);

// To get the URL
console.log(document.URL);

// Gives the title of the document
console.log(document.title);

// Setting the title
document.title=123;

// Will give the document type(i.e. HTML 5)
console.log(document.doctype);

// Will give the head
console.log(document.head);

// Will giv te body
console.log(document.body);

// Array of everything that is there in the DOM(all the HTML tags)
console.log(document.all);

// Will return the 10th index element from all the HTML element present inside all
console.log(document.all[10]);

// To set the heading to Hello
document.all[10].textContent="Hello";

// Will log all the forms
console.log(document.forms);

// To log all the links in the document
console.log(document.links);

// Logs all the images
console.log(document.images);

// Get an element by ID
console.log(document.getElementById("header-title"));

var headerTitle=document.getElementById("header-title");
console.log(headerTitle);
// Both the below expressions will do the same things except for some small diff

// textContent will disregard the style,i.e. even if the display property is set to none the textContent will display the content
headerTitle.textContent="Hello";
headerTitle.innerText="Goodbye";

// Adding HTML to any element
headerTitle.innerHTML='<h3>Hello</h3>';

// Adding CSS 
headerTitle.style.borderBottom='solid 3px #000';

// GETELEMENTSBYCLASSNAME
var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);

items[1].textContent="Hello";
items[1].style.fontWeight="bold";
items[1].style.backgroundColor="yellow";

// Won't work as we will be working with an array here
// Gives an error
// items.style.backgroundColor="#f4f4f4";
// As a solution we will have to iterate using a for loop

// for(let i=0;i<items.length; i++ ) {
//     items[i].style.backgroundColor="yellow";
// }

items[2].style.backgroundColor="green";

for(let i=0;i<items.length; i++ ) {
    items[i].style.fontWeight="bold";
}

const newItem=document.getElementsByClassName('new');
console.log(newItem);
newItem[0].style.backgroundColor="blue";
newItem[0].style.fontWeight="normal";

