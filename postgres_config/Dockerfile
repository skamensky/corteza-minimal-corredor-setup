FROM postgres:13

COPY ./db_initialized.sh /
COPY ./db_definition.sql /docker-entrypoint-initdb.d/1-init.sql
