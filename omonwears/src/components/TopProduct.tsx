import trenda from '../assets/pexels-j-sarkar-991509.jpg'
import trendb from '../assets/pexels-jansel-ferma-2315313.jpg'
import trendc from '../assets/pexels-raul-reynoso-1018911.jpg'
import trendd from '../assets/pexels-tp-dai-3399995.jpg'
import trende from '../assets/pexels-wendy-wei-1656684.jpg'

const TopProduct = () => {
  return (
    <section className="trending-product">
        <h1 className="font-[poppins] font-[200] text-3xl mb-[1rem] mt-[2rem] mx-[4.5rem]"><span className='text-red-500 font-[500] '>#TRENDING</span> Products</h1>
        <div className="trend-content flex justify-center flex-wrap">
            <div className="trend-item flex flex-row justify-center items-center flex-wrap">
                <div className="container h-[300px] w-[200px] m-[15px]">
                    <img src={trenda} className='w-full h-full object-cover'/>
                    <h3>hello</h3>
                </div>
                <div className="container h-[300px] w-[200px] m-[15px]">
                    <img src={trendb} className='w-full h-full object-cover'/>
                    <h3>hello</h3>
                </div>
                <div className="container h-[300px] w-[200px] m-[15px]">
                    <img src={trendc} className='w-full h-full object-cover'/>
                    <h3>hello</h3>
                </div>
                <div className="container h-[300px] w-[200px] m-[15px]">
                    <img src={trendd} className='w-full h-full object-cover'/>
                    <h3>hello</h3>
                </div>
                <div className="container h-[300px] w-[200px] m-[15px]">
                    <img src={trende} className='w-full h-full object-cover'/>
                    <h3>hello</h3>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default TopProduct