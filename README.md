# MyTransactions

## To install the application

You should run in the root directory "npm run install"

## To run the application

You should run in the root directory "npm run start"

### Application Decisions

About Architecture: In the front end I used an MVP (Model-View-Presenter) mixed up with Clean Architecture(<https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html>) to have a scalable and reusable front end (You can re-use everything excepts the views if you want to change react for react native, vue, backbone, have a console interface, etc...) and it's super easy to test.
By the way, didn't have the time to test the front, but the backend is fully tested.

In the Backend i used Clean Architecture as well.
