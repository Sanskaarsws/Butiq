import "./Header.css";

export default function Header({ title, bannerImg }) {
  return (
    <header className="header_container">
      <figure>
        <img src={bannerImg} alt="" />
        <h1>{title}</h1>
      </figure>
    </header>
  );
}
