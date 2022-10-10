import React, { Component} from "react";


import PortfolioItem from "./portfolio-item";



export default class PortfolioContainer extends Component{
    
    constructor() {
        super();
        


        this.state = {
            pageTitle:"Welcome to my Portfolio",
            isLoading: false,
            data:[
               
                {title:"Quip", catergory: "eCommerce"},
                {title:"Eventbrite", catergory:"Scheduling"},
                {title:"Ministry Safe",catergory: "eCommerce"}, 
                {title:"SwingAway", catergory:"Enterprise"}
            ]
        }
        
        this.handleFilter = this.handleFilter.bind(this);
    }
    // filter
    handleFilter(filter) {

        this.setState({
            data:this.state.data.filter(item => {
                return item.catergory === filter;
            })
        })
        
    }

    portfolioItems(){

        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"}/>; 
        });
    }

    // added buttons
    render(){
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }
        return(
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={()=> this.handleFilter('eCommerce')}>
                    eCommerce
                    </button>
                <button onClick={()=> this.handleFilter('Scheduling')}>
                    Scheduling
                    </button>
                <button onClick={()=> this.handleFilter('Enterprise')}>
                    Enterprise
                    </button>

              {this.portfolioItems()}
             
            </div>
        )
    }
}