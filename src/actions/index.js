export function selectBook(book) {
    //SelectBook is an ActionCreator, it needs to return an action
    //an object with a type propertly
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}
