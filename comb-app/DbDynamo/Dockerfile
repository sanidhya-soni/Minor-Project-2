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
EXPOSE 3000

# Set environment variables
ENV NODE_ENV production
ENV AWS_ACCESS_KEY_ID AKIAVY5JKO7NXNLCHBF7
ENV AWS_SECRET_ACCESS_KEY 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
ENV AWS_DEFAULT_REGION ap-south-1

# Start the application
CMD ["npm", "start"]