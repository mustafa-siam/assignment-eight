import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getstoredbook, savelocalstorage } from "./Localstorage";
const Bookdetails = () => {
    const bookdetails=useLoaderData();
    const {id}=useParams();
    const idint=parseInt(id);
    const bookid=bookdetails.find(book=>book.id===idint)
    const readlist=getstoredbook('readlist');
      const whislist=getstoredbook('whislist');
    const handelereadlist=()=>{ 
      if(readlist.includes(bookid.id)){
        toast.warn('this book already been added in readlist');
        return;
      }
      savelocalstorage('readlist',idint)
        toast.success('this Book added to Read list');
    }
    const handelwhislist=()=>{
        if(readlist.includes(bookid.id)){
          toast.warn('you have already read this book');
          return
        }
        if(whislist.includes(bookid.id)){
          toast.warn('this book already been added in whislist');
          return;
        }
        savelocalstorage('whislist',idint)
        toast.success('this Book added to whislist');
    }
    return (
        <div className="py-16">
            <div className="grid md:grid-cols-4 items-center gap-12 h-full  bg-base-100 shadow-xl">
                <div className="col-span-2">
                <figure className="px-6 py-10 bg-[#1313130D]">
                <img
                  src={bookid.image}
                  alt="Shoes"
                  className="rounded-xl h-full w-full" />
              </figure>
                </div>
              <div className="col-span-2">
              <div className="flex flex-col  pb-2 px-5 border-dashed border-b-[1px] border-b-[#13131326]">
                <h2 className="card-title text-2xl font-bold pb-4">{bookid.bookName}</h2>
                <div className="">
                <p className="text-base font-medium text-[#131313CC] ">By : {bookid.author}</p>
                </div>
                </div>
              <div className="flex justify-between py-5 px-5">
                  <p className="text-[#131313CC] font-medium text-base">{bookid.category}</p>
                </div>
                <p className="text-base px-5 font-normal text-[#131313B3]"><span className="font-bold text-black">review :</span> {bookid.review}</p>
                <div className="flex items-center py-3 px-5 text-base text-[#23BE0A] space-x-4">
                <p className="text-base text-black font-bold">Tag</p>
                <p className="bg-[#23be0a0d] py-2 px-4 rounded-3xl">{bookid.tags[0]}</p>
                <p className="bg-[#23be0a0d] py-2 px-4 rounded-3xl">{bookid.tags[1]}</p>
              </div>
              <div className="text-base px-4 space-y-2 font-bold">
                <p><span className="font-normal text-[#131313B3] pr-13">Number of Pages:</span> {bookid.totalPages}</p>
                <p><span className="font-normal text-[#131313B3] pr-[109px]">Publisher:</span> {bookid.publisher}</p>
                <p><span className="font-normal text-[#131313B3] pr-12">Year of Publishing: </span> {bookid.yearOfPublishing}</p>
                <p><span className="font-normal text-[#131313B3] pr-[130px]">Rating:</span> {bookid.rating}</p>
              </div>
              <div className="px-4 py-4 space-x-4 text-base">
                   <Link onClick={handelereadlist} className="btn ">Read</Link>
                   <Link onClick={handelwhislist} className="btn bg-[#59C6D2] text-white">Wishlist</Link>
              </div>
              </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Bookdetails;