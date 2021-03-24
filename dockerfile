FROM node:13.12.0-alpine

RUN apk --no-cache add curl

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g

# add app
COPY src src/.
COPY public public/.
COPY docker/config.js src/

# start app
CMD ["npm", "start"]