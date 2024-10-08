import React from "react";
import { formItem } from "../Data/Data";

const Contact = () => {
  const client = "https://getform.io/f/bgdyqova";
  const inputItem = formItem.filter((item) => item.categorie === "input");
  const areaItem = formItem.filter((item) => item.categorie === "textarea");
  const endElemnt = inputItem.slice(-1)[0];
  return (
    <div name="Contacto" className="h-full py-20  ">
      <div data-aos="fade-up" className="pb-8 md:px-20">
        <p className="text-4xl md:text-4xl font-semibold text-primary text-center ">
          Contacto
        </p>
      </div>

      <div className="flex flex-col 2xl:flex-row justify-center items-center  md:w-full lg:px-0 ">
        <div data-aos="fade-up" className="p-5 flex rounded-lg">
          <form
            action={client}
            method="POST"
            className="flex flex-col w-full justify-center mt-5 gap-4"
          >
            <div className="flex gap-3  ">
              {inputItem.slice(0, 2).map((item, id) => {
                return (
                  <input
                    key={id}
                    type={item.type}
                    name={item.name}
                    autoComplete="off"
                    placeholder={item.placeholder}
                    required
                    className="w-1/2 p-2 md:px-6 bg-transparent border-b-[1px] border-b-black  text-black placeholder-black focus:outline-none"
                  />
                );
              })}
            </div>

            <input
              key={endElemnt.id}
              type={endElemnt.type}
              name={endElemnt.name}
              autoComplete="off"
              placeholder={endElemnt.placeholder}
              required
              className="p-2 bg-transparent border-b-[1px] border-b-black text-black placeholder-black focus:outline-none"
            />

            {areaItem.map((item, id) => {
              return (
                <textarea
                  key={id}
                  name={item.name}
                  placeholder={item.placeholder}
                  rows="10"
                  autoComplete="off"
                  required
                  style={{ resize: "none" }}
                  className="p-2 bg-transparent border-[1px] border-black  text-black placeholder-black focus:outline-none"
                ></textarea>
              );
            })}

            <button className="text-white bg-second px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
            contáctame
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
