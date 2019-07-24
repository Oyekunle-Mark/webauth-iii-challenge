const server = require('./api/server');

const PORT = process.env.PORT || 5000;

server.listen(PORT, () =>
  console.log(`Server at port ${PORT} at your service O' mage`),
);
