import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="content">
        <img
          src="./Images/troll-face.png"
          alt="troll-face"
          className="header--image"
        />
        <h2 className="header--title">Meme Generator</h2>
      </div>
    </header>
  );
}
