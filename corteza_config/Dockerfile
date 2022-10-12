FROM ubuntu:20.04

WORKDIR /corteza
RUN mkdir -p webapp/public
COPY --from=cortezaproject/corteza-webapp:2022.9.0 /usr/share/nginx/html/.  webapp/public
COPY --from=cortezaproject/corteza-server:2022.9.0 /corteza/ /corteza
ENTRYPOINT ["./bin/corteza-server","serve-api"]