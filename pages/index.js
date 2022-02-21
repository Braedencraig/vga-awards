/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Slideshow from "../components/slideshow";
import { Person } from "../components/person";
import YouTube from "react-youtube";
import styles from "../styles/Home.module.css";
// import vgaLogo from "../public/logo.png";
import rgtLogo from "../public/rgt.png";
// import alanah from "../public/alanah.jpg";
import steve from "../public/steve.jpg";
// import jack from "../public/jack.png";
// import crank from "../public/crank.jpg";
// import lupo from "../public/lupo.png";
// import anita from "../public/anita.jpg";
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
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container">
        <div className="logo">
          <img src="/logo.png" alt="Video Game Accessibility Awards"/>
          {/* <Image
            width={800}
            height={800}
            src={vgaLogo}
            priority={true}
            alt="Video Game Accessibility Awards"
          /> */}
        </div>
        <h1>Video Game Accessibility Awards</h1>
        <h2>Livestream on March 12, 2022</h2>
        <h3>
          A livestream, game award show that aims to spotlight video games and
          companies that are making a clear and conscious effort with their
          accessibility options. Join us on Saturday March 12, 2022 by tuning
          into{" "}
          <a
            href="http://https://www.youtube.com/channel/UCKpBmnEfSy20al-Fk_2YzVA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alanah Pearce&apos;s
          </a>{" "}
          Youtube stream.
        </h3>
        <div className="socials">
        <a
          href="https://www.instagram.com/vgaawards/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <a
          href="https://twitter.com/vgaawards?lang=en"
          target="_blank"
          rel="noopener noreferrer"
        >
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
            image={'/alanah.jpg'}
          />
          <Person
            name={"Steve Spohn"}
            socials={{
              website: "https://stevespohn.com/",
              twitter:
                "https://twitter.com/stevenspohn?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
            }}
            bio={`Steve is the Senior Director of AbleGamers.`}
            image={'/steve.jpg'}
          />
        </div>
      </div>
      <div className="presenters">
        <h2>Meet Our Presenters</h2>
        <div className="host-container">
          <Person
            name={"Jacksepticeye"}
            socials={{
              instagram: "https://www.instagram.com/jacksepticeye/?hl=en",
              youtube:
                "https://www.youtube.com/channel/UCYzPXprvl5Y-Sf0g4vX-m6g",
              twitter:
                "https://twitter.com/Jacksepticeye?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
            }}
            image={'/jack.png'}
          />
          <Person
            name={"Crankgameplays"}
            socials={{
              youtube: "https://www.youtube.com/c/CrankGame",
              twitter: "https://twitter.com/CrankGameplays",
              instagram: "https://www.instagram.com/crankgameplays/",
            }}
            image={'/crank.jpg'}
          />
          <Person
            name={"Dr. Lupo"}
            socials={{
              instagram: "https://www.instagram.com/DrLupo/",
              youtube: "https://www.youtube.com/c/DrLupo",
              twitter: "https://twitter.com/DrLupo",
            }}
            image={'/lupo.png'}
          />
          <Person
            name={"Sweet Anita"}
            socials={{
              instagram: "https://www.instagram.com/sweetanitatwitch/",
              youtube:
                "https://www.youtube.com/channel/UCl4RpXZdQUhikTxBghAy1jQ",
              twitter:
                "https://twitter.com/sweetanita?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
            }}
            image={'/anita.jpg'}
          />
        </div>
        <div className="ablegamers">
          <h3>
            We’re working with 
            <Image
              width={200}
              height={100}
              src={ablegamers}
              alt="able gamers logo"
            />
          </h3>
          <h2>HOW THEY’RE ARE CHANGING LIVES</h2>
          <h3>
            Creating opportunities that enable play in order to combat social
            isolation, foster inclusive communities, and improve the quality of
            life for people with disabilities.
          </h3>
        </div>
      </div>
      <div className="additional-details">
        <a
          href="https://www.realgoodtouring.com/"
          target="_blank"
          className="rgt"
          rel="noreferrer"
        >
          <Image
            width={150}
            height={150}
            src={rgtLogo}
            alt="Real Good Touring"
          />
        </a>
      </div>
    </div>
  );
}
