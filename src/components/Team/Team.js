import React from 'react';
import Header from "../Header/header";
import style from "./Team.module.css";

export default function Team() {

    const cards_content = [
        {
            image:"./publicAssests/una.png",
            heading: "cambridge",
        },
        {
            image: "./publicAssests/unb.png",
            heading: "cambridge",
        },
        {
            image: "./publicAssests/unc.jpeg",
            heading: "cambridge",
        },
        {
            image: "./publicAssests/und.jpeg",
            heading: "cambridge",
        },
        {
            image: "./publicAssests/une.jpeg",
            heading: "cambridge",
        },
        {
            image: "./publicAssests/unf.jpeg",
            heading: "cambridge",
        },
        {
            image: "./publicAssests/ung.png",
            heading: "cambridge",
        },
        {
            image: "./publicAssests/unh.png",
            heading: "cambridge",
        },
        {
            image: "./publicAssests/uni.png",
            heading: "cambridge",
        },
        
    ]
    return (
        <div>
            <Header />
            <div className={style.TeamheaderAfterContent}>
                <h1 className={style.team_head}> Team Page</h1>
                <p className={style.team_subhead}> Learn from Scientist, research Schollars from the top institutes of the world.</p>
                
                {cards_content.map((item, i) => {
                    return (
                        <div className={style.team_card_container}>
                            <div className={style.team_card}>
                                <img className={style.team_card_img} src={item.image} />
                                <div className={style.team_card_head}>{item.heading}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
