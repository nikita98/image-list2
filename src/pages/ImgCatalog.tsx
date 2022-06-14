import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageList from '../components/ImageList'
import Pagination from '../components/Pagination'
import { useActions } from "../hooks/useActions";


export enum listVariant {  //можно было сделать через табы, но я сделал так, это параметры из адресной строки
    default = '',
    favorite = ':favorite'
}


type CatalogParams = {
    favorite: string;
};

const ImgCatalog: FC = () => {
    const { setFavoriteMod } = useActions()
    const { favorite } = useParams<CatalogParams>();

    useEffect(() => {
        setFavoriteMod(favorite === listVariant.favorite)
    })


    return (
        <div className='img-list'>
            <ImageList />
            <Pagination />
        </div>
    );
};

export default ImgCatalog;
