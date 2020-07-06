window.addEventListener('load', function () {
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask ');
    var big = document.querySelector('.big ');
    // 当鼠标经过图片mask big出现
    preview_img.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    // 盒子移动
    preview_img.addEventListener('mousemove', function (e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var maskx = x - mask.offsetWidth / 2;
        var masky = y - mask.offsetHeight / 2;
        var maskmax = preview_img.offsetWidth - mask.offsetWidth;
        if (maskx <= 0) {
            maskx = 0;
        } else if (maskx >= maskmax) {
            maskx = preview_img.offsetWidth - mask.offsetWidth;
        }
        if (masky <= 0) {
            masky = 0;
        } else if (masky >= maskmax) {
            masky = preview_img.offsetHeight - mask.offsetHeight;
        }
        mask.style.left = maskx + 'px';
        mask.style.top = masky + 'px';
        // 大图移动距离
        var bigImg = document.querySelector('.bigImg');
        var maskmax = preview_img.offsetWidth - mask.offsetWidth;
        var bigMax = bigImg.offsetWidth - big.offsetWidth;
        var bigx = maskx * bigMax / maskmax;
        var bigy = masky * bigMax / maskmax;
        bigImg.style.left = -bigx + 'px';
        bigImg.style.top = -bigy + 'px';

    })



});