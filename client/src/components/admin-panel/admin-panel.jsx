import React, { Component } from 'react'
import AdminPanelToggle from '../admin-panel-toggle/admin-panel-toggle'
import { connect } from 'react-redux'
import './admin-panel.css'
import { isAdminToggledOn, isAdminToggledOff } from '../../actions'

class AdminPanel extends Component {

    state = {
        isToggleOpen: true
    }

    toggleChange = () => {
        this.setState((state) => {
            return {
                isToggleOpen: !state.isToggleOpen
            }
        })
    }

    render() {

        const { isAdmin, isAdminToggledOn, isAdminToggledOff } = this.props

        const list = this.state.isToggleOpen
            ? <AdminPanelToggle isAdminToggledOn={isAdminToggledOn}
                isAdminToggledOff={isAdminToggledOff} />
            : null

        const listLabel = isAdmin ? 'Вкл.' : 'Выкл.'

        const caretView = this.state.isToggleOpen ? "fa fa-caret-up" : "fa fa-caret-down"

        return (
            <div className='admin-panel'>
                Права администратора {listLabel}
                <i className={caretView} onClick={this.toggleChange} />
                {list}
            </div>
        )
    }
}

const mapStateToProps = ({ isAdmin }) => {
    return { isAdmin }
}

const mapDispatchToProps = (dispatch) => {
    return {
        isAdminToggledOn: () => dispatch(isAdminToggledOn()),
        isAdminToggledOff: () => dispatch(isAdminToggledOff())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel)
