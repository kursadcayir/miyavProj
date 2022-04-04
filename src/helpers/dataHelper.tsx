

interface itunesObject {
    collectionName : string
}
export function sortAndReduceArray(array : itunesObject[], sortBy:string, length: Number)  {
    const sorter2 = (sortBy:string) => 
                        (a :any, b:any) => {  return a[sortBy]?.toLowerCase() > b[sortBy]?.toLowerCase() ? 1 : -1};
    if(array && array.length>0) { array.sort(sorter2('collectionName'))}
    let arr2 = array.map(v => (v.collectionName));
    let uniq = Array.from(new Set(arr2)).slice(0,5);
    return uniq;
}