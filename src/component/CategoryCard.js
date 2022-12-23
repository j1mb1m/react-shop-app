function CategoryCard(props) {
  return (
    <div className="cardItem">
      <div className="img"  style={{
        backgroundImage: `url(${props.image})`
      }}>
      </div>
      <p>{props.title}</p>
    </div>
  );
}

export default CategoryCard;
