import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  private customers = [
    {id: 1, nome: 'Junior'},
    {id: 2, nome: 'Joao'},
    {id: 3, nome: 'Batista'}
  ]

  getCustomers() {
    return this.customers;
    
  }

  getById(id: number) {
    let costumer = this.customers.find(c => {
      return c.id === id;
    });

    return costumer;
  }
}
