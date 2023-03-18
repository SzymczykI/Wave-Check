import { useEffect, useState } from 'react'
import { fetchData } from '../utils/dataFetcher';

const Map = () => {

    const [maxWaveHeight, setMaxWaveHeight] = useState(0)
    const lat = 71.555;
    const lon = 48.619;

    useEffect(() => {
   fetchData(lat, lon)
   .then(res => setMaxWaveHeight(res))
   .catch(err => console.log(err))
    }, [])

    console.log(maxWaveHeight)
    
  return (
    <div>Map</div>
  )
}

export default Map