export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const steamId = searchParams.get("steamId");

  const apiKey = process.env.STEAM_API_KEY;

  if (!steamId || !apiKey) {
    return Response.json(
      { error: "Missing Steam ID or API key" },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(
      `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${apiKey}&steamids=${steamId}`
    );

    const data = await res.json();

    return Response.json(data);
  } catch (err) {
    console.error("Steam API error:", err);
    return Response.json(
      { error: "Failed to fetch Steam data " },
      { status: 500 }
    );
  }
}
