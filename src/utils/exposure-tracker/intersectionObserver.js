import "intersection-observer";

const requestIdleCallback =
  window.requestIdleCallback ||
  function (callback, options) {
    var options = options || {};
    var relaxation = 1;
    var timeout = options.timeout || relaxation;
    var start = performance.now();
    return setTimeout(function () {
      callback({
        get didTimeout() {
          return options.timeout
            ? false
            : performance.now() - start - relaxation > timeout;
        },
        timeRemaining: function () {
          return Math.max(0, relaxation + (performance.now() - start));
        },
      });
    }, relaxation);
  };

const options = {
  root: null,
  rootMargin: "0px",
  threshold: [0, 0.5, 1],
};

function getParams(el) {
  const { exposureTrackerAction, exposureTrackerParams } = el.dataset;

  const Key = exposureTrackerAction;
  const pageEl = document.querySelector("[data-exposure-tracker-page-params]");
  let pageParams;
  if (pageEl?.dataset?.exposureTrackerPageParams) {
    try {
      pageParams = JSON.parse(pageEl?.dataset?.exposureTrackerPageParams);
    } catch (error) {
      console.error("parse pageParams fail");
    }
  }

  let params;
  if (exposureTrackerParams) {
    try {
      params = JSON.parse(exposureTrackerParams);
    } catch (error) {
      console.error("parse params fail");
    }
  }

  return {
    Key,
    ...pageParams,
    ...params,
  };
}

function handleLog(list) {
  console.log("handleLog");
  list.forEach((entry) => {
    const params = getParams(entry.target);
    console.log("exposure tracker! log here", params);
    entry.target.dataset.exposureTrackerExposed = "hasTracked";
  });
}

function callback(entries, observer) {
  const list = [];
  entries.forEach((entry) => {
    if (
      entry.target.dataset.exposureTrackerExposed !== "hasTracked" &&
      entry.intersectionRatio >= 0.5
    ) {
      list.push(entry);
    }
    requestIdleCallback(() => {
      handleLog(list);
    });
  });
}

const intersectionObserver = new IntersectionObserver(callback, options);

export default intersectionObserver;

export function collectTargets() {
  const els = Array.from(
    document.querySelectorAll("[data-exposure-tracker-action]")
  ).filter((el) => !el.dataset.exposureTrackerTracked);
  if (els.length > 0) {
    els.forEach((el) => {
      intersectionObserver.observe(el);
      el.dataset.exposureTrackerTracked = "hasTracked";
    });
  }
}
