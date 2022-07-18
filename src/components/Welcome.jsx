function Welcome(props) {
    console.log(props);
    return <h1>Hello, {props.name} {props.lastName}</h1>;
}


export default Welcome;