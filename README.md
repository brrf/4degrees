# 4degrees

Basic Contact tracking application.

Instructions:

1. Clone repository
2. run npm install
3. run npm run dev to start dev server
4. navigate to localhost:5000/home

That's it!

Basic assumptions:

1. There is only ONE table (querySelectors assume that the first table seen is the table of interest).
2. Data is not private. HTTP protocol used.
3. CSS selectors use basic elements(h1, body, form). Collisions may occur if application is built out further.
4. All the contacts are stored in an array of objects.
5. The array can be updated through an addContact and deleteContact method. There is no "updateContact" functionality.
6. The DOM updates after every alteration to the contacts array.
7. There is one API route that is used to validate new contacts to ensure both name & email are provided. Note is optional.

