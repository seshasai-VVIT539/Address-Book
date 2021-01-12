using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ContactsDataAccess;

namespace AddressBook.Controllers
{
    public class ContactsController : ApiController
    {
        public IEnumerable<Contact> Get()
        {
            using (AddressBookEntities entities = new AddressBookEntities())
            {
                return entities.Contacts.ToList();
            }
        }
        public HttpResponseMessage Get(int id)
        {
            using(AddressBookEntities entities=new AddressBookEntities())
            {
                var contact = entities.Contacts.FirstOrDefault(e => e.ID == id);
                if (contact != null)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, contact);
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Contact with id " + id + " not found");
                }
            }
        }
        public HttpResponseMessage Post([FromBody] Contact contact)
        {
            try
            {
                if(!ModelState.IsValid)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
                using (AddressBookEntities entities = new AddressBookEntities())
                {
                    entities.Contacts.Add(contact);
                    entities.SaveChanges();
                    var message = Request.CreateResponse(HttpStatusCode.Created, contact);
                    message.Headers.Location = new Uri(Request.RequestUri + contact.ID.ToString());
                    return message;
                }
            }
            catch(Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
        public HttpResponseMessage Delete(int id)
        {
            try
            {
                using (AddressBookEntities entities = new AddressBookEntities())
                {
                    var contact = entities.Contacts.FirstOrDefault(e => e.ID == id);
                    if (contact == null)
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Contact with id " + id + " not found");
                    }
                    else
                    {
                        entities.Contacts.Remove(contact);
                        entities.SaveChanges();
                        return Request.CreateResponse(HttpStatusCode.OK);
                    }
                }
            }catch(Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
        public HttpResponseMessage Put(int id, [FromBody] Contact updatedcontact)
        {
            try
            {
                using (AddressBookEntities entities = new AddressBookEntities())
                {
                    var entity = entities.Contacts.FirstOrDefault(e => e.ID == id);
                    if (entity == null)
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Contact with id " + id + " not found");
                    }
                    else
                    {
                        if (!ModelState.IsValid)
                        {
                            return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                        }
                        else
                        {
                            entity.Name = updatedcontact.Name;
                            entity.Email = updatedcontact.Email;
                            entity.Phone = updatedcontact.Phone;
                            entity.Landline = updatedcontact.Landline;
                            entity.Url = updatedcontact.Url;
                            entity.Address = updatedcontact.Address;
                            entities.SaveChanges();
                            return Request.CreateResponse(HttpStatusCode.OK);
                        }
                    }
                }
            }catch(Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}
