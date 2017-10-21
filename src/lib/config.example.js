module.exports = {
  SESSION_TOKEN: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g',
  backend: {
    PumpupApiRemote: true,
    PumpupApiLocal: false,
  },
  PumpupApi: {
    local: {
      url: 'http://localhost:5000'
    },
    remote: {
      url: 'http://api.pumpup.com/1'
    }
  }
}
