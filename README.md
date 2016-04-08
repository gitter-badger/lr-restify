# Late registration - working title


[![Build Status](https://travis-ci.org/LateRegistration/lr-restify.svg?branch=master)](https://travis-ci.org/LateRegistration/lr-restify)
[![Coverage Status](https://coveralls.io/repos/github/LateRegistration/lr-restify/badge.svg?branch=master)](https://coveralls.io/github/LateRegistration/lr-restify?branch=master)


##Install
Go to the directory that has your Dockerfile and run the following command to build the Docker image. The -t flag lets you tag your image so it's easier to find later using the docker images command:

```
$ docker build -t lr-restify .
```

##Run the image
Running your image with -d runs the container in detached mode, leaving the container running in the background. The -p flag redirects a public port to a private port inside the container. Run the image you previously built:

```
$ docker run --name webserver --link lr-mongodb:mongo -v $(pwd)/src/:/usr/src/app/src/ -p 49160:8080 -d lr-restify
```
