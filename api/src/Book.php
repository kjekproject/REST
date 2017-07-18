<?php

class Book {
    
    private $id;
    private $title;
    private $author;
    private $description;
    
    function __construct() {
        $this->id = -1;
        $this->title = "";
        $this->author = "";
        $this->description = "";
    }
    
    function getId() {
        return $this->id;
    }
    
    function getTitle() {
        return $this->title;
    }

    function getAuthor() {
        return $this->author;
    }

    function getDescription() {
        return $this->description;
    }

    function setTitle($title) {
        $this->title = $title;
    }

    function setAuthor($author) {
        $this->author = $author;
    }

    function setDescription($description) {
        $this->description = $description;
    }

    static function loadFromDB(mysqli $conn, $id = null) {
        $results = [];
        
        if (!is_null($id)) {
            $id = $conn->real_escape_string($id);
            $sql = 'SELECT * FROM books WHERE id ='.$id.';';
        } else {
            $sql = 'SELECT * FROM books;';
        }
        
        $result = $conn->query($sql);
        
        while($row = $result->fetch_assoc()) {
            $results[] = $row;
        }

        return $results;
    }
    
    public function create(mysqli $conn, $title, $author, $description = null) {
        $title = $conn->real_escape_string($title);
        $author = $conn->real_escape_string($author);
        $description = $conn->real_escape_string($description);
        
        if (strlen(trim($description)) != 0) {
            $sql = 'INSERT INTO books (title, author, description) VALUES ("'.$title.'", "'.$author.'", "'.$description.'");';
        } else {
            $sql = 'INSERT INTO books (title, author) VALUES ("'.$title.'", "'.$author.'");';
        }
        
        $result = $conn->query($sql);
        
        if ($result === TRUE) {
            return TRUE;
        } else {
            return FALSE;
        }   
    }
    
    public function update(mysqli $conn, $id, $title, $author, $description) {
        $id = $conn->real_escape_string($id);
        $title = $conn->real_escape_string($title);
        $author = $conn->real_escape_string($author);
        $description = $conn->real_escape_string($description);
        
        $sql = "UPDATE books
            SET title='$title', author='$author', description='$description'
            WHERE id=$id";
        
        $result = $conn->query($sql);
        
        return $result;
    }
    
    public function deleteFromDB(mysqli $conn, $id) {
        $id = $conn->real_escape_string($id);
        $sql = "DELETE FROM books WHERE id=$id";
        
        $result = $conn->query($sql);
        
        return $result;
    }
}

