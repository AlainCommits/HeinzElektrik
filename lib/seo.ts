// lib/seo.ts
export function getSEODataForCity(city: string) {
    const cityFormatted = city.charAt(0).toUpperCase() + city.slice(1);
    return {
      title: `Elektriker Notdienst ${cityFormatted} – 24h Service`,
      description: `🔧 Ihr zuverlässiger Elektriker Notdienst in ${cityFormatted} – rund um die Uhr erreichbar! Jetzt anrufen.`,
      openGraph: {
        title: `Elektriker Notdienst ${cityFormatted}`,
        description: `🔧 Elektriker Service in ${cityFormatted}. Schnell, professionell & rund um die Uhr.`,
        url: `https://elektriker-notdienst-24h.de/elektriker-in/${city}`,
      },
    };
  }
  