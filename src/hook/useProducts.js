import { useEffect, useState } from "react"

const useProducts = () => {
    const [product, setProduct] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    return [product, setProduct]
}

export default useProducts