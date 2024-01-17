import React from 'react';
import ReactDOM from 'react-dom/client';

// createRoot is the functionality of ReactDOM as we are working on web browser, 
// here we get the root(a root element from html) where we want to start rendering and dom manipulation using React 
const root = ReactDOM.createRoot(document.getElementById('root'));


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
                React.createElement('h1', {}, "This is Namaste React"),
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

root.render(parent3);