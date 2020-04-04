import React, { useState, useEffect } from 'react'
import DataTableComponent from './DataTableComponent'
import { useDispatch, useSelector } from 'react-redux'

// import { getQuestionsForCategory, addCategory } from '../firebase/functions'

import { ICEColumns, ICEMockData } from './DataTableComponent/dataColumns'



const DataTable = () => {
    const data = useSelector(state => state.data)

    useEffect(() => {
        // dispatch(getQuestionsForCategory('math'))
        // dispatch(addCategory('forestAnimals'))
        console.log('Data in useEffect: ', data)
    }, [data])

    return (
        <div>
            {(Object.keys(data.submissions).length > 0) && <DataTableComponent
                columns={ICEColumns}
                dataSource={Object.values(data.submissions)} />}

            {/* <DataTableComponent
                columns={ICEColumns}
                dataSource={ICEMockData} /> */}
        </div>
    )
}

export default DataTable
