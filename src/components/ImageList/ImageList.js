import React from 'react';
import {searchByKeyword} from "../../api/unsplash/photoSearch";
import {Col, Container, Row} from 'react-bootstrap'
import Image from '../Image/Image'


const showImages = (images) => {
    return images.map(image => (
            <Image key={image.id} src={image.urls.raw} alt={image.description}/>
    ))
}


const ImageList = (props) => {
    return (
        <div className="wrapper">
            {showImages(props.images)}
        </div>
    );
};

export default ImageList;
