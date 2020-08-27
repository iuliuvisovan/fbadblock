chrome.tabs.onUpdated.addListener(
  function (_, changeInfo, _) {
    if (changeInfo.status === "complete") {
      chrome.tabs.executeScript({
        code: `document.addEventListener('scroll', () => {
                  var theAds = [...document.querySelectorAll('.qzhwtbm6.knvmm38d .oi732d6d span[id*=jsc]')].filter(x => { 
                    const cleanWord = x.innerText.replace(/\n/g, '').replace(/\·/g, '').trim();
            
                    if(cleanWord.split(' ').length > 1) {
                        return false;
                    }
            
                    return !(/[0-9]|\s/.test(cleanWord));
                })
            
                theAds.forEach(x => {
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