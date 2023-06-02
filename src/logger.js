const border = '┌───────────────────────────────────────┐';
const shade = '│                                       │';
const reset = '\x1b[0m';

function getCurrentTimestamp() {
  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'UTC' });
  return timestamp;
}

function logWithEmoji(icon, message, data = null, category = null) {
  const colors = {
    info: '\x1b[36m',
    error: '\x1b[31m',
    category: '\x1b[35m',
    data: '\x1b[33m',
  };
  const timestamp = getCurrentTimestamp();
  console.log(`${colors.info}${border}\n${shade}\n${icon} ${message}\n${data ? `${shade}\n${colors.data}Data: ${JSON.stringify(data, null, 2)}\n` : ''}${category ? `${shade}\n${colors.category}Category: ${category}\n` : ''}${shade}\n${icon} Time: ${timestamp}\n${border}${reset}`);
}

function info(action, message, data = null, category = null) {
  const emoji = 'ℹ️';
  const infoMessage = `${action}: ${message}`;
  logWithEmoji(emoji, infoMessage, data, category);
}

function error(action, message, data = null, category = null) {
  const emoji = '🚨';
  const errorMessage = `${action}: ${message}`;
  logWithEmoji(emoji, errorMessage, data, category);
}

module.exports = { info, error };