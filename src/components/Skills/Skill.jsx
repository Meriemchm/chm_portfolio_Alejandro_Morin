import React from "react";

const Skill = ({ Title, data }) => {
  return (
    <>
      <h2 className={`text-bold text-2xl text-five`}>{Title}</h2>
      <div
        data-aos="fade-up"
        className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 sm:px-0 justify-center"
      >
        {data.map(({ id, title, src, style }) => (
          <div className="border border-second p-2 rounded-lg hover:scale-105 duration-500  " key={id}>
            <div className="m-auto w-14 h-24 backdrop-blur-sm  flex justify-center items-center">
              {src}
            </div>

            <p className="mt-4 text-second text-xl">{title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skill;
