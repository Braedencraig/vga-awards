/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Slideshow from "../components/slideshow";
import { Person } from "../components/person";
import YouTube from "react-youtube";
import styles from "../styles/Home.module.css";
import rgtLogo from "../public/rgt.png";
import ablegamers from "../public/ablegamers.webp";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Video Game Accessibility Awards</title>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container">
        <div className="logo">
          <img src="/logo.png" alt="Video Game Accessibility Awards" />
        </div>
        <h1>Video Game Accessibility Awards</h1>
        <h2>Livestream on March 12, 2022</h2>
        <h3>
          A livestream, game award show that aims to spotlight video games and companies that are making a clear and conscious effort with
          their accessibility options. Join us on{" "}
          <a href="http://twitch.tv/twitch" target="_blank" rel="noopener noreferrer">
            twitch.tv/twitch
          </a>{" "}
          on March 12 at 2 PM PT.
        </h3>
        <div className="socials">
          <a href="https://www.instagram.com/vgaawards/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://twitter.com/vgaawards?lang=en" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </div>
      </div>
      <Slideshow />
      <div className="lastyear">
        <h2>Last Year’s Show </h2>
        <YouTube videoId={"WXcnVqmXG3E"} />
      </div>
      <div className="hosts">
        <h2>Meet your Hosts</h2>
        <div className="host-container">
          <Person
            name={"Alanah Pearce"}
            socials={{
              instagram: "https://www.instagram.com/charalanahzard/?hl=en",
              youtube: "https://www.youtube.com/c/CharAlanahZard",
              twitch: "https://www.twitch.tv/charalanahzard",
              twitter: "https://twitter.com/charalanahzard",
            }}
            bio={`Alanah is a Youtuber, Twitch streamer, and video game writer at Sony's Santa Monica Studio.`}
            image={"/alanah.jpg"}
          />
          <Person
            name={"Steve Spohn"}
            socials={{
              website: "https://stevespohn.com/",
              twitter: "https://twitter.com/stevenspohn?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
            }}
            bio={`Steve is the Senior Director of Development at AbleGamers.`}
            image={"/steve.jpg"}
          />
        </div>
      </div>
      <div className="presenters">
        <h2>Meet Our Presenters</h2>
        <div className="host-container">
          <Person
            name={"Ryan Reynolds"}
            socials={{
              instagram: "https://www.instagram.com/vancityreynolds/",
              youtube: "https://www.youtube.com/channel/UCA3-nIYWu4PTWkb6NwhEpzg",
              twitter: "https://twitter.com/VancityReynolds?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
            }}
            image={"/ryanreynolds.jpg"}
          />
          <Person
            name={"ThatJayJustice"}
            socials={{
              twitch: "https://www.twitch.tv/thatjayjustice",
              instagram: "https://www.instagram.com/thatjayjustice/?hl=en",
              youtube: "https://www.youtube.com/ThatJayJustice",
              twitter: "https://twitter.com/thatjayjustice?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
            }}
            image={"/jay.jpg"}
          />
          <Person
            name={"NoHandsNoExcuses"}
            socials={{
              twitch: "https://www.twitch.tv/nohandsnz",
              instagram: "https://www.instagram.com/nohandsnz/?hl=en",
              twitter: "https://twitter.com/nohandsnoexcuse?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
            }}
            image={"/nohandsnoexcuses.jpg"}
          />
          <Person
            name={"NegaoryX"}
            socials={{
              twitch: "https://www.twitch.tv/negaoryx",
              youtube: "https://www.youtube.com/c/negaoryx",
              instagram: "https://www.instagram.com/negaoryx/?hl=en",
              twitter: "https://twitter.com/negaoryx?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
            }}
            image={"/negaory.png"}
          />
          <Person
            name={"Tiffany Witcher"}
            socials={{
              twitch: "https://www.twitch.tv/tiffanywitcher",
              youtube: "https://www.youtube.com/TiffanyWitcher",
              instagram: "https://www.instagram.com/_tiffanywitcher/?hl=en",
              twitter: "https://mobile.twitter.com/TiffanyWitcher",
            }}
            image={"/tiffanywitcher.jpg"}
          />
          <Person
            name={"DeafGamersTV"}
            socials={{
              twitch: "https://www.twitch.tv/deafgamerstv",
              youtube: "https://www.youtube.com/c/DeafGamersTV/featured",
              instagram: "https://www.instagram.com/deafgamerstv/?hl=en",
              twitter: "https://twitter.com/DeafGamersTV?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
            }}
            image={"/deafgamerstv.jpg"}
          />
          <Person
            name={"Jacksepticeye"}
            socials={{
              twitch: "https://www.twitch.tv/jacksepticeye",
              instagram: "https://www.instagram.com/jacksepticeye/?hl=en",
              youtube: "https://www.youtube.com/channel/UCYzPXprvl5Y-Sf0g4vX-m6g",
              twitter: "https://twitter.com/Jacksepticeye?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
            }}
            image={"/jack.png"}
          />
          <Person
            name={"Crankgameplays"}
            socials={{
              twitch: "https://www.twitch.tv/crankgameplays",
              youtube: "https://www.youtube.com/c/CrankGame",
              twitter: "https://twitter.com/CrankGameplays",
              instagram: "https://www.instagram.com/crankgameplays/",
            }}
            image={"/crank.jpg"}
          />
          <Person
            name={"Dr. Lupo"}
            socials={{
              twitch: "https://www.twitch.tv/drlupo",
              instagram: "https://www.instagram.com/DrLupo/",
              youtube: "https://www.youtube.com/c/DrLupo",
              twitter: "https://twitter.com/DrLupo",
            }}
            image={"/lupo.png"}
          />
          <Person
            name={"Sweet Anita"}
            socials={{
              twitch: "https://www.twitch.tv/sweet_anita",
              instagram: "https://www.instagram.com/sweetanitatwitch/",
              youtube: "https://www.youtube.com/channel/UCl4RpXZdQUhikTxBghAy1jQ",
              twitter: "https://twitter.com/sweetanita?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
            }}
            image={"/anita.png"}
          />
        </div>
        <div className="faq container">
          <h2>F.A.Q.</h2>
          <h3>What is the VGAA?</h3>
          <p>
            The Video Game Accessibility Awards is an awards show created with the hopes of encouraging more development studios to develop
            their games with accessibility, and disabled gamers, in mind. We also intend to shine a positive, celebratory light on the
            studios who are making positive strides in this space, and to encourage different kinds of gamers to tune in to learn more about
            the importance of accessibility. The VGAAs are all about being fun, informative, and positive.
          </p>
          <h3>When/where can I watch this year’s awards?</h3>
          <p>March 12th, 2:00pm PT, on Twitch.tv/twitch!</p>
          <h3>Who are the hosts?</h3>
          <p>
            The 2021 Video Game Accessibility Awards are hosted by Alanah Pearce, a video game writer and content creator, and Steven Spohn,
            senior director at Able Gamers, and… also content creator.
          </p>
          <h3>How did you choose these categories?</h3>
          <p>
            The Video Game Accessibility Awards are powered by AbleGamers Accessible Player Experiences program, which trains the industry’s
            top developing studios to design with accessibility in mind. There are 22 design patterns that focus on the various challenges
            gamers with disabilities must face in order to play video games. While we would love to do the work for every pattern, we choose
            10-12 to represent as large of a swath of the disability community as possible, while still being a concise, enjoyable show for
            the audience to watch.
          </p>
          <h3>How does the voting jury work?</h3>
          <p>
            Awards winners are entirely selected by the AbleGamers’ Player Panels, which is a group of hundreds of gamers with disabilities
            who love helping the video game industry be more accessible. After they have submitted their votes, the results are tabulated
            and given to our producers.
          </p>
          <h3>Can I vote?</h3>
          <p>Voting has closed for this year but you can always join AbleGamers Player Panels to join in next year’s voting process.</p>
          <h3>How do you choose your presenters?</h3>
          <p>
            Every year we do our best to have a solid mix of able-bodied and disabled celebrities, influencers, and talent you know and
            love.
          </p>
          <h3>How can I reach out to co-stream the event, donate, or otherwise support the Video Game Accessibility Awards?</h3>
          <p>
            You can send an email to <a href="mailto:vgaawards@gmail.com">vgaawards@gmail.com</a>
          </p>
        </div>
        <div className="ablegamers">
          <h3>
            We’re working with
            <Image priority={true} width={250} height={100} src={ablegamers} alt="able gamers logo" />
          </h3>
          <h2>HOW THEY’RE ARE CHANGING LIVES</h2>
          <h3>
            Creating opportunities that enable play in order to combat social isolation, foster inclusive communities, and improve the
            quality of life for people with disabilities.
          </h3>
        </div>
      </div>
      <div className="additional-details">
        <a href="https://www.realgoodtouring.com/" target="_blank" className="rgt" rel="noreferrer">
          <Image priority={true} width={150} height={150} src={rgtLogo} alt="Real Good Touring" />
        </a>
      </div>
    </div>
  );
}
