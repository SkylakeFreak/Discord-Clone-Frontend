"use client";
import React from "react";
import { useState,useEffect } from "react";
import "@/app/globals.css";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Loggedin from "./Loggedin";
function Account() {
  const [Mainstate,setMainstate]=useState(false)
  const [passedstate,setpassedstate]=useState(false)
  const [message, setMessage] = useState('');
  const [state, setstate] = useState(false);
  const [state1, setstate1] = useState(false);
  const [state2, setstate2] = useState(false);
  const [date, setdate] = useState('');
  const [month, setmonth] = useState('');
  const [year, setyear] = useState('');
  const [drop, setdrop] = useState(false);
  const [drop1, setdrop1] = useState(false);
  const [drop2, setdrop2] = useState(false);
  const numbers = [];
  const years = [];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  for (var i = 1; i < 32; i++) {
    numbers.push(i);
  }
  for (var j = 2022; j > 1872; j--) {
    years.push(j);
  }
  const handleclickdate = (number) => {
    setdate(number);
  };
  const handleclickmonth = (number) => {
    setmonth(number);
  };
  const handleclickyear = (number) => {
    setyear(number);
  };

  const [name,setname]=useState('null')
  const [email,setemail]=useState('null')
  const [password,setpassword]=useState('null')
  const[displayname,setdisplayname]=useState('null')

  const handlenamechange=(event)=>{
    setname(event.target.value)
    }

    const handleemailchange=(event)=>{
        setemail(event.target.value)
        }
        const handlepasswordchange=(event)=>{
            setpassword(event.target.value)
            }
            const handleinputdisplaychange=(event)=>{
                setdisplayname(event.target.value)
                }


                const handlesubmit12 = async event => {
                  event.preventDefault();
                  const data = { date, month, year, name, email, password, displayname };
                  console.log(data);
                
                  try {
                    const response = await fetch('http://localhost:3002/signup', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(data)
                    });
                  //  console.log(response);
                    if (response.ok) {
                      window.alert("Account created successfully")
                    } else {
                      window.alert("Account Exists Already or Data is Invalid or Date is Unfilled")
                      console.log("setitemsfailed")
                    }
                
                  } catch (error) {
                    window.alert("Backend Error")
                    console.log('error',"know");
                  }
                };
                


                const handlesubmit13 = async event => {
                  event.preventDefault();
                  const data = { email, password };
                
                  try {
                    const response = await fetch('http://localhost:3002/login', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(data)
                    });
                
                    const data1 = await response.json();
                
                    if (response.ok) {
                      localStorage.setItem('token', data1.token);
                      fetchProtectedResource1();
                      setpassedstate(true);
                      console.log("setitemssuccess"); // Store the JWT token in local storage
                      setMessage('Login successful');
                    } else {
                      console.log("setitemsfailed");
                      setpassedstate(false);
                      window.alert("Login Failed");
                      setMessage(data1.message);
                    }
                
                  } catch (error) {
                    console.log('error',"know");
                  }
                };
                
                const fetchProtectedResource1 = async () => {
                  try {
                    console.log('inside');
                    const token = localStorage.getItem('token');
                   
                    const response = await fetch('http://localhost:3002/protected', {
                      headers: {
                        'Authorization': `Bearer ${token}`
                      }
                    });
                
                    const data1 = await response.json();
                    
                    if (response.ok) {
                      setMainstate(true);
                      console.log('Protected data:', data1);
                      console.log("sad")
                      window.location.href = '/Loggedin';

                      
                    } else {
                      setMainstate(false);
                      console.log('Error fetching protected resource:', data1);
                    }
                  } catch (error) {
                    console.log('Error fetching protected resource:', error);
                  }
                };
                useEffect(() => {fetchProtectedResource1();}, []);
                  


                  
                
                

  return (
    
  
    <div className="bg-[#5865F2] h-screen">

     
      {!state && (
        <div id="me" className="bg-[#5865F2] h-screen flex items-center justify-center">
          <div className="bg-[#313338] w-[600px] h-[300px]">
            <h1 className="text-white justify-center flex p-7 text-2xl">
              Choose an Account
            </h1>
            <h1 className="text-[#AEB3BB] flex justify-center">
              Select an account to log in with or add a new one
            </h1>

            <div className="flex justify-center h-60 p-7">
              <button
                onClick={() => {
                  setstate(true);
                }}
                className="text-[#AEB3BB] hover:underline"
              >
                Add an Account
              </button>
            </div>
          </div>
        </div>
      )}

      {!state1 && state && (
        <div id="me1" className="bg-[#5865F2] h-screen flex items-center justify-center me">
          <div className="bg-[#313338] w-[80vh] h-[50vh]">
            <p
              onClick={() => {
                setstate(false);
              }}
              className="text-white p-2 text-sm underline cursor-pointer"
            >
              Back
            </p>
            <h1 className="text-white justify-center flex p-2 mt-4 text-2xl">
              Welcome back!
            </h1>
            <h1 className="text-[#AEB3BB] flex justify-center">
              We're so excited to see you again!
            </h1>
            <form onSubmit={handlesubmit13}>
            <div className="ml-10">
              <p className="text-[#B5BAC1] font-bold text-sm mb-2 mt-2">
                EMAIL <span className="text-red-600">*</span>
              </p>
              <input
              onChange={handleemailchange}
              required={true}
                style={{ caretColor: "#ff0000" }}
                className="bg-[#1E1F22] text-white p-2 text-xl outline-none h-10 w-[45vh]"
                type="text"
              />
            </div>
            <div className="flex flex-col justify-left ml-10">
              <p className="text-[#B5BAC1] text-sm font-bold mb-2 mt-2">
                PASSWORD <span className="text-red-600">*</span>
              </p>
              <input
              required={true}
              onChange={handlepasswordchange}
                style={{ caretColor: "#ff0000" }}
                className="bg-[#1E1F22] text-white p-2 text-xl outline-none h-10 w-[45vh]"
                type="password"
              />
            </div>
            <a href="">
              <h1 className="ml-10 text-[#049DEB] text-sm mt-1">
                Forgot your Password?
              </h1>
            </a>
            <button type="submit" className="bg-[#5865F2] text-white ml-10 mt-5 w-[45vh] h-[6vh]">
              Log In
            </button>
            </form>

            <div className="flex ml-10 mt-1 text-sm">
              <p className="text-sm text-[#8C929B]">Need an Account?</p>
              <button
                onClick={() => {
                  setstate1(true);
                }}
                className="text-[#049DEB] ml-2"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      )}

      {state1 && (
        <div id="me2" className="bg-[#5865F2]  h-[100%] flex items-center justify-center">
          <div className="bg-[#313338] items-center h-[fit-content] min-w-[400px] w-[27%]">
            <p
              onClick={() => {
                setstate1(false);
              }}
              className="text-white p-5 hover:underline cursor-pointer"
            >
              Back
            </p>
            <h1 className="text-white text-xl  flex justify-center font-bold">
              Create an Account
            </h1>
            <form onSubmit={handlesubmit12} 
             method="post" 
          >
            <div id="container" className="flex flex-col p-5">
              <p className="text-[#B5BAC1] text-custom2 font-bold mb-2 mt-2">
                EMAIL<span className="text-red-600">*</span>
              </p>
              <input
              required={true}
              onChange={handleemailchange}
                style={{ caretColor: "#ff0000" }}
                className="bg-[#1E1F22] text-white p-2 text-xl outline-none h-10 w-[45vv]"
                type="email"
              />
              <p className="text-[#B5BAC1] text-custom1 font-bold mb-2 mt-2">
                DISPLAY NAME<span className="text-red-600">*</span>
              </p>
              <input
              required={true}
              onChange={handleinputdisplaychange}
                style={{ caretColor: "#ff0000" }}
                className="bg-[#1E1F22] text-white p-2 text-xl outline-none h-10 w-[45vv]"
                type="text"
              />
              <p className="text-[#B5BAC1] text-custom1 font-bold mb-2 mt-2">
                USERNAME<span className="text-red-600">*</span>
              </p>
              <input
              required={true}
              onChange={handlenamechange}
                style={{ caretColor: "#ff0000" }}
                className="bg-[#1E1F22] text-white p-2 text-xl outline-none h-10 w-[45vv]"
                type="text"
              />
              <p className="text-[#B5BAC1] text-custom1 font-bold mb-2 mt-2">
                PASSWORD<span className="text-red-600">*</span>
              </p>
              <input
              required={true}
              onChange={handlepasswordchange}
                style={{ caretColor: "#ff0000" }}
                className="bg-[#1E1F22] text-white p-2 text-xl outline-none h-10 w-[45vv]"
                type="password"
              />
              <p className="text-[#B5BAC1] text-custom1 font-bold mb-2 mt-2">
                DATE OF BIRTH<span className="text-red-600">*</span>
              </p>

              <div className="flex justify-center">
                <div className="">
                  <div className="flex">
                    <input
                    disabled={true}
                    required={true}
                      value={date}
                      placeholder="Day"
                      style={{ caretColor: "#ff0000" }}
                      className="bg-[#1E1F22] text-white p-2 text-xl outline-none h-10 w-[80%]"
                      type="number"
                    />
                    <div className="flex items-center bg-[#1E1F22] mr-2">
                      <p
                        onClick={() => {
                          setdrop(!drop);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2.5"
                          stroke="currentColor"
                          class="w-6 h-6 p-1 text-white flex items-center"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </p>
                    </div>
                  </div>
                  {drop && (
                    <div
                      style={{
                        scrollbarWidth: "thin",
                        scrollbarColor: "##313338 #1E1F22",
                      }}
                      id="popupfordate"
                      className="w-[10%] absolute h-40 z-30 overflow-y-scroll bg-[#1E1F22]"
                    >
                      <ul className="text-white">
                        <li>
                          {numbers.map((number) => (
                            <ol
                              onClick={() => {
                                setdrop(!drop);
                                handleclickdate(number);
                              }}
                              className="hover:bg-[#404249] cursor-pointer p-1"
                            >
                              {number}
                            </ol>
                          ))}
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                <div className="">
                  <div className="flex">
                    <input
                    disabled={true}
                    required={true}
                      value={month}
                      placeholder="Month"
                      style={{ caretColor: "#ff0000" }}
                      className="bg-[#1E1F22] text-white p-2 text-xl outline-none h-10 w-[80%]"
                      type="text"
                    />
                    <div className="flex items-center bg-[#1E1F22] mr-2">
                      <p
                        onClick={() => {
                          setdrop1(!drop1);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2.5"
                          stroke="currentColor"
                          class="w-6 h-6 p-1 text-white flex items-center"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </p>
                    </div>
                  </div>
                  {drop1 && (
                    <div
                      style={{
                        scrollbarWidth: "thin",
                        scrollbarColor: "#313338 #1E1F22",
                      }}
                      id="popupfordate"
                      className="w-[10%] absolute z-30 h-40 overflow-y-scroll bg-[#1E1F22]"
                    >
                      <ul className="text-white">
                        <li>
                          {months.map((number) => (
                            <ol
                              onClick={() => {
                                setdrop1(!drop1);
                                handleclickmonth(number);
                              }}
                              className="hover:bg-[#404249] cursor-pointer p-1"
                            >
                              {number}
                            </ol>
                          ))}
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                <div className="">
                  <div className="flex">
                    <input
                    readOnly={true}
                    required={true}
                      value={year}
                      placeholder="Year"
                      style={{ caretColor: "#ff0000" }}
                      className="bg-[#1E1F22] text-white p-2 text-xl outline-none h-10 w-[80%]"
                      type="text"
                    />
                    <div className="flex items-center bg-[#1E1F22] mr-2">
                      <p
                        onClick={() => {
                          setdrop2(!drop2);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2.5"
                          stroke="currentColor"
                          class="w-6 h-6 p-1 text-white flex items-center"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </p>
                    </div>
                  </div>
                  {drop2 && (
                    <div
                      style={{
                        scrollbarWidth: "thin",
                        scrollbarColor: "#313338 #1E1F22",
                      }}
                      id="popupfordate"
                      className="w-[10%] absolute z-30 h-40 overflow-y-scroll bg-[#1E1F22]"
                    >
                      <ul className="text-white">
                        <li>
                          {years.map((number) => (
                            <ol
                              onClick={() => {
                                setdrop2(!drop2);
                                handleclickyear(number);
                              }}
                              className="hover:bg-[#404249] cursor-pointer p-1"
                            >
                              {number}
                            </ol>
                          ))}
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className=" z-20 mt-3 p-1 flex">
                <input className="w-[8%]" type="checkbox" />
                <p className="text-[#949BA4] text-custom ml-3">
                  (Optional) It’s okay to send me emails with Discord updates,
                  tips and special offers. You can opt out at any time.
                </p>
              </div>
              <button  type="submit" className="text-white text-lg p-3 bg-[#4B56CE] hover:underline mt-5">
                Continue
              
              </button>
              <div className="flex text-custom mt-3">
                <p className="text-[#949BA4] ">
                  By registering, you agree to Discord's{" "}
                </p>
                <a className="ml-1 text-[#00A7FB]" href="">
                  Terms of Service
                </a>
                <p className="text-white ml-1">and</p>
                <a className="ml-1 text-[#00A7FB]" href="">
                  Privacy Policy
                </a>
              </div>
              
            </div>
            </form>
            <button className="text-[#00A7FB] mt-7 text-custom1">
                Already have an account?
              </button>
          </div>
        </div>
      )}
      
    </div>
    
    
  );
}

export default Account;
