import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class NewsItem extends Component {
   constructor(){
    // super();
   }

    render() {
        let {title, description, urlImage} = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={urlImage} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href="/" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
