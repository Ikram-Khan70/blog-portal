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
    {author:"Misaq Aziz", category:"Foods", image:"./hyderabad-biryani.jpg", title:"Hyderabadi Biryani", link: "https://en.wikipedia.org/wiki/Hyderabadi_biryani"},
    {author:"Rizwan khan", category:"Foods", image:"./img.5.jfif", title:"Human resource", link: "https://en.wikipedia.org/wiki/Human_resources"},
    {author:"Misaq Aziz", category:"Foods", image:"./hyderabad-biryani.jpg", title:"Hyderabadi Biryani", link: "#"},
    {author:"Ikram khan", category:"Education", image:"./hyderabad-biryani.jpg", title:"Hyderabadi Biryani", link: "#"},
    {author:"Misaq Aziz", category:"Technologies", image:"./hyderabad-biryani.jpg", title:"Hyderabadi Biryani", link: "#"},
    {
      author: "Alice Doe",
      category: "Technology",
      title: "The Future of AI",
      image: "./img.1.jfif", // Add your image path here
      content: "A deep dive into AI and its future implications.",
      topicImage: "AI Technology", // Add your topic image here
      link: "https://en.wikipedia.org/wiki/Artificial_intelligence"
    },
    {
      author: "Bob Smith",
      category: "Adventure",
      title: "Exploring the Himalayas",
      image: "./img.2.jfif",
      content: "A journey through the snow-capped peaks of the Himalayas.",
      topicImage: "assets/adventure-topic.jpg",
      link: "#"
    },
    {
      author: "Charlie Brown",
      category: "Technology",
      title: "Blockchain: Beyond Cryptocurrency",
      image: "./img.4.jfif",
      content: "An exploration of how blockchain technology is changing the world.",
      topicImage: "assets/blockchain-topic.jpg",
      link: "#"
    },
    {
      author: "David Clark",
      category: "Adventure",
      title: "Desert Expeditions",
      image: "./img.3.jfif",
      content: "Discover the thrill of desert adventures and what it takes to survive.",
      topicImage: "./img.1.jfif",
      link: "#" 
    }
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

