import React, { useState, useContext } from 'react';
import style from '../assets/css/cards.module.css';

const Poke = ({image}) => {
    const [showImage, setShowImage] = useState([image.front_default])

    console.count("render poke");
    console.log(image);

    //console.log(image.image)

    let imageFront = image.front_default;
    let imageBack = image.back_default;

    const pokes = {
        backgroundImage: `url("${showImage}")`,
        backgroundSize: 'cover'
    }


    return (
        <div className={style.pokeCard}>

            <div className={style.pokeImageContent}>
                <span className={style.pokes} style={pokes}  onMouseEnter={() => setShowImage(imageBack)} onMouseLeave={() => setShowImage(imageFront)}/>
            </div>

        </div>
    )
}

export default Poke;

//export default React.memo(Poke);