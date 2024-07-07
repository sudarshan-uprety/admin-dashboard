import { useNavigate } from "react-router-dom";
import { loginAPI } from "../API";
import { Link } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    const handleSubmit = async (event) =>{
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = await loginAPI(formData)
    if (data.status === 200){
      navigate("/")
    }
}
  return (
    <div className="w-screen h-screen grid place-items-center ">
      <div className="px-8 py-8 border-solid rounded-lg shadow-2xl">
        <div className="text-center text-4xl font-bold py-10">
            <h1>Vendor Login</h1>
        </div>
        <form className="grid gap-4 w-[500px] mt-2 px-16 pb-6" onSubmit={handleSubmit}>
          <div className="grid gap-4 w-full justify-center">
            <div className="grid w-[250px]">
              <label className="text-sm" htmlFor="username">User Name</label>
              <input className="px-2 py-1 rounded-sm bg-gray-100" type="text" required id="username" name="username" placeholder="User Name"/>
            </div>
            <div className="grid w-[250px]">
              <label className="text-sm" htmlFor="password">Password</label>
              <input className="px-2 py-1 rounded-sm bg-gray-100" type="password" required id="password" name="password" placeholder="Password"/>
            </div>
          </div>
          <div className="grid gap-2 items-center justify-center mt-6">
            <button className="px-6 py-2 text-lg rounded-lg bg-gray-600 text-white hover:bg-gray-700" type="submit">
                Login
            </button>
            <Link to="/register" className="text-gray-600 text-center mt-4">Register</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login