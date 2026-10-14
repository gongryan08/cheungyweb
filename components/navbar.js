/*
@file navbar.js
@brief This file contains the HTML code for the navigation bar and footer, inserting them dynamically.
*/
const navbarHTML = `
  <nav class="navbar">
    <ul>
      <li><a href="index.html" class="nav-item" id="nav-home">Home</a></li>
      <li><a href="about.html" class="nav-item" id="nav-about">About Us</a></li>
      <li><a href="aboutcheung.html" class="nav-item" id="nav-cheung">About Cheung Anderson</a></li>
      <li><a href="poems.html" class="nav-item" id="nav-poems">Poems</a></li>
      <li><a href="contact.html" class="nav-item" id="nav-contact">Contact the editor</a></li>
    </ul>
  </nav>
`;

const footerHTML = `
  <footer class="footer">
    <p>&copy; 2026 CheungyWeb by Ryan Gong. All rights reserved.</p>
  </footer>
`;

// Inject the components cleanly into their respective page shells
document.getElementById("global-navigation").innerHTML = navbarHTML;
document.getElementById("global-footer").innerHTML = footerHTML;
