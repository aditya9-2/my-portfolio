 <?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    //database connection
    $conn = new mysqli('localhost', 'root', '', 'portfolio');

    //checking connection

    if ($conn->connect_error) {
        die('Connection failed : ' . $conn->connect_error);
    } else {


        $stmt = $conn->prepare("insert into contacts(name,email,subject,message)
        values (?,?,?,?)");

        $stmt->bind_param("ssss", $name, $email, $subject, $message);
        $stmt->execute();
        echo "I will get back to you soon...";
        $stmt->close();
        $conn->close();
    }
    ?>