# Maker's BnB

## Set Up
1) git clone repo
2) Install:
* `npm install node`
* `npm install express --s`
3) Run on localhost (default port 5000)
* `npm run-script build`
* `node server.js`
* Visit localhost:5000
4) COLLABORATORS ONLY:
* push changes to github master: `git origin push master`
* Run on prod:
Push new changes: `git heroku push master`
Visit: https://babyhipposmakersbnb.herokuapp.com

## User Stories
### MVP
```
As a USER,
So that I can use MakersBnB services,
I want to be able to create an account with a login and password.
```
```
As a HOST,
So that I can list a property,
I want to list a new space.
```
```
As a HOST,
So that I can list all my properties,
I want to be able to create multiple spaces.
```
```
As a GUEST,
So I can view all listings,
I want to be able to view brief descriptions of all properties listed by all hosts.
```
### Extras
```
As a HOST,
So I can advertise my property,
I want to include the property name, description and the price per night in the listing.
```
```
As a GUEST,
So I can view the details of a listing,
I want to see a separate detailed page of the property that includes name, description and the price per night.
```
```
As a HOST,
So I can control availability  of my property,
I want to be able to specify the dates where the property is available.
```
```
As a GUEST,
So I can rent a property of my choice,
I want to be able to request a space for one night.
```
```
As a HOST,
So I can approve the guest's rental,
I want to be able to view the guest's request and view their information (and ratings) before confirming or declining their booking.
```
```
As both a HOST and a GUEST,
So I don't get booking conflicts,
I want spaces that are already booked for a particular date to show as unavailable and thus cannot be booked more than once.
```
```
As a HOST ,
So maximise the chance of my property being booked,
I want to keep the space available until a GUEST has requested to book and I have confirmed the booking.
```
