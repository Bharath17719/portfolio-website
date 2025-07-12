const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API route for contact form submission
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    // Here you would typically save to database or send email
    console.log('Contact form submission:', { name, email, message });
    
    res.json({ 
        success: true, 
        message: 'Thank you for your message! I will get back to you soon.' 
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Portfolio website is running on http://localhost:${PORT}`);
    console.log(`Press Ctrl+C to stop the server`);
}); 