import React from 'react'
import Loader from './spinner.gif'

const Spinner = () => {
    return (
        <div className="spinnerdiv">
            <img className="center-spinner" src={Loader} alt="Spinner" />
        </div> 
        
    )
}

export default Spinner
