import React, { useEffect, useRef, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newsNumber, setNewsNumber] = useState(0);
  const [totalArticles, setTotalArticles] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const isFirstRender = useRef(true); // Ref to track the first render

  const capatalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

    // document.title = `NewsJunk - ${capatalizeFirstLetter(props.category)}`;

  const badgeColor = () => {
    switch (props.category) {
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

  const updateNews = async () => {
    props.setProgress(10);
    let url = `http://api.mediastack.com/v1/news?access_key=${props.apiKey}&categories=${props.category}&limit=${props.pageSize}&offset=${newsNumber}&languages=${props.language}&countries${props.country}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.data);
    setTotalArticles(parsedData.total);
    setNewsNumber(props.pageSize);
    setLoading(false);
    props.setProgress(100);
  }

  const fetchMoreData = async () => {
    if (articles.length >= totalArticles || articles.length === 30) {
      setHasMore(false);
      return;
    }
    let url = `http://api.mediastack.com/v1/news?access_key=${props.apiKey}&categories=${props.category}&limit=${props.pageSize}&offset=${newsNumber + props.pageSize}&languages=${props.language}&countries${props.country}`;
    setNewsNumber(newsNumber+props.pageSize);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.data));
    setTotalArticles(parsedData.total);
  };

  const debouncedUpdateNews = debounce(updateNews, 500);

useEffect(() => {
  debouncedUpdateNews(); // Call the debounced function
  document.title = `NewsJunk - ${capatalizeFirstLetter(props.category)}`;
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [props.category, props.language, props.country]);

    return (
      <>
        <h1 className="text-center" style={{'margin': '2em 0 0.5em'}}>NewsJunk - Top {capatalizeFirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element, index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.image}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.published_at}
                      source={element.source}
                      badgeColor={badgeColor()}
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

export default News;
