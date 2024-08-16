import React from "react";

const Skill = ({ Title, data }) => {
  return (
    <>
      <h2 className={`text-bold text-2xl text-five px-4`}>{Title}</h2>
      <div
        data-aos="fade-up"
        className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center px-4 py-8 justify-center"
      >
        {data.map(({ id, title, src, style }) => (
          <div
            className="border border-second p-2 rounded-lg hover:scale-105 duration-500 flex flex-col justify-center items-center  "
            key={id}
          >
            <div className="m-auto backdrop-blur-sm  flex justify-center items-center">
              {src}
            </div>

            <div className="w-full text-center">
              <p className="mt-4 text-second text-md md:text-xl">{title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skill;
