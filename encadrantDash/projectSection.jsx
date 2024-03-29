import BoxWrapper from './box-wrapper';
import Popup from './model';
import React, { useState } from 'react';
import ModalShow from './modalShow';
const ProjectSection = (props) => {

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]



  var d = new Date();
  var today = new Date();
  var date = today.getDate();

  const [openPopup, setOpenPopup] = useState(false)

  return (
    <div className="projects-section">
      <div className="projects-section-header">
        <p>Projets</p>
        <p className="time">  {months[new Date().getMonth()]} ,{date} </p>
      </div>
      <div className="projects-section-line">
        <div className="projects-status">
          <div className="item-status">
            <span className="status-number">45</span>
            <span className="status-type">En cours</span>
          </div>
          <div className="item-status">
            <span className="status-number">24</span>
            <span className="status-type">A venir</span>
          </div>
          <div className="item-status">
            <span className="status-number">62</span>
            <span className="status-type">Nombre total de projets</span>
          </div>
        </div>
        <div className="view-actions">
          <button className="view-btn list-view" title="List View">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-list">
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" /></svg>
          </button>
          <button className="view-btn grid-view active" title="Grid View" onClick={() => { setOpenPopup(true); }}>
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               style={{ "enable-background": "new 0 0 443.733 443.733" }} xml="preserve">
              <g>
                <g>
                  <path d="M187.733,0H17.067C7.641,0,0,7.641,0,17.067v170.667c0,9.426,7.641,17.067,17.067,17.067h170.667
			c9.426,0,17.067-7.641,17.067-17.067V17.067C204.8,7.641,197.159,0,187.733,0z M170.667,170.667H34.133V34.133h136.533V170.667z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path d="M426.667,0H256c-9.426,0-17.067,7.641-17.067,17.067v170.667c0,9.426,7.641,17.067,17.067,17.067h170.667
			c9.426,0,17.067-7.641,17.067-17.067V17.067C443.733,7.641,436.092,0,426.667,0z M409.6,170.667H273.067V34.133H409.6V170.667z"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M187.733,238.933H17.067C7.641,238.933,0,246.574,0,256v170.667c0,9.426,7.641,17.067,17.067,17.067h170.667
			c9.426,0,17.067-7.641,17.067-17.067V256C204.8,246.574,197.159,238.933,187.733,238.933z M170.667,409.6H34.133V273.067h136.533
			V409.6z"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M426.667,324.267H358.4V256c0-9.426-7.641-17.067-17.067-17.067s-17.067,7.641-17.067,17.067v68.267H256
			c-9.426,0-17.067,7.641-17.067,17.067S246.574,358.4,256,358.4h68.267v68.267c0,9.426,7.641,17.067,17.067,17.067
			s17.067-7.641,17.067-17.067V358.4h68.267c9.426,0,17.067-7.641,17.067-17.067S436.092,324.267,426.667,324.267z"/>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>




      <BoxWrapper
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      />


      <Popup
        title="Add project"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <ModalShow
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        />

      </Popup>



    </div>









  );
}

export default ProjectSection;