import React from 'react';
import './Career.css';
import { NavLink } from 'react-router-dom';

const Career = () => {
  return (
    <div>
        <header class="header-career">
        <h3 class="heading-career">CAREERS</h3>
        
    </header>

    <main>
    <div class="container1-career">
           <div class="cont1-career">
            <span class="cont11-career">Open Positions</span>
           </div>
           <div class="cont2-career">
            <h3 class="cont21-career">01</h3>
            <span class="cont22-career"><NavLink to='/Health'>Healthy and Safety Coordinator - Hamburg,Germany</NavLink></span>
            <p class="cont23-career">FULL-TIME</p>
           </div>
           <div class="cont3-career">
            <h3 class="cont31-career">02</h3>
            <span class="cont32-career"><NavLink to='/Construction'>Construction Safety Manager - Hamburg,Germany</NavLink></span>
            <p class="cont33-career">FULL-TIME</p>
           </div>
           <div class="cont4-career">
            <h3 class="cont41-career">03</h3>
            <span class="cont42-career"><NavLink to='/Engineer'>Construction Engineer - Hamburg,Germany</NavLink></span>
            <p class="cont43-career">FULL-TIME</p>
           </div>
    </div>
</main>

    </div>
  )
}

export default Career