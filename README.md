# Stater

COVID-19 statistic

# Installation

## Installation (design)

- [Install Bootstrap Studio](https://bootstrapstudio.io/)
- Open template that located at the following path:

```shell
./design/bootstrap/Notifier.bsdesign
```

## Installation (web development)

- [Install Node](https://nodejs.org/en/download/)
- [Install Node.js to Ubuntu](https://www.digitalocean.com/community/tutorials/node-js-ubuntu-18-04-ru)
- [Install PM for Node.js](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-18-04-ru)
- [Install Nginx to Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04-quickstart-ru)
- [Install SSL CertBot to Ubuntu](https://www.digitalocean.com/community/tutorials/nginx-let-s-encrypt-ubuntu-18-04-ru)
- [Install Postgres](https://www.postgresql.org/download/)
- [Install Postgres to Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04-ru)

- Open Postgres shell and execute the following:

```shell
create database stat;
create user stater with encrypted password 'qwerty12345';
grant ALL privileges on database stat to stater;
```

- Open terminal

```shell
cd application
npm install
npm run dev
```

- Open localhost:3000 at browser

# Configs:

- [Domain](https://www.name.com/account/domain/details/notify.wtf)
- [Digital Ocean Droplet](https://cloud.digitalocean.com/droplets/186633527/)
- [Nginx Config](https://www.digitalocean.com/community/questions/how-to-run-node-js-server-with-nginx)

```shell
server {
    if ($host = www.stat.wtf) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    if ($host = stat.wtf) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    listen 80;

    root /var/www/web/public;

    server_name stat.wtf www.stat.wtf;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;

    root /var/www/web/public;

    server_name stat.wtf www.stat.wtf;
    ssl_certificate /etc/letsencrypt/live/stat.wtf/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/stat.wtf/privkey.pem;

    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;
    ssl_ciphers 'EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH';

    location /assets {
        root /var/www/Stater/public;
    }

    location /  {
        proxy_pass    http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

- Fix up SSH brokes

```shell
ufw allow 22/tcp && ufw allow 80/tcp && ufw allow 443/tcp
```

- [Fix memory leak ENOMEM](https://stackoverflow.com/questions/26193654/node-js-catch-enomem-error-thrown-after-spawn)

```shell
sudo fallocate -l 4G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo "/swapfile none swap sw 0 0" | sudo tee -a /etc/fstab
```
