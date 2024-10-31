import "./css/headerLink.css";

export const HeaderLink = ({ text, line, src }) => {
  return (
    <a href={`http://localhost:3000${src}`} className={`headerLink ${line}`}>
      {text}
    </a>
  );
};
