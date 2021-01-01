const mainRouter = require("../server");
const { addBook, getBooks, getBookById } = require("../Models/books");
mainRouter.get("/books", addBook);
mainRouter.post("/books", getBooks);
mainRouter.get("/books/:book_id",getBookById)
