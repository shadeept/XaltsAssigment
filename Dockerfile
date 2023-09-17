# Use the official Node.js image as the base image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy application files to the working directory
COPY index.js createFile.sh ./

# Make create_test.sh executable
RUN chmod +x createFile.sh

# Expose the port the app runs on
EXPOSE 3000

# Command to start the application
CMD ["node", "index.js"]

