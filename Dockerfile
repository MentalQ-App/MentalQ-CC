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

# Ensure the .env file is copied if it exists
# This assumes the .env file is in the build context's root directory
COPY .env .env
COPY cloud_cred.json cloud_cred.json
COPY firebase_cred cloud_cred.json

# Expose the port the app runs on
EXPOSE 8080

# Command to start the application
CMD ["npm", "start"]
