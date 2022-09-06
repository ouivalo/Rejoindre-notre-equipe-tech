# syntax=docker/dockerfile:1
FROM python:3.5.3
ENV PYTHONUNBUFFERED 1
RUN mkdir /back/
WORKDIR /back/
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
