var contacts = new Array();
var currentViewingContact = -1;
var isContactOpen = false;

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
    if (isContactOpen) {
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
    var allContacts=document.getElementsByClassName("contact");
    if(currentViewingContact!=-1){
    allContacts[currentViewingContact].classList.remove("present");
    }
    currentViewingContact = -1
  });

  $("#add").click(function() {
    var allContacts=document.getElementsByClassName("contact");
    if(currentViewingContact!=-1){
    allContacts[currentViewingContact].classList.remove("present");
    }
    if (isContactOpen) {
      alert("contact not updated");
    }
    clearForm();
    currentViewingContact = -1;
    isContactOpen=false;
    hideAll();
    toggleForm();
  });

  $(document).on('click', ".contact", function() {
    hideAll();
    toggleDetails();
    var clicked = parseInt($(this).attr("id"));
    var allContacts=document.getElementsByClassName("contact");
    if(currentViewingContact!=-1){
    allContacts[currentViewingContact].classList.remove("present");
    }
    currentViewingContact = clicked;
    allContacts[currentViewingContact].classList.add("present");
    renderContact(currentViewingContact);
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
  isContactOpen = false;
  renderContact(currentViewingContact);
}

function showEditForm() {
  console.log('edit contact' + currentViewingContact);
  isContactOpen = true;
  hideAll();
  toggleForm();
  $(".form").find(".name").val(contacts[currentViewingContact].name);
  $(".form").find('.email').val(contacts[currentViewingContact].email);
  $(".form").find('.phone').val(contacts[currentViewingContact].phone);
  $(".form").find('.landLine').val(contacts[currentViewingContact].landLine);
  $(".form").find('.website').val(contacts[currentViewingContact].url);
  $(".form").find('.address').val(contacts[currentViewingContact].address);
}

function deleteContact() {
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
  if (isContactOpen) {
    hideAll();
    toggleDetails();
    renderContact(currentViewingContact);
    clearForm();
    isContactOpen=false;
  } else {
    hideAll();
  }
}

function renderContact(index) {
  var temp;
  $(".contact-details").find(".name").text(contacts[index].name);
  $(".contact-details").find(".email").text(contacts[index].email);
  $(".contact-details").find(".phone").text(contacts[index].phone);
  $(".contact-details").find(".landLine").text(contacts[index].landLine);
  $(".contact-details").find(".website").text(contacts[index].url);
  temp=contacts[index].address;
  temp=temp.replace("\n","<br>");
  $(".contact-details").find(".address").html(temp);
}

function hideAll() {
  $(".form-container").css("visibility", "hidden");
  $(".contact-details").css("visibility", "hidden");
}

function toggleDetails() {
  $(".contact-details").css("visibility", "visible");
  $(".form-container").css("position", "absolute").css("margin-left", "20%").css("visibility", "hidden");
}

function toggleForm() {
  $(".form-container").css("visibility", "visible");
  $(".contact-details").css("position", "absolute").css("margin-left", "20%").css("visibility", "hidden");
}
