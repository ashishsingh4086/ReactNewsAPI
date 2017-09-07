import React, { Component } from "react";

import News from "./news";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      news: []
    };
  }
  componentDidMount() {
    this.fetchNews();
  }

  async fetchNews() {
    const getData = await fetch(this.props.value)
      .then(response => response.json())
      .then(data =>
        this.setState({
          news: data.articles
        })
      );
    console.log(this.state.news);

    return getData;
  }
  render() {
    return (
      <div className="containerDiv">
        <div style={{ textAlign: "center" }}>
          {this.state.news.map(news => <News value={news} />)}
        </div>
      </div>
    );
  }
}

export default Main;
