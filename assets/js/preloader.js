document.addEventListener('DOMContentLoaded', () => {

    const mask = document.querySelector('#preloader');
    const body = document.querySelector('body');
    const percents = document.querySelector('#loaderPercents');
    const animationPreloaderItems = document.querySelectorAll('#preloaderAnim');
    
    
    window.addEventListener('load', () => {
    
        setTimeout(() => {
    
            mask.classList.add('_hidden');
            setTimeout(() => {
    
                body.classList.add('_ready');
                DOMReady();
            }, 1000);
        }, 2000);
    });

    function percentsProcess () {

        let i = 0;

        function percentsAdding () {

            if (i < 100) {

                i++;
                percents.innerHTML = i + '%';
                
            } else {

                clearInterval(intervalId);
            }

            if (i > 90) {
                
                for (const item of animationPreloaderItems) {
                    
                    item.classList.add('_active');
                }
            } 
        }

        let intervalId = setInterval(percentsAdding, 1);
    };

    percentsProcess();
});