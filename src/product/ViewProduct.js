import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ViewProduct() {
    const [products,setProducts]=useState([]);

    const getData =()=>{
        axios.get('http://localhost:5000/products')
        .then((res)=>setProducts(res.data))

    } 
    useEffect(getData,[]) 

    function deleteProduct(id){
        axios.delete('http://localhost:5000/products/'+id)
        .then(res=>{
            if(res.status===200){
                alert('product detail removed')
                window.location.reload();
            }
        })
        .catch(error=>console.log(error));
        
    }
  return (
    <div>
        <table className='table table-hover '>
        <thead>

            <tr>
                <th> Id</th>
                <th>ProductName</th>
                <th>productImage</th>
                <th>Specification</th>
                <th>Manufacturer</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>In Stock</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>{
            products.map((products)=><tr>
                 <td>{products.id}</td>
                 <td>{products.productName}</td>
                 <td><img src={products.productImage} width={100}></img></td>
                 <td>{products.specification}</td>
                 <td>{products.manufaturer}</td>
                 <td>{products.quantity}</td>
                 <td>{products.price}</td>

                 <td><input type='checkbox' checked={products.inStock}></input></td>

                 <td>
                    <button className='btn btn-outline-danger me-4' onClick={()=>deleteProduct(products.id)}>
                        <i class="bi bi-trash3-fill"></i></button>


                        <Link className='btn btn-outline-primary' to={`/edit/${products.id}`}>
                        <i class= "bi bi-pencil-square"></i>
                        </Link>
                 </td>

                </tr>)
              
            
            
            
            }
            </tbody>

        </table>
    
    </div>
  )
}

export default ViewProduct;