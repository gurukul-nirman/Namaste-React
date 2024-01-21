import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element
// const heading = React.creaetElement("h1", {id: "heading"}, "Namaste React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// JSX (transpiled before it reaches the JS engine) - PARCEL(it does this using Babel) -> Babel

const JsxHeading = () => (<h1 id="heading">Namaste React by JSX</h1>);

const number = 1000;

const title = (
    <h2>this is sub-title</h2>
);

// React Functional Component
// Component Composition
const HeaderComponent = () => {
	return (
        <div id='container'>
            <JsxHeading />
            <h2>{ number }</h2>
            {title}
            <h1>Namaste React Functional Component</h1>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(HeaderComponent());
root.render(<HeaderComponent />);
