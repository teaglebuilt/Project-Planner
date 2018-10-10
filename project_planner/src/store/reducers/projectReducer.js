const initState = {
    projects: [
        {id: 1, title: 'Trainer-App', content: 'My first front-end project, using React.js and Firebase.'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.error)
            return state;
        default:
            return state;
    }
}


export default projectReducer;