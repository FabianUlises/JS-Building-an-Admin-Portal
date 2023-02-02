const getBooks = async () => {
    let response = await fetch('http://127.0.0.1:3001/listBooks');
    let books = await response.json();
}