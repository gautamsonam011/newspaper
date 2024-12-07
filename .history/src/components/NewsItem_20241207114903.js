import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class NewsItem extends Component {
//    constructor(){
//     super();
//     console.log("Hello I am constructor")
//    }


    render() {
        let {title, description, urlImage, newsUrl} = this.props;
        return (
            <>
            <div className='container my-1'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!urlImage?"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/XXYSIOHXYII6ZJ7EANMQQOERT4_size-normalized.jpg&w=1440":urlImage} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a rel="morereferer" href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
            <div className='container'>
                <button type="button" className="btn btn-sm btn-primary">Back</button>
                <button type="button" className="btn btn-sm btn-primary">Previous</button>
            </div>
            </>
        )
    }
}

export default NewsItem



