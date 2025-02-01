import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getstoredbook } from '../Book file/Localstorage';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const Readpages = () => {
    const books=useLoaderData();
    const [readpage,setreadpage]=useState([]);
    useEffect(()=>{
        const storedreadbooks=getstoredbook('readlist');
        if(books.length>0){
            const filterdreadbooks=books.filter(book=>storedreadbooks.includes(book.id))
            setreadpage(filterdreadbooks)
        } 
    },[books])
    const data=readpage.map(book=>({
        name:book.bookName,
        pages:book.totalPages
    }))
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };
    return (
        <div className='h-full flex justify-center items-center py-16 mt-14 bg-[#13131308]'>
            <BarChart
      width={600} height={400} data={data} margin={{top: 20,right: 30,left: 20,bottom: 5,}}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
        </div>
    );
};

export default Readpages;