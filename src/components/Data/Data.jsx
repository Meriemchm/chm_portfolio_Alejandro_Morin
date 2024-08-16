import mail from "../../assets/mail.svg";
import linkedin from "../../assets/linkedin.svg";
import education from "../../assets/education.svg";
import experience from "../../assets/experience.svg";
import project_1 from "../../assets/project_1.png";
import project_2 from "../../assets/project_2.svg";
import project_3 from "../../assets/project_3.svg";
import project_4 from "../../assets/project_4.svg";
import project_5 from "../../assets/project_5.svg";
import project_6 from "../../assets/project_6.svg";
import python from "../../assets/python.svg";
import java from "../../assets/java.svg";
import db from "../../assets/db.svg";
import mysql from "../../assets/mysql.svg";
import js from "../../assets/js.svg";
import figma from "../../assets/figma.svg";
import react from "../../assets/react.svg";
import vs from "../../assets/vs.svg";
import pycharm from "../../assets/pycharm.svg";
import trsl from "../../assets/trsl.svg";
import msdr from "../../assets/msdr.svg";
import microbit from "../../assets/microbit.svg";
import op from "../../assets/op.svg";
import github from "../../assets/github.svg";

export const SocialLinks = [
  {
    id: 1,
    mobile: (
      <>
        <img src={linkedin} alt="linkedin" />
      </>
    ),
    href: "https://www.linkedin.com/in/alejandro-morin-a97378197",
  },
  {
    id: 3,
    mobile: (
      <>
        <img src={github} alt="mail" />
      </>
    ),
    href: "https://github.com/Alejo-20-20",
  },
  {
    id: 2,
    mobile: (
      <>
        <img src={mail} alt="mail" />
      </>
    ),
    href: "mailto:alejandro.p.morin@gmail.com",
  },
];

export const Navlink = [
  {
    id: 1,
    link: "Inicio",
  },
  {
    id: 2,
    link: "Currículum",
  },
  {
    id: 7,
    link: "Habilidades",
  },
  {
    id: 3,
    link: "Proyecto",
  },
  {
    id: 4,
    link: "Contacto",
  },
];

export const sideBarItem = [
  {
    id: 1,
    path: "/Historial_Laboral",
    title: "Historial Laboral",
    icon: <img src={experience} alt="experience" />,
  },
  {
    id: 2,
    path: "/Educación",
    title: "Educación",
    icon: <img src={education} alt="education" />,
  },
];

export const resumeItem = [
  {
    id: 1,
    category: "Historial Laboral",
    title: "Machine Learning Data Associate Amazon",
    date: "2020-05 - 2023-02",
    description:
      "Reportar anomalías en los trabajos/tareas recibidas y comunicar las tendencias a su respectivo Team/Ops Manager.",
    style: "",
  },
  {
    id: 2,
    category: "Historial Laboral",
    title: "AIeSEC Global Volunteer leadership Program",
    date: "2016-12 - 2017-04",
    description:
      "Crear campañas culturales. -Implementación de cuentos y leyendas tradicionales de Quito. -Actuaciones teatrales, folletos y contenidos audiovisuales. -Organización de rutas en campañas. -Realizar tareas ejecutivas de marketing y ventas (BTL & ATL) para la obtención de utilidades para la organización sin fines de lucro Quito Eterno.",
    style: "flex-row-reverse",
  },
  {
    id: 3,
    category: "Historial Laboral",
    title: "BTL & ATL Marketing Associate",
    date: "2016-01 - 2016-12",
    description:
      "-Gestor de cuentas clave. -Organizador de activaciones de diferentes marcas. -Preparación de conciertos, ferias y aniversarios corporativos. -Realizar tareas ejecutivas de marketing y ventas (BTL&ATL).",
    style: "",
  },

  {
    id: 4,
    category: "Educación",
    title: "Software Engineer, Beginner programming training",
    date: "2023-04 - 2023-10",
    description: "ONE-Oracle Next Education / Alura LATAM, México",
    style: "",
  },
  {
    id: 5,
    category: "Educación",
    title:
      "Software Development, Advanced technician diploma Software Development",
    date: "2022-01 - 2023-02 ",
    description: "CENFOTEC, Costa Rica",
    style: "",
  },
  {
    id: 6,
    category: "Educación",
    title: " Economy, Business Administration",
    date: "2021-02 - present",
    description: "UNINI México, México",
    style: "",
  },
  {
    id: 7,
    category: "Educación",
    title: "High School Diploma",
    date: "2003-02 - 2008-11 ",
    description: "Colegio Teresiano, Managua, Nicaragua",
    style: "",
  },
];

