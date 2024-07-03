const child = require('child_process')
const p = child.spawn('Invoke-WebRequest https://ifconfig.me', { shell: true })
p.stdout.on('data', (data) => console.log(data.toString()))
p.stderr.on('data', (data) => console.log(data.toString()))
