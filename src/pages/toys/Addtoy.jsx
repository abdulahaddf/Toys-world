import React from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Addtoy = () => {
    const {user} = useContext(AuthContext)
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/toy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if(result.acknowledged){
            toast('The toy has been successfully added!');
        }
       
      });
    console.log(data);
  };

  return (
    <div>
        
        <h1 className="text-3xl md:text-5xl font-bold text-center my-10">Add a toy you want to sell</h1>
      <form className="w-full"  onSubmit={handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-2 space-y-6 self-center w-11/12 items-center mx-auto">
        <input placeholder="Enter photo url" className="border-2 h-10 w-96 p-4" {...register("photo")} />
        <input placeholder="Enter Toy name" className="border h-10 w-96 p-4" {...register("name")} />
        <input placeholder="Enter Seller name" className="border h-10 w-96 p-4" {...register("sellerName")} />
        <input placeholder="Enter Seller email" defaultValue={user?.email} value={user?.email} className="border h-10 w-96 p-4" {...register("sellerEmail")} />
       
        <select className="select select-bordered h-10 w-96 " {...register("subCategory")} defaultValue="marvel" >
  <option value="" disabled selected>Pick a Sub-Category</option>
  <option value="marvel">Marvel Universe Toys</option>
  <option value="dc">DC Universe Toys</option>
  <option value="transformer">Transformers Toys</option>
</select>



        <input placeholder="Enter Toy Price" className="border h-10 w-96 p-4" {...register("price")} />
        <input placeholder="Enter Toy Rating" className="border h-10 w-96 p-4" {...register("rating")} />
        <input placeholder="Enter Toy Quantity" type="number" className="border h-10 w-96 p-4" {...register("quantity")} />
        <input placeholder="Toy Description" className="border h-10 w-96 p-4" {...register("description")} />
        </div>


        
        <div className="w-36 mx-auto my-10"><input className="btn btn-slate " type="submit" /></div>
        

      </form>
    </div>
  );
};

export default Addtoy;
