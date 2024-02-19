 
 import aweq from './images/aweq.jpg'
 import { Link } from 'react-router-dom';
 import wwq from './images/wwq.webp'
 
const Front=()=>{

      


    return (
        <div className=" bg-slate-900  w-screen h-screen">
     
      <div className=" flex text-3xl justify-center p-7 text-slate-400  font-semibold   ">
          Price Tracker
      </div>


      <div className='  pt-16 flex  items-center  flex-col justify-center  '>

         <div className=' bg-slate-600 rounded-2xl  backdrop-brightness- backdrop-blur-2xl w-1/2 flex justify-center  text-xl  relative flex-col items-center  text-white md:text-2xl,py-20  lg:text-3xl lg:w-1/4'>

            <div className=" text-base pt-5 p-7 ">

                <Link to="/amazon" className=" flex justify-center focus: pt-7 ">
                <img className=" w-1/2 rounded-2xl  " src={aweq} alt="" />
                </Link>
               
            </div>

            <div className=" text-base pt-5 p-7 ">

                <Link to="/Flipkart"  className=" flex justify-center pt-7  focus:  ">
                <img className=" w-1/2 rounded-2xl  " src={wwq} alt="" />
            
                </Link>
               
            </div>
 


         </div> 
 
      </div>
       

    </div>
    )
}
export default Front;