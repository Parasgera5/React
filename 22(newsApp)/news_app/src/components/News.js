// #RB#*2ik!Z#84b.
// 39132996eab44b32b4920c11b3ae03cc
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  // constructor(){
  //   articles = []
  //   super();
  //   console.log("Hello Hye Bye Bye - This is constructor from NewsItem component");
  //   this.state = {
  //     articles: this.articles,
  //     loading: false
  //   }
  constructor(props) {
    super(props);
    console.log("Hello Hye Bye Bye - This is constructor from News component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,

    };


  }

  async componentDidMount() { // first of all constructor will run then render and then this component did mount will run
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=39132996eab44b32b4920c11b3ae03cc&page=1&pageSize=20";
    let data = await fetch(url); // fetch api returns a promise
    // console.log(data); // it will be the promise => we can parse into json or convert into text
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
  }

  handlePrevClick = async () => {
    console.log("Previous")

    // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=39132996eab44b32b4920c11b3ae03cc&page=${this.state.page - 1}`;
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=39132996eab44b32b4920c11b3ae03cc&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url); // fetch api returns a promise
    // console.log(data); // it will be the promise => we can parse into json or convert into text
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }
  handleNextClick = async () => {
    console.log("Next")

    if(this.state.page + 1> Math.ceil(this.state.totalResults/20)){
      
    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=39132996eab44b32b4920c11b3ae03cc&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url); // fetch api returns a promise
      // console.log(data); // it will be the promise => we can parse into json or convert into text
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        {/* {this.state.articles.map((element) => {console.log(element)})} */}
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>

            )
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News