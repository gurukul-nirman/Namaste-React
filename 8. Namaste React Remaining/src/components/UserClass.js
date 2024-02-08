import React from 'react';

// extends React.Component to register the calss to react that it's a component
class UserClass extends React.Component {
    
    constructor (props) {
        super(props);

        // state is a reserved word and it's the object which 
        // holds all the states of the class component
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        console.log('This is called after the render method is called and mounted the component. Constructor -> render -> componentDidMount');
        console.log('API calls are called in componentDidMount. Just like we call API cal in useEffect in functional component');
        console.log('This is done for better UX.');
        console.log('Load (render) -> API call -> re-render component after getting data');
    }

    // this render method is must whihc will return the JSX 
    render() {

        const {name, location} = this.props;
        const {count} = this.state;

        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button onClick={() => {
                    // Never update State Variables directly. 
                    // It will create inconsistencies in code.
                    this.setState({
                        count: this.state.count + 1
                    });
                }}>Increment Count</button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @theZiton</h4>
            </div>
        )
    }
}

export default UserClass;