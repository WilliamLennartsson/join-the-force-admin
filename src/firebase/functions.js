import { auth, db } from './config'

import { setSubmissions, setSubmissionsError } from '../redux/actions/dataActions'


// AUTH 

export const createAccount = async (email, password) => {
    const user = await auth.createUserWithEmailAndPassword(email, password).catch(function (error) {
        console.log('error creating new account.. error.code: ', error.code)
        console.log('error.message: ', error.message)
        return { error: error.code, message: error.message }
    });
    return user
}

export const signIn = async (email, password) => {
    const user = await auth.signInWithEmailAndPassword(email, password).catch(function (error) {
        console.log('error signing in.. error.code: ', error.code)
        console.log('error.message: ', error.message)
        return { error: error.code, message: error.message }
    })
    return user
}

// AUTH -- END --


export const getAllSubmissions = () => {
    return (dispatch) => {
        var ref = db.collection("submissions");
        ref.get().then(function (querySnapshot) {
            const submissions = []
            querySnapshot.forEach(function (doc) {
                console.log(doc.id, " => ", doc.data());
                const submission = doc.data()
                const id = doc.id
                submission.key = id
                submissions.push(submission)
            });
            dispatch(setSubmissions(submissions))
        });
    }
}




// READ

// export const getCategories = () => {
//     const ref = db.ref('categories');
//     return dispatch => {
//         ref.once('value').then(snapshot => {
//             const keys = snapshot.val()
//             for (const key in keys){
//                 keys[key].key = key // Lol på denna
//             }
//             dispatch(addCategories(keys))
//         }).catch(err => {
//             console.log('error fetching categories from fb: ', err)
//         }) 
//     }
// }

// export const getQuestionsForCategory = (categoryId) => {
//     const ref = db.ref('questions/').child(categoryId)
//     return dispatch => {
//         ref.once('value').then(snapshot => {
//             let data = snapshot.val()
//             if (!data) return
//             if (data.category && data.version) {
//                 const { category, version } = data
//                 delete data.category
//                 delete data.version
//                 const items = Object.values(data)
//                 const questions = items.map((item, index) => {
//                     item.key = `${item.question} ${index}`
//                     return item
//                 })
//                 console.log(category, version, data)
//                 console.log("-- Items: ", items)
//                 dispatch(addQuestionsToCategory(category, questions, version))
//             }
//         }).catch(error => {
//             console.log("Error getting questions for category: ", error)
//         })
//     }
// }

// // READ -- END --



// // WRITE

// export const addCategory = (category) => {
//     return dispatch => {
//         db.ref('categories/' + category).set({
//             id: category,
//             name: category,
//             locked: true,
//             published: false,
//             imgURL: '',
//             version: 1
//         })
//         // db.ref('questions/' + category).set({
//         //     version: 1
//         // })
//     }
// }

// export const addQuestion = (questionObj) => {
//     const categoryId = questionObj.category
//     return dispatch => {
//         // reuse ref..
//         db.ref('questions/' + categoryId).push().then(snapshot => {
//             const questionId = snapshot.key
//             db.ref('questions/' + categoryId + '/' + questionId).update({
//                 question: questionObj.question,
//                 imgURL: '',
//                 answers: questionObj.answers,
//                 correctAnswer: questionObj.answers[questionObj.correctAnswerIndex],
//                 questionId: questionId
//             }).then(() => {
//                 dispatch(updateCategoryVersion(categoryId))
//             }).catch(err => {
//                 console.log("Error adding question: ", err)
//             })
//         })
//     }
// }

// export const updateQuestion = (questionId) => {

// }

// export const updateCategoryVersion = (categoryId) => {
//     const ref = db.ref('categories/' + categoryId)
//     return dispatch => {
//         ref.child('version').once('value').then(snapshot => {
//             const currentVersion = snapshot.val()
//             if (currentVersion != null) {
//                 const newVersion = snapshot.val() + 1
//                 ref.update({ version: newVersion }) 
//             } else {
//                 ref.update({ version: 1, category: categoryId })
//             }
//         }).catch(err => {
//             console.log("Error updating category version: ", err)
//         })
//     }
// }


// export const publishCategory = (categoryId) => {
//     return dispatch => {
//         db.ref('categories/' + categoryId).update({
//             published: true
//         }).catch(err => {
//             console.log('Error publishing category: ', err)
//         })
//     }
// }

// WRITE -- END --

// levelId: 0,
//             question: 'What is 2 + 2',
//             image: '',
//             correctAnswer: '4',
//             answers: [
//                 '2',
//                 '4',
//                 '5',
//                 '8'
//             ]
//         },