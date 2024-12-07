import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class NewsItem extends Component {
//    constructor(){
//     super();
//     console.log("Hello I am constructor")
//    }


    render() {
        let {title, description, urlImage, newsUrl, author, date} = this.props;
        return (
            <>
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!urlImage?"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/XXYSIOHXYII6ZJ7EANMQQOERT4_size-normalized.jpg&w=1440":urlImage} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {date}</small></p>
                            <a rel="morereferer" href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
            
            </>
        )
    }
}

export default NewsItem



