import { useLoaderData } from "react-router-dom";
import { getstoredbook } from "./Localstorage";
import { useEffect, useState } from "react";
import Readbook from "./Readbook";

const Readbooks = () => {
    const books=useLoaderData();
    const [readbooks,setreadbooks]=useState([]);
    useEffect(()=>{
        const storedreadbooks=getstoredbook('readlist');
        if(books.length>0){
            const filterdreadbooks=books.filter(book=>storedreadbooks.includes(book.id))
            console.log(filterdreadbooks);
            setreadbooks(filterdreadbooks)
        }
   
    },[books])
    
    return (
        <div className="grid gap-6">
      {
        readbooks.map((readbook,idx)=><Readbook key={idx} readbook={readbook}></Readbook>)
      }
        </div>
    );
};

export default Readbooks;