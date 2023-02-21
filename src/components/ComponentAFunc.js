import React from 'react'
import { ChannelContext, UserContext } from '../App'
// import ComponentCFunc from './ComponentCFunc'
import ComponentBFunc from './ComponentBFunc'


function ComponentAFunc() {
    return (
        <UserContext.Provider value={'Functional'}>
            <ChannelContext.Provider value={'Component'}>
                <ComponentBFunc />
            </ChannelContext.Provider>
        </UserContext.Provider>
    )
}

export default ComponentAFunc