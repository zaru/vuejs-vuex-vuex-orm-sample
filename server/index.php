<?php

session_start();

if (!isset($_SESSION['item_num'])) {
  $_SESSION['item_num'] = 0;
} else {
  $_SESSION['item_num']++;
}


$data = [];
for ($i=$_SESSION['item_num']; $i>0; $i--) {
  $data[] = [
    'name' => "name-${i}"
  ];
}

header("Access-Control-Allow-Origin: http://0.0.0.0:8080");
header("Access-Control-Allow-Credentials: true");
header('content-type: application/json; charset=utf-8');
echo json_encode($data);
