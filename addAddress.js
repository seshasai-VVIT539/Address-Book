$(document).ready(function() {
  // var contacts;
  function Contact(name, email, phone, landLine, url, address) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.landLine = landLine;
    this.url = url;
    this.address = address;
  }

  function init() {
    // var contacts=localStorage.getItem("contacts");
    // console.log(localStorage.getItem("contacts"));
    console.log(contacts);
    if(!contacts){
      contacts=new Array();
       contacts.push(new Contact("sai", "sa@g.com", "1111111111", "111111111", "https://www.geeksforgeeks.org/", ""));
      // contacts.push(new Contact("test", "test@g.com", "1111122211", "211222221", "https://www.testing.org/", ""));
    }
    console.log(contacts);
    // localStorage.setItem("contacts",contacts);
  }
  console.log(contacts);
  init();
});
function addContact(){
    var name = document.getElementById('name').value;
    var mail = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var landLine = document.getElementById('landLine').value;
    var url = document.getElementById('website').value;
    var address = document.getElementById('address').value;
    if(validateForm()){
      if(!contacts){
        contacts=new Array();
      }
      contacts.push(new Contact(name,mail,phone,landLine,url,address));
      console.log(contacts);
    }
}
