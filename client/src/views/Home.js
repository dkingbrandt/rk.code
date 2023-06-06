import React, { useState, useEffect } from 'react'
import './../scss/pages/home.scss';
import Header from '../components/Header';
import Footer from '../components/Footer'
import tsIcon from './../img/typescript.svg';
import bootstrapIcon from './../img/bootstrap.svg';
import nodeIcon from './../img/node.svg';
import CardModal from '../components/cardModal';
import FormHome from '../components/formHome';
import FormAddProject from '../components/formAddProject';
import SmalModal from '../components/smalModal';
import FormDelete from '../components/deleteForm';
import FormInfoHome from '../components/formInfoHome';
import wordpressIcon from './../img/wordpress.svg';
import reactIcon from './../img/react.svg';
import sassIcon from './../img/sass.svg';
import jsIcon from './../img/js.svg';
import cssIcon from './../img/css.svg';

import { get, post, put, erase, patch} from "./../utility/fetchHealper";



export default function Home({theme, ToggleTheme, authorized, setAuthorized}) {

  const [popUp, setPopUp] = useState(false);
  const [popUpInfo, setPopUpInfo] = useState(false);
  const [addProjectModal, setAddProjetModal] = useState(false);
  const [addInfoModal, setAddInfoModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteInfo, setDeleteInfo] = useState(false);
  const [info, setInfo] = useState([]);
  const [projects, setProjects] = useState([]);
  const [heading, setHeading] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [infoHeading, setInfoHeading] = useState("");
  const [infoTitle, setInfoTitle] = useState("");
  const [infoDescription, setInfoDescription] = useState("");



  useEffect(() => {
    get("/home/info").then((response) =>
      setInfo(response.data)
    );
  }, []);

  useEffect(() => {
    get("/home/projects").then((response) =>
      setProjects(response.data)
    );
  }, []);

  console.log(info);

  const handlePopUp = () => {
    setPopUp((current) => !current); //toggle
  };
  const handleAddProjectModal = () => {
    setAddProjetModal((current) => !current); //toggle
  };
  const handleAddInfoModal = () => {
    setAddInfoModal((current) => !current); //toggle
  };
  const handleDelete = () => {
    setDeleteModal((current) => !current); //toggle
  };
  const handleDeleteInfo = () => {
    setDeleteInfo((current) => !current); //toggle
  };
  const handlepPopUpInfo = () => {
    setPopUpInfo((current) => !current); //toggle
  };

  function showDetail(index) {
    const ProjectIndex = projects[index];
    if (ProjectIndex == projects[index]) {
      setHeading(projects[index].heading);
      setTitle(projects[index].title);
      setDescription(projects[index].description);
     
    }
  }
  function showDetailInfo(index) {
    const InfoIndex = info[index];
    if (InfoIndex == info[index]) {
      setInfoHeading(info[index].heading);
      setInfoTitle(info[index].title);
      setInfoDescription(info[index].description);
    
    }
  }

  return (
    <div>
    <div className='pageContainer'>

    <div className='TopContainer'>
       <Header authorized={authorized} setAuthorized={setAuthorized} theme={theme} ToggleTheme={ToggleTheme}/>
      <div className='radialGradientDarkGreen'></div>
      <div className='radialGradientsmall'></div>
      <div className='radialGradientbig'></div>
      <div className='textBox'>
     
      <h1 className='textBox-h1'>En Junior webbyrå där idéer blir till verklighet.<br/><span className='textBox-h1-color'>Optimera ditt företag idag!</span></h1>
       <p className='textBox-p'> Välkommen till Rk.code en webbyrå med hög kvalitet & passion vi hjälper ditt företag att synas och växa online </p>
       <div className='textBox-Btn-Container'>
        <button className='btn-info-home'>mer info</button>
        <button className='btn-contact'>kontakta oss</button>
       </div>
      </div>
      </div>
    </div>
    

    <div  className='middleContainer'>
 
    <hr className='hr'/>
 
        <div className='middleContainer-img'>

          {theme === "light" &&
            <div className='team-circle-dan'>
                    <div className='circle-globe-1'>
                    </div>
                    <div className='circle-globe-2'>
                    </div>
                    <div className='circle-globe-3'>
                    </div>
                    <div className='circle-globe-4'>
                    </div>
                    <div className='circle-globe-5'>
                    </div>
                  

                    <div className='circle-globe-one'>
                    </div>
                    <div className='circle-globe-two'>
                    </div>
                    
                    <div className='circle-globe-three'>
                    </div>
                    <div className='circle-globe-four'>
                    </div>
                    <div className='circle-globe-five'>
                    </div>
                    

                  </div>
            }
    <button className='addInfo-Btn' onClick={handleAddInfoModal}>Lägg till Info</button>
    <div className='middleContainer-grid'>
     
    {info.map((infos, index) => {
   

        return (
    <div className='card-container'>
     <div className='icon-container'>
      {theme === "dark" ? (
      <img className='icon data' src={infos.img}alt="computer" />
      ):(
        <img className='icon data' src={infos.imgLight} alt="computer" />
      )}
      <div>
         <h4 className='icon-heading'>{infos.heading}</h4> 
         <p className='icon-p'>{infos.description}</p>
      </div>
     </div>

     {authorized && (
      <div className='admin-Btn-Container-icon'>
        <button className='erase-Btn' onClick={() => {
                  showDetailInfo(index);
                  handleDeleteInfo();

                }}>Ta bort</button>
        <button className='change-Btn' onClick={() => {
                  showDetailInfo(index);
                  handlepPopUpInfo();

                }}
        >Ändra</button>
      </div>
      )}
      </div>

        )  })};

     
     </div>

    </div>

    <hr className='hr'/>
   

    <div className='project-container'>
      <h2>Tidigare Projekt</h2>

      <button className='add-Btn' onClick={handleAddProjectModal}>Lägg till Projekt</button>

      <div className='project-container-grid'>

      {projects.map((project, index) => {

   
       console.log(project.heading)

   return (

      <div className='card-container'>
      <div className='card'>
        <img className='card-img' src={project.img} alt="websitephoto" />
        <p className='card-heading'>{project.heading}</p>
        <p className='card-p'>{project.description}</p>
        <div className="textBox-Btn-Container">
          <button className='btn-info-home'>mer info</button>
          <button className='btn-prev'>live preview</button>
        </div>
      </div>
      {authorized && (
      <div className='admin-Btn-Container'>
        <button className='erase-Btn' onClick={() => {
                  showDetail(index);
                  handleDelete();

                }}>Ta bort</button>

        <button className='change-Btn' index={index} onClick={() => {
                  showDetail(index);
                  handlePopUp();

                }}>Ändra</button>
      </div>
      )}
      </div>
   )})}

    
      </div>
    </div>
    <SmalModal handlePopUp={handleDelete } popUp={deleteModal} component={<FormDelete  handlePopUp={handleDelete} setProjects={setProjects} title={title} link={"home/projects/"} textHeading={"Är du säker på att du vill ta bort projektet?"}/>} />
    <SmalModal handlePopUp={handleDeleteInfo } popUp={deleteInfo} component={<FormDelete  handlePopUp={handleDeleteInfo} setProjects={setInfo} title={infoTitle} link={"home/info/"} textHeading={"Är du säker på att du vill ta bort infoblocket?"}/>} />
    <CardModal handlePopUp={handleAddProjectModal } popUp={addProjectModal} component={<FormAddProject textHeading={"Lägg till ett nytt Projekt"} link={"home/projects/"} setProjects={setProjects} handlePopUp={handleAddProjectModal} />}/>
    <CardModal handlePopUp={handleAddInfoModal } popUp={addInfoModal} component={<FormAddProject textHeading={"Lägg till ett nytt informationsblock"} link={"home/info"} setProjects={setInfo} handlePopUp={handleAddInfoModal} />}/>
    <CardModal handlePopUp={handlepPopUpInfo} popUp={popUpInfo} component={<FormInfoHome setInfo={setInfo} heading={infoHeading} title={infoTitle} description={infoDescription} handlePopUp={handlepPopUpInfo}/>}/>
    <CardModal handlePopUp={handlePopUp} popUp={popUp} component={<FormHome setProjects={setProjects} heading={heading} title={title} description={description} handlePopUp={handlePopUp}/>}/>

    </div>
      <Footer />

    </div>
  )
}
