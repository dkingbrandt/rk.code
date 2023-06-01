import React, { useState,useEffect} from 'react'
import { get } from '../utility/fetchHealper'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './../scss/pages/aboutUs.scss';
import Dan from './../img/dan.jpg';
import nodeIcon from './../img/node.svg';
import cssIcon from './../img/css.svg';
import wordpressIcon from './../img/wordpress.svg';
import reactIcon from './../img/react.svg';
import bootstrapIcon from './../img/bootstrap.svg';
import tsIcon from './../img/typescript.svg';
import jsIcon from './../img/js.svg';
import sassIcon from './../img/sass.svg';
import linkedInIcon from './../img/linkedin.svg';
import mailIcon from './../img/mejl.svg';
import CardModal from '../components/cardModal';
import FormAboutUsHistory from '../components/formAboutUsHistory';
import FormAboutUsTeam from '../components/formAboutUsTeam';






export default function About({ theme, ToggleTheme }) {
  
  const [popUpHistory, setPopUpHistory] = useState(false);
  const [popUpTeam, setPopUpTeam] = useState(false);
  const [addHistory, setAddHistory] = useState(false);
  const [addTeam, setAddTeam] = useState(false);
  const [historyModal, setHistoryModal] = useState(false);
  const [teamModal, setTeamModal] = useState(false);
  const [history, setHistory] = useState([]);
  const [team, setTeam] = useState([]);
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");
  const[heading1, setHeading1] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [description1, setDescription1] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    get("/aboutus/history").then((response) =>
      setHistory(response.data)
    );
  }, []);

  useEffect(() => {
    get("/aboutus/team").then((response) =>
      setTeam(response.data)
    );
  }, []);

  const handlePopUpTeam = () => {
    setPopUpTeam((current) => !current); //toggle
    setTeamModal(false);

  };

  const handlePopUpHistory = () => {
    setPopUpHistory((current) => !current); //toggle
    setHistoryModal(false);
  };

  

  function showDetailHistory(index) {
    const HistoryIndex = history[index];
    if (HistoryIndex == history[index]) {
      setHeading(history[index].heading);
      setTitle(history[index].title);
      setDescription(history[index].description);
    }
  }


  function showDetailTeam(index) {
    const TeamIndex = team[index];
    if (TeamIndex == team[index]) {
      setName(team[index].name)
      setHeading(team[index].heading1);
      setHeading1(team[index].heading2);
      setTitle(team[index].title);
      setDescription(team[index].description1);
      setDescription1(team[index].description2);
    }
  }



  return (
    <div className='about-container'>
      <Header theme={theme} ToggleTheme={ToggleTheme}/>
         <div className='radialGradientGreen'></div>
         <div className='radialsmall'></div>
         <div className='radialbig'></div>
         <div className='history-wrapper'>

        <div className='history-container'>
          <h1 className='history-heading'>VÅR HISTORIA</h1>
          {history.map((history, index) => {
            
            return (
              <div className='history-create-box'>
                <div className='history-label-create'>
                  <img className='icon-history' src={history.img} alt="task" />
                  <p className='heading-create'>{history.heading}</p>
                </div>
                <div className='history-textBox-knowledge'>
                  <p className='text-knowledge'>{history.description}</p>

                  <div className='history-Btn-Container-icon'>
                    <button className='history-create-Btn' index={index} onClick={() => {
                      showDetailHistory(index)
                      handlePopUpHistory()
                      setAddHistory(true)
                      setHistoryModal(true)
                    }}>Lägg till</button>
                    <button className='history-change-Btn' index={index} onClick={() => {
                      showDetailHistory(index)
                      handlePopUpHistory()
                      setAddHistory(false)
                      setHistoryModal(true)
                    }}>Ändra</button>

                  </div>
                </div>
            

              
              </div>




            )




          })}

        
          {historyModal && (
            <CardModal
              handlePopUp={handlePopUpHistory}
              popUp={popUpHistory}
              component={<FormAboutUsHistory setHistory={setHistory} img={img} heading={heading} title={title} description={description}  handlePopUp={handlePopUpHistory} popUp={popUpHistory} add={addHistory}  />}
            />
          )}
          {teamModal && (
            <CardModal
              handlePopUp={handlePopUpTeam}
              popUp={popUpTeam}
              component={<FormAboutUsTeam setTeam={setTeam} img={img} name={name} heading={heading} heading1={heading1} title={title} description={description} description1={description1}  handlePopUp={handlePopUpTeam} popUp={popUpTeam} add={addTeam}  />}
            />
          )}

        </div>


      </div>



      <div className='team-wrapper'>
        <h1 className='team-heading'>TEAMET</h1>
        {team.map((member, index) => {
          return (
            <div>
          
              <div className='team-box-dan'>


                {member.title === "Dan Kingbrant" &&
                <div className='team-circle-dan'>
                  <img className='team-img-dan' src={member.img} alt='photo-dan' />
                  <div className='circle-globe-one'>
                    <img className='circle-globe-node-icon' src={nodeIcon} alt='node-icon' />
                  </div>
                  <div className='circle-globe-two'>
                    <img className='circle-globe-react-icon' src={reactIcon} alt='react-icon' />
                  </div>
                  <div className='circle-globe-three'>
                    <img className='circle-globe-bootstrap-icon' src={bootstrapIcon} alt='bootstrap-icon' />
                  </div>
                  <div className='circle-globe-four'>
                    <img className='circle-globe-typescript-icon' src={tsIcon} alt='typescript-icon' />
                  </div>
                  <div className='circle-globe-five'>
                    <img className='circle-globe-css-icon' src={cssIcon} alt='css-icon' />
                  </div>
                </div>
                }

                {member.title === "Rebecca Rydgren" &&
                  <div className='team-circle-rebecca'>
                    <img className='team-img-rebecca' src={member.img} alt='photo-rebecca' />
                    <div className='circle-globe-one'>
                      <img className='circle-globe-wordpress-icon' src={wordpressIcon} alt='wordpress-icon' />
                    </div>
                    <div className='circle-globe-two'>
                      <img className='circle-globe-react-icon' src={reactIcon} alt='react-icon' />
                    </div>
                    <div className='circle-globe-three'>
                      <img className='circle-globe-sass-icon' src={sassIcon} alt='sass-icon' />
                    </div>
                    <div className='circle-globe-four'>
                      <img className='circle-globe-js-icon' src={jsIcon} alt='js-icon' />
                    </div>
                    <div className='circle-globe-five'>
                      <img className='circle-globe-css-icon' src={cssIcon} alt='css-icon' />
                    </div>
                   
                  </div>
                }

                <div className='wrapper-text-dan'>


                  <div className='team-heading-box-dan'>
                    <p className='team-heading-dan'>{member.name}</p>
                  </div>


                  <div className='team-text-box-experience'>
                    <p className='team-sub-heading-dan'>{member.heading1} <p className='sub-heading-divider'>|</p> </p>
                    <p className='team-text-dan'>{member.description1}</p>


                  </div>
                  <div className='team-text-box-knowledge'>
                    <p className='team-sub-heading-dan'>{ member.heading2}<p className='sub-heading-divider'>|</p> </p>
                    <p className='team-text-dan'>{member.description2}</p>


                  </div>

                  {member.title === "Dan Kingbrant" &&
                    <div className='team-icon-box'>
                      <a href="mailto: dkingbrandt@hotmail.com"> <img className='team-mail-icon' src={mailIcon} alt='mail-dan' /></a>
                      <a href="https://www.linkedin.com/in/dan-kingbrant-102855233/"><img className='team-linkedin-icon' src={linkedInIcon} alt='linkedin-dan' /></a>
                    </div>
                  }

                  {member.title === "Rebecca Rydgren" && 
                    <div className='team-icon-box'>
                      <a href="mailto: becka_91_@hotmail.com"> <img className='team-mail-icon' src={mailIcon} alt='mail-rebecca' /></a>
                      <a href="https://www.linkedin.com/in/rebecca-rydgren-607b21241/"><img className='team-linkedin-icon' src={linkedInIcon} alt='linkedin-rebecca' /></a>
                    </div>
                  }


                  <div className='team-Btn-Container-icon'>
                    <button className='team-create-Btn' index={index} onClick={() => {
                      showDetailTeam(index)
                      handlePopUpTeam()
                      setTeamModal(true)
                      setAddTeam(true)
                    }}>Lägg till</button>
                    <button className='team-change-Btn' index={index} onClick={() => {
                      showDetailTeam(index)
                      handlePopUpTeam()
                      setTeamModal(true)
                      setAddTeam(false)
                    }}>Ändra</button>
                  </div>

              
                </div>

              </div>

              {/* <div className='team-box-rebecca'>
                

                <div className='wrapper-text-rebecca'>


                  <div className='team-heading-box-rebecca'>
                    <p className='team-heading-rebecca'>Rebecca Rydgren</p>
                  </div>


                  <div className='team-text-box-experience'>
                    <p className='team-sub-heading-rebecca'>Erfarenhet <p className='sub-heading-divider'>|</p> </p>
                    <p className='team-text-rebecca'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum non,
                      vero deleniti veniam commodi, fuga sit fugiat consectetur ipsam tempore molestiae
                      cumque soluta minima tenetur accusantium earum dolorem quod

                    </p>


                  </div>
                  <div className='team-text-box-knowledge'>
                    <p className='team-sub-heading-rebecca'>Kunskap <p className='sub-heading-divider'>|</p> </p>
                    <p className='team-text-rebecca'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum non,
                      vero deleniti veniam commodi, fuga sit fugiat consectetur ipsam

                    </p>


                  </div>
                
                

                </div>
        
              

              </div> */}
            </div>







          )


                })}

        

     
        

        

       



      </div>


      <Footer />
    </div>
  )
}
