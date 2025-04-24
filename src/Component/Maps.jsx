import React from 'react';

const Maps = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3487.967182156177!2d72.51512507531658!3d23.11419997910956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDA2JzUxLjEiTiA3MsKwMzEnMDMuNyJF!5e1!3m2!1sen!2sin!4v1739960815788!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[350px] max-[600px]:h-[200px]"
      />
    </div>
  );
};

export default Maps;
