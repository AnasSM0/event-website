# Anas Fabrics - Premium Event Supplies & Catering

Welcome to the official website repository for **Anas Fabrics**. We specialize in providing high-quality event materials, including crockery, furniture, linens, and catering equipment for weddings, corporate events, and parties.

## 🚀 Features

-   **Modern & Responsive Design**: Built with React and Tailwind CSS for a seamless experience on all devices.
-   **Product Gallery**: A dynamic gallery showcasing our extensive inventory (Crockery, Furniture, Linens, etc.) with category filtering.
-   **Optimized Performance**: Images are automatically optimized during the build process for fast loading times.
-   **WhatsApp Integration**: Floating WhatsApp widget for direct customer inquiries.
-   **Contact & Location**: Easy access to our contact details and business location.

## 🛠️ Tech Stack

-   **Frontend**: [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [Shadcn UI](https://ui.shadcn.com/) (Radix Primitives)
-   **Icons**: [Lucide React](https://lucide.dev/)

## 📦 Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (Version 18 or higher)
-   npm (comes with Node.js)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/anas-fabrics.git
    cd anas-fabrics
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  **First-Time Setup (Windows)**:
    Run the included setup script to organize images and build the project:
    ```cmd
    setup.bat
    ```

### Development

To start the local development server:

```bash
npm run dev
```

Visit `http://localhost:8080` (or the port shown in your terminal) to view the site.

## 🖼️ Image Optimization

This project includes automated image optimization to ensure high performance.

-   **Build Time**: Images are compressed automatically when you run `npm run build`.
-   **Source Optimization**: You can manually optimize the source images in `public/gallery` by running:
    ```bash
    node optimize-images.js
    ```
    *Note: The images in this repository have already been optimized.*

## 🚀 Deployment

This project is ready for deployment on platforms like **Vercel** or **Netlify**.

1.  Push your code to a GitHub repository.
2.  Connect your repository to Vercel/Netlify.
3.  The platform will automatically detect `vite` and run `npm run build`.
4.  Your site will be live!

**Note**: Do NOT push the `dist` folder to GitHub. It is a generated build artifact.

## 📂 Project Structure

```
event-website/
├── public/              # Static assets (Favicons, Gallery Images)
├── src/
│   ├── components/      # Reusable UI components (Navbar, Footer, etc.)
│   ├── data/            # Static data files (Gallery items, Categories)
│   ├── pages/           # Page components (Home, About, Gallery, Contact)
│   └── index.css        # Global styles and Tailwind directives
├── optimize-images.js   # Script for source image optimization
├── setup.bat            # Windows setup helper script
└── vite.config.ts       # Vite configuration (Plugins, Port, Aliases)
```

## 📄 License

This project is proprietary to Anas Fabrics.
