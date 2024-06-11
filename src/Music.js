import React from 'react';
import './Music.css';
import insipidoImg from './Media/Photos/isaContainer.PNG';
import agridulceImg from './Media/Photos/medicensantoContainer.png';
import insipidoGif from './Media/Gifs/Insipido.gif';
import agridulceGif from './Media/Gifs/Agridulce.gif'

function MusicCard(props) {
    const backgroundColor = props.backgroundColor, backgroundImage = props.backgroundImage, title = props.title,
        artist = props.artist, url = props.url, image = props.image;
    return(
        <div className="musicCardContainer">

            <div className="imageContainer">
                <img src={image}/>
            </div>

            <div className="textContainer"
                 style={{
                     // backgroundImage should be size = 2048 x 858 px
                     backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${backgroundImage})`,
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat',
                     backgroundPosition: 'center',
                 }}>
                <h1>{title}</h1>
                <p>{artist}</p>

            </div>
            {/*<iframe style={{borderRadius: 12 }}*/}
            {/*        src="https://open.spotify.com/embed/track/1dmlsc55ojHHHuEUWyB6yd?utm_source=generator&theme=0"*/}
            {/*        width="100%" height="152" frameBorder="0" allowFullScreen=""*/}
            {/*        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"*/}
            {/*        loading="lazy"></iframe>*/}

        </div>
    )
}

export default function MusicFunction() {

    return (
        <div className="musicContainer">
            <MusicCard backgroundColor="lightblue" title="Insìpido" artist="Niel Klopen x Isa"
                       url="https://open.spotify.com/embed/track/1dmlsc55ojHHHuEUWyB6yd?utm_source=generator&theme=0" image = {insipidoGif} backgroundImage= {insipidoImg}/>
            <MusicCard backgroundColor= "lightblue"  title="Agridulce" artist="Niel Klopen x Medicensanto" url= "https://open.spotify.com/embed/track/1dmlsc55ojHHHuEUWyB6yd?utm_source=generator&theme=0" image = {agridulceGif} backgroundImage= {agridulceImg}/>

        </div>
    )
}