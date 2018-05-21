let isMenuOpen = false;
let currentPage = 1;

window.onload=function(){
    (function(d){
     var
     ce=function(e,n){var a=document.createEvent("CustomEvent");a.initCustomEvent(n,true,true,e.target);e.target.dispatchEvent(a);a=null;return false},
     nm=true,sp={x:0,y:0},ep={x:0,y:0},
     touch={
      touchstart:function(e){sp={x:e.touches[0].pageX,y:e.touches[0].pageY}},
      touchmove:function(e){nm=false;ep={x:e.touches[0].pageX,y:e.touches[0].pageY}},
      touchend:function(e){if(nm){ce(e,'fc')}else{var x=ep.x-sp.x,xr=Math.abs(x),y=ep.y-sp.y,yr=Math.abs(y);if(Math.max(xr,yr)>20){ce(e,(xr>yr?(x<0?'swl':'swr'):(y<0?'swu':'swd')))}};nm=true},
      touchcancel:function(e){nm=false}
     };
     for(var a in touch){d.addEventListener(a,touch[a],false);}
    })(document);

    var nextPage = () => {
        switchPage(-1);
    }

    var prevPage = () => {
        switchPage(1);
    }
    

    

    let pages = document.getElementsByClassName('page');
    // let pages = document.getElementById('slide');
    // pages.addEventListener('swl', prevPage, false);
    // pages.addEventListener('swr', nextPage, false);
    // console.log(pages);

    for(let i = 0; i < pages.length; i++) {
        pages[i].addEventListener('swl', prevPage, false);
        pages[i].addEventListener('swr', nextPage, false);
    }

   
}

function switchPage(increment) {
        
        
    
    let wrapper = document.getElementById('slide');
    let progressIndicator = document.getElementById('progressIndicator');

    const newPage  = currentPage + increment;
    const newProgressPosition = (newPage - 1) * 25;

    let oldLinkElement = document.getElementsByClassName('current-link');
    let newLinkElement = document.getElementsByClassName('navLink' + newPage);

        // refactor this, starting to get repeated code
    if (newPage === 1) {
        wrapper.style.left = '0';
        currentPage = 1;
        progressIndicator.style.marginLeft = newProgressPosition + '%';
        oldLinkElement[0].classList.remove('current-link');
        newLinkElement[0].classList.add('current-link');

    } else if (newPage < 5 && newPage > 0) {
        const leftValue = '-' + (newPage -1) + '00%';
        wrapper.style.left = leftValue;
        currentPage = newPage;
        progressIndicator.style.marginLeft = newProgressPosition + '%';
        oldLinkElement[0].classList.remove('current-link');
        newLinkElement[0].classList.add('current-link');
    }


    
    
}

function goToPage(page) {
    let increment = page - currentPage;
    switchPage(increment);
    closeMenu();
}


    function toggleMenu() {
        let nav = document.getElementById('nav');
        if (isMenuOpen) {
            nav.classList.remove('menu-open');
        } else {
            nav.classList.add('menu-open');
        }
        isMenuOpen = !isMenuOpen;
    }

function closeMenu() {
    let nav = document.getElementById('nav');
    if (isMenuOpen) {
        nav.classList.remove('menu-open');
    }
}
    




