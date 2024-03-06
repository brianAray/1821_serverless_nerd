import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AxiosExample() {
    const [data, setData] = useState([] as any);

    // add a request interceptor
    axios.interceptors.request.use((config) => {
        // modify the request config before sending
        config.headers.Authorization = 'Bearer your_token_here'
        return config
    }, (error) => {
        return Promise.reject(error)
    })

    // add a response interceptor
    axios.interceptors.response.use((response) => {
        // modify the response before resolving the promise
        return response;
    }, (error) => {
        // handle errors globally
        console.error(error);
        return Promise.reject(error);
    })

    useEffect(() => {
        axios.get("https://api.example.com/data")
            .then((response) => {
                // you do not need to convert it to a JS object
                // Axios does this automatically for you
                setData(response)
            })
            .catch((error) => {
                console.log(error)
            })
    },[])

  return (
    <div>AxiosExample</div>
  )
}

export default AxiosExample