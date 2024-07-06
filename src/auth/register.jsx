function Register() {
  return (
    <div className="w-screen h-screen grid place-items-center bg-gray-200">
      <div className="px-8 py-8 border-solid border-2 border-blue-200">
        <form className="grid gap-4">
          <div className="flex gap-4">
            <div className="grid">
              <label className="text-sm" htmlFor="first_name">First Name</label>
              <input type="text" id="first_name" name="first_name" placeholder="First Name"/>
            </div>
            <div className="grid">
              <label className="text-sm" htmlFor="last_name">Last Name</label>
              <input type="text" id="last_name" name="last_name" placeholder="Last Name"/>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="grid">
              <label className="text-sm" htmlFor="phone">Phone</label>
              <input type="text" id="phone" name="phone" placeholder="Phone Number"/>
            </div>
            <div className="grid">
              <label className="text-sm" htmlFor="email">Email</label>
              <input type="text" id="email" name="email" placeholder="Email"/>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="grid">
              <label className="text-sm" htmlFor="password">Password</label>
              <input type="text" id="password" name="password" placeholder="Password"/>
            </div>
            <div className="grid">
              <label className="text-sm" htmlFor="confirm_password">Confirm Password</label>
              <input type="text" id="confirm_password" name="confirm_password" placeholder="Confirm Password"/>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="grid">
              <label className="text-sm" htmlFor="address">Address</label>
              <input type="text" id="address" name="address" placeholder="Address"/>
            </div>
            <div className="grid">
              <label className="text-sm" htmlFor="state">State</label>
              <input type="text" id="state" name="state" placeholder="State"/>
            </div>
            <div className="grid">
              <label className="text-sm" htmlFor="city">City</label>
              <input type="text" id="city" name="city" placeholder="City"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register