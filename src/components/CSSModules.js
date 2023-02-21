import React from 'react'
import styles from './CSSModules.module.css'

function CSSModules() {
    return (
        <div>
            <h3 className={styles.success}> Success</h3>
             <h3>Error</h3>  {/* this has styling properties because of parent compenent app */}
        </div>
    )
}

export default CSSModules
