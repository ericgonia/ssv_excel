FROM mongo

MAINTAINER Eric Gonia

ENV PORT=27017

#COPY . /var/www
#WORKDIR /var/www

VOLUME mongodata /data/db

#RUN npm install

EXPOSE $PORT

#ENTRYPOINT ["npm", "start"]