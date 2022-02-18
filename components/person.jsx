import React from "react";
import Image from "next/image";

export const Person = ({ name, bio, socials, image }) => {
  return (
    <div className="person">
      <Image width={400} height={350} priority={true} alt={name} src={image} />
      <p className="text">{name}</p>
      {bio && <p className="bio">{bio}</p> }
      <div className="socials person-socials">
        {socials.instagram && (
          <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        )}
        {socials.twitter && (
          <a
            href={socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        )}
        {socials.twitch && (
          <a
            href={socials.twitch}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitch fa-2x"></i>
          </a>
        )}
        {socials.youtube && (
          <a
            href={socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube fa-2x"></i>
          </a>
        )}
         {socials.website && (
          <a
            href={socials.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-desktop fa-2x"></i>
          </a>
        )}
      </div>
    </div>
  );
};
