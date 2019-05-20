FROM node:10-alpine
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . ./
EXPOSE 8080
RUN chmod +rwx server/www
CMD ["npm", "run","start"]