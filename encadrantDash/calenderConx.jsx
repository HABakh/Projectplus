import React from 'react'
import Popuptask from './popuptaskstudent'
import { useState, useEffect } from 'react'
const CalenderConx = (props) => {
  const [fetchagain, setFetchagain] = useState([])
  const [openPop, setOpenPop] = useState(false)


  const again = async (id) => {
    let response = await fetch(`http://localhost:5000/group/${id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('Token')}`
      }
    })

    let result = await response.json()
    return result
  }


  const doAll = async () => {
    let { Groups } = await again(props.group._id)
    console.log(Groups);
    let divs = document.querySelectorAll('.calendar div.day')
    console.log(divs[30].innerHTML);
    if (Groups.tasks) {
      Groups.tasks.map((g) => {
        if (g.delivery_datetime) {
          let place = g.delivery_datetime.split('-')[2].split('T')[0]
          console.log(divs[+place - 1]);
          divs[+place - 1].classList.add('project-market')
          let htm = `
          ${+place}
          <div class="hover-title">Rapport</div>
          <div class="project-detail design">${g.task}</div>
          <div class="popup-check">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-square"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
            </svg>
          </div>`
          divs[+place - 1].innerHTML = htm
        }
      })
    } else {
      props.group.tasks.map((g) => {
        if (g.delivery_datetime) {
          let place = g.delivery_datetime.split('-')[2].split('T')[0]
          console.log(divs[+place - 1]);
          divs[+place - 1].classList.add('project-market')
          let htm = `
          ${+place}
          <div class="hover-title">Rapport</div>
          <div class="project-detail design">${g.task}</div>
          <div class="popup-check">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-square"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
            </svg>
          </div>`
          divs[+place - 1].innerHTML = htm
        }
      })
    }
  }
  useEffect(() => {
    console.log(openPop);
    doAll()
  }, [openPop])
  return (
    <div className="calendar-container calendar-show">
      <div className="calender-tab anim-y">
        <div className="week-month">
          <button className=" button active">Semaine</button>
          <button className=" button button-month">Mois</button>
        </div>
        <div className="month-change">
          <div className="current-month">juin</div>
          <div className="current-year">2022</div>
        </div>
        <div className="week-month">
          <button className=" button button-weekends">Fins de semaine</button>
          {localStorage.getItem('type') == "ENCADRENT" ? (<button className=" button button-task active" onClick={() => setOpenPop(true)}> Ajouter une tâche  </button>) : null}
        </div>
      </div>
      <div className="calendar-wrapper anim-y">
        <div className="calendar">
          <Popuptask popup={openPop} setPopup={setOpenPop} group={props.group}>

          </Popuptask>
          <div className="days">lundi</div>
          <div className="days">Mardi</div>
          <div className="days">Mercredi</div>
          <div className="days">jeudi</div>
          <div className="days">Vendredi</div>
          <div className="days">samedi</div>
          <div className="days">dimanche</div>
          <div className="day project-market">1
            <div className="hover-title"> Rapport </div>
            <div className="project-detail"> Méthodologies de développement </div>
            <div className="project-detail">Besoins fonctionnels</div>
            <div className="popup-check">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-square"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
            </div>
          </div>
          <div className="day">2</div>
          <div className="day project-market">3
            <div className="hover-title"> projet </div>
            <div className="project-detail design">Présentation du cycle de vie de développement de l’application</div>
          </div>
          <div className="day">4</div>
          <div className="day">5</div>
          <div className="day">6</div>
          <div className="day project-market">7
            <div className="project-detail develop">Donner le diagramme des cas d’utilisation de chaque acteur</div>
          </div>
          <div className="day">8</div>
          <div className="day">9</div>
          <div className="day">10</div>
          <div className="day">11</div>
          <div className="day">12</div>
          <div className="day">13</div>
          <div className="day">14</div>
          <div className="day project-market">15
            <div className="hover-title">Rapport</div>
            <div className="project-detail">	Architecture globale de l’application</div>
            <div className="popup-check">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-square"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
            </div>
          </div>
          <div className="day">16</div>
          <div className="day project-market">17
            <div className="hover-title">Projet</div>
            <div className="project-detail">Langage de développement</div>
            <div className="project-detail">Interface enseignant</div>
            <div className="popup-check">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-square"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
            </div>
          </div>
          <div className="day">18</div>
          <div className="day">19</div>
          <div className="day">20</div>
          <div className="day">21</div>
          <div className="day">22</div>
          <div className="day project-finance">23
            <div className="hover-title">Projet</div>
            <div className="project-detail finance">	Diagramme de classes</div>
            <div className="popup-check">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-square"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
            </div>
          </div>
          <div className="day">24</div>
          <div className="day">25</div>
          <div className="day">26</div>
          <div className="day">27</div>
          <div className="day">28</div>
          <div className="day">29</div>
          <div className="day">30</div>
          <div className="day">31</div>
          <div className="day not-work">1</div>
          <div className="day not-work">2</div>
          <div className="day not-work">3</div>
          <div className="day not-work">4</div>

        </div>
      </div>
    </div>

  );
}

export default CalenderConx;