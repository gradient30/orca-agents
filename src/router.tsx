import { createRouter } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { routeTree } from "./routeTree.gen";

function appBasepath(): string | undefined {
  const raw = import.meta.env.BASE_URL || "/";
  const trimmed = raw.replace(/\/$/, "");
  return trimmed || undefined;
}

export function getRouter() {
  return createRouter({
    routeTree,
    defaultErrorComponent: AppErrorComponent,
    basepath: appBasepath(),
  });
}
