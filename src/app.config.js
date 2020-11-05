const issuer = process.env.ISSUER;
const redirectUri = process.env.REDIRECT_URI;
const clientId = process.env.CLIENT_ID;

export default {
    url: issuer,
    issuer: `${issuer}/oauth2/default`,
    redirect_uri: redirectUri,
    client_id: clientId,
    scopes: ['openid', 'profile', 'email'],
    pkce: true
  };