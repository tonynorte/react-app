import * as React from "react";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import { Container, Row } from "react-bootstrap";

import '../../Assets/Styles/helpers.scss';

export default function Home() {
    return (
        <div>
            <Header />
            <Container>
                <Row xs={1} md={1}>
                    <h2 className="title">WE ARE AKBAL</h2>
                    <h5 className="title">DEFY THE LIMITS / MUSIC</h5>

                    <ul>
                        <li className="margin-top-4x">
                            <embed
                                type="video/webm"
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/806680165&color=%2307070c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                                width="250"
                                height="200"
                            />
                        </li>
                        <li className="margin-top-4x">
                            <embed
                                type="video/webm"
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/806680165&color=%2307070c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                                width="250"
                                height="200"
                            />
                        </li>
                    </ul>
              
                    <div className="margin-bottom-4x">
                        <a className="wide-btn" href="https://soundcloud.com/user-36549205/sets/eat-me?ref=whatsapp&p=i&c=1" >
                            View All Content
                        </a>
                    </div>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}