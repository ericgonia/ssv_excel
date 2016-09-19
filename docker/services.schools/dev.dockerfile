cd FROM node

MAINTAINER Eric Gonia

ENV NODE_ENV=production
ENV PORT=3000
ENV WHATSUP=Matt is lame

COPY . /var/www
WORKDIR /var/www

RUN npm install

EXPOSE $PORT

ENTRYPOINT ["npm", "start"]