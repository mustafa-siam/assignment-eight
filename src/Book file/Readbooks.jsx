import { useLoaderData } from "react-router-dom";
import { getstoredbook } from "./Localstorage";
import { useContext, useEffect, useState } from "react";
import Readbook from "./Readbook";
import { shortcontext } from "../header file/Listbooks";
const Readbooks = () => {
    const books=useLoaderData();
    const {sortby}=useContext(shortcontext)
    const [readbooks,setreadbooks]=useState([]);
    useEffect(()=>{
        const storedreadbooks=getstoredbook('readlist');
        if(books.length>0){
            const filterdreadbooks=books.filter(book=>storedreadbooks.includes(book.id));
            if(sortby==='rating'){
                filterdreadbooks.sort((a,b)=>b.rating-a.rating)
            }
          else if(sortby==='pages'){
              filterdreadbooks.sort((a,b)=>b.totalPages-a.totalPages)
            }
          else if(sortby==='year'){
            filterdreadbooks.sort((a,b)=>b.yearOfPublishing-a.yearOfPublishing)
          }
            setreadbooks(filterdreadbooks)
        }
   
    },[books,sortby])
    
    return (
      <>
      <div className="grid gap-6">
      {
        readbooks.map((readbook,idx)=><Readbook key={idx} readbook={readbook}></Readbook>)
      }
        </div>
      </>
        
    );
};

export default Readbooks;