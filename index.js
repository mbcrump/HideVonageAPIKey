function blurApiKeys() {
    let apiKey = document.querySelector('#apiKeyField > div');
  
    if (apiKey) {
      apiKey.style.filter = 'blur(20px)';
    }
  
    let apiKeyLabel = [...document.querySelectorAll('label')].filter((x) =>
      x.textContent.includes('API Key')
    );
  
    let apiSecretLabel = [...document.querySelectorAll('label')].filter((x) =>
      x.textContent.includes('API secret 1')
    );
  
    for (let label of apiKeyLabel) {
      let div = label.nextElementSibling;
  
      if (div) {
        div.style.filter = 'blur(20px)';
      }
    }
  
    for (let label of apiSecretLabel) {
      let div = label.nextElementSibling;
  
      if (div) {
        div.style.filter = 'blur(20px)';
      }
    }
  }
  
  setInterval(blurApiKeys, 10);
