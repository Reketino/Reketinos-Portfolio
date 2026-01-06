
export const runtime = "nodejs"

const cache = new Map();

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

    const cacheKey = `${month.toString().padStart(2,"0")}-${day.toString().padStart(2,"0")}`;

    if (cache.has(cacheKey)) {
        return new Response(
            JSON.stringify({ fact: cache.get(cacheKey) }),
            { status: 200 }
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

      const shortEvents = data.events.filter(
        (e) => e.text && e.text.length <= 120
    );

    const pool = shortEvents.length ? shortEvents: data.events;


    const event = 
    pool[Math.floor(Math.random() * pool.length)];

    function shorten(text, max = 90) {
        if (!text) return null;
        if (text.length <= max) return text;
        return text.slice(0, text.lastIndexOf(" ", max)) + "…";
    }

    const shortText = shorten(event.text);

    const fact = `${event.year}: ${shortText}`;

    cache.set(cacheKey, fact);

    return new Response(
        JSON.stringify({ fact }),
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