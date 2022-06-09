import React, { FC, useEffect, useState } from 'react';

import ImageItem from './ImageItem'
import { IImage } from "../types";
import axios from "axios";
import { IPagination } from "../types";
import Pagination from '../components/Pagination'

interface ImageListProps {
    favoriteMod?: boolean;
}


const ImageList: FC<ImageListProps> = ({ favoriteMod }) => {
    const [images, setImages] = useState<IImage[]>([])
    const [favoriteImages, setFavoriteImages] = useState<IImage[]>([])
    const [currentFavoriteImages, setCurrentFavoriteImages] = useState<IImage[]>([])
    const [pagination, setPagination] = useState<IPagination>({ totalPages: 0, currentPage: 1, favoriteCurrentPage: 1 })
    const cardsPerPage = 20;
    useEffect(() => {
        fetchImages(1)
    }, [])

    function changePage(page: number) {
        if (favoriteMod) {
            setPagination({ ...pagination, favoriteCurrentPage: page })
            const startImg = (page - 1) * cardsPerPage
            setCurrentFavoriteImages(favoriteImages.slice(startImg, startImg + cardsPerPage))
        }
        else {
            setPagination({ ...pagination, currentPage: page })
            fetchImages(page)
        }
    }

    async function fetchImages(page: number) {
        try {
            const response = await axios.get<IImage[]>(`https://picsum.photos/v2/list?page=${page}&limit=${cardsPerPage}`)
            setImages(response.data)
        } catch (e) {
            console.log(e);
        }
    }

    function addToFavorite(image: IImage) {
        const imagesCopy = [...images];
        const favoriteImagesCopy = [...favoriteImages];
        const index = images.indexOf(image);
        const favoriteIndex = favoriteImages.indexOf(image);

        if (typeof (image.favorite) === "undefined") {
            image.favorite = false
        }
        image.favorite = !image.favorite


        if (!image.favorite) {
            favoriteImagesCopy.splice(favoriteIndex, 1)
            setFavoriteImages([...favoriteImagesCopy])

            imagesCopy[index] = image
            setImages([...imagesCopy])
        }
        else {
            setFavoriteImages([...favoriteImages, image])
        }
        setPagination({ ...pagination, totalPages: (Math.ceil(favoriteImages.length / cardsPerPage)) })
    }

    return (
        <div className='img-list'>
            <div className="container">
                <div className="img-list__inner">
                    <div className="img-list__title">
                        {favoriteMod ? <h1>Избранное</h1> : <h1>Лента</h1>}
                    </div>
                    <div className="img-list__items">
                        {(favoriteMod ? favoriteImages : images).map(image =>
                            <ImageItem image={image} addToFavorite={addToFavorite} key={image.id} />
                        )}
                    </div>
                    {favoriteMod ?
                        <div className="img-list__pagination">
                            <Pagination pagination={{ ...pagination }} favorite={true} changePage={changePage} />
                        </div> :
                        <div className="img-list__pagination">
                            <Pagination pagination={{ ...pagination, totalPages: 50 }} changePage={changePage} />
                        </div>}
                </div>
            </div>
        </div>
    );
};

export default ImageList;
