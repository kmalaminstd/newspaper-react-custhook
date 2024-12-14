import { useEffect, useState } from "react"


function useAllNewsData(url){

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        const getData = async ()=>{
            try{
                const response = await fetch(url)
                if(!response.ok){
                    throw new Error("Network response was not successfull")
                }
                const result = await response.json()
                setData(result)
            }catch(err){
                setError(err.message)
            }finally{
                setLoading(false)
            }
        }
    
        getData()
        
    },[url])


    return {
        data,
        error, 
        loading
    }

}

export default useAllNewsData