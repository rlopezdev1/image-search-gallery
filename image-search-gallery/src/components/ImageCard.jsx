import React from 'react'


const ImageCard = ( { image } ) => {
    return (
        <div className='image'>
            <div>
                <p>{image.description}</p>
            </div>
            <div>
                <img src={image.urls.small} alt={image.alt_description}></img>
            </div>
            <div>
                <p>Created by: {image.user.username}</p>
                <span>From: {image.user.location}</span>

            </div>
        </div>
    )
}

export default ImageCard;