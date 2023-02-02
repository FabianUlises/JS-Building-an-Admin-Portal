const page = document.querySelector('#root');
const booksContainer = document.createElement('div');
booksContainer.classList.add('admin-books-container');
page.append(booksContainer);
// Get books from api
const getBooks = async () => {
    let response = await fetch('http://127.0.0.1:3001/listBooks');
    let books = await response.json();
}

// Render books from api
const renderBooks = (books) => {
    books.forEach((book) => {
    
    });
};