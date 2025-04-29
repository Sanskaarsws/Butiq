import "./Header.css";

export default function Header({ title, bannerImg }) {
  return (
    <header className="header_container">
      <figure className="h-[60vh] md:h-[85vh]">
        <img src={bannerImg} alt="" />
        <h1 className="text-[10vw] md:text-[4rem]">{title}</h1>
      </figure>
    </header>
  );
}
