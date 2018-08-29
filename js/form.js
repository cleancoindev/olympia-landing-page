const showError = text => {
  const container = document.getElementsByClassName('signup-container')
  const prevMessage = document.getElementsByClassName('error-message')[0]
  if (prevMessage) {
    prevMessage.parentNode.removeChild(prevMessage)
  }

  const errorMessage = document.createElement('span')

  errorMessage.innerText = text
  errorMessage.className = 'error-message'

  container[0].appendChild(errorMessage)
}

const showSuccess = text => {
  const container = document.getElementsByClassName('signup-container')
  const prevMessage = document.getElementsByClassName('signup-success')[0]
  if (prevMessage) {
    prevMessage.parentNode.removeChild(prevMessage)
  }

  const successMessage = document.createElement('span')

  successMessage.innerText = text
  successMessage.className = 'signup-success'

  container[0].appendChild(successMessage)
}

subscribe = _ => {
  const API_URL = 'https://us13.api.mailchimp.com/3.0/lists/a695408992/members/'
  const API_KEY = '7aa9a2934867fc0b60d9e988b91c9a55-us13'
  const email_address = document.getElementById('emailAddress').value

  fetch(API_URL, {
    method: 'POST',
    credentials: 'include',
    headers: new Headers({
      Authorization: `Basic ${Buffer.from(`apikey:${API_KEY}`).toString('base64')}`,
    }),
    body: JSON.stringify({
      email_address,
      status: 'subscribed',
    }),
  }).then(
    () => {
      showSuccess('Please check your email for subscription confirmation.')
    },
    () => {
      showError('Something went wrong. Please try again later.')
    },
  )

  return false
}
