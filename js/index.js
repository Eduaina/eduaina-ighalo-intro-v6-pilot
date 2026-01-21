//Add a Footer Element
const footer = document.createElement('footer');
footer.className = 'footer';
document.body.append(footer);

//Insert Copyright Text in Footer
const today = new Date();
const thisYear = today.getFullYear();
const newFooter = document.querySelector('.footer');
const copyright = document.createElement('p');
const copyrightSymbol = "\u00A9"
const name = `Eduaina Ighalo`
copyright.innerHTML = `${copyrightSymbol} ${name} ${thisYear}`;

newFooter.appendChild(copyright);


//Create List of Skills
const skills = [
      "HTML5 (Semantic Markup)",
      "CSS3 (Flexbox, Grid, Responsive Design)",
      "JavaScript (ES6+)",
      "React",
      "Component-Based Development",
      "Basic State Management",
      "Git",
      "GitHub",
      "npm",
      "Vite",
      "Browser DevTools",
      "Advanced JavaScript Concepts",
      "React Best Practices",
      "Backend Fundamentals"
];

const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.textContent = skills[i];
  skillsList.appendChild(skill);
}
