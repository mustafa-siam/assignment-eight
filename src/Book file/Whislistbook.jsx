import { Link } from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";

const Whislistbook = ({whislist}) => {
    const {id,image,bookName,author,category,rating,tags,yearOfPublishing,totalPages,publisher}=whislist;
    return (
        <div>
            <div className="md:grid md:grid-cols-4 flex flex-col items-center gap-12 h-full  bg-base-100 shadow-xl">
                <div className="col-span-1 p-3">
                <figure className="px-6 py-10 bg-[#1313130D]">
                <img
                  src={image}
                  alt="Shoes"
                  className="rounded-xl" />
              </figure>
                </div>
              <div className="col-span-3">
              <div className="flex flex-col  pb-2 px-5 border-dashed border-b-[1px] border-b-[#13131326]">
                <h2 className="card-title text-2xl font-bold pb-4">{bookName}</h2>
                <div className="">
                <p className="text-base font-medium text-[#131313CC] ">By : {author}</p>
                </div>
                </div>
              
                <div className="flex items-center py-3 px-5 text-base text-[#23BE0A] space-x-4">
                <p className="text-base text-black font-bold">Tag</p>
                <p className="bg-[#23be0a0d] py-2 px-4 rounded-3xl">{tags[0]}</p>
                <p className="bg-[#23be0a0d] py-2 px-4 rounded-3xl">{tags[1]}</p>
                <p><span className="font-normal text-[#131313B3]">Year of Publishing: </span> {yearOfPublishing}</p>
              </div>
              <div className="text-base px-4 py-4 flex items-center gap-10 font-bold">
                <p className="flex text-base items-center  gap-2"><RiPagesLine /> <span className="font-normal text-[#131313B3]">Number of Pages:</span> {totalPages}</p>
                <p className="flex text-base items-center  gap-2"><BsFillPeopleFill /> <span className="font-normal text-[#131313B3] ">Publisher: </span>{publisher}</p>
              </div>
              <div className="px-4 py-4 flex items-center gap-4 space-x-4 text-base">
              <p className="bg-[#328EFF26] py-2 px-4 rounded-3xl">Rating: {rating}</p>
              <p className="bg-[#FFAC33] py-2 px-4 rounded-3xl">Category: {category}</p>
                   <Link to={`/bookdetails/${id}`} className="btn bg-[#23BE0A] rounded-3xl text-white">View Details </Link>
              </div>
              </div>
            </div>
        </div>
    );
};

export default Whislistbook;