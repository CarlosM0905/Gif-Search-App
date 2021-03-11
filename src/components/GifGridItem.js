import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ({ id, title, url }) => {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card card-gif animate__animated animate__fadeIn">
                <img src={url} alt={title} className="card-img-top img-gif"></img>
                <div className="card-body">
                    <p className="name-gif text-center">{title}</p>
                </div>
            </div>
        </div>
    )
}

GifGridItem.propTypes = {

}

export default GifGridItem
