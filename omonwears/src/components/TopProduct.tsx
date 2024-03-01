import trend from '../assets/pexels-j-sarkar-991509.jpg'

const TopProduct = () => {
  return (
    <section className="trending-product">
        <h1 className="font-[poppins] font-[300] text-3xl mb-[3rem] text-center">Trending Products</h1>
        <div className="trend-content flex justify-center flex-wrap">
            <div className="trend-item flex flex-row justify-center items-center flex-wrap">
                <div className="container w-[200px] m-[15px]">
                    <img src={trend} className='w-full h-full object-cover'/>
                    <h3>hello</h3>
                </div>
                <div className="container w-[200px] m-[15px]">
                    <img src={trend} className='w-full h-full object-cover'/>
                    <h3>hello</h3>
                </div>
                <div className="container w-[200px] m-[15px]">
                    <img src={trend} className='w-full h-full object-cover'/>
                    <h3>hello</h3>
                </div>
                <div className="container w-[200px] m-[15px]">
                    <img src={trend} className='w-full h-full object-cover'/>
                    <h3>hello</h3>
                </div>
                <div className="container w-[200px] m-[15px]">
                    <img src={trend} className='w-full h-full object-cover'/>
                    <h3>hello</h3>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default TopProduct