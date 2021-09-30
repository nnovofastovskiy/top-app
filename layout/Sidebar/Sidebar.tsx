import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import React, { useState } from 'react';
import { Rating } from '../../components/Rating/Rating';

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
    const [rating, setRating] = useState<number>(4);

    return (
        <div {...props}>
            Sidebar
            <Rating rating={rating} isEditable={true} setRating={setRating} />
        </div>
    );
};