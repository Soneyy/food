import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const Projects = () => {
  const handelGithubClick =() =>{
    window.open(
      "https://github.com/Soneyy/Movieland.git",
      "_blank"
    );

  }
  const handleSiteClick=() =>{
    window.open(
      "http://localhost:3000/"
    )
  }
  const handleDiceGameGithubClick=()=>{
    window.open(
      ""
    )
  }
  const projects = [
    { 
      name: "Movieland",
      image: "/movie.jpg", // Path to the image
      text: "This is the frontend section of a website where users can search for movies. When a specific movie is searched, the details of that particular movie are displayed.",
      button1: <button onClick={handelGithubClick}className="bg-gray-800 hover:bg-white text-white hover:text-pink-600 px-4 py-2 rounded inline-flex items-center"><FaGithub className="mr-2"/>Github</button>,
      button2: <button onClick={handleSiteClick} className="bg-gray-800 hover:bg-white hover:text-pink-600 text-white px-4 py-2 rounded inline-flex items-center"><CgWebsite className="mr-2"/>Site</button>
    },
    { 
      name: "Dice Game",
      image: "/dice.jpg", // Path to the image
      text: "This is a dice game where players select a number and then roll a virtual dice. If the rolled dice number matches the selected number, the player wins and their score is displayed. ",
      button1: <button className="bg-gray-800 hover:bg-white  hover:text-pink-600 text-white px-4 py-2 rounded inline-flex items-center"><FaGithub className="mr-2"/>Github</button>,
      button2: <button className="bg-gray-800 hover:bg-white text-white px-4 py-2  hover:text-pink-600 rounded inline-flex items-center"><CgWebsite className="mr-2"/>Site</button>
    },
    { 
      name: "FoodZone",
      image: "/food.jpg", // Path to the image
      text: "This is the frontend section of a website where users can search for food. When a specific food is searched, the details of that particular food are displayed. ",
      button1: <button className="bg-gray-800 hover:bg-white  hover:text-pink-600 text-white px-4 py-2 rounded inline-flex items-center"><FaGithub className="mr-2"/>Github</button>,
      button2: <button className="bg-gray-800 hover:bg-white  hover:text-pink-600 text-white px-4 py-2 rounded inline-flex items-center"><CgWebsite className="mr-2"/>Site</button>
    },
    { 
      name: "Contact App",
      image: "/contact.jpg", // Path to the image
      text: "This is a contact application where users can manage their contacts. Users can add new contacts, search for existing contacts, edit contact details, and delete contacts from their list.",
      button1: <button className="bg-gray-800 hover:bg-white  hover:text-pink-600 text-white px-4 py-2 rounded inline-flex items-center"><FaGithub className="mr-2"/>Github</button>,
      button2: <button className="bg-gray-800 hover:bg-white  hover:text-pink-600 text-white px-4 py-2 rounded inline-flex items-center"><CgWebsite className="mr-2"/>Site</button>
    },
    { 
      name: "E-commerce Website",
      image: "/web.png", // Path to the image
      text: "This website serves as the front-facing interface for a furniture store. It offers users a visually appealing platform to explore a wide range of furniture products, from sofas and chairs to tables and beds. ",
      button1: <button className="bg-gray-800 hover:bg-white  hover:text-pink-600 text-white px-4 py-2 rounded inline-flex items-center"><FaGithub className="mr-2"/>Github</button>,
      button2: <button className="bg-gray-800 hover:bg-white  hover:text-pink-600 text-white px-4 py-2 rounded inline-flex items-center"><CgWebsite className="mr-2"/>Site</button>
    },
    { 
      name: "Movieland",
      image: "/movie.jpg", // Path to the image
      text: "This is the frontend section of a website where users can search for movies. When a specific movie is searched, the details of that particular movie are displayed.",
      button1: <button className="bg-gray-800 hover:bg-white  hover:text-pink-600 text-white px-4 py-2 rounded inline-flex items-center"><FaGithub className="mr-2"/>Github</button>,
      button2: <button className="bg-gray-800 hover:bg-white  hover:text-pink-600 text-white px-4 py-2 rounded inline-flex items-center"><CgWebsite className="mr-2"/>Site</button>
    },
   
    
  ];

  return (
    <div className='min-h-screen p-20 flex flex-col items-center justify-center bg-gray-900 text-white'>
      <h1 className='text-5xl font-semibold mb-20 leading-normal uppercase text-pink-600'>Projects</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-4 gap-12'>
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="b_glow p-9 rounded shadow-lg flex flex-col items-center justify-center h-auto w-100 border-2 border-pink-600 hover:bg-pink-600"
          >
            <img src={project.image} alt={project.name} className="w-full h-32 object-cover mb-4 rounded"/>
            <h2 className="text-xl font-bold mb-2">{project.name}</h2>
            <p className="text-center mb-4">{project.text}</p>
            <div className="flex space-x-4">
              {project.button1}
              {project.button2}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
