const child = require('child_process')
child.spawn('Invoke-WebRequest https://ifconfig.me', { shell: true })
