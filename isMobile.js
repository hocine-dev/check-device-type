import { useEffect, useState } from "react";

export default function IsMobile() {
    
  const [IsMobile, setIsMobile] = useState(false);

  useEffect(() => {
    typeof window !== "undefined"
      ? setIsMobile(window.navigator.userAgentData.mobile)
      : null;
  }, []);

  return (
    <>
      <main>
        <div>
            this will check if your device is mobile or not...
          <h1>
            {IsMobile ? "your device is mobile" : "your device is note mobile"}
          </h1>
        </div>
      </main>
    </>
  );
}
