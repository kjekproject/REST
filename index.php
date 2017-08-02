<?php

?>

<html>
    <head>
        <title>BookStore</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <link rel="stylesheet" href="./style/style.css"/>
    </head>
    <body>
        <nav class="navbar navbar-fixed-top navbar-inverse">
            <div class="container">
                <div class="navbar-header">
                    <a class="navbar-brand" href="index.php">BookStore</a>
                </div>
            </div>
        </nav>
        
        <div class="container myContent">
            <div class="row row-offcanvas row-offcanvas-right">
                <div class="col-xs-12 col-sm-12">
                    
                    <div class="jumbotron">
                        <h2>Add a new book</h2><br/>
                        
                        <form id="add-book-form" onsubmit="return false;">
                            <div class="form-group">
                                <label for="titleInput">Title</label>
                                <input name="title" type="text" class="form-control" id="titleInput">
                            </div>
                            <div class="form-group">
                                <label for="authorInput">Author</label>
                                <input name="author" type="text" class="form-control" id="authorInput">
                            </div>
                            <div class="form-group">
                                <label for="descriptionInput">Description</label>
                                <textarea name="description" class="form-control" rows="1" id="descriptionInput"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Add book</button>
                        </form>
                        
                        <div>
                            <button id="show-add-book-form" class="btn btn-primary">Show/hide an add book form</button>
                        </div>
                    </div>
                  
                    <div id="book-list" class="row"></div>
                </div>
            </div>
        </div>

        <hr>

        <footer>
            <p class="text-center">© 2017 KJ_Project</p>
        </footer>
        
   <script src="js/script.js"></script>
    </body>
</html>

