# Use the official Node.js runtime as the base image
FROM node:18 as build_stage

# Set the working directory in the container
WORKDIR /character-creator

# Copy package.json and package-lock.json to the working directory
COPY ./character-creator/package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code to the container
COPY ./character-creator .

# Build the React app for production
RUN npm run build

# Use Nginx as the production server
FROM nginx:alpine

# Copy the built React app to Nginx's web server directory
COPY --from=build_stage /character-creator/dist /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]