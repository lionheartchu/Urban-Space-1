document.addEventListener('DOMContentLoaded', function() {
    var head = document.querySelector('.head');
    var timeline = document.querySelector('.timeline');

    head.addEventListener('click', function() {
        if (timeline.style.opacity === '1') {
            timeline.style.opacity = '0';
        } else {
            timeline.style.opacity = '1';
        }
    });
})

document.addEventListener('DOMContentLoaded', function() {
    var branch1 = document.querySelector('.branch1');
    var img1 = document.querySelector('.img1');
    var branch1_1 = document.querySelector('.branch1-1')
    var branch1_2 = document.querySelector('.branch1-2')
    var branch1_3 = document.querySelector('.branch1-3')

    branch1.addEventListener('click', function() {
        img1.style.opacity = '1'
        branch1_1.style.opacity = '1'
        branch1_2.style.opacity = '1'
        branch1_3.style.opacity = '1'
    });
});
