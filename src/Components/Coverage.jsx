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

      

     <div className='flex justify-center items-center gap-20 mx-20'>
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
        <h3 className='text-4xl -mt-12 mb-2 font-bold text-cyan-500'>Why choose BookCourier</h3>

        <div className='grid grid-cols-1'>
            <div className='my-3'>
                <h2 className='text-2xl text-amber-500 font-semibold'>Premium Packaging</h2>
                <p className='text-gray-400'>
                    We use waterproof bubble wrapping to ensure <br /> your books arrive in mint condition, safe from any transit damage.
                </p>
            </div>
            <div>
                <h2 className='text-2xl text-amber-500 font-semibold'>Super Fast Delivery</h2>
                <p className='text-gray-400'>
                    We prioritize speed with our express delivery network, <br /> ensuring your books reach you within the shortest possible time.
                </p>
            </div>
            <div className='my-3'>
                <h2 className='text-2xl text-amber-500 font-semibold'>Low Cost & Tracking</h2>
                <p className='text-gray-400'>
                    Enjoy the most affordable delivery rates and track your <br /> parcel in real-time until it reaches your doorstep.
                </p>
            </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Coverage;
