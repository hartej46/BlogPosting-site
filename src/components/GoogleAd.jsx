import React, { useEffect, useRef } from 'react';
import conf from '../conf/conf';

const GoogleAd = () => {
    const adRef = useRef(null);

    useEffect(() => {
        // Only push if Slot ID is provided and not the placeholder
        if (conf.adSenseSlotId && conf.adSenseSlotId !== "undefined" && adRef.current && adRef.current.innerHTML === "") {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                console.error("AdSense error:", e);
            }
        }
    }, []);

    if (!conf.adSenseSlotId || conf.adSenseSlotId === "undefined") {
        return null; // Don't render anything if slot ID is missing
    }

    return (
        <div className="w-full flex justify-center p-4" style={{ minHeight: '100px', minWidth: '250px' }}>
            <ins
                ref={adRef}
                className="adsbygoogle"
                style={{ display: 'block', width: '100%' }}
                data-ad-client={conf.adSenseClientId || "ca-pub-6345724080685835"}
                data-ad-slot={conf.adSenseSlotId}
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
        </div>
    );
};

export default GoogleAd;
