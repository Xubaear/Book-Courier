import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Coverage = () => {
  const position = [23.685, 90.356];
  const [serviceCenters, setServiceCenters] = useState([]);

  useEffect(() => {
   
    fetch('/service-centers.json') 
      .then(res => res.json())
      .then(data => setServiceCenters(data))
      .catch(err => console.error('Error fetching service centers:', err));
  }, []);

  return (
    <div>
      <h2 className='text-5xl my-20 text-center text-amber-100 font-bold'>
        We are available in 64 districts
      </h2>

      

     <div className='flex justify-center items-center gap-100'>
         <div className='border w-[500px] h-[400px]  mb-10'>
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          className='w-full h-full'
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {
            // serviceCenters.length > 0 &&
            serviceCenters.map((center, index) => (
              <Marker
                key={index}
                position={[center.latitude, center.longitude]}
              >
                <Popup>
                  <strong>{center.district}</strong>
                  <br />
                  Service Area: {center.covered_area.join(', ')}
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>




      <div>
        <h3>Why choose BookCourier</h3>

        <div className='grid grid-cols-1'>
            <div>
                1
            </div>
            <div>
                2
            </div>
            <div>
                3
            </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Coverage;
