import React,{useState} from 'react';
import './Publish.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CropSquareIcon from '@material-ui/icons/CropSquare';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faSquare} from "@fortawesome/free-solid-svg-icons";
import Navbar from './Navbar'


const Publish=(props)=>{
   // const[dt,setDt]=useState([]);
    console.log(props.location.data)
    const A=props.location.data
    //setDt([...dt,A])

    if (A===undefined||A.length===0)
    return (
      <div className="publish__full">
         <Navbar/>
         <h3>There is no question saved</h3>
      </div>
    )
    
    else{
      
      return (
    
      <>
      <div style={{display:'flex',justifyContent:'center',padding:'20px'}}>
         <Navbar/>
      </div>
      <h3 style={{display:'flex',justifyContent:'center',padding:'20px'}}>All Questions</h3>
     { A.map((object,i)=>{ 
      //const [object]=x
    
   
    return (
      <>
        <div className="publish__full">
        
          <div className="publish__square">
            <div className="obj__question">{object.question}</div>
            <h5>Options</h5>
            {/* <p><FontAwesomeIcon className='square' icon={faSquare}/> 
               {object.options.option1}</p> 

            <p>{object.options.option3?<FontAwesomeIcon className='square' icon={faSquare}/> 
            :<FontAwesomeIcon className='square' icon={faCircle}/>}
               {object.options.option2}</p> */}
           {object.options.option5!==""?
            (<>
            <p><FontAwesomeIcon style={{color:'white',borderRadius:'50%',border:'1px solid black'}}icon={faCircle}/>   {object.options.option5}</p> 
            <p><FontAwesomeIcon style={{color:'white',borderRadius:'50%',border:'1px solid black'}} icon={faCircle}/>   {object.options.option6}</p>
           
            </>)

            :
            (<>
            <p><FontAwesomeIcon style={{color:'white',border:'1px solid black'}} icon={faSquare}/>  {object.options.option1}</p> 
            <p><FontAwesomeIcon style={{color:'white',border:'1px solid black'}} icon={faSquare}/>   {object.options.option2}</p>
            <p><FontAwesomeIcon style={{color:'white',border:'1px solid black'}} icon={faSquare}/>   {object.options.option3}</p> 
            <p><FontAwesomeIcon style={{color:'white',border:'1px solid black'}} icon={faSquare}/>   {object.options.option4}</p>
            </>)} 
          </div> 
         
         
        </div>
      </>
    )
    
    })
    
  } 
  <button style={{marginLeft:'700px' , marginTop:'50px'}}className="btn__survey">Confirm</button>  
   </>  
  )
   
 }

  
} 

export default Publish;