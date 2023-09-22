import Form from "react-bootstrap/Form";
import "./register.css";

const Register = () => {
  return (
    <div class="container">
      <div class="register">
        <form action="">
          <h1>REGISTER</h1>
          <hr />
          
          <label for="">Email</label>
          <input type="text" placeholder="Username or email" />
          <label for="">Password</label>
          <input type="password" placeholder="Password" />
          <button><a href="/home">Daftar</a></button>
          {/* < button <a href="/home">Login</a> */}
          <p>
            <a href="#">Forgot Password?</a>
          </p>
        </form>
      </div>
      <div class="right">
        <img src="https://blush.design/api/download?shareUri=gorlmNsMH&w=800&h=800&fm=png" alt="" />
      </div>
    </div>
  );
};

export default Register;
