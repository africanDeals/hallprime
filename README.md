# [HallPrime.com](https://asapdeals.onrender.com)

Description: ...

## Build Command

This command runs in the root directory of your repository when a new version of your code is pushed, or when you deploy manually. It is typically a script that installs libraries, runs migrations, or compiles resources needed by your app.

```bash
npm run dev
```

## Start Command

This command runs in the root directory of your app and is responsible for starting its processes. It is typically used to start a webserver for your app. It can access environment variables defined by you in Render.

```bash
npm run start
```

## Deploy Hook API

Your private URL to trigger a deploy for this server. Remember to keep this a secret.

```bash
# Call https://api.render.com/deploy/srv-cdgeu6ien0hj5e9o2740?key=WFB0HyDfuPg
```

# Other Scripts

```json
    "scripts": {
        "start": "node backend/server",
        "server": "nodemon backend/server",
        "client": "npm start --prefix frontend",
        "dev": "concurrently \"npm run server\" \"npm run client\"",
        "data:import": "node backend/seeder",
        "data:destroy": "node backend/seeder -d",
        "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix frontend && npm run build --prefix frontend"
    }
```

## Connect

Static Outbound IP Addresses
Network requests from your service to the public internet will come from one of the following IP addresses.

```bash
100.20.92.101
44.225.181.72
44.227.217.144
```

## Common Isuues

```bash
npm ERR! code ERR_SOCKET_TIMEOUT
npm ERR! network Socket timeout
npm ERR! network This is a problem related to network connectivity.
npm ERR! network In most cases you are behind a proxy or have bad network settings.
npm ERR! network
npm ERR! network If you are behind a proxy, please make sure that the
npm ERR! network 'proxy' config is set properly.  See: 'npm help config'
```

Solution:

```bash
npm config set registry http://registry.npmjs.org/
```
