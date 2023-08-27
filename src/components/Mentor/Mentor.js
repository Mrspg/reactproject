import React from 'react';
import Header from "../Header/header";
import style from "./Mentor.module.css";


export default function Mentor() {

    const mentor_cards_content = [
        {
            image: "./publicAssests/profile1.jpeg",
            heading: "cambridge",
        },
        {
            image: "./publicAssests/profile2.jpeg",
            heading: "cambridge",
        },
        {
            image: "./publicAssests/profile3.jpeg",
            heading: "cambridge",
        },
        {
            image: "./publicAssests/profile4.jpeg",
            heading: "cambridge",
        },
        {
            image: "./publicAssests/profile5.jpeg",
            heading: "cambridge",
        },
        {
            image: "./publicAssests/profile6.jpeg",
            heading: "cambridge",
        },
        {
            image: "./publicAssests/profile7.jpeg",
            heading: "cambridge",
        },
        {
            image: "./publicAssests/profile8.jpeg",
            heading: "cambridge",
        },
        {
            image: "./publicAssests/profile9.jpeg",
            heading: "cambridge",
        },
    ]

    return (
        <div>
            <Header />
            <div className={style.TeamheaderAfterContent}>
                <h1 className={style.team_head}> Meet your Mentors</h1>
                {mentor_cards_content.map((item, i) => {
                    return (
                        <div className={style.team_card_container}>
                            <div className={style.team_card}>
                                <div className={style.mentor_img_container}>
                                    <img className={style.mentor_img} src={item.image} />
                                </div>
                                <div className={style.mentor_heading}>{item.heading}</div>
                            </div>
                        </div>
                    );
                })}
                <div className={style.team_head}> Mentors & Advisors</div>
                <div className={style.team_card_container}>
                    <div className={style.team_card}>
                        <div className={style.mentor_img_container}>
                            <img className={style.mentor_img} src="./publicAssests/profile8.jpeg" />
                        </div>
                        <div className={style.mentor_heading}>Dr Omkar</div>
                    </div>
                    <div className={style.team_card}>
                        <div className={style.mentor_img_container}>
                            <img className={style.mentor_img} src="./publicAssests/profile9.jpeg" />
                        </div>
                        <div className={style.mentor_heading}>Akhil Tripathi</div>
                        <div className={style.message_button}> Message him now</div>
                    </div>
                    <div className={style.team_card}>
                        <div className={style.mentor_img_container}>
                            <img className={style.mentor_img} src="./publicAssests/profile6.jpeg" />
                        </div>
                        <div className={style.mentor_heading}>Vivek Dwivedi</div>
                        <div className={style.message_button}> Message him now</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
