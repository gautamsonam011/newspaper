import React, { PureComponent } from 'react'
import NewsItem from './NewsItem'

export class News extends PureComponent {
  render() {
    return (
      <div className="container my-2">
        <h2>NewsMonkey</h2>
        <div className="row">
        <div className="col-md-3">
            <NewsItem title="MyTitle" description="mydesc" />
        </div>
        <div className="col-md-3">
            <NewsItem title="MyTitle" description="mydesc" />
        </div>
        <div className="col-md-3">
           <NewsItem title="MyTitle" description="mydesc"/> 
        </div>
        <div className="col-md-3">
            <NewsItem title="MyTitle" description="mydesc" />
        </div>
        </div>
      </div>
    )
  }
}

export default News
