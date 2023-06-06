let marqueeIndex = 0;
setInterval(function(){marquee(1);}, 1000);
setInterval(clock, 1000);


function marquee(num) {
    const texts = [shoppingCart[1].name, shoppingCart[2].name, shoppingCart[3].name, shoppingCart[4].name];
    const textElement = document.getElementById('text');
    const image       = document.getElementById('image-container').getElementsByTagName('img')[0];

    marqueeIndex += num;

    if      (marqueeIndex < 0) marqueeIndex = 3;
    else if (marqueeIndex > 3) marqueeIndex = 0;

    image.src = `./img/marquee/img${marqueeIndex}.png`;
    textElement.textContent = texts[marqueeIndex];
} // changeImg()


function clock() {
    const clockElement = document.getElementById('clock');

    const now     = new Date(); // 取得當前時間
    const year    = now.getFullYear();
    const month   = padZero(now.getMonth() + 1); // 月份從 0 開始，所以要加 1
    const day     = padZero(now.getDate());
    const hours   = padZero(now.getHours());
    const minutes = padZero(now.getMinutes());
    const seconds = padZero(now.getSeconds());

    const formattedTime = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`; // 格式為 YYYY/MM/DD HH:MM:SS
    clockElement.textContent = formattedTime; // 更新時間元素的內容
} // clock()


function padZero(number) { // 輔助函數：如果數字小於 10，在前面補上零
    return number < 10 ? '0' + number : number;
} // padZero()