/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function About({ content }) {
  return (
    <div className="content">
      <h1>{content?.title}</h1>
      <h3>{content?.company}</h3>
      <p>{content?.dates}</p>
      <ul>
        {content?.duties.map((duty) => {
          return <li>{duty}</li>;
        })}
      </ul>
    </div>
  );
}

export default About;
