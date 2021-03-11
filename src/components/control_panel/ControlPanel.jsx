import React from 'react'
import { useSelector } from 'react-redux';
import { AddMovie, MoviesTable, UpdateMovie } from '../../components'

const ControlPanel = () => {
    const editing = useSelector(state => state.movie.editing);
    return (
        <div className='row'>
            <div className='five columns'>
                {editing ? (<UpdateMovie />) : (<AddMovie />)}                
            </div>
            <div className='seven columns'>
                <MoviesTable />
            </div>
        </div>
    )
}

export default ControlPanel;
