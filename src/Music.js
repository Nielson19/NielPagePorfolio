import React from 'react';
import './Music.css';
import insipidGif from './Media/Gifs/Insipido.gif';

function MusicCard(props) {
    const backgroundColor = props.backgroundColor, title = props.title,
        artist = props.artist, url = props.url, image = props.image;
    return(
        <div className="musicCardContainer" style={{
            "backgroundColor": backgroundColor,
        }}>

            <div className="imageContainer">
                <img src={image}/>
            </div>

            <div className="textContainer">
                <h1>{title}</h1>
                <p>{artist}</p>
            </div>

            <iframe className="Player" style={{borderRadius :12}}
                    src={url}
                    frameBorder="0"
                    width="600" height="352"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
            </iframe>
        </div>
    )
}

export default function MusicFunction() {

    return (
        <div className="musicContainer">
            <MusicCard backgroundColor= "lightblue"  title="Insìpido" artist="Niel Klopen x Isa" url= "https://open.spotify.com/embed/track/1dmlsc55ojHHHuEUWyB6yd?utm_source=generator&theme=0" image = {insipidGif}  />
            <MusicCard backgroundColor="lightblue" title="Insìpido" artist="Niel Klopen x Isa" url= "https://open.spotify.com/embed/track/1dmlsc55ojHHHuEUWyB6yd?utm_source=generator&theme=0" image = {insipidGif}  />




        </div>
    )
}