import React, { PureComponent } from 'react'
import NewsItem from './NewsItem'

export class News extends PureComponent {
  render() {
    return (
      <div>
        <NewsItem title="MyTitle" description="mydesc" />
      </div>
    )
  }
}

export default News
