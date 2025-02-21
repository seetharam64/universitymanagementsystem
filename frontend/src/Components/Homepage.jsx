import './Homepage.css'
function Homepage(){
return(
    <>
    <div className='header'>
        <h1>Student Management System</h1>
    </div>
    <div className="loginclass">
        <label>Enter User Name</label><br></br>
        <input type="text" className='usernameInput'></input><br></br>
        <label>Enter Password</label><br></br>
        <input type="password"></input><br></br>
        <button>Login</button><br></br>
        <a href="">Forgot Password?</a><br></br>
        <a href="">New member!! register here!!</a><br></br>
    </div>
    </>
)
}
export default Homepage;