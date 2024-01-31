var openw = false;
function list() {
  if (openw == true) {
    document.getElementById("barr").style.display = "none";
    openw = false
  } else {
    document.getElementById("barr").style.display = "block";
    openw = true
  }
}

function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // 添加前导零
  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');

  const currentTime = `${hours}:${minutes}:${seconds}`;

  // 更新页面上的时间显示
  document.getElementById('clock').innerHTML = currentTime;
}
updateTime()
// 每秒钟更新一次时间
setInterval(updateTime, 1000);

const DownloadBtn = document.getElementById("DownloadBtn");
DownloadBtn.onclick = function () {
};


window.onscroll = function () {
  var scrollTop = document.documentElement.scrollTop;
  if (scrollTop < 4648) {
    document.getElementById("innerr").style.left =
      (scrollTop - 840) * -1 + "px";
    // console.log((scrollTop - 840) * -1);
  }
};
