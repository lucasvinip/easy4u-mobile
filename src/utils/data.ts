export const pixData = {
  "reference_id": "ex-00001",
  "customer": {
    "name": "Matheus Siqueira Silva",
    "email": "email@test.com",
    "tax_id": "52816149838",
    "phones": [
      {
        "country": "55",
        "area": "11",
        "number": "999999999",
        "type": "MOBILE"
      }
    ]
  },
  "items": [
    {
      "name": "nome do item",
      "quantity": 1,
      "unit_amount": 500
    }
  ],
  "qr_codes": [
    {
      "amount": {
        "value": 500
      },
      "expiration_date": "2023-12-29T20:15:59-03:00"
    }
  ],
  "shipping": {
    "address": {
      "street": "Avenida Brigadeiro Faria Lima",
      "number": "1384",
      "complement": "apto 12",
      "locality": "Pinheiros",
      "city": "São Paulo",
      "region_code": "SP",
      "country": "BRA",
      "postal_code": "01452002"
    }
  },
  "notification_urls": [
    "https://meusite.com/notificacoes"
  ]
}
