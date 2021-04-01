import React from 'react'
import gif from './loaderBlack.mp4'
import './loader.css'


export default function Loader() {
    return (
        <div id='loaderBg'>
            <video  id="myVideo" autoPlay loop muted >
                <source src={gif} type="video/mp4" />
            </video>
        </div>
    )
}
