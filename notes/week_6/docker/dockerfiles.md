# Dockerfile : key words
A dockerfile is used to create an image: there are some core sections to be familiar with:
- FROM
    - tells Docker what image to use as a base
        - typically determines the software necessary to perform your commands/start the application
- COPY
    - tells docker what directory/file to copy into the container
        - requires you to provide a name for the copied resource in your container
- WORKDIR
    - tells Docker what to call the work directory within the container
- RUN
    - tells Docker what commands to run before starting your application
        - useful if you need to build your app before running it
- ENTRYPOINT
    - tells Docker what command to execute in order to start your application in the container
    - preferred over RUN because it allows you to provide arguments to the command when you start your container
        - "$@" is used to indicate the argument/s passed to the command

```dockerfile
FROM baseImage
COPY content/to/copy(. for all) locationOrName/of/copied/content
WORKDIR /the/workdir/path/of/copied/content
RUN commands for setup if necessary
ENTRYPOINT ["command","to","start","app","$@"]
```

You can layer your images in order to perform more complex operations, like building a jar file in your container and then executing it. You can assign an alias in the FROM statement in order to reference it's data later in the build process

```dockerfile
FROM builderImage as builder
COPY directory/ copiedDirectory/
RUN build command

FROM runnerImage as runner
COPY --from=builder executable.file copiedExecutable.file
ENTRYPOINT [ "command","to","start","app" ]
```
