# Fetching the latest node image on alpine linux
FROM node:alpine AS development
# Declaring env
ENV NODE_ENV development
# Setting up the work directory
WORKDIR /health-care
# Installing dependencies
COPY ./package*.json /health-care
RUN yarn install
# Copying all the files in our project
COPY . .
# Starting our application
CMD ["yarn", "dev", "--host", "0.0.0.0"]
