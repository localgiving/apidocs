var bootprint = require('bootprint')
   .load(require('bootprint-swagger'))
   .merge({ /* Any other configuration */ })
   .build('swagger.json','build')
   .generate()
   .done(console.log);
