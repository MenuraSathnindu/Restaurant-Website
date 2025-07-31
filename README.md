
# 🍝 Piccante – Interactive Restaurant Website

**Course Module**: CM1605 Web Technology  
**Student Name**: M. S. Gunasiri  

## 📌 Overview

**Piccante** is a fully responsive, interactive restaurant-themed website designed as part of the Web Technology module. The project simulates an online presence for a modern dining experience with features like a dynamic menu, table reservation system and a seating map. The website emphasizes usability, accessibility and client-side interactivity.

Built using **HTML**, **CSS**, **JavaScript** and **XML**, the project demonstrates the integration of core front-end technologies to meet real-world web design standards.

## 🔧 Features

- 🔥 Animated Loading Screen with custom logo and progress bar
- 🍽️ Dynamic Food Menu loaded via XML and filtered by cuisine types (Sri Lankan, Indian, Chinese, Italian)
- 🪑 Interactive Seating Map using CSS Grid/Flexbox to simulate restaurant layout
- 📅 Event Reservation Form with client-side JavaScript validation
- 🌍 Google Maps Integration and social media links in the contact section
- 📱 Responsive Design for mobile and desktop
- ♿ Accessibility Features:
  - Semantic HTML
  - Alt text for images
  - Label-associated form elements
  - High-contrast color combinations

## 🧪 Technologies Used

- HTML5, CSS3, JavaScript ES6
- XML for structured menu data
- Google Maps Embed API
- Font Awesome Icons
- QR Code Generator (`qrcode-generator.js`)

## 📂 Project Structure

```
/index.html              # Main landing page
/menu.html               # Dynamic menu page
/events.html             # Reservation and event booking
/gallery.html            # Image gallery
/contact.html            # Contact section with Google Maps
/assets/
 └── css/
 └── js/
 └── images/
 └── data/menu.xml       # XML data for menu items
```

## 💡 How It Works

- **Menu Rendering**: JavaScript reads `menu.xml`, parses the dishes, and injects them into the DOM based on selected category.
- **Form Validation**: JavaScript ensures correct format for fields like name, email, and date.
- **QR Code Generation**: After form submission, a confirmation page displays a dynamically created QR code for the booking.
- **Navigation**: A fixed top nav bar is present across all pages for seamless transitions.

## 🎨 UI/UX Considerations

- Consistent and intuitive navigation
- Warm, appetizing color palette: dark reds, oranges, and whites
- Typography chosen for elegance and readability
- Validated for both color contrast and accessibility (manual and automated tests)

## 📸 Screenshots

Included in the `/screenshots/` or appendix of the coursework:
- Loading Page
- Home
- Menu
- Events
- Gallery
- Contact Us
- Table Reservation

## 🧠 Reflection & Challenges

- Transitioning wireframes into polished designs required multiple iterations
- Parsing XML and dynamically rendering content added complexity
- Ensuring cross-browser compatibility and responsive layouts was challenging
- Manual JavaScript form validation provided greater control but required care with regular expressions and logic

## 📚 References

- [Wikipedia: Sri Lankan Cuisine](https://en.wikipedia.org/wiki/Sri_Lankan_cuisine)  
- [Google Maps Embed API](https://developers.google.com/maps/documentation/embed/overview)  
- [Font Awesome CDN](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css)  
- [QR Code Generator](https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js)  
- [Freepik – Design Assets](https://www.freepik.com/)

## ✅ Validation

All pages were tested using:
- [W3C HTML Validator](https://validator.w3.org/)
- [WAVE Accessibility Tool](https://wave.webaim.org/)

## 📬 Contact

For further queries or collaborations:

**M. S. Gunasiri**   
🌐 https://www.linkedin.com/in/menura-sathnindu-gunasiri/
