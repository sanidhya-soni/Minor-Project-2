# Specify the base image
FROM node

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that the application will listen on
EXPOSE 5001

# Set environment variables
ENV NODE_ENV production
ENV AWS_ACCESS_KEY_ID <AWS_ACCESS_KEY_ID>
ENV AWS_SECRET_ACCESS_KEY <AWS_SECRET_ACCESS_KEY>
ENV AWS_DEFAULT_REGION <AWS_DEFAULT_REGION>

# Start the application
CMD ["npm", "start"]