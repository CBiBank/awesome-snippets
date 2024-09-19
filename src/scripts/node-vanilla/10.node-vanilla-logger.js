const logFilePath = path.join(__dirname, 'app.log')
const logLevels = {
  info: 'INFO',
  warn: 'WARN',
  error: 'ERROR'
}
const log = (level, message) => {
  const logMessage = `${new Date().toISOString()} [${logLevels[level]}] - ${message}\n`
  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error('Failed to write to log file', err)
    }
  })
}
const info = (message) => log('info', message)
const warn = (message) => log('warn', message)
const error = (message) => log('error', message)
