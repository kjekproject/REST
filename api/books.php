<?php

require_once 'src/config.php';
require_once 'src/book.php';


switch ($_SERVER['REQUEST_METHOD']) {
 
    case 'GET':
        if(isset($_GET['id'])) {
            $result = Book::loadFromDB($conn, $_GET['id']);
        } else {
            $result = Book::loadFromDB($conn);
        } 
        return json_encode($result);
        break;
        
    case'POST':
        break;
        
}
