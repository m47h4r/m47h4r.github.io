import "./diary-entry.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GlassContainer } from "./layout/glass-container";
import marked from "marked";

function DiaryEntry() {
  const { entry } = useParams();
  const [renderedEntry, setRenderedEntry] = useState(null);

  useEffect(
    function () {
      const filename = process.env.PUBLIC_URL + "/data/diary/" + entry + ".md";
      fetch(filename)
        .then((response) => response.text())
        .then((data) => {
          marked.setOptions({ gfm: true });
          setRenderedEntry(marked(data));
        });
    },
    [entry]
  );

  return (
    <div className="entry">
      {renderedEntry ? (
        <div
          className="entry-text"
          dangerouslySetInnerHTML={{ __html: renderedEntry }}
        />
      ) : null}
    </div>
  );
}

export { DiaryEntry };
