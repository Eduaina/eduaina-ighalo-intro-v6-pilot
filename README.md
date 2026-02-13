# eduaina-ighalo-intro-v6-pilot

## Eduaina Brenda Ighalo – Developer Portfolio
Portfolio project for Intro to Programming course with Code the Dream(CTD).
A personal portfolio website built with HTML, CSS, and JavaScript.  
It showcases my experience, technical skills, GitHub projects, and includes interactive features powered by JavaScript and external APIs.

---

### Overview

This project demonstrates:

- Semantic HTML structure
- Responsive layout using Flexbox and Grid
- DOM manipulation with JavaScript
- Event handling
- API integration using Fetch
- Dynamic content rendering

---

## Features

### Dynamic Skills Section
Skills are stored in a JavaScript array and rendered dynamically into the page.

### GitHub Projects Integration
Repository data is fetched from the GitHub API and displayed in the Projects section.

### Leave a Message Form
- Users can submit their name, email, and a message.
- The name becomes a clickable mailto link.
- Messages are added dynamically to the page.
- Each message includes a remove button.

### Dynamic Footer
The footer is created using JavaScript and automatically displays:
- Copyright symbol
- Current year
- Developer name

### Open API Page
A separate page demonstrating the use of an external public API.

---

### Tech Stack

- HTML5
- CSS3 (Flexbox & Grid)
- JavaScript (ES6+)
- Fetch API
- Git & GitHub

---








## Open API Page - Weather Dashboard Project

### Description
This project is a simple **Weather Dashboard** that fetches current weather information from the [Open-Meteo API](https://open-meteo.com/). The app displays **temperature** and **weather conditions** for a given location. Users can navigate between endpoints using buttons, and each click triggers a **new API request** to fetch only the needed data.  


### Features
- Fetches **current temperature** and **weather conditions** separately.  
- Displays **numeric weather codes** and **human-readable descriptions** (with emojis).  
- Buttons provide **navigation between endpoints**.  
- Handles **errors** such as network issues or failed requests.  
- Simple and clean UI with a **nav bar** linking back to the portfolio page.  

---

### Structure
- `index.html` – main HTML page with nav bar, buttons, and display areas.  
- `style.css` – styles for layout, font sizes, colors, and buttons.  
- `weather.js` – JavaScript file that handles API calls, button events, and DOM updates.  

---

### API
- API Source: [Open-Meteo](https://open-meteo.com/)  
- Endpoints used:  
  1. **Current Temperature**  
  2. **Current Weather Conditions**  

---

### Usage
1. Open `index.html` in a browser.  
2. Click **Temperature** to view current temperature.  
3. Click **Conditions** to view weather conditions (code + description).  
4. Navigate back to your portfolio using the nav bar.  
