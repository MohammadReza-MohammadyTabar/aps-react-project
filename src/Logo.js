function Logo({ appName, handelClick }) {
  //   const appName = "DaeiGhezii";

  return (
    <header>
      <h1>
        wellcome to <strong style={{ fontSize: "50px" }}>{appName}</strong> Web
        page
      </h1>
      <img
        onClick={handelClick}
        style={{
          width: "100px",
        }}
        src="https://archives.bulbagarden.net/media/upload/thumb/0/09/0698Amaura.png/250px-0698Amaura.png"
        alt="dfa"
      />
      {console.log(appName)}
    </header>
  );
}

export default Logo;
