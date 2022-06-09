import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import ImageList from '../components/ImageList'

export enum listVariant {
    default = '',
    favorite = ':favorite'
}


type CatalogParams = {
    favorite: string;
};

const ImgCatalog: FC = () => {
    const { favorite } = useParams<CatalogParams>();


    return (
        <div className='img-list'>
            <ImageList favoriteMod={favorite === listVariant.favorite} />
        </div>
    );
};

export default ImgCatalog;
