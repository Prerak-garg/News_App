import React, { Component } from 'react'

export class NewItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
          <div className="card"><span className="position-absolute top-0 translate-middle badge rounded-pill bg-warning text-dark" style={{left:'91%', zIndex:'1'}}>{source}</span>
            <img src={!imageUrl?"https://assets.sentinelassam.com/h-upload/2022/06/08/353009-galaxies.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text">{description} ... </p>
                    <p className="card-text"><small className="text-danger">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                </div>
            </div>
      </div>
    )
  }
}

export default NewItem