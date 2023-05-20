import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import { FaEdit,FaTrashAlt,FaEye, FaStar, FaArrowUp, FaArrowDown } from "react-icons/fa";
import Swal from 'sweetalert2';
import UpdateToy from '../../shared/components/UpdateToy';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';

const MyTOys = () => {
    const {user} = useContext(AuthContext)
    const [toys, setToy] = useState([]);
    const [update, setUpdate] = useState(false);
    const [id, setId] = useState("");
    const handleId = (id) =>{
      setId(id);
    }
    useEffect(()=>{
        fetch(`http://localhost:5000/mytoys?sellerEmail=${user.email}`)
        .then(response => response.json())
        .then(data => setToy(data))
    },[user, update]);

    const handleDelete = id => {


        Swal.fire({
            title: 'Do you want to delete your Toy?',
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
                'Your Toy has been deleted.',
                'success'
              )
            }
          })

    }


    const handleToyUpdate = (data) => {
      console.log(data);
      fetch(`http://localhost:5000/updateToy/${data._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.modifiedCount > 0) {
            setUpdate(!update)
            toast('Your ToY Details have been updated')
          }
          console.log(result);
        });
    };
    useTitle("my toys");
    return (
        <div>
            <h1 className='text-5xl text-center font-bold my-10'>My Toys</h1>


            <div className="overflow-x-auto">
        <table className="table w-full text-center">
          {/* head */}
          <thead>
            <tr>
              <th className='text-2xl'>no.</th>
              <th className='text-2xl'>Toy Name</th>
             
              <th className='text-2xl'>Sub Category</th>
              <th className='text-2xl'>Price<FaArrowUp className="inline mx-2 mb-1   "></FaArrowUp></th>
              <th className='text-2xl'>Ratings</th>
              <th className='text-2xl'>Available quantity</th>
              
              <th>delete</th>
              <th>edit</th>
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
              <td>
              <FaTrashAlt onClick={() => handleDelete(toy._id)} className='text-xl mx-auto my-5'></FaTrashAlt>
              </td>
             <td>
             <label htmlFor="my-modal-5"><FaEdit onClick={()=> handleId(toy._id)} className='text-xl mx-auto'></FaEdit>
              </label>
              
             <UpdateToy id={id} key={toy._id} handleToyUpdate={handleToyUpdate}></UpdateToy>
             </td>
              
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