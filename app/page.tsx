const grades = [
  { label: "8th", title: "Look around", text: "Notice what classes, topics, and activities make you curious." },
  { label: "9th", title: "Try things", text: "Build habits, choose solid classes, and sample clubs without pressure." },
  { label: "10th", title: "Adjust", text: "Keep what fits, drop what does not, and add one deeper interest." },
  { label: "11th", title: "Deepen", text: "Take stronger courses where ready and start comparing college/career options." },
  { label: "12th", title: "Choose next step", text: "Apply, decide, and remember your path can still change later." },
];

const roadmap = [
  {
    grade: "9th Grade",
    focus: "Foundation year",
    items: ["Pick balanced freshman classes", "Join 1–2 clubs or teams", "Practice study routines", "Start a simple brag sheet"],
  },
  {
    grade: "10th Grade",
    focus: "Experiment year",
    items: ["Try an elective connected to an interest", "Consider honors/AP only where healthy", "Volunteer or start a small project", "Reflect on what you want less/more of"],
  },
  {
    grade: "11th Grade",
    focus: "Direction year",
    items: ["Plan challenging but realistic courses", "Explore college lists and majors", "Take SAT/ACT only if useful", "Ask mentors about careers"],
  },
  {
    grade: "12th Grade",
    focus: "Decision year",
    items: ["Finish applications or alternate plans", "Compare fit, cost, and support", "Celebrate growth", "Keep a backup path open"],
  },
];

const ag = [
  ["English", "3 / 4 years", 75],
  ["Math", "3 / 4 recommended", 75],
  ["Science", "2 / 3 recommended", 67],
  ["Language", "2 / 3 recommended", 67],
  ["Arts", "1 / 1 year", 100],
  ["College prep elective", "0 / 1 year", 15],
];

const checks = {
  "8th Grade": ["Learn your future high school's course options", "Choose freshman classes", "Explore clubs, sports, arts, and service", "Set up a flexible goals list"],
  "9th Grade": ["Keep grades steady", "Try activities before specializing", "Meet your counselor", "Update your plan each semester"],
};

export default function Home() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="logo"><span className="logo-mark">PV</span><span>Path Visualizer</span></div>
        <nav className="nav" aria-label="Main sections">
          <a href="#dashboard">Dashboard</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#courses">A-G Courses</a>
          <a href="#careers">Careers</a>
          <a href="#checklist">Checklist</a>
        </nav>
        <div className="sidebar-note">Built for exploring: plans are drafts, not contracts. You can revise the path whenever you learn more about yourself.</div>
      </aside>

      <main>
        <section className="hero" id="dashboard">
          <div className="card">
            <div className="eyebrow">Incoming 8th grade • Bay Area friendly</div>
            <h1>Plan high school without locking yourself into one future.</h1>
            <p>
              A visual planner for classes, activities, college ideas, and career possibilities — designed around the fact that you are still growing, changing, and discovering what fits.
            </p>
            <div className="hero-actions">
              <a className="btn" href="#roadmap">Start with the roadmap</a>
              <a className="btn secondary" href="#careers">Explore possibilities</a>
            </div>
          </div>
          <div className="card">
            <h2>Malleable by design</h2>
            <div className="flexibility-list">
              <div className="flex-item"><strong>Branching paths</strong><span>Keep several possible futures open instead of choosing one too early.</span></div>
              <div className="flex-item"><strong>Semester resets</strong><span>Review what changed, then edit your plan without feeling behind.</span></div>
              <div className="flex-item"><strong>Fit over prestige</strong><span>Compare options by energy, support, cost, curiosity, and health.</span></div>
            </div>
          </div>
        </section>

        <section className="section card">
          <h2>Your journey timeline</h2>
          <div className="journey">
            {grades.map((grade) => (
              <div className={`grade-step ${grade.label === "8th" ? "active" : ""}`} key={grade.label}>
                <span className="badge">{grade.label}</span>
                <h3>{grade.title}</h3>
                <p>{grade.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section card" id="roadmap">
          <h2>Flexible 4-year high school roadmap</h2>
          <div className="roadmap-grid">
            {roadmap.map((year) => (
              <article className="grade-card" key={year.grade}>
                <span className="badge">{year.focus}</span>
                <h3>{year.grade}</h3>
                <ul>{year.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section card" id="courses">
          <h2>California A-G course snapshot</h2>
          <p>Use this as a visual guide, then confirm exact rules with your school counselor because offerings vary by high school.</p>
          <div className="progress-grid">
            {ag.map(([name, status, pct]) => (
              <div className="progress-row" key={name as string}>
                <div className="progress-top"><span>{name}</span><span>{status}</span></div>
                <div className="bar"><span style={{ width: `${pct}%` }} /></div>
              </div>
            ))}
          </div>
        </section>

        <section className="section card" id="careers">
          <h2>Possibility explorer</h2>
          <div className="explorer">
            <div>
              <p>Pick interests now, swap them later. Your future can be a mix.</p>
              <div className="chips">
                {[
                  "Computer science", "Design", "Health", "Business", "Law", "Education", "Media", "Environment", "Trades", "Undecided"
                ].map((chip) => <span className="chip" key={chip}>{chip}</span>)}
              </div>
            </div>
            <div className="path-card">
              <h3>Example: curious about technology</h3>
              <ul>
                <li>High school: math each year, coding/robotics club, small personal projects.</li>
                <li>College: computer science, data science, design, cognitive science, or business.</li>
                <li>Careers: software, product design, cybersecurity, research, entrepreneurship.</li>
              </ul>
              <p>Not sure yet? That is normal. This planner keeps options visible.</p>
            </div>
          </div>
        </section>

        <section className="section card" id="checklist">
          <h2>Near-term checklist</h2>
          <div className="checklist">
            {Object.entries(checks).map(([grade, items]) => (
              <div className="grade-card" key={grade}>
                <h3>{grade}</h3>
                {items.map((item) => <div className="check" key={item}><span className="box" /> <span>{item}</span></div>)}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
