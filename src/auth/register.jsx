import { registerAPI } from "../API";
import { Link } from 'react-router-dom';


function Register() {
    const handleSubmit = async (event) =>{
        event.preventDefault()
        const formData = new FormData(event.target)
        console.log(formData)
        const data = await registerAPI(formData)
        console.log(data);
    }
  return (
    <div className="w-screen h-screen grid place-items-center ">
      <div className="px-8 py-8 border-solid rounded-lg shadow-2xl">
        <div className="text-center text-4xl font-bold py-10">
            <h1>Vendor Registration</h1>
        </div>
        <form className="grid gap-4 w-[700px] mt-10 px-16 pb-6" onSubmit={handleSubmit}>
          <div className="flex gap-4 w-full">
            <div className="grid w-full">
              <label className="text-sm" htmlFor="name">Store Name</label>
              <input className="px-2 py-1 rounded-sm bg-gray-100" type="text" required id="name" name="name" placeholder="Store Name"/>
            </div>
            <div className="grid w-full">
              <label className="text-sm" htmlFor="username">Username</label>
              <input className="px-2 py-1 rounded-sm bg-gray-100" type="text" required id="username" name="username" placeholder="Username"/>
            </div>
          </div>
          <div className="flex gap-4 w-full">
            <div className="grid w-full">
              <label className="text-sm" htmlFor="phone">Phone</label>
              <input className="px-2 py-1 rounded-sm bg-gray-100" type="text" required id="phone" name="phone" placeholder="Phone Number"/>
            </div>
            <div className="grid w-full">
              <label className="text-sm" htmlFor="email">Email</label>
              <input className="px-2 py-1 rounded-sm bg-gray-100" type="email" required id="email" name="email" placeholder="Email"/>
            </div>
          </div>
          <div className="flex gap-4 w-full">
            <div className="grid w-full">
              <label className="text-sm" htmlFor="password">Password</label>
              <input className="px-2 py-1 rounded-sm bg-gray-100" type="password" required id="password" name="password" placeholder="Password"/>
            </div>
            <div className="grid w-full">
              <label className="text-sm" htmlFor="confirm_password">Confirm Password</label>
              <input className="px-2 py-1 rounded-sm bg-gray-100" type="password" required id="confirm_password" name="confirm_password" placeholder="Confirm Password"/>
            </div>
          </div>
          <div className="flex gap-4 w-full">
            <div className="grid w-full">
              <label className="text-sm" htmlFor="address">Address</label>
              <input className="px-2 py-1 rounded-sm bg-gray-100" type="text" required id="address" name="address" placeholder="Address"/>
            </div>
            <div className="grid w-full">
              <label className="text-sm" htmlFor="state">State</label>
              <input className="px-2 py-1 rounded-sm bg-gray-100" type="text" required id="state" name="state" placeholder="State"/>
            </div>
            <div className="grid w-full">
              <label className="text-sm" htmlFor="city">City</label>
              <input className="px-2 py-1 rounded-sm bg-gray-100" type="text" required id="city" name="city" placeholder="City"/>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between mt-6">
            <button className="px-6 py-2 text-lg rounded-lg bg-gray-600 text-white hover:bg-gray-700" type="submit">
                Register Here
            </button>
            <Link to="/login"  className="text-gray-600 ">Already Registered?</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register