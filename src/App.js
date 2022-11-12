import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Card from './components/card';
import data1 from "./components/data";



export default function App(){
  const cards=data1.map((item)=>{
    return(
      <Card
      key={item.id}
      {...item}
      />
    )
  })
  return(
    <div>
      <Navbar />
      <Hero />
      <section className="cardlist">{cards}</section>
    </div>
  )
}