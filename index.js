var contacts=new Array();

function Contact(name, email, phone, landLine, url, address) {
  this.name = name;
  this.email = email;
  this.phone = phone;
  this.landLine = landLine;
  this.url = url;
  this.address = address;
}
contacts.push(new Contact("sai","ses@g.com","4444444444","5555555","asdf","asdf"));
contacts.push(new Contact("seshu","kumar@as.com","555","634","afasdf","rga"));
function addContact() {
  var name = document.getElementById('name').value;
  var mail = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var landLine = document.getElementById('landLine').value;
  var url = document.getElementById('website').value;
  var address = document.getElementById('address').value;
  if (validateForm()) {
    contacts.push(new Contact(name, mail, phone, landLine, url, address));
  }
  console.log(contacts);
}
$(document).ready(function() {

  function renderContacts() {
    var counter;
    for (counter = 0; counter < contacts.length; counter += 1) {
      var newContact = "<div class='contact' id='" + counter + "'>" + contacts[counter].name + "</div>";
      $(".contacts").append(newContact);
    }
  }
  $("#home").click(function() {
    var content = '<div class="contacts-pane">';
    content += '<div class="pane-heading">CONTACT</div>';
    content += '<div class="contacts">';
    content += '</div>';
    content += '</div>';
    content += '<div class="view-details">';
    content += '<div class="details-header">';
    content += '<div>';
    content += '<div class="details-heading" id="name"></div>';
    content += '</div>';
    content += '<div class="details-options">';
    content += '<button class="details-option" onclick="updateContact()"><i class="fa fa-edit"></i> Edit</button>';
    content += '<button class="details-option" onclick="deleteConact()"><i class="fa fa-trash"></i> Delete</button>';
    content += '</div>';
    content += '</div>';
    content += '<div class="contact-details">';
    //content += renderForm();
    content += '</div>';
    content += '</div>';
    $(".container").html(content);
    var parent=$("#name").parents(".tr");
    parent.html('');
    renderContacts();
  });

  $("#add").click(function() {
    var content = '';
    content += '<form class="form" action="#" onsubmit="addContact()">';
    content += '<div id="error"></div>';
    content += content += renderForm();
    content += '</div>';
    $(".container").html(content);
  });

  $(".contact").click(function(){
    console.log('b');
  });

  function renderForm() {
    var content = '';
    content += '<div class="table">';
    content += '<div class="tr">';
    content += '<div class="td">Name :</div>';
    content += '<div class="td values"><input type="text" id="name" placeholder="Enter your name"></div>';
    content += '<div id="nameError"></div>';
    content += '</div>';
    content += '<div class="tr">';
    content += '<div class="td">Email</div>';
    content += '<div class="td"><input type="text" placeholder="Enter email address" id="email"></div>';
    content += '<div id="mailError"></div>';
    content += '</div>';
    content += '<div class="tr">';
    content += '<div class="td">Phone</div>';
    content += '<div class="td"><input type="number" placeholder="Enter phone number" id="phone"></div>';
    content += '<div id="phoneError"></div>';
    content += '</div>';
    content += '<div class="tr">';
    content += '<div class="td">Landline</div>';
    content += '<div class="td"><input type="number" placeholder="Enter landline number" id="landLine"></div>';
    content += '<div id="landLineError"></div>';
    content += '</div>';
    content += '<div class="tr">';
    content += '<div class="td">Website</div>';
    content += '<div class="td"><input type="text" placeholder="Enter website address" id="website"></div>';
    content += '<div id="websiteError"></div>';
    content += '</div>';
    content += '<div class="tr">';
    content += '<div class="td">Address</div>';
    content += '<div class="td"><textarea rows="4" cols="22" id="address"></textarea></div>';
    content += '<div id="addressError"></div>';
    content += '</div>';
    content += '<div class="tr" colspan="2">';
    content += '<td> <input type="button" value="Save" onclick="addContact()"></td>';
    content += '</div>';
    content += '</div>';
    return content;
  }
});
function updateContact(){
  console.log('a');
}
$(".contact").click(function(){
  console.log('b');
});
