import React from 'react';
import Twitter from '../images/twitter.png';
import FB from '../images/fb.png';
import Insta from '../images/insta.png';
import LinkedIn from '../images/linkedin.png';

export default function Footer(){
    return (
        <footer className="foot">
           <img src={Twitter} alt = "twitter" className=""/>
           <img src={FB} alt = "fb" className=""/>
           <img src={Insta} alt = "insta" className=""/>
           <img src={LinkedIn} alt = "linkedin" className=""/>
        </footer>
    )
}