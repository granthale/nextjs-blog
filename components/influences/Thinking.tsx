import ExternalArrow from "../ExternalArrow";

const Thinking = () => {
  return (
    <ul className="ml-4">
      <li>
        <a
          href="https://theamericanscholar.org/solitude-and-leadership/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Solitude and Leadership
          <ExternalArrow />
        </a>
      </li>
      <li>
        <a
          href="https://notes.andymatuschak.org/It%E2%80%99s_hard_to_hear_yourself_think"
          target="_blank"
          rel="noopener noreferrer"
        >
          It's hard to hear yourself think
          <ExternalArrow />
        </a>
      </li>
      <li>
        <a
          href="https://www.amazon.in/Thinking-Physics-Gedanken-Lewis-Epstein/dp/0935218084"
          target="_blank"
          rel="noopener noreferrer"
        >
          Thinking Physics
          <ExternalArrow />
        </a>
      </li>
    </ul>
  );
};

export default Thinking;
