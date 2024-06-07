import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { BiShow, BiHide } from "react-icons/bi";

function Form() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phonenum: "",
    country: "",
    city: "",
    pannum: "",
    aadharnum: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmpty = Object.values(data).some(value => value === "");
    if (isEmpty) {
      toast('All Fields are Required');
    } else {
      toast('Data submitted');
      setData({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        phonenum: "",
        country: "",
        city: "",
        pannum: "",
        aadharnum: ""
      });
      navigate('/display', {
        state: data
      });
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-24 w-full gap-y-12">
        <form className='flex' onSubmit={handleSubmit}>
          <div className='flex flex-col justify-center items-end px-12 gap-y-4 w-1/2'>
            <div className='flex flex-col justify-start gap-y-2'>
              <label className='text-white'>First name</label>
              <input type='text' name="firstname" className="inp_box" value={data.firstname} onChange={handleChange}></input>
            </div>
            <div className='flex flex-col justify-start gap-y-2'>
              <label className='text-white'>Last name</label>
              <input type='text' name="lastname" className="inp_box" value={data.lastname} onChange={handleChange}></input>
            </div>
            <div className='flex flex-col justify-start gap-y-2'>
              <label className='text-white'>Username</label>
              <input type='text' name="username" className="inp_box" value={data.username} onChange={handleChange}></input>
            </div>
            <div className='flex flex-col justify-start gap-y-2'>
              <label className='text-white'>Email</label>
              <input type='email' name="email" className="inp_box" value={data.email} onChange={handleChange}></input>
            </div>
            <div className='flex flex-col justify-start gap-y-2'>
              <label className='text-white'>Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className="inp_box"
                  value={data.password}
                  onChange={handleChange}
                />
                <button type="button" className="absolute right-2 top-2" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <BiShow /> : <BiHide />}
                </button>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center px-12 w-1/2 gap-y-4'>
            <div className='flex flex-col justify-start gap-y-2'>
              <label className='text-white'>City</label>
              <select name="city" className="inp_box" value={data.city} onChange={handleChange}>
                <option value="">Select City</option>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
                <option value="Houston">Houston</option>
                <option value="Phoenix">Phoenix</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
              </select>
            </div>
            <div className='flex flex-col justify-start gap-y-2'>
              <label className='text-white'>Country</label>
              <select name="country" className="inp_box" value={data.country} onChange={handleChange}>
                <option value="">Select Country</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="India">India</option>
              </select>
            </div>
            <div className='flex flex-col justify-start gap-y-2'>
              <label className='text-white'>Phone number</label>
              <div className="flex space-x-2">
                <input type='number' className="inp_box w-1/4"></input>
                <input type='number' name="phonenum" className="inp_box w-2/4" value={data.phonenum} onChange={handleChange}></input>
              </div>
            </div>
            <div className='flex flex-col justify-start gap-y-2'>
              <label className='text-white'>Aadhar number</label>
              <input type='number' name="aadharnum" className="inp_box" value={data.aadharnum} onChange={handleChange}></input>
            </div>
            <div className='flex flex-col justify-start gap-y-2'>
              <label className='text-white'>Pan number</label>
              <input type='number' name="pannum" className="inp_box" value={data.pannum} onChange={handleChange}></input>
            </div>
          </div>
        </form>
        <button type='submit' className='rounded-2xl px-4 py-2 bg-white' onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default Form;
