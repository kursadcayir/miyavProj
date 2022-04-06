
import { useEffect, useState } from "react";
import {getDataFromItunes} from "../../service/dataService";
const Assigment = () => {
    const [elements,setElements] = useState(['A','B','C','D','E']);
    const [responseItems,setResponseItems] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            rotateLeft()
        }, 1000);
        return () => {return clearInterval(interval); };
    }, [responseItems]);

    function rotateLeft() : void { 
        let lefted = rotateArrayLeft(elements);
        setElements([...lefted]);
    }
    function rotateArrayLeft(arr : any[]) : any[] {
        let first  = arr.shift() ;
        if(responseItems.length > 0) { 
            first = responseItems.shift();
        }
        arr.push(first);
        return arr;
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


