Project Title: Aura & Bean
Topic: Coffee Shop Website (Final Project)
Group Members: Muktar Aikorkem, Kapessova Danaiym, Sansyzbay Assylkhan

Project Description:

Aura & Bean is a multi-page coffee shop website. Users can read about the coffee shop, look at the menu and drinks, see photos, book a table, read answers to common questions and sign in as a club member. The website has a light and dark theme and shows coffee recipes from a public API.

The final project is based on our midterm and endterm website (same topic and structure).

Pages:
- Home (index.html)
- About (about.html)
- Menu (menu.html)
- Drinks (drinks.html) - with coffee recipes from API
- Gallery (gallery.html)
- Reservation (reservation.html)
- FAQ (faq.html)
- Sign In (signin.html)

Features Implemented:
- Navigation bar on every page that connects all pages
- Responsive design for desktop, tablet and mobile (Bootstrap, Flexbox, Grid, media queries)
- Web safe fonts (Arial, Georgia) and simple consistent design on all pages
- Light / Dark theme toggle, the theme is saved in localStorage and stays after refresh on all pages
- Sign In form with validation (all fields required, email check with RegEx, password at least 6 characters)
- Sign In status, name and email are saved in localStorage, user stays signed in after refresh
- Signed in user sees a welcome message with name and email instead of the form
- Sign Out button that clears the saved login data
- FAQ section with 6 questions, answers open and close with jQuery slideToggle() and + / − sign
- API integration with fetch() and async/await: hot and iced coffee recipes from Sample APIs Coffee API
- API data (JSON) is shown as cards, user can choose Hot or Iced coffee with buttons
- Error handling with try/catch, the user sees a message if the data can not be loaded

API Used:
- Sample APIs Coffee API: https://api.sampleapis.com/coffee/hot and https://api.sampleapis.com/coffee/iced

Technologies Used:
- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- jQuery 3.7.1
- localStorage
- Fetch API, JSON
- GitHub, GitHub Pages

AI Usage:
AI tools were used as a supporting tool in this project (ideas and checking code). This is also written in the footer of the website.

Individual Contributions:

Kapessova Danaiym:
- css/style.css - styles for the whole website (simplified), colors for light and dark theme, styles for FAQ, Sign In and API cards
- js/theme.js - Light / Dark theme toggle with localStorage
- index.html, about.html, menu.html, reservation.html - theme button in the navigation bar, new links (FAQ, Sign In) and AI note in the footer

Muktar Aikorkem:
- signin.html and js/signin.js - Sign In form, validation, localStorage, welcome message and Sign Out
- drinks.html and js/api.js - coffee recipes from API with fetch() and async/await, Hot / Iced buttons and error handling

Sansyzbay Assylkhan:
- faq.html and js/faq.js - FAQ page with 6 questions, jQuery slideToggle() and + / − sign
- gallery.html - updated gallery page
- README.md

Screenshots:

home-light:
<img width="1917" height="1133" alt="image" src="https://github.com/user-attachments/assets/bf92af4d-658f-4487-b9a7-7b64a14e6376" />
home-dark:
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/cb28d970-48b0-4613-8f19-d2567468adcf" />
gallery:
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/440181d2-8d52-4f80-bbac-900686ff2524" />
signin-error:
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/ba764b78-48a6-4f8f-aadb-ecb70e6f53ba" />
signin-done:
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/2e8ce1a9-81ab-4eb1-aaee-881fa806de2f" />
faq:
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/4194fb58-76a1-49a9-adea-231c5ae0b7b4" />
api:
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/a25b9936-c5f6-405d-b4df-6618d8be55a6" />
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/4fd0917d-2438-4c30-923a-b65c5618da97" />
mobile:
<img width="996" height="932" alt="image" src="https://github.com/user-attachments/assets/01b404cc-242e-4279-9184-9865ae80b6b4" />
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/47a27b7b-37e9-4049-a27b-0d257afe4129" />


Published Website:
https://aikorkem07.github.io/web1_midterm/

GitHub Repository:
https://github.com/Aikorkem07/web1_midterm
