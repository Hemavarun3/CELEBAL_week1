import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { BiShow, BiHide } from "react-icons/bi";
const validCountryCodes = [
  "+1",  // United States, Canada
  "+7",  // Russia, Kazakhstan
  "+20", // Egypt
  "+27", // South Africa
  "+30", // Greece
  "+31", // Netherlands
  "+32", // Belgium
  "+33", // France
  "+34", // Spain
  "+36", // Hungary
  "+39", // Italy
  "+40", // Romania
  "+41", // Switzerland
  "+43", // Austria
  "+44", // United Kingdom
  "+45", // Denmark
  "+46", // Sweden
  "+47", // Norway
  "+48", // Poland
  "+49", // Germany
  "+51", // Peru
  "+52", // Mexico
  "+53", // Cuba
  "+54", // Argentina
  "+55", // Brazil
  "+56", // Chile
  "+57", // Colombia
  "+58", // Venezuela
  "+60", // Malaysia
  "+61", // Australia
  "+62", // Indonesia
  "+63", // Philippines
  "+64", // New Zealand
  "+65", // Singapore
  "+66", // Thailand
  "+81", // Japan
  "+82", // South Korea
  "+84", // Vietnam
  "+86", // China
  "+90", // Turkey
  "+91", // India
  "+92", // Pakistan
  "+93", // Afghanistan
  "+94", // Sri Lanka
  "+95", // Myanmar
  "+98", // Iran
  "+211", // South Sudan
  "+212", // Morocco
  "+213", // Algeria
  "+216", // Tunisia
  "+218", // Libya
  "+220", // Gambia
  "+221", // Senegal
  "+222", // Mauritania
  "+223", // Mali
  "+224", // Guinea
  "+225", // Ivory Coast
  "+226", // Burkina Faso
  "+227", // Niger
  "+228", // Togo
  "+229", // Benin
  "+230", // Mauritius
  "+231", // Liberia
  "+232", // Sierra Leone
  "+233", // Ghana
  "+234", // Nigeria
  "+235", // Chad
  "+236", // Central African Republic
  "+237", // Cameroon
  "+238", // Cape Verde
  "+239", // Sao Tome and Principe
  "+240", // Equatorial Guinea
  "+241", // Gabon
  "+242", // Republic of the Congo
  "+243", // Democratic Republic of the Congo
  "+244", // Angola
  "+245", // Guinea-Bissau
  "+246", // British Indian Ocean Territory
  "+248", // Seychelles
  "+249", // Sudan
  "+250", // Rwanda
  "+251", // Ethiopia
  "+252", // Somalia
  "+253", // Djibouti
  "+254", // Kenya
  "+255", // Tanzania
  "+256", // Uganda
  "+257", // Burundi
  "+258", // Mozambique
  "+260", // Zambia
  "+261", // Madagascar
  "+262", // Réunion
  "+263", // Zimbabwe
  "+264", // Namibia
  "+265", // Malawi
  "+266", // Lesotho
  "+267", // Botswana
  "+268", // Eswatini
  "+269", // Comoros
  "+290", // Saint Helena
  "+291", // Eritrea
  "+297", // Aruba
  "+298", // Faroe Islands
  "+299", // Greenland
  "+350", // Gibraltar
  "+351", // Portugal
  "+352", // Luxembourg
  "+353", // Ireland
  "+354", // Iceland
  "+355", // Albania
  "+356", // Malta
  "+357", // Cyprus
  "+358", // Finland
  "+359", // Bulgaria
  "+370", // Lithuania
  "+371", // Latvia
  "+372", // Estonia
  "+373", // Moldova
  "+374", // Armenia
  "+375", // Belarus
  "+376", // Andorra
  "+377", // Monaco
  "+378", // San Marino
  "+379", // Vatican City
  "+380", // Ukraine
  "+381", // Serbia
  "+382", // Montenegro
  "+383", // Kosovo
  "+385", // Croatia
  "+386", // Slovenia
  "+387", // Bosnia and Herzegovina
  "+389", // North Macedonia
  "+420", // Czech Republic
  "+421", // Slovakia
  "+423", // Liechtenstein
  "+500", // Falkland Islands
  "+501", // Belize
  "+502", // Guatemala
  "+503", // El Salvador
  "+504", // Honduras
  "+505", // Nicaragua
  "+506", // Costa Rica
  "+507", // Panama
  "+508", // Saint Pierre and Miquelon
  "+509", // Haiti
  "+590", // Guadeloupe
  "+591", // Bolivia
  "+592", // Guyana
  "+593", // Ecuador
  "+594", // French Guiana
  "+595", // Paraguay
  "+596", // Martinique
  "+597", // Suriname
  "+598", // Uruguay
  "+599", // Curaçao
  "+670", // East Timor
  "+672", // Australian External Territories
  "+673", // Brunei
  "+674", // Nauru
  "+675", // Papua New Guinea
  "+676", // Tonga
  "+677", // Solomon Islands
  "+678", // Vanuatu
  "+679", // Fiji
  "+680", // Palau
  "+681", // Wallis and Futuna
  "+682", // Cook Islands
  "+683", // Niue
  "+685", // Samoa
  "+686", // Kiribati
  "+687", // New Caledonia
  "+688", // Tuvalu
  "+689", // French Polynesia
  "+690", // Tokelau
  "+691", // Micronesia
  "+692", // Marshall Islands
  "+850", // North Korea
  "+852", // Hong Kong
  "+853", // Macau
  "+855", // Cambodia
  "+856", // Laos
  "+880", // Bangladesh
  "+886", // Taiwan
  "+960", // Maldives
  "+961", // Lebanon
  "+962", // Jordan
  "+963", // Syria
  "+964", // Iraq
  "+965", // Kuwait
  "+966", // Saudi Arabia
  "+967", // Yemen
  "+968", // Oman
  "+970", // Palestine
  "+971", // United Arab Emirates
  "+972", // Israel
  "+973", // Bahrain
  "+974", // Qatar
  "+975", // Bhutan
  "+976", // Mongolia
  "+977", // Nepal
  "+992", // Tajikistan
  "+993", // Turkmenistan
  "+994", // Azerbaijan
  "+995", // Georgia
  "+996", // Kyrgyzstan
  "+998"  // Uzbekistan
];


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
    aadharnum: "",
    countryCode: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhoneNumber = (phone) => {
    const re = /^\d{10}$/;
    return re.test(phone);
  };

  const validateCountryCode = (code) => {
    return validCountryCodes.includes(code);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmpty = Object.values(data).some(value => value === "");
    if (isEmpty) {
      toast.error('All Fields are Required');
    } else if (!validateEmail(data.email)) {
      toast.error('Invalid Email Address');
    } else if (!validatePhoneNumber(data.phonenum)) {
      toast.error('Invalid Phone Number');
    } else if (!validateCountryCode(data.countryCode)) {
      toast.error('Invalid Country Code');
    } else {
      toast.success('Data submitted');
      navigate('/display', {
        state: data
      });
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-2 w-full">
        <h1 className="text-2xl font-bold text-white">Registration Form</h1>
        <form className='flex flex-col md:flex-row justify-center items-center p-16' onSubmit={handleSubmit}>
          <div className='flex flex-col justify-center items-center md:px-12 gap-y-4 w-1/2'>
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
                <button type="button" className="absolute right-2 top-6" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <BiShow /> : <BiHide />}
                </button>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center md:px-12 gap-y-4 w-1/2'>
            <div className='flex flex-col justify-start gap-y-2'>
              <label className='text-white'>City</label>
              <select name="city" className="select_box" value={data.city} onChange={handleChange}>
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
              <select name="country" className="select_box" value={data.country} onChange={handleChange}>
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
                <input type='text' className="inp_box w-1/4" name="countryCode" value={data.countryCode} onChange={handleChange} placeholder="+1"></input>
                <input type='text' name="phonenum" className="inp_box" value={data.phonenum} onChange={handleChange}></input>
              </div>
            </div>
            <div className='flex flex-col justify-start gap-y-2'>
              <label className='text-white'>Aadhar number</label>
              <input type='text' name="aadharnum" className="inp_box" value={data.aadharnum} onChange={handleChange}></input>
            </div>
            <div className='flex flex-col justify-start gap-y-2'>
              <label className='text-white'>Pan number</label>
              <input type='text' name="pannum" className="inp_box" value={data.pannum} onChange={handleChange}></input>
            </div>
          </div>
        </form>
        <button type='submit' className='rounded-2xl px-4 py-2 bg-white' onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default Form;
