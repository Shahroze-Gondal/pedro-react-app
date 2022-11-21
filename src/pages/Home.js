import React from 'react';
import Axios  from 'axios';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
    const {data} = useQuery(['cat'], ()=>{
        return Axios.get("https://catfact.ninja/fact").then((res)=>{
        console.log(res.data);
        return res.data;    
        });
    });
      return (
    <div>
      <h1>This is the home page and user is {data?.fact}</h1>
    </div>
  )
}

export default Home
