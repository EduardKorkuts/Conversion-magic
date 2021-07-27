import './styles/styles.css'
import './styles/styles.scss'
import hljs from 'highlight.js';
import 'highlight.js/styles/agate.css';
import 'normalize.css/normalize.css'


document.addEventListener('DOMContentLoaded', () => {
  hljs.configure({
    languages: ['javascript']
  })
  hljs.highlightAll();
});

const conversationExamples = [{
  name: "Implicit Conversion to String",
  text: ` 
let result;

result = '3' + 2; 
output: ${'3' + 2}

result = '3' + true; 
output: ${'3' + true}

result = '3' + undefined; 
output: ${'3' + undefined}

result = '3' + null; 
output: ${'3' + null}
  `
},
  {
    name: "Implicit Conversion to Number",
    text: `
let result;

result = '4' - '2'; 
output: ${'4' - '2'}

result = '4' - 2;
output: ${'4' - 2}

result = '4' * 2;
output: ${'4' * 2}

result = '4' / 2;
output: ${'4' / 2}
    `
  },
  {
    name: "Non-numeric String Results to NaN",
    text: `
let result;

result = 'hello' - 'world';
output: ${'hello' - 'world'}

result = '4' - 'hello';
output: ${'4' - 'hello'}   
    `
  },
  {
    name: "Implicit Boolean Conversion to Number",
    text: `
let result;

result = '4' - true;
output: ${'4' - true}

result = 4 + true;
output: ${4 + true}

result = 4 + false;
output: ${4 + false}
    `
  },
  {
    name: "null Conversion to Number",
    text: `
let result;

result = 4 + null;
output: ${4 + null}

result = 4 - null;
output: ${4 - null}  
    `
  },
  {
    name: "undefined used with number, boolean or null",
    text: `
let result;

result = 4 + null;
output: ${4 + null}

result = 4 - null;
output: ${4 - null}
    `
  },
  {
    name: "Convert to Number Explicitly",
    text: `
let result;

// string to number
result = Number('324');
output: ${Number('324')}

result = Number('324e-1')  
output: ${Number('324e-1')}

// boolean to number
result = Number(true);
output: ${Number(true)}

result = Number(false);
output: ${Number(false)}

result = Number(null);
output: ${Number(null)}

result = Number(' ')
output: ${Number(' ')}

result = Number('hello');
output: ${Number('hello')}

result = Number(undefined);
output: ${Number(undefined)}

result = Number(NaN);
output: ${Number(NaN)}
    `
  },
  {
    name: "Convert to String Explicitly",
    text: `
let result;

result = String(324);
output: ${String(324)}

result = String(2 + 4);
output: ${String(2 + 4)}

//other data types to string
result = String(null);
output: ${String(null)}

result = String(undefined);
output: ${String(undefined)}

result = String(NaN);
output: ${String(NaN)}

result = String(true);
output: ${String(true)}

result = String(false);
output: ${String(false)}

// using toString()
result = (324).toString();
output: ${(324).toString()}

result = true.toString();
output: ${true.toString()}
    `
  },
  {
    name: "Convert to Boolean Explicitly",
    text: `
let result;

result = Boolean('');
output: ${Boolean('')}

result = Boolean(0);
output: ${Boolean(0)}

result = Boolean(undefined);
output: ${Boolean(undefined)}

result = Boolean(null);
output: ${Boolean(null)}

result = Boolean(NaN);
output: ${Boolean(NaN)}

result = Boolean(324);
output: ${Boolean(324)}

result = Boolean('hello');
output: ${Boolean('hello')}

result = Boolean(' ');
output: ${Boolean(' ')}  
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