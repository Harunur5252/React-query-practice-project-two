import axios from 'axios'
import {isError, useQuery} from 'react-query'
    
const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}
function RQSuperHeroesPage() {
//    const {isLoading,data,isError,error} = useQuery('super-heroes',fetchSuperHeroes,{
    // if components mount and window focus then run fetching data by these properties

    //   staleTime:30000, // in 30s there is no request comes in network tab in browser. in this case isLoading , isFetching are both false as no request comes.
    // refetchOnMount:true ,// data is fetched every time when component is mount if it is true but if it is false then after browser refresh comes then fetched data and then during route changed component is mount but not fetched data.
    // refetchOnWindowFocus:true, // automatically fetched/show data when data is updated from server if is true. But in this case highlighted is that when automatically refetching is paused then window loses focus and data not fetching.
    //  refetchInterval:3000 // the query automatically re-fetched/updated data after 3 second. it is true then automatically re-fetched data as soon as possible.But in this case highlighted is that when automatically refetching is paused then window loses focus and data not fetching.
    // refetchIntervalInBackground:true // window is not focus then its fetching data in background and always update client site data with server site when data updated.
//    })



const {isLoading,data,isFetching,isError,error,refetch} = useQuery('super-heroes',fetchSuperHeroes,{
    // depending on requirements we might have to fetch data based on a user event not when the component mounts.
    // how to fetch data using useQuery but only on click of a button. there are two steps.
    // first step : is to inform useQuery not to fire the get request when the components mount. use enable : false to do this.
    // second step : click to button then fetched data. It's time needed refetch method from useQuery.
    enabled:false
})




    
    if (isLoading || isFetching) { // if give isFetching then when data update from server then loading is show.
        return <h2>Loading...</h2>
    }
    if (isError) {
        return <h2>{error?.message}</h2>
    }

  return (
    <>
     <h2>RQ Super Heroes Page</h2>
     <button onClick={refetch}>Fetch Heroes</button>
      {data?.data?.map(hero => {
        return <div key={hero?.id}>{hero?.name}</div>
      })}
    </>
  )
}

export default RQSuperHeroesPage