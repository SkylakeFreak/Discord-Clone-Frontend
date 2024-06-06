import React from "react";
import { jwtDecode } from "jwt-decode";
import img2 from "../assets/Screenshot 2024-05-22 085922.png";
import { useState, useEffect, useRef } from "react";
import "@/app/globals.css";
import img3 from "../assets/0048cbfdd0b3ef186d22.png";
import Image from "next/image";
import { io } from "socket.io-client";
import img1 from "../assets/discord-loader.gif";
import { PassThrough } from "stream";
function Loggedin() {

  const receivedref = useRef([]);
  console.log(receivedref.current, "sleeeeeeep");
  const dataRef = useRef({});
  const flagref = useRef(true);
  const sendref = useRef("");

  console.log("USEEFFECT");
  console.log(dataRef.current, "dataref");
  const [array, setarray] = useState(dataRef.current);
  const [ansarray, anssetarray] = useState("");
  const [authorfriends, setauthofriends] = useState([]);
  const socketRef = useRef(null);
  // socketRef.current = io("http://localhost:3003/service4");
  // useEffect(()=>{

  //   // if (isInitialRender) {
  //   //   setIsInitialRender(false);
  //   //   return;
  //   // }
  //   socketRef.current.emit('joinRoom', "needroom");

  // },[])

  // useEffect(()=>{
  //   if (isInitialRender) {
  //     setIsInitialRender(false);
  //     return;
  //   }
  //   const sendmessage=()=>{
  //     socketRef.current.emit('sendMessage', "needroom", array)

  //   }
  //   sendmessage();
  // },[array])

  // socketRef.current.on('message', (message) => {
  //       console.log(message,"res")

  //     });

  const appendToArrayInObject = (obj, key, newValue) => {
    (obj[key] ??= []).unshift(newValue);
    console.log("bef", dataRef.current);
    dataRef.current = obj;
    console.log("aft", dataRef.current);
    console.log(obj, "sddddddffdffffffffffff");
  };

  const [activestatus, setactivestatus] = useState("Idle");
  const [active, setActive] = useState("Online");
  const [timer, settimer] = useState(10800);
  const [arrayfriends, setarrayfriends] = useState([]);
  const change = () => {
    setTimeout(() => {
      // console.log("user is sleeped");
      setactivestatus("Idle");
    }, timer);
  };

  useEffect(() => {
    // console.log("moved");
    settimer(10800);
    setactivestatus("Online");
    change();
  }, [active]);
  const [currentuser, setcurrentuser] = useState("");
  const [check, setcheck] = useState(false);
  const [currentusername, setcurrentusername] = useState("");
  const fetchProtectedResource1 = async () => {
    try {
      const token = localStorage.getItem("token");
      const decoded = jwtDecode(token);
      // console.log(decoded.displayname, "done");
      setcurrentuser(decoded.name);
      setcurrentusername(decoded.username);
      setloader(true);
      const response = await fetch("http://localhost:3002/protected", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setcheck(true);
        // console.log("Protected data:");
        // console.log("sad12");
      } else {
        console.log("Error fetching protected resource1");
      }
    } catch (error) {
      setcheck(false);
      window.location.href = "/Account";
      console.log("Error fetching protected resource:");
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token");

    window.location.href = "/Account";
  };

  useEffect(() => {
    let timer = setInterval(() => {
      // console.log("chekced");

      fetchProtectedResource1();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const [openpopup, setopenpopup] = useState(false);

  const openpopupmain = () => {
    setopenpopup(!openpopup);
    setfriendrequest(false);
  };

  const [loader, setloader] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [friendspage, setfriendspage] = useState(true);
  const [infinitypage, setinfinitypage] = useState(false);
  const [shoppage, setpage] = useState(false);
  const [messagepage, setmessagepage] = useState(false);

  const handlefriendpage = () => {
    setfriendspage(true);
    setinfinitypage(false);
    setpage(false);
    setmessagepage(false);
  };
  const handleinfinitypage = () => {
    setfriendspage(false);
    setinfinitypage(true);
    setpage(false);
    setmessagepage(false);
  };
  const handleshoppage = () => {
    setfriendspage(false);
    setinfinitypage(false);
    setpage(true);
    setmessagepage(false);
  };
  const handllemessagepage12 = () => {
    setfriendspage(false);
    setinfinitypage(false);
    setpage(false);
    setmessagepage(true);
  };
  const [div, setdiv] = useState([]);
  const [storemessage, setstoremessage] = useState("");
  // console.log(storemessage,"storemessage")
  const [containuser, setcontainuser] = useState("");
  const [currentchatuser, setcurrentchatuser] = useState("");
  const [changestate, setchangestate] = useState(false);
  console.log(currentchatuser, "currentchatuser");

  const addnewdiv = (event) => {
    event.preventDefault();
    setchangestate(!changestate);
    console.log("called");
    appendToArrayInObject(dataRef.current, currentchatuser, storemessage);

    sendref.current = storemessage;
    setstoremessage("");
  };

  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
      return;
    }
    appendToArrayInObject(
      dataRef.current,
      currentchatuser,
      receivedref.current
    );
    receivedref.current = "";
  }, [receivedref.current]);

  const setnewmessage = (e) => {
    setstoremessage(e.target.value);
  };

  const submitfriendrequest = (e) => {
    e.preventDefault();
    const socket1 = io("http://localhost:3003/service1");
    socket1.on("connect", () => {
      socket1.emit("savefriends", currentuser, containuser);
      socket1.close();
    });
  };
  const handlesendvaluechange = (e) => {
    setcontainuser(e.target.value);
  };
  const [checkfriendsloader, setcheckloader] = useState(true);
  const [friendrequest, setfriendrequest] = useState(false);
  const [permavaluesend, setpermavaluesend] = useState("");
  const [changeperma, setchangeperma] = useState(false);
  const [tri, settri] = useState("");
  const [refresh, setrefresh] = useState(false);

  useEffect(() => {
    const fetchrequest = async () => {
      const socket2 = io("http://localhost:3003/service2");
      socket2.on("connect", () => {
        // console.log("creaafds", currentuser);
        socket2.emit("requestfriend", currentuser);
      });
      socket2.on("requestfri", (data, auth) => {
        // console.log(data)
        // console.log(auth, "authoo");
        setauthofriends(auth);
        setarrayfriends(data);

        const newArray = auth.reduce((acc, key) => {
          acc[key] = [];
          return acc;
        }, {});
        console.log(dataRef.current, "before");

        if (flagref.current == true) {
          flagref.current = false;
          dataRef.current = {
            ...dataRef.current, // spread the previous data
            ...newArray, // spread the new data to update
          };
        }
        console.log("after");

        // if (newArray[currentchatuser]===null){
        //   console.log("empty");

        // }
        // else{
        // // console.log(newArray,newArray.raj01,"WDdsfsfa")
        //   if (newArray.raj01.length==0){
        //     console.log('pass')
        //     dataRef.current=dataRef.current
        //   }
        //   else{
        //     dataRef.current = {
        //       ...dataRef.current, // spread the previous data
        //       newArray, // spread the new data to update
        //     };
        //     console.log(dataRef.current,"sa1d")

        //   }

        // }

        setcheckloader(false);
        socket2.close();
      });
    };
    const intervalId = setInterval(() => {
      fetchrequest();
    }, 2000);
    return () => clearInterval(intervalId);
  }, [currentuser]);

  // useEffect(() => {

  //   const intervalId = setInterval(()=>{
  //     console.log("refreshed")

  //   }, 2000);

  //   return () => clearInterval(intervalId);
  // }, []);

  useEffect(() => {
    if (setcheckloader)
      if (arrayfriends.length > 0) {
        // console.log(friendrequest,"test")
        setfriendrequest(true);
      } else {
        setcheckloader(false);
        setfriendrequest(false);
      }
  }, [arrayfriends]);
  useEffect(() => {
    // console.log(array, "working");
  }, [array]);

  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
      return;
    }
    const addedfriends = async () => {
      const socket3 = io("http://localhost:3003/service3");
      socket3.on("connect", () => {
        socket3.emit("permaservice", currentuser, permavaluesend);
        socket3.close();
      });
    };
    addedfriends();
  }, [changeperma]);

  useEffect(() => {
    const socket4 = io("http://localhost:3003/service4");

    socket4.on("connect", () => {
      console.log("Connected to service4");

      socket4.emit("joinRoom", "alphabet");
      socket4.emit("sendMessage", sendref.current);
      socket4.on("message", (message) => {
        console.log(message, "preciousssssss");
        receivedref.current = [...receivedref.current, message];
      });

      // Closing the socket connection after a delay to ensure message sending
      // setTimeout(() => {
      //   socket4.close();
      // }, 5000);
    });

    console.log(sendref.current, "storemessage");

    // Cleanup the socket connection on component unmount
    return () => {
      socket4.close();
    };
  }, [changestate]);

  const [chatroom, setchatroom] = useState("erthneverexpire");
  const switchref = useRef(currentchatuser);
  const checkref1 = useRef(0);
  const checkref2 = useRef(0);
  // const dataref8 = useRef({
  //   "": [[""], ""],
  //   utkarsh: [
  //     "hello",
  //     "how are you",
  //     "why not replying",
  //     ["yes i am here only"],
  //     ["dont be angry with me"],
  //     "nah i am not angry",
  //     "you seem to be",
  //     ["next time will take care"],
  //     "okay",
  //     ["see you then"],
  //     "yeah bitch",
  //     ["good night"],
  //   ],
  //   mihir01: [],
  // });

  console.log("????????????")
  console.log(dataRef.current[currentchatuser])
  console.log("????????????")

  return (
    <div
      onClick={() => {
        setActive(!active);
      }}
      id="main"
      className="flex items-center h-screen justify-center"
    >
      {false && (
        <div className="bg-[#040204] h-screen w-full flex items-center justify-center text-white">
          <h1 className="text-3xl text-center">
            <Image className="w-80" src={img1} alt=""></Image>
          </h1>
        </div>
      )}
      {true && (
        <div id="main" className="h-screen w-full bg-[#313338] text-white">
          <div className="flex w-full min-h-[650px]">
            <div className="bg-[#1E1F22] h-screen min-h-[650px] min-w-[70px] w-[80px]">
              <div className="flex justify-center items-center mt-[10px] ">
                <div className="h-[33px] w-[3px] rounded-r-lg absolute left-0 bg-white"></div>

                <div className="w-[40px] h-[40px] bg-[#5865F2] rounded-xl flex items-center justify-center">
                  <svg
                    aria-hidden="true"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19.73 4.87a18.2 18.2 0 0 0-4.6-1.44c-.21.4-.4.8-.58 1.21-1.69-.25-3.4-.25-5.1 0-.18-.41-.37-.82-.59-1.2-1.6.27-3.14.75-4.6 1.43A19.04 19.04 0 0 0 .96 17.7a18.43 18.43 0 0 0 5.63 2.87c.46-.62.86-1.28 1.2-1.98-.65-.25-1.29-.55-1.9-.92.17-.12.32-.24.47-.37 3.58 1.7 7.7 1.7 11.28 0l.46.37c-.6.36-1.25.67-1.9.92.35.7.75 1.35 1.2 1.98 2.03-.63 3.94-1.6 5.64-2.87.47-4.87-.78-9.09-3.3-12.83ZM8.3 15.12c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.89 2.27-2 2.27Zm7.4 0c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.88 2.27-2 2.27Z"
                      class=""
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#2B2D31] w-[300px] h-screen flex flex-col  min-w-[250px]">
              <div className="bg-[#2B2D31] h-[55px] min-h-[50px]  border border-b-[#1E1F22] border-b-2  border-t-0 border-l-0 border-r-0  flex p-2 items-center justify-center">
                <div
                  onClick={openpopupmain}
                  className="bg-[#1E1F22] h-7 flex items-center text-custom1 w-[100%] text-[#909BA4] rounded-sm cursor-pointer p-2"
                >
                  Find or start a conversation
                </div>
              </div>

              <div>
                <div className="w-full min-h-[150px]">
                  <li className="list-none p-2">
                    <ul
                      onClick={handlefriendpage}
                      className={`h-[40px] ${
                        friendspage && "bg-[#4F545C]"
                      } cursor-pointer rounded-sm p-3 mb-1 items-center flex hover:bg-[#35373C]`}
                    >
                      <svg
                        className="mr-5"
                        class="linkButtonIcon_cff89e"
                        aria-hidden="true"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                          class=""
                        ></path>
                        <path
                          fill="currentColor"
                          d="M3 5v-.75C3 3.56 3.56 3 4.25 3s1.24.56 1.33 1.25C6.12 8.65 9.46 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.2-.15 7.65 7.65 0 0 0-1.32-2.3c-.15-.2-.42-.06-.39.17l.25 2c.02.15-.1.28-.25.28H9a2 2 0 0 1-2-2v-2.22c0-1.57-.67-3.05-1.53-4.37A15.85 15.85 0 0 1 3 5Z"
                          class=""
                        ></path>
                      </svg>
                      Friends
                    </ul>

                    <ul
                      onClick={handleinfinitypage}
                      className={`h-[40px] ${
                        infinitypage && "bg-[#4F545C]"
                      } cursor-pointer rounded-md p-3 mb-1 items-center flex hover:bg-[#35373C]`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="w-5 h-5 mr-4"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 1c3.866 0 7 1.79 7 4s-3.134 4-7 4-7-1.79-7-4 3.134-4 7-4Zm5.694 8.13c.464-.264.91-.583 1.306-.952V10c0 2.21-3.134 4-7 4s-7-1.79-7-4V8.178c.396.37.842.688 1.306.953C5.838 10.006 7.854 10.5 10 10.5s4.162-.494 5.694-1.37ZM3 13.179V15c0 2.21 3.134 4 7 4s7-1.79 7-4v-1.822c-.396.37-.842.688-1.306.953-1.532.875-3.548 1.369-5.694 1.369s-4.162-.494-5.694-1.37A7.009 7.009 0 0 1 3 13.179Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Infinity
                    </ul>
                    <ul
                      onClick={handleshoppage}
                      className={`h-[40px] ${
                        shoppage && "bg-[#4F545C]"
                      } cursor-pointer rounded-md p-3 mb-1 items-center flex hover:bg-[#35373C]`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="w-5 h-5 mr-4"
                      >
                        <path d="M2.879 7.121A3 3 0 0 0 7.5 6.66a2.997 2.997 0 0 0 2.5 1.34 2.997 2.997 0 0 0 2.5-1.34 3 3 0 1 0 4.622-3.78l-.293-.293A2 2 0 0 0 15.415 2H4.585a2 2 0 0 0-1.414.586l-.292.292a3 3 0 0 0 0 4.243ZM3 9.032a4.507 4.507 0 0 0 4.5-.29A4.48 4.48 0 0 0 10 9.5a4.48 4.48 0 0 0 2.5-.758 4.507 4.507 0 0 0 4.5.29V16.5h.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5H3V9.032Z" />
                      </svg>
                      Shop
                    </ul>
                  </li>
                </div>
              </div>

              <div id="messagepage" className="h-full w-full">
                <div className="flex">
                  <p className="ml-1 p-3 flex items-center text-sm">
                    DIRECT MESSAGES
                  </p>
                  <p className="flex items-center ml-auto p-3 mr-4">+</p>
                </div>
                {checkfriendsloader && (
                  <div className="flex items-center justify-center ">
                    <p className="mr-4">Loading...</p>
                    <img
                      className="h-5 animate-spinSlow"
                      src="https://freesvg.org/img/1544764567.png"
                      alt=""
                    />
                  </div>
                )}

                {!checkfriendsloader && (
                  <div
                    className="flex items-center justify-center"
                    style={{
                      scrollbarWidth: "thin",
                      scrollbarColor: "#313338 #1E1F22",
                    }}
                  >
                    <ul>
                      {authorfriends.map((name, index) => (
                        <li
                          key={index}
                          className="list-none bg-[#404249] h-10 w-[230px] flex items-center rounded-sm mb-2 hover:bg-[#35373C]"
                        >
                          <ul
                            onClick={() => {
                              handllemessagepage12();
                              setcurrentchatuser(name);
                            }}
                            className="cursor-pointer h-10 w-[230px] p-2"
                          >
                            {name}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="h-[80px] w-full flex items-center justify-center bg-[#232428]">
                {loader && (
                  <div id="loaderid" className="flex items-center w-full">
                    <Image
                      className="h-10 rounded-3xl ml-1 w-10"
                      src={img3}
                      alt=""
                    ></Image>
                    <div className="p-2 flex flex-col justify-center">
                      <p className="custom1">{currentuser}</p>
                      <p className="text-custom2">{activestatus}</p>
                    </div>
                  </div>
                )}

                {!loader && (
                  <div className="flex items-center justify-center ">
                    <p className="mr-4">Loading...</p>
                    <img
                      className="h-5 animate-spinSlow"
                      src="https://freesvg.org/img/1544764567.png"
                      alt=""
                    />
                  </div>
                )}
              </div>
            </div>

            {friendspage && (
              <div className=" h-screen w-screen bg-black text-black">
                <div className="flex flex-col h-full">
                  <div className="h-[6vh] min-h-[50px] min-w-[901px]  border border-b-[#1E1F22] border-b-2  border-t-0 border-l-0 border-r-0 bg-[#313338] flex">
                    <div className="flex items-center justify-center text-sm font-semibold p-3 text-white">
                      {" "}
                      <svg
                        className="mr-1 text-[#80848E]"
                        class="linkButtonIcon_cff89e"
                        aria-hidden="true"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                          class=""
                        ></path>
                        <path
                          fill="currentColor"
                          d="M3 5v-.75C3 3.56 3.56 3 4.25 3s1.24.56 1.33 1.25C6.12 8.65 9.46 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.2-.15 7.65 7.65 0 0 0-1.32-2.3c-.15-.2-.42-.06-.39.17l.25 2c.02.15-.1.28-.25.28H9a2 2 0 0 1-2-2v-2.22c0-1.57-.67-3.05-1.53-4.37A15.85 15.85 0 0 1 3 5Z"
                          class=""
                        ></path>
                      </svg>
                      Friends
                    </div>
                    <div className="flex items-center justify-center">
                      <p className=" h-[25px] w-[0.1px] text-2xl bg-[#80848E]"></p>
                    </div>

                    <div className="flex -ml-10 text-[#A8A8B3]  gap-x-5 items-center justify-center w-[600px]">
                      <p className="hover:bg-[#393C41] hover:text-white cursor-pointer p-1 w-[60px] text-center rounded-md">
                        Online
                      </p>
                      <p className="hover:bg-[#393C41] hover:text-white cursor-pointer p-1 w-[40px] text-center rounded-md">
                        All
                      </p>
                      <p className="hover:bg-[#393C41] hover:text-white cursor-pointer p-1 w-[70px] text-center rounded-md">
                        Pending
                      </p>
                      <p className="hover:bg-[#393C41] hover:text-white cursor-pointer p-1 w-[70px] text-center rounded-md">
                        Blocked
                      </p>
                      <p
                        onClick={() => {
                          setfriendrequest(true);
                        }}
                        className="hover:bg-[#393C41] hover:text-green-400 text-green-500 cursor-pointer p-1 w-[90px] text-center rounded-md"
                      >
                        Request{" "}
                        <span className="text-red-500">
                          {arrayfriends.length}
                        </span>
                      </p>
                    </div>
                    <div className="ml-auto flex items-center justify-center text-[#B5BAC1] w-[150px]">
                      <p className=" hover:text-white cursor-pointer">
                        {" "}
                        <svg
                          x="0"
                          y="0"
                          class="icon_ae0b42"
                          aria-hidden="true"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 14a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z"
                            fill="currentColor"
                            class=""
                          ></path>
                          <path
                            d="M20.76 12.57c.4.3 1.23.13 1.24-.37V12a10 10 0 1 0-18.44 5.36c.12.19.1.44-.04.61l-2.07 2.37A1 1 0 0 0 2.2 22h10c.5-.01.67-.84.37-1.24A3 3 0 0 1 15 16h.5a.5.5 0 0 0 .5-.5V15a3 3 0 0 1 4.76-2.43Z"
                            fill="currentColor"
                            class=""
                          ></path>
                        </svg>
                      </p>

                      <p className=" h-[25px] w-[0.1px] text-2xl ml-5 bg-black"></p>
                      <div className="ml-auto flex">
                        <p className="p-3 hover:text-white cursor-pointer">
                          <svg
                            x="0"
                            y="0"
                            class="icon_ae0b42"
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-2.65c-.5 0-.85.5-.85 1a3 3 0 1 1-6 0c0-.5-.35-1-.85-1H5.5A1.5 1.5 0 0 1 4 11.5v-6Z"
                              clip-rule="evenodd"
                              class=""
                            ></path>
                          </svg>
                        </p>
                        <p className="p-3 hover:text-white cursor-pointer">
                          <svg
                            x="0"
                            y="0"
                            class="icon_ae0b42"
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              fill="transparent"
                              class=""
                            ></circle>
                            <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-.28-16c-.98 0-1.81.47-2.27 1.14A1 1 0 1 1 7.8 7.01 4.73 4.73 0 0 1 11.72 5c2.5 0 4.65 1.88 4.65 4.38 0 2.1-1.54 3.77-3.52 4.24l.14 1a1 1 0 0 1-1.98.27l-.28-2a1 1 0 0 1 .99-1.14c1.54 0 2.65-1.14 2.65-2.38 0-1.23-1.1-2.37-2.65-2.37ZM13 17.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
                              clip-rule="evenodd"
                              class=""
                            ></path>
                          </svg>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row min-h-[600px] w-[100%] min-w-[901px]  h-full">
                    <div className="h-full flex flex-col w-[80%]">
                      <div className="bg-[#313338] min-h-[150px] h-[10%] w-full border-[] border-b-[1px]  border-t-0 min-w-[540px] border-l-0 border-r-[1px]">
                        <div className="p-4">
                          <p className="text-white">ADD FRIEND</p>
                          <p className="text-[#B5BAC1]">
                            You can add friends using Discord usernames
                          </p>

                          <form onSubmit={submitfriendrequest}>
                            <div className="flex items-center w-full">
                              <input
                                onChange={handlesendvaluechange}
                                className="h-12 w-full min-w-[520px] rounded-md mt-2 p-2 bg-[#1E1F22] text-white outline-none placeholder-[#ABAAA3]"
                                placeholder="You can add friends using Discord usernames"
                                type="text"
                              />
                              <div className="flex items-center justify-center h-10">
                                <button
                                  type="Submit"
                                  className="h-8 text-white rounded-sm hover:cursor-pointer hover:bg-black hover:opacity-20 mt-2 w-[150px] -ml-[200px] bg-[#4752C4] relative text-custom1"
                                >
                                  Send Friend Request
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="bg-[#313338] h-full w-full border-[] border-b-[]  border-t-0 border-l-0 border-r-[1px]">
                        <div className="flex items-center justify-center p-10 ">
                          <Image
                            className="w-[500px]"
                            src={img2}
                            alt=""
                          ></Image>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#313338] h-full w-[40%]">
                      <div className="p-4 text-white">
                        <p className="font-bold text-xl">Active Now</p>
                        <div className="p-3 text-center">
                          <p className="">It's quite for now...</p>
                          <p className="text-custom1 text-[#B1B5BC] ml-10 p-2 mr-10">
                            When a Friend Starts an activity - like playing a
                            game or hanging out on voice - we'ill show it here!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {infinitypage && (
              <div className=" h-screen w-full text-black bg-blue-800"></div>
            )}
            {shoppage && (
              <div className=" h-screen w-full text-black bg-black"></div>
            )}
            {messagepage && (
              <div
                id="me3"
                className=" h-screen w-full min-h-[450px] text-black bg-[#313338]"
              >
                <div className="flex flex-col h-full">
                  <div className="bg-black h-10 w-full"></div>
                  <div className="flex h-full flex-row">
                    <div className="bg-[#313338] flex flex-col h-full w-[80%]">
                      {/* changable div */}

                      <div className="p-10"></div>
                      <div className="h-full">
                        <div className="h-full relative w-full" id="scroll messages">
                          <div className="absolute bottom-0 w-full">
                            <div className="mb-5 p-2 w-full" id="container">
                              <div className="text-white font-bold text-lg"></div>
                              <div
                                style={{
                                  scrollbarWidth: "thin",
                                  scrollbarColor: "#313338 #1E1F22",
                                }}
                                className="h-[80vh] w-full overflow-y-scroll"
                              >
                                <div id="message inside changable div">
                                  <div
                                    className="p-10 text-white w-full font-bold text-2xl"
                                    id="upper div"
                                  >
                                    <img
                                      className="h-20"
                                      src="https://cdn.logojoy.com/wp-content/uploads/20210422095037/discord-mascot.png"
                                      alt=""
                                    />
                                    <p className="mt-3 text-3xl">
                                      {currentchatuser}
                                    </p>
                                    <p className="mt-3 font-normal">
                                      {currentchatuser} @ ID
                                    </p>
                                    <p className="text-sm font-normal mt-3">
                                      This is the begining of your direct
                                      message with {currentchatuser}.
                                    </p>
                                  </div>
                                </div>
                                <div className="h-[50vh] relative">
                                {dataRef.current[currentchatuser].map(
                                  (item, index) => {
                                    if (Array.isArray(item)) {
                                      if (checkref1.current == 0) {
                                        checkref2.current = 0;
                                        checkref1.current += 1;

                                        return (
                                          <div id="my4"
                                          style={{ bottom: `${index * 4}rem` }}
                                            className="text-[#DBDEE1] absolute bottom-0 z-20 flex mt-10 items-center justify-left   text-md p-1 ml-2"
                                            key={index}
                                          >
                                            <div>
                                              <div className="flex">
                                              <Image
                                                  className="h-10 rounded-3xl ml-1 w-10"
                                                  src={img3}
                                                  alt=""
                                                ></Image>
                                                <h1 className="flex items-center justify-center font-bold text-lg ml-2">{currentchatuser}</h1>
                                                
                                              </div>
                                              {" "}
                                             
                                              <h1 className=" ml-12 text-md p-1">{item}</h1>
                                            </div>
                                          </div>
                                        );
                                      } else {
                                        checkref1.current += 1;
                                        return (
                                          <div id="my3"
                                          style={{ bottom: `${index * 4}rem` }}
                                            className="text-[#DBDEE1] absolute bottom-0 justify-left text-lg text-md p-1 ml-2"
                                            key={index}
                                          >
                                            <h1 className=" ml-12 text-md p-1">{item}</h1>
                                          </div>
                                        );
                                      }
                                    } else if (item != "") {
                                      {
                                        console.log(
                                          checkref2.current,
                                          "checkvefwew"
                                        );
                                      }
                                      // checkref1.current = 0;
                                      if (checkref2.current == 0) {
                                        checkref2.current += 1;
                                        {
                                          console.log(
                                            checkref2.current,
                                            "asdhkhkhkhkhkhkhkhkhkhkhkhkhkhkhk"
                                          );
                                        }
                                        return (
                                          <div id="my2"
                                          style={{ bottom: `${index * 4}rem` }}
                                            className="text-[#59a9f9] mt-10  text-md p-1 absolute bottom-0 ml-2"
                                            key={index}
                                          >
                                            <div>
                                              <div className="flex">
                                              <Image
                                                  className="h-10 rounded-3xl ml-1 w-10"
                                                  src={img3}
                                                  alt=""
                                                ></Image>
                                               
                                                <h1 className="flex items-center justify-center text-xl ml-2">{currentuser} {" "}{"(You)"}</h1>

                                              </div>
                                              <h1 className=" ml-12 text-md p-1">{item}</h1>
                                            </div>
                                          </div>
                                        );
                                      } else {
                                        checkref2.current += 1;
                                        return (
                                          <div id="my1"
                                          style={{ bottom: `${index * 4}rem` }}
                                            className="text-[#59a9f9] absolute bottom-0  text-md p-1 ml-2"
                                            key={index}
                                          >
                                           <h1 className="text-md ml-12 p-1">{item}</h1>
                                          </div>
                                        );
                                      }
                                    } else {
                                      checkref2.current = 0;
                                    
                                    }
                                  }
                                )}
                                </div>
                                
                              </div>

                              {/* <div
                                style={{
                                  scrollbarWidth: "thin",
                                  scrollbarColor: "#313338 #1E1F22",
                                }}
                                className="max-h-[500px] overflow-y-scroll"
                              >
                                {receivedref.current.reverse().map((item, index) => (
                                  <div
                                    className="text-[#DBDEE1] text-md p-1 ml-2"
                                    key={index}
                                  >
                                    {item}
                                  </div>
                                ))}
                              </div> */}
                            </div>{" "}
                            <form onSubmit={addnewdiv}>
                              <input
                                onChange={setnewmessage}
                                value={storemessage}
                                placeholder={currentuser}
                                type="text"
                                className="h-[50px] p-2 w-full text-white shadow-xl rounded-md bg-[#383A40]"
                              />
                              <button
                                type="submit"
                                className="hover:text-white cursor-pointer"
                              >
                                SEND
                              </button>
                              <button></button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-500 h-full w-[30%]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {openpopup && (
            <div
              id="openpopup"
              className="absolute z-10 top-0 flex w-full h-full items-center justify-center"
            >
              <div
                onClick={openpopupmain}
                className="absolute inset-0 bg-black opacity-60"
              ></div>

              <div className="bg-[#2B2D31] z-20 h-[370px] rounded-md w-[550px]">
                <p className="flex justify-center -mt-10 text-lg">
                  Search for Channles and Group Channels
                </p>

                <div className="flex justify-center">
                  <input
                    placeholder="Where would you like to go?"
                    className="h-[75px] placeholder-[#87898A] p-4 bg-[#1E1F22] text-xl text-white rounded-sm w-[500px] outline-none mt-7"
                    type="text"
                  />
                </div>

                <div className=" h-[200px] mt-6 ml-6 mr-6">
                  <li
                    style={{
                      scrollbarWidth: "thin",
                      scrollbarColor: "#313338 #1E1F22",
                    }}
                    className=" h-[200px] list-none overflow-y-scroll"
                  >
                    <div className="">
                      <button onClick={handleLogout}>Logout</button>
                      <p className="p-3 text-[#B5BAC1] font-bold text-custom1">
                        PREVIOUS CHANNELS
                      </p>
                      <ul className="h-[40px] cursor-pointer rounded-md p-3 mb-1 items-center flex hover:bg-[#404249]">
                        # general
                      </ul>
                      <ul className="h-[40px] cursor-pointer rounded-md p-3 mb-1 items-center flex hover:bg-[#404249]">
                        # general
                      </ul>
                    </div>
                    <div className="">
                      <p className="p-3 text-[#B5BAC1] font-bold text-custom1">
                        GROUP CHANNELS
                      </p>
                      <ul className="h-[40px] cursor-pointer rounded-md p-3 mb-1 items-center flex hover:bg-[#404249]">
                        # general
                      </ul>
                      <ul className="h-[40px] cursor-pointer rounded-md p-3 mb-1 items-center flex hover:bg-[#404249]">
                        # general
                      </ul>
                    </div>
                  </li>
                </div>
              </div>
            </div>
          )}
          {/* friendrequest */}
          {friendrequest && (
            <div
              id="openpopup"
              className="absolute z-10 top-0 flex w-full h-full items-center justify-center"
            >
              <div
                onClick={() => {
                  setfriendrequest(false);
                }}
                className="absolute inset-0 bg-black opacity-60"
              ></div>

              <div className="bg-[#2B2D31] z-20 h-[370px] rounded-md w-[550px]">
                <div className="flex flex-col p-10 justify-center">
                  <div className="text-xl flex justify-center">
                    Friend Request
                  </div>
                  <div className="h-[230px] rounded-md w-full mt-5 flex justify-center bg-[#1E1F22]">
                    {!loader && (
                      <div className="flex items-center justify-center ">
                        <p className="mr-4">Loading...</p>
                        <img
                          className="h-5 animate-spinSlow"
                          src="https://freesvg.org/img/1544764567.png"
                          alt=""
                        />
                      </div>
                    )}
                    {loader && (
                      <div className="flex items-center gap-x-3">
                        <div
                          style={{
                            scrollbarWidth: "none",
                            scrollbarColor: "#313338 #2B2D31",
                          }}
                          className="h-[200px] overflow-hidden hover:overflow-y-scroll"
                        >
                          {arrayfriends.map((name, index) => (
                            <li
                              key={index}
                              className="list-none bg-[#404249] h-10 w-[230px] flex items-center rounded-sm mb-2 hover:bg-[#35373C]"
                            >
                              <ul className="h-10 w-[230px] p-2">
                                <div className="flex">
                                  {name}
                                  <div className="flex gap-x-5 ml-auto">
                                    <p
                                      onClick={() => {
                                        setpermavaluesend(name);
                                        setchangeperma(!changeperma);
                                        // console.log("sendparmaserver");
                                      }}
                                      className="text-green-500 font-bold hover:text-green-800 cursor-pointer"
                                    >
                                      A
                                    </p>
                                    <p className="text-red-500 font-bold hover:text-red-800 cursor-pointer">
                                      R
                                    </p>
                                  </div>
                                </div>
                              </ul>
                            </li>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Loggedin;
