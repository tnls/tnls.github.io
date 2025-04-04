window.onload = function() {
    // 检测移动设备并调整布局
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.body.classList.add('mobile-device');
        // 可以在这里添加其他移动端特定的调整
    }
};