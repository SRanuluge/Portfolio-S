import pro1 from "../../public/pro1.png";
import pro2 from "../../public/pro2.png";
import pro3 from "../../public/pro3.jpg";
import pro4 from "../../public/pro4.jpg";
import pro5 from "../../public/pro5.png";
import pro6 from "../../public/pro6.png";
export const projects = [
    {
      title: "NextJs-13 Car Site",
      description: "This site has been built using NextJs and Tailwind Css , Headlessui. I used rapid api for details. User can search for a rental car by Brand, model, Fuel type, Manufactured Year. ",
      img: pro1,
      techStack:["ReactJs, NextJs, Tailwind css , Headlessui, Rapid api"],
      linkGithub:"https://github.com/SRanuluge/next-car-site",
      linkCode:"https://next-car-site.vercel.app/"
    },
    {
      title: "Task App",
      description: "This is a task management Application (Front end). Users can register , login and manage there tasks. An email notifications will be sent to the users when upon registration and deletion of their accounts.",
      img: pro4,
      techStack:["ReactJs, Material-Tailwind, Axios, redux-toolkit"],
      linkGithub:"https://github.com/SRanuluge/task-manager-front-end",
      linkCode:"https://sranuluge.github.io/task-manager-front-end"
    },
    {
      title: "Task App Apis",
      description: "This is a task management Application (REST apis). Users can register , login and manage there tasks. An email notifications will be sent to the users when upon registration and deletion of their accounts.",
      img: pro5,
      techStack:["NodeJs, MongoDB, jwt, Courier/mail"],
      linkGithub:"https://github.com/SRanuluge/task-manager-api",
      linkCode:null
    },
    {
      title: "Weather Application",
      description: "This is a user-friendly weather application crafted with React.js. Users can effortlessly access weather information by simply entering a city name, ensuring quick and intuitive access to current weather data.",
      img: pro6,
      techStack:["Reactjs, MaterialUi, Axios, Openweathermap API"],
      linkGithub:"https://github.com/SRanuluge/react-weather-app",
      linkCode:"https://sranuluge.github.io/react-weather-app/"
    },
    {
      title: "E-Commerce Website",
      description: "This site has been built using ReactJs and Redux , Axios ",
      img: pro2,
      techStack:["ReactJs, Redux, Axios,"],
      linkGithub:"https://github.com/SRanuluge/demo-react-online-store",
      linkCode:"https://sranuluge.github.io/demo-react-online-store"
    },
    {
      title: "Chat Room",
      description: "Users can sign in using google account. This chat app has been build using ReactJs and Firebase , Axios ",
      img: pro3,
      techStack:["ReactJs, Firebase"],
      linkGithub:"https://github.com/SRanuluge/react-firebase-chat-app",
      linkCode:"https://sranuluge.github.io/react-firebase-chat-app/"
    },
    
  ];

export const linkGithub = "https://github.com/SRanuluge";
export const linkLinkedIn = "https://www.linkedin.com/in/sanjeewaranuluge/";
  
  export const navList = [
    { id: "1", name: "Home", link: "/" },
    { id: "2", name: "About", link: "/pages/about" },
    { id: "3", name: "Projects", link: "/pages/projects" },
    { id: "4", name: "Contact", link: "/pages/contact" },
  ];
  
  export const frontEnd = [
    'JavaScript', 'TypeScript', 'ReactJs', "NextJs", "React Native", "Redux Toolkit", "REST", "Formik","MUI", "CSS","html","Axios", "GraphQL" ,"TailwindCss"
  ]
  export const backEnd = [
    'PHP','Python','NodeJs', 'MySQL', "MongoDB",
  ]

  export const other = [
    "GitHub", "GitLab", "Jira","Problem solving and analytical skills", "Ability to work effectively in cross function teams"
  ]

  export const education = {
    title:"Bs.c Industrial Statistics and Financial Mathematics with Computer Science",
    university:"University of Colombo Sri Lanka",
    duration:"2014 Dec - 2017 Dec"

  }

  export const experience = [{
    title:"Software Engineer",
    domains:"Health Care, E-Commerce Platform",
    company:{name:"Aeturnum Lanka (Pvt) Ltd", link:"https://aeturnum.com/"},
    duration:"October 2021 – January 2023",
    techStack:[]
  },
  {
    title:"Software Engineer",
    domains:"E-learning platform",
    company:{name:"TechLead International (Pvt) Ltd", link:"https://techleadintl.com/"},
    duration:"January 2021 – September 2021",
    techStack:[]
  },
  {
    title:"Associate Software Engineer",
    domains:"Online food delivery mobile application",
    company:{name:"TechLead International (Pvt) Ltd", link:"https://techleadintl.com/"},
    duration:"December 2019 – January 2021",
    techStack:[]
  },
  {
    title:"Internship",
    domains:"Mobile App(e-commerce)",
    company:{name:"TechLead International (Pvt) Ltd", link:"https://techleadintl.com/"},
    duration:"June 2019 – December 2019",
    techStack:[]
  },
  {
    title:"Internship",
    domains:"",
    company:{name:"Brandix Apparel Solutions Limited", link:"https://brandix.com/"},
    duration:"Feb 2018 – Aug 2018",
    techStack:[]
  }
]