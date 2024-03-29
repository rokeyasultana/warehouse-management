import  { useEffect, useState } from 'react';

const useProduct = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://warehouse-management-server-side-gmaw.onrender.com/product')

            .then(res => res.json())

            .then(data => setProducts(data));
    }, []);

    return [products,setProducts];
};

export default useProduct;