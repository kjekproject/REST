$(document).ready(function() {
    var addBookForm = $('#add-book-form');
    var showAddBookFormBtn = $('#show-add-book-form');
    var bookList = $('#book-list');
    
    loadBookList();  
    
    showAddBookFormBtn.on('click', function showAddBookForm(event) {
        addBookForm[0].reset();
        addBookForm.toggle(400);
    });
    
    addBookForm.on('submit', function addBook(event) {
        var addBookFormData = $(this).serialize();
        
        event.preventDefault();
        
        $.ajax({
            url: "./api/books.php",
            data: addBookFormData,
            type: 'POST',
            dataType: 'json',
        })
        .done(function() {
            loadBookList();
            addBookForm[0].reset();
            console.log(addBook.name, 'resolved successfully.');
        })
        .fail(function() {
            console.log(addBook.name, 'failed!');        
        });
    });
    
    bookList.on('click', '.delete-button', function deleteBook(event) {
        var bookToDeleteId = $(event.target).data('id');
        
        $.ajax({
            url: './api/books.php',
            data: 'id=' + bookToDeleteId,
            type: 'DELETE',
        })
        .done(function() {
            loadBookList();
            console.log(deleteBook.name, 'resolved successfully');
        })
        .fail(function() {
            console.log(deleteBook.name, 'failed!');
        });
    });

    bookList.on('click', '.edit-button', function showUpdateBookForm(event) {
        var bookId = $(event.target).data('id');
        
        var form = bookList.find('#update-book-form');
        var formId = form.data('id');
        
        if(bookId == formId) {
            form.hide('slow', function(){ form.remove()});
        } else {
            form.hide('slow', function(){ form.remove()});
        $.ajax({
            url: './api/books.php',
            data: {id: bookId},
            type: 'GET',
            dataType: "json",
        })
        .done(function(result) {   
            var singleBookData = result[0];
            var editionForm = 
                    '<form id="update-book-form" onsubmit="return false;" data-id="' + singleBookData.id + '">'
                        + '<div class="form-group">'
                            + '<label for="titleInput">Title</label>'
                            + '<input name="title" type="text" class="form-control" id="titleInput" value="'+ singleBookData.title +'">'
                        + '</div>'
                        + '<div class="form-group">'
                            + '<label for="authorInput">Author</label>'
                            + '<input name="author" type="text" class="form-control" id="authorInput" value="' + singleBookData.author + '">'
                        + '</div>'
                        + '<div class="form-group">'
                            + '<label for="descriptionInput">Description</label>'
                            + '<textarea name="description" class="form-control" rows="1" id="descriptionInput">' + singleBookData.description + '</textarea>'
                        + '</div>'
                        + '<button type="submit" class="btn btn-primary update-button">Save</button>'
                    + '</form>';
            $(event.target).parent().append(editionForm);
        });
    }
    });
    
    $('#book-list').on('submit', '#update-book-form', function updateBook(event) {
        var updateBookFormData = $(this).serialize();
        var updateBookId = $(event.target).data('id');
        
        event.preventDefault();
      
        $.ajax({
            url: './api/books.php',
            data: updateBookFormData + '&id=' + updateBookId,
            type: 'PUT',
            dataType: 'json',
        })
        .done(function() {
            loadBookList();
            console.log(updateBook.name, 'resolved successfully.');
        })
        .fail(function() {
            console.log(updateBook.name, 'failed!'); 
        });
    });
});


function loadBookList() {
    $('#book-list').empty();
    $('#add-book-form').hide();
    
    $.ajax({
        url: "./api/books.php",
        type: "GET",
        dataType: "json",
    })
    .done(function(result) {
        if(result.length > 0) {
            for (var i = 0; i < result.length; i++) {
                var singleBookData = result[i];
                var singleBookTemplate = 
                    '<div class="col-xs-6 col-lg-4">'
                        + '<h2>' + singleBookData.author + '</h2>'
                        + '<h3>' + singleBookData.title + '</h3>'
                        + '<p>' + singleBookData.description + '</p>'
                        + '<button class="btn btn-primary edit-button" data-id="' + singleBookData.id +'">Edit</button>'
                        + '<button class="btn btn-danger delete-button" data-id="' + singleBookData.id +'">Delete</button>'
                    + '</div>';
                    $('#book-list').append(singleBookTemplate);
            }
            console.log(loadBookList.name, 'resolved successfully');
        }
    })
        .fail(function(){
            console.log(loadBookList.name, 'failed');
    })
        .always(function(){
            console.log('The request is completed!');    
    });  
}