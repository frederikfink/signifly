import { useRouter } from "next/router";

export default function Match() {
  const router = useRouter();
  const { id } = router.query;

  return <div>Tournament id: {id}</div>;
}
