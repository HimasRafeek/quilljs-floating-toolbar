/* ========================================================================================
 * ----------------------------------------------------------------------------------------
 *  Author        : Himas Rafeek
 *  Framework     : Quill Js Floating Toolbar
 *  Description   : A floating toolbar for Quill.js
 *  Version       : 1.0.0
 *  Copyright     : 2024
 *  Github        : https://github.com/HimasRafeek/quilljs-floating-toolbar
 *  URI           : https://himasrafeek.com
 *  Licence       : MIT - https://github.com/HimasRafeek/quilljs-floating-toolbar/blob/master/LICENSE
 * ----------------------------------------------------------------------------------------
 * ========================================================================================
 */


(function ($) {
  $.fn.floatingToolbar = function (quill) {
    var $toolbar = this;
    var toolbarVisible = false;

    function showToolbar(range) {
      if (!range) return;
      toolbarVisible = true;
      var bounds = quill.getBounds(range.index, range.length);
      var editorBounds = quill.container.getBoundingClientRect();
      var selectionMiddle = (bounds.left + bounds.right) / 2;
      var tooltipWidth = $toolbar.outerWidth();
      var tooltipHeight = $toolbar.outerHeight();
      let offset = 110;
      if (bounds.top < 60) {
        offset = 20;
      }
      var topPosition = editorBounds.top + bounds.top - tooltipHeight - offset;
      topPosition = Math.max(5, topPosition);
      var leftPosition = selectionMiddle - tooltipWidth / 2;
      leftPosition = Math.max(60, leftPosition);
      leftPosition = Math.min(document.body.clientWidth - tooltipWidth - 5, leftPosition);
      $toolbar.css({
        top: topPosition + window.scrollY + 'px',
        left: leftPosition + window.scrollX + 'px',
        visibility: 'visible',
        display: 'block'
      });
    }

    function hideToolbar() {
      if (!toolbarVisible) return;
      $toolbar.hide();
      toolbarVisible = false;
    }

    function updateButtonState() {
      var formats = quill.getFormat();
      $toolbar.find('button').each(function () {
        var format = $(this).data('format');
        if (formats[format]) {
          $(this).addClass('active');
        } else {
          $(this).removeClass('active');
        }
      });
    }

    quill.on('selection-change', function (range) {
      if (range && range.length > 0) {
        showToolbar(range);
        updateButtonState();
      } else {
        hideToolbar();
      }
    });
    return $toolbar;
  };
})(jQuery);