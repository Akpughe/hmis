import React from 'react';

const Navbrand = () => {
  return (
    <div className="flex-shrink-0 flex items-center">
      <img
        className="block lg:hidden h-14 w-auto"
        src="/hpro.png"
        alt="HealthPro"
      />
      <img
        className="hidden lg:block h-14 w-auto"
        src="/hpro.png"
        alt="HealthPro"
      />
    </div>
  );
};

export default Navbrand;
