// Creating and selecting elements
const page = document.querySelector('#root');
const booksContainer = document.createElement('div');
booksContainer.classList.add('admin-books-container');
page.append(booksContainer);

// Render books from api
const renderBooks = (books) => {
    // Looping through each book
    books.forEach((book) => {
        // Adding html content to bookscontainer with book info
        booksContainer.innerHTML += `
            <!-- Start of admin book -->
            <div class="admin-book">
                <!-- Admin book title -->
                <h5 class="admin-book__title">${book.title}</h5>
                <!-- Admin book input -->
                <input type="text" value="${book.quantity}" class="admin-book__input" />
                <!-- Admin book button -->
                <button type="submit" class="btn admin-book__btn">submit</button>
            </div>
            <!-- End of admin book -->
        `
    });
};

// Get books from api
const getBooks = async () => {
    // Fetch api
    let response = await fetch('http://127.0.0.1:3001/listBooks');
    // Results from api
    let books = await response.json();
    // Render books to html dom
    renderBooks(books);
};
getBooks();