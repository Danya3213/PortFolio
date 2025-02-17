// function DOMReady () {
    
    const animItems = document.querySelectorAll("._anim-items");

    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {

        for (let i = 0; i < animItems.length; i++) {
    
            const animItem = animItems[i];
            const animItemHeight = animItem.scrollHeight;
            const animItemScroll = scroll(animItem).top;
            const animStart = 4;
    
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
    
            if (animItemHeight > window.innerHeight) {
    
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
    
            if ((scrollY > animItemScroll - animItemPoint) && scrollY < (animItemScroll + animItemHeight)) {
    
                animItem.classList.add('_active');
            }
    
            else {
    
                if(!animItem.classList.contains('_anim-no-hide')) {
    
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    
    function scroll(el) {
    
        const rect = el.getBoundingClientRect(),
            scrollTop = window.scrollY || document.documentElement.scrollTop;
    
        return {
    
            top: rect.top + scrollTop   
        }
    }

    setTimeout(() => {

        animOnScroll();
    
    }, 300);
// }