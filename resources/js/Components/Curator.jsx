import { useEffect } from "react";

const CuratorFeed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.charset = "UTF-8";
    script.src = "https://cdn.curator.io/published/a169d3cf-f8ed-44c7-a653-1801f20a8fa1.js";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup script on unmount
    };
  }, []);

  return (
    <div id="curator-feed-default-feed-layout">
      <a href="https://curator.io" target="_blank" className="crt-logo crt-tag">
        Powered by Curator.io
      </a>
    </div>
  );
};

export default CuratorFeed;
