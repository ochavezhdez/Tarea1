
var books = [
	{
		id: '101',
		title: 'Código Da Vinci',
		author: 'Dan Brown',
		year: 2010,
		genre: 'Novela'
	},
	{
		id:'102',
		title: 'Relatos de un viejo indecente',
		author: 'Charles Bukowski',
		year: 2010,
		genre: 'Relatos'
	}
];

exports.getBooks = function(req, res, next) {
	res.status(200).jsonp(books);
};

exports.addBook = function(req, res, next) {
	books.push(req.body);
	res.status(200).jsonp(books);
};

exports.getBookById = function(req, res, next) {
	for(var i in books) {
		if (books[i].id == req.params.id) {
			res.status(200).jsonp(books[i]);
			return;
		}
	}
	res.status(404).jsonp({
		title: 'Error',
		text: 'Book not fount.'
	});
};

exports.updateBookById = function(req, res, next) {
	for(var i in books) {
		if (books[i].id == req.params.id) {
			books[i].title = req.body.title;
			books[i].author = req.body.author;
			res.status(200).jsonp(books);
			return;
		}
	}
	res.status(404).jsonp({
		title: 'Error',
		text: 'Book not fount.'
	});
};

exports.deleteBookById = function(req, res, next) {
	for(var i in books) {
		if (books[i].id == req.params.id) {
			books.splice(i, 1);
			res.status(200).jsonp(books);
			return;
		}
	}
	res.status(404).jsonp({
		title: 'Error',
		text: 'Book not fount.'
	});
};

exports.getAuthors = function(req, res, next) {
	var authors = [];
	for (var i in books) {
		authors.push(books[i].author);
	}
	res.status(200).jsonp(authors);
};

exports.getBooksByAuthor = function(req, res, next) {
	var booksRes = [];
	for(var i in books) {
		if (books[i].author.toLowerCase() == req.params.nombre.toLowerCase()) {
			booksRes.push(books[i]);
		}
	}
	if (booksRes.length == 0) {
		res.status(404).jsonp({
			title: 'Error',
			text: 'Author not fount.'
		});
	} else {
		res.status(200).jsonp(booksRes);
	}
};

exports.updateAuthor = function(req, res, next) {
	var booksRes = [];
	for(var i in books) {
		if (books[i].author.toLowerCase() == req.params.nombre.toLowerCase()) {
			books[i].author = req.body.author;
			booksRes.push(books[i]);
		}
	}
	if (booksRes.length == 0) {
		res.status(404).jsonp({
			title: 'Error',
			text: 'Author not fount.'
		});
	} else {
		res.status(200).jsonp(booksRes);
	}
};

exports.deleteBookByAuthor = function(req, res, next) {
	var booksRes = [];
	for(var i in books) {
		if (books[i].author.toLowerCase() == req.params.nombre.toLowerCase()) {
			booksRes.push(books[i]);
			books.splice(i, 1);
		}
	}
	if (booksRes.length == 0) {
		res.status(404).jsonp({
			title: 'Error',
			text: 'Author not fount.'
		});
	} else {
		res.status(200).jsonp(booksRes);
	}
};
