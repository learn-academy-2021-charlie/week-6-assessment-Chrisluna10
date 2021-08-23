# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: The foreign key would be part of the Animal model and the name would be called animal_id. In order to fix this, you can go into the console and add a new migration.

  Researched answer: There must be a row already existing in order to add the foreign key.



2. Which RESTful API routes must always be passed params? Why?

  Your answer: show, update, destroy must always be passed params so the developer knows which item they are modifying or showing.

  Researched answer: 
API parameters are the variable parts of a resource. They determine the type of action you want to take on the resource. Each parameter has a name, value type ad optional description. Whenever you want to build a REST API, you have to decide which parameters should be present in the API endpoint.



3. Name three rails generator commands. What is created by each?

  Your answer: rails g model, rails g resource, and rails g migration

  Researched answer: rails g model creates a new model with specific keys, rails g resource creates the model, migrations routes and controllers, and rails g migration runs a migration for controllers.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students          INDEX shows all items from a table

method="POST"   /students         CREATE allows for new items to be made with certain params

method="GET"    /students/new     NEW creates a new item in a table

method="GET"    /students/2       SHOW returns a specific item that is called

method="GET"    /students/edit/2    EDIT allows for a certain id to have changes made

method="PATCH"  /students/2         UPDATE allows for the edit to happen

method="DELETE" /students/2       DESTROY deletes a specific item in a table



5. As a developer, you want to make an application that will help you manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a developer, I can create a person model in the database with name and address.
As a user, I can see the different people in the database. 
As a user, I can add new people to the database.
As a user, I can edit people in the database.
As a user, I can delete people from the database.
As a user, I can add new people to the database.
As a user, I can add people to a list of favorites.
As a user, I can delte people from the list of favorites.
As a user, I can add a new phone number to the database.
As a user, I can delete a phone number from the database. 
