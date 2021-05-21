## TODO QUEENS API
- A simple api for our restaurant reviews app
- Application programming interface(API)

#### Functionality
- fetchReviews => GET
- fetchSingleReview => GET /:id
- addReview  => POST
- makeChanges to a review => PUT
- deleteReview = DELETE


Request methods:
- POST => to create something and send it to the server
- GET => to receive somwething from the server
- PUT => to update or make changes to something already existing on the server
- DELELTE => to remove something from the server

#### Expressjs  Architecture (MVC)
- express operates on an mvc architecture..
- MVC(Model, View, Controller)
- Model => the data storage
- Views handle requests from clients(browser, mobile app, standalone desktop apps, tv boxes, watches) === Devices accessing the API
- Controller handles the business logic (full brains of the api). When a request is sent, the controller calls on the model to do something.
  A controller ends up being a middle man between the view and the model


  CRUD (operations) and HTTP request equivalents 
  - C => Create to create or POST something
  - R => READ , GET something
  - U => Update something, (PUT, PATCH)
  - D => Delete , DELETE something from the server.


  #### How to update
  - Find the item
  - Make the change
  - Save the change if the item exists
  - If the item does'nt exist, notify the user

  ## how to delete
  - check if there are items
  - find a specific item
  - delete the item 
  - show a message or return the that doesn't have that deleted item


  ## traditional databases (sql datatbases)
  - always have  a pre-defined structure (how data is supposed to look)
  {
    primary key id int,
    fullName char defined_length
  }

  ## nosql  databases
  - store data without a pre-defined structure
  {
    fullName: 'sdsdsdd',
    age: 34,
    address: {
      poBox:2324
    }
  }
  {
    fullName: 'sdsdsdd',
    age: 34,
    address: {
    province: 'central'
    }
  }

  [read more](https://docs.mongodb.com/)