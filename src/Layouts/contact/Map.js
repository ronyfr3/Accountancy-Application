import React from "react";

const Map = () => {
  return (
    <div className="map_Wrappersss">
      <iframe
        className="mapFrame"
        title="Priority Accountancy"
        width="520"
        height="400"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=8%20Crescent%20Road%20london+(Priority%20Accountancy)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>{" "}
      {/* <a href="https://www.embedmap.net/">embed google maps directions</a>{" "} */}
      <script
        type="text/javascript"
        src="https://embedmaps.com/google-maps-authorization/script.js?id=e9f53e01b92c256eee6c71ee64f2da1eaf332a8d"
      ></script>
      <iframe
        className="mapFrame"
        width="520"
        height="400"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=16%20Lyndhurst%20Road%20Luton%20United%20Kingdom+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>{" "}
      {/* <a href="https://www.embedmap.net/">embed google maps directions</a>{" "} */}
      <script
        type="text/javascript"
        src="https://embedmaps.com/google-maps-authorization/script.js?id=41968c95bccedbe8eae5213081bef57f7e8dac35"
      ></script>
    </div>
  );
};

export default Map;
