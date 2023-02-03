// Creating and selecting elements
const page = document.querySelector('#root');
const booksContainer = document.createElement('div');
const adminHeader = document.createElement('h2');
adminHeader.classList.add('admin-header');
booksContainer.classList.add('admin-books-container');
adminHeader.textContent = 'Admin Portal';
booksContainer.append(adminHeader);
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
                <label for="book${book.id}">
                    <h5 class="admin-book__title">${book.title}</h5>
                </label>
                <!-- Admin book input -->
                <input type="number" value="${book.quantity}" class="admin-book__input" id="book${book.id}" />
                <!-- Admin book button -->
                <button onclick="updateBook(${book.id}, getInputQuantity(${book.id}).value)" type="submit" class="btn admin-book__btn">submit</button>
            </div>
            <!-- End of admin book -->
        `
    });
};
// Get value from input
const getInputQuantity = (id) => {
    // let bookInput = document.querySelector(`#book${book.id}`);
    return document.querySelector(`#book${id}`);
};
// Get books from api
const getBooks = async () => {
    console.log('getting books');
    // Fetch api
    let response = await fetch('http://127.0.0.1:3001/listBooks');
    // Results from api
    let books = await response.json();
    // Render books to html dom
    renderBooks(books);
};
// Update book quantity from admin portal
const updateBook = async (id, quantity) => {
    // Check it input number is a number greater than 0
    if(quantity === 0 || quantity === null || quantity === '') 
        return;
    // Fetch api
    let response = await fetch("http://localhost:3001/updateBook", {
        // Headers
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        // Body
        body: JSON.stringify({
            "id": id,
            "quantity": quantity
        })
    });
};
getBooks();