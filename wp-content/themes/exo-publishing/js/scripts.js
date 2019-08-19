;
(function($) {
    $(function() {

        // Mobile menu
        var openMenuClass = 'tweak-mobile-overlay-slide-origin-left is-mobile-overlay-active';
        var $body = $('body');
        var $menu = $('.Mobile-bar-menu');
        var $close = $('.Mobile-overlay-close');
        var $links = $('.Mobile-overlay-nav-item');

        $menu.click(function() {
            $body.addClass(openMenuClass);
        });

        $close.add($links).click(function() {
            $body.removeClass(openMenuClass);
        });

        // Cookie alert
        var $banner = $('.sqs-cookie-banner-v2');
        var $acceptBtn = $('.sqs-cookie-banner-v2-accept');
        var cookieValue = 'cookieAllowed=true';
        var cookieRegExp = new RegExp(cookieValue);
        var isAllowed = cookieRegExp.test(document.cookie);

        if (isAllowed) {
            $banner.hide();
        } else {
            $acceptBtn.click(function() {
                document.cookie = cookieValue;
                $banner.hide();
            });
        }
    });
})(jQuery);