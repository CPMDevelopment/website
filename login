<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>My Page</title>
  <style>
    body {
      background-image: url('img_bg.jpg');
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: 100% 100%;
    }

    h3 {
      color: white;
      font-size: 16px;
      text-align: left;
    }

    input[type=text], input[type=password] {
      display: block;
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
      border-radius: 5px;
      border: none;
      text-align: left;
      background-color: white;
    }

    button[type=submit] {
      background-color: #027BCC;
      color: white;
      font-weight: bold;
      padding: 10px 20px;
      border-radius: 5px;
      border: none;
    }

    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .login-box {
      position: relative;
      width: 350px;
      height: 250px;
      background-color: rgba(0, 0, 0, 0.85);
      padding: 25px;
      box-sizing: border-box;
      text-align: center;
    }

    .logo-container {
      display: flex;
      justify-content: center;
      margin-bottom: 25px;
    }

    .logo {
      width: 175px;
    }

    .frame {
      width: 400px;
      height: 300px;
    }

    .frame img {
      width: 100%;
      height: 100%;
    }
  </style>
</head>
<body>
  <div class="login-container">
    <div class="login-box">
      <div class="logo-container">
        <img src="Global_TL_LOGO_TP_White.png" class="logo" alt="My Image">
      </div>
      <h2 style="color: white;">Global Timelapse Login</h2>
      <form>
        <h3>Username</h3>
        <input type="text" id="username" name="username" placeholder="Username">
        <h3>Password</h3>
        <input type="password" id="password" name="password" placeholder="Password">
        <button type="submit">Login</button>
      </form>
      <div class="frame">
        <img src="Global_TL_LOGO_FRAME.png" alt="My Image">
      </div>
    </div>
  </div>
</body>
</html>
