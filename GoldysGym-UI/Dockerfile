#Dockerfile for AngularFrontend
#nginx:alphine images is pulled and angular is exposed by nginx server

# FROM nginx:alpine
# COPY default.conf /etc/nginx/conf.d/default.conf
# COPY /dist/GoldiesGym/ /usr/share/nginx/html
# EXPOSE 4200
# RUN chgrp -R 0 /*
# RUN chmod -R g=u /*
# USER 1001

FROM nginx:1.13.3-alpine
## Copy our nginx config
# COPY nginx/ /etc/nginx/conf.d/
## Remove default nginx website
# RUN cat /etc/nginx/conf.d/default.conf
RUN sed -i "s/listen       80/listen 8080/g" /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/* && chmod -R 777 /var/log/nginx /var/cache/nginx/ && chmod -R 777 /etc/nginx/* && chmod -R 777 /var/run/ && chmod -R 777 /usr/share/nginx/
## copy over the artifacts in dist folder to default nginx public folder
COPY dist/GoldiesGym /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

