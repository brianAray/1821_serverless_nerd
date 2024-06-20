# Common Docker Commands
```cli
docker image ls #lists your images

docker image rm {image name} #deletes a specific image

docker ps # lists all running containers

docker ps -a # lists all containers (running and not running)

docker stop {container name or id} #stops a container

docker rm {container name} #removes the container

docker logs {container name} #shows container STDOUT logs

docker run -p {host-port}:{container-port} {image-name} # spins up a container and maps a host port to a container port. add -d if you want to run in detached mode to keep using the terminal you are in

docker build -t {name} {Dockerfile path} # tells docker to build an image and to assign it the given name

docker-compose up # tells docker to create and run the services designated in a docker-compose.yml file, can run detached

docker-compose down # tells docker to destroy the services designated in a docker-compose.yml file
```
