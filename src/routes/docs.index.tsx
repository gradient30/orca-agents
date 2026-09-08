import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/")({ component: DocsIndex });

function DocsIndex() {
  return <Navigate to="/" />;
}
