import React from "react";
import { useQuery, gql } from "@apollo/client";
import './App.css';
import Aktor from "./components/Aktor"

const Q = gql`
{
  aktor(type:"Person"){id,type, navn, biografi}
}
`;


function App() {

  const { data, loading, error } = useQuery(Q);
  
  if(error) {
    return <pre>{error.message}</pre>
  }

  if (loading) return "Loading...";

  return (
    
    <div>
      <h1>Medlemmer af Folketinget</h1>
      <ul>
        {data.aktor.map((a) => (
          <Aktor key={a.id} name={a.navn} bio={a.biografi} />
        ))}
      </ul>
    </div>
  );
}

export default App;
