import React from 'react';
import ReactDOM  from 'react-dom'  //Don't give {} to ReactDOM

function PortalDemo() {
    return ReactDOM.createPortal(                //In return statement we need to give ReactDOM.createPortal
        <h3>Portal Demo</h3>,
        document.getElementById("portal-root")
    ) 
}

export default PortalDemo
