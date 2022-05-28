import * as React from "react";
import "../../Layouts/Video/Video.css";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import demo from "../../Assets/Video/demo.mp4";

export default function Home() {
    return (
        <div>
            <Header />
            <div id="wrap-video-home" className="pos-relative">
                <video width="750" height="900" loop autoPlay>
                    <source id="video-landing" src={demo} type="video/mp4"/>
                </video>
            </div>
            <Footer />
        </div>
    );
}