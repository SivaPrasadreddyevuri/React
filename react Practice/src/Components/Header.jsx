const Head = () => {
  return (
    <>
      <nav id="nav_btn">
        <details>
          <summary>
            <div></div>
            <div></div>
            <div></div>
          </summary>

          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#Skill">Skills</a>
            </li>
            <li>
              <a href="#project_section">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </details>
      </nav>

      {/* <!-- Navbar Section --> */}
      <nav id="navbar">
        <a href="">
          <h1>Portfolio</h1>
        </a>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#Skill">Skills</a>
          </li>
          <li>
            <a href="#project_section">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </nav>

    
    </>
  );
};
export default Head;
