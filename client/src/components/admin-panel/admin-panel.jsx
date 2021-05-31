import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AdminPanelToggle from '../admin-panel-toggle/admin-panel-toggle'
import { connect } from 'react-redux'
import './admin-panel.css'
import { isAdminToggledOn, isAdminToggledOff } from '../../actions'
import Button from '../common/button/button'

class AdminPanel extends Component {

    state = {
        isToggleOpen: false
    }

    toggleChange = () => {
        this.setState((state) => {
            return {
                isToggleOpen: !state.isToggleOpen
            }
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.isAdmin !== prevProps.isAdmin) {
            this.setState((state) => {
                return {
                    isToggleOpen: !state.isToggleOpen
                }
            })
        }
    }

    render() {
        const { isAdmin, isAdminToggledOn, isAdminToggledOff } = this.props

        const toggleItemsList = this.state.isToggleOpen
            ? <AdminPanelToggle isAdminToggledOn={isAdminToggledOn}
                isAdminToggledOff={isAdminToggledOff} />
            : null

        const buttonShow = this.state.isToggleOpen
            ? null
            : (!isAdmin)
                ? null
                : <Button type={"fa fa-plus"} />

        const listLabel = isAdmin ? ' вкл.' : ' выкл.'

        const caretView = this.state.isToggleOpen ? "fa fa-caret-up" : "fa fa-caret-down"

        return (
            <div className='admin-panel'>
                <div className='admin-info'>
                    Права администратора
                    <span onClick={this.toggleChange}>{listLabel}
                        <i className={caretView} /></span>
                    {toggleItemsList}
                </div>
                <div className='add-news-button'>
                    <Link to='/edit'>
                        {buttonShow}
                    </Link>
                </div>
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
