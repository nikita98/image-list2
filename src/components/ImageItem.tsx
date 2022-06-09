import React, { FC, useEffect } from 'react';
import { IImage } from "../types";
import heart from '../assets/heart.svg'


interface ImageItemProps {
    image: IImage;
    addToFavorite: (image: IImage) => void;
}

const ImageItem: FC<ImageItemProps> = ({ image, addToFavorite }) => {
    return (
        <div className={(image.height > image.width) ? "img-item favorite img-item_high" : "img-item"}>
            <div className="img-item__inner">
                <img className="img-item__img" src={image.download_url} alt="" />
                <div className="img-item__content">
                    <div className="img-item__author">{image.author}</div>
                    <div className="img-item__favorite favorite" onClick={() => addToFavorite(image)}                    >
                        <img src={heart} className={image.favorite ? "img-item__star favorite" : "img-item__star"} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageItem;
