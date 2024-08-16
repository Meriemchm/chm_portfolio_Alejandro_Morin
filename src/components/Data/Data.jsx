import mail from "../../assets/mail.svg";
import linkedin from "../../assets/linkedin.svg";
import education from "../../assets/education.svg";
import experience from "../../assets/experience.svg";

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
    id: 2,
    mobile: (
      <>
        <img src={mail} alt="mail" />
      </>
    ),
    href: "mailto:alejandro.p.morin@gmail.com ",
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
    date: "2020-05 - 2023-02",
    description:
      "-Gestor de cuentas clave. -Organizador de activaciones de diferentes marcas. -Preparación de conciertos, ferias y aniversarios corporativos. -Realizar tareas ejecutivas de marketing y ventas (BTL&ATL).",
    style: "",
  },
];

export const techs = [
  {
    id: 1,
    src: "",
    title: "Python",
    type: "Programming languages",
  },
  {
    id: 2,
    src: "",
    title: "Figma",
    type: "design",
  },
];

export const projects = [
  {
    id: 1,
    src: "",
    title: "Booki",
    description:
      "L'objectif était d'intégrer la maquette d'un site de planification de vacances nommé 'Booki', en respectant les spécifications fonctionnelles et techniques.",
    hdemo: "https://dalsantosev.github.io/gitproject-3/",
  },
];

export const formItem = [
  {
    id: 1,
    name: "firstName",
    type: "text",
    placeholder: "First Name",
    pattern: "[A-Za-z]+",
    categorie: "input",
  },
  {
    id: 2,
    name: "lastName",
    type: "text",
    placeholder: "Last Name",
    pattern: "[A-Za-z]+",
    categorie: "input",
  },
  {
    id: 3,
    name: "email",
    type: "text",
    placeholder: "Email",
    pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
    categorie: "input",
  },
  {
    id: 4,
    name: "message",
    placeholder: "Message",
    categorie: "textarea",
  },
];
