const Header = ({title}) => {
  return (
    <header>
      <div className="container mx-auto bg-sky-300 p-3">
        <h1 className="font-bold text-2xl">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
