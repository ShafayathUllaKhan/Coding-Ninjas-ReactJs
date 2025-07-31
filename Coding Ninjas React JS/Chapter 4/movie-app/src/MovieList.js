import { Component } from "react";
import { MovieCard } from "./Moviecard";

export class MovieList extends Component{

    render(){
      let movies = this.props.movies;

          return (
            <>
        {movies.map((ele)=>(
           <MovieCard movies = {ele} addStars = {this.props.addStars} decStars = {this.props.decStars} handleFav = {this.props.handleFav} handleCart={this.props.handleCart} key={ele.id}/>
        ))}
        </>
    )
    }
}