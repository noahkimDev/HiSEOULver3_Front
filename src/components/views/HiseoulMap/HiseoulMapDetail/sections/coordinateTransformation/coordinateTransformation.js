import React from "react";
import proj4 from "proj4";

function coordinateTransformation(x, y) {
  proj4.defs(
    "EPSG:2097",
    "+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=199925 +y_0=499694 +ellps=GRS80 +units=m +no_defs"
  );

  //! EPSG:2097 좌표 => 매개변수 x,y
  const [longitude, latitude] = proj4("EPSG:2097", "EPSG:4326", [
    Number(x),
    Number(y),
  ]);
  // console.log("위도(latitude), 경도(longitude)", `${latitude},${longitude}`);
  return { longitude, latitude };
}

export default coordinateTransformation;
