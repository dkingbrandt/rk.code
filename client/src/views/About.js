import React from 'react'
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




export default function About({theme, ToggleTheme}) {
  return (
    <div className='about-container blurr'>
      <Header theme={theme} ToggleTheme={ToggleTheme}/>
         <div className='radialGradientGreen'></div>
         <div className='radialsmall'></div>
         <div className='radialbig'></div>
         <div className='history-wrapper'>


        <div className='history-container'>
          <h1 className='history-heading'>VÅR HISTORIA</h1>

          <div className='history-create-box'>
            <div className='history-label-create'>
              <img className='icon-task' src={taskTools} alt="task" />
              <p className='heading-create'>Skapandet</p>
            </div>
            <div className='history-textBox-knowledge'>
              <p className='text-knowledge'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum non,
                vero deleniti veniam commodi, fuga sit fugiat consectetur ipsam tempore molestiae
                cumque soluta minima tenetur accusantium earum dolorem quod perferendis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum non,
                vero deleniti veniam commodi, fuga sit fugiat consectetur ipsam tempore molestiae
                cumque soluta minima tenetur accusantium

              </p>
            </div>
          </div>
          <div className='history-knowledge-box'>
            <div className='history-label-knowledge'>
              <img className='icon-knowledge' src={knowledge} alt="knowledge" />
              <p className='heading-knowledge'>Kunskap</p>
            </div>
            <div className='history-textBox-knowledge'>
              <p className='text-knowledge'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum non,
                vero deleniti veniam commodi, fuga sit fugiat consectetur ipsam tempore molestiae
                cumque soluta minima tenetur accusantium earum dolorem quod perferendis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum non,
                vero deleniti veniam commodi, fuga sit fugiat consectetur ipsam tempore molestiae
                cumque soluta minima tenetur accusantium


              </p>
            </div>


          </div>
          <div className='history-vision-box'>
            <div className='history-label-vision'>
              <img className='icon-lightbulb' src={lightbulb} alt="vision" />
              <p className='heading-vision'>Vision</p>


            </div>
            <div className='history-textBox-knowledge'>
              <p className='text-knowledge'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum non,
                vero deleniti veniam commodi, fuga sit fugiat consectetur ipsam tempore molestiae
                cumque soluta minima tenetur accusantium earum dolorem quod perferendis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum non,
                vero deleniti veniam commodi, fuga sit fugiat consectetur ipsam tempore molestiae
                cumque soluta minima tenetur accusantium

              </p>
            </div>

          </div>


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
          </div>
         
        </div>



      </div>


      <Footer />
    </div>
  )
}
