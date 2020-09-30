<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>Success</title>
    <meta name="description" content="Our Success page">
    <meta name="keywords" content="html tutorial template">
</head>
<body>
  <?php
  $servername = "localhost";
  $username = "group4";
  $password = "bcs430w";
  $dbname = "BCS430Wserver";
  $fName = $_POST['first'];
  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);

  }else{

  $sql = $conn->prepare("INSERT INTO `testTable`(`FName`) VALUES (?)");
  $sql->bind_param("s",$fName);
  $sql->execute();

  echo "good";

  }
  $conn->close()

  ?>
</body>
</html>
