export default function(src, alt, title, price, dataset) {
  return `
        <img src="./assets/images/sliderKit/${src}" alt=${alt}>
        <div class="sliderKit__content">
            <h3>${title}</h3>
            <div>
                <button class="link"  data-card = ${dataset}>подробнее</button>
                <span>${price}</span>
            </div>
            <button class="btn-border data-callback">оформить заказ</button>
        </div>`;
}