<!DOCTYPE html>
<meta charset="utf-8">
<html>
<title>Base de dados</title>
<head>
    <h1>Base de dados</h1>
</head>
<body>
<?php
echo "<b>SQLite3 version:</b><br>";
print_r(SQLite3::version());
echo "<p>---</p>";
if (class_exists('SQLite3')) {
    echo "<b>SQLite3 Available:</b><br>";
    echo 'SQLite3 extension loaded';
    echo "<p>---</p>";
}
//echo phpinfo();
try{
    $db = new PDO('sqlite:db.db');
    if(!$db)
        { echo "Unable to open database";}
    else{
    //Get values from WEBPAGE:
    $util = $_REQUEST['name'];
    $password= $_REQUEST['password'];

    //Inserir valores na tabela previnentes da página WEB
       $db->exec("CREATE TABLE IF NOT EXISTS x (id integer PRIMARY KEY,name,name)");
       //O id é incrementado de forma automática com a opção NULL em VALUES
       //$db->exec("INSERT INTO x (id,name,number) VALUES(NULL,'MARTIM2','14')");
       $db->exec("INSERT INTO x (id,name,password) VALUES(NULL,'$util','$password')");

    //Imprimir a tabela dos dados armazenados
       echo "<b>On DataBase:</b><br><br>";
       print "<table border=4>";
       print "<tr><td> Id </td><td> Utilizador       </td><td> Password    </td></tr>";
       $result = $db->query('SELECT * FROM x');
       foreach($result as $row)
       {
           print "<tr><td>".$row['id']."</td>";
           print "<td>".$row['name']."</td>";
           print "<td>".$row['password']."</td></tr>";
       }
    print "</table>";
    print "<br><br>";
    //$db=null; //Não é necessário, porque a BD fecha automaticamente.

    //Seleção de entradas 
    echo "<p>---</p>";
    $result1 = $db->query('SELECT * FROM x WHERE name = "Cláudia"');
    
    $cont=0;
    $my_array = array();    
    foreach($result1 as $row) 
    {
        $cont++;
        $my_array[] = $row['id'];
    }
    echo "<b>".$cont."</b><br>";

    echo "***************************************<br>";
    for($i=0;$i<$cont;$i++)
    {
      echo "<b>".$my_array[$i]."</b><br>";
    }

    }
   }
catch(PDOException $erro){
   echo "<br>";
   echo $erro->getMessage();
}

//echo phpinfo();
?>
</body>
<address>
</address>
</html>
