#!/bin/bash

set -e
if [ "$(psql -At -U corteza -c "select count(*) from pg_databases where datname = 'corteza';")" -eq 0 ] ; then
   exit 1
else
  echo "Corteza db exists. DB image is now considered initialized"
  exit 0
fi
