import { ProxyAgent, setGlobalDispatcher } from "undici";
import { config } from "~~/shared/config";

export default defineNitroPlugin(() => {
  const proxyUrl = config.api.httpProxy || config.api.httpProxy;

  if (proxyUrl) {
    // Create a global agent pointing to your corporate proxy
    const proxyAgent = new ProxyAgent({
      uri: proxyUrl,
      // Optional: If your corporate proxy uses self-signed SSL/TLS certs,
      // uncomment the line below (use cautiously in production environments)
      // requestOptions: { rejectUnauthorized: false }
    });

    // Forces all fetch requests on the server to route through this agent
    setGlobalDispatcher(proxyAgent);
    console.log(`[Proxy Plugin] Global proxy catch-all active: ${proxyUrl}`);
  } else {
    console.warn(
      "[Proxy Plugin] No proxy environment variable detected. Outgoing connections remain direct.",
    );
  }
});
