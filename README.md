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