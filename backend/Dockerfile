# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory for the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port used by your Node.js application
EXPOSE 3001

# Start the application
CMD ["npm", "start"]
