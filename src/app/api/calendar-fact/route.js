
export const runtime = "nodejs"

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const month = Number(searchParams.get("month")) + 1;
    const day = Number(searchParams.get("day"));
    

    if (!month || !day) {
        return new Response(
            JSON.stringify({ error: "Month or day is Lost"}),
            { status: 400 }
        );
    }

    try {
        const res = await fetch(
        `https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/${month}/${day}`,
        {
            headers: {
            "User-Agent": "ReketinoCalendar/1.0 (https://github.com/Reketino)",
            "Accept": "application.json",
        },
       }    
    );

    if (!res.ok) {
        throw new Error(`Wikipedia responded ${res.status}`);
    }


     const data = await res.json();

    if (!data?.events?.length) {
        return new Response(JSON.stringify({ fact:null }), 
        { status: 200 }
      );
    }

    const event = 
    data.events[Math.floor(Math.random() * data.events.length)];

    return new Response(
        JSON.stringify({
            fact: `${event.year}: ${event.text}`,
        }),
        {
            status: 200,
            headers: {
                "Cache-Control": "s-maxage=86400",
            },
        }
    );
} catch (err) {
    console.error("Calendar fact will not fetch:", err)
    
    return new Response(
     JSON.stringify({ 
        error: "Failed to fetch fact ",
        details: String(err),
    }),
        { status:500 }

    );
  }
}