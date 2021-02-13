import React from 'react';

const Card = ({ figure, job, color }) => {
  return (
    <div
      className={`bg-white shadow-2xl rounded-md ${color} `}
      style={{ width: '300px', height: '100px' }}
    >
      <div className="pt-4 ml-8 text-white">
        <div>
          <h2 className="text-4xl">{figure}</h2>
        </div>
        <div className="mt-2">
          <h5 className="text-sm font-normal">{job}</h5>
        </div>
      </div>
      {/* <div className="flex justify-end ">
        <div className="bg-purple-500 text-white opacity-90 w-12 h-12 rounded-tl-full flex justify-center items-center ">
          hi
        </div>
      </div> */}
    </div>
  );
};

export default Card;
