import React from 'react';

const Weather = (props)=>{
    
        return(
            <div className='container'>
                <div className='cards py-8'> 
                <h1>{props.city},{props.country} </h1>
                <h5 className='py-4'> 
                <i className={`wi ${props.weatherIcon} display-1`}></i>
                </h5>
                {props.celsius ? (
                    <h1 className='py-2'>{props.celsius}&deg;</h1>
                ) :null}
              
                {minmaxTemp(props.temp_min,props.temp_max)}

                <h5 className='py-4'>{props.description}</h5>
                </div>
 
            </div>

        )
    }

 
 function minmaxTemp (min, max){
     if(min && max){
     return(
         <h3> 
             <span className='px-4'>{min}&deg;</span>
             <span className='px-4'>{max}&deg;</span>
         </h3>
     )
     }
 }
export default Weather