export const techs = [
  {
    id: 1,
    src: <img src={python} alt="icon" />,
    title: "Python",
    type: "Programming languages",
  },
  {
    id: 2,
    src: <img src={java} alt="icon" />,
    title: "JAVA",
    type: "Programming languages",
  },
  {
    id: 3,
    src: <img src={js} alt="icon" />,
    title: "JavaScript",
    type: "Programming languages",
  },
  {
    id: 4,
    src: <img src={react} alt="icon" />,
    title: "React",
    type: "Framework",
  },
  {
    id: 5,
    src: <img src={figma} alt="icon" />,
    title: "Figma",
    type: "Design",
  },
  {
    id: 6,
    src: <img src={mysql} alt="icon" />,
    title: "MySQL",
    type: "Database",
  },
  {
    id: 7,
    src: <img src={db} alt="icon" />,
    title: "Database Management",
    type: "Database",
  },
  {
    id: 8,
    src: <img src={pycharm} alt="icon" />,
    title: "PyCharm",
    type: "Environment",
  },
  {
    id: 9,
    src: <img src={vs} alt="icon" />,
    title: "Visual Studio Code",
    type: "Environment",
  },
  {
    id: 10,
    src: <img src={microbit} alt="icon" />,
    title: "Microsoft Make Code",
    type: "others",
  },
  {
    id: 11,
    src: <img src={msdr} alt="icon" />,
    title: "MS Office / Google Drive",
    type: "others",
  },
  {
    id: 12,
    src: <img src={trsl} alt="icon" />,
    title: "Slack, Trello, Chime",
    type: "others",
  },
  {
    id: 13,
    src: <img src={op} alt="icon" />,
    title: "Operating System Knowledge",
    type: "others",
  },
];

export const menuItemProject = [
  {
    id: 1,
    title: "Design",
  },
  // {
  //   id: 2,
  //   title: "Others",
  // },
];

export const projects = [
  {
    id: 1,
    src: (
      <img
        src={project_1}
        alt="project-name"
        className="rounded-t-lg h-60 w-full object-cover"
      />
    ),
    category: "Design",
    title: "Template",
    description: "description",
    hdemo:
      "https://www.figma.com/proto/XjC8TzZZFzMUd1TV7ixUhZ/Template?node-id=15-2&t=jnK9ig6FLx1mDbZa-1",
  },
  {
    id: 2,
    src: (
      <img
        src={project_2}
        alt="project-name"
        className="rounded-t-lg h-60 w-full object-cover"
      />
    ),
    category: "Design",
    title: "Ads Dashboard UI KIT",
    description: "description",
    hdemo:
      "https://www.figma.com/proto/sEzwef47N9UPEymIQUGW1N/Ads-Dashboard-UI-KIT?node-id=121-310&t=SwW0fMUbS4EzKEUR-1.",
  },
  {
    id: 3,
    src: (
      <img
        src={project_3}
        alt="project-name"
        className="rounded-t-lg h-60 w-full object-cover"
      />
    ),
    category: "Design",
    title: "Remmus",
    description: "description",
    hdemo:
      "https://www.figma.com/proto/k2TNlBwST4yRgnWawyGV7O/Remmus?node-id=103-2&t=bXQ2PsQf74QbtzDd-1.",
  },
  {
    id: 4,
    src: (
      <img
        src={project_4}
        alt="project-name"
        className="rounded-t-lg h-60 w-full object-cover"
      />
    ),
    category: "Design",
    title: "Music Streaming web",
    description: "description",
    hdemo:
      "https://www.figma.com/proto/HzwLThLF3QBuO5AB4qVf1o/Music-Streaming-web?node-id=220-17&t=noKT4aagxAhRfVwi-1.",
  },
  // {
  //   id: 5,
  //   src: (
  //     <img
  //       src={project_5}
  //       alt="project-name"
  //       className="rounded-t-lg h-60 w-full object-cover"
  //     />
  //   ),
  //   category: "Design",
  //   title: "Protagonista Digital Agency",
  //   description: "description",
  //   hdemo:
  //     "https://www.figma.com/proto/hhYNvoaVoATFhnTczX3r3A/Protagonista---Digital-Agency-%26-Portfolio?node-id=7736-2187&t=WwXlcp2hXv49CUVg-1.",
  // },
  {
    id: 6,
    src: (
      <img
        src={project_6}
        alt="project-name"
        className="rounded-t-lg h-60 w-full object-cover"
      />
    ),
    category: "Design",
    title: "Sales crm app",
    description: "description",
    hdemo:
      "https://www.figma.com/proto/DT4yMkB1C4NOpj62pPjcqp/sales-crm-app?node-id=0-2&t=y38RRIxVxDRL9xRc-1",
  },
];

export const formItem = [
  {
    id: 1,
    name: "Nombre",
    type: "text",
    placeholder: "Nombre",
    categorie: "input",
  },
  {
    id: 2,
    name: "Apellido",
    type: "text",
    placeholder: "Apellido",
    categorie: "input",
  },
  {
    id: 3,
    name: "email",
    type: "text",
    placeholder: "Correo ",
    categorie: "input",
  },
  {
    id: 4,
    name: "Mensaje",
    placeholder: "Mensaje",
    categorie: "textarea",
  },
];
