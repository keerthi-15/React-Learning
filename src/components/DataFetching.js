import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching() {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => {
                setLoading(false)
                setPost(response.data)
                setErrorMessage('')
            })
            .catch((error) => {
                setErrorMessage('Something went wrong')
                setPost({})
                setLoading(false)
            })
    },[])
    return (
        <div>
            {loading ? 'loading' : post.title}
            {errorMessage ? errorMessage : null}
        </div>
    )
}

export default DataFetching