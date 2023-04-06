# wp-env-port-stamp

**TL;DR:** *wp-env-port-stamp* is a npm package who generates an *.wp-env.json* file with custom ports for your *wp-env* environment.

## Background

If you work with different docker environments at the same time you need to manage the ports. *wp-env* uses port 8888 by default. If this port is already in use by another project then you have a problem. But the solution is easy: Just change the ports. 

*wp-env-port-stamp* generates every time a new port address - more or less - randomly. When the package is called, it creates a file *.wp-env.json* in the directory where it was called. With this *.wp-env.json* file you can customize the WordPress installation. In our case dynamic rendered port numbers.

The port number will be generated from the current JavaScript date - the time in milliseconds since the ECMAScript epoch. We take the last 4 numbers of this time as the port number. This solution my not be perfekt but good enough for your daily local web development with a handful docker instances. :-)

## Install/Remove

Install the package global on your local computer:

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

**Attention:** If there is already existing *.wp-env.json* file, *wp-env-port-stamp* will overwrite it! (There will be an improvement for this later.)
