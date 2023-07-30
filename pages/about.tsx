import Layout from "../components/Layout";
import Link from "next/link";
import Header from "../components/Header";

export default function About() {
  const sidebar = (
    <div className="text-neon-green font-bold text-3xl">About me</div>
  );

  const locations = [
    { month: "May", location: "Chicago" },
    {
      month: "June",
      location: "Iceland, Amsterdam, Norway, London, France, and Italy",
    },
    { month: "July", location: "San Francisco" },
    { month: "August", location: "San Francisco, Chicago" },
    { month: "September", location: "China (?)" },
    { month: "October", location: "Japan (?)" },
    { month: "November", location: "India (?)" },
    { month: "December", location: "Spain (?)" },
  ];
  const main_color = "text-reddish";
  return (
    <>
      <Header page="about" />
      <Layout>
        <h1 className={`font-extrabold ${main_color} text-4xl`}>about!</h1>
        <br />
        <p className={`font-bold ${main_color} text-xl`}>
          I'm currently living in San Francisco, reading about China's history,
          and making an effort to truly think everyday.
        </p>
        <br />
        <p className="text-gray text-xl">
          In my freetime, I love to read, spend time with friends, play sports,
          write both{" "}
          <Link className="underline hover:text-neon-green" href="/writing">
            words
          </Link>{" "}
          and{" "}
          <Link
            className="underline hover:text-neon-green"
            href="https://github.com/granthale"
            target="_blank"
          >
            code
          </Link>
          , and run.
        </p>
        <br />
        <p className="text-gray text-xl">
          I recently graduated in May 2023 from the{" "}
          <span className="font-bold">University of Illinois</span>.
        </p>
        <p className="text-gray text-xl">
          <span className="font-bold">College is not outdated.</span> I truly
          don't know where I would be without the people I met and the
          (main)character that I developed.
        </p>
        <br />
        <h3 className={`font-bold ${main_color} text-3xl`}>time & location</h3>
        <br />
        <p className="text-gray text-xl">
          I've got ~
          <span className="font-bold">
            {Math.round(
              (new Date("2024-01-01").getTime() - new Date().getTime()) /
                (1000 * 60 * 60 * 24)
            ) + 1}{" "}
            days and counting{" "}
          </span>
          until I start work for Boston Consulting Group as an Associate. Here
          is where I'll be from now until then:
        </p>
        <br />
        {locations.map((location) => (
          <>
            <div className="text-gray text-xl">
              <span className="font-bold">{location.month}:</span>{" "}
              {location.location}
            </div>
          </>
        ))}
        <br />
        <h3 className={`font-bold ${main_color} text-3xl`}>energy</h3>
        <br />
        <p className="text-gray text-xl">
          Here are the things that I'm currently putting energy into:
        </p>
        <br />
        <ul className="list-disc text-gray pl-5 text-xl">
          <li>
            Recording podcast episodes for{" "}
            <Link
              href="https://podcasters.spotify.com/pod/show/surfacetensionpod"
              className="underline hover:text-neon-green"
              target="_blank"
            >
              Surface Tension
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href="https://treetoforest.substack.com/"
              target="_blank"
              className="underline hover:text-neon-green"
            >
              Writing
            </Link>{" "}
            @ least 15 minutes a day - ideally closer to an hour
          </li>
          <li>
            Reading like a madman (mostly history, science, and biographies).
          </li>
        </ul>

        <br />
        <h3 className={`font-bold ${main_color} text-3xl`}>contact</h3>
        <br />
        <p className="text-gray text-xl">
          I'm always looking to meet new people and learn new things. If you'd
          like to chat, reach me on{" "}
          <Link
            className="underline hover:text-neon-green"
            href="https://twitter.com/grant__hale"
            target="_blank"
          >
            Twitter
          </Link>{" "}
          or by{" "}
          <Link
            className="underline hover:text-neon-green"
            href="mailto:g@granthale.com"
          >
            email
          </Link>
          !
        </p>
      </Layout>
    </>
  );
}
