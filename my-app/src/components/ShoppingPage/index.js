
import { Component } from 'react'
import Header from "../HeaderSection"
import Filter from "../Filter"
import FooterSection from '../FooterSection'
import ProductItem from "../ProductItem"
import {ThreeDots} from 'react-loader-spinner'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import './index.css'

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }

class ShoppingPage extends Component{
    state = {
      apiStatus: apiStatusConstants.initial,
      productsList: {},
      isShowFilter: false,
    }

    componentDidMount() {
      this.getProductData()
    }

       getProductData = async() => {
      this.setState({apiStatus: apiStatusConstants.inProgress})
      const apiUrl = "https://fakestoreapi.com/products"
      const options = {
        method: 'GET',
      }
      const response = await fetch(apiUrl, options)
      if (response.ok){
        const data = await response.json()
        
        this.setState({
            productsList: data,
            apiStatus: apiStatusConstants.success,
          })
      } else {
        this.setState({
          apiStatus: apiStatusConstants.failure,
        })
      }
    }
    
    onChangeFilterStatus = () => {
      this.setState(prevState=> ({isShowFilter: !prevState.isShowFilter}))
    }

    renderSuccessView = () => {
        const {productsList, isShowFilter} = this.state
            return (
                <div>
                    <Header />
                    <hr className='horizontal-line'/>
                    <div className='bg-container'>
                        <div className='heading-container'>
                          <h1 className='heading'>DISCOVER OUR PRODUCTS</h1>
                          <p className='description'>
                            Lorem ipsum dolor sit amet consectetur. 
                            Amet est posuere rhoncus <br /> scelerisque. 
                            Dolor integer scelerisque nibh amet mi ut elementum dolor.
                          </p>
                        </div>
                        <div className='filter-and-recommendetion-container'>
                          <div className='filter-container'>
                            <p className='total-items-number'>{productsList.length} ITEMS</p>
                            {
                                isShowFilter? (
                                    <div className='filter-state-button'>
                                      <MdOutlineKeyboardArrowLeft className='filter-status-icon' />
                                      <button  onClick={this.onChangeFilterStatus} type='button' className='filter-heading-button' >HIDE FILTER</button>
                                    </div>
                                ) : (
                                    <div className='filter-state-button' >
                                      <MdOutlineKeyboardArrowRight className='filter-status-icon' />
                                      <button  onClick={this.onChangeFilterStatus} type='button' className='filter-heading-button' >SHOW FILTER</button>
                                    </div>
                                )
                            }
                          </div>

                          <select id="filter" name="filter" className='recomendation-items-list'>
                            <option value="recommended" className='selected'>RECOMMENDED</option>
                            <option value="newestFirst" className='recommended-item'>NEWEST FIRST</option>
                            <option value="popular" className='recommended-item'>POPULAR</option>
                            <option value="priceHighToLow" className='recommended-item'>PRICE: HIGH TO LOW</option>
                            <option value="priceLowToHigh" className='recommended-item'>PRICE: LOW TO HIGH</option>
                          </select>
                        </div>
                        <div>
                          
                          <div className='main-container' >
                            
                              {isShowFilter ? <div className='filter'><Filter /> </div>: ""}
                            
                            <div className='products-list-container'>
                            {productsList.map(item => (
                                <ProductItem 
                                data =  {item} 
                                id = {item.id}
                                key={item.id}
                              />
                            ))}
                            </div>
                            
                            </div>
                          
                        </div>
                    </div>
                    <FooterSection />
                </div>
            )
    }

    renderFailureView = () => (
        <div className='failure-container'>
            <h1 className='failure-msg'>Products Not Found</h1>
        </div>
    )

    renderLoadingView = () =>(
      <div className="loader-container">
        <ThreeDots color="#0b69ff" height="50" width="50" />
      </div>
    )
    

    render() {
        const {apiStatus} = this.state
        switch (apiStatus) {
          case apiStatusConstants.success:
            return this.renderSuccessView()
          case apiStatusConstants.failure:
            return this.renderFailureView()
          case apiStatusConstants.inProgress:
            return this.renderLoadingView()
          default:
            return null
        }
      }

}

export default ShoppingPage