import './style.scss';
import './game';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SmoothScroll from 'smooth-scroll';
import { skills, Skill, education, Education } from './data';
import Typewriter from 'typewriter-effect/dist/core';


AOS.init({
    duration: 700
});

new SmoothScroll('a[href*="#"]', {
    speed: 50
});

new Typewriter('#skills', {
    strings: ['Fullstack Developer', 'Backend Developer', 'Web Developer', 'Student'],
    autoStart: true,
    loop: true
});

window.addEventListener("keydown", function (e: KeyboardEvent) {
    if (["ArrowUp", "ArrowDown",].includes(e.code)) {
        e.preventDefault();
    }
}, false);


const createSkillCard = (index: number, icon: string, name: string, description: string): Node => {
    const node = document.createElement('div');
    node.classList.add('card');

    if ([0, 4, 8].includes(index)) {
        node.setAttribute("data-aos", "fade-right");
    } else if ([3, 7, 11].includes(index)) {
        node.setAttribute("data-aos", "fade-left");
    }
    else {
        node.setAttribute("data-aos", "fade-up");
    }

    node.setAttribute("data-aos-dela", `${(index + 1) * 50}`);
    node.innerHTML = `
    <!--
    <div class="card-header">
    <div class="card-header-child">
      ${index + 1}
    </div>
    </div>
    -->
    <div class="card-content">
    <div class="card-content-child">
      <span>
      ${icon}
      </span>
    </div>
    </div>
    <div class="card-footer">
    <h2 class="heading">${name}</h2>
    <!-- <p class="description"> ${description}</p> -->
    </div>
    `

    return node;
}

const createEducationCard = (index: number, name: string, school: string, board: string, duration: string, score: number): Node => {
    const node = document.createElement('div');
    node.classList.add('education-card');
    node.setAttribute("data-aos", "fade-up");
    node.setAttribute("data-aos-dela", `${(index + 1) * 50}`);
    node.innerHTML = `
    <p>0${index + 1}</p>
    <div class="education-info">
      <p class="etitle">${name}</h2>
      <h4>${school}</h4>
      <h2>${board}</h2>
      <p class="eduration">${duration}</p>
      <p class="escore">score ${score}</p>
    </div>
    `

    return node;
}


const skillCardContainer: HTMLElement | null = document.querySelector('#skill-card-container');

if (skillCardContainer) {
    skills.forEach((skill: Skill, index: number) => {
        const { name, icon, description } = skill;

        skillCardContainer.appendChild(createSkillCard(index, icon, name, description))
    });
}

const educationCardContainer: HTMLElement | null = document.querySelector('.section-education-info');

if (educationCardContainer) {
    education.forEach((education: Education, index: number) => {
        const { board, duration, name, school, score } = education;

        educationCardContainer.appendChild(createEducationCard(index, name, school, board, duration, score));
    });
}
