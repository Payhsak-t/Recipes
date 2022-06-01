import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.card__body}>
        <img src={props.image} alt="recipe" className={classes.card__img} />
        <h2 title={props.title} className={classes.card__title}>
          {props.title}
        </h2>
      </div>
      <button className={classes.card__btn}>View Recipe</button>
    </div>
  );
};
export default Card;
