import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})

export class AppointmentListComponent implements OnInit {
  
  // appointment : string = "dog for a walk"   //appointment is a property because it is defined inside class hierarchy. not inside a function or a method. thst is why it is a property and not a variable
  newAppointmentTitle : string = "";
  newAppointmentDate : Date = new Date();
  appointments: Appointment[] = []
  
  ngOnInit(): void {

    let savedAppointments = localStorage.getItem("appointments");
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : []
  }

  addAppointment(){
    var count: number = 1;  //not working need to complete later
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newAppointment : Appointment = {
        id: count++,
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment);

      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();

      localStorage.setItem("appointments", JSON.stringify(this.appointments))

    }
  }

  deleteAppointment(index: number){
    this.appointments.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(this.appointments))
  }
  
}
