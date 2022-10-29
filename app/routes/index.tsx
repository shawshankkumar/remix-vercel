import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import db from "../loaders/database";
export const loader = async () => {
  const { data, error } = await db().from("remix-test-jokes").select();
  if (error) throw error;
  return json({
    jokes: data,
  });
};
export default function Index() {
  const { jokes } = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Here's a joke for you from Shashank!</h1>
      {jokes[Math.floor(Math.random() * jokes.length)].jokes}
    </div>
  );
}
