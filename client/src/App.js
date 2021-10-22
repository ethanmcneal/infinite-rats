import React, { useEffect, useState } from 'react';
import axios from 'axios'
import RatCard from './components/RatCard';
import './App.css'


export default function App () {
    const [rats, setRats] = useState([])
    const [page, setPage] = useState(2)

    useEffect(() => {
        getInitialRats()
    },[])

    const getInitialRats = async() => {
        try {
            let res = await axios.get('/api/rats?per=10')
            setRats(res.data)
        } catch (e) {
            console.error(e)
        }
    }

    const moreRat = async(page) => {
        try {
            let res = await axios.get(`/api/rats?page=${page}&per=10`)
            setRats(prevState => [...prevState, ...res.data])
            setPage(page => page + 1)
        } catch (error) {
            console.error(error)
        }
    }

   return( 
    <div style={styles.ratContainer}>
        <h1>Rats</h1>

        <div >
        {rats.map(rat => {
            return <RatCard rat={rat} key={rat.id}/>
        })}
        </div>
        <button onClick={() => moreRat(page)}>More Rat!</button>
    </div>)

}

const styles = {
    ratContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#444'
    }
}
    
