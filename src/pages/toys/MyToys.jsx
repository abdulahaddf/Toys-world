import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import { FaEdit,FaTrashAlt,FaEye, FaStar } from "react-icons/fa";
import Swal from 'sweetalert2';

const MyTOys = () => {
    const {user} = useContext(AuthContext)
    const [toys, setToy] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/mytoys?sellerEmail=${user.email}`)
        .then(response => response.json())
        .then(data => setToy(data))
    },[]);

    const handleDelete = id => {


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/toy/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        
                        const remaining = toys.filter(toy => toy._id !== id);
                        setToy(remaining);
                    }
                })

              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })


        // const proceed = confirm('Are You sure you want to delete');
        // if (proceed) {
        //     fetch(`http://localhost:5000/toy/${id}`, {
        //         method: 'DELETE'
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             console.log(data);
        //             if (data.deletedCount > 0) {
        //                 alert('deleted successful');
        //                 const remaining = toys.filter(toy => toy._id !== id);
        //                 setToy(remaining);
        //             }
        //         })
        // }
    }
    return (
        <div>
            <h1>my toysasssssssssssssssssssss : {toys.length}</h1>


            <div className="overflow-x-auto">
        <table className="table w-full text-center">
          {/* head */}
          <thead>
            <tr>
              <th className='text-2xl'>no.</th>
              <th className='text-2xl'>Toy Name</th>
             
              <th className='text-2xl'>Sub Category</th>
              <th className='text-2xl'>Price</th>
              <th className='text-2xl'>Ratings</th>
              <th className='text-2xl'>Available quantity</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
           

          {
                toys?.map((toy, i) => <>
                <tr>
              <th>{i+1}</th>
              <td>{toy.name}</td>
              <td>{toy.subCategory}</td>
              <td>${toy.price}</td>
              <td>{toy.rating}<FaStar className="inline ml-1 mb-1   "></FaStar></td>
              <td>{toy.quantity}</td>
              <FaTrashAlt onClick={() => handleDelete(toy._id)} className='text-xl my-5'></FaTrashAlt>
              <FaEdit className='text-xl my-5'></FaEdit>
             
            </tr>

                </> )
            }



            
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default MyTOys;