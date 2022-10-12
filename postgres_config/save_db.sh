function ensure_cwd_is_root(){
  root_repo_dir=`git rev-parse --show-toplevel`
  current_dir=`pwd`
  if [ "$root_repo_dir" != "$current_dir" ]; then
    echo "Please run this script from the root of the repo ( '$root_repo_dir' )"
    exit 1
  fi
}

ensure_cwd_is_root

docker exec -it corteza-minimal-corredor-setup-corteza_db-1 /bin/sh -c "pg_dump --clean --if-exists --create --username corteza --dbname corteza > /db_definition.sql"
docker cp corteza-minimal-corredor-setup-corteza_db-1:/db_definition.sql postgres_config/db_definition.sql