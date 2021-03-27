const MVP = {};

MVP.View = function (rootObject) {
  let that = this;
  that.slider = document.createElement('div');
  that.slider.className = 'slider';

  that.thumb = document.createElement('div');
  that.thumb.className = 'thumb';

  rootObject.append(that.slider);
  that.slider.append(that.thumb);

  // Реагирование на событие мыши и отрисовка нового положения ползунка
  that.calcThumbPosition = function (event, slider, thumb) {
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

  // Парсинг всех слайдеров на странице и независимая работа каждого из них
  let sliderAll = document.querySelectorAll('.slider');
  for (let slider of sliderAll) {
    let thumb = slider.querySelector('.thumb');

    thumb.onmousedown = function (event) {
      that.calcThumbPosition(event, slider, thumb);
    }


    thumb.ondragstart = function () {
      return false;
    }
  }

}

MVP.Model = function () {

}

MVP.Presenter = function (model, view) {

}



$(document).ready(function () {
  var model = new MVP.Model();
  var view = new MVP.View($('<div/>').appendTo($("body")));
  var presenter = new MVP.Presenter(model, view);
});
$(document).ready(function () {
  var model = new MVP.Model();
  var view = new MVP.View($('<div/>').appendTo($("body")));
  var presenter = new MVP.Presenter(model, view);
});
