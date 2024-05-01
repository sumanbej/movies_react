    import axios from "axios";


    const BASEURL= "https://api.themoviedb.org/3";

    const TMDB_TOKEN= import.meta.env.VITE_APP_TMDB_TOKEN;

    const headers= {
                Authorization: "bearer " + TMDB_TOKEN 
    }

    export const fetchDataFromApi= async (url, params) => {

        try {
            const {data} = await axios.get(
                    BASEURL+url, 
                {
                    headers,
                    params
                }
            );
            return data ;
        } catch (error) {
            console.log(err);
            return err;
        }

    }