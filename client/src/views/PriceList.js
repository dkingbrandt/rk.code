import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './../scss/pages/Pricelist.scss';
import computer from './../img/computer.svg';
import time from './../img/time.svg';
import price from './../img/price.svg';
import search from './../img/search.svg';
import support from './../img/support.svg';
import ideas from './../img/ideas.svg';
import small from './../img/small.svg';
import medium from './../img/medium.svg';
import large from './../img/large.svg';
import { useNavigate } from "react-router-dom";





export default function PriceList({theme, ToggleTheme}) {

  let navigate = useNavigate()
  
  const navigateToContact = () => {
    navigate("/kontakt");

  }


  return (
    <div className='priceList-container'>
     <Header theme={theme} ToggleTheme={ToggleTheme}/>
      <div className='priceList-wrapper'>
      <div className='priceList-info-box'>


        <div className='price-list-info-tailor-box'>
          <img className='price-list-icon-computer' src={computer} alt="computer-icon" />
            <div className='price-list-heading-box'>
              <p className='price-list-heading-computer'>Skräddarsydda Hemsidor</p>

            <div className='price-list-text-box'>
              <p className='price-list-text-computer'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magnam nobis minima cumque eum
                voluptatem autem vel
                soluta odit praesentium, enim sint
              </p>

              </div>
            </div>

         

        </div>
        <div className='price-list-info-tailor-box'>
          <img className='price-list-icon-time' src={time} alt="time-icon" />
            <div className='price-list-heading-box'>
              <p className='price-list-heading-time'>Fasta Tidsramar</p>

            <div className='price-list-text-box'>
              <p className='price-list-text-computer'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magnam nobis minima cumque eum
                voluptatem autem vel
                soluta odit praesentium, enim sint
              </p>

              </div>
            </div>


        </div>
        <div className='price-list-info-tailor-box'>
          <img className='price-list-icon-ideas' src={ideas} alt="idea-icon" />
            <div className='price-list-heading-box'>
              <p className='price-list-heading-ideas'>Vi förverkligar era idéer och
                behov</p>

            <div className='price-list-text-box'>
              <p className='price-list-text-computer'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magnam nobis minima cumque eum
                voluptatem autem vel
                soluta odit praesentium, enim sint
              </p>

              </div>
            </div>


        </div>
        <div className='price-list-info-tailor-box'>
          <img className='price-list-icon-search' src={search} alt="search-icon" />
            <div className='price-list-heading-box'>
              <p className='price-list-heading-search'>SökmotorOptimering</p>

            <div className='price-list-text-box'>
              <p className='price-list-text-computer'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magnam nobis minima cumque eum
                voluptatem autem vel
                soluta odit praesentium, enim sint
              </p>

              </div>
            </div>


        </div>
        <div className='price-list-info-tailor-box'>
          <img className='price-list-icon-price' src={price} alt="price-icon" />
            <div className='price-list-heading-box'>
              <p className='price-list-heading-price'>Fasta Priser</p>

            <div className='price-list-text-box'>
              <p className='price-list-text-computer'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magnam nobis minima cumque eum
                voluptatem autem vel
                soluta odit praesentium, enim sint
              </p>

              </div>
            </div>


        </div>
        <div className='price-list-info-tailor-box'>
          <img className='price-list-icon-support' src={support} alt="support-icon" />
            <div className='price-list-heading-box'>
              <p className='price-list-heading-support'>Alltid fri support och hjälp</p>

            <div className='price-list-text-box'>
              <p className='price-list-text-computer'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magnam nobis minima cumque eum
                voluptatem autem vel
                soluta odit praesentium, enim sint
              </p>

              </div>
            </div>


        </div>

       
        
     </div>
  </div>
      

      <div className='price-list-price-wrapper'>
        <div className='price-list-price-small'>
          <div className='pirce-list-label-box'>
            <img className='price-list-icon-small' src={small} alt="code-icon" />
              <p className='price-list-heading'>SMALL</p>
          </div>
          <ul className='price-list-info-list'>
            <li>Nöjd kundgaranti!</li>
            <li>text & bilder</li>
            <li>4 undersidor eller one page</li>
            <li>Upp till 6 timmars design</li>
            <li> Egen Domän</li>
            <li>Lansera sidan på webbhotell</li>
            <li>WordPress eller React hemsida</li>
            <li>Mobilanpassad</li>
            <li>Genomgång av design med kund</li>
            <li>Kartor</li>
            <li> Sökordsoptimerad</li>
            <li>Bildspel & Animering</li>
            <li>Koppling Social Media</li>
            <li>Kontaktformulär</li>

          </ul>
        </div>
        <div className='price-list-price-medium'>
          <div className='pirce-list-label-box'>
            <img className='price-list-icon-medium' src={medium} alt="code-icon" />
            <p className='price-list-heading'>MEDIUM</p>
          </div>
          <ul className='price-list-info-list'>
            <li>Nöjd kundgaranti!</li>
            <li>text & bilder</li>
            <li>8-10 undersidor eller one page</li>       
            <li>Upp till 12 timmars design</li>
            <li> Egen Domän</li>
            <li>Lansera sidan på webbhotell</li>
            <li>WordPress eller React hemsida</li>
            <li>Mobilanpassad</li>
            <li>Genomgång av design med kund</li>
            <li>Kartor</li>
            <li> Sökordsoptimerad</li>
            <li>Bildspel & Animering</li>
            <li>Koppling Social Media</li>
            <li>Bildspel & Animering</li>
            <li>Kontaktformulär</li>
            <li>ändringsmöjligheter av text och bilder</li>


            
          </ul>
        </div>
        <div className='price-list-price-large'>
          <div className='pirce-list-label-box'>
            <img className='price-list-icon-large' src={large} alt="code-icon" />
            <p className='price-list-heading'>LARGE</p>

          </div>
          <ul className='price-list-info-list'>
            <li>Nöjd kundgaranti</li>
            <li>Hjälp med bilder & texter</li>
            <li>Domän & Webbhotell</li>
            <li>WordPress eller React</li>
            <li>Fritt antal undersidor</li>
            <li>Mobilanpassad & Responsiv</li>
            <li>E-mail Konton</li>
            <li>Unik Design</li>
            <li>Hjälp med Google Ads</li>
            <li>Bildspel & Animering</li>
            <li> E-handel & Webbutik</li>
            <li>Fria Designförslag</li>
            <li>Fria Designtimmar</li>
            <li>Kartor</li>
            <li> Sökordsoptimerad</li>
            <li>Egenutvecklade tillägg</li>
            <li>Koppling Social Media</li>

          </ul>
        </div>
     
       
      </div>

      <div className='price-list-btn-wrapper'>

        <button className='price-list-contact-btn' onClick={navigateToContact}>Kontakta oss</button>

      </div>

        <Footer />
    </div>
  )
}
