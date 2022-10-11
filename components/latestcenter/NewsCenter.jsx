import React,{useState} from 'react'
import data from './data'
import RightSticky from './RightSticky'

const LatestBelow = () => {
    const [elements,setElements] = useState(3)
    const loadMore = ()=>{
        setElements(elements + elements)
        console.log("load")

    }
    const slice = data.newsData.slice(0,elements)

  return (
    <>
    <div className='latest-center'>
        <div className="center-container">
            <div className="left-container">
            {slice.map((item,index)=>{

return(
<div className="left-block" key={item.id}>
    <div className="left-img">
        <img src={item.img} alt="" />
    </div>
    <div className='left-category'>
        {item.category}
    </div>
    <div className='left-title'>
    {item.title}
    </div>
    <div className='left-desc'>
    {item.description}
    </div>
    <div className='left-span-below'> 
        
        <div>
            <img  src={item.spanImg} alt="" /> 
        
        </div>
        <div>
            <span>{item.spanDesc} </span>
        </div>
    </div>
</div>        
)   
})}          
    
    <button 
            className='load' 
            onClick={()=> loadMore()
            }
        >
            Load More
        </button>
            </div>
            <RightSticky/>
        </div>
    </div>
    </>
  )
}

export default LatestBelow
