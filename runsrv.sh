#!/bin/bash
docker run -dit --rm --name  tsprj5-app -p 8080:80 -v "$PWD":/usr/local/apache2/htdocs/ httpd:2.4
