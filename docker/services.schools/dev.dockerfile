FROM node

MAINTAINER Eric Gonia

ENV NODE_ENV=dev
ENV PORT=3000

VOLUME c:/Git/ssv_excel/services.schools:/var/www
WORKDIR /var/www

RUN npm install typescript supervisor -g && npm install

EXPOSE $PORT

#ENTRYPOINT ["npm", "run", "dev"]
ENTRYPOINT ["ls", "/var/www"]