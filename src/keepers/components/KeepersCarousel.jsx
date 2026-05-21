


export const KeepersCarousel = () => {

   const keepersImageUrl1 = `/assets/keepers/LK02.png`;
   const keepersImageUrl2 = `/assets/keepers/LK05.png`;
   const keepersImageUrl3 = `/assets/keepers/LK06.png`;

  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" >
        <div className="carousel-inner" style={{ maxWidth: '100%', height: '800px' }} >
            <div className="carousel-item active" >
                <img src={ keepersImageUrl1 } className="d-block w-100" alt="..." style={{ height: '800px' }} />
                <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div className="carousel-item" >
                <img src={ keepersImageUrl2 } className="d-block w-100" alt="..." style={{ height: '800px' }} />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the Second slide.</p>
                </div>
            </div>
            <div className="carousel-item" >
                <img src={ keepersImageUrl3 } className="d-block w-100" alt="..." style={{ height: '800px' }} />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the Third slide.</p>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}