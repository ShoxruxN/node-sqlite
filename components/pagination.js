const Pagination = ( page, limit, data, category ) => {
    
    const startIndex = ( page - 1 ) * limit;
    const endIndex   = page * limit;

    let result = {};
    result.data = data.slice( startIndex, endIndex );
    result.paginationLimit = Math.ceil( data.length / limit );

    if ( endIndex < data.length ) {
        result.next = "/"+category+"/?page=" + ( page * 1 + 1 );
    }
    if ( startIndex > 0 ) {
        result.previous = "/"+category+"/?page=" + ( page * 1 - 1 );
    }

    return result;
}

module.exports = Pagination;