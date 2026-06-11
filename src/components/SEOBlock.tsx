
export function SEOBlock() {
  const words = [
    "football", "streaming", "live", "matches", "Tinghir TV", "APK", "Android", "sports", "HD", "soccer",
    "Premier League", "La Liga", "Champions League", "highlights", "news", "free", "broadcast", "scores",
    "results", "tables", "stats", "player", "goals", "transfer", "rumors", "watch", "online", "mobile",
    "fast", "secure", "best", "app", "application", "download", "install", "latest", "version", "update",
    "Bundesliga", "Serie A", "Ligue 1", "World Cup", "Euro", "tactics", "analysis", "commentary", "English",
    "French", "Arabic", "football live", "watch online free", "football app download", "Tinghir TV sports",
    "real-time", "alerts", "notifications", "schedule", "fixtures", "derby", "El Clasico", "Madrid", "Barcelona",
    "Manchester", "Liverpool", "London", "Arsenal", "Chelsea", "PSG", "Bayern", "Milan", "Juventus", "Morocco",
    "Atlas Lions", "Africa", "CAF", "AFCON", "streaming quality", "no lag", "low data", "mobile streaming",
    "stadium", "pitch", "referee", "VAR", "penalty", "corner", "kickoff", "whistle", "fan", "supporter", "club",
    "team", "lineup", "formation", "coach", "manager", "managerial", "scout", "academy", "youth", "international"
  ];

  return (
    <div className="sr-only" aria-hidden="true">
      {words.map((word, i) => (
        <span key={i}>{word} </span>
      ))}
    </div>
  );
}
