import React, { useState} from "react";
import {Accordion} from 'reactstrap';
import Karakter from "./Karakter";
  
  export default function Karakterler(props){
    const{karakterler}=props;
    

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
      if (open === id) {
        setOpen();
      } else {
        setOpen(id);
      }
    };
  
    return (
      <div>
        <Accordion open={open} toggle={toggle}>
          
        {
        karakterler.map((karakter,index)=>(
          <Karakter key={index} karakter ={karakter} index={index} />
        )
        )
      }
        </Accordion>
      </div>
    );
  }
  
 



  