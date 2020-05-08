// Imports
import * as queryString from 'query-string'

// App imports
import {
  URL_WEB,
  OAUTH_FACEBOOK_ID,
  OAUTH_GOOGLE_ID,
  OAUTH_INSTAGRAM_ID,
} from 'setup/config/env'
import params from 'setup/config/params'
import routes from 'setup/routes'

// facebook
export const facebook = () => {
  const url = queryString.stringifyUrl(
    {
      url: 'https://www.facebook.com/v6.0/dialog/oauth',
      query: {
        client_id: OAUTH_FACEBOOK_ID,
        redirect_uri: `${URL_WEB}${routes.pagesAuthorize.path}/`,
        scope: `email`,
        state: JSON.stringify({
          provider: params.user.oauth.providers.facebook.key,
        }),
      },
    },
    { encode: false },
  )

  console.log(url)

  return url
}

// google
export const google = () => {
  const url = queryString.stringifyUrl(
    {
      url: 'https://accounts.google.com/o/oauth2/v2/auth',
      query: {
        client_id: OAUTH_GOOGLE_ID,
        redirect_uri: `${URL_WEB}${routes.pagesAuthorize.path}/`,
        scope: [
          'https://www.googleapis.com/auth/userinfo.email',
          'https://www.googleapis.com/auth/userinfo.profile',
        ].join(' '),
        response_type: 'code',
        access_type: 'offline',
        prompt: 'consent',
        state: JSON.stringify({
          provider: params.user.oauth.providers.google.key,
        }),
      },
    },
    { encode: false },
  )

  console.log(url)

  return url
}

// instagram
export const instagram = () => {
  const url = queryString.stringifyUrl(
    {
      url: 'https://api.instagram.com/oauth/authorize',
      query: {
        client_id: OAUTH_INSTAGRAM_ID,
        // redirect_uri: `${URL_WEB}${routes.pagesAuthorize.path}/`, // for live
        redirect_uri: `https://example.com${routes.pagesAuthorize.path}/`, // for testing
        scope: 'user_profile,user_media',
        response_type: 'code',
        state: JSON.stringify({
          provider: params.user.oauth.providers.instagram.key,
        }),
      },
    },
    { encode: false },
  )

  console.log(url)

  return url
}