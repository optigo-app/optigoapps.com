const isLocal =
    typeof window !== "undefined" &&
    ["localhost", "nzen"].includes(window.location.hostname);

export const APIURL = isLocal
    ? "http://newnextjs.web/api/report"
    : "https://livenx.optigoapps.com/api/report";

export const UPLOADMEDIA =
    isLocal
        ? "http://newnextjs.web/api/upload"
        : "https://livenx.optigoapps.com/api/upload";

export const getHeaders = (init = {}) => {
    return {
        Yearcode: isLocal ? "e3tuemVufX17ezIwfX17e29yYWlsMjV9fXt7b3JhaWwyNX19" : "e3tsaXZlLm9wdGlnb2FwcHMuY29tfX17ezIwfX17e3Rlc3Q3NH19e3t0ZXN0NzR9fQ==",
        sv: isLocal ? '0' : '1',
        sp: "33",
        version: "v1"
    };
};
