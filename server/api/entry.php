<?php

$data = [];
for ($i=1; $i<30; $i++) {
  $memos = [];
  for ($k=1; $k<3; $k++) {
    $memos[] = [
      'id' => ($i - 1) * 3 + $k,
      'entry_id' => $i,
      'assign_id' => rand(1, 3),
      'body' => 'body ' . $k,
    ];
  }
  $data[] = [
    'id' => $i,
    'form_id' => rand(1,3),
    'user_id' => rand(1,3),
    'body' => 'body ' . $i,
    'memos' => $memos
  ];
}

header("Access-Control-Allow-Origin: http://0.0.0.0:8080");
header("Access-Control-Allow-Credentials: true");
header('content-type: application/json; charset=utf-8');
echo json_encode($data);
