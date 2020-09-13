import React,{useState,useEffect} from 'react';
import { MDBCol} from "mdbreact";
import {BrowserRouter as Router, Switch, Route ,Link,Redirect} from "react-router-dom";
import { useHistory } from "react-router-dom";
import './Dropdown.css';
import Navbar from './Navbar';



const Dropdown=(props)=>{
  const [value,setValue]=useState(0);
  const [list,setlist]=useState(1);
  const [question,setQuestion]=useState();
  const [options,setOptions]=useState({option1:'',option2:'',option3:'',option4:'',option5:"",option6:''});
  const [data,setData]=useState([]);
//  const [counter,setCounter]=useState(0)

  const addition=()=>{
    console.log(options.option1)
    if (options.option1==="" && list===1 ){
      alert('You need to fill first')
    }
    else if (options.option2==="" && list===2 ){
      alert('You need to fill first')
    }
    else if (options.option3==="" && list===3){
      alert('You need to fill first')
    }
    else if (options.option4==="" && list===4){
      alert('You need to fill first')
    }
    else
    setlist(list+1)

  }
  const subtract=()=>{
    setlist(list-1)
  }
  const multiSubmit=(e)=>{
    e.preventDefault();
    if (options.option4==="" && list===4){
      alert('You need to fill first')
    }
    else{
    const C={question,options}
    setData([...data,C])
    setlist(1)
    setValue(3)

    setOptions({option1:'',option2:'',option3:'',option4:''})
    setQuestion('')
    }
    
  }
  const changeOptions1=(e)=>{
    setOptions({...options,option5:e.target.value})
  }
  const changeOptions2=(e)=>{
    setOptions({...options,option6:e.target.value})
  }

  const singleSubmit=(e)=>{
    e.preventDefault();
    if (options.option5===""||options.option6===""){
      alert('You need to fill first')
    }
    else{
    const C={question,options}
    setData([...data,C])
    setlist(1)
    setValue(3)
    
    setOptions({option1:'',option2:'',option3:'',option4:'',option5:'',option6:''})
    setQuestion('')
    }
    
  }

   const changeOptions=(e)=>{
     if (list==1)
     setOptions({...options,option1:e.target.value})
     if (list==2)
     setOptions({...options,option2:e.target.value})
     if (list==3)
     setOptions({...options,option3:e.target.value})
     if (list==4)
     setOptions({...options,option4:e.target.value})
    
   }

 
 const A=new Array(list).fill(1)
 console.log(list)

  

  return(
   
  <div className="dropdown__body">
    <div style={{padding:'20px'}}>
      <Navbar/>
    </div>

    {value==3?
    (<MDBCol size="4"> 
        <select className="browser-default custom-select" onChange={(e)=>setValue(e.target.value)}>
          <option value="0" >Choose your option</option>
          <option value="1" >Multi-Select</option>
          <option value="2" >Single-Select</option>
         
        </select>
     </MDBCol>):""}

    {value==0||value==1 ||value==2?
      (<MDBCol size="4"> 
        <select className="browser-default custom-select" onChange={(e)=>setValue(e.target.value)}>
          <option value="0" >Choose your option</option>
          <option value="1" >Multi-Select</option>
          <option value="2" >Single-Select</option>
         
        </select>
       </MDBCol>):""}




      {value==1?
      (<>
      <form >
        {/* <input  className="input__drop" placeholder="Enter your Question"   onChange={e=>setQuestion(e.target.value)} />
        <i class="fa fa-question" aria-hidden="true"></i> */}
        <div className="input__subadd">
              <i class="fa fa-question" aria-hidden="true"></i>
              <input placeholder="Enter your Question"  onChange={e=>setQuestion(e.target.value)}  /> 
        </div>
        <h3>Options</h3>
      </form> 
        
      {A.map((x,i)=>{return(
          <> 
            <div className="input__subadd">
              <input placeholder="Enter your options"  onChange={changeOptions} />
              <button onClick={addition}><i class="fa fa-plus" aria-hidden="true"></i></button>
              <button onClick={subtract}><i class="fa fa-minus" aria-hidden="true"></i></button>
            </div>
          </>
        )})}
      
    
      {A.length>=4?
      (  <>
   
      <button className="btn__survey" onClick={multiSubmit}>Add Question</button>
 
        <Link to={{pathname:"/publish" ,   data: data}} style={{ textDecoration: 'none' }}>
            <button className="btn__survey">Publish</button>
        </Link>

      </>
       ):""}
      {/* </form> */}
       </>)
      :''}
       

      
      {value==2?
      (<>
       <form >
       <div className="input__subadd">
              <i class="fa fa-question" aria-hidden="true"></i>
              <input placeholder="Enter your Question"   onChange={e=>setQuestion(e.target.value)}  /> 
        </div>
        <h3>Options</h3>
      </form> 

      
     
        <div className="input__subadd">
          <input placeholder="Options like Yes"  onChange={changeOptions1} />
          <button ><i class="fas fa-plus"></i></button>
          <button ><i class="fas fa-minus"></i></button>
        </div>

        <div className="input__subadd">
          <input placeholder="Options like No"  onChange={changeOptions2} />
          <button > <i class="fas fa-plus"></i></button>
          <button ><i class="fas fa-minus"></i></button>
        </div>
            
        {/* )})} */}
     
     
        
          <button className="btn__survey" onClick={singleSubmit}>Add Question</button>
          <Link to={{pathname:"/publish" ,  data: data }} style={{ textDecoration: 'none' }}>
             <button className="btn__survey">Publish</button>
          </Link>
      
        {/* </>):""} */}

      {/* </form> */}
    
      
        </>):''}
    </div>
    
    )
}
export default Dropdown;


