import React from 'react';
import './Report.css'

const Report = () => {
    
    return (
      <div>
        <h2>Report Form</h2>
        <form>
          <label>
            Description:
            <textarea name="description" />
          </label>
          <label>
            Location:
            <input type="text" name="location" />
          </label>
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
      </div>
    );
  };
  
  export default Report;