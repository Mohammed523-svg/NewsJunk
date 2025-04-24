import React, { useState } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [pageSize, setPageSize] = useState(10);
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState('en');
  const [progress, setProgress] = useState(0);
  
    return (
      <div>
        <BrowserRouter>
          <NavBar setLanguage={setLanguage} setCountry={setCountry}/>
          <LoadingBar height={3} color="#f11946" progress={progress}/>
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key='general' country={country} language={language} category='general'/>}/>
            <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key='general' country={country} language={language} category='general'/>}/>
            <Route path="/business/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key='business' country={country} language={language} category='business'/>}/>
            <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key='entertainment' country={country} language={language} category='entertainment'/>}/>
            <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key='health' country={country} language={language} category='health'/>}/>
            <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key='science' country={country} language={language} category='science'/>}/>
            <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key='sports' country={country} language={language} category='sports'/>}/>
            <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key='technology' country={country} language={language} category='technology'/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }

export default App;

