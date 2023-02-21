import React from 'react'
import FragmentColumn from './FragmentColumn'

function FragmentTable() {
    // const table={
    //     borderStyle:'solid'
    // }
    return (
        <table style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
        {/*  <table style={table}> */}
            <th>First Name</th> 
            <th>Second Name</th>
            <tbody>
                <tr>
                    <FragmentColumn />
                </tr>
            </tbody>
        </table>
    )
}

export default FragmentTable
