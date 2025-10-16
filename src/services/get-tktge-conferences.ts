"use server";

import { tktgeAdapter } from "@/helpers/adapters/tktge.adapter";

export async function getTktgeConferences() {
  const response = await fetch(
    "https://gateway.tkt.ge/Shows/List?categoryId=7&api_key=7d8d34d1-e9af-4897-9f0f-5c36c179be77"
  );

  const data = await response.json();

  return tktgeAdapter(data.shows);
}
