import React, { PureComponent } from 'react'
import NewsItem from './NewsItem'

export class News extends PureComponent {
  render() {
    return (
      <div className="container my-2">
        <NewsItem title="MyTitle" description="mydesc" />
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
      </div>
    )
  }
}

export default News
