const lgtmButton = $('<button />',
  {
    text: 'LGTM 👍',
    class: 'btn btn-primary',
    id: 'lgtm-button',
    data: 'disabled-width',
    click: (e) => {
      e.preventDefault()
      const authenticityToken = $('input[name="authenticity_token"]').val()
      const headSha = $('input[name="head_sha"]').val()

      $.ajax({
        type: 'POST',
        url: `${window.location.pathname}/reviews`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        data: {
          '_method': 'put',
          'authenticity_token': authenticityToken,
          'head_sha': headSha,
          'pull_request_review[event]': 'approve',
          'pull_request_review[body]': 'LGTM'
        }
      })
    }
})

const init = () => {
  if (!$('#lgtm-button').length) {
    $('#partial-new-comment-form-actions').append(lgtmButton)
  }
}

$('#js-repo-pjax-container').bind("DOMSubtreeModified", init)

init()
