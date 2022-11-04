## Common Isues

Common Issues and How to resolve them.

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

Just find a stable Internet connection and try again.

This second option is not recommended, but if you have no other choice, then do this:

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