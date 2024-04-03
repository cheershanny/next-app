import React from "react";

const Register = () => {
  return (
    <div>
      <label className="input input-bordered flex items-center gap-2">
        Username
        <input type="text" className="grow" placeholder="Daisy" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Email
        <input type="email" className="grow" placeholder="daisy@site.com" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Password
        <input type="password" className="grow" />
      </label>
      <button className="btn">Register</button>
    </div>
  );
};

export default Register;
