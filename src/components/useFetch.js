import { useState, useEffect } from "react";


const useFetch = (url) => {

    const [data, setdata] = useState(null);
    const [err, seterr] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    

    useEffect( () => {
        fetch(url)
        .then(res => {
         if(!res.ok){
           throw Error('could not fetch the data from the serer');
         }
         console.log(res);
         return res.json();
        })
        .then(data => {
         console.log(data);
         setdata(data);
         setisLoading(false);
         seterr(null);
        }).catch(errors => {
         setisLoading(false);
         console.log(errors.message);
         seterr(errors.message);
        });
        return () => console.log("clenup");
       },[]);


       return {data ,isLoading, err ,setdata};
}

export default useFetch;