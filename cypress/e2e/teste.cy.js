/// <reference types="cypress" />

describe('GET /productList', () => {

  it('Obter lista de produtos', () => {

    cy.request({
      url: 'https://automationexercise.com/api/productsList',
      method: 'GET',
      failOnStatusCode: false,
    }).then(response => {
      expect(response.status).to.eq(200)
    })
  })

  it('Consultar lista de produtos', () => {

    cy.request({
      url: 'https://automationexercise.com/api/productsList',
      method: 'POST',
      failOnStatusCode: false,
    }).then(response => {
      expect(response.status).to.eq(200)
      cy.log(JSON.stringify(response.body))
    })
  })

  it('Cadastrar novo usuário', () => {

    const newUser  = {
      name: 'Tarik Dimitri', 
      email: 'tarik@gmail.com', 
      password: 'pwd123', 
      title: 'Mr.',
      birth_date: 13, 
      birth_month: 'june', 
      birth_year: 1991, 
      firstname: 'TARIK', 
      lastname: 'FEITOSA', 
      company: 'BCODEX', 
      address1: 'rua deputado joaquim, 12,cabral', 
      country: 'Brasil', 
      zipcode: 80035120, 
      state: 'Amazonas', 
      city: 'Manaus', 
      mobile_number: 981702034
    }

    cy.request({
      url: 'https://automationexercise.com/api/createAccount',
      method: 'POST',
      failOnStatusCode: false,
    }).then(response => {
      expect(response.status).to.eq(200)
      cy.log(JSON.stringify(response.body))
    })
  })

  it('Deletar usuário cadastrado', () => {

    const user  = {
      email: 'tarik@gmail.com', 
      password: 'pwd123',
    }

    cy.request({
      url: 'https://automationexercise.com/api/deleteAccount',
      method: 'DELETE',
      failOnStatusCode: false,
    }).then(response => {
      expect(response.status).to.eq(200)
      cy.log(JSON.stringify(response.body))
    })
  })

  it('Deletar usuário cadastrado por email', () => {

    const user  = {
      email: 'tarik@gmail.com', 
    }

    const newUser  = {
      name: 'Tarik Dimitri', 
      email: 'tarik@gmail.com', 
      password: 'pwd123', 
      title: 'Mr.',
      birth_date: 13, 
      birth_month: 'june', 
      birth_year: 1991, 
      firstname: 'TARIK', 
      lastname: 'FEITOSA', 
      company: 'BCODEX', 
      address1: 'rua deputado joaquim, 12,cabral', 
      country: 'Brasil', 
      zipcode: 80035120, 
      state: 'Amazonas', 
      city: 'Manaus', 
      mobile_number: 981702034
    }

    cy.request({
      url: 'https://automationexercise.com/api/createAccount',
      method: 'POST',
      failOnStatusCode: false,
    }).then(response => {
      expect(response.status).to.eq(200)
    })

    cy.request({
      url: 'https://automationexercise.com/api/deleteAccount',
      method: 'DELETE',
      failOnStatusCode: false,
    }).then(response => {
      expect(response.status).to.eq(200)
      cy.log(JSON.stringify(response.body))
    })
  })

})