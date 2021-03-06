import React, {Component} from 'react';
import {Link} from "react-router-dom";

class SingleRecipe extends Component {
    constructor(props) {
        super(props);
        const id = this.props.match.params.id;
        this.state = {
            recipe:{ },
            id,
            loading: true
        }
    }
    async componentDidMount() {
     const url=`https://forkify-api.herokuapp.com/api/get?rId=${this.state.id}`;
     try {
         const response = await fetch(url);
         const responseData = await response.json()
         this.setState({
             recipe:responseData.recipe,
             loading:false
         })
        }catch(error){
         console.log(error);
     }
    }
    render() {
    const { image_url,ingredients,publisher,source_url,title,publisher_url}=this.state.recipe;
    if (this.state.loading){
        return (
            <div className="container">
                <div className="row">
                    <div className=" col-10 mx-auto col-md-6 my-3">
                        <h2 className="text-uppercase text-center " style={{color:"#f15025"}}>
                            loading recipe....
                        </h2>
                    </div>
                </div>

            </div>
        );
    }
       return (
           <div className=" container my-5" >
               <div className="row">
                   <div className="col-10 mx-auto col-md-6 my-3">
                       <Link to="/recipes" className="btn btn-warning mb-5 text-capitalize">
                            back to recipes list
                       </Link>
                       <img src={image_url}
                       alt="recipe"
                       className="d-block w-100 image"
                       style={{maxHeight:"30rem"}}
                       />

                   </div>
                   <div className="col-10 mx-auto col-md-6 my-3">
                       <h6 className="text-uppercase">{title}</h6>
                       <h6 className="text-warning text-slanted text-capitalize"> provided by {publisher}</h6>
                       <a
                           href={publisher_url}
                           className="btn btn-primary mt-2 text-capitalize "
                           target="_blank"
                           rel="noopener noreferrer"
                       >publisher webpage </a>
                       <a
                           href={source_url}
                           className="btn btn-success mt-2 mx-2 text-capitalize margin_button"
                           target="_blank"
                           rel="noopener noreferrer"
                       >recipe url </a>
                       <ul className="list-group mt-4">
                           <h2 className="mt-3 mb-4"> Ingredients</h2>
                           {ingredients.map((item,index) => (
                               <li key={index} className="list-group-item text-slanted"> {item}</li>
                           ))}
                       </ul>
                   </div>

               </div>
           </div>
       )
    }

}

export default SingleRecipe;

