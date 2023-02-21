import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log('+ Pure Component +')
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComp

/* My Learning:
    => this will render only one time, u can see the difference in the console , this is bcz it implements shouldComponentUpdate method default


*/
