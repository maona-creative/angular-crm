import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WelderformsService {


  constructor(private http: HttpClient) { }

  async submitWelderForms(formData: any): Promise<any> {
    try {
      const response = await fetch('http://localhost:3000/welders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

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
