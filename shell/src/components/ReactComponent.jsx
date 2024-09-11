import React from "react";
import MicroFrontendA from "http://localhost:7100/bundle.js";
import ErrorBoundary from "./ErrorBoundary.tsx";

const ReactComponent = () => (
  <ErrorBoundary>
    <MicroFrontendA />
  </ErrorBoundary>
);

export default ReactComponent;
