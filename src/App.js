import React, { useState } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

// App component: The main component that sets up the routing and renders the NavBar and News components.
const App = () => {
  // Access the news API key from environment variables.
  const apiKey = process.env.REACT_APP_NEWS_API;
  // State to manage the number of news articles per page.
  const [pageSize, setPageSize] = useState(10);
  // State to manage the selected country for news.
  const [country, setCountry] = useState('');
  // State to manage the selected language for news (currently not used in the provided News component).
  const [language, setLanguage] = useState('');
  // State to manage the progress of the top loading bar.
  const [progress, setProgress] = useState(0);

  return (
    <div>
      {/* BrowserRouter enables navigation within the application without page reloads. */}
      <BrowserRouter>
        {/* NavBar component: Displays the navigation links and country selection. */}
        <NavBar setLanguage={setLanguage} setCountry={setCountry}/>
        {/* LoadingBar component: Displays a progress bar at the top of the page. */}
        <LoadingBar height={3} color="#f11946" progress={progress}/>
        {/* Routes component: Defines the different routes and the components to render for each route. */}
        <Routes>
          {/* Default route for the general news category. */}
          <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key='general' country={country} language={language} category='general'/>}/>
          {/* Route for the general news category. */}
          <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key='general' country={country} language={language} category='general'/>}/>
          {/* Route for the business news category. */}
          <Route path="/business/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key='business' country={country} language={language} category='business'/>}/>
          {/* Route for the entertainment news category. */}
          <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key='entertainment' country={country} language={language} category='entertainment'/>}/>
          {/* Route for the health news category. */}
          <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key='health' country={country} language={language} category='health'/>}/>
          {/* Route for the science news category. */}
          <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key='science' country={country} language={language} category='science'/>}/>
          {/* Route for the sports news category. */}
          <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key='sports' country={country} language={language} category='sports'/>}/>
          {/* Route for the technology news category. */}
          <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key='technology' country={country} language={language} category='technology'/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;