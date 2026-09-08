import { createFileRoute } from "@tanstack/react-router";
import { DocsShell } from "@/components/docs/DocsShell";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <DocsShell slug="index" />;
}
