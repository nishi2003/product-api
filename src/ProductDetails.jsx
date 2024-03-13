import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductDetails() {
  let { id } = useParams();
  console.log(id);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/" + id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [id]);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="task">
        {data && (
          //data?.map((product) => (
          <div className="detailsss" key={data?.id}>
            <div className="big-img">
              <div className="thumb">
              <Slider {...settings}>
                {data?.images?.map((img, index) => (
                  
                    <img
                      src={img}
                      alt="" width="200px"
                      key={index}
                      onClick={() => this.handleTab(index)}
                    />
                 
                ))} </Slider>
              </div>
            </div>
            <div className="box">
              <div className="row">
                <h2> {data?.title}</h2>
                <span> ${data?.price}</span>
                <p>Desc:- {data?.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
