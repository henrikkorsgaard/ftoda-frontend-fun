import React from "react";
import { useQuery, gql } from "@apollo/client";
import './App.css';

const CASE_QUERY = gql`
{
  sag {
    id, titel, afstemninger {id, konklusion}
  }
}

`;

function App() {
  const { data, loading, error } = useQuery(CASE_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <div>
      <h1>Sager i folketinget</h1>
      <ul>
        {data.sag.map((s) => (
          <li key={s.id}>{s.titel}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
