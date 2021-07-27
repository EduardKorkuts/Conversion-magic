import './styles/styles.css'
import './styles/styles.scss'
import hljs from 'highlight.js';
import 'highlight.js/styles/agate.css';
import 'normalize.css/normalize.css'

console.log(hljs)

document.addEventListener('DOMContentLoaded', () => {
  hljs.highlightAll();
});

const conversationExamples = [{
  name: "Implicit Conversion to String",
  text: ` 
let result;

result = '3' + 2; 
console.log(result) // "32"

result = '3' + true; 
console.log(result); // "3true"

result = '3' + undefined; 
console.log(result); // "3undefined"

result = '3' + null; 
console.log(result); // "3null"
  `
},
  {
    name: "Implicit Conversion to Number",
    text: `
let result;

result = '4' - '2'; 
console.log(result); // 2

result = '4' - 2;
console.log(result); // 2

result = '4' * 2;
console.log(result); // 8

result = '4' / 2;
console.log(result); // 2
    `
  },
  {
    name: "Non-numeric String Results to NaN",
    text: `
let result;

result = 'hello' - 'world';
console.log(result); // NaN

result = '4' - 'hello';
console.log(result); // NaN    
    `
  },
  {
    name: "Implicit Boolean Conversion to Number",
    text: `
let result;

result = '4' - true;
console.log(result); // 3

result = 4 + true;
console.log(result); // 5

result = 4 + false;
console.log(result); // 4
    `
  },
  {
    name: "null Conversion to Number",
    text: `
let result;

result = 4 + null;
console.log(result);  // 4

result = 4 - null;
console.log(result);  // 4    
    `
  },
  {
    name: "undefined used with number, boolean or null",
    text: `
let result;

result = 4 + null;
console.log(result);  // 4

result = 4 - null;
console.log(result);  // 4
    `
  },
  {
    name: "Convert to Number Explicitly",
    text: `
let result;

// string to number
result = Number('324');
console.log(result); // 324

result = Number('324e-1')  
console.log(result); // 32.4

// boolean to number
result = Number(true);
console.log(result); // 1

result = Number(false);
console.log(result); // 0

result = Number(null);
console.log(result);  // 0

result = Number(' ')
console.log(result);  // 0

result = Number('hello');
console.log(result); // NaN

result = Number(undefined);
console.log(result); // NaN

result = Number(NaN);
console.log(result); // NaN
    `
  },
  {
    name: "Convert to String Explicitly",
    text: `
let result;

result = String(324);
console.log(result);  // "324"

result = String(2 + 4);
console.log(result); // "6"

//other data types to string
result = String(null);
console.log(result); // "null"

result = String(undefined);
console.log(result); // "undefined"

result = String(NaN);
console.log(result); // "NaN"

result = String(true);
console.log(result); // "true"

result = String(false);
console.log(result); // "false"

// using toString()
result = (324).toString();
console.log(result); // "324"

result = true.toString();
console.log(result); // "true"
    `
  },
  {
    name: "Convert to Boolean Explicitly",
    text: `
let result;

result = Boolean('');
console.log(result); // false

result = Boolean(0);
console.log(result); // false

result = Boolean(undefined);
console.log(result); // false

result = Boolean(null);
console.log(result); // false

result = Boolean(NaN);
console.log(result); // false

result = Boolean(324);
console.log(result); // true

result = Boolean('hello');
console.log(result); // true

result = Boolean(' ');
console.log(result); // true    
    `
  }


]

function appendExamples(arr) {
  for (let i = 0; i < arr.length; i++) {
    let block = document.createElement('div')
    block.classList.add('example')
    block.innerHTML = `<h3 class="example__heading">${arr[i].name}</h3>
    <pre class="code-wrapper">
    <code class="code">
    ${arr[i].text}
</code>
</pre>
`
    document.querySelector('.container').append(block)
  }
}

appendExamples(conversationExamples)