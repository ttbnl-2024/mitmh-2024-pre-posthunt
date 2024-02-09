FROM nikolaik/python-nodejs:python3.11-nodejs18@sha256:0b8e1608c40a3906b8f174be901cf38d1e5c1ea589216c0fe36ace33420120b1 as base

RUN apt-get update && apt-get install --no-install-recommends -y optipng

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1
ENV PIP_NO_CACHE_DIR 1

RUN pip install pre-commit==3.4.0
RUN git config --system --add safe.directory '*'

ENV PRE_COMMIT_HOME /pre-commit-cache
