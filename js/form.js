$(document).ready(function() {
  ajaxMailChimpForm($('#subscribe-form'), $('#subscribe-result'))

  function ajaxMailChimpForm($form, $resultElement) {
    $form.submit(function(e) {
      e.preventDefault()

      submitSubscribeForm($form, $resultElement)
    })
  }

  // Submit the form with an ajax/jsonp request.
  // Based on http://stackoverflow.com/a/15120409/215821
  function submitSubscribeForm($form, $resultElement) {
    $.ajax({
      type: 'GET',
      url: $form.attr('action'),
      data: $form.serialize(),
      cache: false,
      dataType: 'jsonp',
      jsonp: 'c', // trigger MailChimp to return a JSONP response
      contentType: 'application/json; charset=utf-8',

      error: function(error) {
        // According to jquery docs, this is never called for cross-domain JSONP requests
      },

      success: function(data) {
        if (data.result != 'success') {
          var message = data.msg || 'Sorry. Unable to subscribe. Please try again later.'
          $resultElement.css('color', 'red')

          if (data.msg && data.msg.indexOf('already subscribed') >= 0) {
            message = "You're already subscribed. Thank you."
            $resultElement.css('color', 'red')
          }

          $resultElement.html(message)
        } else {
          $resultElement.css('color', 'greenyellow')
          $resultElement.html('Thank you!<br>You must confirm the subscription in your inbox.')
        }
      },
    })
  }
})
