import React, { useState, useEffect } from "react";
import {
  getTopTracks,
  getAlbumInfo,
  getAudioFeatures,
} from "../utils/api-client";
import { catchErrors } from "../utils/functions";
import { SectionWrapper, StatsSection } from "../components/Section";
import RangeButtons from "../components/RangeButtons";
import TopTracklist from "../components/TopTracklist";
import Stats from "../components/Stats";

function TrackScreen() {
  const [topTracks, setTopTracks] = useState(null);
  const [albumInfo, setAlbumInfo] = useState(null);
  const [audioFeatures, setAudioFeatures] = useState(null);
  const [activeRange, setActiveRange] = useState("short");

  useEffect(() => {
    const fetchData = async () => {
      const userTopTracks = await getTopTracks(`${activeRange}_term`);
      setTopTracks(userTopTracks.data);

      const albumIds = userTopTracks.data.items.map((track) => track.album.id);
      const trackIds = userTopTracks.data.items.map((track) => track.id);

      const userTopAlbums = await getAlbumInfo(albumIds.join());
      setAlbumInfo(userTopAlbums.data);

      const TrackAudioFeatures = await getAudioFeatures(trackIds.join());
      setAudioFeatures(TrackAudioFeatures.data);
    };
    catchErrors(fetchData());
  }, [activeRange]);

  return (
    <main className="lg:(flex justify-center ml-5)">
      {topTracks && albumInfo && (
        <SectionWrapper
          title="Top Tracks"
          breadcrumb="true"
          rangeButton={
            <RangeButtons
              activeRange={activeRange}
              setActiveRange={setActiveRange}
            />
          }
        >
          <TopTracklist tracks={topTracks.items} />
        </SectionWrapper>
      )}
      {audioFeatures && (
        <StatsSection>
          <Stats
            albums={albumInfo.albums}
            audioFeatures={audioFeatures.audio_features}
          />
        </StatsSection>
      )}
    </main>
  );
}
export default TrackScreen;
