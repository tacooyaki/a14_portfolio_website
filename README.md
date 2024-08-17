# Portfolio Site

This project includes a Create React App to display a portfolio website.

## Getting Started

### Prereqs

- Docker must be installed on your local machine.

### Building the Docker Image

1. Build the Docker image:
   ```bash
   docker build -t mercredi_patrick_coding_assignment14 .
   ```

### Running the Docker Container

1. Run the Docker container:

   ```bash
   docker run -p 5575:5575 mercredi_patrick_coding_assignment14
   ```

2. Open your browser and navigate to `http://localhost:5575`

## Project Structure

- `src`: Contains the source code for the React application.
- `public`: Contains the static files.
- `Dockerfile`: Used to build the Docker image.
- `README.md`: This file.
