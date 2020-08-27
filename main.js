chrome.tabs.onUpdated.addListener(
  function (_, changeInfo, _) {
    if (changeInfo.status === "complete") {
      chrome.tabs.executeScript({
        code: `document.addEventListener('scroll', () => {
                var theAd = document.querySelector('a[href*="/ads/about"]');
                
                let parent = theAd;
                while (!parent.hasAttribute('data-pagelet')) {
                  parent = parent.parentElement;
                };
                parent.remove();
              }, { passive: true });
            `
      });
    }
  });