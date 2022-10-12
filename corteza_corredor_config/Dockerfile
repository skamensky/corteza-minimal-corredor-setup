FROM cortezaproject/corteza-server-corredor:2022.3.0
ENV CORREDOR_EXT_SEARCH_PATHS="$CORREDOR_EXT_SEARCH_PATHS:/extensions/*"
# we use this instead of yarn run serve:dev so that we can also watch the extensions directory
CMD ["yarn","run","ts-node-dev","--debounce","200","--transpile-only","--respawn","--ignore-watch","node_modules" ,"--ignore-watch" ,"usr", "--ignore-watch", "dist","--watch","/extensions","./src/server.ts"]