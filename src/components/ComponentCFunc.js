import React from 'react'
import { ChannelContext, UserContext } from '../App'

function ComponentCFunc() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    functional => {
                        return (                            // This return is very imp, this returns the second consumer too
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return <span> {functional} {channel} </span>
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentCFunc