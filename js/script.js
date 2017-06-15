$(function() {
    loadBookList();        

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
                        + '<p></p>'
                        + '<span><a class="btn btn-default" href="#" role="button">View details</a></span>'
                        + '<span><a class="btn btn-default" href="#" role="button">Delete</a></span>'
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
