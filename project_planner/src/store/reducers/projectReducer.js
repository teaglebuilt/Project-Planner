const initState = {
    projects: [

    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            break;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.error)
            return state;
        default:
            return state;
    }
}


export default projectReducer;