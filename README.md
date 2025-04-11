
📘 ShoppyGlobe – React E-commerce App
----------------------------------------

🔧 Project Setup

1. Clone the repository
   git clone https://github.com/Naveennayak1/shoppyglobee.git
   cd shoppyglobee

2. Install dependencies
   npm install

3. Run the development server
   npm run dev

   Open in browser: http://localhost:5173


📁 Project Structure

shoppyglobee/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── vite.config.js
├── package.json
└── README.txt


🌐 Deployment to GitHub Pages

1. Update vite.config.js
   export default defineConfig({
     base: '/shoppyglobee/',
     plugins: [react()],
   });

2. Build and Deploy
   npm run build
   npm run deploy

3. Live URL  
   🔗 https://naveennayak1.github.io/shoppyglobee/


✅ Features

- View all products
- Product details page
- Add to cart
- Responsive UI
- NotFound page for invalid routes
- State management with Redux
