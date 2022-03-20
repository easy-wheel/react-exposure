export function getExposureTrackerPageParamsProps(params) {
  return {
    "data-exposure-tracker-page-params": params
      ? JSON.stringify(params)
      : undefined,
  };
}

export function getExposureTrackerParamsProps(action, params) {
  return {
    "data-exposure-tracker-action": action,
    "data-exposure-tracker-params": params ? JSON.stringify(params) : undefined,
  };
}
