# wp-env-port-stamp

[![npm version](https://badge.fury.io/js/wp-env-port-stamp.svg)](https://badge.fury.io/js/wp-env-port-stamp)

**TL;DR:** *wp-env-port-stamp* is a npm package who generates an *.wp-env.json* file with custom ports for your *wp-env* environment.

## Background

If you are working with different Docker environments at the same time, you need to manage the ports. *wp-env* uses port 8888 by default. If this port is already used by another project, you have a problem. But the solution is simple: just change the ports.

*wp-env-port-stamp* generates a new port address - more or less - randomly. When the package is called, the following happens:

* It checks if a file *.wp-env.json* exists in the executing directory.
* If yes, only the two ports are set or changed. The other values remain untouched.
* If no, a new file is created.

### Port number generation

The port numbers (wp-env configuration needs 2 ports) are generated from the current JavaScript date - the time in milliseconds since the ECMAScript epoch. The last digits of this time are used as port number. This number is somewhere between 1 and 65535. There is also a filter that prevents commonly used port numbers (e.g. 8888) from being used. Last but not least, a check is made to ensure that the generated port numbers are not already in use at the time of generation.

My solution may not be perfect, but it is good enough for daily local web development with a handful of Docker instances :-)

## Install/Remove

Install the package globally on your local computer:

```
npm install -g wp-env-port-stamp
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
