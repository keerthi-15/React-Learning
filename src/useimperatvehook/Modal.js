import React from 'react'
import './Modal.css'
/* To use font awesome make sure you import them */

function Modal(props) {
    return (
        props.isOpen ?
            <div className='card'>
                <div>
                    <span>
                        <b>Title</b>
                        <span className='closeIcon'><i class="fa fa-times"></i></span>
                    </span>
                    <br />
                </div>
                <br />
                <div>Do you confirm</div>
                <br />
                <span>
                    <button>YES</button> &nbsp;
                    <button>NO</button>
                </span>
            </div> : null
    )
}

export default Modal