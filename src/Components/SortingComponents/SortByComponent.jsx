export const SortByComponent = ({sortBy, setSortBy}) => {

    if (sortBy === "votes") return(
        <>
        <label htmlFor="sortBy">Sort By: </label>
        <select onChange={ event => setSortBy(event.target.value) } name="" id="sortBy">
            <option label="Number of Votes" value="votes"> Number of Votes </option>
            <option label="Date Posted" value="created_at"> Date Posted</option>
            <option label="Number of Comments" value="comment_count"> Number of Comments </option>
        </select>
        </>
    )

    if (sortBy === "created_at") return(
        <>
        <label htmlFor="sortBy">Sort By: </label>
        <select onChange={ event => setSortBy(event.target.value) } name="" id="sortBy">
            <option label="Date Posted" value="created_at"> Date Posted</option>
            <option label="Number of Votes" value="votes"> Number of Votes </option>
            <option label="Number of Comments" value="comment_count"> Number of Comments </option>
        </select>
        </>
    )

    if (sortBy === "comment_count") return(
        <>
        <label htmlFor="sortBy">Sort By: </label>
        <select onChange={ event => setSortBy(event.target.value) } name="" id="sortBy">
            <option label="Number of Comments" value="comment_count"> Number of Comments </option>
            <option label="Number of Votes" value="votes"> Number of Votes </option>
            <option label="Date Posted" value="created_at"> Date Posted</option>
        </select>
        </>
    )
    
}