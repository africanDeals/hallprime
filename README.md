# [HallPrime.com](https://asapdeals.onrender.com)

[![Run on Repl.it](https://replit.com/badge/github/africanDeals/hallprime)](https://replit.com/new/github/africanDeals/hallprime)

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
1
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

Just find a stable Internet Connection and try again.

This second option is not recommended but if you have no other choice, then do this:

```bash
npm config set registry http://registry.npmjs.org/
```

2
```bash
[0] Error: listen EADDRINUSE: address already in use :::5000
[0]     at Server.setupListenHandle [as _listen2] (node:net:1372:16)
...
[0]     at processTicksAndRejections (node:internal/process/task_queues:83:21) {
[0]   code: 'EADDRINUSE',
[0]   errno: -98,
[0]   syscall: 'listen',
[0]   address: '::',
[0]   port: 5000
[0] }
[0] [nodemon] app crashed - waiting for file changes before starting...
```

Solution

Find the PIDs using tcp:5000

```bash
lsof -i TCP:5000 | grep LISTEN
```
You'll get something like:

> node    1842 runner   20u  IPv6 3029301      0t0  TCP *:5000 (LISTEN)

Then Kill the PID

```bash
kill 1842
```
