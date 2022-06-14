import React, { FC } from 'react';
import { IImage } from "../types/image";
import heart from '../assets/heart.svg'
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";


interface ImageItemProps {
    image: IImage;
}

const ImageItem: FC<ImageItemProps> = ({ image }) => {  //компонент карточки
    const { favoriteImages } = useTypedSelector(state => state.image)   //при клике лайка на карточкке мы сразу обновляем 2 массива
    const { setFavoriteImage, setFavoriteImages } = useActions()        // первый массив со всеми загруженными карточками и второй с лайкнутыми
    function addToFavorite(image: IImage) {
        setFavoriteImage(image)
        if (image.favorite) {
            setFavoriteImages([...favoriteImages, image])
        }
        else {
            let newImages = favoriteImages.filter(image => image.favorite)
            setFavoriteImages(newImages)
        }
    }

    return (
        <div className={(image.height > image.width) ? "img-item favorite img-item_big" : "img-item"}>
            <div className="img-item__inner">
                <img className="img-item__img" src={image.download_url} alt="" />
                <div className="img-item__content">
                    <div className="img-item__content-text">
                        <div className="img-item__author">{image.author}</div>
                        <div className="img-item__favorite img-item__favorite--active" onClick={() => addToFavorite(image)}                    >
                            <img src={heart} className={image.favorite ? "img-item__like img-item__like--active" : "img-item__like"} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageItem;
