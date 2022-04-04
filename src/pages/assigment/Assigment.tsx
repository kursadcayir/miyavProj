
import { useEffect, useState } from "react";
import {getDataFromItunes} from "../../service/dataService";
import {sortAndReduceArray} from "../../helpers/dataHelper"
const Assigment = () => {

    let [elements,setElements] = useState(['elementA','elementB','elementC','elementD','elementE']) ;
    let [responseItems,setResponseItems] = useState([]) ;


    useEffect(() => {
        const interval = setInterval(() => {
            rotateLeft()
        }, 1000);
        return () => clearInterval(interval);
    }, [responseItems]);

    function rotateLeft() : void { 
        let lefted = rotateArrayLeft(elements);
        setElements([...lefted]);
    }
    function rotateArrayLeft(arr : any[]) :any[] {
        let first  = arr.shift() ;
        if(responseItems.length > 0) { 
            first = responseItems.shift();
        }
        arr.push(first); 
        return arr;
    }

   const handleChange=  (e: React.ChangeEvent<HTMLInputElement>)=> {
       //https://stackoverflow.com/questions/40676343/typescript-input-onchange-event-target-value
    let newValue = e.target.value;
    sendRequest(newValue);
    }

    function sendRequest(newValue : string) { 
       getDataFromItunes(newValue,setResponseItems);
    }

    const renderItems =(elements : string[]) =>{ 
        return <ul>
            {elements.map( element => (<li> {element} </li>) )}
        </ul>
    }


    return <div> 
        <label> Search</label> 
         <input type='text' id='search' onChange={handleChange}/>
           {renderItems(elements)} 
           </div>
}
export default Assigment


