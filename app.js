const Provider = require('oidc-provider');
const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.HEROKU_APP_NAME || 'immense-forest-13455';

const oidc = new Provider(`https://${APP_NAME}.herokuapp.com`);
console.log(APP_NAME);

oidc.initialize({
  clients: [{client_id: '', client_secret: 'bar', redirect_uri: `http://localhost:8080`}]
}).then(() => {
  oidc.app.proxy = true;
  oidc.app.keys = '';
  oidc.app.listen(PORT);
});