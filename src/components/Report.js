import React from 'react';
import './Report.css';
import superheroImage from './superhero.png';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '50vw',
  height: '50vh',
};
const center = {
  lat: 33.950001, // default latitude
  lng: -83.383331, // default longitude
};

const Report = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyC8f_v7OJAap8LH5VoSV8wtsgD4myaUvRI',
        libraries,
      });
    
      if (loadError) {
        return <div>Error loading maps</div>;
      }
    
      if (!isLoaded) {
        return <div>Loading maps</div>;
      }
    
  return (
    <div>
      <div className="report-header">
        <h2>Report Form</h2>
      </div>
      <form className="report-form">
        <label>
          Description:
          <textarea name="description" />
        </label>
        <label>
          Location:
          <input type="text" name="location" />
        </label>
        <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
        <label>
          Select Help:
          <select name="Select Help">
            <option value="police">Police</option>
            <option value="ems">EMS</option>
            <option value="firefighter">Firefighter</option>
            <option value="superhero">Superhero</option>
          </select>
        </label>
        <label>
          Image/Video:
          <input type="file" name="media" />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div className="superhero-container">
      <img src={superheroImage} alt="Superhero" className="superhero" />
    </div>
    </div>
  );
};

export default Report;
