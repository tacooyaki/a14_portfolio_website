# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory
WORKDIR /usr/src/app/lastName_firstName_fs

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Create React App for production
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 5575

# Serve the build directory
CMD ["serve", "-s", "build", "-l", "5575"]
