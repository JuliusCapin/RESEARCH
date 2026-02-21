import Image from "next/image";

export default function Home() {
  return (
    <div>
      Think++ <br />
      A quiz app designed for comscie students only.
      <button onClick={() => 
        alert("Hello World!")}>
          About
          </button>
    </div>
  );
}
