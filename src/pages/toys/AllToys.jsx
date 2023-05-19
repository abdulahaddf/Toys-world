import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';




const AllToys = () => {
    const {user} = useContext(AuthContext)


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


           <div className="overflow-x-auto">
        <table className="table w-full text-center">
          {/* head */}
          <thead>
            <tr>
              <th className='text-2xl'>no.</th>
              <th className='text-2xl'>Toy Name</th>
              <th className='text-2xl'>Seller</th>
              <th className='text-2xl'>Sub Category</th>
              <th className='text-2xl'>Price</th>
              <th className='text-2xl'>Available quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
           

          {
                toys?.map((toy, i) => <>
                <tr>
              <th>{i+1}</th>
              <td>{toy.name}</td>
              <td>{toy.sellerName}</td>
              <td>{toy.subCategory}</td>
              <td>{toy.price}</td>
              <td>{toy.quantity}</td>
             <td><button className='btn btn-outline btn-sm'>View Details</button></td>
            </tr>

                </> )
            }



            
          </tbody>
        </table>
      </div>



















           
        </div>
    );
};

export default AllToys;