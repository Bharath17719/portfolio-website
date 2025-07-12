# Portfolio Website

A modern, responsive portfolio website built with Node.js, Express.js, and vanilla JavaScript. Features a beautiful design with smooth animations and a contact form.

## Features

- 🎨 **Modern Design**: Clean and professional portfolio layout
- 📱 **Responsive**: Works perfectly on all devices
- ⚡ **Fast**: Optimized for performance
- 🎭 **Animations**: Smooth scroll animations and interactive elements
- 📧 **Contact Form**: Functional contact form with backend processing
- 🌐 **SEO Friendly**: Proper meta tags and semantic HTML

## Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal information and statistics
3. **Projects**: Showcase of your work with technology tags
4. **Skills**: Visual representation of your technical skills
5. **Contact**: Contact form and social media links

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (comes with Node.js)

## Installation

1. **Clone or download the project files**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Development

To run the server in development mode with auto-restart:

```bash
npm run dev
```

## Project Structure

```
portfolio-website/
├── public/
│   ├── css/
│   │   └── style.css          # Main stylesheet
│   ├── js/
│   │   └── script.js          # JavaScript functionality
│   └── index.html             # Main HTML file
├── server.js                  # Express server
├── package.json               # Project dependencies
└── README.md                  # This file
```

## Customization

### Personal Information

1. **Update the HTML file** (`public/index.html`):
   - Replace "Your Name" with your actual name
   - Update the hero subtitle and description
   - Modify the about section content
   - Add your real projects to the projects section
   - Update skills and their percentages
   - Change contact information

2. **Update contact details**:
   - Email address
   - Phone number
   - Location
   - Social media links

### Styling

The main styles are in `public/css/style.css`. You can customize:

- Colors (search for color codes like `#2563eb`)
- Fonts (currently using Poppins from Google Fonts)
- Layout and spacing
- Animations and transitions

### Adding Projects

To add a new project, copy this structure in the projects section:

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-[icon-name]"></i>
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description goes here.</p>
        <div class="project-tech">
            <span>Technology 1</span>
            <span>Technology 2</span>
            <span>Technology 3</span>
        </div>
        <div class="project-links">
            <a href="[live-demo-url]" class="btn btn-small">Live Demo</a>
            <a href="[github-url]" class="btn btn-small btn-outline">GitHub</a>
        </div>
    </div>
</div>
```

## Contact Form

The contact form is fully functional and will log submissions to the console. To make it send emails or save to a database:

1. **For email functionality**: Install a package like `nodemailer`
2. **For database storage**: Add a database like MongoDB or PostgreSQL
3. **Modify the `/api/contact` route** in `server.js`

Example with email (requires `nodemailer`):

```javascript
const nodemailer = require('nodemailer');

// In the contact route:
const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-app-password'
    }
});

await transporter.sendMail({
    from: data.email,
    to: 'your-email@gmail.com',
    subject: `Portfolio Contact from ${data.name}`,
    text: data.message
});
```

## Deployment

### Heroku

1. Create a `Procfile` in the root directory:
   ```
   web: node server.js
   ```

2. Deploy to Heroku:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   heroku create your-app-name
   git push heroku main
   ```

### Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Netlify

1. Build the project (if needed)
2. Upload the `public` folder to Netlify
3. Set the build command to `npm start`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to fork this project and customize it for your own portfolio!

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions, please open an issue on GitHub or contact me directly.

---

**Happy coding! 🚀** 