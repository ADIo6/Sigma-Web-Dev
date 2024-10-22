function loadJS(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
  
      script.onload = () => {
        resolve();
      };
  
      script.onerror = () => {
        reject(new Error(`Failed to load script: ${src}`));
      };
  
      document.head.appendChild(script);
    });
  }
  
  // Usage:
  loadJS("./hw1.js")
    .then(() => {
      // Script loaded successfully
      console.log('Script loaded!');
      // You can now use functions or variables defined in the script
    })
    .catch(error => {
      // Error handling
      console.error(error);
    });