import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, discription, imageUrl, newsUrl, author, date,source } = this.props;
    return (
      <div className='my-4'>
        <div className="card" style={{ width: "18rem" }}>
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left:"90%"}}>
          {source}
          <span className="visually-hidden">unread messages</span>
        </span>
          <img src={!imageUrl ? "https://c.ndtvimg.com/2023-06/e5ast9i_book_625x300_03_June_23.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text " >{discription}...</p>
            <p className="date"><small className='text-muted'> by {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target='blank' className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>

      </div>
    )
  }
}

export default NewsItem
