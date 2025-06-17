# Electrical Grid Infographic

## Project Description

This project is a basic static infographic providing an overview of the electrical grid, its major components (Generation, Transmission, Distribution), key operating entities (Generators, Transmission & Distribution Utilities, ISOs/RTOs, Retail Providers, Regulators, Consumers), and a distinction between regulated and deregulated market structures in the U.S.

The infographic is built using simple HTML and styled with Tailwind CSS for a clean and responsive design.

## Getting Started

Follow these steps to get the project up and running on your local machine:

1.  **Clone the repository:**


`bash git clone [https://github.com/gradyas/onboarding](https://github.com/gradyas/onboarding)`


2.  **Navigate to the project directory:**


bash `cd <onboarding>`

3.  **Install dependencies:**

    This project uses npm to manage dependencies (specifically, the `serve` package for local hosting).


bash `npm install`

4.  **Start the development server:**

    This will start a local web server using the `serve` package to host your static files.


bash `npm start`

5.  **View the infographic:**

    Open your web browser and go to the address provided in the terminal output (usually `http://localhost:3000`).

## Project Structure

-   `index.html`: The main HTML file containing the infographic content and structure.
-   `src/`: Directory containing project assets, including the image used in the infographic (`electricity_transmission_generation.jpg`).
-   `package.json`: Manages project dependencies and defines the `start` script.
-   `package-lock.json`: Records the exact versions of installed dependencies.
-   `.gitignore`: Specifies files and directories to be ignored by Git (includes `node_modules`).
-   `.idx/dev.nix`: Configuration file for the development environment (used by IDX).


## Notes

-   This project uses the Tailwind CSS CDN for simplicity during development. For a production deployment, it is recommended to use a build process (like PostCSS or the Tailwind CLI) to optimize and purge unused CSS. Refer to the [Tailwind CSS Installation Guide](https://tailwindcss.com/docs/installation) for more information.


