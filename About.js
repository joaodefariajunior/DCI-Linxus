import React from 'react';

import { render } from '@testing-library/react';





 function About() {
  

 



const creators =[
  {
    "id":"1",
    "image":require("../../terno pb.png"),
    "name":"Joao de Faria Junior",
    "profession":"FullStack Web Developer"
  },
  {"id":"2",
    "image":require("../../joker.jpeg"),
    "name":"Julia Pim",
    "profession":"FullStack Web Developer"},

    {
      "id":"3",
      "image":require("../../joker.jpeg"),
      "name":"Aghyad",
      "profession":"FullStack Web Developer"
    },
  ]

  


  const renderCreators=(creators,id)=>{
   
    return ( 
    
        <div className="flexxo" key={creators.id}>
         <img alt="creat"className="foto"src={creators.image} />
         <h2 className="name">{creators.name}</h2>
         <h3 className="profession">
           {creators.profession} </h3>
           </div>
     
     


    );
}; return <div className="creators">{creators.map(renderCreators)}</div>
} 

export default About;
