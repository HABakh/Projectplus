import React from 'react';

function Cchat() {
    return (
          
        <div className='c-chat'>
            
        <div className='c-chat__window'>
          <header className='c-chat__info'>
            <h2>Discussion de groupe</h2>
            <div>
              <button className='c-chat__tab c-chat__tab--active'>Messages</button>
              <button  className='c-chat__tab'>Participants</button>
            </div>
          </header>
          <div className='c-chat__conversation'>
            <div className='c-user__chat '>
              <span>You</span>
              <p>Bonsoir, est-ce disponible ?</p>
            </div>
            
            <div className='c-user__chat c-user__chat-other '>
              <span>Boot</span>
              <p>Oui c'est le cas</p>
            </div>
            
             <div className='c-user__chat '>
              <span>You</span>
              <p>c'est juste pour vous informer que vous approchez a deadline</p>
            </div>
            
             <div className='c-user__chat c-user__chat-other '>
              <span>Boot</span>
              <p>?</p>
            </div>
            
             <div className='c-user__chat '>
              <span>You</span>
              <p>Travillez plur rapide s'il vous plait. Merci d'apprécier.
.</p>
            </div>
            
            <div className='c-user__chat c-user__chat-other '>
              <span>Boot</span>
              <p>Merci</p>
            </div>
            
             <div className='c-user__chat '>
              <span>You</span>
              <p> Merci de votre compréhension</p>
            </div>
          </div>
          <div className='c-chat__inputs'>
            <input type='text' placeholder='Écrivez votre message...'/>
            <button className='c-chat__inputs-send' aria-label='Send message'><i aria-hidden='true' classNam="fas fa-paper-plane"></i></button>
          </div>
        </div>
      </div>
    );
}

export default Cchat;