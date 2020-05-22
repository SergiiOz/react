import React from 'react'
import preloader from './../../../assets/images/preloader.svg'

const Preloader = () => {
    return(
        <div style={{width: '40px'}}>
            <img src={preloader} alt='loader' />
        </div>
    )
}

export default Preloader;