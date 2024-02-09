# External Requirements

This directory contains things that are "extra", and may not be necessary.

## DNS for Branch Server + DuckDNS

Aside from the usual A records that point the domain at your servers, you will
also need an `_acme-challenge` CNAME record that points at your chosen DuckDNS
domain.

## nginx

If we have multiple servers running on one machine, we need to use a reverse
proxy. This should be copied to the appropriate server(s) and run via
`docker compose`.

## GitLab Container Registry

GitLab has free unlimited container space, at the cost of likely limited bandwidth.
You can use an access token to connect to a private GitLab container registry.

## GitLab Custom buildx

The current version of Docker comes with buildx around 0.10. The manifests
it generates [aren't parsed well by GitLab](https://gitlab.com/gitlab-org/gitlab/-/issues/341939).
There's a fix that should be coming through in 0.12, but it may also be desirable
to control the Docker and/or buildx versions used.

Therefore, we use GitLab's container registry and CI to publish a small image
that contains a [specific version of Docker and buildx](https://gitlab.com/ttbnl-2024/docker-with-buildx).
