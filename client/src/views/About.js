import React, { useState,useEffect} from 'react'
import { post, put, get } from '../utility/fetchHealper'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './../scss/pages/aboutUs.scss';
import knowledge from './../img/knowledge.svg';
import lightbulb from './../img/lightbulb.svg';
import taskTools from './../img/task-tools.svg';
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
  const[heading, setHeading] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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
  };

  const handlePopUpHistory = () => {
    setPopUpHistory((current) => !current); //toggle
  };

  const handleCloseModals = () => {
    setTeamModal(false);
    setHistoryModal(false);
  };

  function showDetail(index) {
    const ProjectIndex = history[index];
    if (ProjectIndex == history[index]) {
      setHeading(history[index].heading);
      setTitle(history[index].title);
      setDescription(history[index].description);
    }
  }



  return (
    <div className='about-container'>
      <Header theme={theme} ToggleTheme={ToggleTheme}/>
         <div className='radialGradientGreen'></div>
         <div className='radialsmall'></div>
         <div className='radialbig'></div>
         <div className='history-wrapper'>

         {console.log(history)}
        <div className='history-container'>
          <h1 className='history-heading'>VÅR HISTORIA</h1>
          {history.map((history, index) => {
            
            return (
              <div className='history-create-box'>
                <div className='history-label-create'>
                  <img className='icon-task' src={taskTools} alt="task" />
                  <p className='heading-create'>{history.heading}</p>
                </div>
                <div className='history-textBox-knowledge'>
                  <p className='text-knowledge'>{history.description}</p>
                </div>
            

               
                    <div className='admin-Btn-Container-icon'>
                      <button className='history-create-Btn' onClick={() => {
                        handlePopUpHistory()
                        setAddHistory(true)
                        setHistoryModal(true)
                      }}>Lägg till</button>
                      <button className='history-change-Btn' onClick={() => {
                        handlePopUpHistory()
                        setAddHistory(false)
                        setHistoryModal(true)
                      }}>Ändra</button>
                    
                    </div>
              </div>




            )




          })}

        
          {historyModal && (
            <CardModal
              handleCloseModals={handleCloseModals}
              handlePopUp={handlePopUpHistory}
              popUp={popUpHistory}
              component={<FormAboutUsHistory setHistory={setHistory} img={img} heading={heading} title={title} description={description} setHeading={setHeading} setTitle={setTitle} setDescription={setDescription} handlePopUp={handlePopUpHistory} popUp={popUpHistory} add={addHistory} handleCloseModals={handleCloseModals} />}
            />
          )}
          {teamModal && (
            <CardModal
              handleCloseModals={handleCloseModals}
              handlePopUp={handlePopUpTeam}
              popUp={popUpTeam}
              component={<FormAboutUsTeam handlePopUp={handlePopUpTeam} popUp={popUpTeam} add={addTeam} handleCloseModals={handleCloseModals} />}
            />
          )}

        </div>


      </div>



      <div className='team-wrapper'>
        <h1 className='team-heading'>TEAMET</h1>


        <div className='team-box-dan'>

          <div className='team-circle-dan'>
            <img className='team-img-dan' src={Dan} alt='photo-dan' />
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

          <div className='wrapper-text-dan'>


            <div className='team-heading-box-dan'>
              <p className='team-heading-dan'>Dan Kingbrant</p>
            </div>


            <div className='team-text-box-experience'>
              <p className='team-sub-heading-dan'>Erfarenhet <p className='sub-heading-divider'>|</p> </p>
              <p className='team-text-dan'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum non,
                vero deleniti veniam commodi, fuga sit fugiat consectetur ipsam tempore molestiae
                cumque soluta minima tenetur accusantium earum dolorem quod

              </p>


            </div>
            <div className='team-text-box-knowledge'>
              <p className='team-sub-heading-dan'>Kunskap <p className='sub-heading-divider'>|</p> </p>
              <p className='team-text-dan'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum non,
                vero deleniti veniam commodi, fuga sit fugiat consectetur ipsam

              </p>


            </div>
            <div className='team-icon-box'>
              <a href="mailto: dkingbrandt@hotmail.com"> <img className='team-mail-icon' src={mailIcon} alt='mail-dan' /></a>
              <a href="https://www.linkedin.com/in/dan-kingbrant-102855233/"><img className='team-linkedin-icon' src={linkedInIcon} alt='linkedin-dan' /></a>

              
            </div>
          </div>



        </div>

        <div className='team-box-rebecca'>
          <div className='team-circle-rebecca'>

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
            <img className='team-img-rebecca' src={Dan} alt='photo-rebecca' />
          </div>

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
            <div className='team-icon-box'>
              <a href="mailto: becka_91_@hotmail.com"> <img className='team-mail-icon' src={mailIcon} alt='mail-rebecca' /></a>
              <a href="https://www.linkedin.com/in/rebecca-rydgren-607b21241/"><img className='team-linkedin-icon' src={linkedInIcon} alt='linkedin-rebecca' /></a>


            </div>

          </div>
        


        </div>
        <div className='team-Btn-Container-icon'>
          <button className='team-create-Btn' onClick={() => {
            handlePopUpTeam()
            setTeamModal(true)
            setAddTeam(true)
          }}>Lägg till</button>
          <button className='team-change-Btn' onClick={() => {
            handlePopUpTeam()
            setTeamModal(true)
            setAddTeam(false)
          }}>Ändra</button>
        </div>

        

       



      </div>


      <Footer />
    </div>
  )
}
