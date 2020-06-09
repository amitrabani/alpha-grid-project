import { wrap, releaseProxy } from "comlink";
import { useEffect, useMemo } from "react";

export function useWorker() {
  const workerApiAndCleanup = useMemo(() => makeWorkerApiAndCleanup(), []);
  useEffect(() => {
    const { cleanup } = workerApiAndCleanup;
    return () => {
      cleanup();
    };
  }, [workerApiAndCleanup]);
  return workerApiAndCleanup;
}

function makeWorkerApiAndCleanup() {
  const worker = new Worker("./../workers", {
    name: "AppWorker",
    type: "module"
  });
  const workerApi = wrap<import("../workers").AppWorker>(worker);

  const cleanup = () => {
    workerApi[releaseProxy]();
    worker.terminate();
  };

  const workerApiAndCleanup = { workerApi, cleanup };
  return workerApiAndCleanup;
}
