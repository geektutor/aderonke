const Loader = ({ close }) => {
  return (
    <div className={`pre-loader ${close ? "close" : ""}`}>
      <div id="wrap">
      
        <svg
        width="100%"
        height="100%"
        viewBox="0 0 570 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.816 48.768C17.0827 48.768 13.6907 47.84 10.64 45.984C7.58933 44.1067 5.15733 41.3653 3.344 37.76C1.53067 34.1547 0.624 29.7387 0.624 24.512C0.624 19.2853 1.57333 14.8587 3.472 11.232C5.37067 7.584 7.92 4.82133 11.12 2.944C14.3413 1.04533 17.936 0.0959969 21.904 0.0959969C25.1893 0.0959969 27.984 0.629331 30.288 1.696C32.6133 2.76266 34.4907 4.13866 35.92 5.824C37.3493 7.488 38.3947 9.248 39.056 11.104C39.7173 12.9387 40.048 14.624 40.048 16.16V16.544H30.384V16.16C30.384 14.8373 30.064 13.5573 29.424 12.32C28.784 11.0827 27.8347 10.0693 26.576 9.28C25.3173 8.46933 23.76 8.064 21.904 8.064C20.0267 8.064 18.224 8.59733 16.496 9.664C14.7893 10.7307 13.392 12.4693 12.304 14.88C11.2373 17.2693 10.704 20.48 10.704 24.512C10.704 28.608 11.2267 31.84 12.272 34.208C13.3173 36.576 14.672 38.272 16.336 39.296C18 40.2987 19.7707 40.8 21.648 40.8C23.568 40.8 25.1893 40.48 26.512 39.84C27.8347 39.1787 28.8587 38.368 29.584 37.408C30.3307 36.448 30.8213 35.4987 31.056 34.56V31.488H21.712V24.32H39.856V48H34.64L33.744 42.784C33.5307 43.3387 32.9547 44.096 32.016 45.056C31.0987 45.9947 29.7333 46.848 27.92 47.616C26.1067 48.384 23.7387 48.768 20.816 48.768ZM76.5455 40.32V48H47.8415V0.799999H76.5455V8.48H57.8255V20.48H72.9935V28.16H57.8255V40.32H76.5455ZM113.046 40.32V48H84.3415V0.799999H113.046V8.48H94.3255V20.48H109.494V28.16H94.3255V40.32H113.046ZM146.762 48L135.37 28.768L130.794 34.976V48H120.842V0.799999H130.794V21.76L146.186 0.799999H156.682L141.226 21.44L157.642 48H146.762ZM194.42 8.48H182.804V48H172.916V8.48H161.332V0.799999H194.42V8.48ZM235.859 30.944C235.859 36.9173 234.28 41.3867 231.123 44.352C227.965 47.296 223.645 48.768 218.163 48.768C212.68 48.768 208.36 47.296 205.203 44.352C202.045 41.3867 200.467 36.9173 200.467 30.944V0.799999H210.419V31.104C210.419 34.432 211.027 36.8853 212.243 38.464C213.459 40.0213 215.432 40.8 218.163 40.8C220.872 40.8 222.845 40.0213 224.083 38.464C225.32 36.8853 225.939 34.432 225.939 31.104V0.799999H235.859V30.944ZM275.045 8.48H263.429V48H253.541V8.48H241.957V0.799999H275.045V8.48ZM297.935 48.768C294.031 48.768 290.468 47.8293 287.247 45.952C284.047 44.0533 281.487 41.2907 279.567 37.664C277.647 34.0373 276.687 29.6 276.687 24.352C276.687 19.104 277.636 14.6773 279.535 11.072C281.455 7.46666 284.015 4.736 287.215 2.88C290.415 1.024 293.988 0.0959969 297.935 0.0959969C301.881 0.0959969 305.455 1.024 308.655 2.88C311.855 4.736 314.404 7.46666 316.303 11.072C318.201 14.6773 319.151 19.104 319.151 24.352C319.151 29.6 318.191 34.0373 316.271 37.664C314.351 41.2907 311.78 44.0533 308.559 45.952C305.359 47.8293 301.817 48.768 297.935 48.768ZM297.935 40.8C299.919 40.8 301.753 40.256 303.439 39.168C305.145 38.08 306.511 36.3307 307.535 33.92C308.559 31.5093 309.071 28.32 309.071 24.352C309.071 20.384 308.548 17.2053 307.503 14.816C306.479 12.4267 305.124 10.7093 303.439 9.664C301.753 8.59733 299.919 8.064 297.935 8.064C295.951 8.064 294.105 8.59733 292.399 9.664C290.713 10.7093 289.359 12.4267 288.335 14.816C287.311 17.2053 286.799 20.384 286.799 24.352C286.799 28.32 287.311 31.5093 288.335 33.92C289.359 36.3307 290.713 38.08 292.399 39.168C294.105 40.256 295.951 40.8 297.935 40.8ZM325.717 48V0.799999H344.853C349.802 0.799999 353.493 1.93067 355.925 4.192C358.378 6.432 359.605 9.664 359.605 13.888C359.605 16.32 359.135 18.4 358.197 20.128C357.279 21.8347 356.138 23.1573 354.773 24.096C353.429 25.0347 352.127 25.5573 350.869 25.664C352.149 25.7493 353.375 26.08 354.549 26.656C355.722 27.2107 356.682 28.096 357.429 29.312C358.175 30.528 358.549 32.16 358.549 34.208V43.2C358.549 44.2453 358.623 45.216 358.773 46.112C358.943 46.9867 359.189 47.616 359.509 48H349.557C348.938 47.0613 348.629 45.4613 348.629 43.2V35.36C348.629 33.504 348.149 32.0747 347.189 31.072C346.229 30.048 344.693 29.536 342.581 29.536H335.445V48H325.717ZM342.517 8.448H335.445V21.856H342.709C344.629 21.856 346.218 21.216 347.477 19.936C348.757 18.656 349.397 16.9387 349.397 14.784C349.397 12.8 348.789 11.2533 347.573 10.144C346.378 9.01333 344.693 8.448 342.517 8.448Z"
            fill="white"
          />
        </svg>

        <div className="line"></div>
      </div>
    </div>
  );
};

export default Loader;