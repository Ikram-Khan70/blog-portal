import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  current_selection = "All";
  category_list: string[] = ["All"];
  raw_data = [
    {author:"Misaq Aziz", category:"Foods", image:"./hyderabad-biryani.jpg", title:"Hyderabadi Biryani"},
    {author:"Rizwan khan", category:"Foods", image:"./hyderabad-biryani.jpg", title:"Hyderabadi Biryani"},
    {author:"Misaq Aziz", category:"Foods", image:"./hyderabad-biryani.jpg", title:"Hyderabadi Biryani"},
    {author:"Ikram khan", category:"Education", image:"./hyderabad-biryani.jpg", title:"Hyderabadi Biryani"},
    {author:"Misaq Aziz", category:"Technologies", image:"./hyderabad-biryani.jpg", title:"Hyderabadi Biryani"},
  ];
  filtered_data: any[] = [];
  
  constructor() {
    const uniqueCategories = [...new Set(this.raw_data.map(item => item.category))];
    this.category_list = ['All', ...uniqueCategories]; // Add 'All' as first option
  }

  ngOnInit(): void {
    this.load_data();
    // this.category_list = this.raw_data.
  }

  load_data(): void {
    if(this.current_selection != "All"){
      this.filtered_data = this.raw_data.filter(each => { return each.category === this.current_selection});
    }
    else{
      this.filtered_data = this.raw_data;
    }
    // console.log(this.filtered_data);
  }

  data_Onselection(category_selected: string): void {
    // console.log("Selected category: ",category_selected);
    this.current_selection = category_selected;
    this.load_data();
  }
 
}

