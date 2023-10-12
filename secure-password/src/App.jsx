import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*(){>";

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, char, setPassword]);

  const passwordRef = useRef(null);
  useEffect(() => { 
   passwordGenerator()
  }, [length,number,,char,passwordGenerator])
  
  const copytoClipBoard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,30);
    window.navigator.clipboard.writeText(password)

  },[password])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg my-8 text-orange-500 bg-gray-700 px-4 py-3">
        Password-Generator
        <div className="flex shadow rounded-lg overflow-hidden md-4">
          <input
            type="text"
            value={password}
           ref={passwordRef}
            className="outline-none w-full py-1 px-3 "
            placeholder="password"
            readOnly
          />
          <button  onClick={copytoClipBoard} className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 ">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              name=""
              max={20}
              id=""
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name=""
              id="numberId"
              defaultChecked={number}
              onChange={()=>{
                setNumber((prev)=>!prev)
              }}
            />
            <label htmlFor="">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name=""
              id="checkboxId"
              defaultChecked={char}
              onChange={()=>{
                setChar((prev)=>!prev)
              }}
            />
            <label htmlFor="">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
