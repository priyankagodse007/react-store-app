import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

 function AddProduct() {
  const{register,handleSubmit,setValue,reset}=useForm();
const {id}=useParams()

  const saveData=product=>{
    if(!id){
   axios.post('http://localhost:5000/products',product)
   .then(res=>{
    if(res.status==201){
      alert("product detail saved")
      reset();
    }
   })
   .catch(error=>console.log(error));
  } else{
    axios.put(`http://localhost:5000/products/${id}` ,product)
    .then(res=>{
      if(res.status===200){
        alert("product details updated")
      }
    })
  }
   
  }
   const getEditData=()=>{
    if(id){
    axios.get(`http://localhost:5000/products/${id}`)
    .then(res=>{
      for(let prop in res.data){
        setValue(prop,res.data[prop])
      }

    })
   
  }
}
   useEffect(getEditData,[]);
  return (
    <div className='' style={{borderStyle:'dashed'}}>
      <div className='bg-white w-5 m-10' style={{width:'500px',margin:'auto',borderStyle:'solid'}}>
        <h1>{id}</h1>
      <h1 className='text-center fs-3 text-primary'>Add Product details</h1>
      <form onSubmit={handleSubmit(saveData)}>
        <div>
          <label className='form-label'>Enter product Id</label>
          <input type='text'{...register('id')} className='form-control border border-dark'/>
        </div>
        <div>
          <label className='form-label'>Enter product Name</label>
          <input type='text'{...register('productName')} className='form-control border border-dark'/>
        </div>
        <div>
          <label className='form-label'>Enter product Specification</label>
          <input type='text'{...register('specification')} className='form-control border border-dark'/>
        </div>
        <div>
          <label className='form-label'>Enter Manufacturer Name</label>
          <input type='text'{...register('manufaturer')} className='form-control border border-dark'/>
        </div>
        <div>
          <label className='form-label'>Enter product Quantity</label>
          <input type='number'{...register('quantity')} className='form-control border border-dark'/>
        </div>
        <div>
          <label className='form-label'>Enter product Price</label>
          <input type='text'{...register('price')} className='form-control border border-dark'/>
        </div>
        <div className='mt-3'>
          <label className='form-check-label' me-4>Is product in Stock</label>
          <input type='checkbox'{...register('inStock')} className='form-check-input border border-dark'/>
        </div>
          <button className='btn btn-success mt-3'>Submit</button>
      </form>
    </div>
    </div>

//     <div style={{width:'300px', margin:'auto'}}>
//       <form>
//   <div class="mb-3">
//     <label for="exampleInputEmail1" class="form-label">Email address</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//     <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div class="mb-3">
//     <label for="exampleInputPassword1" class="form-label">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1" />
//   </div>
//   <div class="mb-3 form-check">
//     <input type="checkbox" class="form-check-input" id="exampleCheck1" />
//     <label class="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>
//     </div>

  )
}
export default AddProduct;
