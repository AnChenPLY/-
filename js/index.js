window.onload = function () {
    let mySwiper = new Swiper(".swiper-container",{
        autoplay: 2000,//自动播放2s
        disableOnInteraction: false,//手指触碰也不会暂停
        initialSlide: 0,//初始化swiper-pagination-bullet-active为第一个
        speed: 500,//slide滑块自动滑动时的持续时间，即slide开始滑动到滑动结束的时间
        observer: true,//启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
        observeParents: true,//将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
        grabCursor: true,//设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。（根据浏览器形状有所不同）
        loop: true,//循环
        pagination: '.swiper-pagination'
    })
}