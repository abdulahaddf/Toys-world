import React, { useEffect, useState } from 'react';
import AllToyTable from '../../shared/components/AlltoyTable';


const AllToys = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/alltoy`)
          .then((res) => res.json())
          .then((result) => {
            setToys(result)
          });
      }, []);
    return (
        <div>
           <h1 className='text-3xl font-bold text-center my-10'>Total toys : {toys.length}</h1>
            {
                toys.map((toy) => <AllToyTable toy={toy} key={toy._id}></AllToyTable> )
            }
        </div>
    );
};

export default AllToys;