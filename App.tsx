import Mapbox from "@rnmapbox/maps";
import { useRef } from "react";

Mapbox.setAccessToken(
	"pk.ey...",
);

export default function App() {
  const ref = useRef<Mapbox.MapView>(null);
  return (
    <Mapbox.MapView ref={ref} styleURL="mapbox://styles/mapbox/standard">
	  <Mapbox.StyleImport
		id="basemap"
		existing
		config={{ lightPreset: "dusk" }}
	  />
	  <Mapbox.Camera />
	</Mapbox.MapView>
  );
}
