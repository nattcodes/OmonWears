import brandImg from '../assets/Untitled design (19).png'


const Navbar = () => {
  return (
    <>
        <nav className='navbar w-[100%] min-h-[7vh] py-[2rem] px-[2rem] fixed z-50 flex-wrap'>
            <div className="nav-content flex justify-between text-center items-center flex-wrap  ">
                <div className='brandname w-[120px] ml-[2.5rem]'>
                    <img src={brandImg}/>
                </div>
                <ul className="nav-links">
                    <li><a className='a' href="#">Home</a></li>
                    <li><a className='b' href="#">Shop</a></li>
                    <li><a className='a' href="#">About</a></li>
                    <li><a className='a' href="#">Contact</a></li>
                    <li><a href="#"><i className="fas fa-cart-plus"></i></a></li>
                    <li><a href="#"><i className="far fa-user-circle"></i></a></li>
                </ul>
            </div>
            
        </nav>
    </>
  )
}

export default Navbar