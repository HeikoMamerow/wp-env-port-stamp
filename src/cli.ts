#!/usr/bin/env node

import fs from 'fs';
const port = getPortnumber();
const testsPort = port + 1;
const objPorts: { [index: string]: number } = {'port': port, 'testsPort': testsPort}
const wpEnvJson = '.wp-env.json';
let wpEnvJsonData: { [index: string]: number }

/**
 * Check if ".wp-env.json" exist.
 */
if (fs.existsSync(wpEnvJson)) {
    wpEnvJsonData = JSON.parse(fs.readFileSync(wpEnvJson, 'utf8'))
    // Add numbers for "port" and "testsPort".
    Object.keys(objPorts).forEach(key => {
        wpEnvJsonData[key] = objPorts[key]
    });
} else {
    // No wp-env.json exist.
    wpEnvJsonData = objPorts;
}

/**
 * Write to .wp-env.json.
 */
fs.writeFileSync(wpEnvJson, JSON.stringify(wpEnvJsonData, null, 2))

/**
 * Generate port number from time stamp.
 * Function restarts if port number has unwanted values.
 *
 * @returns {number}
 */
function getPortnumber() {
    // Build port numbers from timestamp.
    const maxNumber = 65535
    let portnumber = parseInt(Date.now().toString().slice(-5));
    if (portnumber >= maxNumber) {
        portnumber = parseInt(portnumber.toString().slice(-4));
    }

    // Prevent unwanted ports.
    const notWantedPorts = [0, 79, 80, 87, 88, 442, 443, 2999, 3000, 8079, 8080, 8442, 8443, 8887, 8888, 65535]
    if (notWantedPorts.includes(portnumber)) {
        getPortnumber()
    }

    return portnumber
}