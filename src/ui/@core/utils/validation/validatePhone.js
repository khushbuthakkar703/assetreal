const validatePhone = (phone) => {
    var phoneno = /^\d{11}$/

    return phone.match(phoneno)
}

export default validatePhone