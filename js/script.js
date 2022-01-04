$(function () {
    const
        $window = $(window),
        $logo = $(".header__logo"),
        $title = $(".header__title"),
        $burgerMenu = $(".burger-menu");
    const boundaryTitleY = 300, boundaryMenuY = 420;
    const jsClsName = "js-reverce-color";

    // ヘッダー内文字色の反転処理
    $(window).on("load scroll", function () {
        // キービジュアルの高さを超えたらロゴとタイトルの色を反転
        if ($logo.hasClass(jsClsName) && $window.scrollTop() <= boundaryTitleY) {
            $logo.removeClass(jsClsName);
            $title.removeClass(jsClsName);
        }
        if (!$logo.hasClass(jsClsName) && $window.scrollTop() > boundaryTitleY) {
            $logo.addClass(jsClsName);
            $title.addClass(jsClsName);
        }
        // キービジュアルの黒背景の高さを超えたらハンバーガーメニューの色を反転
        if ($burgerMenu.hasClass(jsClsName) && $window.scrollTop() <= boundaryMenuY) {
            $burgerMenu.removeClass(jsClsName);
        }
        if (!$burgerMenu.hasClass(jsClsName) && $window.scrollTop() > boundaryMenuY) {
            $burgerMenu.addClass(jsClsName);
        }
    });

    // ハンバーガーボタンのクリックイベント
    $("body").on("click", ".burger-menu", function () {
        $(".burger-menu, .burger-menu__lines, #overlay").toggleClass("open");
    });
});