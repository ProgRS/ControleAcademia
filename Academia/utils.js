module.exports = {
    age: function(timestamp) { 
    const today = new Date()
    const birthDate = new Date(timestamp)

    // 2019 - 1984
    let age = today.getFullYear() - birthDate.getFullYear()
    const month = today.getMonth() - birthDate.getMonth()

    //today.getDate()
   //birthDate.getDate()

    if (month < 0 ||
       month == 0 && 
       today.getDate() < birthDate.getDate()) {
        age = age -1
    }

    return age
},
    date: function(timestamp){
        const date = new Date(timestamp)

        // yyyy
        const year = date.getUTCFullYear()

        //mm
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)

        // dd
        const day = `0${date.getUTCDate()}`.slice(-2)
        //return yyyy-mm-dd
        return {
           day,
           month,
           year, 
           iso: `${year}-${month}-${day}`,
           birthDay: `${day}/${month}`
        }
    }
}

