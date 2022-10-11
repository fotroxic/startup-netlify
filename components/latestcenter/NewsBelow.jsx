import axios from 'axios'
import React, {Component} from "react";
import Link from "next/link";


const api = axios.create({
    baseURL: 'http://localhost:800/news'
  })


  export default class NewsBelow extends Component{
    state = {
        news:[]
      }
  
      constructor() {
        super();
        api.get('/').then(res =>
          {
              console.log(res.data)
              this.setState({news:res.data})          
          })
      }


    render(){
  return (
    <div className='lb-container'> 
  
  
    <div className="lb-box">
    {this.state.news.map(news=>
    <div className="lb-block" key={news.id}>
                <div className="lb-img">
                    <img src={news.newsImg} alt="" />
                </div>
                <div className='lb-category'>
                    <p>{news.category}</p>
                </div>
                <div className='lb-title'>
                     <h2>{news.newsTitle}</h2>
                </div>
                <div className='lb-desc'>
                    <p>{news.newsDesc}</p>
                </div>
                <div className='lb-span-below'> 
                    
                    <div>
                        <img  src={news.creatorLogo} alt="" /> 
                    </div>
                    <div>
                        <span>{news.newsCreator} </span>
                    </div>
                </div>
        </div>
    )}
      </div>
   </div>
  )
}
}

