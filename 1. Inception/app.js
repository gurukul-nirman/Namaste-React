// createElement is the core React library functionality for creating an HTML Element
const heading = React.createElement('h1', {id: "heading"}, "Hellow World from React inside it!");
// the empty object in the above line, is used to provide attributes to the created element
// 'heading' is a React element(just an object with some properties) and not HTML Element
console.log(heading);

// createRoot is the functionality of ReactDOM as we are working on web browser, 
// here we get the root(a root element from html) where we want to start rendering and dom manipulation using React 
const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 *  How to create the nested structure in React:
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1></h1>
 *      </div>
 * </div>
 * 
 */

const parent = React.createElement(
    'div', 
    {id: 'parent'},
    React.createElement(
        'div',
        {id: 'child'},
        React.createElement('h1', {}, "I'm an h1 tag")
    )
);

console.log(parent);


/**
 *  How to create the nested and sibling structure in React:
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1></h1>
 *          <h2></h2>
 *      </div>
 * </div>
 * 
*/

const parent2 = React.createElement(
    'div', 
    {id: 'parent'},
    React.createElement(
        'div',
        {id: 'child'},
        [   // for sibling, we use an array of childs
            React.createElement('h1', {}, "I'm an h1 tag"),
            React.createElement('h2', {}, "I'm an h2 tag")
        ]
    )
);

console.log(parent2);



/**
 *  How to create the nested and sibling structure in React:
 * 
 * <div id="parent">
 *      <div id="child1">
 *          <h1></h1>
 *          <h2></h2>
 *      </div>
 *      <div id="child2">
 *          <h1></h1>
 *          <h2></h2>
 *      </div>
 * </div>
 * 
*/

const parent3 = React.createElement(
    'div', 
    {id: 'parent'},[
        React.createElement(
            'div',
            {id: 'child1'},
            [   // for sibling, we use an array of childs
                React.createElement('h1', {}, "I'm an h1 tag"),
                React.createElement('h2', {}, "I'm an h2 tag")
            ]
        ),
        React.createElement(
            'div',
            {id: 'child2'},
            [   // for sibling, we use an array of childs
                React.createElement('h1', {}, "I'm an h1 tag"),
                React.createElement('h2', {}, "I'm an h2 tag")
            ]
        )
    ]
);

console.log(parent3);

// here we are fianlly rendering the element we created in the root we defined
root.render(parent3);
// render replaces everything with the element what we pass 
// this render method will trake the raect element object and create html element and put it
// in the roo, in our example it's heading tag (h1 tag)