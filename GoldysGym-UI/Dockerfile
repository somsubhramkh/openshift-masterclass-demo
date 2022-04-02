#Dockerfile for AngularFrontend
#nginx:alphine images is pulled and angular is exposed by nginx server

FROM nginx:alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY /dist/GoldiesGym/ /usr/share/nginx/html
EXPOSE 4200
RUN chgrp -R 0 /*
RUN chmod -R g=u /*
USER 1001

