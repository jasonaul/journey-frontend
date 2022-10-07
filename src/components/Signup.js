export default function Signup(props) {
  return (
    <nav>
    
      <h1>Sign Up</h1>
      <form onSubmit={props.register}>
        <label htmlFor="name">Username: </label>
        <input className="form-control" type="text" id="name" name="username"/>
        <label htmlFor="name">Password: </label>
        <input className="form-control" type="password" id="password" name="password"/>
        <input id="signupButton" type="submit" value="Sign Up" />
      </form>
    </nav>
  )
}