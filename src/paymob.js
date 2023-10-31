const API = 'ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2T1RBM056RXdMQ0p1WVcxbElqb2lhVzVwZEdsaGJDSjkuOW9BcFJ4c1JmQzBMUkJiVGhMcmtkUnF2em10WXdYZ0c3Z1AtM0VoVnR1cm1XTkNPamJ3aktHOFB6Y09kS21qbkNMd2NyYy1saHEyUmpMSFhWalc2eUE='  
const integrationID = 4234397;

async function firstStep (pay) {
    let data = {
        "api_key": API
    }

    let request = await fetch('https://accept.paymob.com/api/auth/tokens' , {
        method : 'post',
        headers : {'Content-Type' : 'application/json'} ,
        body : JSON.stringify(data)
    })

    let response = await request.json()

    let token = response.token

     secondStep(token,pay)
}

async function secondStep (token,pay) {
    let data = {
        "auth_token":  token,
        "delivery_needed": "false",
        "amount_cents":(parseFloat(pay.priceAfter)*100).toFixed(0),
        "currency": "EGP",
        "items": [
            {
                "name": "ASC1515",
                "amount_cents": (parseFloat(pay.priceAfter)*100).toFixed(0),
                "description": "Smart Watch",
                "quantity": "1"
            },
        ],
    }

    let request = await fetch('https://accept.paymob.com/api/ecommerce/orders' , {
        method : 'post',
        headers : {'Content-Type' : 'application/json'} ,
        body : JSON.stringify(data)
    })

    let response = await request.json()
     
    let id = response.id
   
    thirdStep(token , id,pay)
}

async function thirdStep (token , id,pay) {
    let data = {
        "auth_token": token,
        "amount_cents":(parseFloat(pay.priceAfter)*100).toFixed(0), 
        "expiration": 3600, 
        "order_id": id,
        "billing_data": {
            "apartment": "803", 
            "email": "claudette09@exa.com", 
            "floor": "42", 
            "first_name": "Clifford", 
            "street": "Ethan Land", 
            "building": "8028", 
            "phone_number": "+86(8)9135210487", 
            "shipping_method": "PKG", 
            "postal_code": "01898", 
            "city": "Jaskolskiburgh", 
            "country": "CR", 
            "last_name": "Nicolas", 
            "state": "Utah"
          },
        "currency": "EGP", 
        "integration_id": integrationID
    }

    let request = await fetch('https://accept.paymob.com/api/acceptance/payment_keys' , {
        method : 'post',
        headers : {'Content-Type' : 'application/json'} ,
        body : JSON.stringify(data)
    })

    let response = await request.json()

    let TheToken = response.token
    cardPayment(TheToken)
}


async function cardPayment (token) {
    let iframURL = `https://accept.paymob.com/api/acceptance/iframes/789724?payment_token=${token}`
    window.location.replace(iframURL);
}

export default firstStep;