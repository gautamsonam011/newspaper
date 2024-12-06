import React, { PureComponent } from 'react'
import NewsItem from './NewsItem'

export class News extends PureComponent {
  render() {
    return (
      <div className="container my-2">
        <h2>NewsMonkey</h2>
        <div className="row">
        <div className="col-md-3">
            <NewsItem title="MyTitle" description="mydesc" url="https://ichef.bbci.co.uk/news/1024/branded_news/2c63/live/87331c50-b27b-11ef-a0f2-fd81ae5962f4.png" />
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
