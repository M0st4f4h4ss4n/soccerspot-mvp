const border = '==============================';
const shade = '------------------------------';
const reset = '\x1b[0m';

function info(message, data = null) {
  const emoji = '✅';
  const color = '\x1b[32m';

  console.log(`${color}${border}\n${shade}\n${emoji} ${message}\n${data ? `${shade}\n${JSON.stringify(data, null, 2)}\n` : ''}${border}${reset}`);
}

function error(message, data = null) {
  const emoji = '❌';
  const color = '\x1b[31m';

  console.log(`${color}${border}\n${shade}\n${emoji} ${message}\n${data ? `${shade}\n${JSON.stringify(data, null, 2)}\n` : ''}${border}${reset}`);
}

module.exports = { info, error };
