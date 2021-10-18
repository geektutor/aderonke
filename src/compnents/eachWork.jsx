import LinkTo from "../compnents/linkTo";

const EachWork = ({title,text,url,toggle,img}) => {
  console.log(img)
  function truncateString(str, num) {
    // If the length of str is less than or equal to num
    // just return str--don't truncate it.
    if (str.length <= num) {
      return str
    }
    // Return str truncated with '...' concatenated to the end of str.
    return str.slice(0, num) + '...'
  }
  return (
    <div className="eachWork">
      <div style={{backgroundImage:`url(${img?img:'https://ik.imagekit.io/uknntomzctt/dariusz-sankowski-3OiYMgDKJ6k-unsplash_M-Dvj93YgI.jpg?updatedAt=1634378053467'})`}} className="imageDiv">

      </div>
      <p className="title">{title}</p>
      {/* <p className="aboutT">
       {text}
      </p> */}
      <p className="aboutT" dangerouslySetInnerHTML={{__html: text && truncateString(text,78)}} />
                
      <LinkTo toggle={'grey'} isMail={true} text={"Check site"} url={url} />
    </div>
  );
};

export default EachWork;
