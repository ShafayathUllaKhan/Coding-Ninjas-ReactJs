import React from "react";
import { MovieList } from "./MovieList.js";
import { Navbar } from "./Navbar.js";


class App extends React.Component {


  constructor(){
        super();
                 this.state = {
            movies : [
                {
                  id: 1,
                  title: 'The Avengers',                  
                  plot:
                    "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  rating: '8.0',            
                  price: 99,            
                  star: 0,
                  fav: false,
                  isInCart: false,
                                 
                },
                {
                  id: 2,
                  title: 'The Dark Knight',                  
                  plot:
                    'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',                  
                  rating: '9.0',            
                  price: 199,            
                  star: 0,            
                  fav: false,
                  isInCart: false,
                                         
                },
                {
                  id: 3,
                  title: 'Iron Man',                 
                  plot:
                    'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',                  
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',                  
                  rating: '7.9',            
                  price: 139,            
                  star: 0,            
                  fav: false,
                  isInCart: false,
                                       
                }],
                 cartCount : 0
        } 
       
    }

    handleIncStar = (movie)=>{
   
        const {movies} = this.state;

        const mid = movies.indexOf(movie);

        if(movies[mid].star >= 5){
            return;
        }
        movies[mid].star += 0.5;
        
        this.setState({
            movies : movies
        })

    }

    handleDecStar = (movie)=>{

        const {movies} = this.state;

        const mid = movies.indexOf(movie);

        if(movies[mid].star <= 0){
            return;
        }
        movies[mid].star -= 0.5;
        
        this.setState({
            movies : movies
        })

    }

     handleFav = (movie)=>{
 

      const movieIndex = this.state.movies.indexOf(movie);


        let movies = this.state.movies;

        movies[movieIndex].fav = !this.state.movies[movieIndex].fav;
        this.setState({
            movies : movies
        })
   
        
    }

    handleCart = (movie)=>{

       let movies =this.state.movies;
       const midIndex = this.state.movies.indexOf(movie);
       movies[midIndex].isInCart = !movies[midIndex].isInCart;
       let count = this.state.cartCount;
      if(movies[midIndex].isInCart){
        count+=1
      }else{
        count-=1
      }
        this.setState({
          movies : movies,
            cartCount : count
        })
        
    }



  render(){ 
    let movies = this.state.movies;


    return (
    <>
   <Navbar cartCount = {this.state.cartCount}/>
   <MovieList movies = {movies} addStars = {this.handleIncStar} decStars = {this.handleDecStar} handleFav = {this.handleFav} handleCart={this.handleCart}/>
   </>
  )}
}

export default App;
