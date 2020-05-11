<?php

$link = mysqli_connect("localhost", "root", "", "login");
 

if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
        $username = mysqli_real_escape_string($link, $_REQUEST['username']);
        $password = mysqli_real_escape_string($link, $_REQUEST['password']);
        $email = mysqli_real_escape_string($link, $_REQUEST['email']);
        $sql = "INSERT INTO users (username, password ,email) VALUES ('$username','$password','$email')";
         
        if(mysqli_query($link, $sql)){
        } else{
            echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
        }
  
    
    
    mysqli_close($link);

?>

<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
}

body {
  font-family: 'IBM Plex Sans', sans-serif;
   background: url(office.jpg) no-repeat;
   background-size: cover;
}


.column {
  float: left;
  width: 20%;
  padding: 0 10px;
  margin-left: 20%;
  margin-right: auto;
}


.row {
   
  margin-top:10%;
  margin-bottom:auto;
}


.row:after {
  content: "";
  display: table;
  clear: both;
}


@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

.hbutton {
    background-color:#487eb0;
    color: white;
    border-radius: 20px;
    padding:4px;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  .hbutton:hover {background-color: #3e8e41;}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
  
}

.image img{
  width: 100%;
  height: 100%;
}
</style>
</head>
<body>



<div class="row">
  <div class="column">
    <div class="card">
      <h3>Are you an Employee</h3>
      <div class="image">
      <img src="empolyee.jpg">
      </div>
      <form method=post>
      <button type="submit" class="hbutton" formaction="application.php"  >Continue</button>
      </form>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h3>Are you an Employer</h3>
      <div class="image">
      <img src="empolyer.jpg">
      </div>
      <form method=post>
      <button type="submit" class="hbutton" formaction="empapplication.php" >Continue</button>
      </form>
    </div>
  </div>
  
 
</div>

</body>
</html>
