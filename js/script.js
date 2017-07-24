$(document).ready(function() {
    var addBookForm = $('#add-book-form');
    //var deleteButton = $('#delete-button');
    
    loadBookList();  
    
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
    
    $('#book-list').on('click', '.delete-button', function deleteBook(event) {
        console.log('jestem tu');
        var bookToDeleteId = $(event.target).data('id');
        
        event.preventDefault();
        
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
});

function loadBookList() {
    $('#book-list').empty();
    
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
                        + '<a class="btn btn-primary" role="button">Edit</a>'
                        + '<a class="btn btn-danger delete-button" data-id="' + singleBookData.id +'" role="button">Delete</a>'
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
