import React, { FC, useEffect } from 'react';
import ImageItem from './ImageItem'
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";


const ImageList: FC = () => {
    const { error, loading, images, favoriteImages, currentImages, favorite, imagePerPage } = useTypedSelector(state => state.image)
    const { page, pageFavorite } = useTypedSelector(state => state.page)
    const { fetchImages, setCurrentImages, setFavoritePagesNumber, setFavoritePage } = useActions()

    useEffect(() => {       //при смене страницы или вкладки(избранное) мы обновляем массив выводимых карточек: currentImages
        if (favorite) {
            const startImg = (pageFavorite - 1) * imagePerPage
            const newCurrentImg = favoriteImages.slice(startImg, startImg + imagePerPage)
            setCurrentImages(newCurrentImg)
            if (newCurrentImg.length === 0) {
                setFavoritePage(1)
            }
        }
        else {
            if (!images[page]) {
                fetchImages(page, imagePerPage)
            }
            else {
                setCurrentImages(images[page])
            }
        }
    }, [page, pageFavorite, favorite])

    useEffect(() => {       //считаем количество страниц в избранном только когда меняем вкладки
        setFavoritePagesNumber(Math.ceil(favoriteImages.length / imagePerPage))
    }, [favorite])


    if (loading) {
        return <div className="container">
            <h1>Идет загрузка...</h1>
        </div>
    }
    if (error) {
        return <div className="container">
            <h1>{error}</h1>
        </div>
    }


    return (
        <div className='img-list'>
            <div className="container">
                <div className="img-list__inner">
                    <div className="img-list__title">
                        {favorite ? <h1>Избранное</h1> : <h1>Лента</h1>}
                    </div>
                    <div className="img-list__items">
                        {currentImages.length ?
                            currentImages.map(image =>
                                <ImageItem image={image} key={image.id} />
                            ) : <div className="img-list__placeholder">
                                {favorite ?
                                    <span>Добавьте изображения в избранное</span> :
                                    <span>Что-то пошло не так...</span>}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageList;
