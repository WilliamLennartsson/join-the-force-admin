import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './DataTable.css'

import * as dataColumns from './dataColumns'
import * as mockData from './mockData'
// render: tags => (  -- Colored tags function --
//   <span>
//     {tags.map(tag => {
//       let color = tag.length > 5 ? 'geekblue' : 'green';
//       if (tag === 'loser') {
//         color = 'volcano';
//       }
//       return (
//         <Tag color={color} key={tag}>
//           {tag.toUpperCase()}
//         </Tag>
//       );
//     })}
//   </span>
// ),

const DataTableCell = ({ children }) => (
    <div className="DataTable_cell">{ children }</div>
  )
DataTableCell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}
DataTableCell.defaultProps = {
  children: <div />,
}

const DataTableRow = ({ children }) => (
    <div className="DataTable_row">
      { children }
    </div>
  )
DataTableRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}
DataTableRow.defaultProps = {
  children: <div />,
}

const DataTableGrid = ({ children }) => (
    <div className="DataTable_grid">
      { children }
    </div>
  )

DataTableGrid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}
DataTableGrid.defaultProps = {
  children: <div />,
}

const DataTableActionButtons = () => (
  <div className="DataTable_actionButtons">
    <div className="DataTables_actionButton_icon"> A </div>
    <div className="DataTables_actionButton_icon"> B </div>
  </div>
)

export default class DataTableComponent extends Component {
    isKeyProp(key) { return key === 'key' }

    renderGrid(dataSource, columns) {
      let rows = dataSource.map((data) => { // Loops data array
        const row = columns.map((column) => { // Loops header fields
          const children = column.render === undefined ? ( // Check if there's a custom render
            <span className="DataTable_cellData">{data[column.dataIndex]}</span> // If not. Render data
          ) : (column.render(data[column.dataIndex])) // Use custom render
          return <DataTableCell key={`${data.key} ${column.key}`}>{children}</DataTableCell> // Return cell
        })
        return (<DataTableRow key={data.key}>{row}</DataTableRow>) // Return row
      })
      // Uncomment this is you want empty cells
      // if (this.props.showGrid) {
      //   if (rows.length <= this.props.gridCount) { // Check if grid is full
      //     rows = this.renderEmptyGrid(rows, columns.length) // Adds empty cells
      //   }
      // }
      return <DataTableGrid>{ rows }</DataTableGrid> // Return full grid
    }

    renderHeaderRow(columns) {
      const headers = columns.map(column => (
        <div className="DataTable_headerCell" key={column.key}>
          <h4 className="DataTable_columnTitle">{column.title}</h4>
        </div>
      ))
      return (<div className="DataTable_headerRow">{ headers }</div>)
    }

    renderEmptyGrid(rows, columnsLen) {
      const rowsToAdd = this.props.gridCount - rows.length
      for (let i = 0; i < rowsToAdd; i += 1) {
        const row = []
        for (let j = 0; j < columnsLen; j += 1) {
          row.push(<DataTableCell key={`EmptyCell${i} ${j} `} />)
        }
        rows.push(<DataTableRow key={`EmptyRow${i}`}>{row}</DataTableRow>)
      }
      return rows
    }

    render() {
      const { columns, dataSource, height } = this.props
        return (
          <div className="DataTable_wrapper">
            { this.renderHeaderRow(columns) }
            { this.renderGrid(dataSource, columns, height) }
          </div>
        )
    }
}

DataTableComponent.propTypes = {
  columns: PropTypes.array,
  dataSource: PropTypes.array,
  showGrid: PropTypes.bool,
  gridCount: PropTypes.number,
  height: PropTypes.number,
}

DataTableComponent.defaultProps = {
  columns: dataColumns.categoriesTableDataModel,
  dataSource: mockData.employeesMockData,
  showGrid: true,
  gridCount: 9,
  height: 500,
}
