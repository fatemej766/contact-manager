import SearchContact from "./SearchContact";
const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-sm shadow-lg">
      <div className="container">
        <div className="row w-100">
          <div className="col">
            <h3> وب اپلیکیشن مدیریت{"  "}</h3>
            <h3 style={{ color: "purple" }}>مخاطبین</h3>
          </div>
          <div className="col">
            <SearchContact
             
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
