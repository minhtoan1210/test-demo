import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="item1">
            <span>
              BASIC (514) 904-6789 Quebec, 3100 Boulevard de la Côte-Vertu
            </span>
          </div>
          <div className="item2">
            <Link to="">Activité 1</Link>
            <Link to="">Activité 2</Link>
            <Link to="">Activité 3</Link>
          </div>
          <div className="item3">
            <Link to="">Activité 1</Link>
            <Link to="">Activité 2</Link>
            <Link to="">Activité 3</Link>
          </div>
          <div className="item4">
            <Link to="">Activité 1</Link>
            <Link to="">Activité 1</Link>
          </div>
        </div>
        <div className="footer-basic">
          <div className="left">© BASIC 2024</div>
          <div className="right">
            <img src="./images/fb.svg" alt="" />
            <img src="./images/inssvg.svg" alt="" />
            <img src="./images/ytb.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
