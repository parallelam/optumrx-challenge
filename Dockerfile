# official base image
FROM node:15.2.1

# working directory
WORKDIR /src

# adding `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@4.0.0 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]