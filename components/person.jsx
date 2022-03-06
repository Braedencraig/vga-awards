/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

export const Person = ({ name, bio, socials, image }) => {
  return (
    <div className="person">
      <div
        style={{
          width: 400,
          height: 400,
          position: "relative",
        }}
      >
        <Image alt={name} src={image} layout="fill" objectFit="contain" />
      </div>
      {/* <img alt={name} src={image} /> */}
      <p className="text">{name}</p>
      <div className="socials person-socials">
        {socials.instagram && (
          <a
            href={socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="instagram"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        )}
        {socials.twitter && (
          <a
            href={socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="twitter"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        )}
        {socials.twitch && (
          <a
            href={socials.twitch}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="twitch"
          >
            <i className="fab fa-twitch fa-2x"></i>
          </a>
        )}
        {socials.youtube && (
          <a
            href={socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="youtube"
          >
            <i className="fab fa-youtube fa-2x"></i>
          </a>
        )}
        {socials.website && (
          <a
            href={socials.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="website"
          >
            <i className="fa-solid fa-desktop fa-2x"></i>
          </a>
        )}
      </div>
      {bio && <p className="bio">{bio}</p>}
    </div>
  );
};
