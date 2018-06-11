const { execSync } = require('child_process')
const shellOpts = {
  stdio: 'inherit',
  shell: true
}
execSync('ghq get https://github.com/npm/node-which', shellOpts)
console.log('done')
