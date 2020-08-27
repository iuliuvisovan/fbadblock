chrome.tabs.onUpdated.addListener(
  function (_, changeInfo, _) {
    if (changeInfo.status === "complete") {
      chrome.tabs.executeScript({
        code: `document.addEventListener('scroll', () => {
                var allSponsoredPosts = [...document.querySelectorAll('.oajrlxb2.g5ia77u1')]
                              .filter(x => x.attributes.href && x.attributes.href.textContent.includes('/ads/about'));

                allSponsoredPosts.forEach(x => {
                  let parent = x;
                  while (!parent.hasAttribute('data-pagelet')) {
                    parent = parent.parentElement;
                  };
                  parent.remove();
                })
              }, { passive: true });
            `
      });
    }
  });