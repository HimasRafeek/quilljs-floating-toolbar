/* ========================================================================================
 * ----------------------------------------------------------------------------------------
 *  Author        : Himas Rafeek
 *  Framework     : Quill Js Floating Toolbar
 *  Description   : A floating toolbar for Quill.js
 *  Version       : 1.0.0
 *  Copyright     : 2024
 *  Github        : https://github.com/HimasRafeek/butterCake
 *  URI           : https://getButterCake.com
 *  Licence       : MIT - https://github.com/HimasRafeek/butterCake/blob/master/LICENSE
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
      var editorBounds = quill.scrollingContainer.getBoundingClientRect();
      var selectionMiddle = (bounds.left + bounds.right) / 2;
      var tooltipWidth = $toolbar.outerWidth();
      var tooltipHeight = $toolbar.outerHeight();

      let offset = 110;
      if (bounds.top < 60) {
        offset = 20;
      }

      // Calculate and set top position
      var topPosition = editorBounds.top + bounds.top - tooltipHeight - offset; // Extra 5px for margin above the tooltip
      topPosition = Math.max(5, topPosition); // Make sure the tooltip is not off the top of the editor

      // Calculate and set left position to center the tooltip over the selection
      var leftPosition = selectionMiddle - tooltipWidth / 2;
      leftPosition = Math.max(60, leftPosition); // Make sure the tooltip is not off the left of the editor
      leftPosition = Math.min(document.body.clientWidth - tooltipWidth - 5, leftPosition); // Right boundary

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