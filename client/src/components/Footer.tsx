import datas from "../datas/datas.json";

interface Urls {
  raph: string;
  alex: string;
  pangsui: string;
  linkedin: string;
  github: string;
  react: string;
  html5: string;
  css3: string;
}

function Footer() {
  const urlArray: Urls = datas;

  function handleClick(url: string) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return (
    <div className="footer-contener">
      <div className="firstLineFooter">
        <img id="logoFooter" src="../src/assets/images/logo.png" alt="logo" />
        <p>© 2024 DevRAP All rights reserved.</p>
      </div>
      <div className="collaborateurs">
        <a
          className="collab-ref"
          target="_blank"
          rel="noopener noreferrer"
          href={urlArray.raph}
        >
          Raphaël RIVIERE
        </a>{" "}
        <a
          className="collab-ref"
          target="_blank"
          rel="noopener noreferrer"
          href={urlArray.alex}
        >
          {" "}
          Alexandre HIACE
        </a>{" "}
        <a
          className="collab-ref"
          target="_blank"
          rel="noopener noreferrer"
          href={urlArray.pangsui}
        >
          Pangsui LINGE USIFU{" "}
        </a>
      </div>
      <div className="social-media">
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <img
          src="../src/assets/logo/linkedin.svg"
          alt="linkedin"
          width="15%"
          onClick={() => {
            return handleClick(urlArray.linkedin);
          }}
        />
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <img
          src="../src/assets/logo/github.svg"
          alt="github"
          width="15%"
          onClick={() => {
            handleClick(urlArray.github);
          }}
        />{" "}
        {}
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <img
          src="../src/assets/logo/React.svg"
          alt="react"
          onClick={() => handleClick(urlArray.react)}
        />
        {}
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <img
          src="../src/assets/logo/css3.svg"
          alt="CSS"
          width="15%"
          onClick={() => handleClick(urlArray.css3)}
        />
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <img
          src="../src/assets/logo/html-5.svg"
          alt="html"
          width="15%"
          onClick={() => handleClick(urlArray.html5)}
        />
      </div>
    </div>
  );
}

export default Footer;
