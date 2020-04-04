import React, { useEffect } from 'react'
import './AdminDashboard.css'
import { useDispatch, useSelector } from 'react-redux'
import DataTable from '../components/DataTable'


import { getAllSubmissions } from '../firebase/functions'

export default function AdminDashboard() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllSubmissions())
    }, [])

    return (
        <div>
            <Panel />
            <DataTable />
        </div>
    )
}

const Panel = () => {
    return (
        <div className="Dashboard_panel_container">
            <div className="Dashboard_panel_section">
                <h3 className="Dashboard_panel_section_text">Info</h3>
            </div>
            <div className="Dashboard_panel_section">
                <h3 className="Dashboard_panel_section_text">Handle tests</h3>
            </div>
            <div className="Dashboard_panel_section">
                <h3 className="Dashboard_panel_section_text">Search: </h3>
                <input className="Dashboard_panel_search" />
            </div>
        </div>
    )
}
