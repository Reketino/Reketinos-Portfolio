import { NextResponse } from "next/server";


export async function POST(req) {
try {
    const body = await req.json();
    const { lat, lon } = body;

    if (!lat || !lon) {
        return NextResponse.json({ error: "Reketino lost his coordinates and is lost at sea"}, { status: 400});
    }

    const res = await fetch(
        `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`,
        {
            headers: {
                "User-Agent": "Reketinos-Portifolio (contact: bjornevensk8@gmail.com)"
            },
        } 
    );

    const data = await res.json();

    const details = data.properties.timeseries[0].data.instant.details;

    return NextResponse.json({
        temperature: details.air_temperature,
        wind: details.wind_speed,
        humidity: details.relative_humidity,
        icon: data.properties.timeseries[0].data.next_1_hours?.summary?.symbol_code,
    });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Reketino ain`t fetching the weather today aye" }, { status: 500 });
}    
}