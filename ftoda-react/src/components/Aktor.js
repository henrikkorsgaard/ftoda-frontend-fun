import React from "react";
import { useQuery, gql } from "@apollo/client";

const Q = gql`
{
  aktor(type:"Person"){id, navn, titel, parti}
}
`;

// next todo:
// make the aktorlist
// 0. Make a stats pages
// 1. A tabel with columns
// 2. Searchable (similar to grammar)


function AktorList(){
    const { data, loading, error } = useQuery(Q);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
      <div>
        <h1>Medlemmer af Folketinget</h1>
        <ul>
          {data.aktor.map((a) => (
            <AktorLink key={a.id} id={a.id} navn={a.navn} titel={a.titel} parti={a.parti} />
          ))}
        </ul>
      </div>
    );
}

function AktorLink(props){
    return (
        <li>
        <a className="aktor" href={"aktor/" + props.navn + "-" + props.id}>{props.navn}</a>: {props.titel} - {props.parti} 
        </li>
    );
}

function AktorPage(){
  
    let uriParts = window.location.href.split("-")
    let id = uriParts[uriParts.length-1]

    const Q = gql`
    {
      aktor(id:${id}){navn, titel, parti, billede, uddannelse, personligt}
    }`;

    const { data, loading, error } = useQuery(Q);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    let aktor = data.aktor[0]
    
    return (
        <div>
        <h2><a href="/">Tilbage til oversigten</a></h2>
            <div>
                <h1>{aktor.navn}</h1>
                <h4>{aktor.titel}</h4>
                <img width="20%" src={aktor.billede} />
                <p>{aktor.personligt}</p>
                <h4>Uddannelse</h4>
                <ul>
                    {aktor.uddannelse.map((u)=>{
                        return <li key={u}>{u}</li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export {
    AktorLink,
    AktorPage,
    AktorList,
}