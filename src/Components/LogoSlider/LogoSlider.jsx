import React from 'react';
import './LogoSlider.css';

const LogoSlider = () => {
  return (
    <div className="slider">
      <div className="slide-track">
      <div className="slide">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original-wordmark.svg" />
          </div>
      <div className="slide">
           
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original-wordmark.svg" />
          
          </div>
      <div className="slide">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original-wordmark.svg" />
          
          </div>
      <div className="slide">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original-wordmark.svg" />
          </div>
      <div className="slide">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original-wordmark.svg" />
          </div>
      </div>
        {/* Duplicate the logos to create the infinite effect */}
        <div className="slide-track">
      <div className="slide">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original-wordmark.svg" />
          </div>
      <div className="slide">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original-wordmark.svg" />
          </div>
      <div className="slide">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original-wordmark.svg" />
          </div>
      <div className="slide">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original-wordmark.svg" />
          </div>
      <div className="slide">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original-wordmark.svg" />
          </div>
      </div>
    </div>
  );
};

export default LogoSlider;
