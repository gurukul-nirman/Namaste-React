import React from 'react';

// extends React.Component to register the calss to react that it's a component
class UserClass extends React.Component {
    
    constructor (props) {
        super(props);

        // state is a reserved word and it's the object which 
        // holds all the states of the class component
        this.state = {
            userInfo: {
                name: "dummy name",
                location: "default",
                avatar_url: ""
            }
        };
    }

    async componentDidMount() {
        console.log('This is called after the render method is called and mounted the component. Constructor -> render -> componentDidMount');
        console.log('API calls are called in componentDidMount. Just like we call API cal in useEffect in functional component');
        console.log('This is done for better UX.');
        console.log('Load (render) -> API call -> re-render component after getting data');

        const data = await fetch("https://api.github.com/users/gurukul-nirman");
        const json = await data.json();

        this.setState({
            userInfo: json
        });
        console.log(json);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component Did Update");
    }

    componentWillUnmount() {
        console.log('Component Will Unmount');
    }

    // this render method is must whihc will return the JSX 
    render() {

        const {name, location, avatar_url} = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @theZiton</h4>
            </div>
        )
    }
}

export default UserClass;


/**
 * 
 * --------- MOUNTING ----------
 * 
 * Constructor (dummy data)
 * Render (dummy)
 *      <HTML with Dummy data>
 * Component Did Mount
 *      <API Call>
 *      <This.setState> -> State variable is updated
 * 
 * 
 * 
 * (one the setState is called, UPDATING cycle is being called)
 * ------ UPDATE --------------------
 * render(API data)
 *      <HTML (new API data)>
 * Copmonent Did Update
 * 
 * 
 * ------ UNMOUNTING ----------------
 *  (clean up happens here)
 * Component Will Unmount
 * 
 */