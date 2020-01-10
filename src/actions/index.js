export const addFn = (leftValue, rightValue)  => ({
        type: 'addFn',
        data: parseInt(leftValue) + parseInt(rightValue)
})

export const subtractFn = (leftValue, rightValue)  => ({
        type: 'subtractFn',
        data: parseInt(leftValue) - parseInt(rightValue)
})

export const multiFn = (leftValue, rightValue) => ({
        type: 'multiFn',
        data:parseInt(leftValue) * parseInt(rightValue)
})

export const divisionFn = (leftValue, rightValue) => ({
        type: 'divisionFn',
        data:parseInt(leftValue) / parseInt(rightValue)
})

