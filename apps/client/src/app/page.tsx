import { api } from "@repo/api";

export const dynamic = "force-dynamic";

export default async function Page() {
  const { data } = await api.index.get();
  console.log(data);

  return <main />;
}
