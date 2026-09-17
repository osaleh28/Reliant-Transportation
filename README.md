# Reliant Transportation

Reliant Transportation is a responsive website for a luxury black car service providing private airport pickups and drop-offs throughout Florida.

## Features

- Private airport transportation
- Service to Tampa, Orlando, Miami, Fort Myers, and Sarasota
- Chevrolet Suburban with room for up to six passengers
- Licensed and background-checked drivers
- Responsive design for desktop and mobile devices
- Online ride-request form
- Form validation and submission through Formspree
- Past travel dates are automatically disabled

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Formspree

## Live Website

[View the Reliant Transportation website](https://osaleh28.github.io/Reliant-Transportation/)

## Running the Project Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/osaleh28/Reliant-Transportation.git
   ```

2. Open the project directory:

   ```bash
   cd Reliant-Transportation
   ```

3. Open `index.html` in your browser.

No build tools or dependencies are required.

## Project Structure

```text
Reliant-Transportation/
|-- index.html
|-- styles.css
|-- app.js
`-- README.md
```

## Ride-Request Form

The ride-request form is submitted through Formspree. To use a different form endpoint, update the `action` attribute in `index.html`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## Planned Improvements

- Add business contact information
- Add vehicle photos
- Add pricing or quote information
- Add a service-area map
- Replace sample testimonials with verified customer reviews
- Add a privacy policy
- Improve search-engine optimization
- Deploy the website with a custom domain

## License

This project is intended for Reliant Transportation. All rights reserved.
