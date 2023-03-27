# syntax=docker/dockerfile:1.4
FROM --platform=$BUILDPLATFORM python:3.10-slim AS builder

WORKDIR /code
COPY requirements.txt /code
RUN --mount=type=cache,target=/root/.cache/pip \
    pip3 install -r requirements.txt \
    && apt-get -y update \
    && apt-get -y upgrade \
    && apt-get install -y --no-install-recommends ffmpeg

COPY . .

FROM builder AS dev-env

ENV FLASK_APP main.py
ENV FLASK_DEBUG 1
ENV FLASK_RUN_PORT 8000
ENV FLASK_RUN_HOST 0.0.0.0
ENV FLASK_CONFIG development

EXPOSE 8000

CMD ["flask", "run"]

FROM builder AS debug-env

RUN pip install debugpy

ENV FLASK_APP main.py
ENV FLASK_DEBUG 1
ENV FLASK_RUN_PORT 8000
ENV FLASK_RUN_HOST 0.0.0.0
ENV FLASK_CONFIG development

EXPOSE 8000

CMD python -m debugpy --listen 0.0.0.0:5678 --wait-for-client -m flask run