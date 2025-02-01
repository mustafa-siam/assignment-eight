import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
    const [books,setbooks]=useState([]);
    useEffect(()=>{
        fetch('/books.json')
        .then(res=>res.json())
        .then(data=>setbooks(data))
    },[])
    return (
        <div>
            <h1 className="text-4xl font-bold text-center">Books</h1>
            <div className="grid md:grid-cols-3 gap-6 py-16">
                {
                    books.map(book=><Book key={book.id} book={book} ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;