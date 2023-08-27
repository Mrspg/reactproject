import React from 'react';
import style from "./Home.module.css";
import Header from "../Header/header";
import backgroundVideo from "../../assets/bgVideo.mp4";

export default function Home() {
    return (
        <div className="main_web_page">
            <video src={backgroundVideo} autoPlay loop muted />
            <div className="other_content">
                <Header />
                <div className={style.home_main_container}>
                    <div className={style.home_head}>
                        <h1> SciAstra </h1>
                        <p>For the love of Science</p>
                    </div>
                    <div className={style.home_button}>Get your Free Material Here</div>
                    <div className={style.home_button}> Join Community</div>
                </div>
            </div>
        </div>
    )
}
