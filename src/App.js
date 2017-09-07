import React, { Component } from "react";
import API_KEY from "./keys/keys";
import Main from "./components/main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header";

const URL = `https://newsapi.org/v1/articles?source=techcrunch&apiKey=${API_KEY}`;
const URL_ABC = `https://newsapi.org/v1/articles?source=abc-news-au&sortBy=top&apiKey=${API_KEY}`;
const URL_BBC_SPORT = `https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=${API_KEY}`;
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />

            <Route
              exact={true}
              path="/"
              render={props => <Main {...props} value={URL} />}
            />
            <Route
              exact={true}
              path="/abc"
              render={props => <Main {...props} value={URL_ABC} />}
            />
            <Route
              exact={true}
              path="/sports"
              render={props => <Main {...props} value={URL_BBC_SPORT} />}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
