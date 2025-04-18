import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 10;
  country = '';
  state = {
    progress: 0,
  }
  setProgress = (progress) =>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <LoadingBar height={3} color="#f11946" progress={this.state.progress}/>
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key='general' country={this.country} category='general'/>}/>
            <Route path="/general" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key='general' country={this.country} category='general'/>}/>
            <Route path="/business/" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key='business' country={this.country} category='business'/>}/>
            <Route path="/entertainment" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key='entertainment' country={this.country} category='entertainment'/>}/>
            <Route path="/health" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key='health' country={this.country} category='health'/>}/>
            <Route path="/science" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key='science' country={this.country} category='science'/>}/>
            <Route path="/sports" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key='sports' country={this.country} category='sports'/>}/>
            <Route path="/technology" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key='technology' country={this.country} category='technology'/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

