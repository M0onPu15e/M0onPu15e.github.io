// 防抖全局计时器
let TT = null; // 用于控制事件的触发

// 防抖函数：fn -> 需要防抖的逻辑函数，time -> 防抖时间（单位：毫秒）
function debounce(fn, time) {
    if (TT !== null) clearTimeout(TT); // 如果计时器存在，先清除
    TT = setTimeout(fn, time); // 设置新的计时器
}

// 复制提醒功能
document.addEventListener("copy", function () {
    debounce(function () {
        new Vue({
            data: function () {
                return {}; // Vue实例需要返回一个对象
            },
            mounted() { // 在Vue实例挂载后执行通知
                this.$notify({
                    title: "哎嘿！复制成功🍬",
                    message: "若要转载最好保留原文链接哦，给你一个大大的赞！",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "success",
                    duration: 5000
                });
            }
        });
    }, 300); // 防抖时间设置为300毫秒
});

// 动态标题（永远停留为“🐖抓到你啦～”）
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        // 离开当前页面时的标题
        document.title = '👀跑哪里去了~';
    } else {
        // 返回当前页面时的标题（永远停留）
        document.title = '🐖抓到你啦～';
    }
});