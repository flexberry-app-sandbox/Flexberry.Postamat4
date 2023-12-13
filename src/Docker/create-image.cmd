docker build --no-cache -f SQL\Dockerfile.PostgreSql -t postamat4/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t postamat4/app ../..
