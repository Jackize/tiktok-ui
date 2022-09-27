import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ to, title, icon, activeIcon }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => cx('menu-item', { active: isActive })}
            children={({ isActive }) => {
                const iconCurrent = isActive ? activeIcon : icon;
                return (
                    <>
                        {iconCurrent}
                        <span className={cx('title')}>{title}</span>
                    </>
                );
            }}
        />
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default MenuItem;
