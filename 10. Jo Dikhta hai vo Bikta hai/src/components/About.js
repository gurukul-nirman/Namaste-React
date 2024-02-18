import User from './User';
import UserClass from './UserClass';

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series About</h2>
            {/* <User name={"Ziton here"} /> */}
            <UserClass name={"Ziton here"} location={"Earth Planet"}/>
        </div>
    )
}

export default About;