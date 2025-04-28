import React, { useEffect, useRef, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

// News component: Fetches and displays news articles based on category and country.
const News = (props) => {
  // State variables to manage articles, loading state, current page, total articles, and whether there are more articles to load.
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalArticles, setTotalArticles] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  // Function to capitalize the first letter of a string.
  const capatalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  // useEffect hook to set the document title based on the category.
  useEffect(() => {
    document.title = `NewsJunk - ${capatalizeFirstLetter(props.category)}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.category]);

  // Function to determine the background color of the category badge.
  const badgeColor = () => {
    switch (props.category) {
      case "health":
        return "success";
      case "sports":
        return "primary";
      case "science":
        return "info";
      case "general":
        return "secondary";
      case "entertainment":
        return "info";
      case "business":
        return "warning";
      case "technology":
        return "dark";
      default:
        return "secondary";
    }
  }

  // Async function to fetch and update the news articles.
  const updateNews = async () => {
    props.setProgress(10); // Set progress to 10%
    // Construct the API URL with the provided API key, country, category, page size, and current page number.
    let url = `https://newsapi.org/v2/top-headlines?apiKey=${props.apiKey}&country=${props.country}&category=${props.category}&pageSize=${props.pageSize}&page=${page}`;
    setLoading(true); // Set loading to true before fetching data.
    let data = await fetch(url); // Fetch data from the API.
    props.setProgress(30); // Set progress to 30% after fetching.
    let parsedData = await data.json(); // Parse the JSON response.
    props.setProgress(70); // Set progress to 70% after parsing data.
    setArticles(parsedData.articles); // Update the articles state with the fetched articles.
    setTotalArticles(parsedData.totalResults); // Update the total number of articles.
    setLoading(false); // Set loading to false after data is loaded.
    props.setProgress(100); // Set progress to 100%.
  }

  // Async function to fetch more data for infinite scrolling.
  const fetchMoreData = async () => {
    // Check if all articles have been loaded. If so, set hasMore to false and return.
    if (articles.length >= totalArticles) {
      setHasMore(false);
      return;
    }
    // Construct the API URL for the next page.
    let url = `https://newsapi.org/v2/top-headlines?apiKey=${props.apiKey}&country=${props.country}&category=${props.category}&pageSize=${props.pageSize}&page=${page + 1}`;
    setPage(page + 1); // Increment the page number.
    let data = await fetch(url); // Fetch data for the next page.
    let parsedData = await data.json(); // Parse the JSON response.
    // Concatenate the new articles with the existing articles.
    setArticles(articles.concat(parsedData.articles));
    setTotalArticles(parsedData.totalResults); // Update the total number of articles.
  };

  // useEffect hook to call updateNews when the country prop changes.
  useEffect(() => {
    updateNews(); // Call the updateNews function to fetch initial data or when the country changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.country]); // Re-run the effect only when the 'country' prop changes.

  return (
    <>
      {/* Heading displaying the category of news */}
      <h1 className="text-center" style={{ 'margin': '2em 0 0.5em' }}>NewsJunk - Top {capatalizeFirstLetter(props.category)} Headlines</h1>
      {/* Display a spinner while loading is true */}
      {loading && <Spinner />}

      {/* InfiniteScroll component for lazy loading of news articles */}
      <InfiniteScroll
        dataLength={articles.length} // Total number of loaded items.
        next={fetchMoreData} // Function to call when more data needs to be loaded.
        hasMore={hasMore} // Boolean indicating if there are more items to load.
        loader={<Spinner />} // Component to display while loading more data.
      >
        <div className="container">
          <div className="row">
            {/* Map through the articles array and render each article using the NewsItem component */}
            {articles.map((element, index) => {
              return (
                // Each NewsItem is wrapped in a div with a column width of 4 on medium screens and a fade-in-staggered animation.
                <div className="col-md-4 fade-in-staggered" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                  <NewsItem
                    title={element.title} // Title of the news article.
                    description={element.content} // Content/description of the news article.
                    imageUrl={element.urlToImage} // URL of the image for the article.
                    newsUrl={element.url} // URL to the full news article.
                    author={element.author} // Author of the news article.
                    date={element.publishedAt} // Publication date of the article.
                    source={element.source.name} // Source of the news article.
                    badgeColor={badgeColor()} // Category badge color.
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