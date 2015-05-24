/*! Author: github.com/fernandoporazzi */

;(function(window, document, undefined) {

  'use strict';

  var ThenAndNow = (function() {

    var thenAndNowHolders = document.querySelectorAll('.then-and-now'),
      holdersLength = thenAndNowHolders.length,
      i = 0,
      self,
      thenImage,
      nowImage,
      button;
    
    var resizeThenImage = function(e) {
      var pos = e.clientX - thenAndNowHolders[0].offsetLeft;

      if (pos > (thenAndNowHolders[0].clientWidth) ) {
        pos = thenAndNowHolders[0].clientWidth
      }

      if (pos < 0) {
        pos = 0;
      }

      console.log(pos);

      button.style.marginLeft = (pos - 15) + 'px';
      thenImage.style.width = pos + 'px';
    };

    var bindMouseDown = function(e, button) {
      window.addEventListener('mousemove', resizeThenImage, false);
    };

    var bindMouseUp = function() {
      window.removeEventListener('mousemove', resizeThenImage, false);
    }

    var bindDragEvent = function(button) {
      button.addEventListener('mousedown', bindMouseDown, false);

      window.addEventListener('mouseup', bindMouseUp, false);
    };

    var attachResizeButton = function(parent, index) {
      button = document.createElement('button');
      button.classList.add('draggable');
      button.setAttribute('id', 'draggable-' + index);
      button.style.marginLeft = (parent.clientWidth / 2 - 15) + 'px';
      button.style.marginTop = (parent.clientHeight / 2 - 15) + 'px';

      parent.appendChild(button);

      bindDragEvent(button);
    };

    var lookForInnerElements = function() {
      for (i = 0; i < holdersLength; i++) {
        self = thenAndNowHolders[i];

        attachResizeButton(self, i);

        thenImage = self.querySelector('.then-image');
      }
    };

    var init = function() {
      
      lookForInnerElements();
    };

    return {
      init: init
    }

  })();

  ThenAndNow.init();

})(window, document);