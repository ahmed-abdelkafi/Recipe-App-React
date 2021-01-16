import React, {Component} from 'react';
import RecipeList from "../components/RecipeList";
import Search from "../components/Search";



class Recipes extends Component {
    constructor(props){
        super(props);
        this.getRecipes=this.getRecipes.bind(this);
    }
    state = {

        recipes :[],
        search:'',
        keyWord:"pizza",
        error:'',

    }
    async getRecipes(){
        const url= `https://forkify-api.herokuapp.com/api/search?q=${this.state.keyWord}`
        try {
            const data = await fetch(url);
            const dataJson = await data.json();
            if (dataJson.error === "Couldn't find recipe with that name. Please visit http://forkify-api.herokuapp.com/phrases.html for all available search queries") {
                this.setState({
                    error:"sorry but your search did not return any recipes, please try again or press search icon for the most popular recipes "
                });
            }

            else
            {
                this.setState({
                    recipes: dataJson.recipes,
                    error:''
                });
            }
            }catch(err){
            console.log(err);
        }
    }
    componentDidMount() {
        this.getRecipes();
    }

    handleChange = (e) => {
        this.setState({
            search :e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.search.length >0)
        {
            this.setState({
                keyWord:this.state.search,
                search:""},() =>this.getRecipes());
        }
    }
    render() {
        return (
            <div>
                <Search search={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                {this.state.error ?(<section>
                    <div className="row">
                        <h2 className="text-center text-uppercase mt-5 " style={{color:"#f15025"}}>{this.state.error}</h2>
                    </div>
                </section>):(<RecipeList recipes={this.state.recipes}/>)}


            </div>
        );
    }
}

export default Recipes;