export default function(id, alt, title, price) {
  return `
        <img src="./assets/images/sliderKit/kit${id}/slide0.jpg" alt=${alt}>
        <div class="sliderKit__content">
            <h3>${title}</h3>
            <div>
                <button class="link" data-card=${id}>подробнее</button>
                <span>${price}</span>
            </div>
            <button class="btn-border data-callback">оформить заказ</button>
        </div>`;
}