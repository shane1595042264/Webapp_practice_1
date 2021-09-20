export default (posts = [], action) => {
    switch (action.tyoe) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}