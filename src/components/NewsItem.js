import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    <img src="imageUrl" className="card-img-top" alt="..." />;
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    console.log("new url", author);
    return (
      <div className="my-3">
        <div className="card">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "89%", zIndex: 1 }}
          >
            {source}
          </span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>

            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              READ MORE
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
