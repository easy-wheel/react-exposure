import { collectTargets } from "./intersectionObserver";

const observerOptions = {
  childList: true, // 观察目标子节点的变化，是否有添加或删除
  attributes: true, // 观察属性变动
  subtree: true, // 观察后代节点，默认为false
};

function callback(mutationList, observer) {
  mutationList.forEach((mutation) => {
    switch (mutation.type) {
      case "childList":
        collectTargets();
        break;
      case "attributes":
        break;
    }
  });
}

const mutationObserver = new MutationObserver(callback);
mutationObserver.observe(document, observerOptions);

export default mutationObserver;
