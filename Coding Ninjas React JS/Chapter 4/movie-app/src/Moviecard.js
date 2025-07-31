const { Component } = require("react");


class MovieCard extends Component{

    


    

  

   


//  <MovieCard movies = {ele} addStars = {this.props.handleIncStar} decStars = {this.props.handleDecStar} key={ele.id}/>

    render(){
        const {title,plot,price,rating,star,fav,isInCart} = this.props.movies;
      
        return (
            <>
                <div className="main">
                    <div className="movie-card">
                        <div className="left">
                            <img alt="Poster" src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'/>
                        </div>
                         <div className="right">
                                <div className="title">
                                        {title}
                                </div>
                                <div className="plot">
                                        {plot}
                                </div>
                                <div className="price">
                                        {price}
                                </div>

                                <div className="footer">
                                    <div className="rating">{rating}</div>
                                    <div className="star-dis">
                                         <img className="str-btn" 
                                             alt="Decrease" 
                                             src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"  onClick={()=>{this.props.decStars(this.props.movies)}}
                                            />
                                        <img className="stars" 
                                             alt="stars" 
                                             src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"    
                                            />
                                            <img className="str-btn" 
                                                alt="increase" 
                                                src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" onClick={()=>{
                                                   this.props.addStars(this.props.movies)
                                                }}
                                            />
                                            <span className="starCount">{star}</span>
                                 
                                    </div>
                                    {fav ?  <button className="favourite-btn" onClick={()=>{this.props.handleFav(this.props.movies)}}>Favourite</button> : <button className="unfavourite-btn"  onClick={()=>{this.props.handleFav(this.props.movies)}}>Un-favourite</button>}

                                    {isInCart ?  <button className="unfavourite-btn" onClick={()=>{this.props.handleCart(this.props.movies)}}>Remove Item From Cart</button> : <button className="cart-btn"  onClick={()=>{this.props.handleCart(this.props.movies)}}>Add to cart</button>}
                                   
                                    
                                    
                                </div>
                        </div>  

                    </div>
                </div>
            </>
        )
    }
}

export {MovieCard};