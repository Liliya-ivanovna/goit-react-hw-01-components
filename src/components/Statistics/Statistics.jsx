import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export const Statistics=({title,stats})=>{
    return (<section className={ css.statistics}>
   <h2 className={css.title}>{title}</h2>
  <ul className={css.stat_list}>
     {stats.map(({id,label,percentage})=>(
        <li key={id}className={css.item}>
       <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
        </li>   
     ))}
    </ul>
  </section>)
};

Statistics.propTypes={
    title: PropTypes.string.isRequired,
    stats:PropTypes.arrayOf(
       PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
       }) 
    ),
};
