import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FinmetalService {

  constructor(private http: HttpClient) { }

  async submitFinmetalForms(formData: any): Promise<any> {
    console.log('Submitting finmetal form data:', formData);
    try {
      const response = await fetch('http://localhost:3000/finmetals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return await response.json();
    } catch (error) {
      console.error('Error submitting form', error);
      throw error;
    }
  }




}
