# 📞 Contact Form UI

A responsive and modern contact form built with **React** and **Tailwind CSS**. It features a clean UI with split layout — one side showing an illustration and the other side containing a neatly styled contact form.



## ✨ Features

- Clean, lightweight, and responsive UI
- Card-style layout with max-width for modern aesthetics
- Validates required fields before form submission
- Built using functional React components and Tailwind utility classes



## 🖼️ Preview

![Screenshot](./assets/contact-form-preview.png)



## 🛠️ Tech Stack

- **React** – Functional components
- **Tailwind CSS** – Utility-first CSS framework
- **JavaScript (ES6+)**



## 📁 Folder Structure

```bash
/contact-form-ui
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ └── ContactForm.jsx
│ ├── assets/
│ │ └── contact-illustration.png
│ ├── App.js
│ └── index.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/Contact-Us-Form-Responsive.git
cd Contact-Us-Form-Responsive
```

## 2. Install dependencies
```bash
npm install
```
## 3. Start the development server
```bash
npm start
```
Visit http://localhost:3000 in your browser.

## 📄Form Validation
- The form checks for basic validation:
- Name, email, and message are required.
- Displays error in red if validation fails.

## 🖌️ Styling Notes
- Card width is capped using max-w-4xl (≈896px) to allow background visibility.
- Error text uses text-red-500 (replace text-coral-red with Tailwind red shades).
- Background is a gradient: from-blue-100 to-blue-200
- Form panel has bg-sky-400 for a vibrant, modern look.

## 🤝 Contribution
- Feel free to fork this project and submit a PR. Suggestions and improvements are welcome
