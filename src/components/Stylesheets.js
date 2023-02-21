import React from 'react'
import './styles.css'

function Stylesheets(props) {
    // const classname= props.primary ? 'style' : ''
    const classname= props.primary && 'style'
    return (
        <div>
            {/* <p className='style'>Style sheet </p> */}
            {/* <p className={` style font-xl` } >Styles using backtick</p> // assinging 2 classnames in one tag */}
            <p className={ `${classname} font-xl`} > Rendering a particular Element </p>
            <p className={classname  , 'font-xl'} > Rendering without Backtick </p> 
        </div>
    )
}

export default Stylesheets

/* <div className={[this.state.className, this.props.content.divClassName].join(" ")}>  => need to learn */
