import React, { useState, useEffect } from 'react'
import { get } from '../utility/fetchHealper'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './../scss/pages/Pricelist.scss';

import { useNavigate } from "react-router-dom";
import FormPriceListInfo from '../components/formPriceListInfo';
import FormPriceList from '../components/formPriceList';
import CardModal from '../components/cardModal';
import SmalModal from '../components/smalModal';
import FormDelete from '../components/deleteForm';







export default function PriceList({ theme, ToggleTheme, authorized, setAuthorized }) {
  
  const [popUpPriceInfo, setPopUpPriceInfo] = useState(false);
  const [popUpPriceList, setPopUpPriceList] = useState(false);
  const [popUpDelete, setPopUpDelete] = useState(false);
  const [addPriceInfo, setAddPriceInfo] = useState(false);
  const [addPriceList, setAddPriceList] = useState(false);
  const [heading, setHeading] = useState("");
  const [deletePriceinfoModal, setDeletePriceinfoModal] = useState(false);
  const [deletePriceListModal, setDeletePriceListModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [priceInfo, setPriceInfo] = useState([]);
  const [pricePackage, setPricePackage] = useState([]);



  useEffect(() => {
    get("/pricelist/info").then((response) =>
      setPriceInfo(response.data)
    );
  }, []);
  useEffect(() => {
    get("/pricelist/package").then((response) =>
      setPricePackage(response.data)
    );
  }, []);

  const handlePopUpPriceInfo = () => {
    setPopUpPriceInfo((current) => !current); //toggle
  };
  
  const handlePopUpPriceList = () => {
    setPopUpPriceList((current) => !current); //toggle
  };

  const handlePopUpDelete = () => {
    setPopUpDelete((current) => !current); //toggle
    setDeletePriceinfoModal(false);
  };

 

  

  function showDetailPriceInfo(index) {
    const PriceInfoIndex = priceInfo[index];
    if (PriceInfoIndex == priceInfo[index]) {
      setHeading(priceInfo[index].heading);
      setTitle(priceInfo[index].title);
      setDescription(priceInfo[index].description);
    }
  }
  function showDetailPricePackage(index) {
    const PricePackageIndex = pricePackage[index];
    if (PricePackageIndex == pricePackage[index]) {
      setHeading(pricePackage[index].heading);
      setTitle(pricePackage[index].title);
      setDescription(pricePackage[index].description);
    }
  }


  let navigate = useNavigate()
  
  const navigateToContact = () => {
    navigate("/kontakt");

  }


  return (
    <div className='priceList-container'>
     <Header authorized={authorized} setAuthorized={setAuthorized}  theme={theme} ToggleTheme={ToggleTheme}/>
     <div className='radialGradientGreen'></div>
         <div className='radialsmall'></div>
      <div className='radialbig'></div>

      <div className='price-info-create-btn-wrapper'>
        <button className='price-info-create-Btn' onClick={() => {
          handlePopUpPriceInfo()
          setAddPriceInfo(true)

        }}>Lägg till info</button>

      </div>
      
    
      <div className='priceList-wrapper'>

      
        <div className='priceList-info-box'>
          
          {priceInfo.map((info, index) => {

            return (
              <div className='price-list-info-container'>
              <div className='price-list-info-tailor-box'>
                {theme === "dark" ?
                  (
                    <img className='price-list-icon-computer' src={info.img} alt="computer-icon" />
                  )
                  : (
                    <img className='price-list-icon-computer' src={info.img} alt="computer-icon" />
                  )
                }
                <div className='price-list-heading-box'>
                  <p className='price-list-heading-computer'>{info.heading}</p>

                  <div className='price-list-text-box'>
                    <p className='price-list-text-computer'>{info.description}</p>

                  </div>
                </div>
               
              </div>


                <div className='priceInfo-Btn-Container-icon'>
                  <button className='price-info-delete-Btn' onClick={() => {
                    showDetailPriceInfo(index)
                    handlePopUpDelete()
                    setDeletePriceinfoModal(true);


                  }}>Ta Bort</button>
                
                  <button className='price-info-change-Btn' index={index} onClick={() => {
                    showDetailPriceInfo(index)
                    handlePopUpPriceInfo()
                    setAddPriceInfo(false)

                  }}>Ändra</button>



                </div>
              </div>






              
            )
          })}

     
      
          {deletePriceinfoModal && (
            <SmalModal
              handlePopUp={handlePopUpDelete}
              popUp={popUpDelete}
              component={<FormDelete handlePopUp={handlePopUpDelete} setProjects={setPriceInfo} title={title} link={"/pricelist/info/"} textHeading={"Är du säker på att du vill ta bort projektet?"} />} />

          )}
          {deletePriceListModal && (
            <SmalModal
              handlePopUp={handlePopUpDelete}
              popUp={popUpDelete}
              component={<FormDelete handlePopUp={handlePopUpDelete} setProjects={setPricePackage} title={title} link={"/pricelist/package/"} textHeading={"Är du säker på att du vill ta bort projektet?"} />} />

          )}
    
  

        
              <CardModal
              handlePopUp={handlePopUpPriceInfo}
              popUp={popUpPriceInfo}
              component=
              {<FormPriceListInfo
                setPriceInfo={setPriceInfo}
                img={img} heading={heading}
                title={title}
                description={description}
                handlePopUp={handlePopUpPriceInfo}
                popUp={popUpPriceInfo}
                add={addPriceInfo}
              />}
            />
            
            
           
              <CardModal
                
                handlePopUp={handlePopUpPriceList}
                popUp={popUpPriceList}
                component=
                {<FormPriceList
                  setPricePackage={setPricePackage}
                  img={img} heading={heading}
                  title={title}
                  description={description}
                  handlePopUp={handlePopUpPriceList}
                  popUp={popUpPriceList}
                  add={addPriceList}
                  
                />}
              />
            



          
        
     </div>
      </div>
      <div className='price-list-create-btn-wrapper'>
      
      <button className='price-list-create-Btn' onClick={() => {
        handlePopUpPriceList()
        setAddPriceList(true)

        }}>Lägg till prisplan</button>
        
      </div>
      
      <div className='price-list-wrapper-flex'>
      
      <div className='price-list-price-wrapper'>
      
        {pricePackage.map((list, index) => {
          return (
              
            <div className='price-list-price-small'>
              <div className='pirce-list-label-box'>
                <img className='price-list-icon-small' src={list.img} alt="code-icon" />
                <p className='price-list-heading'>{list.heading}</p>
              </div>
              
              <ul className='price-list-info-list'>
                {list.description.map((details) =>
                  <li>{details}</li>
               
                )}
              </ul>


              <div className='pricelist-Btn-Container'>
                <button className='price-list-delete-Btn' onClick={() => {
                  showDetailPricePackage(index)
                  handlePopUpDelete()
                  setDeletePriceListModal(true)
                }}>Ta Bort</button>
               
                <button className='price-list-change-Btn' index={index} onClick={() => {
                  showDetailPricePackage(index)
                  handlePopUpPriceList()
                  setAddPriceList(false)

                }}>Ändra</button>

              </div>
            </div>






          )
        })}
        
        
      
       

     
       
      </div>
        </div>
      

      <div className='price-list-btn-wrapper'>

        <button className='price-list-contact-btn' onClick={navigateToContact}>Kontakta oss</button>

      </div>

        <Footer />
    </div>
    
  )
}
