import styles from './CategoryCarousel.module.scss';
import CategoryCard from "./CategoryCard";
import categories from "./database/category";

let counter = 0;

function move(directin = 0) {
  let wrapper = document.getElementById("wrap1");  
  let btnLeft = document.getElementById("btnLeft"); 
  let btnRight = document.getElementById("btnRight");

  let maxLength = wrapper.scrollWidth;
  let countInnerItem = wrapper.children.length;
  let wrapLength = wrapper.offsetWidth;

  let step = maxLength / countInnerItem;
  let countInWrap = Math.round(wrapLength / step);
  counter = counter + directin;

  if (counter === 0) {
    btnLeft.style.setProperty("display", "none");
  }
  else {
    btnLeft.style.setProperty("display", "block");
  }


  if (counter === countInnerItem - countInWrap) {
    btnRight.style.setProperty("display", "none");
  }
  else {
    btnRight.style.setProperty("display", "block");
  }
  wrapper.style.setProperty("margin-left", -(step * counter) + "px");

}

const onRight = () => {
  move(1);
}
const onLeft = () => {
  move(-1);
}

function MyCarousel() {
  return (
    <div className={styles.carouselContainer} id="container1">
      <div className={styles.left} onClick={onLeft} id = "btnLeft"></div>
      <div className={styles.right} onClick={onRight} id = "btnRight"></div>
      <div className={styles.wrap} id="wrap1">
        {
          categories.map(category=> <CategoryCard image={category.image} title={category.name} />)
        }
      </div>
    </div>
  )
}

export default MyCarousel;