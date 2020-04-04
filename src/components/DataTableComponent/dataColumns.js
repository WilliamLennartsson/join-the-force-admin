import React from 'react'
import PropTypes from 'prop-types'
import './DataTable.css'

const DataTableActionButtons = () => (
  <div className="DataTable_actionButtons">
    <div className="DataTables_actionButton_icon"> A </div>
    <div className="DataTables_actionButton_icon"> B </div>
  </div>
)

const Tag = ({ name }) => (
  <div className="DataTable_tag">
    {name}
  </div>
)
Tag.propTypes = {
  name: PropTypes.string,
}
Tag.defaultProps = {
  name: '',
}

export const ICEColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Phone number',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
    render: location => {
      return (
        <div>
          <span>{location.city}, </span>
          <span>{location.country}</span>
        </div>
      )
    }
  },
  {
    title: 'Availabillity',
    dataIndex: 'availabillity',
    key: 'availabillity',
  },
  {
    title: 'Completed Tests',
    dataIndex: 'testsCompleted',
    key: 'testsCompleted',
  },
  {
    title: 'Preferred Tasks',
    dataIndex: 'preferredTasks',
    key: 'preferredTasks',
  },
]

// {
//   title: 'Answers',
//     dataIndex: 'answers',
//       key: 'answers',
//         render: items => (
//           items.map(item => (
//             <Tag key={`tagId: ${item}`} name={item} />
//           ))
//         ),
//   },

export const ICEMockData = [
  {
    key: '1',
    id: 4813,
    question: '4 + 4',
    answers: ['3', '2', '1', '8'],
  },
  {
    key: '2',
    id: 4197172,
    question: 'Vad är en tiger?',
    answers: ['Ett djur', 'En bil', 'Vet ej', 'Nått gött att käka'],
  },
]

export const questionTableDataModel = [
  {
    title: 'QuestionId',
    dataIndex: 'questionId',
    key: 'questionId',
  },
  {
    title: 'Question',
    dataIndex: 'question',
    key: 'question',
  },
  {
    title: 'Answers',
    dataIndex: 'answers',
    key: 'answers',
    render: items => (
      items.map(item => (
        <Tag key={`tagId: ${item}`} name={item} />
      ))
    ),
  },
  {
    title: 'CorrectAnswer',
    dataIndex: 'correctAnswer',
    key: 'correctAnswer',
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: () => (
      <DataTableActionButtons />
    ),
  }
]

export const categoriesTableDataModel = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'Locked',
    dataIndex: 'locked',
    key: 'locked',
    render: (isPublished) => {
      return isPublished ? <p>Yes</p> : <p>No</p>
    }
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Published',
    dataIndex: 'published',
    key: 'published',
    render: (isPublished) => {
      return isPublished ? <p>Yes</p> : <p>No</p>
    }
  },
  {
    title: 'Image',
    dataIndex: 'imgURL',
    key: 'image'
  },
]
