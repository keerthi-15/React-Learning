import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    errorMessage: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                errorMessage: '',
                post: action.payload
            }
        case 'FETCH_FAILURE':
            return {
                ...state,
                loading: false,
                errorMessage: 'Something Went Wrong!!!!',
                post: {}
            }
        default:
            return state
    }
}

function DataFetchingTwo() {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts/2')
            .then((response) => {
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
            })
            .catch((error) => {
                dispatch({ type: 'FETCH_FAILURE' })
            })
    })
    return (
        <div>
            {state.loading ? 'Loading' : state.post.title}
            {state.errorMessage ? state.errorMessage : null}
        </div>
    )
}

export default DataFetchingTwo