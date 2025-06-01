FROM node:18-alpine AS base

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./
# If you use yarn, uncomment the next line and comment out the npm install line
# COPY yarn.lock ./

# Install app dependencies
# If you use yarn, use: RUN yarn install --frozen-lockfile
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build your Payload app
# If your build script is different, change it accordingly
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "run", "serve"]
# If you use yarn, use: CMD ["yarn", "serve"]
# Or if your start script is different (e.g. `npm start`), change it.