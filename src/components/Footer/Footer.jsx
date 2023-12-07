import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='container-fluid bg-dark text-white pt-2 pb-1'>
      <p style={{ textAlign: 'center' }}>Made by Ashish Kumar {currentYear}</p>
    </div>
  );
}

export default Footer;
