//Add a Footer Element
const footer = document.createElement('footer');
footer.className = 'footer';
document.body.append(footer);

//Insert Copyright Text in Footer
const today = new Date();
const thisYear = today.getFullYear();
// const newFooter = document.querySelector('.footer');
const copyright = document.createElement('p');
const copyrightSymbol = "\u00A9"
const name = `Eduaina Ighalo`
copyright.innerHTML = `${copyrightSymbol} ${name} ${thisYear}`;

footer.appendChild(copyright);


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

//Handle Message Form Submit
const messageForm = document.querySelector('form[name="leave_message"]');
messageForm.addEventListener('submit', (e) => {
  console.log('Form Submitted')
  e.preventDefault();
  let userName = e.target.usersName.value;
  let userEmail = e.target.usersEmail.value;
  let userMessage = e.target.usersMessage.value;

  console.log(userName);
  console.log(userEmail);
  console.log(userMessage);


  const messageSection = document.getElementById('messages');
  const messageList = messageSection.querySelector('ul');
  const newMessage = document.createElement('li');
  newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}: </a> <span>${userMessage}</span>`
  console.log(newMessage);

  const removeButton = document.createElement('button');
  removeButton.innerText = 'Remove';
  // const att = document.createAttribute('type');
  // att.value = 'button';
  // removeButton.setAttributeNode(att);
  removeButton.setAttribute("type", "button");

  console.log(removeButton)

  removeButton.addEventListener('click', (event) => {
    const entry = event.target.parentNode;
    entry.remove();
  })

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);


  messageForm.reset();
})