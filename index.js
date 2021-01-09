var contacts = new Array();
var currentViewingContact = -1;
var isChangingContact = false;

function Contact(name, email, phone, landLine, url, address) {
  this.name = name;
  this.email = email;
  this.phone = phone;
  this.landLine = landLine;
  this.url = url;
  this.address = address;
}

function addContact() {
  if (validateForm()) {
    hideAll();
    if (isChangingContact) {
      console.log("inside if in addContact");
      updateContact();
      toggleDetails();
      renderContact(currentViewingContact);
    } else {
      var name = $(".form").find('.name').val();
      var mail = $(".form").find('.email').val();
      var phone = $(".form").find('.phone').val();
      var landLine = $(".form").find('.landLine').val();
      var url = $(".form").find('.website').val();
      var address = $(".form").find('.address').val();
      contacts.push(new Contact(name, mail, phone, landLine, url, address));
    }
    clearForm();
    renderAllContacts();
  }
}

function clearForm() {
  $(".form").find('.name').val("");
  $(".form").find('.email').val("");
  $(".form").find('.phone').val("");
  $(".form").find('.landLine').val("");
  $(".form").find('.website').val("");
  $(".form").find('.address').val("");
}

function renderAllContacts() {
  var counter;
  $(".contacts").html("");
  for (counter = 0; counter < contacts.length; counter += 1) {
    var newContact = "<div class='contact' id='" + counter + "'>" + contacts[counter].name + "</div>";
    $(".contacts").append(newContact);
  }
}

$(document).ready(function() {
  function init() {
    contacts.push(new Contact("sai", "ses@g.com", "4444444444", "5555555", "www.asdf.com", "asdf"));
    contacts.push(new Contact("seshu", "kumar@as.com", "555", "634", "www.afasdf.com", "rga"));
    renderAllContacts();
    hideAll();
  }

  $("#home").click(function() {
    hideAll();
    renderAllContacts();
    currentViewingContact = -1
  });

  $("#add").click(function() {
    if (isChangingContact) {
      alert("contact not updated");
    }
    currentViewingContact = -1;
    hideAll();
    toggleForm();
  });

  $(document).on('click', ".contact", function() {
    hideAll();
    toggleDetails();
    var clicked = parseInt($(this).attr("id"));
    currentViewingContact = clicked;
    renderContact(currentViewingContact)
  });

  init();
});

function updateContact() {
  console.log("updating" + currentViewingContact);
  var name = $(".form").find('.name').val();
  var mail = $(".form").find('.email').val();
  var phone = $(".form").find('.phone').val();
  var landLine = $(".form").find('.landLine').val();
  var url = $(".form").find('.website').val();
  var address = $(".form").find('.address').val();
  contacts[currentViewingContact] = new Contact(name, mail, phone, landLine, url, address);
  isChangingContact = false;
  renderContact(currentViewingContact);
}

function editContact() {
  console.log('edit contact' + currentViewingContact);
  isChangingContact = true;
  hideAll();
  toggleForm();
  $(".form").find(".name").val(contacts[currentViewingContact].name);
  $(".form").find('.email').val(contacts[currentViewingContact].email);
  $(".form").find('.phone').val(contacts[currentViewingContact].phone);
  $(".form").find('.landLine').val(contacts[currentViewingContact].landLine);
  $(".form").find('.website').val(contacts[currentViewingContact].url);
  $(".form").find('.address').val(contacts[currentViewingContact].address);
}

function deleteConact() {
  if (currentViewingContact == -1) {
    alert("Please select a contact to delete");
  } else if (confirm("Are you sure to delete contact?", "")) {
    console.log('deleting' + currentViewingContact);
    if (currentViewingContact != -1) {
      contacts.splice(currentViewingContact, 1);
      $("#home").trigger("click");
    }
    renderAllContacts();
    hideAll();
    console.log("after deleting" + contacts);
  }
}

function cancelAction() {
  if (isChangingContact) {
    hideAll();
    toggleDetails();
    renderContact(currentViewingContact);
    clearForm();
    isChangingContact=false;
  } else {
    hideAll();
  }
}

function renderContact(index) {
  $(".view-details").find(".name").text(contacts[index].name);
  $(".view-details").find(".email").text(contacts[index].email);
  $(".view-details").find(".phone").text(contacts[index].phone);
  $(".view-details").find(".landLine").text(contacts[index].landLine);
  $(".view-details").find(".website").text(contacts[index].url);
  $(".view-details").find(".address").text(contacts[index].address);
}

function hideAll() {
  $(".form-container").css("visibility", "hidden");
  $(".view-details").css("visibility", "hidden");
}

function toggleDetails() {
  $(".view-details").css("visibility", "visible");
  $(".form-container").css("position", "absolute").css("margin-left", "20%").css("visibility", "hidden");
}

function toggleForm() {
  $(".form-container").css("visibility", "visible");
  $(".view-details").css("position", "absolute").css("margin-left", "20%").css("visibility", "hidden");
}
