import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source, badgeColor } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div className="d-flex justify-content-end position-absolute end-0">
            <span className={`badge rounded-pill bg-${badgeColor}`}>
              {source}
          </span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown Author"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
