import { createClient } from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "3u71x6vk", 
  dataset: "production", 
  useCdn: true, 
  apiVersion: "2024-02-01", 
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
export default client;



