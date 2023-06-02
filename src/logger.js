module.exports = function logger(message, type = 'info') {
    const border = '==============================';
    const shade = '------------------------------';
    const emoji = type === 'info' ? '✅' : '❌';
    const color = type === 'info' ? '\x1b[32m' : '\x1b[31m';
    const reset = '\x1b[0m';
  
    console.log(`${color}${border}\n${shade}\n${emoji} ${message}\n${shade}\n${border}${reset}`);
  };