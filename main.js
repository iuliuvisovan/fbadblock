chrome.tabs.onUpdated.addListener(
  function (_, changeInfo, _) {
    if (changeInfo.status === "complete") {
      chrome.tabs.executeScript({
        code: `document.addEventListener('scroll', () => {
                var theAds = [...document.querySelectorAll('.qzhwtbm6.knvmm38d span span[id*=jsc]')].filter(x => { 
                  const cleanWord = x.innerText.replace(/\n/g, '').replace(/\·/g, '').trim();
          
                  const isPaidFor = cleanWord.toLowerCase().includes('paid for');
                  const isMultipleWords = cleanWord.split(' ').length > 1;

                  if(isMultipleWords && !isPaidFor) {
                      return false;
                  }

                  const hasDigits = /[0-9]/.test(cleanWord);
          
                  return !hasDigits;
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