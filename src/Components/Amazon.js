import { useEffect, useState } from "react";
 
import { Link } from "react-router-dom";

 
const Amazon=()=>{

    const [search,setSearch]=useState('apple');
    const [input,setInput]=useState('');
    const [result,setResult]=useState([])
    const [id,setId]=useState('')
    const [error,setError]=useState('');
    

    const handleinput=(event)=>{
        setInput(event.target.value);
    }
    const handlesubmit=(e)=>{
        console.log(input);
        if(input!==''){
          setSearch(input);
        }
        e.preventDefault();
    }

    const compare=()=>{
      console.log("wkend");
    }

     
    const fetchData = async () => {
     // const url = 'https://price-api.datayuge.com/api/v1/compare/search?product=${search}&api_key=xOtf2llgqrehyycPUTNN3ORyki7JNl2bMIE&id=ZToxNjAzNg';
      
        try {
        const response = await fetch(`https://price-api.datayuge.com/api/v1/compare/search?product=${search}&api_key=xOtf2llgqrehyycPUTNN3ORyki7JNl2bMIE&id=ZToxMjIyNA`);
        const data =await response.json();
        console.log(data.data)
        setResult(data.data)
          if(data.ok){
            setResult(data);
          }else{
            setError('Error fetching the data : (API -> Too Many request) ', data.error ||'Unknown error' )
          }
           
        } catch (error) {
          setError("Error fetching data: (API -> Too Many request)", error);
        }

        // try {
        //   const response = await axios.get('https://price-api.datayuge.com/api/v1/compare/price', {
        //     params: {
        //       api_key: 'xOtf2llgqrehyycPUTNN3ORyki7JNl2bMIE',
        //       id: 'ZToxNjAzNg',
        //     },
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //   });
  
        //   console.log(response.data);
        // } catch (error) {
        //   console.error('Error fetching data:', error);
        // }
  
    }

    const productprice=()=>{
           
    }

      useEffect(() => {
         
        fetchData();
      }, [search]);

    
    return(
        <div className=" bg-gray-300  h-full ">
          <div>           
             <div className=" text-xl font-serif font-semibold flex justify-center pt-10 ">
                 Product Lowest Drop Price
             </div>
             <form action="" className="" >
                  <div className="pt-8 flex items-center justify-center flex-col">
                      <input className="w-1/4 rounded-2xl h-8" type="text" placeholder="   Search products"   onChange={ handleinput}  />
                      <span className="pt-4"></span>
                      <span className="pt-2 "></span>
                      <button  className="bg-white w-28 rounded-xl " type="submit" onClick={handlesubmit}>Search</button>
                  </div>
              </form>
            <div className="flex justify-around pt-4 pl-5 ">
              <span>
              <button className="  bg-white w-3/4 pt-2 rounded-xl sm:w-3/4 " onClick={productprice}>Product drop price</button>
              </span>
              
             <span>
               <button className="bg-white w-3/4 rounded-xl  sm:w-3/4 ">Price on various web site</button>
             </span>
            </div>

            <div className="pt-7"></div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                  {result.length>0?(
                    result.map((product) => (
                      <Link to={`/Prices/${product.product_id}`} key={product.product_id} className="bg-white  p-4 rounded shadow-m hover:bg-slate-300">  
                        <img  className="w-12/4 h-32    mb-4" src={product.product_image} alt={product.product_title} />
                        <h2 className="text-xl font-semibold mb-2">{product.product_title}</h2>
                        <p className="text-gray-600">Lowest drop price ₹ {product.product_lowest_price}</p>
                    </Link>
                  ))
                  ):(
                    <div className=" grid-flow-row pl-10 text-red-700 ">{error} Please wait some more time...</div>
                  )}
                   
              </div> 
            </div>


        </div>
    )
}

export default Amazon;