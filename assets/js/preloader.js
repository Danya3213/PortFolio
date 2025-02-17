document.addEventListener('DOMContentLoaded', () => {

    const mask = document.querySelector('#preloader');
    const body = document.querySelector('body');
    const percents = document.querySelector('#loaderPercents');
    
    window.addEventListener('load', () => {
    
        setTimeout(() => {
    
            mask.classList.add('_hidden');
            setTimeout(() => {
    
                body.classList.add('_ready');
                // DOMReady();
            }, 100);
        }, 2000);
    });

    function percentsProcess () {

        let i = 0;

        function percentsAdding () {

            if (i < 100) {

                i++;
                percents.innerHTML = i + '%';
                
            } else {

                setInterval (clearInterval);
                return (true);
            }
        }

        setInterval (percentsAdding, 1);
    };

    percentsProcess();
});