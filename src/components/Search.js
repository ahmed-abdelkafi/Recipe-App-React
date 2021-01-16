import React, {Component} from 'react';

class Search extends Component {
    render() {
        const { handleChange , handleSubmit , search} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                        <h1 className="text-slanted text-capitalize">
                            search recipes with <strong style={{color:"#f15025"}}>Recipes2Cook</strong>
                        </h1>

                <form >
                        <label htmlFor="search" className="text-capitalize">
                            types recipes separated by comma
                        </label>
                    <div className="input-group">
                        <input
                            type = "text"
                            name="search"
                            placeholder={"onion,tomato,chicken"}
                            value={search}
                            onChange={handleChange}
                            className="form-control"/>
                        <div className="input-group-append">


                                <button type="submit"
                                onClick={handleSubmit}
                                className={search.length>0 ? "input-group-text bg-primary text-white" : "input-group-text  text-white"}
                                 disabled={search.length>0 ? false:true}
                                >
                                <i className="fas fa-search"/>
                                </button>




                        </div>
                    </div>
                </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;