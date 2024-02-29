import CollectionImga from '../assets/glodi-miessi-ushzBuB_OYY-unsplash.jpg'
import CollectionImgb from '../assets/pexels-cottonbro-studio-4630675.jpg'
import CollectionImgc from '../assets/nimble-made-DRM_6zFkPFw-unsplash.jpg'

const CollectionSection = () => {
  return (
    <section className="services">
        <div className="services-content">
          <div className="services-item">
            <div className="slide-img">
                <img src={CollectionImga}/>
                <div className="service-overlay">
                    <h3>Shoes</h3>
                </div>
            </div>
            <div className="slide-img">
                <img src={CollectionImgb}/>
                <div className="service-overlay">
                    <h3>Trousers</h3>
                </div>
            </div>
            <div className="slide-img">
                <img src={CollectionImgc}/>
                <div className="service-overlay">
                    <h3>Shirts</h3>
                </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CollectionSection