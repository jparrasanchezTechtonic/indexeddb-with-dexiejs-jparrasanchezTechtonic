let initialTable = true;

async function populateTableUI(newBookTitle) {
  // debugger;
    const tBody = document.querySelector('tbody');
    const columns = ['cover', 'title', 'author', 'numberOfPages', 'synopsis', 'publishDate', 'rating'];
    tBody.innerHTML = '';

  if (initialTable) {
    let allBooks = await db.books.where('numberOfPages').aboveOrEqual(0).toArray()

    for (let i = allBooks.length - 1; i >= 0; i--) {
      const row = document.createElement('tr');

      for (let j = 0; j < columns.length; j++) {
        var td = document.createElement('td');
        var value = allBooks[i][columns[j]];
        td.innerText = value ? value : null;
        row.append(td);
      }

      // creates a delete button with no functionality
      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'delete book';
      deleteBtn.addEventListener('click', function(){
        deleteBook(allBooks[i].title);
      })
      row.append(deleteBtn)
      // row.append(updateBtn);
      tBody.append(row);
      // deleteBtn.onclick = function(){
        // deleteBook(row.cells[1].innerText)
        // let rowInd = row.rowIndex;
        // let rowkey =
        // deleteBook(row);
      };
      // tBody.append(row);
      // creates a update button with no functionality

      // var td1 = document.createElement('td');
      // row.append(td1);
      // const updateBtn = document.createElement('button');
      // updateBtn.innerText = 'update book';
      // updateBtn.onclick = function(){
      //   editBook();
      // };



    }}

  // } else {
  //   let newBook = await db.books.where('title').equals(newBookTitle).toArray()
  //   const row = document.createElement('tr');
  //
  //   for (let j = 0; j < columns.length; j++) {
  //     var td = document.createElement('td');
  //     var value = newBook[0][columns[j]]
  //     td.innerText = value ? value : null;
  //     row.append(td);
  //   }
  //
  //   // creates a delete button with no functionality
  //   const deleteBtn = document.createElement('button');
  //   deleteBtn.innerText = 'delete book';
  //   deleteBtn.onclick = function(){
  //     deleteBook(row.cells[1].innerText)};
  //   row.append(deleteBtn);
  //   tBody.append(row);
  //
  //   // creates a update button with no functionality
  //   const updateBtn = document.createElement('button');
  //   updateBtn.innerText = 'update book';
  //   updateBtn.onclick = function(){
  //     editBook();
  //   };
  //   // row.append(updateBtn)
  //
  //   // tBody.append(row);
  //
  // }
  // initialTable = false;
// }
