import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-customers-detaills',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './customers-detaills.component.html',
  styleUrl: './customers-detaills.component.css'
})
export class CustomersDetaillsComponent {

  constructor(private route: ActivatedRoute, private customerService: CustomerService) {

  }

  customer: any;

  ngOnInit() {

    //pegar o id da url
    let id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {

      this.customer = this.customerService.getById(+id);

    }
  }

}
