import omniTech from "../assets/omni-tech-full.svg";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-black flex items-center px-10 z-40">
      <img
        src={omniTech}
        alt="OMNI TECH"
        className="h-12"
      />
    </header>
  );
}
