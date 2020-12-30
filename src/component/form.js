import React from 'react';

const Form = (props) =>{
    return(
        <div className='container'>

            <div>{props.error?error(): null}</div>

            <div className='row'>
                <div className='col-md-3  offset-md-2'>
                    <input 
                    type='text'
                    className='form-control'
                    placeholder='city'
                    name='city' 
                    id="city"
                    autoComplete='off' />
                </div>
                <div className='col-md-3'>
                <input 
                type='text' 
                className='form-control'
                name='country'
                id= "country"
                placeholder='country'
                autoComplete='off' />
                </div>
                <div className='col-md-3 mt-md-0 text-md-left'>
                     <button 
                     className='btn btn-warning ' 
                     onClick={props.loadWeather}> 
                     Get Weather </button>
                </div>

            </div>

        </div>
    )

}

function error(){
    return(
        <div className ="alert alert-danger mx-5" role='alert'>Please Enter City and Country</div>
    )
}
export default Form