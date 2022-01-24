import { useState, useEffect } from 'react';
import { getGif } from '../components/helpers/getGifs';

export const useFetchGifs = (category) =>{
    const [first, setfirst] = useState({
        data: [],
        loading: true
    }); 

    useEffect(() => {
     getGif(category).then (
          imgs => setfirst({
              data: imgs,
              loading: false
          })
       );
     }, [category]);

    
    return first;
}

