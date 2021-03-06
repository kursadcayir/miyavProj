import jsonp from '../jsonp';
import {sortAndReduceArray} from "../helpers/dataHelper"

export function getDataFromItunes (data : string,setterFunct :Function){
 return jsonp( 'https://itunes.apple.com/search?term=' + JSON.stringify(data),
    (    response: {resultCount : Number , results: any; }) =>  {
        response.results = sortAndReduceArray(response.results, 'collectionName',response.resultCount)
        setterFunct(response.results);
    });
  }