const Projects = () => {
  return (
    <>
      {/* <!-- Projects Section --> */}
      <section id="project_section">
        <div id="p_heading">
          <h1>Projects</h1>
        </div>
        <div>
          <div id="project">
            <div id="p1">
              <h3>Project 1: Personal Portfolio Website</h3>
              <p>
                Developed a responsive personal portfolio website using HTML,
                CSS, and JavaScript to showcase my skills and projects.
                Implemented smooth scrolling and interactive elements to enhance
                user experience.
              </p>
              <a
                href="./index.html"
                target="_blank"
                style={{ textdecoration: "none" }}
              >
                Preview
              </a>
            </div>

            <div id="P2">
              <h3>Project 2: Restaurant </h3>
              <p>
                Created a simple Restaurant application using HTML, CSS, and
                JavaScript. The app allows users to view a menu and Responsive
                design for optimal viewing on different devices.
              </p>
              <a
                href="https://asian-restaurant-rose.vercel.app/"
                target="_blank"
                style={{ textdecoration: "none" }}
              >
                Preview
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Projects;
