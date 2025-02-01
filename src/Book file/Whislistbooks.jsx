import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getstoredbook } from "./Localstorage";
import Whislistbook from "./Whislistbook";


const Whislistbooks = () => {
    const books=useLoaderData();
    const [whislistbook,setwhislistbook]=useState([]);
    useEffect(()=>{
        const storedid=getstoredbook('whislist');
        if(books.length>0){
            const filterdwhislist=books.filter(book=>storedid.includes(book.id))
            setwhislistbook(filterdwhislist)
        }
    },[books])
    return (
        <div className="grid gap-6">
            {
                whislistbook.map((whislist,idx)=><Whislistbook whislist={whislist} key={idx}></Whislistbook>)
            }
        </div>
    );
};

export default Whislistbooks;