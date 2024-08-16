import React from "react";
import { SocialLinks } from "../Data/Data";
import { Link } from "react-scroll";
import profile from "../../assets/profile.svg";

const Home = () => {
  return (
    <div name="Inicio" className="flex min-h-screen w-full pt-10 xl:pt-0 ">
      <div className="mx-auto flex flex-col-reverse justify-center items-center px-8 my-16 gap-8 xl:gap-0 xl:flex-row xl:my-0 xl:w-full ">
        <div
          data-aos="fade-left"
          className="flex flex-col xl:justify-center md:px-8 xl:w-1/2"
        >
          <div className="flex my-3">
            <ul className="flex flex-row ">
              {SocialLinks.map(({ id, mobile, href, download }) => {
                return (
                  <li key={id} className="mr-5 hover:scale-105 duration-200">
                    <a
                      href={href ? href : "/"}
                      download={download}
                      target="_blank"
                      rel="noreferrer"
                      className="flex justify-between items-center w-full bg-primary p-4 rounded-full cursor-pointer "
                    >
                      {mobile}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <h2 className="text-four text-2xl md:text-5xl font-bol">
            Bienvenido !{" "}
          </h2>
          <p className="text-xl text-second font-semibold pt-2">
            Alejandro José Pérez Morin
          </p>

          <p className="text-four py-8 lg:pr-10 md:w-full">
            Técnico en Ingeniería de Sistemas con gran interés en el desarrollo
            y mantenimiento de sistemas internos y servicios web AWS. Tengo una
            sólida capacidad para adaptarme a diversos entornos tecnológicos y
            aportar soluciones innovadoras. Me destaco por mi capacidad de
            trabajo en equipo y mi constante entusiasmo por aprender y
            perfeccionar mis habilidades técnicas. Busco una oportunidad laboral
            que me permita adquirir mayor experiencia en el campo de los
            sistemas internos y servicios web.
          </p>

          <div className="flex gap-5">
            <button className="bg-second  border-[1px] border-second text-white px-5 py-2 rounded-md   text-bold duration-200 hover:scale-105  ">
              {" "}
              <Link to="Contacto" smooth={true} duration={500}>
                Contáctame
              </Link>
            </button>
            <button className="bg-tansparent  border-[1px] border-second text-four px-5 py-2 rounded-md text-bold duration-200 hover:scale-105  ">
              {" "}
              <a
                href="/CV.zip"
                download="CV.zip"
                target="_blank"
                rel="noreferrer"
              >
                mi currículum
              </a>
            </button>
          </div>
          <a
            href="/Certificado.pdf"
            download="Certificado.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex gap-2 hover:text-primary py-12"
          >
            <h2 className="self-center font-bold underline md:text-xl text-lg ">
              Echa un vistazo a mi certificado.
            </h2>
          </a>
        </div>
        <div data-aos="fade-right">
          <img
            src={profile}
            alt="MyProfile"
            className="rounded-lg  md:w-auto h-[20rem] w-[15rem] md:h-auto object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
