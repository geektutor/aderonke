import LinkTo from "../compnents/linkTo";

const EachWork = ({title,text,url,toggle}) => {
  return (
    <div className="eachWork">
      <div className="imageDiv"></div>
      <p className="title">{title}</p>
      <p className="aboutT">
       {text}
      </p>
      <LinkTo toggle={'grey'} text={"Check site"} url={url} />
    </div>
  );
};

export default EachWork;
