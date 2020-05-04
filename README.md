# Stater

Statistic application basic on COVID-19 example

# Installation

## Installation (design)

- [Install Bootstrap Studio](https://bootstrapstudio.io/)

## Installation (web development)

- [Install Node](https://nodejs.org/en/download/)
- [Install Node.js to Ubuntu](https://www.digitalocean.com/community/tutorials/node-js-ubuntu-18-04-ru)
- [Install PM for Node.js](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-18-04-ru)
- [Install Nginx to Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04-quickstart-ru)
- [Install SSL CertBot to Ubuntu](https://www.digitalocean.com/community/tutorials/nginx-let-s-encrypt-ubuntu-18-04-ru)
- [Install Postgres](https://www.postgresql.org/download/)
- [Install Postgres to Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04-ru)
- [Install Graphana](https://grafana.com/docs/grafana/latest/guides/getting_started/)
- [Install Graphana to Ubuntu](https://grafana.com/docs/grafana/latest/installation/debian/)
- [Open specific port using iptables](https://ru.stackoverflow.com/questions/347145/%D0%9A%D0%B0%D0%BA-%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D1%8C-%D0%BF%D0%BE%D1%80%D1%82-%D0%B2-ubuntu)
- [Open specific port using ufw](https://askubuntu.com/questions/911765/open-port-on-ubuntu-16-04)

- Open Postgres shell and execute the following:

```shell
create database stat;
create user stater with encrypted password 'qwerty12345';
grant ALL privileges on database stat to stater;
# connect
sudo -u postgres psql
# use db
\c stat
# describe table
\d stats
# exit
\q
```

- Open terminal

```shell
cd application
npm install
npm run dev
```

- Open localhost:8082 at browser

# Configs:

- [Nginx Config](https://www.digitalocean.com/community/questions/how-to-run-node-js-server-with-nginx)

```shell
server {
    if ($host = www.corona.notify.wtf) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    if ($host = corona.notify.wtf) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    listen 80;

    root /var/www/web/public;

    server_name corona.notify.wtf www.corona.notify.wtf;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;

    root /var/www/web/public;

    server_name corona.notify.wtf www.corona.notify.wtf;
    ssl_certificate /etc/letsencrypt/live/corona.notify.wtf/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/corona.notify.wtf/privkey.pem;

    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;
    ssl_ciphers 'EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH';

    location /assets {
        root /var/www/Stater/public;
    }

    location /  {
        proxy_pass    http://localhost:8082;
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

# Android Deploy

- [Guide](https://web.dev/using-a-pwa-in-your-android-app/)
- [Naming conventions](https://stackoverflow.com/questions/6273892/android-package-name-convention)
- [Bubblewrap CLI](https://github.com/GoogleChromeLabs/bubblewrap/tree/master/packages/cli)
- Commands

```shell
# path to Java SDK
ls -l `which java`

# init JAVA_HOME env at Mac OS
export JAVA_HOME=$(/usr/libexec/java_home)

# create application
npx @bubblewrap/cli init --manifest=https://corona.notify.wtf/manifest.json

# build application
npx @bubblewrap/cli build
```
