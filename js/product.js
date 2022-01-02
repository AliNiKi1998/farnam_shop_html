let form = document.querySelector('.comment-score');

form.addEventListener('click', function (e) {
    if (e.target.classList.contains('far')) {

        let count = e.target.classList[0].split('').slice(-1) - 1;

        let stars = e.target.parentElement;

        let star = stars.children;
        let i = 0;
        for (i; i <= count; i++) {
            star[i].classList.add('fas')
            star[i].classList.remove('far')
        }
        return;


    } if (e.target.classList.contains('fas')) {

        let count = e.target.classList[0].split('').slice(-1) - 1;

        let stars = e.target.parentElement;

        let star = stars.children;

        let i = 4;
        for (i; i >= count; i--) {
            
            star[i].classList.add('far')
            star[i].classList.remove('fas')
        }
        return;
    }
} , false)
