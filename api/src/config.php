<?php

require_once 'config_param.php';

$conn = new mysqli($host, $db_user, $db_password, $db_name);


if ($conn->connect_error) {
    die('Error: connection error, please try later');
}