/*
@file navbar.js
@brief This file contains the HTML code for the navigation bar and inserts it into the page.
*/
const navbarHTML = `
  <nav class="navbar">
    <ul>
      <li><a href="index.html" class="nav-item home-link">Home</a></li>
      <li><a href="contact.html" class="nav-item contact-link">Contact the editor</a></li>
    </ul>
  </nav>
`;

document.getElementById("global-navigation").innerHTML = navbarHTML;
