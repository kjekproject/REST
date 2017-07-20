$(document).ready(function() {
    var addBookForm = $('#add-book-form');
    
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
                        + '<h2>' + singleBookData.title + '</h2>'
                        + '<span><a class="btn btn-default" href="./api/src/books.php?" role="button">More</a></span>'
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
