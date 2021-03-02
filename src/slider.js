function runSlider() {
  let sliderAll = document.querySelectorAll('.slider');

  for (let slider of sliderAll) {
    let thumb = slider.querySelector('.thumb');

    thumb.onmousedown = function (event) {
      let shift = event.clientX - thumb.getBoundingClientRect().left;

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);


      function onMouseMove(event) {
        let thumbLeft = event.clientX - shift - slider.getBoundingClientRect().left;
        if (thumbLeft < 0) thumbLeft = 0;

        let rightEdge = slider.offsetWidth - thumb.offsetWidth;
        if (thumbLeft > rightEdge) {
          thumbLeft = rightEdge;
        }

        thumb.style.left = thumbLeft + 'px';
      }

      function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      }
    }


    thumb.ondragstart = function () {
      return false;
    }
  }
}

runSlider();