import * as React from "react";
import "../../Layouts/Video/Video.css";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import demo from "../../Assets/Video/demo.mp4";

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        // Initializing the state 
        this.state = { color: 'lightgreen' };
    }

    componentDidMount() {
        this.setState({isLoading: true})
    }

    render() {
        const { isLoading } = this.state;

        return (
            <div>
                <Header />
                <React.Fragment>
                    {isLoading}

                    <video
                        loop
                        muted
                        autoPlay
                        src={demo}
                        preload={'auto'}
                        type={'video/mp4'}
                        ref={ref => this.headerVideo}
                        onLoadEnd={() => this.setState({isLoading: false})}>
                    </video>
                </React.Fragment>
                <Footer />
            </div>
        )
    }
}