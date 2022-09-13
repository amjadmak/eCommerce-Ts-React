import React from "react";

const About: React.FC = () => {
  return (
    <div className="About" style={{ textAlign: "center" }}>
      <h3 style={{ margin: "10" }}>About Abanon eCommerce</h3>
      <div className="parag">
        <p>
          This E-commerce site was made using a fake API from{" "}
          <a href="https://api.escuelajs.co/docs/">EscuelaJS Fake API</a>.<br />
          As a mock project to practice front-end development using React.
        </p>
        <br />
        <br />
        <p>
          The technologies used for this mock project are:
          <br /> Material-UI, React Router, ReactQuery, Plain CSS.
          <br />
          <br />
          You can explore the site by selecting a button from the navigation
          bar.
          <br />
          <br />
          External links to the creator of this project were added to the
          footer.
          <br />
          <br />
          Enjoy your time {":)"}
        </p>
      </div>
    </div>
  );
};
export default About;
