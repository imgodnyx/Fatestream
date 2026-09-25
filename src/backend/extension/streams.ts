import { Stream } from "@afterstream/providers";

import { RULE_IDS, setDomainRule } from "@/backend/extension/messaging";

function extractDomain(url: string): string | null {
  try {
    const u = new URL(url);
    return u.hostname;
  } catch {
    return null;
  }
}

function extractDomainsFromStream(stream: Stream): string[] {
  if (stream.type === "hls") {
    return [extractDomain((stream as any).playlist)].filter(
      (v): v is string => !!v,
    );
  }
  if (stream.type === "file") {
    return Object.values((stream as any).qualities)
      .map((v: any) => extractDomain(v.url))
      .filter((v): v is string => !!v);
  }
  return [];
}

function buildHeadersFromStream(stream: Stream): Record<string, string> {
  const headers: Record<string, string> = {};
  Object.entries((stream as any).headers ?? {}).forEach((entry: any) => {
    headers[entry[0]] = entry[1];
  });
  Object.entries((stream as any).preferredHeaders ?? {}).forEach(
    (entry: any) => {
      headers[entry[0]] = entry[1];
    },
  );
  return headers;
}

export async function prepareStream(stream: Stream) {
  await setDomainRule({
    ruleId: RULE_IDS.PREPARE_STREAM,
    targetDomains: extractDomainsFromStream(stream),
    requestHeaders: buildHeadersFromStream(stream),
  });
}
