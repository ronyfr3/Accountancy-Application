import React from "react";

const Map = () => {
  return (
    <div className="map_Wrappersss">
      <iframe
        className="mapFrame"
        title="Himalayan Dine"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Priority%20Accountancy%20london+(Priority%20Accountancy)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>{" "}
      {/* <a href="https://embedmaps.net">google map widget for website</a>{" "} */}
      <script
        type="text/javascript"
        src="https://embedmaps.com/google-maps-authorization/script.js?id=292172a8a8eff56e5c0ea30eafed1a715c422cac"
      ></script>
    </div>
  );
};

export default Map;
