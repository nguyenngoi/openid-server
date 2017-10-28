// 'use strict';


// const app = require('express');
// const Provider = require('oidc-provider');
// const URL = 'http://localhost:3000';
// const routes = require('./routes');
// const http = require('http');


// const configuration = {
//   features: {
//     discovery: Boolean[true],
//     devInteractions: Boolean[true],
//     // claimsParameter: Boolean[false]
//   },
//   // discovery: {
//   //   service_documentation: '',
//   //   ui_locales_supported: ['en-US', 'en-CA'],
//   //   version: '1.0'
//   // },
//   // routes: {
//   //   authorization: '/authz',
//   // },
//   scopes: ['openid', 'offline_access'],
//   claims: {
//     openid: ['sub'],
//   }
// };


// const clients = [{
//   client_id: 'test',
//   client_secret: '',
//   redirect_uris: ['https://example.com'],
//   response_types: ['id_token token'],
//   grant_types: ['implicit'],
//   token_endpoint_auth_method: 'none',
// }];


// const oidc = new Provider(URL, configuration);
// oidc.initialize({
//   adapter: '',
//   clients
// }).then(() => {
//   // trust proxy ssl
//   oidc.app.proxy = true;
// }).then(() => {
//   app.set('view engine', 'ejs');
//   app.set('views', path.resolve(__dirname, 'views'));
//   app.use(bodyParser.json());
//   app.use(bodyParser.urlencoded({ extended: false }));

//   // config header
//   app.all('*', (req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Auth-Token');
//     return next();
//   });


//   // route use
//   app.use(routes);

//   // use default oidc callback
//   app.use(oidc.callback);

//   let server = http.createServer(app);
//   server.listen(3000);

// });




// // register grant types
// const paramenters = ['username', 'password'];
// oidc.registerGrantType('password', function passwordGrantTypeFactory(providerInstance) {
//   return async function passwordGrantType(ctx, next) {
//     if (ctx.params.username === '' && ctx.params.password === '') {
//       const AccessToken = providerInstance.AccessToken;
//       const at = new AccessToken({
//         accountId: '',
//         clientId: ctx.oidc.client.clientId,
//         grantId: ctx.oidc.uuid,
//       });

//       const accessToken = await at.save();
//       const expiresIn = AccessToken.expiresIn;

//       ctx.body = {
//         access_token: accessToken,
//         expires_id: expiresIn,
//         token_type: 'Bearer',
//       };
//     } else {
//       ctx.body = {
//         error: 'invalid_grant',
//         error_description: 'invalid credentails provided',
//       };
//       ctx.status = 400;
//     }

//     await next();
//   };
// }, paramenters);