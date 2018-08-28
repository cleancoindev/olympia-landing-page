subscribe = _ => {
  const API_URL = 'https://us13.api.mailchimp.com/3.0/lists/a695408992/members/'
  const API_KEY = '7aa9a2934867fc0b60d9e988b91c9a55-us13'
  const headers = new Headers()

  headers.set('Authorization', 'Basic ' + Buffer.from('gnosis' + ':' + API_KEY).toString('base64'))

  const email_address = document.getElementById('emailAddress').value

  fetch(API_URL, {
    method: 'POST',
    headers: {
      Authorization: 
      'Basic ' + Buffer.from('gnosis' + ':' + API_KEY).toString('base64'),
    },
    body: JSON.stringify({
      email_address,
      status: 'subscribed',
    }),
  })
  debugger

  return false
}
