function validateForm() {
  valid = validateName();
  valid = validateEmail() && valid;
  valid = validatePhone() && valid;
  valid = validateLandLine() && valid;
  valid = validateUrl() && valid;
  valid = validateAddress() && valid;
  if (valid) {
    alert('Request Success');
    return true;
  } else {
    alert('Request Failed');
    return false;
  }
}

function validateName() {
  var name = document.getElementById('name').value;
  if (name.length == 0) {
    document.getElementById('nameError').innerHTML = "&nbsp;Name is required";
    return false;
  } else {
    document.getElementById('nameError').innerHTML = '*';
    return true;
  }
}

function validateEmail() {
  var mail = document.getElementById('email').value;
  // regular expression for valid email id
  var mailPattern = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$");
  if (mail.length == 0) {
    document.getElementById('mailError').innerHTML = '&nbsp;Email is required';
    return false;
  } else if (mailPattern.test(mail)) {
    document.getElementById('mailError').innerHTML = '*';
    return true;
  } else {
    document.getElementById('mailError').innerHTML = "&nbsp;Incorrect mail id";
    return false;
  }
}

function validatePhone() {
  var phone = document.getElementById('phone').value;
  var phonePattern = new RegExp("^\d{10}$");
  if (phone.length == 0) {
    document.getElementById('phoneError').innerHTML = '&nbsp;Phone number is required';
    return false;
  } else if (phonePattern.test(phone)) {
    document.getElementById('phoneError').innerHTML = '*';
    return true;
  } else {
    document.getElementById('phoneError').innerHTML = '&nbsp;Please enter valid phone number';
    return false;
  }
}

function validateLandLine() {
  var landLine = document.getElementById('landLine').value;
  var landLinePattern = new RegExp("^\d{8,12}$");
  if (landLine.length == 0) {
    document.getElementById('landLineError').innerHTML = '&nbsp;Landline number is required';
    return false;
  } else if (landLinePattern.test(landLine)) {
    document.getElementById('landLineError').innerHTML = '*';
    return true;
  } else {
    document.getElementById('landLineError').innerHTML = '&nbsp;Please enter valid landline number';
    return false;
  }
}

function validateUrl() {
  var url = document.getElementById('website').value;
  var urlPattern = new RegExp("^((http|https)://)(www.)?" + "[a-zA-Z0-9@:%._\\+~#?&//=]" + "{2,256}\\.[a-z]" + "{2,6}\\b([-a-zA-Z0-9@:%" + "._\\+~#?&//=]*)$");
  if (url.length == 0) {
    document.getElementById('websiteError').innerHTML = '&nbsp;Website address is required';
    return false;
  } else if (urlPattern.test(url)) {
    document.getElementById('websiteError').innerHTML = '*';
    return true;
  } else {
    document.getElementById('websiteError').innerHTML = 'Please enter valid url';
    return false;
  }
}

function validateAddress() {
  var address = document.getElementById('address').value;
  if (address.length == 0) {
    document.getElementById('addressError').innerHTML = '&nbsp;Address is required';
    return false;
  } else {
    return true;
  }
}
