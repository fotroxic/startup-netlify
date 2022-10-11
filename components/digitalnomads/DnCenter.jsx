import axios from 'axios'
import React, {Component} from "react";
import Link from "next/link";
import RightSticky from '../latestcenter/RightSticky';


const api = axios.create({
    baseURL: 'http://localhost:800/dn'
  })

export default class DnCenter extends Component{

    state = {
        dn:[]
      }
  
      constructor() {
        super();
        api.get('/').then(res =>
          {
              console.log(res.data)
              this.setState({dn:res.data})          
          })
      }

render(){
  return (
    <>
    <div className='latest-center'>
        <div className="center-container">
            <div className="left-container">
             {this.state.dn.map(dn=>
                
                <div className="left-block" key={dn.id}>
                <div className="left-img">
                    <img src={dn.dnImg} alt="" />
                </div>
                <div>
                    <div className='left-category'>
                    <p>{dn.category}</p>
                </div>
                <div className='left-title'>
                    <h2>{dn.dnTitle}</h2>
                </div>
                <div className='left-desc'>
                   <p>{dn.dnDesc}</p>
                </div>
                <div className='left-span-below'> 
                    
                    <div>
                        <img  src={dn.creatorLogo} alt="" /> 
                    </div>
                    <div>
                        <span>{dn.dnCreator} </span>
                   </div>
                </div> 
             </div>        
        </div> 
   
                
                )}
        
            </div>
            <RightSticky />
         

        </div>
    </div>
    </>
    
  )
}

}