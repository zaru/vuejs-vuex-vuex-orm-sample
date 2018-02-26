<?php

$data = [];
for ($i=1; $i<4; $i++) {
  $data[] = [
    'id' => $i,
    'form_id' => rand(1,3),
    'name' => 'name_' . $i
  ];
}

header("Access-Control-Allow-Origin: http://0.0.0.0:8080");
header("Access-Control-Allow-Credentials: true");
header('content-type: application/json; charset=utf-8');
echo json_encode($data);
