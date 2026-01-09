# Three.js Planetary Project

## Overview
This project is a 3D planetary visualization built using [Three.js](https://threejs.org/), a JavaScript library for creating 3D graphics in the browser. The project features interactive planets with textures, animations, and a starry background.

## Features
- **3D Planets**: Four planets (Earth, Venus, Csilla, and Volcanic) with unique textures.
- **Starry Background**: A realistic starry sky using a spherical texture.
- **Responsive Design**: The canvas adjusts to the browser window size.
- **Navigation Bar**: Links for Home, About, and Contact.

## Project Structure
```
three_project/
├── index.html         # Main HTML file
├── main.js            # JavaScript entry point
├── package.json       # Project metadata and dependencies
├── style.css          # Global styles
├── vite.config.js     # Vite configuration
├── vercel.json        # Vercel deployment configuration
└── public/            # Public assets
    ├── csilla/        # Csilla planet textures
    ├── earth/         # Earth textures
    ├── venus/         # Venus textures
    └── volcanic/      # Volcanic planet textures
```

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd three_project
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
### Development Server
To start the development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### Build for Production
To build the project for production:
```bash
npm run build
```
The output will be in the `dist/` directory.

### Preview Production Build
To preview the production build:
```bash
npm run preview
```

## Deployment
This project is configured for deployment on [Vercel](https://vercel.com/). The `vercel.json` file includes rewrite rules for routing.

## Technologies Used
- **Three.js**: For 3D rendering.
- **GSAP**: For animations.
- **Vite**: For development and build tooling.
- **Tailwind CSS**: For styling.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

Happy coding! 🚀