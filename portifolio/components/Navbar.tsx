import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="text-cyan-400 p-10 flex justify-between align-middle ">
      <div>
        <h1 className="text-lg  font-bold">Mr.Patrick’s  </h1>
      </div>
      <div className="">
        <ul className="list-none flex flex-cols gap-14 capitalize align-middle text-lg ">
          <li>
            <Link href="#home" scroll={false}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" scroll={false}>
              About
            </Link>
          </li>
          <li>
            <Link href="#contact" scroll={false}>
              Contact
            </Link>
          </li>
            <li>
            <Link href="#contact" scroll={false}>
             skills
            </Link>
          </li>
        </ul>
      </div>
      <div className=" border-2 border-gray-200  rounded-2xl align-middle">
        <button className="p-2 capitalize">download cv</button>
      </div>
    </nav>
  );
}
