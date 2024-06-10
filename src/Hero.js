import React, {useState} from 'react';
import './Hero.css';
import imgNiel from './Media/Photos/hero.png';

function BioFunction(){
    return (
        <>
            <h1>
                <span style ={{}}>Hola! Soy<br /></span>
                <span style ={{fontWeight: "bold"}}> Niel Klopen</span>
                </h1>
            <p>
                Productor musical nacido en Venezuela, originario de Maracay, Venezuela y actualmente radicado en Miami, Florida.
                Utilizo Ableton para producir y me especializo en pop, EDM e indie alternativo. Mi objetivo es innovar en
                géneros y revivir otros. Adéntrate conmigo en un viaje que es a la vez innovador y nostálgico.

            </p>
        </>

    )
}


export default function HeroFunction() {
    return (
        <div className="heroContainer">
            <div className="imageHeroContainer">
                <img
                    className="heroImg"
                    src={imgNiel}
                    alt="Hero Niel"
                />
            </div>
            <div className="bioContainer">
                <BioFunction />
            </div>
        </div>
    );
}