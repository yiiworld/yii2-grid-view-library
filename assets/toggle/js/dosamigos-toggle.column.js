/**
 * @copyright Copyright (c) 2013 2amigOS! Consulting Group LLC
 * @link http://2amigos.us
 * @license http://www.opensource.org/licenses/bsd-license.php New BSD License
 */
yii.toggleColumn = (function ($) {
    var pub = {
        onText: 'On',
        offText: 'Off',
        onTitle: 'On',
        offTitle: 'Off',
        registerHandler: function (grid, selector, cb) {
            $(document).on('click.toggleColumn', selector, function (e) {
                e.preventDefault();
                var $self = $(this);
                var url = $self.attr('href');
                $.ajax({
                    url: url,
                    dataType: 'json',
                    success: function (data) {
                        $self
                            .html(data.value ? pub.onText : pub.offText)
                            .attr('title', data.value ? pub.onTitle : pub.offTitle);
                        $.isFunction(cb) && cb(true, data);
                    },
                    error: function () {
                        $.isFunction(cb) && cb(false, data);
                    }
                });
                return false;
            });
        }
    };
    return pub;
})(jQuery);