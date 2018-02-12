const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      port = 3042,
      ctrl = require('./Controller.js'),
      cors = require('cors');

      app.use(bodyParser.json());
      app.use(cors());

app.post('/api/messages', ctrl.Create);
app.get('/api/messages', ctrl.Read);
app.put('/api/messages/:id', ctrl.Update);
app.delete('/api/messages/:id', ctrl.Delete);


app.listen(port, () => console.log(`Server listening on port ${port}....`))
