import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./index.css"

const Filter = () => {
   const [isShowFilter, clickArrow] = useState(false)
   const onClickArrow = () => {
    clickArrow(!isShowFilter)
   }
    return (
      <div className="fiter-container">
        <div className="customizable-heading-container">
          <input type="checkbox" htmlFor="customizable"/>
          <p id="customizable" className="filter-items-heading">CUSTOMIZABLE</p>
        </div>
        <hr className='horizontal-line'/>
        <div className="filter-item"> 
            <h1 className="filter-items-heading">IDEAL FOR </h1>
            <MdOutlineKeyboardArrowDown className="arrow-up-icon" onClick={onClickArrow}/>
        </div>
        <p className="all">All</p>
        {isShowFilter ? (
            <div>
                <p className="unselect">Unselect all</p>
                <div className="customizable-heading-container">
                    <input type="checkbox" htmlFor="men"/>
                    <p id="men" className="filter-by">Men</p>
                </div>
                <div className="customizable-heading-container">
                    <input type="checkbox" htmlFor='women'/>
                    <p id='women' className="filter-by">Women</p>
                </div>
                <div className="customizable-heading-container">
                    <input type="checkbox"htmlFor='baby' />
                    <p id='baby' className="filter-by">Baby & kids</p>
                </div>
            </div>

        ) : ("") }

        <hr className='horizontal-line'/>
        
        <div className="filter-item">
            <h1 className="filter-items-heading">OCCASION</h1>
            <MdOutlineKeyboardArrowDown />
        </div>
        <p>All</p>

        <hr className='horizontal-line'/>
        
        <div className="filter-item">
            <h1 className="filter-items-heading">WORK</h1>
            <MdOutlineKeyboardArrowDown />
        </div>
        <p>All</p>
        

        <hr className='horizontal-line'/>

        <div className="filter-item">
            <h1 className="filter-items-heading">FABRIC</h1>
            <MdOutlineKeyboardArrowDown />
        </div>
        <p>All</p>
        
        <hr className='horizontal-line'/>

        <div className="filter-item">
            <h1 className="filter-items-heading">SEGMENT</h1>
            <MdOutlineKeyboardArrowDown />
        </div>
        <p>All</p>
        
        <hr className='horizontal-line'/>
        
        <div className="filter-item">
            <h1 className="filter-items-heading">SUITABLE FOR</h1>
            <MdOutlineKeyboardArrowDown />
        </div>
        <p>All</p>
        
        <hr className='horizontal-line'/>

        <div className="filter-item">
            <h1 className="filter-items-heading">RAW MATERIALS</h1>
            <MdOutlineKeyboardArrowDown />
        </div>
        <p>All</p>

        <hr className='horizontal-line'/>

        <div className="filter-item">
            <h1 className="filter-items-heading">PATTERN</h1>
            <MdOutlineKeyboardArrowDown />
        </div>
        <p>All</p>

        <hr className='horizontal-line'/>

    </div>
    )
}

export default Filter