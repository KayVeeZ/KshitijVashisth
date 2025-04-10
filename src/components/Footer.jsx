import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col items-center text-center p-6 space-y-6">

      <div className="translucent-container p-2">
        <p className="text-lg">Have a project in mind?</p>

        <a
          href="mailto:kshitijvashisth@gmail.com"
          className="text-2xl text-white hover:text-[#1A9A0B] inline-block mt-5 mb-4 hover:underline"
        >
          kshitijvashisth@gmail.com
        </a>
        <p><a
          href="https://drive.google.com/file/d/1arUBFumXGHY-PhNOnrcTE-N9g_H9q5kB/view?usp=sharing" target="_blank" className='hover:underline'
        >
          Link to Resume
        </a></p>

      </div>

      <div className="translucent-container w-[95%]">
        <p className="text-muted-foreground">Design by: Kshitij Vashisth © 2025 </p>
        <p className="text-muted-foreground">All copyrighted properties belong to rightful owners. </p>
      </div>
    </div>
  );
};

export default Footer;
