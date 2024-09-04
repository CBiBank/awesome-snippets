exports.transformString = function (str, { identify = '_' } = {}) {
  const list = str.split(identify)
  const upperCaseList = list.map((item, index) => {
    if (index === 0) {
      return item
    }
    return item.charAt(0).toUpperCase() + item.slice(1)
  })
  return upperCaseList.join('')
}

exports.getSuggestion = function ({
  prefix = 'node',
  body = [],
  description = 'Code Snippets For Node.'
} = {}) {
  return {
    prefix,
    body,
    description
  }
}
