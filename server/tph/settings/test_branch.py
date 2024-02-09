from .staging import *
from .staging import ALLOWED_HOSTS, MAIN_HUNT_HOST, REGISTRATION_HOST

for host in (MAIN_HUNT_HOST, REGISTRATION_HOST):
    if host is not None:
        ALLOWED_HOSTS.append(f".{host}")
SSO_HOST = None
