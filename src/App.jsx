import React from 'react'

function App() {
  return (
    <>
      <header>
        <h1>Kiezu01 Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
            Hi! I’m Kiezu01, a developer passionate about building web apps and solving real-world problems with code.
          </p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <ul className="project-list">
            <li>
              <h3>Awesome Project 1</h3>
              <p>
                Description of your project. What problem does it solve? What technologies did you use?
              </p>
              <a href="https://github.com/kiezu01/awesome-project-1" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </li>
            <li>
              <h3>Awesome Project 2</h3>
              <p>
                Another project description. Highlight your role and what you learned!
              </p>
              <a href="https://github.com/kiezu01/awesome-project-2" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>
            You can reach me at <a href="mailto:your.email@example.com" className="contact-link">your.email@example.com</a>
          </p>
        </section>
      </main>
      <footer>
        &copy; {new Date().getFullYear()} Kiezu01
      </footer>
    </>
  )
}

export default App