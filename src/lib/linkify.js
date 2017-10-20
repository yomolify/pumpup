const linkify = require('linkify-it')()

linkify.add('@', {
  validate: function (text, pos, self) {
    let tail = text.slice(pos)
    if (!self.re.pumpup) {
      self.re.pumpup =  new RegExp(
        '^([a-zA-Z0-9_]){1,15}(?!_)(?=$|' + self.re.src_ZPCc + ')'
      )
    }
    if (self.re.pumpup.test(tail)) {
      // Linkifier allows punctuation chars before prefix,
      // but we additionally disable `@` ("@@mention" is invalid)
      if (pos >= 2 && tail[pos - 2] === '@') {
        return false
      }
      return tail.match(self.re.pumpup)[0].length
    }
    return 0
  }
})

linkify.add('#', {
  validate: function (text, pos, self) {
    let tail = text.slice(pos)
    if (!self.re.pumpup) {
      self.re.pumpup =  new RegExp(
        '^([a-zA-Z0-9_]){1,15}(?!_)(?=$|' + self.re.src_ZPCc + ')'
      )
    }
    if (self.re.pumpup.test(tail)) {
      if (pos >= 2 && tail[pos - 2] === '#') {
        return false
      }
      return tail.match(self.re.pumpup)[0].length
    }
    return 0
  }
})

export default linkify
