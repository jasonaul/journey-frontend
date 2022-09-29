Include:
A personal calendar for tracking all events you are interested in attending.

General App Idea/Purpose

A personal database for users to add events they are interested in attending. These events can include conventions, work events, concerts - anything that has a specific date, time, and location. The goal of the app is to provide users with a reference for activities they had previously been interested in.

Models including field names and their datatypes

Event Name (String)
Event Type (String)
Location Name (String)
Date (Number)
Time (Number)
Price / Base-Price (Number)
Link (String)
Personal Comments (String)
Has Event Occurred (Boolean - stretch goal)
USER MODEL

Username (String)
Email address (String)
Password (String)
A list of routes (e.g. POST /pins/ allows users to post a picture of a pin)

GET /events/ allows users to view a list of the events they have added
GET /events/new allows users to add a new event to their personal calendar / database
POST /events/ adds a new event to the database, then redirects to the user's calendar
GET /events/:id shows info about one specific event
GET /events/:id/edit shows users a form to edit an entry/event
PUT /references/:id Allows a user to edit an event
DELETE /events/:id deletes a specific event, then redirects back to user's calendar
Wireframes
Wireframes with basic page layouts

Copy and paste or drag and drop your images here.

Screen Shot 2022-09-20 at 8 34 59 PM
Screen Shot 2022-09-20 at 8 35 06 PM
Screen Shot 2022-09-20 at 8 35 18 PM
Screen Shot 2022-09-20 at 8 35 26 PM
Screen Shot 2022-09-20 at 8 35 34 PM

User Stories
User stories detailing app functionality

Add user stories following the As a [type of user], I want [what the user wants], so that [what it helps accomplish] format.

As a user, I want to be able to add events that I am interested in attending in the future. This means that, as a user, I can add in an event name, its location, date and time, and price (if there is a cost). As a user, I want to be able to see the events ordered chronologically.

As a user, I want to be able to explore my events library to make changes and add comments/notes (stretch). I want to be able to delete events, edit events, or see events I have previously added that have already transpired (stretch).

MVP Goals
As a user, I want to be able to create an account
As a user, I want to be able to explore my calendar of events
As a user, I want to add comments to events I have added to my calendar
As a user, I want to be able to edit entires, either to add information or change information
As a user, I want to be able to delete any events from my calendar
Stretch Goals
As a user, I want to be able to use Google's SSO to create an account
As a user, I want to be able to see the location of the event on Google Maps
As a user, I want to see all past events, and see events that I have attended
As a user, I want to be able to sort events by type