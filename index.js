// API 1: "https://api.ebird.org/v2/data/obs/geo/recent?lat={{lat}}&lng={{lng}}&sort=species"
// API 2: "X-eBirdApiToken: '{3usev7008ltf}""

async function main(lat, lng) {
    const birds = await fetch ("https://api.ebird.org/v2/data/obs/geo/recent?lat=${lat}&lng=${lng}&sort=species");
    const birdsData = await birds.json();
    console.log(birdsData);
}

main();