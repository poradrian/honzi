import React, { useState, useEffect } from "react";
import { getTopArtists } from "../utils/api-client";
import { catchErrors } from "../utils/functions";
import { SectionWrapper } from "../components/Section";
import ArtistsRow from "../components/ArtistsRow";
import RangeButtons from "../components/RangeButtons";
import { StatsSection } from "../components/Section";
import Genres from "../components/Genres";

function ArtistScreen() {
  const [topArtists, setTopArtists] = useState(null);
  const [activeRange, setActiveRange] = useState("short");

  useEffect(() => {
    const fetchData = async () => {
      const userTopArtist = await getTopArtists(`${activeRange}_term`);
      setTopArtists(userTopArtist.data);
    };

    catchErrors(fetchData());
  }, [activeRange]);

  return (
    <main className="lg:(flex justify-center ml-5)">
      {topArtists && (
        <>
          <SectionWrapper
            title="Top Artists"
            breadcrumb="true"
            rangeButton={
              <RangeButtons
                activeRange={activeRange}
                setActiveRange={setActiveRange}
              />
            }
          >
            <ArtistsRow artists={topArtists.items.slice(0, 10)} />
          </SectionWrapper>
          <StatsSection>
            <Genres artists={topArtists.items.slice(0, 8)} />
          </StatsSection>
        </>
      )}
    </main>
  );
}

export default ArtistScreen;
