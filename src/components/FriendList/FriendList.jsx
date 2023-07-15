import PropTypes from 'prop-types';
import css from './FriendList.module.css'

export const FriendList=({friends})=>{
    return <ul className={css.friend_list}>
  {friends.map(({id,avatar,name,isOnline})=>(
    <li className={css.item} key={id}>
    <span className={css.status}>{isOnline}</span>
    <img className={css.avatar} src={avatar} alt={name} width="48" />
    <p className={css.name}>{name}</p>
  </li>
  ))}
  </ul>
};

FriendList.propTypes={
    friends:PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            avatar:PropTypes.string.isRequired,
            name:PropTypes.string.isRequired,
            isOnline:PropTypes.bool.isRequired,
        }),
    )
};