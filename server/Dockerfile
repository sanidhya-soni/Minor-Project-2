# FROM node 
# WORKDIR /usr/src/app
# COPY package.json .
# RUN npm install
# COPY . .
# EXPOSE 5001
# CMD "node" "index.js"


FROM node

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Set the environment variables
ENV PORT=5001
ENV DB=mongodb+srv://admin:admin@cluster0.8axo4fj.mongodb.net/upes-login?retryWrites=true&w=majority
ENV JWTPRIVATEKEY=abhay@123
ENV SALT=10

# Expose the port the application will run on
EXPOSE 5001

# Start the application
CMD ["npm", "start"]