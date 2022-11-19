import axios from 'axios'
import {isError, useQuery} from 'react-query'
    
const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}
function RQSuperHeroesPage() {
   const {isLoading,data,isError,error} = useQuery('super-heroes',fetchSuperHeroes,{
      staleTime:30000, // in 30s there is no request comes in network tab in browser. in this case isLoading , isFetching are both false
   })
    
    if (isLoading) {
        return <h2>Loading...</h2>
    }
    if (isError) {
        return <h2>{error?.message}</h2>
    }

  return (
    <>
     <h2>RQ Super Heroes Page</h2>
      {data?.data?.map(hero => {
        return <div key={hero?.id}>{hero?.name}</div>
      })}
    </>
  )
}

export default RQSuperHeroesPage