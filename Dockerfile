FROM mhart/alpine-node:latest
WORKDIR /home/node/app

COPY package.json ./
COPY tsconfig*.json ./
RUN npm config set unsafe-perm true


RUN npm install -g typescript
RUN npm install

COPY ./src ./src
RUN tsc

CMD [ "node", "dist/main.js" ]