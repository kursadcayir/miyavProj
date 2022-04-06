
import { useEffect, useState } from "react";
import {getDataFromItunes} from "../../service/dataService";
const Assigment = () => {
    const [elements,setElements] = useState(['A','B','C','D','E']);
    const [responseItems,setResponseItems] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            rotateArrayLeft()
        }, 1000);
        return () => {return clearInterval(interval); };
    }, [responseItems]);

    function rotateArrayLeft() {
        let first  = elements.shift();
        if(responseItems.length > 0) { 
            first = responseItems.shift();
        }
        if(first != undefined) 
            elements.push(first);
        setElements([...elements]);
    }

   const handleChange=  (e: React.ChangeEvent<HTMLInputElement>)=> {
    const newValue = e.target.value;
    sendRequest(newValue);
    }

    function sendRequest(newValue : string) { 
       getDataFromItunes(newValue,setResponseItems);
    }

    const renderItems =(elements : string[]) =>{ 
        return <ul>
            {elements.map( (element,index) => (<li key={index}> {element} </li>) )}
        </ul>
    }


    return <div> 
        <label> Search</label> 
         <input type='text' id='search' onChange={handleChange}/>
           {renderItems(elements)} 
           </div>
}
export default Assigment


