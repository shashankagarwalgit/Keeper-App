import React from "react";

const date = new Date();

const getYear = date.getFullYear();


function Footer(){
   return (
    <footer><p>© Shashank Agarwal {getYear}</p></footer>
   );
}

export default Footer;