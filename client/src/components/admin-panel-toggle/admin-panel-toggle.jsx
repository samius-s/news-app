import React from 'react'
import './admin-panel-toggle.css'

const AdminPanelToggle = ({ isAdminToggledOn, isAdminToggledOff }) => {
    return (
        <div className='admin-toggle'>
            <div
                className='admin-toggle-item'
                onClick={isAdminToggledOn}
            >Включить</div>
            <div
                className='admin-toggle-item'
                onClick={isAdminToggledOff}
            >Выключить</div>
        </div>
    )
}

export default AdminPanelToggle