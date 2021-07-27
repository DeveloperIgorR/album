
function createPages(totalPages,pageNumber,arr) {
    if (totalPages > 9) {
        if (pageNumber > 4) {
            arr.push(1)
            if (pageNumber >= totalPages - 3) {
                for (let i = totalPages - 3; i < totalPages; i++) {
                    arr.push(i)
                }
            } else {
                for (let i = pageNumber - 3; i <= pageNumber + 3; i++) {
                    arr.push(i)
                }
            }
        }
        else {
            for (let i = 1; i <= 9; i++) {
                arr.push(i)

            }
        }
    } else {
        for (let i = 1; i < totalPages; i++) {
            arr.push(i)
        }

    } arr.push(totalPages)
}
export default createPages