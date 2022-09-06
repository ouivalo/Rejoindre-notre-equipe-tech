# syntax=docker/dockerfile:1
FROM node:18-alpine

# Création du dossier app
RUN mkdir -p /app
WORKDIR /app

# installation des dependances
COPY package.json .
COPY package-lock.json .
RUN npm install -g @angular/cli
RUN npm install
# copie des dossiers créer dans le dossier app
