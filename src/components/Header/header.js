import React from 'react';
import style from './header.module.css';

export default function header() {
  let openHome = () => {
    window.open("/","_self");
}
let openTeam = () => {
    window.open("/team","_self");
}
let openMentor = () => {
  window.open("/mentor","_self");
}
  return (
    <div className={style.main_header_container}>
      <div className={style.header_heading}>
        <div className={style.logo_img_container}>
          <img src="https://www.sciastra.com/Assets/Images/newsciastra.jpg" alt="logo-img" className={style.logo_img} />
        </div>
      </div>
      <div className={style.header_heading} onClick={openHome}>Home</div>
      <div className={style.header_heading} onClick={openTeam}>Team</div>
      <div className={style.header_heading} onClick={openMentor}>Mentor</div>
    </div>
  )
}
