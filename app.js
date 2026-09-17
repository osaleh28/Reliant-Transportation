// Prevent selecting a travel date in the past
(function () {
  var dateInput = document.querySelector('input[name="date"]');
  var today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);
})();

// Submit the ride request to Formspree without leaving the page
(function () {
  var form = document.getElementById('ride-form');
  var status = document.getElementById('form-status');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    status.textContent = 'Sending your request...';
    status.className = 'form-status';

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    })
      .then(function (response) {
        if (response.ok) {
          status.textContent = "Thanks! We've received your request and will follow up shortly.";
          status.className = 'form-status success';
          form.reset();
        } else {
          return response.json().then(function (data) {
            var message = (data && data.errors)
              ? data.errors.map(function (e) { return e.message; }).join(', ')
              : 'Something went wrong. Please try again or call us directly.';
            status.textContent = message;
            status.className = 'form-status error';
          });
        }
      })
      .catch(function () {
        status.textContent = 'Something went wrong. Please check your connection and try again.';
        status.className = 'form-status error';
      })
      .finally(function () {
        submitButton.disabled = false;
      });
  });
})();
