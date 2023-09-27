// Karakter bileşeniniz buraya gelecek
import React from "react";
import styled from "styled-components";
import {
    
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';

const Karakter =(props)=>{
    const{karakter,index}=props;
    
     const Box = styled.div`
     justify-content :space-between;
     display:flex;
     border: 1px solid black;
     width:40%;
     margin:2% auto;
     background-color:rgba(256,256,256,0.3);
     `

     const Name =styled.h2`
     color : black;
     `
     const BirthYear =styled.p`

     background-color:black;
     font-size: 2rem;
     color:black;
     border-radius : 5px;
     margin: 5px;
     padding: 3px;
     
     `
     ;
     return(
        <div>
            
          <AccordionItem>
            <AccordionHeader targetId={index}>
               <Box>
                <Name>{karakter.name}</Name>
                <BirthYear>{karakter.birthYear}</BirthYear>
             </Box>
             
             </AccordionHeader>
            <AccordionBody accordionId={index}>
             <p>
                Height: {karakter.height}

             </p>
             <p>
                Gender: {karakter.gender}

             </p>
            </AccordionBody>
          </AccordionItem>
        
        </div>
     )
     
    
}

export default Karakter;