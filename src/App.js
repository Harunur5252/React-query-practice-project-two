import { Routes,Route,Link } from "react-router-dom";
import {
   QueryClient,
   QueryClientProvider,
 } from 'react-query'
 import { ReactQueryDevtools } from 'react-query/devtools'
import HomePage from "./components/Home.page";
import RQSuperHeroesPage from "./components/RQSuperHeroes.page";
import SuperHeroesPage from "./components/SuperHeroes.page";

// Create a client
const queryClient = new QueryClient()

function App() {


  return (
   <QueryClientProvider client={queryClient}>
      <div>
         <nav>
            <ul>
            <li>
               <Link to='/'>Home</Link>
            </li>
            <li>
               <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
               <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
            </ul>
         </nav>

         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/super-heroes" element={<SuperHeroesPage />} />
            <Route path="/rq-super-heroes" element={ <RQSuperHeroesPage />} />
         </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  );
}

export default App;
