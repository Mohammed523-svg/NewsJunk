import React from "react";

// NewsItem component: Renders a single news article card.
const NewsItem = (props) => {
  // Destructure the props passed to the component.
  let { title, description, imageUrl, newsUrl, author, date, source, badgeColor } = props;
  return (
    <div className="my-3">
      {/* Card component from Bootstrap */}
      <div className="card">
        {/* Badge to display the source of the news, positioned at the top-right */}
        <div className="d-flex justify-content-end position-absolute end-0">
          <span className={`badge rounded-pill bg-${badgeColor}`}>
            {source}
          </span>
        </div>
        {/* Image of the news article */}
        <img src={imageUrl} className="card-img-top" alt="..." />
        {/* Card body containing the title, description, and link to the full article */}
        <div className="card-body">
          {/* Title of the news article */}
          <h5 className="card-title">{title}</h5>
          {/* Short description of the news article */}
          <p className="card-text">{description}</p>
          {/* Information about the author and publication date */}
          <p className="card-text">
            <small className="text-body-secondary">
              {/* Display author name or "Unknown Author" if not provided */}
              By {author ? author : "Unknown Author"} on{" "}
              {/* Format the date to a GMT string */}
              {new Date(date).toGMTString()}
            </small>
          </p>
          {/* Link to read the full news article in a new tab */}
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;