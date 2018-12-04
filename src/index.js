import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
    constructor(props) {
        super(props);
        //this is the only time we use direct assignment to this.state
        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition((position, err) => {
            //call set state a function put on component when extended react.component
            this.setState({ lat: position.coords.latitude });

            console.log(err);
        });
    }

    //always define render
    render() {


            return <div>Latitude: {this.state.lat}</div>;
    }
};

ReactDOM.render(<App />, document.querySelector('#root'));