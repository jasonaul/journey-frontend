export default function Login(props) {
  return (
    <div>
    <h1>Login</h1>
      <form onSubmit={props.loginUser}>
        <label htmlFor="name">Username: </label>
        <input className="form-control" type="text" id="name" name="username"/>
        <label htmlFor="name">Password: </label>
        <input className="form-control" type="password" id="password" name="password"/>
        <input id="signupButton" type="submit" value="Login" />
      </form>
    </div>
  )
}