import flickrapi
from requests_oauthlib import OAuth1Session
import json
KEY = '878e60a2e5398d501b4bf543686ce379'
SCRT = '4f992c84759b86c9'

res = {'oauth_callback_confirmed': 'true',
       'oauth_token': '72157708340062944-30a122b9dc06c129',
       'oauth_token_secret': '687a08421579b179'}


def get_token():
    flickr = OAuth1Session(KEY, client_secret=SCRT, callback_uri='http://127.0.0.1/cb')
    url = 'https://www.flickr.com/services/oauth/request_token'
    r = flickr.get(url)
    if r.status_code != 200:
        raise Exception('bad response {code} {err}'.format(code=r.status_code, err=r.content))
    else:
        res = {j[0]: j[1] for j in [i.split('=') for i in r.content.decode('utf8').split('&')]}
        if res.get('oauth_callback_confirmed'):
            print(res)
            return res
        else:
            raise Exception('something go wrong {}'.format(json.dumps(res)))


def acces_token():
    flickr = OAuth1Session(KEY, client_secret=SCRT, callback_uri='http://127.0.0.1/cb')
    return


def flicr_auth():
    flickr = flickrapi.FlickrAPI(KEY, SCRT)
    flickr.authenticate_via_browser(perms='delete')


if __name__ == '__main__':
    flicr_auth()
