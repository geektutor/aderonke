import LinkTo from "./linkTo";

const OneBlog = ({name,des,url}) => {
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
        <div className="oneBlog">
              <div className="imgBox"></div>
              <div className="textSide">
                <p className="name">{name}</p>
                <p className="description">
                 
                  {
                      des && truncateString(des,58)
                  }
                </p>
                
                <LinkTo
                  text={"Read More"}
                  toggle={"grey"}
                  url={url}
                />
              </div>
            </div>
      );
}
 
export default OneBlog;