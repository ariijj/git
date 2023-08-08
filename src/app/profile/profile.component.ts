import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentStudent: any;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.currentStudent = this.storageService.getUser();
  }
}