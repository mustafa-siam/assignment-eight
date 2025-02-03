import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getstoredbook } from "./Localstorage";
import Whislistbook from "./Whislistbook";
import { shortcontext } from "../header file/Listbooks";
const Whislistbooks = () => {
    const books=useLoaderData();
    const {sortby}=useContext(shortcontext);
    const [whislistbook,setwhislistbook]=useState([]);
    useEffect(()=>{
        const storedid=getstoredbook('whislist');
        if(books.length>0){
            const filterdwhislist=books.filter(book=>storedid.includes(book.id))
            if(sortby==='rating'){
                filterdwhislist.sort((a,b)=>b.rating-a.rating)
            }
          else if(sortby==='pages'){
            filterdwhislist.sort((a,b)=>b.totalPages-a.totalPages)
            }
          else if(sortby==='year'){
            filterdwhislist.sort((a,b)=>b.yearOfPublishing-a.yearOfPublishing)
          }
            setwhislistbook(filterdwhislist)
        }
    },[books,sortby])
    return (
        <div className="grid gap-6">
            {
                whislistbook.map((whislist,idx)=><Whislistbook whislist={whislist} key={idx}></Whislistbook>)
            }
        </div>
    );
};

export default Whislistbooks;