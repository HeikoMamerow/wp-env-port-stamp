# wp-env-port-stamp

**TL;DR:** *wp-env-port-stamp* is a npm package who generates an *.wp-env.json* file with custom ports for your *wp-env* environment.

## Background

If you are working with different Docker environments at the same time, you need to manage the ports. *wp-env* uses port 8888 by default. If this port is already used by another project, you have a problem. But the solution is simple: just change the ports.

*wp-env-port-stamp* generates a new port address - more or less - randomly. When the package is called, the following happens:

* It checks if a file *.wp-env.json* exists in the executing directory.
* If so, only the two ports are set or changed. The other values remain untouched.
* If no, a new file is created.

The port number is generated from the current JavaScript date - the time in milliseconds since the ECMAScript epoch. We take the last digits of this time as the port number. This number is somewhere between 1 and 65535. There is also a filter that prevents commonly used port numbers (e.g. 8888) from being used.

My solution may not be perfect, but it is good enough for daily local web development with a handful of Docker instances :-)

## Install/Remove

Install the package globally on your local computer:

```
npm i -g wp-env-port-stamp
```

To remove the package:

```
npm uninstall -g wp-env-port-stamp
```

## Usage

1. Go in your local dev environment to your plugin, theme or block root directory or wherever you want to start *wp-env*.
2. Call the package: `wp-env-port-stamp`
3. The file is generated. You can start now with `wp-env`

Normally you only need to call the package for the first time in a new project. Later just start directly *wp-env*.
