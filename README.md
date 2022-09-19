* git clone URL
* cd FOLDER
* docker build . -t berkay
* docker run -p 8094:8080 -d berkay
* systemctl restart nginx.service

## Edit reverse proxy
* nano /etc/nginx/sites-available/reverse-proxy.conf

* docker stop CONTAINER