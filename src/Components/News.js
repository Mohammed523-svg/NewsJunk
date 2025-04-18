import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  articles = [];

  static defaultProps = {
    country: 'us',
    pageSize: 8,
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  capatalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalArticles: 0,
      hasMore: true
    };
    document.title = `NewsJunk - ${this.capatalizeFirstLetter(this.props.category)}`;
  }

  badgeColor(){
    switch (this.props.category) {
      case "health":
        return "success";
        break;
      case "sports":
        return "primary";
        break;
      case "science":
        return "info";
        break;
      case "general":
        return "secondary";
        break;
      case "entertainment":
        return "info";
        break;
      case "business":
        return "warning";
        break;
      case "technology":
        return "dark";
        break;
      default:
        return "secondary";
        break;
    }
  }

  async updateNews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4a57f5d6fac849d6bf97a37e54e12d46&pageSize=${this.props.pageSize}&page=${
      this.state.page 
    }`;
    this.setState({loading: true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({ articles: parsedData.articles });
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({page: this.state.page - 1});
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({page: this.state.page + 1});
    this.updateNews();
  };

  fetchMoreData = async () => {
    if (this.state.articles.length >= this.state.totalArticles) {
      this.setState({ hasMore: false });
      return;
    }
  
    this.setState({page: this.state.page + 1});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4a57f5d6fac849d6bf97a37e54e12d46&pageSize=${this.props.pageSize}&page=${
      this.state.page 
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    
    this.setState({ articles: parsedData.articles });
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalArticles: parsedData.totalResults,
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center">NewsJunk - Top {this.capatalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element, index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                      badgeColor={this.badgeColor()}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
