function onDatabaseReady() {
    populateTableUI() // DO NOT TOUCH THIS LINE until step #4

    console.log(db);
    // DexieJS docs: https://dexie.org/
}


function deleteBook(event) {

    // 1: YOUR CODE HERE
    // alert(event) // to know
    // console.log(event.parentNode.parentNode.deleteRow(event.rowIndex)); // este es el propio
    // event.deleteRow(0);
    // console.log(JSON.stringify(event));
    // let result = JSON.stringify(event);
    // var deleteBook = db.books.delete(result);
// console.log(event.cells[1].innerText);
// let result = JSON.stringify(event.cells[1].innerText);
    // console.log(result);
    var deleteBook = db.books.delete(event);
    // console.log(event.deleteCell(event.rowIndex));
    deleteBook.then(function(resolved){
      // document.getElementById(event).remove();
      // event.deleteRow(event.rowIndex)
      // console.log(event);
      // document.getElementById('table table-striped').deleteCell(1);
      // console.log(event.parentNode.parentNode.deleteRow(event.rowIndex));
      // event.parentNode.parentNode.deleteRow(event.rowIndex)

      console.log(resolved);
    }).catch(function(rejected){
      console.log(rejected);
    })
    populateTableUI();
    // onDatabaseReady();
    // console.log(deleteBook);
}


function addBook(event) {

    // 2: YOUR CODE HERE

  var form = document.querySelector('form');
  // alert(form.elements.inputTitle.value);
  // alert(form.elements.inputAuthor.value);

  const obj = {
    author: form.elements.inputAuthor.value,
    numberOfPages: parseInt(form.elements.inputPages.value),
    publishDate: form.elements.inputDate.value,
    rating: parseInt(form.elements.inputRating.value),
    synopsis: form.elements.inputSynopsis.value,
    title: form.elements.inputTitle.value
  };


  // alert(form.elements.inputTitle.value);
    // alert(document.getElementById('inputTitle').value);
    var addBook = db.books.put(obj);
    addBook.then(function(resolved){
      populateTableUI();
    });
    addBook.catch(function(rejected){
      console.log(rejected);
    })

    // Hint: Once you've added the book to your database, call populateTableUI with the added book's title
    // Check out the Table.put() method and what it returns at: https://dexie.org/docs/Table/Table.put()

}


function editBook(event) {

    // 3. YOUR CODE HERE
    alert('editBook');

    // var editBook = db.books.update();
}


// ************ 4. (BONUS) Comment out line 67 in ../index.HTML and write your own 'populateTableUI' function in app.js ************


// Now that you’ve cloned your project lets start by testing our code. Let's start live
//server and open up our project in the browser. Open up your console and you should see
//some logs outputting book objects. These object are predefined in books.json and added to
//our database called library_database in indexedDB. We can also navigate to the
//application tab in the chrome console (storage in firefox) and take a look at the indexedDB
//storage We created this for you in indexedDB.js if you feel inclined to take a look.

// We've populated the table so the UI reflects what's currently in our local
// library_database in indexedDB.  We've logged the database above so you can see exactly
// what you're working with


// 1.) Now add functionality to remove a row  which will need remove the object from the books store in
//indexedDB database as well as the UI once the delete operation is complete. This will take some
//effort on the UI. Use the title as your UID (Unique identifier) which you can find in the application console
//in Chrome (storage in Firefox).

// 2.) From here we want to be able to add a book. Hook up the form below the table to add a
//book to the books store in indexedDB and auto-update the table without refreshing the page.
//Hint: This add operation is on the front page of DexieJS.  Both is and Table.put() can be
// used to add this book.

// 3.) Now make each table row editable and update the database when the edit is complete. This will
//take a lot of effort from the html to the js. Use the title as your UID (Unique identifier)
//which you can find in the application console
