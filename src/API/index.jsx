//Fetching Data

export const getAllProduct =()=>{
  return fetch('https://dummyjson.com/products')
  .then(res => res.json());
} 

export const getProductByCategory = (category)=>{
  return fetch(`https://dummyjson.com/products/category/${category}`)
  .then(res => res.json())
};

export const getCart=()=>{
  return fetch('https://dummyjson.com/carts/1')
  .then(res => res.json())
  
}

export const addToCart = async(id)=>{
  return fetch('https://dummyjson.com/carts/add', {
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({
      userId: 1,
      products: [
        {
          id: id,
        quantity: 1,
        }
      ]
    })
  })
  .then(res => res.json())
}