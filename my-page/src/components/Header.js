import React from 'react';
import Photo from '../images/photo.jpg';

export default function Header(){
    return (
        <header>
            <nav className="navi" >
                <img src={Photo} alt = "My pic" className="navi-img" />
                <h2 className="mahek"> Mahek Mugatwala </h2>
                <h5 className="front">Frontend Developer</h5>
                <a href= "https://github.com/MahekM25" target = "_blank">
                <button className="button-git" > GitHub </button> </a>
                <a href= "https://www.linkedin.com/in/mahekmugatwala2506/" target = "_blank">
                <button className="button-linkedin"> LinkedIn </button></a>
            </nav>
        </header>
    )
}