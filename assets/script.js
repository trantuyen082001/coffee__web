
//  for header 

$(document).ready(function () {
    $(window).scroll(function() {
        if($(this).scrollTop()) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    })
})


//  for slider - number 
const counters = document.querySelectorAll('.number');
console.log(counters)

counters.forEach(counter => {
    counter.innerText = '0';

    const upDateCounters = () => {
        const target = +counter.getAttribute('data-number');
        const c = counter.innerText;
        const increment = target / 100;

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(upDateCounters, 100);
        } else {
            counter.innerText = target;
        }
    }
    upDateCounters();
});