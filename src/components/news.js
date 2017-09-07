import React, { Component } from "react";

export default class News extends Component {
  render() {
    const { value } = this.props;
    console.log(this.props);
    return (
      <div className="row">
        <div className="card ">
          <div className="card-image">
            <img src={value.urlToImage} />
          </div>
          <span className="card-title">{value.title}</span>
          <div className="card-content">
            <p>{value.description}</p>
          </div>
          <div className="card-action">
            <a href={value.url}>Learn More.....</a>
          </div>
        </div>
      </div>
    );
  }
}
