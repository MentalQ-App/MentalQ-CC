# Base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Define the build argument for .env file path
ARG MENTALQ_BACKEND_ENV_PATH

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Copy the .env file into the container from the provided build argument path
COPY ${MENTALQ_BACKEND_ENV_PATH} .env

# Expose the port the app runs on
EXPOSE 3000 

# Command to start the application
CMD ["npm", "start"]
