# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory
WORKDIR /usr/src/app/mercredi_patrick_ui_garden

# Copy the current directory contents into the container
COPY . .

# Install dependencies
RUN npm install

# Build the Create React App for production
RUN npm run build

# Build Storybook as a static web application
RUN npm run build-storybook -o ./storybook-static

# Install serve and http-server globally
RUN npm install -g serve http-server

# Expose the ports http-server will run on
EXPOSE 8018
EXPOSE 8084

# Serve both the CRA and Storybook
CMD ["sh", "-c", "serve -s build -l 8018 & http-server ./storybook-static -p 8084"]
