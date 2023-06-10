import React, {useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addMovie } from '../../store/Reducer'
import movieAPI from '../../api/movie'
import { APIKEY } from '../../constant'
export default function Home() {

    const dispatch = useDispatch()
    const [searchKey, setSearchKey] = useState("")

    useEffect(()=>{
        const fetchMovies = async () => {
            const res = await movieAPI.get(`?apikey=${APIKEY}&s=${searchKey}&type=movie`)
            console.log("response::: ", res)
            dispatch(addMovie(res.data.Search))
        }

        fetchMovies()
    },[])

  return (
    <div>Home</div>
  )
}
