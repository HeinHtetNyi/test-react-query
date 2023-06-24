import SuperHerosServices from "../services/superheros-services";
import { SuperHeroData } from "../types/superheros-types";
import Layout from "./Layout/Layout";
import { useQuery } from "react-query";

const SuperHeros = () => {
    const { data, isLoading, isError, error, refetch } = useQuery<SuperHeroData[], Error>(
        "superheros", 
        SuperHerosServices.getSuperHerosData,
        {
            // cacheTime: 5000, // store data in cache only for 5sec, default is 5min
            // staleTime: 3000, // fresh for 30s and then stale, default is 0
            // refetchInterval: 2000, // fetch the data every 2sec, default is false
            // refetchIntervalInBackground: true, // fetch the data even though we are not seeing this browser
            // enabled: false, // use together with refecth for manually refetch data
            // select: (data) => { // use for extracting or tranforming data structure
            //     const names = data.map(hero => hero.name)
            //     return names
            // }
        }
    );
      

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>{error.message}</div>
    }

    return (  
        <Layout>
            <h1>Super Heros Page</h1>
            {/* <button onClick={() => refetch()}>Fetch</button> */}
            <ol>
                {
                    data && data.map((hero: SuperHeroData) => <li>{hero.name}</li>)
                }
            </ol>
        </Layout>
    );
}
 
export default SuperHeros;