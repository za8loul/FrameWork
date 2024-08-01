import React, { useState } from "react";
import port1 from "../../assets/port1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";

const images = [
  port1,
  port2,
  port3,
  port1,
  port2,
  port3,
];

export default function PortContent() {
  const [selectedImage, setSelectedImage] = useState(null); 

  const handleClick = (src) => {
    
    setSelectedImage(src);
  };

  const closeOverlay = () => {

    setSelectedImage(null); 
  };

  return (
    <div className="container port-content">
      <div className="row g-5 pt-3">
        {images.map((image, index) => (
          <div key={index} className="col-md-6 col-lg-4"> 
            <div className="frame rounded-3">
              <img
                src={image}
                className="w-100 rounded-3"
                alt=""
               
              />
              <div  onClick={() => handleClick(image)} className="layer w-100 rounded-3 text-white">
                <i className="fa-solid fa-plus fa-6x"></i> 
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div
          onClick={closeOverlay}
          className="overlay display justify-content-center align-items-center"
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(96, 152, 231, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div className="layer-content w-50 d-flex justify-content-center align-items-center">
            <img src={selectedImage} className="w-75" alt="" />
          </div>
        </div>
      )}
    </div>
  );
}
