import "./about.css";
import ProfileImage from "../assets/image/profile.jpeg";

function About() {
  return (
    <div className="about">
      <img
        className="about__profile-image"
        src={ProfileImage}
        alt="Profile of Maz"
      />
      <p className="about__paragraph">Not much here!</p>
      <p className="about__paragraph">
        Just that my career is Software development, my hobbies include binge
        watching good series or sitcoms, and last but not least (maybe even
        best), I love reading good books and learning about the truth.
      </p>
    </div>
  );
}
export { About };
