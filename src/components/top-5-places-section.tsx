import { ShareSection } from "./share-section";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const TopFivePlacesSection:React.FC = () => {

    const placesList = [
        {title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image:"#"},
        {title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image:"#"},
        {title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image:"#"},
        {title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image:"#"},
        {title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image:"#"},
    ]

    const settings = {
        dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
      };

    return (
        <section className="page-section top-five-places-section">
            <article>
                <h2>5 Places to visit</h2>
                <Slider className="slider" {...settings}>
                    {/* {
                        placesList.map(item=>{
                            return (
                                <article>
                                    <img src={item.image} alt={item.title}/>
                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                </article>
                            )
                        })
                    } */}
                    <div className="img-card">
                        <h3>1</h3>
                    </div>
                    <div className="img-card">
                        <h3>2</h3>
                    </div >
                    <div className="img-card">
                        <h3>3</h3>
                    </div>
                </Slider>
            </article>
            {/* <ShareSection/> */}
        </section>
    )
}