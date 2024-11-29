# Base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Handle .env file using the build argument passed via Cloud Build
ARG mentalq-backend-env_PATH
COPY ${mentalq-backend-env_PATH} .env

# Expose the port the app runs on
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]
