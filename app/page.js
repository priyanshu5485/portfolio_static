const stack = ["Python", "PySpark", "SQL", "Databricks", "GCP", "BigQuery"];

const metrics = [
  ["40%+", "faster data processing"],
  ["75%", "storage reduction"],
  ["60%", "less manual ETL/testing"],
  ["1000+", "datasets processed"]
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#">Priyanshu<span> Kr</span></a>
        <div className="navLinks">
          <a href="#experience">Experience</a>
          <a href="#stack">Stack</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="menu" aria-label="Open menu">☰</button>
      </nav>

      <section className="hero shell">
        <div className="heroCopy">
          <div className="eyebrow"><span className="pulse" /> SYSTEM ONLINE</div>
          <p className="role">SENIOR DATA ENGINEER</p>
          <h1>I BUILD THE<br /><span>SYSTEMS THAT</span><br />MOVE DATA.</h1>
          <p className="intro">
            I design scalable data pipelines, distributed processing workflows
            and cloud data platforms that turn complex data into reliable systems.
          </p>
          <div className="actions">
            <a className="button primary" href="#projects">View my work <span>↗</span></a>
            <a className="button" href="/resume.pdf">Download resume</a>
          </div>
        </div>

        <div className="heroVisual">
          <div className="hud hudTop">ENGINEER_ID: kr.priyanshu</div>
          <div className="memojiFrame">
            <div className="orbit orbit1" />
            <div className="orbit orbit2" />
            <img
              src="/memoji.png"
              alt="Kumar Priyanshu"
              className="memojiImage"
            />
            <div className="scan" />
          </div>
          <div className="hud hudBottom">LOCATION: BENGALURU · STATUS:<span className="statusDot"></span>ACTIVE</div>
        </div>
      </section>

      <section className="pipeline shell">
        <div className="sectionLabel">01 / DATA FLOW</div>
        <div className="pipelineTrack">
          {[
            ["01", "SOURCE", "CSV / API / STREAMING"],
            ["02", "INGESTION", "PYTHON / ETL"],
            ["03", "PROCESSING", "PYSPARK / SPARK"],
            ["04", "STORAGE", "DATABRICKS / DELTA"],
            ["05", "ANALYTICS", "BIGQUERY / LOOKER"]
          ].map((item, i) => (
            <div className="nodeWrap" key={item[0]}>
              <div className="node">
                <small>{item[0]}</small>
                <b>{item[1]}</b>
                <span>{item[2]}</span>
              </div>
              {i < 4 && <div className="connector"><i /></div>}
            </div>
          ))}
        </div>
      </section>

      <section className="metrics shell">
        {metrics.map(([value, label]) => (
          <div className="metric" key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section id="experience" className="section shell">
        <div className="sectionLabel">02 / EXPERIENCE</div>
        <article className="experienceCard">
          <div className="timelineDot" />
          <div>
            <p className="company">CARDINAL HEALTH</p>
            <h2>Senior Data Engineer</h2>
            <p className="date">MAR 2026 — PRESENT</p>
            <p className="muted">Current role. Responsibilities and impact can be added once provided.</p>
          </div>
        </article>
        <article className="experienceCard">
          <div className="timelineDot-inactive" />
          <div>
            <p className="company">LTIMINDTREE</p>
            <h2>Senior Data Engineer</h2>
            <p className="date">AUG 2022 — PRESENT · BENGALURU</p>
            <p className="muted">
              Built and optimized large-scale data pipelines using PySpark, Python,
              PL/SQL and Hive; worked with multi-terabyte datasets, cloud migration,
              automation and scalable ETL workflows.
            </p>
          </div>
        </article>
      </section>

      <section id="stack" className="section shell">
        <div className="sectionLabel">03 / TECHNOLOGY</div>
        <div className="stackGrid">
          {stack.map((item, i) => (
            <div className="stackCard" key={item}>
              <span>0{i + 1}</span><b>{item}</b><i>↗</i>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section shell">
        <div className="sectionLabel">04 / PROJECTS</div>
        <article className="projectCard">
          <div>
            <p className="company">FEATURED PROJECT</p>
            <h2>Retail Analytics Data Pipelines</h2>
            <p className="muted">
              PySpark and SQL pipelines integrating multiple data sources,
              processing more than 5TB of data and generating insights for
              product performance and customer behavior.
            </p>
          </div>
          <div className="projectTags"><span>PYSPARK</span><span>SQL</span><span>5TB+</span></div>
        </article>
      </section>

      <footer id="contact" className="footer shell">
        <div>
          <div className="sectionLabel">05 / CONTACT</div>
          <h2>Let's build something<br /><span>data-driven.</span></h2>
        </div>
        <div className="contactLinks">
          <a href="mailto:kr.priyanshu0309@gmail.com">Email ↗</a>
          <a href="https://www.linkedin.com/" target="_blank">LinkedIn ↗</a>
        </div>
      </footer>
    </main>
  );
}
