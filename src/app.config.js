const issuer = process.env.ISSUER;
const redirectUri = process.env.REDIRECT_URI;
const clientId = process.env.CLIENT_ID;

console.log('env', issuer, redirectUri, clientId)
export default {
    url: `https://cloudnalu.oktapreview.com`,
    issuer: `https://cloudnalu.oktapreview.com/oauth2/default`,
    redirect_uri: `http://localhost:3000/implicit/callback`,
    client_id: `0oa4ls58zN5pBW1hp1d6`,
    scopes: ['openid', 'profile', 'email'],
    pkce: true
  };