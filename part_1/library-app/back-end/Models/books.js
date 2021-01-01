const connection = require("../db");

const addBook = () => {
  connection.query(
    "INSERT INTO book(title , author, pages, publisher, published_at) VALUES (?,?,?,?)",
    data,
    (err, results) => {
      console.log(results);
    }
  );
};
const getBooks = () => {
    connection.query("SELECT * FROM book", (err, results) => {
        console.log(results);
    })
}
const getBookById = () => {
    const data = req.params
    connection.query("SELECT * FROM book WHERE id= ?", data, (err, results) => {
        console.log(results)
    })
}
module.exports = {addBook, getBooks, getBookById};
