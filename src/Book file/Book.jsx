import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Book = ({book}) => {
    const {id,image,bookName,author,category,rating,tags}=book;
    return (
        <Link to={`/bookdetails/${id}`}>
        <div className="card h-full bg-base-100 shadow-xl">
  <figure className="px-6 py-10 bg-[#1313130D] h-[300px]">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="flex py-3 px-5 text-base text-[#23BE0A] space-x-4">
    <p className="bg-[#23be0a0d] py-2 px-4 rounded-3xl">{tags[0]}</p>
    <p className="bg-[#23be0a0d] py-2 px-4 rounded-3xl">{tags[1]}</p>
  </div>
  <div className="flex flex-col  pb-2 px-5 border-dashed border-b-[1px] border-b-[#13131326]">
    <h2 className="card-title text-2xl font-bold pb-4">{bookName}</h2>
    <div className="">
    <p className="text-base font-medium text-[#131313CC] ">By : {author}</p>
    </div>
    </div>
  <div className="flex justify-between py-5 px-5">
      <p className="text-[#131313CC] font-medium text-base">{category}</p>
      <p className="flex items-center gap-2 text-base">{rating} <FaRegStar></FaRegStar></p>
    </div>
</div>
        </Link>
    );
};

export default Book;